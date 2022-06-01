// EVENTS1
// function onClicAlert(){
//      alert("hello abay");
// }
// EVENTS2
// function getNameFunc(){
//     console.log("Abayneh Asaye");
// }
// EVENTS3
// function  changeColSpan() {
//     var mySpan = document.getElementById("myspan");
//     mySpan.style.color= "red";
// }
// EVENTS4
// function changeSizeFunc() {
//     var changeVar = document.getElementById("changeSize")
//     changeVar.style = "font-size:200px";
// }
// EVENTS5
// function changeTextFunc() {
//     var h2Change = document.getElementById("myh2")
//     h2Change.innerHTML = "the best";
// }
// EVENTS6

//     var getFromUser = prompt("Enter your name!");

// function myNameVar (){
//     var myVarName = document.getElementById("myName");
//     document.body.innerHTML = getFromUser;
// }

// EVENTS7
// function dayTime() {
    
//      var myDate =  new Date("12");
//      var theDate = new Date(prompt("Enter time in format H:M:S"));
//      if (theDate< myDate){
//         document.body.style.backgroundColor = "yellow";
//         massage.innerHTML = "good day";

//      }else{
//         document.body.style.backgroundColor = "blue";
//         massage.innerHTML = "good evening";
//     }
// }
//     dayTime() 

// EVENTS8
    // function typeUserFunc() {
    //     var ageFromUser = +prompt("Enter your age!")
    //     var myWelcome = document.getElementById("myWell");
    //     myWelcome.onmouseover = function(){
    //         this.style.color = "green";
    //     }
    //     if(ageFromUser>18){
    //         document.body.style.backgroundColor = "red";
    //     }else{
            
    //         document.body.style.backgroundColor = "yellow";

    //     }
    // }
    // typeUserFunc()

// EVENTS9

function lotterySystem () {
    for (var i = 0; i < 5 ; i++) {
        var myLotto = +prompt("Enter one-number from 0-56!");
        thisMyNumber.innerHTML += "  " +myLotto;
        thisMyNumber.style.color = "gray";
    }
    
    //    var lotoRandom = Math.random()*56;
    //    lotoRandom = Math.floor(lotoRandom);
}
function myLoottooFunc () {
    var lotoRandom = Math.floor(Math.random()*56)+1;
    thisMyLottoNum.innerHTML= lotoRandom;
    thisMyLottoNum.style.color = "gold";

}
