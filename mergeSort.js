// Merge sort applies the concept of recursion

/*
 on input of n elements
 if n < 2, return
else,
sort left half of elements,
sort right half of elements,
merge sorted halves
*/

// This function sorts and merges the right and left lists
function merge(left, right) {
  let result = [];
  let l = 0;
  let r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l]);
      l++;
    } else {
      result.push(right[r]);
      r++;
    }
  }
  // merge the sorted list
  return result.concat(left.slice(l)).concat(right.slice(r));
}

// This function splits the list into halves of left and right and it's a recursive function that returns the sorted list
function mergeSort(list) {
  let len = list.length;
  if (len < 2) {
    return list;
  }
  let mid = Math.floor(len / 2);
  let left = list.slice(0, mid);
  let right = list.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([5, 3, 1, 4, 6, 9, 2, 7]));
