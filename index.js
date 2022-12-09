 const myForm=document.querySelector('#my-form')

 const emailInput=document.querySelector('#email')

 const firstNameInput=document.querySelector('#first_name')

 const usersElement = document.querySelector('#users')
const msg = document.querySelector('.msg')


myForm.addEventListener('submit' ,function(e){
    e.preventDefault()

    firstName=firstNameInput.value
    email=emailInput.value
    // console.log(firstName  ,email)
    if(!firstName ||!email){
    showError("please enter values")
    return}
    // console.log(firstName  ,email)
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        showError('please enter a valid email address')
        return;
      }
    usersElement.innerHTML +=
    `<li class="test"><b>${firstName}</b>: <a href="mailto:${email}">${email}</a></li>`
    firstNameInput.value = ''
    emailInput.value = ''
})
function showError(message){
 msg.innerText=message
 msg.classList.add('error')

setTimeout(function(){
    msg.innerText=""
    msg.classList.remove('error')
} ,3000 )

 
}