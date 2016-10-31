<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
</head>

<body>
<?php
class Person
{
	function __construct($name, $sex)
	{
		$this->name=$name;
		$this->sex=$sex;
	}
	
	function showName()
	{
		echo $this->name;
	}
	
	function sex()
	{
		echo $this->sex;
	}
}

$p1=new Person('blue', '男');

$p1->showName();
?>
</body>
</html>