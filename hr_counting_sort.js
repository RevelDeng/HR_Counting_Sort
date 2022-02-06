function countingSort(arr) {
    // Write your code here
    var new_arr = Array(100).fill(0)
    for (let i = 0; i < arr.length; i++) {
        new_arr[arr[i]]++
    }
    return new_arr
}