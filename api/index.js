import server from "./src/server.js";
import { sequelize } from "./src/db.js"
import { importDataFromAPI } from "./src/controllers/dogs.controller.js";


const PORT = 3001


sequelize
  .sync({ alter: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Listening in port ${PORT}`);
      importDataFromAPI()
    });
  })
  .catch((err) => console.log(err));
