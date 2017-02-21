
;(function($){
	var index;
	$.extend({
		changeImg :function (time,margin){
			// time = time;
			var pagerHtml = '';
			var pagerQty = $(".pro-img li").length;
			var area_names = [];
			//var area_title = [];
			$(".pro-img li").each(function(){
				area_names.push($(this).find('img').attr('src'));
				//area_title.push($(this).attr('data-title'));
			})
			for(var i=0; i < pagerQty; i++){
				var linkContent = area_names[i];
				//var linktitle = area_title[i];
				// pagerHtml += '<div class="bx-pager-item"><a href="javascript:;" data-slide-index="' + i + '" class="bx-pager-link"><span></span><img src="'+ linkContent +'" /><p class="ell1">'+linktitle+'</p></a></div>';
				pagerHtml += '<div class="bx-pager-item"><a href="javascript:;" data-slide-index="' + i + '" class="bx-pager-link"><img src="'+ linkContent +'" /></a></div>';
			};

			$(".pro-info-b").append('<div class="pro-dir"><div class="pro-dir-b">'+pagerHtml+'</div></div>');


			$(".pro-dir").append('<div class="pro-dir-p"><div class="pro-dir-prev pro-dir-a"><a href="javascript:;"><span class="icon-left-open-big"></span></a></div><div class="pro-dir-next pro-dir-a"><a href="javascript:;"><span class="icon-right-open-big"></span></a></div></div>');

			$(".bx-pager-item").eq(0).addClass('active');
			$(".pro-img-list").eq(0).addClass('active');
			jQuery.sliderImg(time,margin);
			//jQuery.videoPlay();
			if ($(".pro-img-list.active").index()==0) {
				$(".pro-dir-prev").addClass('disabled')
			}else{
				$(".pro-dir-prev").removeClass('disabled')
			};
			if ($(".pro-img li").length >= 2) {
				jQuery.timeImg(time,margin);
			};
			return false;
		},
		sliderImg:function (time,margin){
			$(".pro-dir-b .bx-pager-item").each(function(){
				var $this = $(this);
				$this.click(function(){
					var this_index = $this.index();
					//alert(this_index);
					$this.addClass('active').siblings('.bx-pager-item').removeClass('active');
					$(".pro-img-list").eq(this_index).addClass('active').siblings('.pro-img-list').removeClass('active');
					$(".pro-img ul").animate({
						left:-this_index*($(".pro-img").width())
					}, 400);
					//alert($this.index() != index);
					if ($this.index() != index) {
						//alert(index);
						clearInterval(setIn);
						// $(".pro-img-list").each(function(){
						// 	if ($(this).find('div').hasClass('a1')) {
						// 		$("#a1").remove();
						// 	};
						// })
						if ($(".pro-img li").length >= 2) {
							jQuery.timeImg(time,margin);
						};
					}else{
						clearInterval(setIn);
					}
				})
			})
			$(".pro-dir-prev").click(function(){
				// $(".pro-img-list").each(function(){
				// 	if ($(this).find('div').hasClass('a1')) {
				// 		$("#a1").remove();
				// 	};
				// })
				clearInterval(setIn);
				var $this = $(this);
				var active_index = $(".pro-img-list.active").index();
				//alert(active_index);
				if (active_index>0) {
					$this.removeClass('disabled');
					$(".bx-pager-item").eq(active_index-1).addClass('active').siblings('.bx-pager-item').removeClass('active');
					$(".pro-img-list").eq(active_index-1).addClass('active').siblings('.pro-img-list').removeClass('active');
					$(".pro-img ul").animate({
						left:-(active_index-1)*($(".pro-img").width())
					}, 400)
					if (active_index%4 == 0 && active_index > 0) {
						$(".pro-dir-b").animate({
							left:-(active_index-4)*($(".bx-pager-item").width()+margin)
						})
					};
				}else{
					alert('这是第一张');
					$this.addClass('disabled');
				};
				if ($(".pro-img li").length >= 2) {
					jQuery.timeImg(time,margin);
				};
			})
			$(".pro-dir-next").click(function(){
				// $(".pro-img-list").each(function(){
				// 	if ($(this).find('div').hasClass('a1')) {
				// 		$("#a1").remove();
				// 	};
				// })
				clearInterval(setIn);
				var $this = $(this);
				var active_index = $(".pro-img-list.active").index();
				if (active_index < $(".pro-img-list").length-1) {
					$this.removeClass('disabled');
					$(".bx-pager-item").eq(active_index+1).addClass('active').siblings('.bx-pager-item').removeClass('active');
					$(".pro-img-list").eq(active_index+1).addClass('active').siblings('.pro-img-list').removeClass('active');
					$(".pro-img ul").animate({
						left:-(active_index+1)*($(".pro-img").width())
					}, 400)

					if ((active_index+1)%
						4 == 0 && active_index > 0 ) {
						$(".pro-dir-b").animate({
							left:-(active_index+1)*($(".bx-pager-item").width()+margin)
						})
					};
				}else{
					alert('这是最后一张');
					$this.addClass('disabled');
				}
				if ($(".pro-img li").length >= 2) {
					jQuery.timeImg(time,margin);
				};
			})
		},
		timeImg:function (time,margin){
			var li_length = $(".pro-img li").length;
			var i = $(".pro-img-list.active").index()+1;
			setIn = setInterval(function(){
				console.log(i);
				if (i>0) {
					$(".pro-dir-prev").remove('disabled');
				};
				if(i>0 && i<li_length-1){
					$(".pro-dir-next").remove('disabled');
				}
				if (i<=li_length-1) {
					console.log("------------->"+i);
					$(".bx-pager-item").eq(i).addClass('active').siblings('.bx-pager-item').removeClass('active');
					$(".pro-img-list").eq(i).addClass('active').siblings('.pro-img-list').removeClass('active');
					$(".pro-img ul").animate({
						left:-i*($(".pro-img").width())
					}, 400)
					if (i%4 == 0 && i > 0) {
						$(".pro-dir-b").animate({
							left:-i*($(".bx-pager-item").width()+margin)
						})
					};
					i++;
				}else{
					i=1;
					$(".bx-pager-item").eq(0).addClass('active').siblings('.bx-pager-item').removeClass('active');
					$(".pro-img-list").eq(0).addClass('active').siblings('.pro-img-list').removeClass('active');
					$(".pro-dir-b").animate({
						left:-0
					})
					$(".pro-img ul").animate({
						left:0
					})
				}
			},time);
		}


		// videoPlay:function (){
		// 	var html = '<div id="a1" class="a1"></div>'
		//     var player_height = 0;
		// 	$('.pro-img-list').each(function(){
		// 		var $this = $(this);
		// 		$this.click(function(e){
		// 			e.preventDefault();
		// 			e.stopPropagation()
		// 			clearInterval(setIn);
		// 			$this.find('a').append(html);
		// 			index = $this.index();
		// 			var url = $this.find('.video-url').html();
		// 			var sear=new RegExp('iframe');
		// 			if(sear.test(url))
		// 			{
		// 				$("#a1").html(url);
		// 				$('#a1 iframe').css({
		// 					height: '100%',
		// 					width: '100%'
		// 				});
		// 			}else{
		// 				var flashvars={
		// 					f:url,
		// 					c:0,
		// 					b:1,
		// 					p:1,
		// 				};
		// 				var video=[url+'->video/mp4','http://www.ckplayer.com/webm/0.webm->video/webm','http://www.ckplayer.com/webm/0.ogv->video/ogg'];
		// 				CKobject.embed('ckplayer/ckplayer.swf','a1','ckplayer_a1','100%','100%',true,flashvars,video)
		// 				function closelights(){//关灯
		// 					alert(' 本演示不支持开关灯');
		// 				}
		// 				function openlights(){//开灯
		// 					alert(' 本演示不支持开关灯');
		// 				}
		// 			}
		// 		})
		// 	})
		//
		// }

	});
})(jQuery);
