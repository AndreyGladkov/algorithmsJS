## Binary search
 
 Binary search is a search algorithm that finds the search value in a sorted list by comparing the search value with the middle item in the list, if the items are not equal, then half of the list in which the search item cannot be removed from the search, and the search continues in half the list where may be the desired value. This continues until the desired item is found, otherwise "nothing" is returned.


##Example
We have a list sorted alphabetically:
```|A|B|C|D|E|F|G|H|I|```
 
 ```|0|1|2|3|4|5|6|7|8|```


Below the list are the indices if we store this list in an array.
Need to find the index ``H``.
 
            | 
```|0|1|2|3|4|5|6|7|8|```

```|A|B|C|D|E|F|G|H|I|```

    1. Half of the array indicates the value at 4 index, a value of 4 is equal to `E`. ```E === H```, it is false. 
    2. Next we compare ```E > H```, ```H``` > ```E``` is true, go to the right half, no search in the left half.
    
Array less:

      |
```|5|6|7|8|```

```|F|G|H|I|```

The target array decreased exactly in half, we repeat the part `1` again. Below the list are the indices on ```G```, repeat part `2` again.

Array less:

    |
```|7|8|```

```|H|I|```

repeat part `1` and `2`. 
When comparing we get the truth, the element will be found, with the result that we return the index value equal to `7`.

##Complexity
Time complexity `O(log(n))`.
