// 						TOP BUTTTON FUNCTIONALITY						

document.addEventListener('scroll', ()=>{
	document.querySelector('.top-btn').style.setProperty('display' , 'flex');
})

document.querySelector('.top-btn').addEventListener('click', () =>{
	location.href = '#sec1';
})

//					REGISTER FORM FUNCTIONALITY

let btn = document.querySelector('.sml-btn');
let closeBtn = document.querySelector('.close-btn');
btn.addEventListener('click', ()=>{
	appearRegister();
})
closeBtn.addEventListener('click', ()=>{
	disappearRegister();
})

let regForm = document.querySelector('.form-back');

function appearRegister(){
	regForm.style.display = 'flex';
}
function disappearRegister(){
	regForm.style.display = 'none';
}
