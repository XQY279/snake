document.oncontextmenu = function(){
    return false;   
}
document.onkeydown = function (e){
    if ( e.which == 123
    || ( e.which == 83 && (e.metaKey == true || e.ctrlKey == true) )
    || ((e.which == 73 || e.which == 74 || e.which == 85) && e.altKey == true && e.metaKey == true)
    || ( e.which == 73 && e.ctrlKey == true && e.shiftKey == true)
    || ( e.which == 85 && e.ctrlKey == true ) ){
        e.preventDefault();
    }
}

window.onload = function(){
    canv = document.getElementById("gc");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game,200);
}
px = py = 10;
gs = tc = 20;
ax = ay = 15;
xv = yv =0;
trail = [];
tail = 5;
function game(){
    px += xv;
    py += yv;
    if(px < 0){
        px = tc - 1;
    } else if(px > tc - 1){
        px = 0;
    } else if(py < 0){
        py = tc - 1;
    }else if(px > tc - 1){
        py = 0;
    }
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.fillStyle = "lime";
    for(var i = 0; i < trail.length; i++){
        ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
        if(trail[i].x == px && trail[i].y == py){
            tail = 5;
        }
    }
    trail.push({x:px, y:py});
    while(trail.length > tail){
        trail.shift();
    }

    if(ax == px && ay == py){
        tail ++;
        ax = Math.floor(Math.random() * tc);
        ay = Math.floor(Math.random() * tc);
    }
    ctx.fillStyle = "red";
    ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
}
function keyPush(evt){
    console.log(evt.keyCode)
    switch(evt.keyCode){
        case 37:  //左
            xv = -1; yv = 0;
            break;
        case 38:  //上
            xv = 0; yv = -1;
            break;
        case 39: //右
            xv = 1; yv = 0;
            break;
        case 40: //下
            xv = 0; yv = 1;
            break;       
    }
}


$('#btnT').tap(function(){
    xv = 0; yv = -1;
})
$('#btnL').tap(function(){
    xv = -1; yv = 0;
})
$('#btnR').tap(function(){
    xv = 1; yv = 0;
})
$('#btnB').tap(function(){
    xv = 0; yv = 1;
})



var btn = document.getElementsByClassName("btn");
btn[0].onmousedown = function(){
    xv = 0; yv = -1;
    this.style.background = "pink";
}
btn[1].onmousedown = function(){
    xv = -1; yv =0;
    this.style.background = "pink";
}
btn[2].onmousedown = function(){
    xv = 1; yv =0;    
    this.style.background = "pink";
}
btn[3].onmousedown = function(){
    xv = 0; yv = 1;   
    this.style.background = "pink";
}


btn[0].onmouseup = function(){
    this.style.background = "cornflowerblue";
}
btn[1].onmouseup = function(){
    this.style.background = "cornflowerblue";
}
btn[2].onmouseup = function(){
    this.style.background = "cornflowerblue";
}
btn[3].onmouseup = function(){
    this.style.background = "cornflowerblue";
}
