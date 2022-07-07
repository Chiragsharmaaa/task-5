// prints line 9 even tho not created on html
// //getElementByTagName 
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1])
// li[1].textContent = 'Hello 2'
// li[1].style.fontWeight = 'bold'
// li[1].style.backgroundColor = 'yellow'
// li[4].textContent = 'Heu'
// // for (let i = 0;i < li.length; i++){
// //     li[i].style.backgroundColor = '#f4f4f4';
// // }


// doesnt prints line21 until its created in html first
var items = document.getElementsByClassName('list-group-item');
console.log(items)
console.log(items[1]);
items[1].textContent = 'Hello 2'
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow'
items[4].textContent = 'YO'

// querySelector
// var headr = document.querySelector('#main-header')
// headr.style.borderBottom = 'solid 4px #ccc'