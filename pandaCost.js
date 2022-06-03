function pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity) {
    if (typeof singaraQuantity != 'number' || typeof somuchaQuantity != 'number' || typeof jilapiQuantity != 'number') {
        return 'Please give numbers only!';
    }
    else if (singaraQuantity < 0 || somuchaQuantity < 0 || jilapiQuantity < 0) {
        return 'Please give positive numbers only!';
    }
    else {
        const perSingaraPrice = 7;
        const perSomuchaPrice = 10;
        const perJilapiPrice = 15;

        // cost calculation
        const singaraCost = singaraQuantity * perSingaraPrice;
        const somuchaCost = somuchaQuantity * perSomuchaPrice;
        const jilapiCost = jilapiQuantity * perJilapiPrice;
        // adding all costs
        const totalCost = singaraCost + somuchaCost + jilapiCost;
        return totalCost;
    }
}

const cost = pandaCost(6, 5, 4);
console.log(cost);