function clearScreen() 
{
    document.getElementById("result").value = "";
}
function interchange()
{
    clearScreen()
    var p = document.getElementById("result").value;
    var q = document.getElementById("result1").value;
    document.getElementById("result").value = q;
    document.getElementById("result1").value = p;
}

function display(value)
{
    document.getElementById("result").value += value;
}

function calculateaud() 
{
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result1").value = 273.15 + q;
}

function calculateusd() 
{
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result1").value = (q * 9/5) + 32 ;
}

