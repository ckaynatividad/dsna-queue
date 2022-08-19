function kLargest(arr, k) {
    arr.sort((a, b) => b - a);

    for (let i=0; i<k; i++) {
        return arr[i] + "";
    }
}

let arr = [ 1, 23, 12, 9, 30, 2, 50];

let k = 3;
console.log(kLargest(arr, k));