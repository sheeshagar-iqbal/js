// let change =(self)=>{
//     console.log(self.id);
    
//     document.querySelector('#canvas').style.backgroundColor=self.id

// }

// const btn= document.querySelectorAll('.button')
// const body =document.querySelector('body')
// // console.log(btn);
// btn.forEach(function(button){
//     button.addEventListener('click',function(e){
//     // console.log(e);
//     // console.log(e.target.id);
//     body.style.backgroundColor=e.target.id

//     })
    
// })

// -------------------bg -change ---------------===----------

let isture= false
let toggle =()=>{
    let con= document.querySelector('#container p')

    if(isture){
        con.style.display='block'
        isture=!isture

    }else{
        con.style.display='none'
        isture=!isture

    }
}

// --------------toggle---------------------