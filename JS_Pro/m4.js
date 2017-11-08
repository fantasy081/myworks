
function createtable(cols,rows) {
    var t=document.getElementById('ta');
    //            插入列表头
    var ha=document.createElement('tr');
    t.appendChild(ha);
    var h=document.createElement('th');
    ha.appendChild(h);

    for(k=0;k<cols;k++){
        var h=document.createElement('th');
        h.innerHTML=k+1;
        ha.appendChild(h);
    }
//            生成单元格
    for(i=0;i<rows;i++){
        var row=document.createElement('tr')
        t.appendChild(row);
//                插入行表头
        var col=document.createElement('td')
        col.innerHTML=i+1;
        row.appendChild(col);

        for (j=0;j<cols;j++){
            var col=document.createElement('td')
            row.appendChild(col);
        }
    }
}

function setpos(pos) {
    var v=document.getElementById('vip');
    v.style.left=pos['col']*41+'px';
    v.style.top=pos['row']*41+'px';
}

function setdir(dir) {
    d=document.getElementById('dir');
    switch (dir){
        case 0:
            d.style.left=0;
            d.style.top='-30px';
            break;
        case 1:
            d.style.left='30px';
            d.style.top=0;
            break;
        case 2:
            d.style.left=0;
            d.style.top='30px';
            break;
        case 3:
            d.style.left='-30px';
            d.style.top=0;
            break;
    }
}

function move(pos,dir,cols,rows) {
    // 需要用到的全局变量都需要作为参数传入
    var sel=document.getElementById('sel');

    switch (sel.value.toUpperCase()){
        case 'GO':
            switch (dir){
                case 0:
                    if(pos['row']>1){
                        pos['row']-=1;
                        setpos(pos);
                    }else {
                        alert("超出上界了")
                    }
                    break;
                case 1:
                    if(pos['col']<cols){
                        pos['col']+=1;
                        setpos(pos);
                    }else {
                        alert("超出右界了")
                    }
                    break;
                case 2:
                    if(pos['row']<rows){
                        pos['row']+=1;
                        setpos(pos);
                    }else {
                        alert("超出下界了")
                    }
                    break;
                case 3:
                    if(pos['col']>1){
                        pos['col']-=1;
                        setpos(pos);
                    }else {
                        alert("超出左界了")
                    }
                    break;
            }
            break;
        case "TUN LEF":
            dir=(dir+3)%4;
            // setdir(dir);
            document.getElementById('vip').style.transform = 'rotate(' + 90 * dir + 'deg)';
            break;
        case "TUN RIG":
            dir=(dir+1)%4;
            // setdir(dir);
            document.getElementById('vip').style.transform = 'rotate(' + 90 * dir + 'deg)';
            break;
        case 'TUN BAC':
            dir=(dir+2)%4;
            // setdir(dir);
            document.getElementById('vip').style.transform = 'rotate(' + 90 * dir + 'deg)';
            break;
        case 'TRA LEF':
            if(pos['col']>1){
                pos['col']-=1;
                setpos(pos);
            }else {
                alert("超出左界了")
            }
            break;
        case 'TRA TOP':
            if(pos['row']>1){
                pos['row']-=1;
                setpos(pos);
            }else {
                alert("超出上界了")
            }
            break;
        case 'TRA RIG':
            if(pos['col']<cols){
                pos['col']+=1;
                setpos(pos);
            }else {
                alert("超出右界了")
            }
            break;
        case 'TRA BOT':
            if(pos['row']<rows){
                pos['row']+=1;
                setpos(pos);
            }else {
                alert("超出下界了")
            }
            break;
        case 'MOV LEF':
            dir=3;
            document.getElementById('vip').style.transform = 'rotate(' + 90 * dir + 'deg)';
            if(pos['col']>1){
                setTimeout(function () {
                    pos['col']-=1;
                    setpos(pos);
                },1000)
            }else {
                alert("超出左界了")
            }
            break;
        case 'MOV TOP':
            dir=0;
            document.getElementById('vip').style.transform = 'rotate(' + 90 * dir + 'deg)';
            if(pos['row']>1){
                setTimeout(function () {
                    pos['row']-=1;
                    setpos(pos);
                },1000)
            }else {
                alert("超出上界了")
            }
            break;
        case 'MOV RIG':
            dir=1;
            document.getElementById('vip').style.transform = 'rotate(' + 90 * dir + 'deg)';
            if(pos['col']<cols){
                setTimeout(function () {
                    pos['col']+=1;
                    setpos(pos);
                },1000)
            }else {
                alert("超出右界了")
            }
            break;
        case 'MOV BOT':
            dir=2;
            document.getElementById('vip').style.transform = 'rotate(' + 90 * dir + 'deg)';
            if(pos['row']<rows){
                setTimeout(function () {
                    pos['row']+=1;
                    setpos(pos);
                },1000)
            }else {
                alert("超出下界了")
            }
            break;
    }
    // 需要修改的全局变量通过返回值返回
    return pos,dir;
}






