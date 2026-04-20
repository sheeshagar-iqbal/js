var rect =document.querySelector('#rect');

rect.addEventListener('mousemove',function(details) {
    // console.log(rect.getBoundingClientRect())
    var rectanglelocation =rect.getBoundingClientRect();
    var insidererctval =details.clientX -rectanglelocation.left;

    if (insidererctval<rectanglelocation.width/2){
        console.log('left')
        
    }
    else{
        console.log('right')
    }
})