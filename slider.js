class slider
{
	constructor(sctx)
	{
	 	this.slide=sctx
		this.active=0;
		this.x=200;
		this.y=32;
		this.r=30;
	}
	draw()
	{
		this.slide.clearRect(0,0,this.slide.canvas.width,this.slide.canvas.height)
		this.slide.beginPath()
		this.slide.moveTo(25,32)
		this.slide.lineWidth=20
		this.slide.lineCap='round'
		this.slide.strokeStyle='#2986a1'
		this.slide.lineTo(this.slide.canvas.width-25,32)
		this.slide.stroke();
		this.slide.beginPath()
		this.slide.lineWidth=2
		this.slide.strokeStyle='#152329'
		if(this.active==0)
		{
			this.slide.fillStyle='#aeb6b9'
			document.getElementById('message').lastElementChild.disabled=true;
		}
		else
		{
			this.slide.fillStyle='#6c7477'		
			document.getElementById('message').lastElementChild.disabled=false;
		}
		this.slide.arc(this.x,this.y,this.r,0,2*Math.PI)
		this.slide.fill();
		this.slide.stroke();
		this.slide.fillStyle='black';
		this.slide.font="bold 22px Arial";
		this.slide.fillText(Math.round((this.x-50)/3)+"%",this.x-26,this.y+10);
	}
}
var sctx=document.getElementById('slider').getContext('2d')
var slide=new slider(sctx);
function init2()
{
	if(slide.x<50)
		slide.x=50;
	if(slide.x>350)
		slide.x=350
	slide.draw();
	requestAnimationFrame(init2)
}
var slideFlag=0
sctx.canvas.addEventListener('mousedown',function(e){
	var sx=e.clientX-sctx.canvas.offsetLeft
	var sy=e.clientY-sctx.canvas.offsetTop
	if(Math.pow(sx-slide.x,2)+Math.pow(sy-slide.y,2)-Math.pow(slide.r,2)<=0)
	{
		slide.active=1;
		slideFlag=1
	}
});
document.addEventListener('mousemove',function(e){
	if(slideFlag==1)
	{
		slide.x=e.clientX-sctx.canvas.offsetLeft
		if(slide.x<0||slide.x>400||e.clientY-sctx.canvas.offsetTop<-15||e.clientY-sctx.canvas.offsetTop>80)
			slideFlag=0;
	}
});
document.addEventListener('mouseup',function(e){
	slideFlag=0;
});
sctx.canvas.addEventListener('touchstart',function(e){
	var sx=e.touches[0].pageX-sctx.canvas.offsetLeft
	var sy=e.touches[0].pageY-sctx.canvas.offsetTop
	if(Math.pow(sx-slide.x,2)+Math.pow(sy-slide.y,2)-Math.pow(slide.r,2)<=0)
	{
		slide.active=1;
		slideFlag=1
	}
});
document.addEventListener('touchmove',function(e){
	if(slideFlag==1)
	{
		slide.x=e.touches[0].pageX-sctx.canvas.offsetLeft
		if(slide.x<0||slide.x>400||e.touches[0].pageY-sctx.canvas.offsetTop<-15||e.touches[0].pageY-sctx.canvas.offsetTop>80)
			slideFlag=0;
	}
});
document.addEventListener('touchend',function(e){
	slideFlag=0;
});
