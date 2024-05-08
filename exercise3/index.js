// Write a function that returns a new array with items in reverse from the given array.
// For example, reverse([1, 2, 3]) should return [3, 2, 1].
// Don't use the built-in Array reverse method.
export function reverse(array) {
    const revArray = [];
    for (let i = 1 ; i < array.length + 1 ; i ++) {
    revArray.push(array[array.length - i]); }
    return revArray ;       
}



// Rewrite the function so that instead of returning a new array, it modifies the input array to reverse the order.
export function reverseInPlace(array) { 
    for (let i = 0 ; i < Math.round(array.length/2) ; i ++){
    let store = array[i];
    array[i] = array[array.length-i-1];
    array[array.length-1-i] = store ;   
}  
    return array ;  
}