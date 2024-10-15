//soal 1
const arr = [20,40,50,10];

console.log(arr[0]); 

console.log(arr.reduce((acc,curr) => acc + curr)/arr.length)


//soal 2

console.log(arr.sort((a,b) => a - b ));

 
//soal 3
console.log(arr.sort((b,a) => a-b));


//soal 4
const soal4 = (a) =>{

    const ray = [];
    
    for (let i = 0; i < a ; i++ ){
        
        if(i == 0 ){
            ray.push(0);
        }
        else if (i== 1){
            ray.push(1);
            
        }else{
            ray.push(ray[i-1] + ray [i - 2]);
        }
    }
    return ray;
};