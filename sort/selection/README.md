## Сортировка выбором
 
Сортировка выбором - это алгоритм сортировки, который сортирует элементы в массиве согласно функции компаратору.
Алгоритм прост в понимании, включает 3 шага:
 - Нахождение минимального значения в массиве
 - Добавление его в новый массив
 - Удаление значения из исхоодного массива
 
## Пример 

Есть массив, который нужно отсортировать от большего элемента к меньшему:

```|1|0|4|3|2|5|6|8|7|```


1. Считаем минимальным первый элемент массива:

    | 
```|1|0|4|3|2|5|6|8|7|```

Далее интерируемся по массиву сравнивая каждое значение с минимальным 

 1.1. При сравнении с вторым элементом массива `0` < `1`, мы обновляем минимальное значение на новое, в данном случае это `0`. 
 
 1.2. Сравниваем новое минималное значение с следующим, пока не найдем новое и не обновим минимальное значение
 
 1.3. Как только мы дошли до последнего элемента массива, удаляем минимальное значение из исходного массива
 
 1.4. Добавляем минимальное значение в новый массив.
 
 2.1. Повторяем операцию снова c пункта 1.
 
 2.2. Продолжаем пока исходный массив не станет пустым. 

## Сложность

В худшем, среднем и лучшем сценарии время выполнения `O(n*n)`.
