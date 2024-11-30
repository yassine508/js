function reverse(ch){
    return  ch.split('').reverse().join(''); 
    
}
//console.log(reverse("hello"))
function Count_Characters(ch){
    sum=0
    for (var i in ch){
        sum+=1
    }
    return sum


}
//console.log(Count_Characters("hhh"))
function capitalize_words(ch){
    let c=ch[0].toUpperCase()
    for ( let i = 1; i < ch.length; i++){
        if (ch[i-1]==" " ){
            c+=ch[i].toUpperCase()
        }
        else{
            c+=ch[i]
        }
    }
    return c
}
//console.log(capitalize_words("yassine chemlali"))
function max_min(t){
    max=t[0]
    min=t[0]
    for( var i in t){
        if (max>t[i]){
            max=t[i]
        }
        if (min<t[i]){
            min=t[i]
        }
    }
    return [max,min]
}
//console.log(max_min([10,2,3,1]))
function sum(tab){
    s=0
    for (var i in tab){
        s+=tab[i]
    }
    return s
}
//console.log(sum([10,20,20]))
function filter(tab){
    let t= []
    for (var i in tab){
        if (tab[i]%2==0){
            t.push(tab[i])
        }
    }
    return t

}
//console.log(filter([1,2,3,4,5,6]))
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    s = 1;
    for (i = 2; i <= n; i++) {
        s *= i;
    }
    return s;
}
//console.log(factorial(5))
function prime(n) {
    if (n <= 1) {
        return false; 
    }
    for (let i = 2; i <=Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; 
        }
    }
    return true; 
}
//console.log(prime(7));

