let items = [`<div id="1" onclick="moveItem(1)" class="lootIMG"><img src="img/dolk.png" alt=""></div>`, `<div id="2" onclick="moveItem(2)" class="lootIMG"><img src="img/kvikklunsj.png" alt=""></div>`, `<div id="3" onclick="moveItem(3)" class="lootIMG"><img src="img/potion.png" alt=""></div>`, `<div id="4" onclick="moveItem(4)" class="lootIMG"><img src="img/sko.png" alt=""></div>`, `<div id="5" onclick="moveItem(5)" class="lootIMG"><img src="img/voffsen.png" alt=""></div>`]

let moved = ["n","n","n","n","n"]

loadItems();

function loadItems(){
    items.forEach(item => {
        document.getElementById('lootItems').innerHTML += item;
    });
}

function moveItem(x){
    if (moved[x-1] == "y") {
        document.getElementById(x).remove();
        document.getElementById('lootItems').innerHTML += items[x-1];
        moved[x-1] = "n";
    }
    else if (moved[x-1] == "n") {
        document.getElementById(x).remove();
        document.getElementById('inventoryItems').innerHTML += items[x-1];
        moved[x-1] = "y";
    }
}