$(function(){
	recover();
	reslide();	

})

$(".footer03-b1").find("dl").each(function(){
	var $this = $(this)
	$this.children('dt').children('i').click(function(){
		$this.children('dd').slideToggle(400);
		$(this).toggleClass("icon-minus");
	})
})
$(function(){

	$("img.lazy").lazyload({
    threshold : 10,
    effect : "fadeIn"
  });
  $("div.lazy").lazyload({
    threshold : 10,
    effect : "fadeIn",
    failure_limit : 10
  });
  $("a.lazy").lazyload({
    threshold : 10,
    effect : "fadeIn",
    failure_limit : 10
  });
  recover();
	$(".search-btn").click(function(){
		$(".search").fadeToggle(100);
	})

		/*鼠标经过*/
	$(".honour-list2-b p").each(function(){
  		if($(this).children('span').height()<=20){
  			$(this).children('span').css({"line-height":"40px"})
  		}
  	})
		
})
tabChange();
function tabChange(){
	// 书签切换
  	$(".main-second-nav li").each(function(){
		var $this = $(this);
		$this.hover(function(){
			$this.addClass("in").siblings().removeClass("in");
			$this.parent().parent().siblings(".main-second-content").find(".mian-second-list").each(function(){
				if($(this).index()==$this.index()){
					$(this).addClass("in").siblings().removeClass("in")
				}
			})
		});
	})
	
}
$(function(){
	nav2();
	nav3();
	$(window).resize(function(){
		nav3();
		nav();

	})
	$(".sub-nav2 dl dd").hover(function(){
		if($(window).width()>1000){ 
			$(".sub-nav3").hide();
			$(this).find(".sub-nav3").slideToggle(400);
		}
	})
	//renav_w();
	banner1Mouse();
	if($(window).width()>1000){
		nav();
		
	}	
	
	$(window).resize(function() {
		if($(window).width()>1000){
			nav();
			nav3();
		}
		else{
			//取消绑定鼠标经过效果
			$(".navigation li").each(function(){
				$(this).unbind('mouseenter mouseleave');
			});	
			$(".sub-nav2 dl dd").each(function(){
				$(this).unbind('mouseenter mouseleave');
			});	
		}
		//renav_w();		
	});
})
   	$(".menu-list li").each(function(){
       		if($(this).hasClass('current')){
     			$(this).children('.sub-menu').slideDown(400);
    		}
   		$(this).children('h3').click(function(){
    			$(this).parent().toggleClass('current').siblings().removeClass('current');
    			$(this).parent().children('.sub-menu').slideToggle(400);
    			$(this).parent().siblings().children('.sub-menu').slideUp(400);
      		})
     	})

   		$(".menu-list1 li").each(function(){
       		if($(this).hasClass('current')){
     			$(this).children('.sub-menu1').show(0);
     			$(this).children('h3').find('.glyphicon').addClass('glyphicon-menu-up');
    		}
   		$(this).children('h3').on({
   			"touchstart":function(){
    			$(this).parent().toggleClass('current').siblings().removeClass('current');
    			$(this).parent().children('.sub-menu1').slideToggle(400);
    			$(this).parent().siblings().children('.sub-menu1').slideUp(400);
    			$(this).find('.glyphicon').toggleClass('glyphicon-menu-up');
    			$(this).parent().siblings().find('.glyphicon').removeClass('glyphicon-menu-up');
      		}
   		});
   		$(this).children('h3').hoverDelay({
            outDuring: 2000,
            hoverEvent: function(){
            	$(this).parent().addClass('current').siblings().removeClass('current');
    	 		$(this).parent().children('.sub-menu1').slideDown(400);
    	 		$(this).find('.glyphicon').addClass('glyphicon-menu-up');
    			$(this).parent().siblings().children('.sub-menu1').slideUp(400);
    			$(this).parent().siblings().find('.glyphicon').removeClass('glyphicon-menu-up');   
            },
            outEvent: function(){
                $(this).parent().children('.sub-menu1').slideUp(400);
                $(this).parent().removeClass('current');
                $(this).find('.glyphicon').removeClass('glyphicon-menu-up'); 
            }
        });
     	})
