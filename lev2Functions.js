


/*
function variable_one() {
	{
		document.getElementById("myInput").value = test;
	}
}

function variable_two() {
	if (two == 2)

}

function variable_three(){
	if (three == 3)
}

function variable_four(){
	if (four == 4)
}
*/


function stepOne()
{
	window.alert("Hello! Let's Begin!")
	window.alert("The first paragraph is wrong. Fix the sentence!")
}

function stepTwo()
{
	var paragraph = document.getElementById('PartOne').innerHTML;
	console.log(document.getElementById('PartOne'));
	console.log(paragraph);
	if (paragraph === "Our goal is to make sure Computer Science reigns supreme at UCLA.")
	{
		window.alert("Your first number is 1.");
		window.alert("Change the UCLA Data Lab Header to Bold! So it looks legit");
	}
	else
	{
		window.alert( "Try Again. USC  <  UCLA.");
	}
}

function stepThree()
{
	var header = document.getElementById("CSHeader");
	var headerStyle = getComputedStyle(header);
	console.log(header);
	console.log(headerStyle.fontWeight);
	if (headerStyle.fontWeight >= 700)
	{
		window.alert("Correct! Your second number is 9.")
		window.alert("There is a list below. But do the hours seem right?")
	}
	else
	{
		window.alert("Is it bold?")
	}
}

function stepFour()
{
	var listItem = document.getElementById('ListTwo').innerHTML;
	if (listItem === "Closing Hour: 8pm")
	{
		window.alert("Correct! Your third number is 6.");
		window.alert("We want to change the below haeder to a bigger font! Increase the font by at least double");
	}
	else
	{
		window.alert("Are you sure that is correct?");
	}



}

function stepFive()
{
	var header2 = document.getElementById('header five');
	var header2Style = getComputedStyle(header2);
	if (header2Style.fontSize >= 20)
	{
	window.alert ("Correct! Your final number is 9.");
	window.alert("Input your data into the form!");
	}
	else
	{
	window.alert ("Is that big enough?");
	}
}

function submission(){
	var one = document.getElementById('firstchar').value;
	var two = document.getElementById('secondchar').value;
	var three = document.getElementById('thirdchar').value;
	var four = document.getElementById('fourthchar').value;
	if (one != 1 || two != 9 || three != 6 || four != 9)
	{
		window.alert("Wrong Input. Please Try Again!")
	}
	else
	{
		window.alert("You have succeeded")
		window.alert("Did you know that the internet was invented at UCLA in 1969?")

	}
}