const binarySearch = (
    arr,
    target,
    comparator = {
        checkEqual: (match, target) => match === target,
        checkGreat: (match, target) => match > target,
    }
) => {
    const { checkEqual, checkGreat } = comparator;
    let endPosition = arr.length - 1;
    let startPosition = 0;

    while (startPosition <= endPosition) {
        const halfCurrentPart = Math.floor((endPosition - startPosition) / 2);
        const matchPosition = startPosition + halfCurrentPart;

        if (checkEqual(arr[matchPosition], target)) {
            return matchPosition;
        }

        if (checkGreat(arr[matchPosition], target)) {
            endPosition = matchPosition - 1; //to left
        } else {
            startPosition = matchPosition + 1; //to  right
        }
    }

    return null;
};

export default binarySearch;
