// Insertion sort

/*
we need to pick a key. We then compare that key to elements of the array to it's left because they are sorted. We place the key in it's place within the sorted array

The code for insertion sort has two indices, i and j. i tracks our outer loop and represents the current element we are sorting.

It starts at 1 instead of 0 because when we only have one element in our newly sorted array, there is nothing to sort.

Therefore, we start at the second element and compare it against the first.

The second index, j, starts at i-1 and iterates from right-to-left until it finds the correct location to place the element.

Along the way, we move each element over by one to make room for the new element being sorted
*/

function insertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    let key = list[i];
    let j = i - 1;

    while (j >= 0 && list[j] > key) {
      list[j + 1] = list[j];
      j = j - 1;
    }
    list[j + 1] = key;
  }
  return list;
}
console.log(insertionSort([5, 3, 1, 4, 6]));

// Bubble sort

/*
Two adjacent values are compared and then swapped if they are not in order

Loop through each element in the array

compare the current value "i" with it's adjacent neighbour "i+1"

The challenge with the implementation if only using one for loop is that it will only run once and the items will not be in order
*/

// First implementation
function bubbleSortOne(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] > list[i + 1]) {
      // swap
      let temp = list[i];
      list[i] = list[i + 1];
      list[i + 1] = temp;
    }
  }
  return list;
}
console.log(bubbleSortOne([5, 3, 1, 4, 6]));

// challenge is that we may unnecessarily run through an already sorted list

// Second implementation
function bubbleSortTwo(list) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (list[j] > list[j + 1]) {
        // swap
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
    count++;
  }
  console.log("1. Iteration count is: ", count);

  return list;
}
console.log(bubbleSortTwo([5, 3, 1, 4, 6]));

// Third and improved implementation
function bubbleSort(list) {
  let count = 0;
  let swapped;
  do {
    count++;
    swapped = false;
    for (let i = 0; i < list.length; i++) {
      if (list[i] > list[i + 1]) {
        // swap
        let temp = list[i];
        list[i] = list[i + 1];
        list[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  console.log("2. Iteration count is: ", count);
  return list;
}
console.log(bubbleSort([5, 3, 1, 4, 6]));

// Selection sort

/*
For selection sort, the idea is to linearly search through the array and get the smallest number then swap it to the first position. The process is repeated till the array is sorted

 Loop through each item in the list using a for loop

 compare the current item 'i' in the list with other items in the list by creating another for loop

 create a variable that holds the smallest number with the initial value as that of index "i"

 as the values are being compared, store the smallest value in variable

 swap the smallest value with the current index "i"

 return the sorted list
*/

function selectionSort(list) {
  for (let i = 0; i < list.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[smallest]) {
        smallest = j;
      }
    }
    // this is to avoid an unnecessary swap of the same item with itself
    if (smallest !== i) {
      let temp = list[i];
      list[i] = list[smallest];
      list[smallest] = temp;
    }
  }
  return list;
}
console.log(selectionSort([5, 1, 4, 3, 6, 10]));
