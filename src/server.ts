import axios from "axios";
import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then((): void => {
    console.log("Server is running");

    const PORT: number = Number(process.env.PORT) || 3000;

    app.listen(PORT, () => {
      console.log("Servidor executando");

      setInterval(async () => {
        try {
          const url = "https://kimoveis-mow4.onrender.com";
          const res = await axios.get(url);
          console.log(`Auto-ping OK: ${res.status}`);
        } catch (error: any) {
          console.error("Erro no auto-ping:", error.message);
        }
      }, 5 * 60 * 1000);
    });
  })
  .catch((err: unknown): void => {
    console.error("Error during Data Source initialization", err);
  });
