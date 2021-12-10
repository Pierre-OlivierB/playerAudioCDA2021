<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

echo( '{
        "song":[
        {
        "nom_fichier":"sound/AC-DC - Powerage - 07 - Gone Shootin.mp3",
        "titre": "Gone Shootin",
        "album":"Powerage",
        "groupe": "AC-DC",
        "temps": "00:05:04",
        "piste": 1
    },
    {
        "nom_fichier":"sound/Airbourne - Bottom Of The Well.mp3",
        "titre": "Bottom Of The Well",
        "album":"No Guts. No Glory.",
        "groupe": "Airbourn",
        "temps": "00:04:30",
        "piste": 2
    },
    {
        "nom_fichier":"sound/Track 07-Hayseed Dixie-Have a Drink on Me.mp3",
        "titre": "Have a Drink on Me",
        "album":"A Hillbilly Tribute to AC/DC",
        "groupe": "Hayseed Dixie",
        "temps": "00:11:43",
        "piste": 3
    },
    {
        "nom_fichier":"sound/01 - Stargate SG-1 Main Title.mp3",
        "titre": "SG-1 Main Title",
        "album":"BO Stargate",
        "groupe": "NAN",
        "temps": "00:01:02",
        "piste": 4
    },
    {
        "nom_fichier":"sound/18 Flogging Molly _ Seven deadly sins.mp3",
        "titre": "Seven deadly sins",
        "album":"Within a Mile of Home",
        "groupe": "Flogging Molly",
        "temps": "00:02:50",
        "piste": 5
    },
    {
        "nom_fichier":"sound/Imogen heap - Between Sheets.mp3",
        "titre": "Between Sheets",
        "album":"Ellipse",
        "groupe": "Imogen heap",
        "temps": "00:02:53",
        "piste": 6
    },
    {
        "nom_fichier":"sound/Zelda - Ocarina Of Time - Gerudo Valley (Orchestrated).mp3",
        "titre": "Gerudo Valley (Orchestrated)",
        "album":"Zelda - Ocarina Of Time OST",
        "groupe": "NAN",
        "temps": "00:04:30",
        "piste": 7
    }
]}')

?>