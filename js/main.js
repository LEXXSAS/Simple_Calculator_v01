var op;
var array = [];

function func() {
    
    var result;
    
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);

    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    
    var res = result;
    

    
    if (res === result && !res.isNaN) {
        document.getElementById("result").innerHTML =  res;
        return array.push(res);
    }
    else {
        alert("Введите число");
    }
    

    
    
    
//    if (func.isRun) {
//        return false;
//    }
//    document.getElementById("result_two").innerHTML =  res;
//    func.isRun = true;
    
}


let enter = document.getElementById("enter");
enter.addEventListener('click', func);
enter.addEventListener('click', arrayConsole);

function arrayConsole() {
//    console.log(array);
    document.getElementById("result_two").innerHTML =  array.join('; ');
}
