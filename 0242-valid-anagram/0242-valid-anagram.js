/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
        // TODO: Write your code here
    if (s.length !== t.length) {
      return false;
    }
    let chars = {};
    for (let i = 0; i < s.length; i++) {
      chars[s[i]] = (chars[s[i]] || 0) + 1;
      chars[t[i]] = (chars[t[i]] || 0) - 1;
    }
    for (let char in chars) {
      if (chars[char] !== 0) {
        return false;
      }
    }
    return true;
};