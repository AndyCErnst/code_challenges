function AtbashCipher(abc) {
  var length = abc.length;
  var middle = length/2;
  var ABC; 
  if(length % 2 === 0){
    // If abc length is even it requires a fulcrum
    abc = abc.slice(0, middle) + " " + abc.slice(middle);
  }
  ABC = abc.toLocaleUpperCase();
  
  this.encode = function (str) {
    var strArr = str.split("");
    var index, i;
    for(i = 0; i < strArr.length; i++){
      index = -abc.indexOf(strArr[i]);
      // Check is letter found in lower case set (1 means not found)
      if(index !== 1){
        strArr[i] = abc.slice(index+length, index+length+1);
      } 
      // Check upper case set
      else if ((index = -ABC.indexOf(strArr[i])) !== 1) {
        strArr[i] = ABC.slice(index+length, index+length+1);
      }
    }
    return strArr.join("");
  };
  
  this.decode = this.encode;
}