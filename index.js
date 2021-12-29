var ctx=document.getElementById('canvas').getContext('2d');
var width=ctx.canvas.width
var height=ctx.canvas.height

var b=new boundry(ctx);
var c=new circle(ctx);
var a=new level1().a;
var trial=1,level=0,retry=0,score=0,cScore,move=0,id,Acc=0,Y_Acc=0,O=0;
function init()
{
	var top=0;
	ctx.clearRect(0,0,width,height);
	b.draw();
	for(var i in a)
	{
		c.draw(a[i].x,a[i].y,i,a[i].r,a[i].c);
		if(a[i].c>0&&a[i].c<4)
		{
			blink(i);
		}
		if(top==5)
			break;
		top++;
	}
	
	
	requestAnimationFrame(init)
}

function blink(i)
{
	var interval=setInterval(function()
	{
		a[i].c=0;
		clearInterval(interval);
	},(1000));
}



ctx.canvas.addEventListener('mousedown',function(e){
	var x=e.clientX-ctx.canvas.offsetLeft
	var y=e.clientY-ctx.canvas.offsetTop
	flagup(x,y);
});
document.addEventListener('mousemove',function(e){
	var x=e.clientX-ctx.canvas.offsetLeft
	var y=e.clientY-ctx.canvas.offsetTop
	update(x,y);
});
document.addEventListener('mouseup',function(e){
	var x=e.clientX-ctx.canvas.offsetLeft
	var y=e.clientY-ctx.canvas.offsetTop
	flagdown(x,y);
});
ctx.canvas.addEventListener('touchstart',function(e){
	var x=e.touches[0].pageX-ctx.canvas.offsetLeft
	var y=e.touches[0].pageY-ctx.canvas.offsetTop
	flagup(x,y);
	e.preventDefault()
});
document.addEventListener('touchmove',function(e){
	var x=e.touches[0].pageX-ctx.canvas.offsetLeft
	var y=e.touches[0].pageY-ctx.canvas.offsetTop
	update(x,y);
	e.preventDefault()
});
document.addEventListener('touchend',function(e){
	var x=e.touches[0].pageX-ctx.canvas.offsetLeft
	var y=e.touches[0].pageY-ctx.canvas.offsetTop
	flagdown(x,y);
	e.preventDefault()
});



