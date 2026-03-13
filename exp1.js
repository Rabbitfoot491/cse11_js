
function calculate() {
    let sub = parseInt(prompt("enter number of subjects: "));
    var i;
    var totalmarks = 0;
    let grade;
    for (i = 1; i <= sub; i++) {
        let marks = parseInt(prompt("enter marks in subject " + i + " : "));
        totalmarks += marks;


    }
    average_marks=Math.round(totalmarks/sub);
    if(average_marks>70)
        grade="Brilliant";
    else if(average_marks<=70 && average_marks>50)
        grade="Good";
    else if(average_marks<=50 && average_marks>30)
        grade="Pass";
    else if(average_marks<30)
        grade="Fail";
    document.getElementById("res").innerHTML = "Total marks: " +totalmarks+ "<br>"+" Average marks: "+average_marks +"<br>"+"Grade: "+grade;
}


