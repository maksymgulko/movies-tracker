import { initMongoConnections } from "./initMongoConnection.js";
import { setupServer } from "./server.js";

const bootstrap = async () => {
  initMongoConnections();
  setupServer();
};

bootstrap();
