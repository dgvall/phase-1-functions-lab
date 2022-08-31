// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    let result = someValue - 42;
    return Math.abs(result)
}

function distanceFromHqInFeet(someValue) {
    let feet = distanceFromHqInBlocks(someValue) * 264
    return feet
}

function distanceTravelledInFeet(start, destination) {
    let blocksTravelled = destination - start;
    let feetTravelled = blocksTravelled * 264;
    return Math.abs(feetTravelled)
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0
    } else if (distance <= 2000) {
        return (distance - 400)*.02
    } else if (distance <= 2500) {
        return 25
    } else if (distance > 2500) {
        return `cannot travel that far`
    }
}