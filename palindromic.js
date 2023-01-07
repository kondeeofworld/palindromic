const getLongestPalindromicSubstring = (s) => {
    let longest = "";

    if (s.length > 1000) {
        console.log('The string should be no more than 1000 characters.');
        return;
    }

    for (let i = 0; i < s.length; i++) {
        // Odd length palindromes
        let palindrome = findPalindrome(s, i, i);
        if (palindrome.length > longest.length) {
            longest = palindrome;
        }
        // Even length palindromes
        palindrome = findPalindrome(s, i, i + 1);
        if (palindrome.length > longest.length) {
            longest = palindrome;
        }
    }
    return longest;
};

const findPalindrome = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.slice(left + 1, right);
};

const ans1 = getLongestPalindromicSubstring('babad');
const ans2 = getLongestPalindromicSubstring('cbbd');
console.log(ans1, ans2);
