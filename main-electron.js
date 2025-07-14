const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    show: false, // ❗ Do not show window immediately
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Load your HTML
  win.loadFile("index.html");

  // Show the window only when it's ready
  win.once("ready-to-show", () => {
    win.show();
  });

  // Remove the default menu
  Menu.setApplicationMenu(null);
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
