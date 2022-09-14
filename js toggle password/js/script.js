var input = document.getElementById('pass');
var btn = document.getElementById('btn');


btn.addEventListener('click',handel);

// functions

 function handel(){
    if(input.getAttribute('data_text')=="show"){
        input.setAttribute('type','text');
        input.setAttribute('data_text','hide');
        btn.innerHTML="Hide";
    }else{
        input.setAttribute('type','password');
        input.setAttribute('data_text','show');
        btn.innerHTML="Show";
    }
}