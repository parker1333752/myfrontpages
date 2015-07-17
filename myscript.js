var isStop = false;
var count = 0;
var timer1 = setInterval(whileLoop, 10);

function whileLoop(){
    if(!isStop){
        count += 0.01;
        $("#p1").html(count + "<br>");
    }
}

function delayMs(ms){
    if (ms <= 0) return;
    var timestamp = new Date().getTime();
    while(new Date().getTime() - timestamp < ms);
    return;
}

function toggleIsStop(){
    alert(isStop);
    if(isStop == true) {isStop = false;}
    else {isStop = true; count = 0;}
}
