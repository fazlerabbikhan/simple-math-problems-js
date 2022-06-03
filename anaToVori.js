function anaToVori(ana) {
    if (typeof ana != 'number') {
        return 'Please give a number!';
    }
    else if (ana < 0) {
        return 'Please give a positive number!';
    }
    else {
        const anaPerVori = 16;

        // vori calculation
        const vori = ana / anaPerVori;
        return vori;
    }
}

const amount = anaToVori(32);
console.log(amount);