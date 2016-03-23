// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var hasclass = [];
  var body = document.body;
  // your code here
  if(body.classList.contains(className)) {
  	hasclass.push(body);
  }
  var recursive = function(element) {
    if(element.childNodes.length>0) {
      for(var i=0; i<element.childNodes.length; i++) {
        if(element.childNodes[i].classList!==undefined) {
          if(element.childNodes[i].classList.contains(className)) {
            hasclass.push(element.childNodes[i]);
          }
        }
      recursive(element.childNodes[i]); 
      };
    };
  };
  recursive(body);
  return hasclass;
};
