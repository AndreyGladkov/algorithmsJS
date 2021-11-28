import selectionSort from '../index.js';

const DELAY = 16;

const cacheNodes = {};
const rootNode = document.getElementById('root-app');

const template = ({ className = 'array-item', content }) => {
    const indexItem = document.createElement('div');
    indexItem.className = className;
    indexItem.title = content;
    cacheNodes[content] = indexItem;
    indexItem.style.height = `${100 + content}px`;
    return indexItem;
};

const array = Array.from(Array(100).keys()).sort(() => Math.random() - 0.5);
const arrayView = document.createDocumentFragment();

array.forEach((content) => arrayView.append(template({ content })));

document.querySelector('.JS-Button-Run').addEventListener('click', () => {
    const checkedValues = new Set();
    let baseArrays = {
        order: [],
    };
    let less = {};
    let greater = {};

    selectionSort(array, (arr) => {
        let smallestIndex = 0;
        let smallestValue = arr[smallestIndex];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < smallestValue) {
                smallestValue = arr[i];
                smallestIndex = i;
            }
        }

        baseArrays[smallestIndex] = arr;
        baseArrays.order.push(index);
        return smallestIndex;
    });

    let delay = 0;

    baseArrays.order.forEach((index) => {});
});

rootNode.appendChild(arrayView);
