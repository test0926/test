function SlideCT(target, obj){
	this.$target = null,
	this.$wrap = null,
	this.$slides = null,
	this.center = null,
	this.activeIndex = 0,
	this.btn = {
		prev : null,
		next : null,
	}
	SlideCT.prototype.init = function(selector, obj){
	    this.$target = $(target);
	    this.$wrap = this.$target.find('.swiper-wrap');
	    this.$slides = this.$target.find('.slide');
	    this.btn.prev = this.$target.find('.swiper-button-prev');
	    this.btn.next = this.$target.find('.swiper-button-next');
	    this.obj = obj;

	    this.centerPostion();
	    this.activeSlide();
	}
	SlideCT.prototype.initEvent = function(e){
		var that = this;
		this.btn.prev.on('click', function(e){
			that.prev();
			return false;
		});
		this.btn.next.on('click', function(e){
			that.next();
			return false;
		});
	}
	SlideCT.prototype.centerPostion = function(e){
		var that = this;
		that.center = (that.$target.width()-100)/2;

		var windowWidth = $( window ).width();
	 	if(windowWidth < 1025) {
	    	that.$wrap.css({
	    		'transform' : 'translate3d('+that.center+'px, 0, 0)',
	    		'-webkit-transform' : 'translate3d('+that.center+'px, 0, 0)',
	    	});
		}
	}
	SlideCT.prototype.next = function(e){
		var max = this.$slides.length-1;
		this.activeIndex++;
		this.activeIndex = this.activeIndex > max ? max:this.activeIndex;
		var transX = this.center-(this.activeIndex*100);

		this.$wrap.css({
			'transform' : 'translate3d('+transX+'px, 0, 0)',
			'-webkit-transform' : 'translate3d('+transX+'px, 0, 0)',
		});
		this.activeSlide();
	}
	SlideCT.prototype.prev = function(e){
		this.activeIndex--;
		this.activeIndex = this.activeIndex < 0 ? 0:this.activeIndex;
		var transX = this.center-(this.activeIndex*100);

		this.$wrap.css({
			'transform' : 'translate3d('+transX+'px, 0, 0)',
			'-webkit-transform' : 'translate3d('+transX+'px, 0, 0)',
		});

		this.activeSlide();
	}
	SlideCT.prototype.activeSlide = function(e){
		var target = $(this.$slides[this.activeIndex]);
		$(this.$slides).removeClass('active').removeClass('prev').removeClass('next');

		target.addClass('active');
		target.prev().addClass('prev');
		target.next().addClass('next');
	}
	this.init(target, obj);
	this.initEvent();
}

