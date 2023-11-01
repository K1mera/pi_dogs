import axios from "axios";
import { Dogs } from "../models/Dogs.js";
import { Temperaments } from "../models/Temperaments.js";

export const importDataFromAPI = async () => {
  try {
    // Check if the Dogs table is empty
    const checkDb = await Dogs.findAll();
    if (checkDb.length !== 0) {
      return checkDb;
    }

    // Fetch data from the API
    const response = await axios.get(
      "https://api.thedogapi.com/v1/breeds?limit=50"
    );
    const apiData = response.data;

    for (const apiDog of apiData) {
      const dogImg = await axios.get(
        `https://api.thedogapi.com/v1/images/${apiDog.reference_image_id}?limit=10?api_key=live_G0IzWQHcnbsgL945iTZiMWkutIoiuc1kfIPGDPzdMaKbd00WeyEFb9x3yqEDsASe`
      );
      const dogData = {
        name: apiDog.name,
        height: apiDog.height.metric,
        weight: apiDog.weight.metric,
        average_lifespan: apiDog.life_span,
        image: dogImg.data.url,
      };

      // Create or update the record in your database
      const [dog, created] = await Dogs.findOrCreate({
        where: { name: dogData.name },
        defaults: dogData,
      });

      if (!created) {
        // Dog already exists, you might want to update it if necessary
        await dog.update(dogData);
      }

      // Handle temperaments
      if (apiDog.temperament) {
        const temperamentNames = apiDog.temperament
          .split(",").slice(0, 3)
          .map((temperament) => temperament.trim());

        for (const temperamentName of temperamentNames) {
          const [temperament] = await Temperaments.findOrCreate({
            where: { name: temperamentName },
          });

          // Associate the temperament with the dog
          await dog.addTemperament(temperament);
        }
      }
    }
    console.log("filled up successfully");
  } catch (error) {
    console.error("Error importing data:", error);
    throw error; // Rethrow the error so that it can be handled elsewhere if needed
  }
};

export const getDogs = async (req, res) => {
  try {
    const dogs = await Dogs.findAll({
      include: {
        model: Temperaments,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    res.status(200).json(dogs);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
export const getDogByIdBreed = async (req, res) => {
  try {
    const id = req.params.id;
    const dogBreed = await Dogs.findByPk(id, {
      include: {
        model: Temperaments,
        attributes: ["name"],
        through: {
          attributes: [],
        },
    }});
    res.status(200).json(dogBreed);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getDogByBreedName = async (req, res) => {
  const name = req.query.name;
  if (!name) {
    return res.status(400).json({ message: "name is mandatory" });
  }
  try {
    const countryName = await getCountryByName(name);
    if (!countryName || countryName.length === 0) {
      res.status(404).json("Not countries found");
    }
    res.status(200).json(countryName);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const createDog = async (req, res) => {
  try {
    const { name, height, weight, average_lifespan, image, temperaments } = req.body;

    const newDog = await Dogs.create({
      name,
      height,
      weight,
      average_lifespan,
      image,
    });

    const temperamentUUIDs = await Temperaments.findAll({
      where: {
        name: temperaments,
      },
      attributes: ["id"],
    });

    // Extract the UUIDs from the result
    const temperamentIDs = temperamentUUIDs.map((temperament) => temperament.id);

    // Associate the new dog with the existing temperaments using the UUIDs
    await newDog.addTemperament(temperamentIDs);

    res.status(200).json(newDog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// export const getDogTemps = async ( req, res ) => {
//   const id = req.query.id;
//   try {
    
//   } catch (error) {
    
//   }
// }