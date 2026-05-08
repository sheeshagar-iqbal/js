        // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;







let validation=()=>{
    let name=document.querySelector('#Name').value.trim()
    let number=document.querySelector('#Number').value.trim()
    let email=document.querySelector('#Email').value.trim()
    let password=document.querySelector('#Password').value.trim()
    let cpassword=document.querySelector('#Cpassword').value.trim()

    let errname=document.querySelector('#errname')
    let errnum=document.querySelector('#errnum')
    let erremail=document.querySelector('#erremail')
    let errpassword=document.querySelector('#errpassword')
    let errcpassword=document.querySelector('#errcpassword')

    if(name==""){
        errname.innerHTML='enter the name'
        return false
    }
    else if(number==""){
        errnum.innerHTML='enter the number'
        return false
    }
    else if(email==""){
        erremail.innerHTML='enter the email'
        return false
    }
    else if(password==""){
        errpassword.innerHTML='enter the password'
        return false
    }
    else if(cpassword==""){
        errcpassword.innerHTML='enter the name'
        return false
    }
    else if(number.length!=10){
        errnum.innerHTML='please enter the 10 digit only'
        return false
    }
    else if(isNaN(number)){
        errnum.innerHTML='please enter number only'
        return false
    }
    else if(!(email.includes('@') && email.includes('.com'))){
        erremail.innerHTML='please enter valid email'
        return false
    }
    else if(!(password.match(/[123456789]/) && password.match(/[@.#$!%^&*.?]/) &&password.match(/[A-Z]/) && password.match(/[a-z]/))){
        errpassword.innerHTML='please enter the strong password'
        return false
    }
    else if (password!=cpassword){
        errcpassword.innerHTML= 'please enter right password'
        console.log(cpassword);
        document.querySelector('#Cpassword').value=''
        document.querySelector('#Cpassword').focus()

        
        return false
    }

    localStorage.setItem('name',name)
    localStorage.setItem('email',email)
    localStorage.setItem('number',number)
    localStorage.setItem('password',password)
    localStorage.setItem('cpassword',cpassword)
    location.href='login.html'
    return false
}


let login=()=>{
    let loginname=document.querySelector('#loginname').value.trim()
    let loginpass=document.querySelector('#loginpword').value.trim()

    let lsname= localStorage.getItem('name')
    let lspass= localStorage.getItem('password')

   
    // return false
 
    

    if(loginname==lsname && loginpass==lspass){
        alert('login sucess')
        location.href='localstorage.html'
        return false
    }else{
        alert('invalid credentails')

        return false
    }


}