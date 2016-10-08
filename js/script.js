" use strict ";

var display = document.getElementById("display");

function function1()
{
  var str = ""
  for(var i = 1 ; i<11 ; i++)
  {
    str = str + i + "<br />";
  }
  display.innerHTML=str;
}

function function2()
{
  var str = "";
  for(var i = 1 ; i <= 20 ; i++)
  {
    if(i % 2 === 0)
    {
      str = str + i + "<br />";
    }
  }
  display.innerHTML=str;
}

function function3()
{
  var str = ""
  var counter = 1;
  while (Math.pow(counter, 2) <= 100)
  {
    str += Math.pow(counter, 2) + "<br />";
    counter++;
  }
  display.innerHTML=str;
}

function function4()
{
  var str = ""
  for(var i=0 ; i<4 ; i++)
  {
    str += Math.ceil(Math.random() * 100) + "<br />";
  }
  display.innerHTML=str;
}

function function5()
{
  var upperLimit = prompt("Pick a positive integer.");
  var str = "";
  for(var i = 0 ; i<=upperLimit ; i++)
  {
    //str += "SWAG ";
    if(i%2 === 0)
    {
      str += i + "<br />";
    }
  }
  display.innerHTML = str;
}

function function6()
{
  var input = prompt("Pick number");
  var str = "";
  for(var i = 1 ; i<=input ; i++)
  {
    str += Math.pow(2, i) + "<br />";
  }
  display.innerHTML = str;
}

function function7()
{
  var there = false;
  while(!there)
  {
    var response=prompt("Are we there yet");
    switch(response.toUpperCase())
    {
      case "YES":
      there = true;
      break;

      default:
      break;
    }
  }
  display.innerHTML="Good!";
}

function function8()
{
  var outerString = "";
  for(var i=1 ; i<6 ; i++)
  {
    var innerString = "";
    for(var j=1 ; j<=i ; j++)
    {
      innerString += "*";
    }
    outerString += innerString + "<br />";
  }
  display.innerHTML=outerString;
}

function function9()
{
  var str = ""
  for(var i=1 ; i<= 4 ; i++)
  {
    var line = "|";
    for(j = 1 ; j<=4 ; j++)
    {
      line += i*j + "|";
    }
    str += line + "<br />";
  }
  display.innerHTML = str;
}

function function10()
{
  var dimension = prompt("Enter your table square dimension");
  var str = ""
  for(var i=1 ; i<= dimension ; i++)
  {
    var line = "|";
    for(j = 1 ; j<= dimension ; j++)
    {
      line += i*j + "|";
    }
    str += line + "<br />";
  }
  display.innerHTML = str;
}
