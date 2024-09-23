//455. Assign Cookies

var findContentChildren = function(g, s) {
    let n = g.length, m = s.length;
    let l =  0 , r = 0;
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    while( l < m){
        if( g[r] <= s[l]){
            r++;
        }
        l = l+1;
    }
    return r;
};
