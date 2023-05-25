var btn = document.querySelector('#show-or-hide2');
var part2 = document.querySelector('.part2')

btn.addEventListener('click',function(){
    if(part2.style.display ==='block'){
        part2.style.display ='none'
    }else {
        part2.style.display='block'
    }
});