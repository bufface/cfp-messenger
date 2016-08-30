const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {
  main = new BrowserWindow({width: 400, height: 600});
  mainWindow.loadURL("file://" + __dirname + "/index.html");

  mainWindow.webContents.openDevTools();

  mainWindow.on("close", function () {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});