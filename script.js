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
}