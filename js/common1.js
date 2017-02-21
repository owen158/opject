$(function(){
	// $('body').width($(window).innerWidth());
	//var ww = $(window).width();
	if ($(window).innerWidth()>768) {
		$(".sub-nav2 dl dd").each(function(){
			$(this).hoverDelay({
	            hoverEvent: function(){
	            	$(".sub-nav3").hide();
	            	$(this).find(".sub-nav3").slideDown(400);
	            	if ($(this).find('div').hasClass('sub-nav3')) {
		       			$(this).find('a').find('i').addClass('icon-angle-down');
		       		};
	            },	
	            outEvent: function(){
	            	$(this).find(".sub-nav3").slideUp(400);
	            	if ($(this).find('div').hasClass('sub-nav3')) {
		       			$(this).find('a').find('i').removeClass('icon-angle-down');
		       		};
	            }
	   		});
		})
	};
	$('.animate-onscroll').each(function(index){
		// alert(0);
		var $this= $(this)
		$this.bind("scrollin", function(evt){
			$this.addClass('animated1 fadeInDown1').removeClass('animate-onscroll');
			setTimeout(function(){
				$this.removeClass('animated1 fadeInDown1');
				$this.unbind('scrollin')
			},2000);
		});
	});
		nav();
		nav3();
		//客服电话1
		recover();
		neiTab();// 内页Tab切换效果
		
	$(window).resize(function(){
		nav();
		// $('body').width($(window).innerWidth());
	});

	//导航菜单
	$(".navbar-toggle").each(function(){
		$(this).on('click',function(){
			slider($(this).attr('data-target'));
		})
	})
	if ($(window).innerWidth()>768) {
		$(".footer-wei span").hover(function(){
			$(this).siblings('.footer-wei-slide').animate({
				opacity: 1
			},200);
		},function(){
			$(this).siblings('.footer-wei-slide').animate({
				opacity: 0
			},200);
		});
	};
	
	//底部导航03
	$(".footer-l").find("dl").each(function(){
		var $this = $(this)
		$(this).children('dt').children('i').click(function(){
			$(".section.footer").height('auto');
			$this.children('dd').slideToggle(400);
		})
	})

	// 顶部语言栏效果
	$(".menu-tool>ul>li").on("mouseenter",function(){
		$(this).find("ul").css("display","block")
	}),$(".menu-tool>ul>li").on("mouseleave",function(){
		$(this).find("ul").css("display","none")
	});
	
	
});
// 产品内页左侧导航栏
subMenuShow();
function subMenuShow(){
	$(".product-menu-b li").click(function(){
		if($(this).has('.item-menu-nav')){
			$(this).find('.item-menu-nav').slideToggle(400);
			$(this).toggleClass('current');
		}
	});
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
function nav(){
	var ww = $(window).innerWidth();
	var n_i;
		if(ww>=1000){
			$(".navigation li").each(function(){
				var $this = $(this);
				if($this.hasClass('current')){
					n_i=$this.index()-1;
				//n_i--;
				//alert(n_i)
				}
				$this.hoverDelay({
				    hoverEvent: function(){
				    	$this.children('.sub-nav').slideDown(400);
				    	// if($this.hasClass('product-li')){
				    	// 	$(this).children('.sub-nav').hide();
				    	// 	$(this).children('.product-show').slideDown(400);
				    	// }
				       
				       // $(".navigation").children().children('li:eq('+n_i+')').removeClass('current')
				    },
				    outEvent: function(){
				    	$this.children('.sub-nav').slideUp(200);
				    	// $('.product-li').children('.product-show').slideUp(200);
				    	// $(".navigation").children().children('li:eq('+n_i+')').addClass('current')
				    }
				});
			});

			
			$(".navigation li").each(function(){
				if($(this).children('.sub-nav').length>0){
					if($(this).children('.sub-nav').children('.nav-img').length>0){
						$(this).children('.sub-nav').children('.nav-img').height($(this).children('.sub-nav').height());
					}
				}
			});
		}
		else{
			//alert("a")
			$(".navigation li").each(function(){
				$(this).unbind('mouseenter mouseleave');
				if($(this).children('.sub-nav').length>0){
					if($(this).children('i').length==0){
						$(this).append('<i class="icon-plus"></i>')
					}
					$(this).children('i').on('click',function(){
						//alert('0')
						$(this).toggleClass('i-open');
						if(!$(this).siblings('.sub-nav').is(':animated')){
							$(this).siblings('.sub-nav').slideToggle(400)
						}
						//return false
					})
				}
			});	
		}
		
}
// 小屏幕菜单显示隐藏
function slider(obj){
	$(".navbar").each(function(){

		if($(this).attr('data-target')==obj){
			$('body').css({'position':'fixed','overflow':'hidden'})
			$('body').append('<div class="sliderovely"></div>')
			var $this = $(this);
			if($this.hasClass('slider-right')){
			//推动效果
				if($this.attr('data-effect')=='push'){
					$('body').animate({'left':'-280px'},400);
					$(this).animate({'right':0}, 400).addClass('in');
					$(".sliderovely").on('click',function(){
						$('body').animate({'left':0},400,function(){
							$('body').removeAttr('style');
						});
						$this.animate({'right':"-280px"}, 400,function(){
							$this.removeAttr('style').removeClass('in');	
						});
						$(".sliderovely").remove();
					});
				}
				else{
					//alert("a")
					$this.animate({'right':0}, 400).addClass('in');
					$(".sliderovely").on('click',function(){
						$('body').css({'position':'','overflow':''});
						$this.animate({'right':"-280px"}, 400,function(){
							$this.removeAttr('style').removeClass('in');	
						});
						$(".sliderovely").remove();
					})
				}
			
			}
			else if($this.hasClass('slider-left')){
				if($this.attr('data-effect')=='push'){
					$('body').animate({'left':'280px'},400)
					$this.animate({'left':0}, 400).addClass('in')
					$(".sliderovely").on('click',function(){
						$('body').animate({'left':0},400,function(){
							$('body').removeAttr('style')
						})
						$this.animate({'left':"-280px"}, 400,function(){
							$this.removeAttr('style').removeClass('in')
						})
						$(".sliderovely").remove()
					})
				}
				else{
					//alert("a")
					$this.animate({'left':0}, 400).addClass('in')
					$(".sliderovely").on('click',function(){
						$('body').css({'position':'','overflow':''})
						$this.animate({'left':"-280px"}, 400,function(){
							$this.removeAttr('style').removeClass('in')
						})
						$(".sliderovely").remove()
					})
				}
			}
		}
	})
	
}
function recover(){
	if($(window).innerWidth()<767){

		$(".responsive-image").each(function(){
			$(this).css({"background-image":"url("+$(this).attr('data-media-desktop')+")"})
		})
		
	}
	else{

		$(".responsive-image").each(function(){
			$(this).css({"background-image":"url("+$(this).attr('data-media-tablet')+")"})
		})
		
	}

}
//页面右边固定联系列表
	$(".side ul li").hover(function(){
		$(this).addClass('hover');
		$(this).find(".sidebox2").stop().animate({"right":"54px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)"})
		$(this).find(".sidebox3").stop().animate({"right":"54px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)","background":"#ffffff"})
		$(this).find(".sidebox").stop().animate({"right":"54px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)","background":"#1e959a"})	
	},function(){
		$(this).removeClass('hover');
		$(this).find(".sidebox2").stop().animate({"right":"-165px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)"})
		$(this).find(".sidebox3").stop().animate({"right":"-124px"},200).css({"opacity":"0.8","filter":"Alpha(opacity=80)","background":"#ffffff"})
		$(this).find(".sidebox").stop().animate({"right":"-124px"},200).css({"opacity":"0.8","filter":"Alpha(opacity=80)","background":"#000000"})	
	});
	$(".side ul li.side3").click(function(){
		$(".side").hide(400);
	})
	$(".tc li").click(function(){
		$(this).addClass('active');
		$(this).siblings('li').removeClass('active');
	})
//回到顶部函数
function goTop(){
	$('html,body').animate({'scrollTop':0},300);
}

// 内页Tab切换效果
function neiTab(){
	$(".about-nav li").click(function(){
		var $this = $(this);
		var this_index = $this.index();
		$this.addClass('active').siblings('li').removeClass('active');
		$this.parent().parent().parent().find(".about-content").find('.about-b-list').each(function(){
			var index = $(this).index();
			if (this_index == index) {
				$(this).addClass('in').siblings('.about-b-list').removeClass('in');
			};
		});
	});
}

// 产品详情页面的产品展示左右滑动大屏幕
productChange();
function productChange(){
	$(".product-b-list-content-l-smimg li").click(function(){
		$(".product-b-list-content-l-smimg li").removeClass('active');
		$(this).addClass('active');
		var smimg_img = $(this).find('img').attr('src');
		var smimg_rel = $(this).find('img').attr('rel');
		$(".product-b-list-content-l-bigimg img").attr('src',smimg_img);
		$(".product-b-list-content-l-bigimg img").attr('rel',smimg_rel);
	})
	$(".product-b-info-prev").click(function(){
		var active_index = $(".product-b-list-content-l-smimg li.active").index();
		var li_width = $(".product-b-list-content-l-smimg li").width()+10;
		var li_length = $(".product-b-list-content-l-smimg li").length;
		var ul_left = -(active_index-1)*li_width;
		if (active_index>0) {
			$(".product-b-list-content-l-smimg li").removeClass('active');
        	$(".product-b-list-content-l-smimg li").eq(active_index-1).addClass('active');
		};
		if (active_index>0&&active_index<li_length-2) {
			$(".product-b-list-content-l-smimg ul").animate({
        		left:ul_left+'px',
        	})
		};
		var smimg_img = $('.product-b-list-content-l-smimg li.active').find('img').attr('src');
		var smimg_rel = $('.product-b-list-content-l-smimg li.active').find('img').attr('rel');
		$(".product-b-list-content-l-bigimg img").attr('src',smimg_img);
		$(".product-b-list-content-l-bigimg img").attr('rel',smimg_rel);
	})
	$(".product-b-info-next").click(function(){
		var active_index = $(".product-b-list-content-l-smimg li.active").index();
		var li_length = $(".product-b-list-content-l-smimg li").length;
		var li_width = $(".product-b-list-content-l-smimg li").width()+10;
		var ul_left = -(active_index+1)*li_width;
		if (active_index<li_length-1&&active_index>=0) {
			$(".product-b-list-content-l-smimg li").removeClass('active');
        	$(".product-b-list-content-l-smimg li").eq(active_index+1).addClass('active');
        	
		};
		if (active_index+4<li_length&&active_index<li_length-1&&active_index>=0) {
			$(".product-b-list-content-l-smimg ul").animate({
        		left:ul_left+'px',
        	})
		};
		var smimg_img = $('.product-b-list-content-l-smimg li.active').find('img').attr('src');
		var smimg_rel = $('.product-b-list-content-l-smimg li.active').find('img').attr('rel');
		$(".product-b-list-content-l-bigimg img").attr('rel',smimg_rel);
		$(".product-b-list-content-l-bigimg img").attr('src',smimg_img);
	})

}

