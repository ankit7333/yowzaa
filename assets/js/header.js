const registerBtn = document.querySelector('.registernow');
registerBtn.addEventListener('click', ()=>{
  registerBtn.classList.add('active');
});
const removeActive = () => {
  registerBtn.classList.remove('active');
}