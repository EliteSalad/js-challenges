function handleCalculateGrade(event){

let grade = event.target.value;//on blur event find target (text box) and get the value component
let percentage;

grade.toUpperCase();

switch (grade){
    case "A":
    percentage = "90-100%";
    break;
    case "B":
    percentage = "75-90%";
    break;
    case "C":
    percentage = "50-75%";
    break;
    case "D":
    percentage = "25-50%";
    break;
    case "E":
    percentage = "0-25%";
    break;
    default:
        alert(" please enter valid grade (A-E)");

}
alert("The precentage was " + percentage);
}