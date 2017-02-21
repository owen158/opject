$(function(){
	var cookie_iealert = $.cookie("iealert");
	var a =document.documentElement.clientWidth;
	var panel;
	if (a>1000){
		panel = '<div class="iealert" style="width: 100%;position: fixed;z-index: 1000;line-height: 22px;font-size: 14px;border-bottom:1px #E7E8C7 solid;background: #FFFFE9;color:#7A3E02;">'
	}
	else{
		panel = '<div class="iealert" style="width: 100%;position: relative;z-index: 1000;line-height: 22px;font-size: 14px;border-bottom:1px #E7E8C7 solid;background: #FFFFE9;color:#7A3E02;">'
	}
	panel = panel +'<div class="iealert-b" style="padding: 13px 30px 13px 20px;position: relative;">'
				+'<i class="icon-attention-alt-1" style="color:#68B7E1;display: inline-block;vertical-align: middle;"></i>'
				+'<span style=’display: inline-block;vertical-align: middle;>由于您的浏览器版本太低，我们暂时关闭了某些高级功能。建议您升级或安装适配更好的Firfox浏览器。</span><a style="display: inline-block;border:1px #D5B98F solid;vertical-align: middle;line-height: 23px;font-size:12px;color:#743E04;padding: 0 5px;" href="http://www.mozilla.org/en-US/firefox/new/" target="_blank"><i class="glyphicon glyphicon-arrow-down"></i> 立即下载</a>'
				+'<em class="iealert-close icon-cancel-3" style="font-style: normal;display: inline-block;position: absolute;right: 10px;line-height:14px;top: 50%;margin-top: -7px;cursor: pointer;"></em>'
				+'</div>';
	if(cookie_iealert==null){ 
	    $("body").prepend(panel);
		//$.cookie("iealert",1,{expires:30});
	}
	$(".iealert-close").on("click", function(){
		$(".iealert").remove();	
		 $.cookie("iealert",1,{expires:30});
	})

})