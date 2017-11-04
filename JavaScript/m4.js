
function left_in() {
    var txt=document.getElementById("input").value;
    var list=document.getElementById("output");
    var newnode=document.createElement('div');
    newnode.innerHTML=txt;
    // list.insertBefore(newnode,list.firstChild);
    list.prepend(newnode);
    newnode.onclick=function () {
        del(this);
    }
}

function right_in() {
    var txt=document.getElementById("input").value;
    var list=document.getElementById("output");
    var newnode=document.createElement('div');
    newnode.innerHTML=txt;
    list.appendChild(newnode);
    newnode.onclick=function () {
        del(this);
    }
}

function left_out() {
    var list=document.getElementById("output");
    alert("删除数字：" +list.firstElementChild.innerHTML +"！");
    list.removeChild(list.firstElementChild);
}

function right_out() {
    var list=document.getElementById("output");
    alert("删除数字：" +list.lastElementChild.innerHTML +"！");
    list.removeChild(list.lastElementChild);
}

function del(node) {
    alert("删除数字：" +node.innerHTML +"！");
    node.parentNode.removeChild(node);
}

window.onload=function () {

    var btn=document.getElementById("left-in");
    btn.onclick=function () {
        left_in();
    }

    var btn=document.getElementById("right-in");
    btn.onclick=function () {
        right_in();
    }

    var btn=document.getElementById("left-out");
    btn.onclick=function () {
        left_out();
    }

    var btn=document.getElementById("right-out");
    btn.onclick=function () {
        right_out();
    }

    var nums=document.getElementById("output").children;
    for (var i=0;i<nums.length;i++){
        nums[i].onclick=function () {
            del(this);
        }
    }

}

