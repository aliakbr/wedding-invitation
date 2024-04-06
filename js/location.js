function akadLocation(){
    // If it's an iPhone..
    if( (navigator.platform.indexOf("iPhone") != -1)
            || (navigator.platform.indexOf("iPod") != -1)
            || (navigator.platform.indexOf("iPad") != -1))
        window.open("maps://www.google.com/maps?daddr=masjid+keuchik+leumik");
    else
        window.open("https://www.google.com/maps?daddr=masjid+keuchik+leumik");
}

function walimahLocation(){
    // If it's an iPhone..
    if( (navigator.platform.indexOf("iPhone") != -1)
            || (navigator.platform.indexOf("iPod") != -1)
            || (navigator.platform.indexOf("iPad") != -1))
        window.open("maps://www.google.com/maps?daddr=Amel+Convention+Hall");
    else
        window.open("https://www.google.com/maps?daddr=Amel+Convention+Hall");
}