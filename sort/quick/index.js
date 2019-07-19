const quickSort = (
    arr,
    comparator = { checkGreat: (match, target) => match > target, checkEquals: (match, target) => match === target }
) => {
    if (arr.length <= 1) {
        return arr;
    }

    const base = arr[Math.floor(Math.random() * arr.length)];
    const less = [];
    const greater = [];
    const center = [];

    for (let i = 0; i < arr.length; i++) {
        if (comparator.checkGreat(arr[i], base)) {
            greater.push(arr[i]);
        } else if (comparator.checkEquals(arr[i], base)) {
            center.push(arr[i]);
        } else {
            less.push(arr[i]);
        }
    }

    return quickSort(less, comparator).concat(center, quickSort(greater, comparator));
};

export default quickSort;
