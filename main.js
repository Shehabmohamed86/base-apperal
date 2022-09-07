const email = document.querySelector('#email')
const submit = document.querySelector('#submit')
const errorSignal = document.querySelector('.error')
const messsage = document.querySelector('.message')

submit.addEventListener('click',(e)=>{
  validation(e)
})



function validation(e){
   e.preventDefault();
    
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
    messsage.classList.remove('active-message')
    errorSignal.classList.remove('active-error')
  }else{
    messsage.classList.add('active-message')
    errorSignal.classList.add('active-error')
  }
 }