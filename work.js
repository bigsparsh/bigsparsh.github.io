let hamMenu = document.querySelector('.ham-menu');
let offMenu = document.getElementById('men');
let x = 0;
hamMenu.addEventListener('click', ()=>{
	x++;
	console.log(offMenu.style.left);
	if(window.innerWidth < 600){
		if(x%2===0){
			offMenu.style.left = '-75%';
		}
		else{
			offMenu.style.left = '0%';
		}
	}
	else{
		if(x%2===0){
			offMenu.style.left = '-75%';
		}
		else{
			offMenu.style.left = '0%';
		}
	}
})

window.addEventListener('resize', ()=>{
	if(window.innerWidth > 1000){
		offMenu.style.left = '-75%';
	}
})
