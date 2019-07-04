import binarySearch from '../index.js';

const cacheNodes = {};

const template = ({ className = 'item-from-sorted-array', content }) => {
    const indexItem = document.createElement('div');
    indexItem.className = className;
    cacheNodes[content] = indexItem;
    return indexItem;
};

const sortedArray = Array.from(Array(2314).keys());
const sortedNodes = document.createDocumentFragment();

sortedArray.forEach((content) => sortedNodes.append(template({ content })));

const input = document.querySelector('.JS-Input-SearchValue');
const runButton = document.querySelector('.JS-Button-Run');
let findIndex;

runButton.addEventListener('click', () => {
    const findValue = parseInt(input.value);

    if (isNaN(findValue)) {
        alert(`${input.value} is not number`);
        return;
    }

    if (cacheNodes[findIndex]) {
        cacheNodes[findIndex].classList.remove('item-from-sorted-array_find');
    }
    const checkedValues = [];

    findIndex = binarySearch(sortedArray, findValue, {
        checkEqual: (match, target) => {
            checkedValues.push(match);
            return match === target;
        },
        checkGreat: (match, target) => match > target,
    });

    checkedValues.forEach((item, index) => {
        setTimeout(() => {
            requestAnimationFrame(() => {
                if (index > 0) {
                    cacheNodes[checkedValues[index - 1]].classList.remove('item-from-sorted-array_checked');
                }

                if (item === findIndex) {
                    cacheNodes[item].classList.add('item-from-sorted-array_find');
                } else {
                    cacheNodes[item].classList.add('item-from-sorted-array_checked');
                }

                if (index === checkedValues.length - 1 && findIndex === null) {
                    alert(`${findIndex} not found`);
                }
            });
        }, index * 300);
    });
});

document.getElementById('root-app').appendChild(sortedNodes);
