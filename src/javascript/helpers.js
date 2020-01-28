function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function randomIntWithMinMaxAbs(minAbs, maxAbs) {
    minAbs = Math.abs(minAbs);
    maxAbs = Math.abs(maxAbs);
    var absValue = randomIntFromRange(minAbs, maxAbs);
    var isPositive = randomIntFromRange(0,1);
    if (isPositive) {
        return absValue;
    } else {
        return -absValue;
    }    
} 

module.exports = {randomIntFromRange,randomIntWithMinMaxAbs}