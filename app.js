import PromptSync from "prompt-sync";
import { choosePizza } from "./modules/choosePizza.js";

function app() {
    const prompt = PromptSync();
    const pizzaName = prompt("What pizza do you want? (margarita, pepperoni):");
    choosePizza(pizzaName);
}

app()