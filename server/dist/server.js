"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
const config_1 = require("./config");
const startServer = async () => {
    try {
        app_1.default.listen(config_1.serverConfig.app.port, () => {
            console.log(`
                🚀 Server is running on port : ${config_1.serverConfig.app.port} and environment : ${config_1.serverConfig.app.env}`);
        });
    }
    catch (error) {
        console.error("❌ Unable to start the server : ", error);
        process.exit(1);
    }
};
startServer();
//# sourceMappingURL=server.js.map