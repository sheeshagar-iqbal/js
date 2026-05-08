//  ls is bulit  in feature  in js that allow yor to store data in the web browser. this data stays saved even after teh page is refreshed or the browser is closed and reopened.
// key point 
// store data key -value pairs, not delete automaically ,you must clear it manually.
// only store string.if you want to store obj and arr you must convert themm into a string using .jsonstringify and back using json.parse

// setitem getitem removeitem clear 


let login =()=>{
    let name ='iqbal'
    let pass='123iop'

    localStorage.setItem('username',name)
    localStorage.setItem('pass',pass)
    location.reload()
}
let username = localStorage.getItem('username')

    document.querySelector('#showname').innerHTML=` ${  username || 'please login before the use '}`


let logout=()=>{
    localStorage.removeItem('username')
    location.reload()

}