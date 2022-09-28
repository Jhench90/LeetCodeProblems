/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    //sort boxTypes to prioritize boxes with more units to maximum units onboard
    boxTypes = boxTypes.sort((a,b)=>b[1]-a[1])
    console.log(boxTypes);
    
    let loadedBoxes = 0;
    let loadedUnits = 0;
    
    for (let i = 0; i < boxTypes.length; i++) {
        let boxes = boxTypes[i][0];
        let units = boxTypes[i][1];
        while (boxes > 0 && loadedBoxes < truckSize) {
            boxes--;
            loadedBoxes++;
            loadedUnits += units;
        }
    }
    return loadedUnits;
};