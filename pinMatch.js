var genaratePin = document.getElementById("genaratePin").addEventListener("click",function(){


    var input = document.getElementById("inputPgenarator").value= getPin();

 });

function getPin(){

var random = (Math.random()*10000+'');
var pin= (random + '').split('.')[0];
if(pin.length === 4){

    return pin;
}
else{
    console.log(pin);
    return getPin();
}

}

var digitP = document.getElementById("digit");
digitP.addEventListener("click",function(event){
  var pind= event.target.innerText;

  if(isNaN(pind)){
    console.log("PressWrong Number");
  }
  else{
    var typeI = document.getElementById("btngroup");
    typeI.value= typeI.value +pind;
  }

})
function checkPin(){
    var input = document.getElementById("inputPgenarator").value;
    var typeI = document.getElementById("btngroup").value;
    console.log(typeI);
    console.log(input);
    if(input === typeI){
console.log("✅ Pin Matched... Secret door is opening for you");
  document.getElementById("out").style.display = 'block';
    }
    
    else{
 console.log("❌ Pin Didn't Match, Please try again");
 document.getElementById("in").style.display = 'block';
    }

}