function nav(){
	//菜单PC鼠标经过效果
	$(".navigation li").each(function(){
		if ($(window).innerWidth()>1000) {
			$(this).hoverDelay({
	            hoverEvent: function(){
	               $(this).children('.sub-nav').show();
					if($(this).children('.sub-nav').hasClass('sub-nav2')){
					var x = $(this).children('.sub-nav2').offset().left;
					var x2 = $(window).width()-x;
					var x3 = $(this).children('.sub-nav2').width()
					//alert(x)
					if(x2<x3){
						$(this).children('.sub-nav2').css({"left":"auto","right":0})
					}
					}        
	            },
	            outEvent: function(){
	               $(this).children('.sub-nav').slideUp(400);

	        	}
			});
		};
		
						
	})
}
//二级菜单
function nav2(){
	$(".sub-nav-btn").each(function(){
		$(this).click(function(){
			$(this).children('i').toggleClass('icon-minus');
			$(this).parent().children(".sub-nav").slideToggle(400);
			$(this).parent().siblings().children('.sub-nav-btn').children('i').removeClass('icon-minus')
			$(this).parent().siblings().children('.sub-nav').slideUp(400);
		})
	})
}
//三级菜单
function nav3(){
	$(".ssub-nav-btn").each(function(){
		$(this).click(function(){
			$(this).children('i').toggleClass('icon-minus');
			$(this).siblings(".sub-nav3").slideToggle(400);
			$(this).parent().parent().siblings().children().children('.ssub-nav-btn').children('i').removeClass('icon-minus')
			$(this).parent().parent().siblings().children('.sub-nav3').slideUp(400);
		})
	})
}

//窗口改变下拉菜单适应
function renav_w(){
	if($(window).width()>768 && $(window).width()<=840){
		$(".navigation li").each(function(){
			$(this).width(Math.floor($(window).width()/$(".navigation li").length))
		})


		$(".sub-nav-p").css({"width":$(window).width()})
		$(".sub-nav").css({"left":-Math.floor($(window).width()/$(".navigation li").length)})

	}

	else if($(window).width()>840 && $(window).width()<=999){
		//alert("a")
		if($(".navigation li").length>7){
			$(".navigation li").each(function(){
				$(this).width(Math.floor($(window).width()/$(".navigation li").length))
			})

			$(".sub-nav-p").css({"width":$(window).width()})
			$(".sub-nav").css({"left":-Math.floor($(window).width()/$(".navigation li").length)})
		}
		else{
			$(".navigation li").each(function(){
				$(this).removeAttr('style').width(120)
			})
			$(".sub-nav-p").css({"width":$(window).width()})
		}
		
	}

	else if($(window).width()>999){
		if($(".navigation li").length>8){
			alert($(".navigation li").length)
			$(".navigation li").each(function(){
				$(this).width(Math.floor(1000/$(".navigation li").length))
				$(this).css({"min-width":"auto"});
			})
			$(".sub-nav-p").removeAttr('style');
			$(".sub-nav").css({"left":-Math.floor(1000/$(".navigation li").length)})
		}
		else{
			$(".navigation li").each(function(){
			$(this).removeAttr('style')
			})
			$(".sub-nav-p").removeAttr('style');
			$(".sub-nav").removeAttr('style');
		}	
	}
	else{
		$(".navigation li").each(function(){
			$(this).removeAttr('style')
			})
			$(".sub-nav-p").removeAttr('style');
			$(".sub-nav").removeAttr('style');
	}
}
//让左右高度相等
// $(function(){
// 	if($(window).width()<1000){
// 		$(".block-a").css({'height':$(".block-b").height()})
// 		$(".block-a").css({"min-height":"180px"})
// 	}
// })

//banner
function recover(){
	if($(window).width()<767){

		$("body").addClass('s-page');
		$(".search").hide();
		$(".responsive-image").each(function(){
			$(this).css({"background-image":"url("+$(this).attr('data-media-desktop')+")"})
		})
		
	}
	else{

		$("body").removeClass('s-page');
		$(".responsive-image").each(function(){
			$(this).css({"background-image":"url("+$(this).attr('data-media-tablet')+")"})
		})
		
	}

}




// 首页顶部轮播图
$(".banner ul").bxSlider({
        auto: true,
        displaySlideQty:1, //显示li的个数
        moveSlideQty: 1, //移动li的个数  
        captions: false, //自动控制
        autoHover: true,
        controls: true,  //隐藏左右按钮
        pager:true
       
  	});
