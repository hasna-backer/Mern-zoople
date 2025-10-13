let letters = ["d", "a", "c", "b"];

// sort (alphabetical by default)
letters.sort();
console.log("Sorted:", letters); // ["a","b","c","d"]

// reverse
letters.reverse();
console.log("Reversed:", letters); // ["d","c","b","a"]

// sort numbers correctly with compare function
let nums2 = [100, 20, 5];
nums2.sort((a, b) => a - b); // ascending
console.log("Ascending:", nums2); // [5, 20, 100]
nums2.sort((a, b) => b - a); // descending
console.log("Descending:", nums2); // [100, 20, 5]
