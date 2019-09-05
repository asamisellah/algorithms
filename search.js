// Linear Search- Searches by looping through each item in an array until it finds the item we are looking for
// 1. We expect to have the item that we are looking for i.e searchItem
// 2. An array of items to search for the item
// 3. For linear search, the array could be sorted or not sorted
// 4. To search for the item, we use a for loop to compare each value in the array with the search item
// 5. If the search item is found, we terminate the looping, else, we keep looping
// 6. When we come to the end of the loop without finding the search item, we terminate it

// Edge cases:
// If the item we are searching for appears more than once in the  list, make it return all the instances

// function linearSearch(searchItem, items) {
//   let index = [];
//   for (item in items) {
//     if (items[item] === searchItem) {
//       index.push(item);
//     }
//   }

//   return index.length ? index : "Item not found";
// }

// console.log(
//   linearSearch(3, [3, 2, 5, 4, 6, 10, 11, 100, 3, 9, 7, 8, 15, 16, 17])
// );

function linearSearch(searchItem, items) {
  for (item in items) {
    if (items[item] === searchItem) {
      return item;
    }
  }
  return "Item not found";
}

// console.log(
//   linearSearch(3, [3, 2, 5, 4, 6, 10, 11, 100, 3, 9, 7, 8, 15, 16, 17])
// );

// Binary Search

// In binary search, we keep halfing the array until we get to the half with the item we are looking for
// The array has to be sorted
// We split the array into half and
// compare the searchItem with the value at the middle
// determine which area to discard and the next area to split into half

function binarySearch(searchItem, items) {
  let last = items.length - 1;
  let first = 0;
  let mid = Math.floor((last - first) / 2); // floor returns the largest integer less than or equal to a given number

  console.log(searchItem);

  while (items[mid] !== searchItem && last > first) {
    if (items[mid] > searchItem) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
    mid = Math.floor((last - first) / 2);
  }
  console.log(mid);
  return items[mid] === searchItem ? mid : "The item does not exist";
}

console.log(binarySearch(2, [3, 2, 5, 4, 6]));
