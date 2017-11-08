window.onload=function () {
    var aInput=document.getElementsByTagName('input');
    var oName=aInput[0];
    var pwd=aInput[1];
    var pwd2=aInput[2];

    var aP=document.getElementsByTagName('p');
    var name_msg=aP[0];
    var pwd_msg=aP[1];
    var pwd2_msg=aP[2];

    var count=document.getElementById('count');
    var aLi=document.getElementsByTagName('li');


    /*用户名检测*/

    var name_length=0;
    
    oName.onfocus=function () {
        name_msg.style.display='block';
        name_msg.innerHTML="<i class='ati'></i>5-25个字符，中文为两个字符，推荐使用中文用户名"
    }
    
    oName.onkeyup=function () {
        count.style.visibility='visible';
        name_length=getLength(this.value);
        count.innerHTML=name_length+"个字符";
        if(name_length==0){
            count.style.visibility='hidden';
        }
    }

    function getLength(str) {
    // \x00-\xff为单字符区间，匹配非单字符即为双字符,将双字符替换为xx再计算长度即可
        return str.replace(/[^\x00-\xff]/g,"xx").length;
    }
    
    oName.onblur=function () {
        //含有非法字符
        var re=/[^\w\u4e00-\u9fa5]/g;
        if(re.test(this.value)){
            name_msg.innerHTML="<i class='no'></i> 含有非法字符！";
        }

        //不能为空
        else if(this.value==""){
            name_msg.innerHTML="<i class='no'></i> 不能为空！";
        }

        //长度超过25个字符
        else if(name_length>25){
            name_msg.innerHTML="<i class='no'></i> 超过25个字符！";
        }

        //长度少于6个字符
        else if(name_length<6){
            name_msg.innerHTML="<i class='no'></i> 少于6个字符！";
        }

        //OK
        else {
            name_msg.innerHTML="<i class='ok'></i> OK！";
        }
    }

    /*密码检测*/

    pwd.onfocus=function () {
        pwd_msg.style.display='block';
        pwd_msg.innerHTML="<i class='ati'></i> 6-16个字符，请使用字母加数字或符号的组合密码，不能使用单一类型的密码"
    }
    
    pwd.onkeyup=function () {
        /*大于6个字符为中*/
        if(this.value.length>6){
            aLi[1].className="k";
            pwd2.removeAttribute('disabled');
            pwd2_msg.style.display='block';
        }else {
            aLi[1].className="kiss";
            pwd2.setAttribute('disabled',"");
            pwd2_msg.style.display='none';
        }
        /*大于10个字符为强*/
        if(this.value.length>10){
            aLi[2].className="k";
        }else {
            aLi[2].className="kiss";
        }
    }
    
    pwd.onblur=function () {
        var m=findstr(this.value,this.value[0])
        var re_n=/[^\d]/g;
        var re_t=/[^a-zA-Z]/g

        //不能为空
        if(this.value==""){
            pwd_msg.innerHTML="<i class='no'></i> 不能为空！";
        }
        //不能使用相同字符
        else if(this.value.length==m){
            pwd_msg.innerHTML="<i class='no'></i> 不能使用相同字符！";
        }

        //长度应为6-16个字符
        else if(this.value.length<6 || this.value.length>16){
            pwd_msg.innerHTML="<i class='no'></i> 长度应为6-16个字符！";
        }

        //不能全为数字
        else if(!re_n.test(this.value)){
            pwd_msg.innerHTML="<i class='no'></i> 不能全为数字！";
        }

        //不能全为字母
        else if(!re_t.test(this.value)){
            pwd_msg.innerHTML="<i class='no'></i> 不能全为字母！";
        }

        //OK
        else {
            pwd_msg.innerHTML="<i class='ok'></i> OK！";
        }
    }

    function findstr(str,n) {
        var tmp=0;
        for(var i=0;i<str.length;i++){
            if(str.charAt(i)==n){
                tmp++;
            }
        }
        return tmp;
    }

    /*确认密码检测*/
    pwd2.onblur=function () {
        if(this.value!=pwd.value){
            pwd2_msg.innerHTML="<i class='no'></i> 两次输入的密码不一致！";
        }else {
            pwd2_msg.innerHTML="<i class='ok'></i> OK！";
        }
    }
}