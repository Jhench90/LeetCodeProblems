/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.numBig = big;
    this.numMed = medium;
    this.numSma = small;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    switch (carType) {
        case 1:
            if (this.numBig === 0) {
                return false;
            } else {
                this.numBig--;
                return true;
            }
            break;
        case 2:
            if (this.numMed === 0) {
                return false;
            } else {
                this.numMed--;
                return true;
            }
            break;
        case 3:
            if (this.numSma === 0) {
                return false;
            } else {
                this.numSma--;
                return true;
            }
            break;
    }
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */