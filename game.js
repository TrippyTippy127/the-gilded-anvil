// GAME DATA & LOGIC

// Materials available in the shop
const MATERIALS = [
  {name: "Wood", price: 5},
  {name: "Cloth", price: 8},
  {name: "Metal", price: 12},
  {name: "Leather", price: 10},
  {name: "Gem", price: 25}
];


//Recipes for crafting items
const RECIPES = [
    {name: "Wooden Shield", ingredients: {"Wood": 3}, value: 20, repRequired: 0},
    {name: "Linen Shirt", ingredients: {"Cloth": 5}, value: 30, repRequired: 0}
];

// Player state
const playerState = {
    gold: 100,
    reputation: 0,
    inventory: {},
}


// UI MANAGEMENT
function showScreen(screenName) {
    // Hide all screens
    document.getElementById("screen-buy").style.display = "none";
    document.getElementById("screen-craft").style.display = "none";
    document.getElementById("screen-shop").style.display = "none";

    // Show the selected screen
    document.getElementById("screen-" + screenName).style.display = "block";
}


// UI INTERACTIONS
document.getElementById("btn-buy").addEventListener("click", function() {
    showScreen("buy");
})

document.getElementById("btn-craft").addEventListener("click", function() {
    showScreen("craft");
})

document.getElementById("btn-shop").addEventListener("click", function() {
    showScreen("shop");
})


showScreen("buy"); // Start on the buy screen
console.log("The Gilded Anvil Loaded!"); // Debug log to confirm the game has loaded