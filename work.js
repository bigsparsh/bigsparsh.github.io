
function menu(){
	document.querySelector('.menu-bar').classList.toggle('appear');
}

let box = document.querySelector('.cursor').style;
let x, y;

document.addEventListener('mousemove', (e) =>{
	x = e.clientX;
	y = e.clientY;
	box.setProperty("left", (x-20)+"px");
	box.setProperty("top", (y-20)+"px");
})

document.addEventListener('mousedown', (e) =>{
	box.setProperty("transform","scale(0.5)");
	box.setProperty("background","white");
})
document.addEventListener('mouseup', (e) =>{
	box.setProperty("transform","scale(1)");
	box.setProperty("background","none");
})
