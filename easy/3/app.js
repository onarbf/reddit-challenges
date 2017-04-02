var message = 'Please, hire me coño!'
console.log(message);


caesarEncrypthion(message);

function caesarEncrypthion(text){
    var textArray = text.split('');
    var textCoded = [];
    console.log(textArray);
    for(let i =0;i<=text.length;i++){
        if(textArray[i] === ' '){
            textArray[i] = ' ';
        }else{
        textArray[i] = text.charCodeAt(i);
        }
        
        for(let j = 0;j<textArray.length-1;j++){
            if(textArray[j] === ' '){
                textCoded[j] = ' ';
            }else{
                if(!String.fromCharCode(textArray[j]+1)){
                    textCoded[j] = String.fromCharCode(0);   
                }else{
                    textCoded[j] = String.fromCharCode(textArray[j]+3);   
                }
                
            }
            }
    }
    console.log(textCoded.join(''));
    
}








