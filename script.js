
function balance(){
    let balance = 50000;
    document.getElementById("balance").innerHTML = balance ;
}

function order(){
    let order = 1;
    document.getElementById("order").innerHTML = order ;

}

function incentive(){
    let incentive = 20000;
    document.getElementById("incentive").innerHTML = incentive ;

}
function delivery(){
    let delivery = 1.00;
    document.getElementById("delivery").innerHTML = delivery ;

}

window.onload=function(){
    balance();
    order();
    incentive();
    delivery();
 }


 function highlight1(){
    document.getElementById('b1').style.background = 'rgb(26, 110, 110)';
    document.getElementById('b2').style.background = 'white';
    document.getElementById('b3').style.background = 'white';
    document.getElementById('b4').style.background = 'white';
 
 }
 function highlight2(){
    document.getElementById('b1').style.background = 'white';
    document.getElementById('b2').style.background = 'rgb(26, 110, 110)';
    document.getElementById('b3').style.background = 'white';
    document.getElementById('b4').style.background = 'white';
 
 }
 function highlight3(){
    document.getElementById('b1').style.background = 'white';
    document.getElementById('b2').style.background = 'white';
    document.getElementById('b3').style.background = 'rgb(26, 110, 110)';
    document.getElementById('b4').style.background = 'white';
 
 }
 function highlight4(){
    document.getElementById('b1').style.background = 'white';
    document.getElementById('b2').style.background = 'white';
    document.getElementById('b3').style.background = 'white';
    document.getElementById('b4').style.background = 'rgb(26, 110, 110)';
 
 }