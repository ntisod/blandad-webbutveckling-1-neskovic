function authorDialog(){
    alert("Stefan har skapat sidan den 22/3/2021") // Stefan 22/3/2021
}
function Färg(){
    document.getElementById("rubrik").innerHTML = "Stefan";
    document.getElementById("demo").style.backgroundColor = "lightblue";
}
function bild() {
    if (document.getElementById("myImage").src == "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fortnite-1585665367.jpg?crop=1xw:1xh;center,top&resize=480:*")  {
        document.getElementById("myImage").src = "https://i.cartoonnetwork.com/prismo/games/725/B10AlienRivals_GameCard_725x400.jpg";
        document.getElementById("undertext").innerHTML = "Ben10 spel";
        document.getElementById("myImage").style.width ="300px";
    }
    else {
        document.getElementById("myImage").src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fortnite-1585665367.jpg?crop=1xw:1xh;center,top&resize=480:*";
        document.getElementById("undertext").innerHTML = "Fortnite spel";    
    }
}