$(function(){
	openFixed();
	$(window).scroll(function() {
		var scrollTop = $(this).scrollTop(),
			winWidth = $(window).width();
		if(winWidth > 768){
	    	if(scrollTop > 65) {
	    		$('.navbar').css("padding-top",0);
	    	} else {
	    		$('.navbar').css("padding-top",'15px');
	    	}

	    	if(scrollTop > 300){
	    		$('.gotop-wrapper').show();
	    	}else{
	    		$('.gotop-wrapper').hide();
	    	}
	    }else{
	    	if(scrollTop > 1000){
	    		$('.gotop-wrapper').show();
	    	}else{
	    		$('.gotop-wrapper').hide();
	    	}
	    }

	})
});

	var winHeight = $(window).height();

function gotop(){
	$('html, body').animate({scrollTop: 0}, 300);
}

	//播放视频
	function playPauseVideo() {
		var video = document.getElementById("bingoboxvideo");
		video.play();
		$('#videoOpen').hide();
	}

	/**
 * 打开弹窗
 */
	function openFixed() {
		$('#fixedWrap').show();
		var _top = -($('#fixedContent').height() / 2);
		$('#fixedContent').css('margin-top', _top + 'px');
	}

	/**
 	* 关闭弹窗
 	*/
	function closeFixed() {
		$('#fixedWrap').animate({top: winHeight * 2 + 'px'},500,'linear',function(){
			$('#fixedWrap').hide()
		})
	}

