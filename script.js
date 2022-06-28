
function getBalance(){
    let balance = 50000.10;
    document.getElementById("balance").innerHTML = balance ;
}

function getOrder(){
    let order = 1;
    document.getElementById("order").innerHTML = order ;

}

function getIncentive(){
    let incentive = 20000.50;
    document.getElementById("incentive").innerHTML = incentive ;

}
function getDelivery(){
    let delivery = 1.00;
    document.getElementById("delivery").innerHTML = delivery ;

}

window.onload=function(){
    getBalance();
    getOrder();
    getIncentive();
    getDelivery();
 }


 function highlight1(){
    document.getElementById('b1').style.background = 'rgb(26, 110, 110)';
    document.getElementById('b2').style.background = 'white';
    document.getElementById('b3').style.background = 'white';
    document.getElementById('b4').style.background = 'white';

    document.getElementById('button1').style.background = 'rgb(26, 110, 110)';
    document.getElementById('button2').style.background = 'rgb(97, 199, 199)';
    document.getElementById('button3').style.background = 'rgb(97, 199, 199)';
    document.getElementById('button4').style.background = 'rgb(97, 199, 199)';
 }


 function highlight2(){
    document.getElementById('b1').style.background = 'white';
    document.getElementById('b2').style.background = 'rgb(26, 110, 110)';
    document.getElementById('b3').style.background = 'white';
    document.getElementById('b4').style.background = 'white';


    document.getElementById('button1').style.background = 'rgb(97, 199, 199)';
    document.getElementById('button2').style.background = 'rgb(26, 110, 110)';
    document.getElementById('button3').style.background = 'rgb(97, 199, 199)';
    document.getElementById('button4').style.background = 'rgb(97, 199, 199)';
 
 }
 function highlight3(){
    document.getElementById('b1').style.background = 'white';
    document.getElementById('b2').style.background = 'white';
    document.getElementById('b3').style.background = 'rgb(26, 110, 110)';
    document.getElementById('b4').style.background = 'white';

    document.getElementById('button1').style.background = 'rgb(97, 199, 199)';
    document.getElementById('button2').style.background = 'rgb(97, 199, 199)';
    document.getElementById('button3').style.background = 'rgb(26, 110, 110)';
    document.getElementById('button4').style.background = 'rgb(97, 199, 199)';
 
 }
 function highlight4(){
    document.getElementById('b1').style.background = 'white';
    document.getElementById('b2').style.background = 'white';
    document.getElementById('b3').style.background = 'white';
    document.getElementById('b4').style.background = 'rgb(26, 110, 110)';


    document.getElementById('button1').style.background = 'rgb(97, 199, 199)';
    document.getElementById('button2').style.background = 'rgb(97, 199, 199)';
    document.getElementById('button3').style.background = 'rgb(97, 199, 199)';
    document.getElementById('button4').style.background = 'rgb(26, 110, 110)';
 
 }