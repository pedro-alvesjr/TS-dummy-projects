function printList (myList: number[]) {
    for (const num of myList) {
        console.log(num)
    }
};

function addName (names: string[], newName: string) {
    names.push(newName)
    return names;
};

function removeFirstElement (myList: any[]) {
    myList.shift()
    return myList;
};

function printMoreThanNWords (words: string[], num: number) {
    for (const word of words) {
        if (word.length > num) {
            console.log(word)
        }
    }
};
