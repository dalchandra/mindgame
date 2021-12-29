class rand
{
	constructor()
	{
		this.A=[[0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,3,3,3],[0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,2,3,3,3],[0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,3,3,3,3]]
	}
	shuffle(array)
	{
		for(let i=array.length-1;i>0;i--)
		{
			let j=Math.floor(Math.random()*(i+1))
			let y=array[i]
			array[i]=array[j]
			array[j]=y
		}
	}
	set(no,s,r=1,sc=0)
	{
		this.shuffle(this.A[no%3])
		for(var i in s)
		{
			if(r!=3)
				s[i].reminder=r;
			if(i>6)
			{
				if(this.A[no%3][i-7]==1)
				{
					s[i].c=1;
					s[i].cp=1;
					s[i].s=sc;
					s[i].reminder=r;
				}
				else if(this.A[no%3][i-7]==2)
				{
					s[i].c=2;
					s[i].cp=2;
					s[i].s=sc;
					s[i].reminder=r;
				}
				else if(this.A[no%3][i-7]==3)
				{
					s[i].c=3;
					s[i].cp=3;
					s[i].s=sc;
					s[i].reminder=r;
				}
			}
		}
			
	}
}
