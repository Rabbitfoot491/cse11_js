var age=20;
if(age>=18){
    document.write("adult");
}
else{
    document.write("minor");
}

var grade=prompt("enter your name: ");



switch(grade){
    case "A":
        document.write("good job");
        break;
    case "B":
        document.write("Passed");
        break;
    case  "C":
        document.write("Failed");
        break;
    default:
        document.write("unknown grade");        

}
