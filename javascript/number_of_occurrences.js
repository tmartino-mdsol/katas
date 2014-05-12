Array.prototype.numberOfOccurrences = function(val) {
  
  var count = 0;
  for(var i = 0; i < this.length; i++){
    if(this[i] === val){
      count++;
    }   
  }
  return count;
}
