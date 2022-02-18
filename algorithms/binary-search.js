/**
 * 1. 设置中间数为pivot
 * 2. 每次循环之后将会缩小当前一半的范围
 * 3. 找到index
 */
function binarySearch(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    const pivot = arr[mid];
    if (k === pivot) {
      return mid;
    }
    if (k < pivot) {
      high = mid - 1;
    }
    if (k > pivot) {
      low = mid + 1;
    }
  }
  return -1;
}

const arr = [2, 3, 4, 9, 10];

console.log(binarySearch(arr, 10));
