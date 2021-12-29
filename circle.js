class circle
{
	constructor(ctx)
	{
		this.ctx=ctx;
		this.fill_style='yellow'
		this.stroke_style='black'
		this.line_width=4;
	}
	draw(x,y,i,r,c)
	{
		if(c==1)
		{
			this.fill_style='#ff7f50';
		}
		else if(c==2)
		{
			this.fill_style='#ee82ee';
		}
		else if(c==3)
		{
			this.fill_style='#00bfff';
		}
		else if(c==0)
		{
			this.fill_style='yellow';
		}
		else if(c==4)
		{
			this.fill_style='green';
		}
		else if(c==5)
		{
			this.fill_style='red';
		}
		else if(c==6)
		{
			this.fill_style='#b0b0b0';
		}
		this.ctx.beginPath()
		this.ctx.arc(x,y,r,0,2*Math.PI);
		this.ctx.fillStyle=this.fill_style;
		this.ctx.strokeStyle=this.stroke_style;
		this.ctx.lineWidth=this.line_width;
		this.ctx.stroke();
		this.ctx.fill();
		ctx.fillStyle='black';
		ctx.font="bold 40px Arial";
		ctx.fillText(i,x-18,y+15);
	}
}