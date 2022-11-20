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
	    this.$slides = this.$target.find('.slide2c');
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

$( function(){

	$('.header .trigger').on('click', function(){
		$(this).toggleClass('active');
		$('.m_gnb').toggleClass('active');
	});

	$('.move-menu li').on('click', function(){
		$('.m_gnb').toggleClass('active');
	});

});