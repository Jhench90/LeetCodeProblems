/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let mySet = new Set(wordList);
    let queue = [beginWord];
    let count = 1;
    
    while(queue.length) {
        const next = [];
        for (let word of queue) {
            if (word === endWord) return count;
            for (let i = 0; i < word.length; i++) {
                for (let j = 0; j < 26; j++) {
                    const newWord = word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i+1);
                    if (mySet.has(newWord)) {
                        next.push(newWord);
                        mySet.delete(newWord);
                    }
                }
            }
        }
        queue = next;
        count++;
    }
    return 0; 
}
/* Working Solt from Discuss
 const wordSet = new Set(wordList)
    let queue = [beginWord];
    let steps = 1;
    
    while(queue.length) {
        const next = [];
        
        // loop over each word in the queue
        for(let word of queue) {
            if(word === endWord) return steps;
            
            // loop over each char of the word 
            for(let i = 0; i < word.length; i++) {
                
                // and replace the char with letters from [a - z]
                for(let j = 0; j < 26; j++) {
                    const newWord = word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i+1);
                    
                    // if the new word exist in the word list add it to the queue
                    if(wordSet.has(newWord)) {
                        next.push(newWord);
                        wordSet.delete(newWord);
                    }
                }
            }
        }
        queue = next
        steps++;
    }
    return 0; 
    
 My Solution Does not pass Run Time Complexity
New Code: Exchanging Arrays for Objects
var ladderLength = function(beginWord, endWord, wordList) {
let graph = {};
    createNodeAndIntermediates(beginWord, graph);
    for (let i = 0; i < wordList.length; i++) {
        let word = wordList[i];
        createNodeAndIntermediates(word, graph);
    }
    createConnections(graph);
    
    let shortestSequence = BFS(beginWord, endWord, graph);
    return shortestSequence === undefined ? 0 : shortestSequence;

const BFS = (beginWord, endWord, graph) => {
    let queue = [{word: beginWord, count: 0}];
    let i = 0;
    while (i !== queue.length) {
        let node = queue[i];
        if (node.word === endWord) {
            return node.count + 1;
        }
        if (graph[node.word].visited) {
            i++;
            continue;
        }
        graph[node.word].visited = true;
        let nextWords = graph[node.word].next;
        
        for (key in nextWords) {
            queue.push({word: key, count: node.count+1})
        }
        i++;
    }
}

const createNodeAndIntermediates = (word, graph) => {
    let intermediates = {};
        let wordArray = word.split('');
        for (let j = 0; j < wordArray.length; j++) {
            let temp = wordArray.splice(j, 1, "*");
            intermediates[wordArray.join('')] = 1;
            wordArray.splice(j, 1, temp);
        }
        let newNode = {word, intermediates, next: {}};
        graph[word] = newNode;
}

const createConnections = (graph) => {
     for (key in graph) {
        let currentNode = graph[key];
        for (key2 in graph) {
            if (key === key2) continue;
            let otherNode = graph[key2];
            for (key in otherNode.intermediates) {
                if (key in currentNode.intermediates) {
                    currentNode.next[key2] = 1;
                    break;
                }
            }
        }
    }
}
Working Code - Time Limit Exceeded
Old Code - Contains Arrays instead of objects
var ladderLength = function(beginWord, endWord, wordList) {
    //create graph and connections
    //only add beginWord to graph, dont add endWord
    let graph = {};
    createNodeAndIntermediates(beginWord, graph);
    for (let i = 0; i < wordList.length; i++) {
        let word = wordList[i];
        createNodeAndIntermediates(word, graph);
    }
    createConnections(graph);
    //perform BFS traversal of graph
    let shortestSequence = BFS(beginWord, endWord, graph);
    return shortestSequence === undefined ? 0 : shortestSequence;   
};

const BFS = (beginWord, endWord, graph) => {
    let queue = [{word: beginWord, count: 0}];
    let i = 0;
    while (i !== queue.length) {
        let node = queue[i];
        if (node.word === endWord) {
            return node.count + 1;
        }
        if (graph[node.word].visited) {
            i++;
            continue;
        }
        graph[node.word].visited = true;
        let nextWords = graph[node.word].next;
        if (nextWords.length > 0) {
            nextWords.forEach((word)=>{
                queue.push({word: word, count: node.count+1})
            })
        }
        i++;
    }
}

const createNodeAndIntermediates = (word, graph) => {
    let intermediates = [];
        let wordArray = word.split('');
        for (let j = 0; j < wordArray.length; j++) {
            let temp = wordArray.splice(j, 1, "*");
            intermediates.push(wordArray.join(''));
            wordArray.splice(j, 1, temp);
        }
        let newNode = {word, intermediates, next: []};
        graph[word] = newNode;
}

const createConnections = (graph) => {
     for (key in graph) {
        let currentNode = graph[key];
        for (key2 in graph) {
            if (key === key2) continue;
            let otherNode = graph[key2];
            let tempObj = {};
            for (let i = 0; i < currentNode.intermediates.length; i++) {
                tempObj[currentNode.intermediates[i]] = 1;
            }
            for (let j = 0; j < otherNode.intermediates.length; j++) {
                if (otherNode.intermediates[j] in tempObj) {
                    currentNode.next.push(key2);
                    break;
                }
            }
        }
    }
}
*/