// Using Math.sign() function >>>>>>>>>


// function check() {
//     var value = document.getElementById("data").value;
//     var res = Math.sign(value);
//     document.getElementById("res").innerText = res;
// }


// Using user defined function >>>>>>



function check(){
    var value = document.getElementById("data").value;
    if (value > 0){
        res = `${value} is Positive Number`;
    }else if (value < 0){
        res = `${value} is Negative Number`;
    }else if (value == 0){
        res = `${value} is 0`;
    }else{
        res = `${value} is not a Number`;
    }

    var res = document.getElementById("res").innerText = res;
}