// 

let fun = ()=>{
  let okk = document.getElementById('show')
  okk.innerText='this is js code'
  okk.style.color='red'
  let ok1=okk.innerHTML='<u>sid</u>'

}



let bg = ()=>{
  let okk = document.getElementById('box')
  
  okk.style.backgroundColor='red'

}

let box = ()=>{
  let okk = document.querySelector('#box p')
  
  okk.innerText=''

}


let red = ()=>{
  let okk = document.querySelector('#box')
  
  okk.style.backgroundColor='red'

}
let green = ()=>{
  let okk = document.querySelector('#box')
  
  okk.style.backgroundColor='green'

}
let blue = ()=>{
  let okk = document.querySelector('#box')
  
  okk.style.backgroundColor='blue'

}

let hide = ()=>{
  let okk = document.querySelector('#box p')
  
  okk.style.display='none'

}
let show = ()=>{
  let okk = document.querySelector('#box p')
  
  okk.style.display='flex'

}

let c= 0
let increament = ()=>{
  let okk = document.querySelector('#number')
  
  // let num = okk.innerText
    // okk.innerText=''
    okk.innerText= ++c

}
// increament()
let decreament = ()=>{
  let okk = document.querySelector('#number')
  
  // let num = okk.innerText
    // okk.innerText=''
    if(c!=0){
    okk.innerText= --c

    }


}
// decreament()

let img = ()=>{
  let okk = document.querySelector('#box')
  // console.log('hello');
  
  okk.style.backgroundImage="url(w23.jpeg)"

}
let change_img = ()=>{
  let okk = document.querySelector('#box2 #img')
  // console.log('hello');
  
  okk.src=('w23.jpeg')

}


let imagechange = (self)=>{
  let okk = document.querySelector('#chgimg')
  // console.log('hello');
  
  okk.src=self.src

}


let showinp = ()=>{
  let okk = document.querySelector('#inp').value
  document.querySelector('#showinp').innerHTML=okk
  console.log('done');
    document.querySelector('#colorbox').style.backgroundColor=okk
}

// let showinp = ()=>{
//   let okk = document.querySelector('#inp').value
//   document.querySelector('#colorbox').style.backgroundColor='red'
//   console.log('done');
  
// }
