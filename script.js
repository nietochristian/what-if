function myFunction(){
    var a = document.getElementById("123").value;
    if (a > 0){
    let number = "The Number is positive"; 
    document.getElementById("demo").innerHTML = number;
}
    else if (a < 0){
    let number = "The Number is not positive"; 
    document.getElementById("demo").innerHTML = number;
}
    else{
    let number = "The Number is invalid"; 
    document.getElementById("demo").innerHTML = number;
}
}