import { makeDough, pizzaShape, addIngredients, cookPizza, pizzaReady } from "./steps.js"

const flour = "400 gramos de harina de trigo";
const water = "200 ml de agua";
const oliveOil = "2 cucharadas de aceite de oliva";
const salt = "una pizca de sal";
const shape = "circular";
const marinaraSauce = "salsa marinara al gusto";
const cheese = "200g de queso Gorgonzola";
const nuts = "80g de nueces";
const onion = "cebolla cortada";
const pepper = "medio pimiento rojo";
const ingredients = [marinaraSauce, cheese, nuts, onion, pepper]
const cookingTemperature = 250;
const cookingTime = 16;


function app() {
    makeDough(flour, water, oliveOil, salt);
    pizzaShape(shape);
    addIngredients(ingredients);
    cookPizza(cookingTemperature, cookingTime);
    pizzaReady();
}

app()
