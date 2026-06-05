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




console.log("The Gilded Anvil Loaded!");