//1.点击提交时检查元素是否填完整，去掉空格
//2.检查错误
//-错误处理函数处理错误行为
//分别检查各个input
//检查密码是否一致

//获取元素
let username=document.getElementsByName('username')[0];
let email=document.getElementsByName('email')[0];
let password=document.getElementsByName('password')[0];
let passwordagain=document.getElementsByName('passwordagain')[0];
let button=document.getElementsByName('button')[0];
//定义正则表达式


/*检查元素是否输入*/
function checkContent(arr){/*将表单以数组形式传入*/ 
    let isRequired=false;
    arr.forEach(function(ele){
        if(ele.value.trim()===""){
            showErr(ele,`请输入${ele.name}`);
            isRequired=true;
        }else {
            showSuccess(ele);/*显示提交成功*/ 
        }
        });
        return isRequired;
}


/*错误信息提示*/ 
function showErr(input,message){
    if(input.parentNode.classList.contains('success')){//判断是否包含成功类，包含换掉
        input.parentNode.classList.replace('success','error');
    }else{
        input.parentNode.classList.add('error');
    }
    input.parentNode.lastElementChild.innerText=message;//改变内容
}

function showSuccess(input){
    input.parentNode.classList.add('success'); 
    if(input.parentNode.classList.contains('error')){//判断是否包含失败类，包含换掉，以换回成功类样式
        input.parentNode.classList.replace('error','success');
    }else{
        input.parentNode.classList.add('success');
    } 
}


/*邮箱正则判断去空格*/ 
function checkEmail(input){
    let re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showErr(input,`Email is not valid`);
    }
}

/*用户名与密码长度判断*/ 
function checkLength(input,min,max){
    if(input.value.length<min){
        showErr(input,`${input.name} must be at last ${min} characters`);
    }else if(input.value.length>max){
        showErr(input,`${input.name} must be at last ${max} characters`);
    }else{
        showSuccess(input);
    }
}

/*密码匹配判断 */
function checkPassword(input1,input2){
    if(input1.value!==input2.value){
        showErr(input2,'Passwords do not match');
    }
}

/**绑定事件 */
button.addEventListener('click',function(event){
    event.preventDefault();
    if(!checkContent([username,email,password,passwordagain])){
        checkLength(username,3,15);
        checkLength(password,6,25);
        checkEmail(email);
        checkPassword(password,passwordagain);
    }
});









