//var btn = document.querySelector(".btn");
//
//btn.addEventListener("click", function() {
// this.classList.add("active");
//});

//var btn = document.querySelectorAll(".btn");
//btn.forEach(function(btnActive) {
//    btnActive.addEventListener("click", function(e) {
//        this.classList.add("active");
//    })
//})


// Получить контейнер с элементами 
var btnsAll = document.getElementById("operator_btns");
//Получить все элементы с class="btn" из контейнера operator_btns
var btns = btnsAll.getElementsByClassName("btn");
//Выполнить цикл по кнопкам и добавить класс к текущей/нажатой кнопке
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        
        if (current.length > 0) {
         current[0].className = current[0].className.replace(" active", "");
        }

        this.className += " active";
    });
}


//let btns = document.querySelectorAll(".btn");
//btns.forEach((e) => {
//    e.addEventListener("click", () => {
//            if (e.classList.contains("btn")) {
//            e.classList.add("disable");
//            e.classList.remove("active");
//    } 
//        
//})
//
//})


//let btns = document.querySelectorAll(".btn");
//function abra {
//   btns.forEach(e => {
//  e.classList.remove('active');
//}); 
//};






//
//var btnAll = document.querySelectorAll(".btn");
//
//function allDisable() {
//
//}
//allDisable();

//var btnsAll = document.querySelectorAll(".btn");
//btnsAll.addEventListener("click", function() {
//    
//})


//var btn = document.querySelector(".btn");
//
//btn.addEventListener("click", function() {
// event.target.classList.add("active");
//});



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

