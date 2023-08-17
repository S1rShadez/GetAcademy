function openInventory() {
    document.getElementById('closeOpen').innerHTML = 'X';

    document.getElementById('inventoryContainer').innerHTML = /*HTML*/'<div id="inventoryContent"></div>';
}

let open = false;

function openChestBox() {
    if (open) {
        document.getElementById('chestContainer').innerHTML = `<div id="chestBox">
        <img src="Images/kiste.png" onclick="openChestBox()" alt="Bilde av kiste">
    </div>`;
        open = false;
    }
    else if (!open) {
        document.getElementById('chestContainer').innerHTML = `
    <div id="chestBox">
    <img src="Images/kiste.png" onclick="openChestBox()" alt="Bilde av kiste">
        </div>
            <div id="items">

                <div id="shoe">
                    <img src="Images/sko.png" alt="Bilde av en Sko">
                    <div>Sko</div>
                </div>

                <div id="snack">
                    <img src="Images/kvikklunsj.png" alt="Bilde av kvikklunsj">
                    <div>Kvikklunsj</div>
                </div>

                <div id="dog">
                    <img src="Images/voffsen.png" height="300px" alt="Bilde av Frøya">
                    <div>Frøya</div>
                </div>

                <div id="potion">
                    <img src="Images/potion.png" alt="Bilde av Potion">
                    <div>Potion</div>
                </div>

                <div id="sword">
                    <img src="Images/dolk.png" alt="Bilde av sverd">
                    <div>Sverd</div>
                </div>

            </div>
  `;
  open = true;
    }
}