// Set 사용
Array.from(new Set(arr));
// [...(new Set(arr))] 과 동일

// filter
arr.filter((item, index) => arr.indexOf(item) === index);

// reduce
arr.reduce(
  (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
  []
);
