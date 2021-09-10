// Code your solution in this file!
const hQ = 42;
const blockDistance = 264;
const farePrice = 0.02

let blocksAway;
let feetAway;
let journeyInFeet;
let totalFare;

function distanceFromHqInBlocks(somePlace) {
    somePlace > hQ ? (blocksAway = somePlace - hQ) : (blocksAway = hQ - somePlace);
    return blocksAway;
}

function distanceFromHqInFeet(somePlace) {
    distanceFromHqInBlocks(somePlace);
    feetAway = blocksAway * blockDistance;
    return feetAway;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
    startingBlock > endingBlock ? (journeyInFeet = (startingBlock - endingBlock) * blockDistance) : (journeyInFeet = (endingBlock - startingBlock) * blockDistance);
    return journeyInFeet;
}

function calculatesFarePrice(startingBlock, endingBlock) {
    distanceTravelledInFeet(startingBlock, endingBlock);
    if (journeyInFeet <= 400) {
        totalFare = 0;
    } else if (journeyInFeet > 400 && journeyInFeet <= 2000) {
        totalFare = (journeyInFeet - 400) * farePrice;
    } else if (journeyInFeet > 2000 && journeyInFeet <= 2500) {
        totalFare = 25;
    } else if (journeyInFeet > 2500) {
        totalFare = 'cannot travel that far';
    }
    return totalFare
}