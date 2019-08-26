// This is a simple function that helps with swapping the positions of two elements in the array
function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

// the right most element is selected as the pivot
function partition(arr, low, high) {
  let q = low;
  let i;
  for (i = low; i < high; i++) {
    if (arr[i] < arr[high]) {
      swap(arr, i, q);
      q++;
    }
  }
  swap(arr, i, q);
  return q;
}

// This is a recursive function that
function quickSort(arr, low, high) {
  if (low < high) {
    let pivot = partition(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
    return arr;
  }
}

function quickSortAlgorithm(list) {
  quickSort(list, 0, list.length - 1);
}

console.log(quickSortAlgorithm([5, 3, 1, 4, 6, 9, 2, 7]));
