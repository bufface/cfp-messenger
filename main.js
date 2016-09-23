const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

require("./server");

function createWindow() {
  mainWindow = new BrowserWindow({width: 400, height: 600});
  mainWindow.loadURL("http://localhost:8080/rooms/t3361MetIfg7o3PA5nAKeszmbRF2y4XL9rL2G9dYjiWjl8XjZlgbwgE3");

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