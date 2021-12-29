class boundry
{
	constructor(ctx)
	{
		this.ctx=ctx;
		this.width=ctx.canvas.width;
		this.height=ctx.canvas.height;	
		this.line_width=8;
		this.top_color='#ff7f50'
		this.left_color='#00bfff'
		this.right_color='#ee82ee'
		this.bottom_color='black'
	}
	draw()
	{
		this.ctx.beginPath();
		this.ctx.moveTo(0,0);
		this.ctx.lineWidth=this.line_width;
		this.ctx.lineTo(this.width,0);
		this.ctx.strokeStyle=this.top_color;
		this.ctx.stroke();
		
		this.ctx.beginPath()
		this.ctx.moveTo(this.width,0)
		this.ctx.lineTo(this.width,this.height);
		this.ctx.strokeStyle=this.right_color;
		this.ctx.stroke()
		
		this.ctx.beginPath()
		this.ctx.moveTo(this.width,this.height)
		this.ctx.lineTo(0,this.height);
		this.ctx.strokeStyle=this.bottom_color;
		this.ctx.stroke();
		
		this.ctx.beginPath();
		this.ctx.moveTo(0,this.height);
		this.ctx.lineTo(0,0);
		this.ctx.strokeStyle=this.left_color;
		this.ctx.stroke();
		
	}
}