
var text = `La vída, es maravillosa y no necesito nada mas.`;
text = text.toLowerCase();
res = '';
var charTest = false;
console.log(text);
var abc= 'abcdefghijklmnñopqrstuvwxyz';
for (var i = 0; i < text.length; i++) {
      for (var j = 0; j < abc.length; j++) {
        if(text[i] === abc[j]){
          res += (abc[abc.length - j -1]);
          charTest = true;
        }
      }
      if(charTest === false){
        res += text[i];
      }
      charTest = false;
  }


console.log(res);