function flagup(x,y)
{
	var top=0;
	for(var i in a)
	{
		if(Math.pow(x-a[i].x,2)+Math.pow(y-a[i].y,2)-Math.pow(a[i].r,2)<=0)
		{
			a[i].flag=1;
			break;
		}
		if(top==5)
			break;
		top++;
	}
}
function update(x,y)
{
	var t=1,brk=0,lim=0;;
	for(var i in a)
	{
		if(a[i].flag==1&&move==0)
		{
			if(x<4)
			{
				x=4;
				y=a[i].y;
			}
			else if(x>width)
			{
				x=width;
				y=a[i].y;
			}
			if(y<4)
			{
				y=4;
				x=a[i].x;
			}
			else if(y>height)
			{
				y=height;
				x=a[i].x;
			}
			if(a[i].reminder==1)
			{
				a[i].x=x;
				a[i].y=y;
			}
			else if(a[i].reminder==0)
			{
				if(t==1)
				{
					a[i].x=x;
					a[i].y=y;
				}
				else
					return 0;
			}
			else if(a[i].reminder>1)
			{
					a[i].reminder=1
					a[i].x=x;
					a[i].y=y;
			}	
		}
		if(a[i].flag==1&&(x<=4||x>=width||y<=4||y>=height)&&move==0)
		{
			for(var j in a)
			{
				if(i==j)
					break;
				else
				{
					a[j].c=5;
					blink(j);
					break;
				}
			}
		}
				
		if(a[i].flag==1&&(x<=4||x>=width||y<=4||y>=height)&&t==1&&move==0)
		{
			for(var j in a)
			{
				if(lim<6)
				{
					if(a[j].reminder==2)
					{
						a[j].c=6;
						blink(j);
						brk=1;
						break;
					}
					else if(a[j].reminder>2)
						a[j].reminder--;
				}
				lim++;
			}
			if(brk==1)
			{
				a[i].flag=0;
				break;
			}
			if(x<=4)
			{
				if(a[i].cp==3)
				{
					a[i].c=4;
					Acc++;
					score+=a[i].s
					cScore+=a[i].s
					if(level==2||level==4)
					{
						retry+=1;
					}
				}
				else
				{
					a[i].c=5;
				}
				a[i].x=0;
				del(i)
				move=1;
				return 0;
			}
			else if(x>=width)
			{
				if(a[i].cp==2)
				{
					a[i].c=4;
					Acc++;
					score+=a[i].s
					cScore+=a[i].s
					if(level==2||level==4)
					{
						retry+=1;
					}
				}
				else
				{
					a[i].c=5;
				}
				a[i].x=width;
				del(i)
				move=1;
				return 0;
			}
			else if(y<=4)
			{
				if(a[i].cp==1)
				{
					score+=a[i].s
					Acc++;
					cScore+=a[i].s
					a[i].c=4;
					if(level==2||level==4)
					{
						retry+=1;
					}
				}
				else
				{
					a[i].c=5;
				}
				a[i].y=0;
				del(i)
				move=1;
				return 0;
			}
			else if(y>=height)
			{
				a[i].y=height;
				if(a[i].cp==0)
				{
					Y_Acc++;
				}
				del(i)
				move=1;
				return 0;
			}
			
		}
		t=0;
	}
}
function flagdown(x,y)
{
	var t=1
	for(var i in a)
	{
		a[i].flag=0;
		t=0;
	}
}
function del(i)
{
	var r=36,time=3000;
	var interval=setInterval(function()
	{
		a[i].r=r;
		if(r<15)
		{
			delete a[i];
			move=0;
			if(Object.keys(a).length==0)
			{
				if(trial==1)
				{
					trial--;
					if(level==1)
					{
						a=new level1().a;
					}
					if(level==2)
					{
						a=new level2().a;
						retry=0;
					}
					if(level==3)
					{
						a=new level3().a;
					}
					if(level==4)
					{
						a=new level4().a;
						retry=0
					}
					if(level==5)
					{
						a=new level5().a;
					}
					if(level==6)
					{
						a=new level6().a;
					}
				}
				else
				{
					brk=1;
					ctx.canvas.style.display='none'
					var message=document.getElementById('message')
					message.lastElementChild.className='';
					message.lastElementChild.previousElementSibling.className='';
					message.style.display='block';
					message.lastElementChild.previousElementSibling.style.display='none';
					if(level==1)
					{
						message.firstElementChild.innerHTML="Now you will continue the same task, but sometimes there will be something else to do.<br><br>As well as dragging each circle in turn to the bottom of the screen, there will sometimes be special circles that you should drag in another direction (left, top, or right) instead of towards the bottom.<br><br>These special circles will initially appear in a different colour when they are first shown on the screen, instead of yellow. This is an instruction telling you where they should go.<br><br>For example, suppose that the circle with 7 in it was first shown in blue when it appeared on the screen. That would be an instruction that when you get to 7 in the sequence, you should drag that circle to the blue side of the box (left) instead of the bottom.<br><br>You will still be able to drag any circle to the bottom of the box, but you should try to remember to drag these special circles to the instructed location instead."
					}
					if(level==2)
					{
						if(retry==0)
						{
							message.firstElementChild.innerHTML="You didn't drag the special circle to the correct location.<br><br>Please try again."
							message.lastElementChild.innerHTML='Retry'
						}
						else
						{
							message.lastElementChild.innerHTML='Next'
							message.firstElementChild.innerHTML="Well done, that was correct.<br><br>Now it will get really difficult. There will be a total of 25 circles, and 10 of them will be special ones that should go to one of the coloured sides of the box.<br><br>You will not be able to remember all of them. That's fine - just try to remember as many as you can."
						}
					}
					if(level==3)
					{
						message.firstElementChild.innerHTML="Now we are going to explain a strategy that can make the task easier.<br><br>When you see a special circle, you can set a reminder by immediately dragging it to a different part of the box. For example, if a circle initially appeared in blue, you could immediately drag it next to the blue (left) side of the box. Then, when you get to that circle in the sequence its location would remind you where it is supposed to go.<br><br>Please now try the task again, using this strategy to help you."
					}
					if(level==4)
					{
						if(retry<8)
						{
							message.firstElementChild.innerHTML="You only got "+retry+" out of 10 correct. You need to get at least 8 out of 10 correct to continue to the next part.<br><br>Please keep in mind that you can set reminders to help you remember. Each time a special circle appears, you can immediately drag it next to the part of the box where it eventually needs to go so. This should help remind you what to do when you get to that circle in the sequence."
							message.lastElementChild.innerHTML='Retry'
						}
						else
						{
							message.firstElementChild.innerHTML="From now on, you will score points every time you drag one of the special circles to the correct location.<br><br>You should try to score as many points as you can."
							message.lastElementChild.innerHTML='Next'
						}
					}
					if(level==5)
					{
						message.style.display='none';
						var submit=setInterval(function()
						{
							var xhr=new XMLHttpRequest();
							xhr.open('GET',"php/resistor.php?name=5&id="+id+"&score="+score+"&Acc="+(Acc/10)+"&YAcc="+((Acc+Y_Acc)/25)+"&cScore="+cScore+"&DH="+durtion.h+"&DM="+durtion.m+"&DS="+durtion.s+"",true);
							xhr.onreadystatechange=function()
							{
								if(xhr.readyState==4&&xhr.status==200)
								{
									if(xhr.responseText==1)
									{
										message.style.display='block';
										message.firstElementChild.innerHTML='You have scored a total of '+score+' points so far.<br><br>This time you must set a reminder for every special circle.<br><br>Please touch the button below to start.'
										message.lastElementChild.innerHTML='Special circles worth<br><b>10 </b>points<br><br>you <b>must</b> set reminder'
										message.lastElementChild.className='reminder';
										clearInterval(submit);
									}
									else
									{
										alert('Data not Saved!')
									}
								}
							};
							xhr.send();
						},(time));
					}
					if(level==6)
					{
						message.style.display='none';
						var submit=setInterval(function()
						{
							var xhr=new XMLHttpRequest();
							xhr.open('GET',"php/resistor.php?name=6&id="+id+"&score="+score+"&Acc="+(Acc/10)+"&YAcc="+((Acc+Y_Acc)/25)+"&cScore="+cScore+"&DH="+durtion.h+"&DM="+durtion.m+"&DS="+durtion.s+"",true);
							xhr.onreadystatechange=function()
							{
								if(xhr.readyState==4&&xhr.status==200)
								{
									if(xhr.responseText==1)
									{
										message.style.display='block'
										document.getElementById('timer').style.display='block';
										message.firstElementChild.innerHTML='Now that you have had some practice with the experiment, we would like you to tell us how accurately you can perform the task when you do it <b>without</b> using any reminders.<br><br>Please use the scale below to indicate what percentage of the special circles you can correctly drag to the instructed side of the square, on average. 100% would mean that you always get every single one correct. 0% would mean that you can never get any of them correct.'
										message.lastElementChild.innerHTML='next'
										document.getElementById('slide').style.display='block';
										init2();
										clearInterval(submit);
									}
									else
									{
										alert('Data not Saved!')
									}
								}
							};
							xhr.send();
						},(time));
					}
					if(level==7)
					{
						message.style.display='none';
						var submit=setInterval(function()
						{
							var xhr=new XMLHttpRequest();
							xhr.open('GET',"php/resistor.php?name=7&id="+id+"&score="+score+"&Acc="+(Acc/10)+"&YAcc="+((Acc+Y_Acc)/25)+"&O="+O+"&DH="+durtion.h+"&DM="+durtion.m+"&DS="+durtion.s+"",true);
							xhr.onreadystatechange=function()
							{
								if(xhr.readyState==4&&xhr.status==200)
								{
									if(xhr.responseText==1)
									{
										message.style.display='block';
										message.firstElementChild.innerHTML='You have scored a total of '+score+' points so far.<br><br>This time you <b>must</b> set a reminder for every special circle.<br><br>Please touch the button below to start.'
										message.lastElementChild.innerHTML='Special circles worth<br><b>10 </b>points<br><br>Reminders <b>not</b> allowed'
										message.lastElementChild.className='reminder';
										clearInterval(submit);
									}
									else
									{
										alert('Data not Saved!')
									}
								}
							};
							xhr.send();
						},(time));
					}
					if(level==8)
					{
						message.style.display='none';
						var submit=setInterval(function()
						{
							var xhr=new XMLHttpRequest();
							xhr.open('GET',"php/resistor.php?name=8&id="+id+"&score="+score+"&Acc="+(Acc/10)+"&YAcc="+((Acc+Y_Acc)/25)+"&cScore="+cScore+"&DH="+durtion.h+"&DM="+durtion.m+"&DS="+durtion.s+"",true);
							xhr.onreadystatechange=function()
							{
								if(xhr.readyState==4&&xhr.status==200)
								{
									if(xhr.responseText==1)
									{
										message.style.display='block'
										message.firstElementChild.innerHTML='You have scored a total of '+score+' points so far.<br><br>This time you have a choice.<br><br>Please touch the option that you prefer.<br><br>'
										message.lastElementChild.previousElementSibling.innerHTML='Special circles worth<br><b>10 </b>points<br><br>Reminders <b>not</b> allowed'
										message.lastElementChild.previousElementSibling.style.display='inline'
										message.lastElementChild.innerHTML='Special circles worth<br><b>9 </b>points<br><br>Reminders allowed'
										message.lastElementChild.previousElementSibling.className='notreminder'
										message.lastElementChild.className='reminder';
										clearInterval(submit);
									}
									else
									{
										alert('Data not Saved!')
									}
								}
							};
							xhr.send();
						},(time));
					}
					if(level==9)
					{
						message.style.display='none';
						var submit=setInterval(function()
						{
							var xhr=new XMLHttpRequest();
							xhr.open('GET',"php/resistor.php?name=9&id="+id+"&score="+score+"&Acc="+(Acc/10)+"&YAcc="+((Acc+Y_Acc)/25)+"&O="+O+"&DH="+durtion.h+"&DM="+durtion.m+"&DS="+durtion.s+"",true);
							xhr.onreadystatechange=function()
							{
								if(xhr.readyState==4&&xhr.status==200)
								{
									if(xhr.responseText==1)
									{
										message.style.display='block';
										message.firstElementChild.innerHTML='You have scored a total of '+score+' points so far.<br><br>This time you must set a reminder for every special circle.<br><br>Please touch the button below to start.'
										message.lastElementChild.innerHTML='Special circles worth<br><b>10 </b>points<br><br>you <b>must</b> set reminder'
										message.lastElementChild.className='reminder';
										clearInterval(submit);
									}
									else
									{
										alert('Data not Saved!')
									}
								}
							};
							xhr.send();
						},(time));
					}
					if(level==10)
					{
						message.style.display='none';
						var submit=setInterval(function()
						{
							var xhr=new XMLHttpRequest();
							xhr.open('GET',"php/resistor.php?name=10&id="+id+"&score="+score+"&Acc="+(Acc/10)+"&YAcc="+((Acc+Y_Acc)/25)+"&cScore="+cScore+"&DH="+durtion.h+"&DM="+durtion.m+"&DS="+durtion.s+"",true);
							xhr.onreadystatechange=function()
							{
								if(xhr.readyState==4&&xhr.status==200)
								{
									if(xhr.responseText==1)
									{
										message.style.display='block'
										message.firstElementChild.innerHTML='You have scored a total of '+score+' points so far.<br><br>This time you have a choice.<br><br>Please touch the option that you prefer.<br><br>'
										message.lastElementChild.previousElementSibling.innerHTML='Special circles worth<br><b>10 </b>points<br><br>Reminders <b>not</b> allowed'
										message.lastElementChild.previousElementSibling.style.display='inline'
										message.lastElementChild.innerHTML='Special circles worth<br><b>4 </b>points<br><br>Reminders allowed'
										message.lastElementChild.previousElementSibling.className='notreminder'
										message.lastElementChild.className='reminder';
										clearInterval(submit);
									}
									else
									{
										alert('Data not Saved!')
									}
								}
							};
							xhr.send();
						},(time));
					}
					if(level==11)
					{
						message.style.display='none';
						var submit=setInterval(function()
						{
							var xhr=new XMLHttpRequest();
							xhr.open('GET',"php/resistor.php?name=11&id="+id+"&score="+score+"&Acc="+(Acc/10)+"&YAcc="+((Acc+Y_Acc)/25)+"&O="+O+"&DH="+durtion.h+"&DM="+durtion.m+"&DS="+durtion.s+"",true);
							xhr.onreadystatechange=function()
							{
								if(xhr.readyState==4&&xhr.status==200)
								{
									if(xhr.responseText==1)
									{
										message.style.display='block';
										message.firstElementChild.innerHTML='You have scored a total of '+score+' points so far.<br><br>This time you must do the task without setting any reminders.<br><br>Please touch the button below to start.'
										message.lastElementChild.innerHTML='Special circles worth<br><b>10 </b>points<br><br>Reminders <b>not</b> allowed'
										message.lastElementChild.className='notreminder';
										clearInterval(submit);
									}
									else
									{
										alert('Data not Saved!')
									}
								}
							};
							xhr.send();
						},(time));
					}
					if(level==12)
					{
						message.style.display='none';
						var submit=setInterval(function()
						{
							var xhr=new XMLHttpRequest();
							xhr.open('GET',"php/resistor.php?name=12&id="+id+"&score="+score+"&Acc="+(Acc/10)+"&YAcc="+((Acc+Y_Acc)/25)+"&cScore="+cScore+"&DH="+durtion.h+"&DM="+durtion.m+"&DS="+durtion.s+"",true);
							xhr.onreadystatechange=function()
							{
								if(xhr.readyState==4&&xhr.status==200)
								{
									if(xhr.responseText==1)
									{
										message.style.display='block'
										message.firstElementChild.innerHTML='You have scored a total of '+score+' points so far.<br><br>This time you have a choice.<br><br>Please touch the option that you prefer.<br><br>'
										message.lastElementChild.previousElementSibling.innerHTML='Special circles worth<br><b>10 </b>points<br><br>Reminders <b>not</b> allowed'
										message.lastElementChild.previousElementSibling.style.display='inline'
										message.lastElementChild.innerHTML='Special circles worth<br><b>1 </b>points<br><br>Reminders allowed'
										message.lastElementChild.previousElementSibling.className='notreminder'
										message.lastElementChild.className='reminder';
										clearInterval(submit);
									}
									else
									{
										alert('Data not Saved!')
									}
								}
							};
							xhr.send();
						},(time));
					}
					if(level==13)
					{
						message.style.display='none';
						var submit=setInterval(function()
						{
							var xhr=new XMLHttpRequest();
							xhr.open('GET',"php/resistor.php?name=13&id="+id+"&score="+score+"&Acc="+(Acc/10)+"&YAcc="+((Acc+Y_Acc)/25)+"&O="+O+"&DH="+durtion.h+"&DM="+durtion.m+"&DS="+durtion.s+"",true);
							xhr.onreadystatechange=function()//////////////////////////////
							{
								if(xhr.readyState==4&&xhr.status==200)
								{
									if(xhr.responseText==1)
									{
										message.style.display='block';
										message.firstElementChild.innerHTML='You have scored a total of '+score+' points so far.<br><br>This time you must set a reminder for every special circle.<br><br>Please touch the button below to start.'
										message.lastElementChild.innerHTML='Special circles worth<br><b>10 </b>points<br><br>you <b>must</b> set reminder'
										message.lastElementChild.className='reminder';
										clearInterval(submit);
									}
									else
									{
										alert('Data not Saved!')
									}
								}
							};
							xhr.send();
						},(time));
					}
					if(level==14)
					{
						message.style.display='none';
						var submit=setInterval(function()
						{
							var xhr=new XMLHttpRequest();
							xhr.open('GET',"php/resistor.php?name=14&id="+id+"&score="+score+"&Acc="+(Acc/10)+"&YAcc="+((Acc+Y_Acc)/25)+"&cScore="+cScore+"&DH="+durtion.h+"&DM="+durtion.m+"&DS="+durtion.s+"",true);
							xhr.onreadystatechange=function()
							{
								if(xhr.readyState==4&&xhr.status==200)
								{
									if(xhr.responseText==1)
									{
										message.style.display='block'
										message.firstElementChild.innerHTML='You have scored a total of '+score+' points so far.<br><br>This time you have a choice.<br><br>Please touch the option that you prefer.<br><br>'
										message.lastElementChild.previousElementSibling.innerHTML='Special circles worth<br><b>10 </b>points<br><br>Reminders <b>not</b> allowed'
										message.lastElementChild.previousElementSibling.style.display='inline'
										message.lastElementChild.innerHTML='Special circles worth<br><b>2 </b>points<br><br>Reminders allowed'
										message.lastElementChild.previousElementSibling.className='notreminder'
										message.lastElementChild.className='reminder';
										clearInterval(submit);
									}
									else
									{
										alert('Data not Saved!')
									}
								}
							};
							xhr.send();
						},(time));
					}
					if(level==15)
					{
						message.style.display='none';
						var submit=setInterval(function()
						{
							var xhr=new XMLHttpRequest();
							xhr.open('GET',"php/resistor.php?name=15&id="+id+"&score="+score+"&Acc="+(Acc/10)+"&YAcc="+((Acc+Y_Acc)/25)+"&O="+O+"&DH="+durtion.h+"&DM="+durtion.m+"&DS="+durtion.s+"",true);
							xhr.onreadystatechange=function()
							{
								if(xhr.readyState==4&&xhr.status==200)
								{
									if(xhr.responseText==1)
									{
										message.style.display='block';
										message.firstElementChild.innerHTML='You have scored a total of '+score+' points so far.<br><br>This time you must do the task without setting any reminders.<br><br>Please touch the button below to start.'
										message.lastElementChild.innerHTML='Special circles worth<br><b>10 </b>points<br><br>Reminders <b>not</b> allowed'
										message.lastElementChild.className='notreminder';
										clearInterval(submit);
									}
									else
									{
										alert('Data not Saved!')
									}
								}
							};
							xhr.send();
						},(time));
					}
					if(level==16)
					{
						message.style.display='none';
						var submit=setInterval(function()
						{
							var xhr=new XMLHttpRequest();
							xhr.open('GET',"php/resistor.php?name=16&id="+id+"&score="+score+"&Acc="+(Acc/10)+"&YAcc="+((Acc+Y_Acc)/25)+"&cScore="+cScore+"&DH="+durtion.h+"&DM="+durtion.m+"&DS="+durtion.s+"",true);
							xhr.onreadystatechange=function()
							{
								if(xhr.readyState==4&&xhr.status==200)
								{
									if(xhr.responseText==1)
									{
										message.style.display='block'
										message.firstElementChild.innerHTML='You have scored a total of '+score+' points so far.<br><br>This time you have a choice.<br><br>Please touch the option that you prefer.<br><br>'
										message.lastElementChild.previousElementSibling.innerHTML='Special circles worth<br><b>10 </b>points<br><br>Reminders <b>not</b> allowed'
										message.lastElementChild.previousElementSibling.style.display='inline'
										message.lastElementChild.innerHTML='Special circles worth<br><b>3 </b>points<br><br>Reminders allowed'
										message.lastElementChild.previousElementSibling.className='notreminder'
										message.lastElementChild.className='reminder';
										clearInterval(submit);
									}
									else
									{
										alert('Data not Saved!')
									}
								}
							};
							xhr.send();
						},(time));
					}
					if(level==17)
					{
						message.style.display='none';
						var submit=setInterval(function()
						{
							var xhr=new XMLHttpRequest();
							xhr.open('GET',"php/resistor.php?name=17&id="+id+"&score="+score+"&Acc="+(Acc/10)+"&YAcc="+((Acc+Y_Acc)/25)+"&O="+O+"&DH="+durtion.h+"&DM="+durtion.m+"&DS="+durtion.s+"",true);
							xhr.onreadystatechange=function()
							{
								if(xhr.readyState==4&&xhr.status==200)
								{
									if(xhr.responseText==1)
									{
										message.style.display='block';
										message.firstElementChild.innerHTML='You have scored a total of '+score+' points so far.<br><br>This time you must set a reminder for every special circle.<br><br>Please touch the button below to start.'
										message.lastElementChild.innerHTML='Special circles worth<br><b>10 </b>points<br><br>You <b>must</b> set reminder'
										message.lastElementChild.className='reminder';
										clearInterval(submit);
									}
									else
									{
										alert('Data not Saved!')
									}
								}
							};
							xhr.send();
						},(time));
					}
					if(level==18)
					{
						message.style.display='none';
						var submit=setInterval(function()
						{
							var xhr=new XMLHttpRequest();
							xhr.open('GET',"php/resistor.php?name=18&id="+id+"&score="+score+"&Acc="+(Acc/10)+"&YAcc="+((Acc+Y_Acc)/25)+"&cScore="+cScore+"&DH="+durtion.h+"&DM="+durtion.m+"&DS="+durtion.s+"",true);
							xhr.onreadystatechange=function()
							{
								if(xhr.readyState==4&&xhr.status==200)
								{
									if(xhr.responseText==1)
									{
										message.style.display='block'
										message.firstElementChild.innerHTML='You have scored a total of '+score+' points so far.<br><br>This time you have a choice.<br><br>Please touch the option that you prefer.<br><br>'
										message.lastElementChild.previousElementSibling.innerHTML='Special circles worth<br><b>10 </b>points<br><br>Reminders <b>not</b> allowed'
										message.lastElementChild.previousElementSibling.style.display='inline'
										message.lastElementChild.innerHTML='Special circles worth<br><b>5 </b>points<br><br>Reminders allowed'
										message.lastElementChild.previousElementSibling.className='notreminder'
										message.lastElementChild.className='reminder';
										clearInterval(submit);
									}
									else
									{
										alert('Data not Saved!')
									}
								}
							};
							xhr.send();
						},(time));
					}
					if(level==19)
					{
						message.style.display='none';
						var submit=setInterval(function()
						{
							var xhr=new XMLHttpRequest();
							xhr.open('GET',"php/resistor.php?name=19&id="+id+"&score="+score+"&Acc="+(Acc/10)+"&YAcc="+((Acc+Y_Acc)/25)+"&O="+O+"&DH="+durtion.h+"&DM="+durtion.m+"&DS="+durtion.s+"",true);
							xhr.onreadystatechange=function()
							{
								if(xhr.readyState==4&&xhr.status==200)
								{
									if(xhr.responseText==1)
									{
										message.style.display='block';
										message.firstElementChild.innerHTML='You have scored a total of '+score+' points so far.<br><br>This time you must do the task without setting any reminders.<br><br>Please touch the button below to start.'
										message.lastElementChild.innerHTML='Special circles worth<br><b>10 </b>points<br><br>Reminders <b>not</b> allowed'
										message.lastElementChild.className='notreminder';
										clearInterval(submit);
									}
									else
									{
										alert('Data not Saved!')
									}
								}
							};
							xhr.send();
						},(time));
					}
					if(level==20)
					{
						message.style.display='none';
						var submit=setInterval(function()
						{
							var xhr=new XMLHttpRequest();
							xhr.open('GET',"php/resistor.php?name=20&id="+id+"&score="+score+"&Acc="+(Acc/10)+"&YAcc="+((Acc+Y_Acc)/25)+"&cScore="+cScore+"&DH="+durtion.h+"&DM="+durtion.m+"&DS="+durtion.s+"",true);
							xhr.onreadystatechange=function()
							{
								if(xhr.readyState==4&&xhr.status==200)
								{
									if(xhr.responseText==1)
									{
										message.style.display='block'
										message.firstElementChild.innerHTML='You have scored a total of '+score+' points so far.<br><br>This time you have a choice.<br><br>Please touch the option that you prefer.<br><br>'
										message.lastElementChild.previousElementSibling.innerHTML='Special circles worth<br><b>10 </b>points<br><br>Reminders <b>not</b> allowed'
										message.lastElementChild.previousElementSibling.style.display='inline'
										message.lastElementChild.innerHTML='Special circles worth<br><b>7 </b>points<br><br>Reminders allowed'
										message.lastElementChild.previousElementSibling.className='notreminder'
										message.lastElementChild.className='reminder';
										clearInterval(submit);
									}
									else
									{
										alert('Data not Saved!')
									}
								}
							};
							xhr.send();
						},(time));
					}
					if(level==21)
					{
						message.style.display='none';
						var submit=setInterval(function()
						{
							var xhr=new XMLHttpRequest();
							xhr.open('GET',"php/resistor.php?name=21&id="+id+"&score="+score+"&Acc="+(Acc/10)+"&YAcc="+((Acc+Y_Acc)/25)+"&O="+O+"&DH="+durtion.h+"&DM="+durtion.m+"&DS="+durtion.s+"",true);
							xhr.onreadystatechange=function()
							{
								if(xhr.readyState==4&&xhr.status==200)
								{
									if(xhr.responseText==1)
									{
										message.style.display='block';
										message.firstElementChild.innerHTML='You have scored a total of '+score+' points so far.<br><br>This time you must set a reminder for every special circle.<br><br>Please touch the button below to start.'
										message.lastElementChild.innerHTML='Special circles worth<br><b>10 </b>points<br><br>You <b>must</b> set Reminder'
										message.lastElementChild.className='reminder';
										clearInterval(submit);
									}
									else
									{
										alert('Data not Saved!')
									}
								}
							};
							xhr.send();
						},(time));
					}
					if(level==22)
					{
						message.style.display='none';
						var submit=setInterval(function()
						{
							var xhr=new XMLHttpRequest();
							xhr.open('GET',"php/resistor.php?name=22&id="+id+"&score="+score+"&Acc="+(Acc/10)+"&YAcc="+((Acc+Y_Acc)/25)+"&cScore="+cScore+"&DH="+durtion.h+"&DM="+durtion.m+"&DS="+durtion.s+"",true);
							xhr.onreadystatechange=function()
							{
								if(xhr.readyState==4&&xhr.status==200)
								{
									if(xhr.responseText==1)
									{
										message.style.display='block'
										message.firstElementChild.innerHTML='You have scored a total of '+score+' points so far.<br><br>This time you have a choice.<br><br>Please touch the option that you prefer.<br><br>'
										message.lastElementChild.previousElementSibling.innerHTML='Special circles worth<br><b>10 </b>points<br><br>Reminders <b>not</b> allowed'
										message.lastElementChild.previousElementSibling.style.display='inline'
										message.lastElementChild.innerHTML='Special circles worth<br><b>7 </b>points<br><br>Reminders allowed'
										message.lastElementChild.previousElementSibling.className='notreminder'
										message.lastElementChild.className='reminder';
										clearInterval(submit);
									}
									else
									{
										alert('Data not Saved!')
									}
								}
							};
							xhr.send();
						},(time));
					}
					if(level==23)
					{
						message.style.display='none';
						var submit=setInterval(function()
						{
							var xhr=new XMLHttpRequest();
							xhr.open('GET',"php/resistor.php?name=23&id="+id+"&score="+score+"&Acc="+(Acc/10)+"&YAcc="+((Acc+Y_Acc)/25)+"&O="+O+"&DH="+durtion.h+"&DM="+durtion.m+"&DS="+durtion.s+"",true);
							xhr.onreadystatechange=function()
							{
								if(xhr.readyState==4&&xhr.status==200)
								{
									if(xhr.responseText==1)
									{
										document.getElementById('message').style.display='block';
										document.getElementById('message').innerHTML="You have now completed the experiment. Thank you for taking part!<br><br>You scored a total of "+score+" points."
										clearInterval(submit);
									}
									else
									{
										alert('Data not Saved!')
									}
								}
							};
							xhr.send();
						},(time));
					}
				}
			}
			clearInterval(interval);
		}
		r-=2;
	},(10));
}
var g1=1,g2=1,g3=1,g4=1;
document.getElementById('submit').addEventListener('click',function(){ play(0) });
document.getElementsByTagName('button')[0].addEventListener('click',function(){ play(0) });
document.getElementsByTagName('button')[1].addEventListener('click',function(){ play(1) });
function play(option=0)
{
	trial=0;
	cScore=0;
	if(level==0)
	{
		if(g1==1)
		{
			id=document.getElementById('id').value
			var xhr=new XMLHttpRequest();
			xhr.open('GET',"php/resistor.php?name=1&id="+id+"",true);
			xhr.onreadystatechange=function()
			{
				if(xhr.readyState==4&&xhr.status==200)
				{
					if(xhr.responseText==1)
					{
						ctx.canvas.style.display='none'
						var message=document.getElementById('message')
						message.style.display='block';
						message.lastElementChild.style.display='inline'
						message.firstElementChild.innerHTML='In this experiment you will have a simple task to do.<br><br>You will see several yellow circles inside a box. Inside each circle will be a number. <br><br>You can move them around by clicking and dragging with the mouse. Your task is to drag them to the bottom of the box in sequence. Please start by dragging 1 all the way to the bottom. This will make it disappear. Then drag 2 to the bottom, then 3, and so on.'
						level--;
						g1=0;
					}
					else
					{
						alert('ID Already used!')
						level--;
						g1=1;
					}
				}
			};
			xhr.send();
		}
		else
		{
			trial=1;
			a=new level1().a;
			ctx.canvas.style.display='block'
			g1=1;
			document.getElementById('message').style.display='none';
			init();
		}
	}
	else if(level==1)
	{
		trial=1
		a=new level2().a;
		ctx.canvas.style.display='block'
		document.getElementById('message').style.display='none';
	}
	else if(level==2)
	{
		trial=0;
		if(retry==0)
		{
			a=new level2().a;
			level--;
		}
		else
			a=new level3().a;
		ctx.canvas.style.display='block'
		document.getElementById('message').style.display='none';
	}
	else if(level==3)
	{
		a=new level4().a;
		retry=0;
		ctx.canvas.style.display='block'
		document.getElementById('message').style.display='none';
	}
	else if(level==4)
	{
		if(retry<8)
		{
			a=new level4().a;
			retry=0;
			level--;
			ctx.canvas.style.display='block'
			document.getElementById('message').style.display='none';
		}
		else
		{
			if(g1==1)
			{
				ctx.canvas.style.display='none'
				var message=document.getElementById('message')
				message.style.display='block';
				message.firstElementChild.innerHTML='Sometimes when you do the task, you will have to do it without setting any reminders.<br><br>When this happens, you will score <b>10</b> points for every special circle you remember.<br><br>You will always be given clear instructions what you should do. In this case you will be told "This time you must do the task without setting any reminders" and see a red button. When this happens, the computer will not let you set any reminders.<br><br>Let\'s practise that now.'
				level--;
				g1=0;
			}
			else if(g2==1)
			{
				ctx.canvas.style.display='none'
				var message=document.getElementById('message')
				message.style.display='block';
				message.firstElementChild.innerHTML='You have scored a total of '+score+' points so far.<br><br>This time you must do the task without setting any reminders.<br><br>Please touch the button below to start.'
				message.lastElementChild.innerHTML='Special circles worth<br><b>10 </b>points<br><br>Reminders <b>not</b> allowed'
				message.lastElementChild.className='notreminder';
				level--;
				g2=0;
			}
			else
			{
				cScore=0;
				a=new level5().a;
				Acc=0;
				Y_Acc=0
				ctx.canvas.style.display='block'
				document.getElementById('message').style.display='none';
				g1=1;
				duration();
				g2=1;
			}
		}
	}
	else if(level==5)
	{
		a=new level6().a;
		Acc=0;
		Y_Acc=0
		duration();
		ctx.canvas.style.display='block'
		document.getElementById('message').style.display='none';
	}
	else if(level==6)
	{
		if(g1==1)
		{
			var xhr=new XMLHttpRequest();
			xhr.open('GET',"php/resistor.php?name=2&id="+id+"&sx="+Math.round((slide.x-50)/3)+"",true);
			xhr.onreadystatechange=function()
			{
				if(xhr.readyState==4&&xhr.status==200)
				{
					if(xhr.responseText==1)
					{
						ctx.canvas.style.display='none'
						var message=document.getElementById('message')
						message.style.display='block';
						slide.x=200;
						slide.active=0;
						message.firstElementChild.innerHTML='Now please tell us how accurately you can perform the task <b>with</b> reminders. As before, 100% would mean that you always get every special circle correct. 0% would mean that you can never get any of them correct.'
						level--;
						g1=0;
					}
					else
					{
						alert('Data not Saved!')
						level--;
						g1=1;
					}
				}
			};
			xhr.send();
		}
		else if(g2==1)
		{
			var xhr=new XMLHttpRequest();
			xhr.open('GET',"php/resistor.php?name=3&id="+id+"&sx="+Math.round((slide.x-50)/3)+"",true);
			xhr.onreadystatechange=function()
			{
				if(xhr.readyState==4&&xhr.status==200)
				{
					if(xhr.responseText==1)
					{
						document.getElementById('slide').style.display='none';
						ctx.canvas.style.display='none'
						var message=document.getElementById('message')
						message.style.display='block';
						message.firstElementChild.innerHTML='Sometimes, you will have a choice between two options when you do the task. One option will be to do the task without being able to set any reminders. If you choose this option, you will always score 10 points for every special circle you remember.<br><br>The other option will be to do the task with reminders, but in this case each special circle will be worth fewer points. For example, you might be told that if you want to use reminders, each special circle will be worth only 5 points.<br><br>You should choose whichever option you think will score you the most points. <br><br>So if, for example, you thought you would earn more points by setting reminders and scoring 5 points for each special circle, you should choose this option. But if you thought you would score more points by just using your own memory and earning 10 points for each special circle, you should choose this option instead.'
						message.lastElementChild.innerHTML='next'
						level--;
						g2=0;
					}
					else
					{
						alert('Data not Saved!')
						level--;
						g2=1;
					}
				}
			};
			xhr.send();
		}
		else if(g3==1)
		{
			ctx.canvas.style.display='none'
			var message=document.getElementById('message')
			message.style.display='block';
			message.firstElementChild.innerHTML='When you are presented with a choice like this, it is completely up to you. You should do whatever you think will allow you to score the highest number of points.'
			level--;
			g3=0;
		}
		else if(g4==1)
		{
			ctx.canvas.style.display='none'
			var message=document.getElementById('message')
			message.style.display='block';
			message.firstElementChild.innerHTML='You have scored a total of '+score+' points so far.<br><br>This time you have a choice.<br><br>Please touch the option that you prefer.<br><br>'
			message.lastElementChild.previousElementSibling.innerHTML='Special circles worth<br><b>10 </b>points<br><br>Reminders <b>not</b> allowed'
			message.lastElementChild.previousElementSibling.style.display='inline'
			message.lastElementChild.innerHTML='Special circles worth<br><b>6 </b>points<br><br>Reminders allowed'
			message.lastElementChild.previousElementSibling.className='notreminder'
			message.lastElementChild.className='reminder';
			level--;
			g4=0;
		}
		else
		{
			if(option==0)
			{
				a=new level7().a;
				O=0;
			}
			else
			{
				a=new level7().b;
				O=1;
			}
			Acc=0;
			Y_Acc=0
			document.getElementById('timer').firstElementChild.value++;
			timer();
			duration();
			ctx.canvas.style.display='block'
			document.getElementById('message').style.display='none';
			g1=1;
			g2=1;
			g3=1;
			g4=1;
		}
	}
	else if(level==7)
	{
		a=new level8().a;
		Acc=0;
		Y_Acc=0
		document.getElementById('timer').firstElementChild.value++;
		timer();
		duration();
		ctx.canvas.style.display='block'
		document.getElementById('message').style.display='none';
	}
	else if(level==8)
	{
		if(option==0)
		{
			a=new level9().a;
			O=0;
		}
		else
		{
			a=new level9().b;
			O=1;
		}
		Acc=0;
		Y_Acc=0
		document.getElementById('timer').firstElementChild.value++;
		timer();
		duration();
		ctx.canvas.style.display='block'
		document.getElementById('message').style.display='none';
	}
	else if(level==9)
	{
		a=new level10().a;
		Acc=0;
		Y_Acc=0
		document.getElementById('timer').firstElementChild.value++;
		timer();
		duration();
		ctx.canvas.style.display='block'
		document.getElementById('message').style.display='none';
	}
	else if(level==10)
	{
		if(option==0)
		{
			a=new level11().a;
			O=0;
		}
		else
		{
			a=new level11().b;
			O=1;
		}
		Acc=0;
		Y_Acc=0
		document.getElementById('timer').firstElementChild.value++;
		timer();
		duration();
		ctx.canvas.style.display='block'
		document.getElementById('message').style.display='none';
	}
	else if(level==11)
	{
		a=new level12().a;
		Acc=0;
		Y_Acc=0
		document.getElementById('timer').firstElementChild.value++;
		timer();
		duration();
		ctx.canvas.style.display='block'
		document.getElementById('message').style.display='none';
	}
	else if(level==12)
	{
		if(option==0)
		{
			a=new level13().a;
			O=0;
		}
		else
		{
			a=new level13().b;
			O=1;
		}
		Acc=0;
		Y_Acc=0
		document.getElementById('timer').firstElementChild.value++;
		timer();
		duration();
		ctx.canvas.style.display='block'
		document.getElementById('message').style.display='none';
	}
	else if(level==13)
	{
		a=new level14().a;
		Acc=0;
		Y_Acc=0
		document.getElementById('timer').firstElementChild.value++;
		timer();
		duration();
		ctx.canvas.style.display='block'
		document.getElementById('message').style.display='none';
	}
	else if(level==14)
	{
		if(option==0)
		{
			a=new level15().a;
			O=0;
		}
		else
		{
			a=new level15().b;
			O=1;
		}
		Acc=0;
		Y_Acc=0
		document.getElementById('timer').firstElementChild.value++;
		timer();
		duration();
		ctx.canvas.style.display='block'
		document.getElementById('message').style.display='none';
	}
	else if(level==15)
	{
		a=new level16().a;
		Acc=0;
		Y_Acc=0
		document.getElementById('timer').firstElementChild.value++;
		timer();
		duration();
		ctx.canvas.style.display='block'
		document.getElementById('message').style.display='none';
	}
	else if(level==16)
	{
		if(option==0)
		{
			a=new level17().a;
			O=0;
		}
		else
		{
			a=new level17().b;
			O=1;
		}
		Acc=0;
		Y_Acc=0
		document.getElementById('timer').firstElementChild.value++;
		timer();
		duration();
		ctx.canvas.style.display='block'
		document.getElementById('message').style.display='none';
	}
	else if(level==17)
	{
		a=new level18().a;
		Acc=0;
		Y_Acc=0
		document.getElementById('timer').firstElementChild.value++;
		timer();
		duration();
		ctx.canvas.style.display='block'
		document.getElementById('message').style.display='none';
	}
	else if(level==18)
	{
		if(option==0)
		{
			a=new level19().a;
			O=0;
		}
		else
		{
			a=new level19().b;
			O=1;
		}
		Acc=0;
		Y_Acc=0
		document.getElementById('timer').firstElementChild.value++;
		timer();
		duration();
		ctx.canvas.style.display='block'
		document.getElementById('message').style.display='none';
	}
	else if(level==19)
	{
		a=new level20().a;
		Acc=0;
		Y_Acc=0
		document.getElementById('timer').firstElementChild.value++;
		timer();
		duration();
		ctx.canvas.style.display='block'
		document.getElementById('message').style.display='none';
	}
	else if(level==20)
	{
		if(option==0)
		{
			a=new level21().a;
			O=0;
		}
		else
		{
			a=new level21().b;
			O=1;
		}
		Acc=0;
		Y_Acc=0
		document.getElementById('timer').firstElementChild.value++;
		timer();
		duration();
		ctx.canvas.style.display='block'
		document.getElementById('message').style.display='none';
	}
	else if(level==21)
	{
		a=new level22().a;
		Acc=0;
		Y_Acc=0
		document.getElementById('timer').firstElementChild.value++;
		timer();
		duration();
		ctx.canvas.style.display='block'
		document.getElementById('message').style.display='none';
	}
	else if(level==22)
	{
		if(option==0)
		{
			a=new level23().a;
			O=0;
		}
		else
		{
			a=new level23().b;
			O=1;
		}
		Acc=0;
		Y_Acc=0
		document.getElementById('timer').firstElementChild.value++;
		timer();
		duration();
		ctx.canvas.style.display='block'
		document.getElementById('message').style.display='none';
	}
	level++;
}