$(".i-center02-bd ul").bxSlider({
        auto: true,
        displaySlideQty:1, //显示li的个数
        moveSlideQty: 1, //移动li的个数  
        captions: false, //自动控制
        autoHover: true,
        controls: true,  //隐藏左右按钮
        pager:false,
       onSliderLoad:function(){
		    //$(".bx-pager-item").css('display','none');
        	$(".bx-pager-item a").html("");
        	// $(".bx-next").html("<span class='icon-right-open-big'></span>");
        }
  	});
	if(!window.zx_num){zx_num=0}
  	$(".zx-list li").each(function(){
  		$(this).hover(function(){
  			$(this).addClass('hover').siblings().removeClass('hover');
  			$(this).prev().children('a').addClass('bdn');
  			zx_num = $(this).index();
  		},function(){
  			$(this).prev().children('a').removeClass('bdn');
  		})
  	})
  	$(".zx-list").hover(function(){},function(){
  		//alert(zs_num)
  		$(this).children("li:eq("+zx_num+")").prev().children('a').addClass('bdn')
  	})



function indexSliser1(e){
    if($(window).width()<768){
      slider1=e.bxSlider({//广告图轮播
        auto: true,
        slideWidth: 250,
        minSlides: 2,
        maxSlides: 2,
        moveSlides: 1,
        captions: true, //自动控制
        autoHover: true,
        pager:false,
        slideMargin: 10,
        controls: true,  //隐藏左右按钮 
        speed: 1000,
        pause: 5000,
      })
    }else{
      	slider1=e.bxSlider({//广告图轮播
		    auto: true,
		    slideWidth: 220,
		    minSlides: 4,
		    maxSlides: 4,
		    moveSlides: 1,
		    captions: true, //自动控制
		    autoHover: true,
		    pager:false,
		    slideMargin: 10,
		    controls: true,  //隐藏左右按钮
		    speed: 1000,
		    pause: 5000,
		});
    }
}
function reslide(){
	var slider;
	if($(window).width()<768){
		slider = $('.slider2').bxSlider({
		    slideWidth: 250,
		    minSlides: 2,
		    maxSlides: 2,
		    infiniteLoop:false,
			slideMargin: 10,
			pager:false
  		});
	}
	else if($(window).width()>768 && $(window).width()<1000){
		slider = $('.slider2').bxSlider({
		    slideWidth: 220,
		    minSlides: 4,
		    maxSlides: 4,
		    infiniteLoop:false,
			slideMargin: 10,
			pager:false
  		});
	}
	else{
		slider = $('.slider2').bxSlider({
		    slideWidth: 200,
		    minSlides: 4,
		    maxSlides: 4,
		    infiniteLoop:false,
			slideMargin: 10,
			pager:false
  		});
	}
	
}


//回到顶部函数
function goTop(){
	$('html,body').animate({'scrollTop':0},300);
}




// 产品详情页面的产品展示左右滑动大屏幕
productChange();
function productChange(){
	$(".product-b-list-content-l-smimg li").click(function(){
		$(".product-b-list-content-l-smimg li").removeClass('active');
		$(this).addClass('active');
		var smimg_img = $(this).find('img').attr('src');
		$(".product-b-list-content-l-bigimg img").attr('src',smimg_img);
	})
	$(".product-b-info-prev").click(function(){
		var active_index = $(".product-b-list-content-l-smimg li.active").index();
		var li_width = $(".product-b-list-content-l-smimg li").width()+8;
		var li_length = $(".product-b-list-content-l-smimg li").length;
		var ul_left = -(active_index-1)*li_width;
		if (active_index>0) {
			$(".product-b-list-content-l-smimg li").removeClass('active');
        	$(".product-b-list-content-l-smimg li").eq(active_index-1).addClass('active');
		};
		if (active_index>0&&active_index<li_length-1) {
			$(".product-b-list-content-l-smimg ul").animate({
        		left:ul_left+'px',
        	})
		};
		var smimg_img = $('.product-b-list-content-l-smimg li.active').find('img').attr('src');
		$(".product-b-list-content-l-bigimg img").attr('src',smimg_img);
	})
	$(".product-b-info-next").click(function(){
		var active_index = $(".product-b-list-content-l-smimg li.active").index();
		var li_length = $(".product-b-list-content-l-smimg li").length;
		var li_width = $(".product-b-list-content-l-smimg li").width()+9;
		var ul_left = -(active_index+1)*li_width;
		if (active_index<li_length-1&&active_index>=0) {
			$(".product-b-list-content-l-smimg li").removeClass('active');
        	$(".product-b-list-content-l-smimg li").eq(active_index+1).addClass('active');
        	
		};
		if (active_index+3<li_length&&active_index<li_length-1&&active_index>=0) {
			$(".product-b-list-content-l-smimg ul").animate({
        		left:ul_left+'px',
        	})
		};
		var smimg_img = $('.product-b-list-content-l-smimg li.active').find('img').attr('src');
		$(".product-b-list-content-l-bigimg img").attr('src',smimg_img);
	})

}
// 产品详情页面的产品展示左右滑动小屏幕
productChangeSmall();
function productChangeSmall(){
	$(".product-b-list-content-l-span li").click(function(){
		$(".product-b-list-content-l-span li").removeClass('active');
		$(this).addClass('active');
		var smimg_img = $(this).find('img').attr('src');
		$(".product-b-list-content-l-bigimg img").attr('src',smimg_img);
	})
}

