function keysAndValues(data){
  var keys = [];
  var values = [];

  for (var key in data) {
    keys.push(key);
    values.push(data[key]);
  }

  return [keys, values];
}
