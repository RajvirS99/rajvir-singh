window.onmousemove=function(e){

    let newNum=((e.pageX - innerWidth/2)/(innerWidth/2));
    let newNum2=((e.pageY - innerHeight/2)/(innerHeight/2));
    
    // console.log(newNum);
    document.querySelector('img').style.transform=`translate(${(newNum*0.5)}%,${(newNum2*0.5)}%)`;
    }