if($(window).width()>768){
	layer();//样品申请弹出框大屏幕
	teamLayer();// 团队介绍，产品证书
}else{
	showSmallLayer();//样品申请弹出框小屏幕
}
//样品申请弹出框大屏幕
function layer(){
	var body_scroll;
	var shade_height = 0;
	var win_height = $('body').height();
	var la_height = $(".layer-content").height();

	$(".product-b-list-content-r-call").click(function(){
		shadeHeight();
		console.log(shade_height);
		var pro_top = $(".main").offset().top;
		body_scroll = $(window).scrollTop();
		$(".layer-shade").css({'display':'block','top':0 ,'height':shade_height})
		$(".layer-content").css({'display':'block'})
	})
	$(".layer-content .close").click(function(){
		console.log(body_scroll);
		$(".layer-shade").css({'display':'none' })
		$(".layer-content").css({'display':'none'})
	})
	$(".layer-shade").click(function(){
		$(".layer-shade").css({'display':'none' })
		$(".layer-content").css({'display':'none'})
	})
	function shadeHeight(){
	
		if (win_height>la_height) {
			shade_height = win_height;
		}else{
			shade_height = la_height;
		};
	}
}
//样品申请弹出框小屏幕
function showSmallLayer(){
	$(".product-b-list-content-r-call").click(function(){
		$(".layer-content").toggle();
	})
}



// 团队介绍，产品证书

function teamLayer(){
	var body_scroll;
	var shade_height = 0;
	var win_height = $('body').height();
	var la_height = $(".layer-content").height();

	$(".team-search").click(function(){
		var img_src = $(this).siblings('a').find('img').attr('src');
		shadeHeight();
		console.log(shade_height);
		var pro_top = $(".main").offset().top;
		body_scroll = $(window).scrollTop();
		$(".layer-shade").css({'display':'block','top':0 ,'height':shade_height})
		$(".layer-content").css({'display':'block'})
		$(".layer-content-img img").attr('src',img_src);
	})
	$(".layer-content .close").click(function(){
		console.log(body_scroll);
		$(".layer-shade").css({'display':'none' })
		$(".layer-content").css({'display':'none'})
	})
	$(".layer-shade").click(function(){
		$(".layer-shade").css({'display':'none' })
		$(".layer-content").css({'display':'none'})
	})
	function shadeHeight(){

		if (win_height>la_height) {
			shade_height = win_height;
		}else{
			shade_height = la_height;
		};
	}
}

//页面右边固定联系列
	$(".side ul li").hover(function(){
		$(this).addClass('hover');
		$(this).find(".sidebox2").stop().animate({"width":"124px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)","background":"#194B9F"})
		$(this).find(".sidebox").stop().animate({"right":"54px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)","background":"#194B9F"})	
	},function(){
		$(this).removeClass('hover');
		$(this).find(".sidebox2").stop().animate({"width":"54px"},200).css({"opacity":"0.8","filter":"Alpha(opacity=80)","background":"#000"})
		$(this).find(".sidebox").stop().animate({"right":"-124px"},200).css({"opacity":"0.8","filter":"Alpha(opacity=80)","background":"#000"})	
	});

	$(".tc li").click(function(){
		$(this).addClass('active');
		$(this).siblings('li').removeClass('active');
	})

//回到顶部函数
function goTop(){
	$('html,body').animate({'scrollTop':0},300);
}


