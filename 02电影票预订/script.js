let message=document.getElementById('message');//获取下方可变信息
let numbers=message.getElementsByTagName('span');
let num=0;//计数
let seats=document.getElementById('seatArea');//获取椅子区域
let select=document.getElementsByTagName('option');//获取选择电影列表 
seats.addEventListener('click',function(event){//为椅子区域绑定函数
    event.preventDefault();//默认取消
    //alert(66);
    if(event.target.classList.contains('seat')){//这里直接换掉所属类
        //alert(66);
        event.target.className='seatSelected';
        num++;
    }else if(event.target.classList.contains('seatSelected')){
        event.target.className='seat';
        num--;
    }
  
});
setInterval(//定时函数确保改变电影时刷新值
function selecter(){
    let flag;
    for(let i=0;i<select.length;++i){
        if(select[i].selected){
            flag=select[i].value;
        }//获取电影价格
    }
    numbers[0].innerHTML=num;
    numbers[1].innerHTML=num*flag;
    
},300);







