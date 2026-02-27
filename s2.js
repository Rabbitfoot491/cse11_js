var a=4;
var b=34;
document.write("a+b=");
result=a+b;
document.write(result);
var count;
document.write("starting loop "+ "<br />")
for(count=0;count <10;count++){
    document.write("current count:"+count);
    document.write("<br/>");

    
}
document.write("loop stopped");
const person={
    fanme:"ajay",
    lname:"singh",
    age:25


};
for(let x in person){
    console.log("person details:"+x+""+person[x])
}
var count=0;
while(count<10){
    document.write("current count: "+count+"<br/>")
    count++;
}