// 新闻列表新闻分类
newsListChange();
function newsListChange(){
	$(".news-list-nav li").click(function(){
		$(".news-list-nav li").removeClass('active');
		$(this).addClass('active');
		var li_content = $(this).find('a').text();
		console.log(li_content);
		$(".news-list").css('display','none');
		var newsType = $(".news-list").attr('name');
		console.log(newsType);
		$(".news-list").each(function(){
			if ($(this).attr('name') == li_content) {
				$(this).css('display','block');
			};
			if (li_content == '全部新闻') {
				$(".news-list").css('display','block');
			};
		})
		
	})

}


//首页公司资讯，产品证书，云存团队事件
navListChange();
function navListChange(){
	$(".nav-tab-list li").click(function(){
		$(".nav-tab-list li").removeClass('active');
		$(this).addClass('active');
		var active_href = $(this).find('a').attr('name');
		$(".gcy-bg-b-content").find('div').removeClass('active');
		$("#"+active_href).addClass('active');
	})
}

function banner1Mouse(){
	$(".weixin").mouseover(function(){
		$(".code").fadeIn(600);
		img_src = $(this).find('img').attr('src');
		img_src1 = $(this).find('img').attr('name');
		$(this).find('img').attr('src',img_src1);
	}).mouseout(function(){
		$(".code").fadeOut(600);
		$(this).find('img').attr('src',img_src);
	});
	$(".weibo").mouseover(function(){
		img_src = $(this).find('img').attr('src');
		img_src1 = $(this).find('img').attr('name');
		$(this).find('img').attr('src',img_src1);
	}).mouseout(function(){
		$(this).find('img').attr('src',img_src);
	});;
	$(".right-bottom").mouseover(function(){
		img_src = $(this).find('img').attr('src');
		img_src1 = $(this).find('img').attr('name');
		$(this).find('img').attr('src',img_src1);
	}).mouseout(function(){
		$(this).find('img').attr('src',img_src);
	});;
}

$(function () {
	$('.a1').click(function(){
		$('.a').css({'background':'#db311a',});
		$('.c').css({'background':'#db311a'});
	})
	$('.a2').click(function(){
		$('.a').css({'background':'#8f5225',});
		$('.c').css({'background':'#8f5225'});
	})
	$('.a3').click(function(){
		$('.a').css({'background':'#006599',});
		$('.c').css({'background':'#006599'});
	})
	$('.a4').click(function(){
		$('.a').css({'background':'#89998f',});
		$('.c').css({'background':'#89998f'});
	})
	$('.a5').click(function(){
		$('.a').css({'background':'#00552b',});
		$('.c').css({'background':'#00552b'});
	})
	$('.a6').click(function(){
		$('.a').css({'background':'#63bc7a',});
		$('.c').css({'background':'#63bc7a'});
	})
	$('.b1').click(function(){
		$('.b').css({'border-color':'#63bc7a'});
		$('.c').css({'border-color':'#63bc7a'});
	})
	$('.b2').click(function(){
		$('.b').css({'border-color':'#00552b',});
		$('.c').css({'border-color':'#00552b'});
	})
	$('.b3').click(function(){
		$('.b').css({'border-color':'#89998f',});
		$('.c').css({'border-color':'#89998f'});
	})
	$('.b4').click(function(){
		$('.b').css({'border-color':'#006599',});
		$('.c').css({'border-color':'#006599'});
	})
	$('.b5').click(function(){
		$('.b').css({'border-color':'#8f5225',});
		$('.c').css({'border-color':'#8f5225'});
	})
	$('.b6').click(function(){
		$('.b').css({'border-color':'#db311a',});
		$('.c').css({'border-color':'#db311a'});
	})
	$('.c1').click(function(){
		$('.b').css({'background':'#ffffff'});
	})
	$('.c2').click(function(){
		$('.b').css({'background':'#f6d138'});
	})
})
$(function(){
	$("p").css("text-indent",0);
	// $("p").css({"text-indent":0});
})


	$(function(){
		main_first_nav()

		$(window).resize(function(){
			main_first_nav()

		})
	})
	function main_first_nav(){
		if(document.documentElement.clientWidth<768){
			// alert("a")
			if($(".main-first-nav ul").children('span').length<1){
				$(".main-first-nav ul").append('<span class="icon-plus-1"></span>');
			}
			$(".main-first-nav ul").children('span').on('click',function(){
				$(this).toggleClass('on')
				$(".main-first-nav ul li").each(function(){
					if(!$(this).hasClass('on')){
						$(this).toggle();
					}
				})
			})
		}
		else{
		
			$(".main-first-nav ul").children('span').remove();
			$(".main-first-nav ul li").removeAttr('style');
			
		}
	}
