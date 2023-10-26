export function makePizza(selectedPizza) {
    for (let i = 0; i < selectedPizza.ingredients.length; i++)  {
        console.log("Add " + selectedPizza.ingredients[i] + ".");
    }
}