
/* setInterval(function(){
    if (document.getElementById("glow").style.display == "none") {
        document.getElementById("glow").style.display = "block";
        document.getElementById("glow").style.display = "inline";
    }
    else {
        document.getElementById("glow").style.display = "none";
    }
}, 500); */

let i = 0;//num of clicks except C (delete)
let num = '';
function store(id) {
    if (num.length == 0 || num.length > 0) {
        switch (id) {
            case "one":
                num += '1';
                i++;
                break;
            case "two":
                num += '2';
                i++;
                break;
            case "three":
                num += '3';
                i++;
                break;
            case "four":
                num += '4';
                i++;
                break;
            case "five":
                num += '5';
                i++;
                break;
            case "six":
                num += '6';
                i++;
                break;
            case "seven":
                num += '7';
                i++;
                break;
            case "eight":
                num += '8';
                i++;
                break;
            case "nine":
                num += '9';
                i++;
                break;
            case "dot":
                num += ".";
                i++;
                break;
            case "zero":
                num += '0';
                i++;
                break;
            case "add":
                num += ' + ';
                i++;
                break;
            case "sub":
                num += ' - ';
                i++;
                break;
            case "div":
                num += ' / ';
                i++;
                break;
            case "mul":
                num += ' * ';
                i++;
                break;
            case "delete":
                num = '';
                i = 0;
                break;
        }
    }
}

function Display(id) {
    store(id);
    let a = document.getElementById("screenNum").innerHTML = num;
    if (id == 'equ') {
        let c = document.getElementById("screenNum").innerHTML = a + '=';
        let b = eval(num);
        document.getElementById("screenNum").innerHTML = c + b;
    }
    if (id == 'delete') {
        document.getElementById("screenNum").innerHTML = ' 5x2=10';
    }
}


