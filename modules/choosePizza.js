import { makePizza } from "./makePizza.js";

const margarita = {
    ingredients: ["tomate", "mozzarella", "prosciutto cotto"],
}

const pepperoni = {
    ingredients: ["tomate", "mozzarella", "pepperoni"],
};


export function choosePizza(pizzaName) {
    let selectedPizza;

    if (pizzaName == "margarita") {
        selectedPizza = margarita;
    }
    else if (pizzaName == "pepperoni") {
        selectedPizza = pepperoni;
    }
    console.log("You've chosen " + pizzaName + ".")
    makePizza(selectedPizza)
}