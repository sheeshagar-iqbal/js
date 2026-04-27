let passwordS=()=>{
        let inp= document.querySelector('#pass').value
        let show= document.querySelector('#show')

        if(inp.length<6){
            show.innerHTML='weak password'
        }
        else if(inp.length>=6 && inp.length<=10){
            show.innerHTML='medium password'
        }else{
            show.innerHTML='strong password'

        }
}

//    two
isTrue =true
let body =document.querySelector('body')
let mode =document.querySelector('#mode')
let darkmode =()=>{
    if(isTrue){
        body.style.backgroundColor='black'
        body.style.color='white'
        isTrue=!isTrue
        mode.innerHTML='light mode'
    }else{
        body.style.backgroundColor='white'
        body.style.color='black'
        isTrue=!isTrue
        mode.innerHTML='light mode'

    }
}


// three
let text=()=>{
        let inp= document.querySelector('#text').value
        let show= document.querySelector('#showtext')

            showtext.innerHTML=inp
}


isToggle =true
let toggletext =document.querySelector('#toggle')
let toggle =()=>{
    if(isToggle){
        isToggle=!isToggle
        toggletext.innerHTML='on'
    }else{
        isToggle=!isToggle
        toggletext.innerHTML='off'

    }
}


    //   five  -----------
    let clicked= document.querySelector('#clicked')
    let count =0
    let clickfun =()=>{
          count+=1 
        //   console.log(count);
          clicked.innerHTML=count
    }


    // six===================

    let checkbtn=()=>{
        let inp= document.querySelector('#check').value.trim()
        let show= document.querySelector('#showlen')
        let finaltext= document.querySelector('#finaltext')
        if (inp.length<=20){
            show.innerHTML=inp.length
            // console.log(inp);
            // console.log(inp.length);
            finaltext.innerHTML=inp
        }else{
            alert('stop you are  only taking  20 characters' + inp.length)
        }



}