function fullPage(target, obj){
    this.$target = null,
    this.$section = null,
    this.state = {
    	index : 0,
    	direction : '',
    	trans : 0,
    	viewHeight : 0,
    	timeout : true,
    }
    this.obj = null,
    this.swiper = {
    	target : null,
    	previousIndex : -1,
    },
    this.touchMove = {
    	start : {
    		X : 0,
    		Y: 0,
    	},
    	end: {
    		X : 0,
    		Y: 0,
    	},
    },
    this.scroll = {
    	moved : false,
    }
    fullPage.prototype.init = function(selector, obj){
        this.$target = $(target);
        this.$section = this.$target.find('.section_wrap');
        this.$inner = $ ('.scroll-inner');
        this.obj = obj;
        this.state.viewHeight = this.$target.height();
    }
    fullPage.prototype.initEvent = function(e){
        var that = this;

      	this.$inner.scroll( function(e){
    		var $target = $(this);
			var height = $target.outerHeight();
			var scroll = parseInt($target.scrollTop());
			var scrollHeihgt = parseInt($target.prop('scrollHeight')-height);

			if((scroll-scrollHeihgt) > 2 || scroll == 0){		
				that.scroll.moved = false;
			} else {
				that.scroll.moved = true;
			}
		});

        this.$target.on("wheel mousewheel DOMMouseScroll",function(e){
        	e.preventDefault();
        	if(that.state.index == 5 || that.state.index == 6 || that.state.index == 9){
        		swiper = that.state.index == 5 ? slideinside:
        				 that.state.index == 6 ?slideinside2:slideBNS;
        		that.swiper.target = swiper;
        		if(that.state.timeout){
        			that.timeout();
        			that.swipers(swiper, e.originalEvent.deltaY);
        		}

        	} else {
	        	if(that.state.timeout){
	        		that.timeout();
	        		that.moveTrans(e.originalEvent.deltaY);
	        	}
        	}
        });

        this.$target.on("touchstart", function(e){		
			that.touchMove.start.X = e.originalEvent.changedTouches[0].clientX;
			that.touchMove.start.Y = e.originalEvent.changedTouches[0].clientY;
		});    			    	    	    						 																
		
		this.$target.on("touchmove", function(e){	
  			
		});
		
		this.$target.on("touchend", function(e){
			var active = $(that.$section).eq(that.state.index);
			if(!that.scroll.moved){
				that.touchMove.end.X = e.originalEvent.changedTouches[0].clientX;
				that.touchMove.end.Y = e.originalEvent.changedTouches[0].clientY;		
				if(that.TouchDirection() == 'Y'){
					if(Math.abs(that.touchMove.start.Y - that.touchMove.end.Y) > 50){
						if(that.state.timeout){
			        		that.timeout();
			        		that.moveTrans(that.touchMove.start.Y - that.touchMove.end.Y);
			        	}
					}
				};
			}
		});
    }
    fullPage.prototype.TouchDirection = function(){
    	var touchX = this.touchMove.start.X - this.touchMove.end.X;
    	var touchY = this.touchMove.start.Y - this.touchMove.end.Y;
 		var direction = Math.abs(touchX) > Math.abs(touchY) ? 'X':'Y';
    	return direction;
    }
    fullPage.prototype.moveTrans = function(delta){
    	var that = this;
    	var moved = this.state.viewHeight*-1;
    	this.state.direction = delta > 0 ? 'down':'up';

    	if(this.state.direction === 'up'){
    		this.state.index--;
    		this.state.index = this.state.index < 0 ? 0:this.state.index;
    		$('.container').css({
				'transform' : 'translate3d(0px, '+(moved*this.state.index)+'px, 0px)',
				'-webkit-transform' : 'translate3d(0px, '+(moved*this.state.index)+'px, 0px)',
			});
    	} else {
    		if(this.$section.length-1 >= this.state.index){
	    		this.state.index++;
	    		if(this.$section.length == this.state.index){
	    			console.log(123);
	    			var y = moved*(this.state.index-2) - (this.$section.eq(this.state.index-1).outerHeight() + $('footer').outerHeight());
	    			$('.container').css({
						'transform' : 'translate3d(0px, '+y+'px, 0px)',
						'-webkit-transform' : 'translate3d(0px, '+y+'px, 0px)',
					});
	    		} else {
		    		$('.container').css({
						'transform' : 'translate3d(0px, '+(moved*this.state.index)+'px, 0px)',
						'-webkit-transform' : 'translate3d(0px, '+(moved*this.state.index)+'px, 0px)',
					});
	    		}
    		}
    	}
    	this.state.index = this.state.index < 0 ? 0:this.state.index;
    	this.moveAni();
    }
    fullPage.prototype.indexMove = function(index){
    	this.state.index = index;
    	var moved = this.state.viewHeight*-1;
    	$('.container').css({
			'transform' : 'translate3d(0px, '+(moved*this.state.index)+'px, 0px)',
		});
		this.moveAni();
    }
    fullPage.prototype.swipers = function(swiper, delta){
    	delta = delta > 0 ? 'next':'prev';
    	this.swiper.previousIndex = swiper.activeIndex;

    	if(delta == 'next'){
    		swiper.slideTo(swiper.realIndex+1, 300, false);
    		if(this.swiper.previousIndex == swiper.activeIndex && swiper.activeIndex == swiper.slides.length-1){
        		this.timeout();
        		this.moveTrans(1);
    		}
    	} else {
    		swiper.slideTo(swiper.realIndex-1, 300, false);
    		if(this.swiper.previousIndex == swiper.activeIndex && swiper.activeIndex == 0){
    			this.timeout();
        		this.moveTrans(0);
    		}
    	}
    }
    fullPage.prototype.timeout = function(){
    	var that = this;
    	that.state.timeout = false;
    	setTimeout( function(){
    		that.state.timeout = true;
    	}, that.obj.timer);
    }
    fullPage.prototype.moveAni = function(){
    	if(this.state.index > 0){
    		$('.header').addClass('scroll');
    	} else {
    		$('.header').removeClass('scroll');
    	}

    	this.$section.removeClass('active');
    	this.$section.eq(this.state.index).addClass('active');
    }
    this.init(target, obj);
    this.initEvent();
}

function scrollMove(target){
	var $target = $(target);
	var top = $target.offset().top;
	$('html, body').animate({scrollTop: top}, 500);
}

$(window).on("scroll", function(){ 
	var scroll_top = $(this).scrollTop();
	if(scroll_top > 250){
		$('.header').addClass('scroll');
	} else {
		$('.header').removeClass('scroll');
	}

	var $target = $('.ani');
	for(var i = 0; i < $target.length; i++){
		var target_top = $target.eq(i).offset().top - ($target.height()/2);
		if(!$target.eq(i).hasClass('active')){
			if(scroll_top > target_top){
				$target.eq(i).addClass('active');
			}
		}
	}
});


$( function(){

	$('.header .trigger').on('click', function(){
		$(this).toggleClass('active');
		$('.m_gnb').toggleClass('active');
	});

});