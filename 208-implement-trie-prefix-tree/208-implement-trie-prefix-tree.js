var Trie = function() {
    this.trie = {}
};
Trie.prototype.insert = function(word) {
    let obj = this.trie
    for (let i = 0; i < word.length; i++) {
        if (obj[word[i]] === undefined) {
            obj[word[i]] = {}
        }
        if (i === word.length - 1) obj[word[i]].word = true
        obj = obj[word[i]]
    }
};
Trie.prototype.search = function(word) {   
    let root = this.trie
    for (let i = 0; i < word.length; i++) {
        if (root[word[i]] !== undefined) {
            if (i === word.length - 1) {
                 if (root[word[i]].word === true) return true
                 return false
            }
            root = root[word[i]]
        } else {
            return false
        }
    }
};
Trie.prototype.startsWith = function(prefix) {
    let root = this.trie
    for (let i = 0; i < prefix.length; i++) {
        if (root[prefix[i]] !== undefined) {
            if (i === prefix.length - 1) {
                return true
            }
            root = root[prefix[i]]
        } else {
            return false
        }
    }
};