const defaultSelectionStrategy = (arr) => {

    let smallestIndex = 0;
    let smallestValue = arr[smallestIndex];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallestValue) {
            smallestValue = arr[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;
};

const selectionSort = (arr, selection) => {
    const newArray = [];
    const selectionStrategy = selection || defaultSelectionStrategy;

    while (arr.length > 0) {
        const smallestIndex = selectionStrategy(arr);
        newArray.push(arr[smallestIndex]);
        arr.splice(smallestIndex, 1);
    }
    
    return newArray;
};

export default selectionSort;
