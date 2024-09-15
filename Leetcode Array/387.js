//First Unique Character in a String


var firstUniqChar = function(s) {
    s = s.split('')
    let map = {}
    for (let i of s) {
        if (!map[i]) map[i] = 0
        map[i] += 1
    }

    for (let i in s) {
        if (map[s[i]] === 1) return i
    }

    return -1    
};