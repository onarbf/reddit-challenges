//run terminal "node app.js"


var numbers =  '10 120 23 54 120 512313'; 

numbers = numbers.split(' '); //we make the array

//we clean the array of /n and garbage    
for(let i = numbers.length - 1; i >= 0; i--) {
    numbers[i] = Number(numbers[i]);
    if(!numbers[i]) {
       numbers.splice(i, 1);
    }
}

//we run the array every 2 positions.
for(let i =0;i<numbers.length-1;i=i+2){ 
    if(numbers[i] < numbers[i+1]){
            var num1simpl=numbers[i];
            var num2simpl=numbers[i+1];
    }else{
            var num1simpl=numbers[i+1];
            var num2simpl=numbers[i];
    }
    
// the simplification
    console.log(numbers[i]+ '/' + numbers[i+1]);
    for(let i=num1simpl;i>=0;i--){
        if(num1simpl%i===0 && num2simpl%i===0){
            num1simpl = num1simpl/i;
            num2simpl = num2simpl/i;
        }
   
    }
    console.log(num1simpl+'/'+num2simpl); 
}

