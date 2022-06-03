function picnicBudget(people) {
    if (typeof people != 'number') {
        return 'Please give a number!';
    }
    else if (people < 0) {
        return 'Please give a positive number!';
    }
    else {
        const perPersonFeeFirstHundred = 5000;
        const perPersonFeeSecondHundred = 4000;
        const perPersonFeeRest = 3000;

        if (people <= 100) {
            // cost calculation
            const totalCost = people * perPersonFeeFirstHundred;
            return totalCost;
        }
        else if (people <= 200) {
            // cost calculation
            const firstHundredCost = 100 * perPersonFeeFirstHundred;
            const restPeople = people - 100;
            const secondHundredCost = restPeople * perPersonFeeSecondHundred;
            // adding all costs
            const totalCost = firstHundredCost + secondHundredCost;
            return totalCost;
        }
        else {
            // cost calculation
            const firstHundredCost = 100 * perPersonFeeFirstHundred;
            const secondHundredCost = 100 * perPersonFeeSecondHundred;
            const restPeople = people - 200;
            const restPeopleCost = restPeople * perPersonFeeRest;
            // adding all costs
            const totalCost = firstHundredCost + secondHundredCost + restPeopleCost;
            return totalCost;
        }
    }
}

const budget = picnicBudget(250);
console.log(budget);