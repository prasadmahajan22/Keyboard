let body = document.querySelector("body");
let showkeys = document.querySelector("h1");
let span = document.querySelector("span");
let keycode = document.querySelector(".keycode");
let audio = document.querySelector("audio")

body.addEventListener("keydown" , (event) => {
    audio.play();
    keycode.style.display = "block"; 
    if(event.ctrlKey && event.key !== undefined){
        
        showkeys.innerHTML = `You Pressed&nbsp`;
        span.innerText = "Ctrl + " + event.key; 
        keycode.innerText = event.keyCode + 17;
    }
    else if(event.altKey && event.key !== undefined){
        
        showkeys.innerHTML = `You Pressed&nbsp`;
        span.innerText = "Alt + "  + event.key ;  
        keycode.innerText = event.keyCode + 18;
    }
    else{
        if(event.keyCode === 32){
            span.innerText = "space"
            showkeys.innerHTML = `You Pressed&nbsp`;
            keycode.innerText = event.keyCode;  
            
        }else{
            showkeys.innerHTML = `You Pressed&nbsp`;
            span.innerText =  event.key;
            keycode.innerText = event.keyCode;  
        }
        
       
    } 
    
});