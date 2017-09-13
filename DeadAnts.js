deadAntCount = function(ants) {
  if(ants == null) {
      return 0
  }
  var removeliveAnts = ants.replace(/ant/gi, "..")  
  var a = removeliveAnts.match(/a/g);
  var n = removeliveAnts.match(/n/g);
  var t = removeliveAnts.match(/t/g);

  return Math.max(a?a.length:0 , n?n.length:0 , t?t.length:0)
}
