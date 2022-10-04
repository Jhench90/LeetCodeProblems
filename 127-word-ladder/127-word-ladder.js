/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let queue = [beginWord]
    let level = 1
    if(!wordList.includes(endWord)){
        return 0
    }
    let map = {}
    while(queue.length){
        let diffByOne = []
        while(queue.length){
            // console.log(queue)
            let ele = queue.shift()
            map[ele] = true
            let eleChar = ele.split('')
            for(let i=0;i<wordList.length;i++){
                let count=0
                let wordChar = wordList[i].split('')
                for(let j=0;j<eleChar.length;j++){
                    if(wordChar[j] !== eleChar[j]){
                        count++
                        if(count == 2){
                            break
                        }
                    }
                }
                if(count == 1){
                    if(wordList[i] == endWord){
                            return level+1
                       }
                    if(!map[wordList[i]]){
                       diffByOne.push(wordList[i])
                        map[wordList[i]] = true
                       }
                }
            }
        }
        if(diffByOne.length){
            queue = [...queue,...diffByOne]
            // for(let i=0;i<diffByOne.length;i++){
            //     wordList.splice(wordList.indexOf(diffByOne[i]),1)
            // }
        }
       level++ 
    }
    return 0
    let graph = {};
    createNodeAndIntermediates(beginWord, graph);
    for (let i = 0; i < wordList.length; i++) {
        let word = wordList[i];
        createNodeAndIntermediates(word, graph);
    }
    createConnections(graph);
    
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

/*
Working Code - Time Limit Exceeded
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