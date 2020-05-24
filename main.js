"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const { app, BrowserWindow, globalShortcut } = require('electron');
var electron_1 = require("electron");
var config_1 = __importDefault(require("./config"));
var win;
function createWindow() {
    // Cria uma janela de navegação.
    win = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        titleBarStyle: 'hidden',
        alwaysOnTop: true,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    // and load the index.html of the app.
    win.loadURL(config_1.default.url);
    // Open the DevTools.
    // win.webContents.openDevTools();
}
function toggleDevTools() {
    win.webContents.toggleDevTools();
}
function createShortchuts() {
    electron_1.globalShortcut.register('CmdOrCtrl+J', toggleDevTools);
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Algumas APIs podem ser usadas somente depois que este evento ocorre.
electron_1.app.whenReady().then(createWindow).then(createShortchuts);
// Quit when all windows are closed.
electron_1.app.on('window-all-closed', function () {
    // No macOS é comum para aplicativos e sua barra de menu
    // permaneçam ativo até que o usuário explicitamente encerre com Cmd + Q
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (electron_1.BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
// In this file you can include the rest of your app's specific main process
// code. Você também pode colocar eles em arquivos separados e requeridos-as aqui.
//# sourceMappingURL=main.js.map