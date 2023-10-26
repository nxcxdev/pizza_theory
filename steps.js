export function makeDough(flour, water, oliveOil, salt) {
    console.log("En un bol mezclamos " + flour + ",");
    console.log("y añadimos " + water + ".");
    console.log("A continuacion, agregamos " + oliveOil);
    console.log("y " + salt + ".");
}

export function pizzaShape(shape) {
    console.log ("Cogemos una porción de masa, la extendemos sobre la mesa, y con las manos le damos forma " + shape + ".");
}

export function addIngredients(ingredients){
    for (let i = 0; i < ingredients.length; i++)  {
        console.log("Añadimos " + ingredients[i] + ".");
    }
}

export function cookPizza(cookingTemperature, cookingTime){
    console.log("Precalentamos el horno a " + cookingTemperature + " grados centígrados");
    console.log("y la cocinamos durante " + cookingTime + " minutos.");
    console.log("Después la retiramos del horno.");
}

export function pizzaReady() {
    console.log("¡Ya tienes tu pizza!");
}
