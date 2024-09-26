let steps = 0;
for (let i of Object.getOwnPropertyNames(Math)) {
  globalThis[i] = Math[i];
}
function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let swap = arr[i];
        arr[i] = arr[j];
        arr[j] = swap;
      }
    }
  }
  return arr;
}
function linear(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        steps++;
        if (arr[i] == target) return i;
    }
    return -1;
}
function search(array, target) {
  let buckets = [];
  let arr = [...array];
  for (let i = -1; i <= sqrt(arr.length); i++) {
    buckets.push(arr.splice(0, sqrt(arr.length)));
  }
  buckets.push(arr);
  let current;
  let offset = 0;
  for (let i = 0; i < buckets.length; i++) {
    steps++;
    current = buckets[i].length - 1;
    if (buckets[i][buckets[i].length - 1] == target) return current + offset;
    else if (buckets[i][buckets[i].length - 1] > target) {
      return linear(buckets[i], target) + offset;
    }
    offset += buckets[i].length - 1;
  }
  return -1;
}
function main() {
  let arr = [];
  for (let i = 0; i < 1000; i++) {
    arr.push(round(random() * 100));
  }
  let n = arr.length;
  console.log("Size: " + n);
  sort(arr);
  // console.log(arr);
  console.log("Index of target: " + search(arr, 50))
  console.log("Steps: " + steps);
  console.log("Efficiency: " + steps/n);
  steps = 0;
  linear(arr, 50)
  console.log("Linear Search Efficiency: " + steps/n);
}
main();
