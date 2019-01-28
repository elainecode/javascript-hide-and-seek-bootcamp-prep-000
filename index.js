function getFirstSelector(selector) {
  let select  = document.querySelector(selector);
  return select;
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function deepestChild() {
 let node = document.getElementById('grand-node');
  while (node.querySelector('div')) {
    node = node.querySelector('div');  
  }
 return node;
}

function increaseRankBy(n) {
 const nodeList = document.querySelectorAll('ul.ranked-list li');
 
 for (let i = 0; i < nodeList.length; i++) {
   let num = parseInt(nodeList[i].innerHTML) + n;
   nodeList[i].innerHTML = num.toString();
  } 

}

