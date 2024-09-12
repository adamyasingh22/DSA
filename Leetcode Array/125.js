// valid palindrome

var isPalindrome = function(s) {
     let start = 0
     let end = s.length-1   
        while(start < end){

            while(start<end && !alphanum(s[start])) {
                start++;
            }
            while(end>start && !alphanum(s[end])) {
                end--;
            }
            if(s[start].toLowerCase() != s[end].toLowerCase() ){
                return false
            }
            start++;
            end--;
        }
        return true
};
