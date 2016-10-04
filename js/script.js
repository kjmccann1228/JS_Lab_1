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
