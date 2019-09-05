# Algorithms

An algorithm is a set of logical instructions followed in order to solve a problem. From a broader perspective, there are search and sort algorithms.

### Search Algorithms

A search algorithm is used to retrieve information stored within for example in a database or a file.

#### Linear Search

Linear search is a simple search algorithm does a sequential search over all items in a list one by one. Every item is checked and if a match is found then that particular item is returned, otherwise the search continues till the end of the data collection.

```
procedure linear_search (list, value)
   for each item in the list
      if match item == value
         return the item's location
      end if
   end for

end procedure
```

Time complexity: _O(n)_ - since in the worst case we're checking each element exactly once

#### Binary Search

Binary search algorithm works on the principle of divide and conquer. For this algorithm to work, the input array should be already sorted.

Binary search looks for a particular item by comparing the middle most item of the collection.

If a match occurs, then the index of item is returned.

If the middle item is greater than the item, then the item is
searched in the sub-array to the left of the middle item.

Otherwise, the item is searched for in the sub-array to the right of the middle item.

This process continues on the sub-array as well until the size of the subarray reduces to zero.

Time complexity: _O(log n)_ - since we split search area by two for every next iteration. This makes it a significantly more optimal approach than a linear search.

#### Breadth First Search (BFS)

BFS is a traversing algorithm where you should start traversing from a selected node (source or starting node) and traverse the graph layerwise thus exploring the neighbour nodes (nodes which are directly connected to source node). You must then move towards the next-level neighbour nodes.

#### Depth First Search (DFS)

The DFS algorithm is a recursive algorithm that uses the idea of backtracking. It involves exhaustive searches of all the nodes by going ahead, if possible, else by backtracking.
Here, the word backtrack means that when you are moving forward and there are no more nodes along the current path, you move backwards on the same path to find nodes to traverse. All the nodes will be visited on the current path till all the unvisited nodes have been traversed after which the next path will be selected.

### Sort Algorithms

Sorting refers to arranging data in a particular format. Sorting algorithm specifies the way to arrange data in a particular order. The importance of sorting is that data searching can be optimized.

#### Insertion sort

This is an in-place comparison-based sorting algorithm. Here, a sub-list is maintained which is always sorted. For example, the lower part of an array is maintained to be sorted. An element which is to be 'insert'ed in this sorted sub-list, has to find its appropriate place and then it has to be inserted there. Hence the name, insertion sort.

Time Complexity: _O(n^2)_ - since in the worst case, each element is compared with all the other elements in the sorted array. For n elements, there will be n^2 comparisons.

#### Selection sort

The idea behind selection sort is that you loop through the input array linearly, selecting the first smallest element, and then swap it to the first position. Then you loop through the array again using a linear scan and get the second smallest element, swap it to the second position, and so on and so forth until your array is completely sorted.

Time Complexity: _O(n^2)_ - since to find the minimum element from the array of n elements, n-1 comparisons are required. After putting the minimum element in its proper position, the size of an unsorted array reduces to n-1 and then n-2 comparisons are required to find the minimum in the unsorted array.

#### Bubble sort

Bubble sort is based on the idea of repeatedly comparing pairs of adjacent elements and then swapping their positions if they exist in the wrong order.

Time Complexity: _O(n^2)_ - since the entire array needs to be iterated for every element.

#### Merge Sort

Merge sort is a divide-and-conquer algorithm based on the idea of breaking down a list into several sub-lists until each sublist consists of a single element and merging those sublists in a manner that results into a sorted list.

Breakdown:

- Divide the unsorted list into sublists, each containing element.
- Take adjacent pairs of two singleton lists and merge them to form a list of 2 elements. n will now convert into n/2 lists of size 2.
- Repeat the process till a single sorted list of obtained.

Time Complexity: _O(n log n)_ - The list of size n is divided into a max of log n parts, and the merging of all sublists into a single list takes O(n) time

#### Quicksort

Quick sort is based on the divide-and-conquer approach based on the idea of choosing one element as a pivot element and partitioning the array around it such that: Left side of pivot contains all the elements that are less than the pivot element Right side contains all elements greater than the pivot

It removes the use of the auxiliary array that is used in merge sort. Selecting a random pivot in an array results in an improved time complexity in most of the cases.

Time Complexity: _O(n log n)_ - Complexity The worst case time complexity of this algorithm is O(n^2) , but as this is randomized algorithm, its time complexity fluctuates between O(n^2) and O(n log n) and mostly it comes out to be O(n log n).

### References
https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/tutorial/
https://www.tutorialspoint.com/data_structures_algorithms/selection_sort_algorithm.htm
https://docs.cs50.net/2017/fall/notes/3/lecture3.html#sorting
https://medium.com/@kylejensen
https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sorting/merge-sort/README.md
