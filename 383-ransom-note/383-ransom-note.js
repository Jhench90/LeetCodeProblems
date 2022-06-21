/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let sort1 = ransomNote.split('').sort()
    let sort2 = magazine.split('').sort()
    
    while (sort1.length > 0 && sort2.length > 0) {
        if (sort1[0] === sort2[0]) {
            sort1.splice(0, 1)
            sort2.splice(0, 1)
        } else {
            sort2.splice(0, 1)
        }
    }
    if (sort1.length === 0) {
        return true
    }
    return false
};