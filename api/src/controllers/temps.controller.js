
import { Temperaments } from "../models/Temperaments.js";

export const getTemps = async (req, res) => {
    try {
      const temperaments = await Temperaments.findAll();
      res.status(200).json(temperaments);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
}






