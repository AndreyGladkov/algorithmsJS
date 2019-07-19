import quickSort from '../index.js';

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
    let less = {};
    let greater = {};

    quickSort(array, {
        checkGreat: (match, target) => {
            checkedValues.add(target);

            const isGreat = match > target;

            if (isGreat) {
                greater[target] = greater[target] || [];
                greater[target].push(match);
            } else {
                less[target] = less[target] || [];
                less[target].push(match);
            }
            return isGreat;
        },
        checkEquals: (match, target) => match === target,
    });

    const arrCheckedValues = [...checkedValues];
    let delay = 0;

    arrCheckedValues.forEach((pivot, index) => {
        const pivotNode = cacheNodes[pivot];
        const lessDelay = less[pivot] ? less[pivot].length * DELAY : 0;
        const greaterDelay = greater[pivot] ? greater[pivot].length * DELAY : 0;
        const greaterElements = greater[pivot];
        const lessElements = less[pivot];

        if (index >= 1) {
            delay += DELAY + greaterDelay + lessDelay;
        }

        setTimeout(() => {
            let lessDelay = 0;
            let greaterDelay = 0;

            requestAnimationFrame(() => {
                if (index > 0) {
                    cacheNodes[arrCheckedValues[index - 1]].classList.remove('array-item_base');
                }

                cacheNodes[arrCheckedValues[index]].classList.add('array-item_base');
            });

            if (lessElements) {
                lessElements.forEach((value, index) => {
                    setTimeout(() => {
                        requestAnimationFrame(() => {
                            cacheNodes[value].classList.add('array-item_lt-base');
                            rootNode.insertBefore(cacheNodes[value], pivotNode);

                            if (index === lessElements.length - 1) {
                                lessElements.forEach((value) =>
                                    cacheNodes[value].classList.remove('array-item_lt-base')
                                );
                            }
                        });
                    }, lessDelay);

                    lessDelay += DELAY;
                });
            }

            if (greaterElements) {
                greaterElements.forEach((value, index) => {
                    setTimeout(() => {
                        requestAnimationFrame(() => {
                            cacheNodes[value].classList.add('array-item_gt-base');
                            rootNode.insertBefore(cacheNodes[value], pivotNode.nextSibling);

                            if (index === greaterElements.length - 1) {
                                greaterElements.forEach((value) =>
                                    cacheNodes[value].classList.remove('array-item_gt-base')
                                );
                            }
                        });
                    }, greaterDelay);

                    greaterDelay += DELAY;
                });
            }
        }, delay);
    });
});

rootNode.appendChild(arrayView);
