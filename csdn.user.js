//添加定时
var func = setInterval(()=>{
 //确定页面加载完毕
if($(".btn_open_app_prompt_div").length!=0){
     //删除继续浏览提示
     $(".weixin-shadowbox").remove();
     //删除打开app提示
     $(".btn_open_app_prompt_div").remove();
     $(".feed-Sign-weixin").remove();
     $(".openApp").remove();
     //自动展开
    $(".detail-open-removed").click();
    $(".app-bt-cance").click();
   $(".hide-preCode-bt").click();
   //推荐不提示app打开
   $(document).unbind("click");
   $(".open_app_channelCode").bind("click",function(){ 
   		let aArr = $(this).find("a");
   		let href = aArr[aArr.length-1].href;
   		window.location.href=href;
   });
   //复制代码
   $(".signin").removeAttr("onclick");
   $(".signin").unbind("click");
   $("code").removeAttr("onclick");
   $("code").unbind('click').bind("click",function(){
   const ele = document.createElement('input')
  // 设置元素内容
  ele.setAttribute('value', $(this).text())
 // 将元素插入页面进行调用
  document.body.appendChild(ele)
  // 复制内容
  ele.select()
  // 将内容复制到剪贴板
  document.execCommand('copy')
  // 删除创建元素
  document.body.removeChild(ele)
 });
  clearInterval(func);
}
},500);
setInterval(()=>{
	$(".passport-login-container").remove();
},200);
