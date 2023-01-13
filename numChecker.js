const num=371;

let isPrime=(n)=>{
    if(n===2){
        return true;
    }
    for(let i=2;i*i<=n;i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}
let isArmstrong=n=>{
    let sumCube=0;
    let temp=n;
    let length=Math.floor(1+Math.log10(n))
    for(let idx=1;idx<=length;idx++){
        let dig=temp%10;
        temp=Math.floor(temp/10);
        sumCube+=(dig*dig*dig)
    }
    return sumCube==n;
}
console.log(isPrime(num));
console.log(isArmstrong(num));
// const fn =()=>true;