function Slide(ele){
	this.box = $(ele);
	this.$num = 0;
}
Slide.prototype={
	fnNext:function (){
		this.$num++;
		if(this.$num >= this.box.find("li").length){
			this.$num = 0;
		}
		return this;
	},
	fnPrev:function (){
		this.$num--;
		if(this.$num < 0){
			this.$num = this.box.find("li").length-1;
		}
		return this;
	},
	fnChange:function (){
		this.box.find(".dot span").removeClass("active").eq(this.$num).addClass("active");
		this.box.find("li").fadeOut().eq(this.$num).fadeIn();
		return this;
	},
	numChange:function(obj){
		//this.$num  //Slide
		//this.index()  //span
		clearTimeout(this.box.find(".dot")[0].timer);
		var _this = this;
		this.box.find(".dot")[0].timer = setTimeout(function(){
			if(_this.$num !== $(obj).index()){
				_this.$num = $(obj).index();
				_this.fnChange();
				return this;
			}
		},400);
	}
}