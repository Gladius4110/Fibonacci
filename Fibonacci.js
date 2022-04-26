let n;
do {
    n=Number(prompt("Diga un número mayor o igual a 0"))
} while (n<0 ||isNaN(n));
function fb(n)
{
    if(n>1){
        return fb(n-1)+ fb(n-2)
    }
    else if(n==1){
        return 1
    }
    else if (n==0){
        return 0
    }else{
        console.log("No digitó un número")
    }
}
console.log("Su número de Fibonacci es"+fb(n))