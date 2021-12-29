var brk,durtion={h:00,m:00,s:00}
function timer()
{
	brk=0;
	var min=2,sec=60;
	document.getElementById('timer').lastElementChild.style.color='black';
	var interval=setInterval(function()
	{
		sec--;
		if(sec<10)
			document.getElementById('timer').lastElementChild.innerHTML=""+min+":0"+sec+"";
		else
			document.getElementById('timer').lastElementChild.innerHTML=""+min+":"+sec+"";
		if(min==0&&sec==0)
		{
			document.getElementById('timer').lastElementChild.style.color='red';
			sec++;
		}
		if(brk==1)
		{
			document.getElementById('timer').lastElementChild.innerHTML="";
			clearInterval(interval);
			return 0;
		}	
		if(sec==0&min!=0)
		{
			min--;
			sec=60;
		}
	},(1000));
}
function duration()
{
	brk=0;
	durtion.h=0,durtion.m=0,durtion.s=0;
	var interval=setInterval(function()
	{
		if(durtion.s>=59)
		{
			durtion.s=0;
			durtion.m++;
		}
		if(durtion.m>=59)
		{
			durtion.m=0;
			durtion.h++;
		}
		if(brk==1)
		{
			clearInterval(interval);
			return 0;
		}	
		durtion.s++;
	},(1000));
}