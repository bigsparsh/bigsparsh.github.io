// 						TOP BUTTTON FUNCTIONALITY						

document.addEventListener('scroll', ()=>{
	document.querySelector('.top-btn').style.setProperty('display' , 'flex');
})

document.querySelector('.top-btn').addEventListener('click', () =>{
	location.href = '#sec1';
})
