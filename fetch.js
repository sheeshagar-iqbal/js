 let Getdata= async()=>{
        let api ='https://jsonplaceholder.typicode.com/posts'
        let res=await fetch(api,{method:'GET'})
        let data= await res.json()
        console.log(data);

        let con=document.querySelector('#boxid')
 data.map((e)=>{
        document.querySelector('#boxid').innerHTML+=`
       
  <tr>
    <td>${e.userid}</td>
    <td>${e.id}</td>
    <td>${e.title}</td>
    <td>${e.body}</td>
    
  </tr>
  
        `
     
        
    


 })
        
 }
Getdata()





