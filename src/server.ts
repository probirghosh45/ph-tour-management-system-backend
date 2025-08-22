/* eslint-disable no-console */
import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ph-tour-management-system:xgfe3cJFWAJXVEAu@cluster0.rgora5h.mongodb.net/ph-tour-management-system?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("connected to DB!");

    server = app.listen(5000, () => {
      console.log("server is listening to port 5000");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
