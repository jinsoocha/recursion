// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if(obj===null) {
    return 'null'
  }
  else if(obj===undefined || typeof obj==='function') {
        
  }
  else if(obj.constructor===Array) {
    var newobj="[";
    for(var i=0; i<obj.length; i++) {
      newobj=newobj+stringifyJSON(obj[i])+',';
    }
    if(newobj.length>1) {
      newobj=newobj.slice(0,-1);
    }
    return newobj+"]";
  }
  else if(obj.constructor===Object) {
  	var newobj='{';
    for(var key in obj) {
      if(obj[key]===undefined || typeof obj[key]==='function') {
        newobj=newobj;
      }
      else {
      newobj=newobj+'"'+key+'":'+stringifyJSON(obj[key])+',';
      }
    }
    if(newobj.length>1) {
      newobj=newobj.slice(0,-1);
    }
    return newobj=newobj+'}';
  }    
  else if(obj.constructor===String) {
    return '"'+obj+'"';
  }
  else {
    return ''+obj;
  }
};