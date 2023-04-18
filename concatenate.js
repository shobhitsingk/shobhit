
function longest_consec(strarr, k) {
  const n = strarr.length;
  if (n === 0 || k > n || k <= 0) {
    return " Nothing in Elm"; 
  }

  let max_length = 0;
  let longest_str = "";
  let curr_str = strarr.slice(0, k).join("");
  let curr_length = curr_str.length;
  max_length = curr_length;
  longest_str = curr_str;
  for (let i = k; i < n; i++) {
    curr_str = curr_str.slice(strarr[i - k].length) + strarr[i];
    curr_length = curr_str.length;
    if (curr_length > max_length) {
      max_length = curr_length;
      longest_str = curr_str;
    }
  }
  return longest_str;
}
let x=longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
let y=longest_consec(["zkroke", "abigail", "lomnaa", "kjfkf", "kjkdas", "zas", "thetaad", "abigail"], 2)
console.log(x)
console.log(y)



// Time Complexity
/*The time complexity of the provided solution is O(nk) where n is the length of the input array strarr and k is the integer. 
The space complexity of the solution is O(k) because we store the current string in curr_str, which can have a length of up to k.
The loop that iterates over strarr has n iterations, and for each iteration, we slice and join k strings, which takes O(k) time.
Therefore, the overall time complexity of the loop is O(nk).
If k is constant, the time complexity will be O(n), which is linear.*/