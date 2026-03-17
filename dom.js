let result=document.getElementById("para");

result.innerHTML="my self";
console.log(result);
result.title="my name";
let f=document.getElementsByClassName("jk"); //gives array as output

console.log(f);
f[1].innerHTML="43"; //accesing by index
let results=document.getElementsByTagName("p");
results[2].style.color="green";

const test=document.querySelector("ul li:nth-child(3)");
test.style.backgroundColor="green";
test.style.padding="10px";
const ele=document.getElementById("myh1");
let text=Element.getAtrribute("class");
function  my_func(){
    document.getElementById("myexp").setAttribute('class')
}
