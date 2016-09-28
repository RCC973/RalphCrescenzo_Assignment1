function PrimeFind(num) {
    var i = 1;
    var c = 0;
    var arr = [];
    while (c < num){
        i++;
        if (isPrime(i)){
            arr.push(i);
            c++;
        }
    }
    return arr[num-1];
}

function isPrime(num){

    for (i=2; i < num; i++){
        if (num % i === 0){
            return false;
        }
    }
    return true;
}
console.log(PrimeFind(10001))