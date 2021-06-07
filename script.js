// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 375,
    height: 812,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.



function knapp () {
    var ord= ["admiral","aften","akt","altan","anorakk","aroma","arr","asjett","asparges","asyl","atlas","atom","avl","avløp","balje","balkong","ball","ballett","balsam"
    ,"bamse","banan","banjo","bark","barm","barsel","bart","basseng","bast","bataljon","batteri","daddel","dam","dåre","degge","deig","dekken","diadem","dill","dilla","diplom"
    ,"diplomat","disippel","divan","dobb","egg","eir","eksem","emalje","emblem","entré","eske","etappe","etui","farse","farsott","faster","fatle","fe","feber","fedme","fele","felg"
    ,"ferge","fett","fiken","filipens","fille","filtfinger","finne","fjes","frø","frøken","frue","furu","galle","gamasje","gebiss","gelender","gelé","gemytt","genser","gesims","geskjeft"
    ,"gikt","gips","gissel","gjedde","gjørme","glans","glasur","glis","glitter","glor","hake","hale","ham","hanske","harpe","harpiks","hassel","havn","hår","hæl","hekk","hems","herpes"
    ,"hette","hinne","hjerne","hjul","hode","hoff","igle","iglo","innside","jakke","jakt","jolle","jord","jorde","jurjus","juv","kabal","kabel","kahytt","kajakk","kakkel","kakkerlakk"
    ,"kalas","kalkyle","kalv","kammer","kanal","kanne","kanon","kant","kaos","kapers","kapsel","katt","kaviar","kål","lake","laken","lakk","lam","lampe","lampett","lanse","lekter","list"
    ,"lo","lomme","los","løve","lugar","lugg","lukt","lunge","lunte","lupe","majones","manesj","mappe","marg","marinade","marmelade","maske","massasje","melk","membran","monter","morfin"
    ,"mor","mos","moster","musli","åk","åker","ånd","ånde","åpningåre"];
    var tall= Math.floor(Math.random()*ord.length);
    var tord= ord[tall];
   document.getElementById("tilfeldigord").innerHTML=tord;

   ///document.getElementById("body").innerHTML=body;
}