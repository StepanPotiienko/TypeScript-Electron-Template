import { app, ipcMain, BrowserWindow } from "electron";

let mainWindow: BrowserWindow;

app.on("ready", CreateWindow);

function CreateWindow(): void {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 900,
    webPreferences: {
      preload: __dirname + "/preload.js",
    },

    show: false,
  });

  mainWindow.loadFile("./index.html");
  mainWindow.on("ready-to-show", () => mainWindow.show());
}
