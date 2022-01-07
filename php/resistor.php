<?php
$flag=0;
include('db.php');
if($_GET['name']==1)
{
	$query="select * from info";
	$run=mysqli_query($db,$query);
	while($data=mysqli_fetch_array($run))
	{
		if($data['id']==$_GET['id'])
		{
			$flag=1;
		}
	}
	if($flag==0)
	{
		$query="insert into info(id) values('".$_GET['id']."')";
		$run=mysqli_query($db,$query);
		if($run)
		{
			echo(1);		
		}
		else
		{
			echo(0);		
		}
	}
	else
	{
		echo(0);		
	}
}
else if($_GET['name']==2)
{
	$query="update info set PreInternal='".$_GET['sx']."' where id='".$_GET['id']."'";
	$run=mysqli_query($db,$query);
	if($run)
	{
		echo(1);		
	}
	else
	{
		echo(0);
	}
}
else if($_GET['name']==3)
{
	$query="update info set PreExternal='".$_GET['sx']."' where id='".$_GET['id']."'";
	$run=mysqli_query($db,$query);
	if($run)
	{
		echo(1);		
	}
	else
	{
		echo(0);
	}
}
else if($_GET['name']==5)
{
	$query="update info set score='".$_GET['score']."',NR1='".$_GET['cScore']."',AccNR1='".$_GET['Acc']."',TAccNR1='".$_GET['YAcc']."',DNR1='".$_GET['DH'].":".$_GET['DM'].":".$_GET['DS']."' where id='".$_GET['id']."'";
	$run=mysqli_query($db,$query);
	if($run)
	{
		echo(1);		
	}
	else
	{
		echo(0);
	}
}
else if($_GET['name']==6)
{
	$query="update info set score='".$_GET['score']."',R1='".$_GET['cScore']."',AccR1='".$_GET['Acc']."',TAccR1='".$_GET['YAcc']."',DR1='".$_GET['DH'].":".$_GET['DM'].":".$_GET['DS']."' where id='".$_GET['id']."'";
	$run=mysqli_query($db,$query);
	if($run)
	{
		echo(1);		
	}
	else
	{
		echo(0);
	}
}
else if($_GET['name']==7)
{
	$query="update info set score='".$_GET['score']."',O1='".$_GET['O']."',AccO1='".$_GET['Acc']."',TAccO1='".$_GET['YAcc']."',DO1='".$_GET['DH'].":".$_GET['DM'].":".$_GET['DS']."' where id='".$_GET['id']."'";
	$run=mysqli_query($db,$query);
	if($run)
	{
		echo(1);		
	}
	else
	{
		echo(0);
	}
}
else if($_GET['name']==8)
{
	$query="update info set score='".$_GET['score']."',NR2='".$_GET['cScore']."',AccNR2='".$_GET['Acc']."',TAccNR2='".$_GET['YAcc']."',DNR2='".$_GET['DH'].":".$_GET['DM'].":".$_GET['DS']."' where id='".$_GET['id']."'";
	$run=mysqli_query($db,$query);
	if($run)
	{
		echo(1);		
	}
	else
	{
		echo(0);
	}
}
else if($_GET['name']==9)
{
	$query="update info set score='".$_GET['score']."',O2='".$_GET['O']."',AccO2='".$_GET['Acc']."',TAccO2='".$_GET['YAcc']."',DO2='".$_GET['DH'].":".$_GET['DM'].":".$_GET['DS']."' where id='".$_GET['id']."'";
	$run=mysqli_query($db,$query);
	if($run)
	{
		echo(1);		
	}
	else
	{
		echo(0);
	}
}
else if($_GET['name']==10)/////confusion
{
	$query="update info set score='".$_GET['score']."',R2='".$_GET['cScore']."',AccR2='".$_GET['Acc']."',TAccR2='".$_GET['YAcc']."',DR2='".$_GET['DH'].":".$_GET['DM'].":".$_GET['DS']."' where id='".$_GET['id']."'";
	$run=mysqli_query($db,$query);
	if($run)
	{
		echo(1);		
	}
	else
	{
		echo(0);
	}
}
else if($_GET['name']==11)
{
	$query="update info set score='".$_GET['score']."',O3='".$_GET['O']."',AccO3='".$_GET['Acc']."',TAccO3='".$_GET['YAcc']."',DO3='".$_GET['DH'].":".$_GET['DM'].":".$_GET['DS']."' where id='".$_GET['id']."'";
	$run=mysqli_query($db,$query);
	if($run)
	{
		echo(1);		
	}
	else
	{
		echo(0);
	}
}
else if($_GET['name']==12)
{
	$query="update info set score='".$_GET['score']."',NR3='".$_GET['cScore']."',AccNR3='".$_GET['Acc']."',TAccNR3='".$_GET['YAcc']."',DNR3='".$_GET['DH'].":".$_GET['DM'].":".$_GET['DS']."' where id='".$_GET['id']."'";
	$run=mysqli_query($db,$query);
	if($run)
	{
		echo(1);		
	}
	else
	{
		echo(0);
	}
}
else if($_GET['name']==13)
{
	$query="update info set score='".$_GET['score']."',O4='".$_GET['O']."',AccO4='".$_GET['Acc']."',TAccO4='".$_GET['YAcc']."',DO4='".$_GET['DH'].":".$_GET['DM'].":".$_GET['DS']."' where id='".$_GET['id']."'";
	$run=mysqli_query($db,$query);
	if($run)
	{
		echo(1);		
	}
	else
	{
		echo(0);
	}
}
else if($_GET['name']==14)
{
	$query="update info set score='".$_GET['score']."',R3='".$_GET['cScore']."',AccR3='".$_GET['Acc']."',TAccR3='".$_GET['YAcc']."',DR3='".$_GET['DH'].":".$_GET['DM'].":".$_GET['DS']."' where id='".$_GET['id']."'";
	$run=mysqli_query($db,$query);
	if($run)
	{
		echo(1);		
	}
	else
	{
		echo(0);
	}
}
else if($_GET['name']==15)
{
	$query="update info set score='".$_GET['score']."',O5='".$_GET['O']."',AccO5='".$_GET['Acc']."',TAccO5='".$_GET['YAcc']."',DO5='".$_GET['DH'].":".$_GET['DM'].":".$_GET['DS']."' where id='".$_GET['id']."'";
	$run=mysqli_query($db,$query);
	if($run)
	{
		echo(1);		
	}
	else
	{
		echo(0);
	}
}
else if($_GET['name']==16)
{
	$query="update info set score='".$_GET['score']."',NR4='".$_GET['cScore']."',AccNR4='".$_GET['Acc']."',TAccNR4='".$_GET['YAcc']."',DNR4='".$_GET['DH'].":".$_GET['DM'].":".$_GET['DS']."' where id='".$_GET['id']."'";
	$run=mysqli_query($db,$query);
	if($run)
	{
		echo(1);		
	}
	else
	{
		echo(0);
	}
}
else if($_GET['name']==17)
{
	$query="update info set score='".$_GET['score']."',O6='".$_GET['O']."',AccO6='".$_GET['Acc']."',TAccO6='".$_GET['YAcc']."',DO6='".$_GET['DH'].":".$_GET['DM'].":".$_GET['DS']."' where id='".$_GET['id']."'";
	$run=mysqli_query($db,$query);
	if($run)
	{
		echo(1);		
	}
	else
	{
		echo(0);
	}
}
else if($_GET['name']==18)
{
	$query="update info set score='".$_GET['score']."',R4='".$_GET['cScore']."',AccR4='".$_GET['Acc']."',TAccR4='".$_GET['YAcc']."',DR4='".$_GET['DH'].":".$_GET['DM'].":".$_GET['DS']."' where id='".$_GET['id']."'";
	$run=mysqli_query($db,$query);
	if($run)
	{
		echo(1);		
	}
	else
	{
		echo(0);
	}
}
else if($_GET['name']==19)
{
	$query="update info set score='".$_GET['score']."',O7='".$_GET['O']."',AccO7='".$_GET['Acc']."',TAccO7='".$_GET['YAcc']."',DO7='".$_GET['DH'].":".$_GET['DM'].":".$_GET['DS']."' where id='".$_GET['id']."'";
	$run=mysqli_query($db,$query);
	if($run)
	{
		echo(1);		
	}
	else
	{
		echo(0);
	}
}
else if($_GET['name']==20)
{
	$query="update info set score='".$_GET['score']."',NR5='".$_GET['cScore']."',AccNR5='".$_GET['Acc']."',TAccNR5='".$_GET['YAcc']."',DNR5='".$_GET['DH'].":".$_GET['DM'].":".$_GET['DS']."' where id='".$_GET['id']."'";
	$run=mysqli_query($db,$query);
	if($run)
	{
		echo(1);		
	}
	else
	{
		echo(0);
	}
}
else if($_GET['name']==21)
{
	$query="update info set score='".$_GET['score']."',O8='".$_GET['O']."',AccO8='".$_GET['Acc']."',TAccO8='".$_GET['YAcc']."',DO8='".$_GET['DH'].":".$_GET['DM'].":".$_GET['DS']."' where id='".$_GET['id']."'";
	$run=mysqli_query($db,$query);
	if($run)
	{
		echo(1);		
	}
	else
	{
		echo(0);
	}
}
else if($_GET['name']==22)
{
	$query="update info set score='".$_GET['score']."',R5='".$_GET['cScore']."',AccR5='".$_GET['Acc']."',TAccR5='".$_GET['YAcc']."',DR5='".$_GET['DH'].":".$_GET['DM'].":".$_GET['DS']."' where id='".$_GET['id']."'";
	$run=mysqli_query($db,$query);
	if($run)
	{
		echo(1);		
	}
	else
	{
		echo(0);
	}
}
else if($_GET['name']==23)
{
	$query="update info set score='".$_GET['score']."',O9='".$_GET['O']."',AccO9='".$_GET['Acc']."',TAccO9='".$_GET['YAcc']."',DO9='".$_GET['DH'].":".$_GET['DM'].":".$_GET['DS']."' where id='".$_GET['id']."'";
	$run=mysqli_query($db,$query);
	if($run)
	{
		echo(1);		
	}
	else
	{
		echo(0);
	}
}
else
{
	echo(0);		
}
?>
