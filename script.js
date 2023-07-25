const screen = document.getElementById("screen");

const openBrackets = document.getElementById("open-brackets");
const closeBrackets = document.getElementById("close-brackets");
const deleteOne = document.getElementById("delete-one");
const deleteAll = document.getElementById("delete-all");

const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const dividedBy = document.getElementById("divided-by");

const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const times = document.getElementById("times");

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const minus = document.getElementById("minus");

const zero = document.getElementById("zero");
const point = document.getElementById("point");
const isEqualTo = document.getElementById("is-equal-to");
const plus = document.getElementById("plus");

openBrackets.onclick = function(){screen.innerHTML = screen.textContent + "(";}
closeBrackets.onclick = function(){screen.innerHTML = screen.textContent + ")";}
deleteOne.onclick = function(){screen.innerHTML = screen.textContent.slice(0, -1);}
deleteAll.onclick = function(){screen.innerHTML = "";}

seven.onclick = function(){screen.innerHTML = screen.textContent + "7";}
eight.onclick = function(){screen.innerHTML = screen.textContent + "8";}
nine.onclick = function(){screen.innerHTML = screen.textContent + "9";}
dividedBy.onclick = function(){screen.innerHTML = screen.textContent + "/";}

four.onclick = function(){screen.innerHTML = screen.textContent + "4";}
five.onclick = function(){screen.innerHTML = screen.textContent + "5";}
six.onclick = function(){screen.innerHTML = screen.textContent + "6";}
times.onclick = function(){screen.innerHTML = screen.textContent + "*";}

one.onclick = function(){screen.innerHTML = screen.textContent + "1";}
two.onclick = function(){screen.innerHTML = screen.textContent + "2";}
three.onclick = function(){screen.innerHTML = screen.textContent + "3";}
minus.onclick = function(){screen.innerHTML = screen.textContent + "-";}

zero.onclick = function(){screen.innerHTML = screen.textContent + "0";}
point.onclick = function(){screen.innerHTML = screen.textContent + ".";}
plus.onclick = function(){screen.innerHTML = screen.textContent + "+";}

isEqualTo.onclick = function(){
    let result = screen.textContent;
    console.log(result);
    result = result.replace('(','*');
    result = result.replace(')','*1');
    console.log(result);
    screen.innerHTML = eval(result);
}