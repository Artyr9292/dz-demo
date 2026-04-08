const KG_IN_USD = 7;
const KM_IN_USD = 5;

function calculateW(presents) {
    return presents * KG_IN_USD;
}

function calculateKm(distance) {
    return distance * KM_IN_USD;
}

function getExchangePrice(presents1, presents2, distance) {
    const price1 = calculateW(presents1);
    const price2 = calculateW(presents2);
    const distancePrice = calculateKm(distance);
    return price1 + price2 + distancePrice;
}

console.log(getExchangePrice(1,2,10));

