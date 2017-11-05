
function left_in() {
    var txt=document.getElementById("input").value;
    if(test(txt)){/*检测输入是否合法*/
        var list=document.getElementById("output");
        if(list.children.length<60){/*检测元素长度*/
            var newnode=document.createElement('li');
            newnode.innerHTML=txt;
            list.prepend(newnode);/*将新节点插在最前*/
            newnode.onclick=function () {
                del(this);/*插入点击删除功能*/
            }
        }else{
            alert("元素个数超过60");
        }
    }
    gao();
}

function right_in() {
    var txt=document.getElementById("input").value;
    if(test(txt)){
        var list=document.getElementById("output");
        if(list.children.length<60){
            var newnode=document.createElement('li');
            newnode.innerHTML=txt;
            list.appendChild(newnode);
            newnode.onclick=function () {
                del(this);
            }
        }else {
            alert("元素个数超过60");
        }
    }
    gao();
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

function test(text) {
    var reg=/^[0-9]*$/;
    if(reg.test(text)){
        if(text<10){
            alert("输入数字需大于等于10");
            return false;
        }
        else if(text>100){
            alert("输入数字需小于等于100");
            return false;
        }
        else {
            return true;
        }
    }else {
        alert("请输入10-100的数字");
    }
}

function gao() {
    nums=document.getElementById("output").children;
    for (var i=0;i<nums.length;i++){
        nums[i].style.height=nums[i].innerHTML+"px";
    }
}

function sort(list) {

    var li=list.getElementsByTagName('li');
    var arr=[];/*li不是数组，需要定义一个数组*/
    for (var i=0;i<li.length;i++){
        arr[i]=li[i];/*把ul的li元素赋到arr数组中*/
    }

    arr.sort(function (a,b) {/*对转化为数组的元素进行排序*/
        var n1=parseInt(a.innerHTML);
        var n2=parseInt(b.innerHTML);
        return n1-n2;
    })

    for (var i=0;i<arr.length;i++){/*把排好序的元素放回原来的UL中*/
        list.appendChild(arr[i]);
        // appendChild()方法有一个特性：如果将已存在文档中的一个节点再次插入，
        // 那么该节点会从它原来在文档中的位置删除，然后在新的位置重新被插入。
    }
}

function sou() {
    var nodes=document.getElementById("output").children;
    var val=document.getElementById("sou").value;
    var reg = new RegExp(eval('/'+val+'/'));
    for(var i=0;i<nodes.length;i++){
        if(reg.test(nodes[i].innerHTML)){
            nodes[i].innerHTML=nodes[i].innerHTML.fontcolor("blue");
        }
    }
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

    var st=document.getElementById("sort");
    st.onclick=function () {
        var list=document.getElementById("output");
        sort(list);
    }

    gao();

    var tt=document.getElementById("cha");
    tt.onclick=function () {
        sou();
    }
}

