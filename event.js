var btn = document.querySelector('#show-or-hide');
var part1 = document.querySelector('.part1')

btn.addEventListener('click',function(){
    if(part1.style.display ==='block'){
        part1.style.display ='none'
    }else {
        part1.style.display='block'
    }
});

var btn = document.querySelector('#show-or-hide2');
var part2 = document.querySelector('.part2')

btn.addEventListener('click',function(){
    if(part2.style.display ==='block'){
        part2.style.display ='none'
    }else {
        part2.style.display='block'
    }
});


var btn = document.querySelector('#show');
var part3 = document.querySelector('.part3')

btn.addEventListener('click',function(){
    if(part3.style.display ==='block'){
        part3.style.display ='none'
    }else {
        part3.style.display='block'
    }
});


