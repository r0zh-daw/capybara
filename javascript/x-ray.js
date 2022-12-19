const button = document.getElementById('x-ray-btn');
const img = document.getElementById('img2');

let toggle = false

button.addEventListener('click', () => {
    if(!toggle){
        img.style.opacity = '100%';
        button.innerHTML = 'Turn off X-ray'
        toggle=true;
    }
    else{
        img.style.opacity = '0%';
        button.innerHTML = 'Turn on X-ray'
        toggle=false;
    }
});