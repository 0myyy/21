var card=document.getElementById("cards")
var total=document.getElementById("total")
var messsage=document.getElementById("message")
var ctotal=document.getElementById("comptotal")
var pcard=[]
var sum=0//player card 
var sum1=0//computer card
function start(){
    var num1=6
    var num2=9
    sum=num1+num2
    card.innerHTML="CARDS: "
    pcard=[num1,num2]
    for(var i=0;i<pcard.length;i++){
        card.innerHTML += ` ${pcard[i]} `
    }
    total.innerHTML = `total : ${sum} `
    if(sum<21){
        messsage.innerHTML="Do You Want Another Card"
}
else if(sum==21){
    messsage.innerHTML="You Won The Game"
}
else {
    messsage.innerHTML="You Lost The Game"
}

}


function render(){

}

function winner(){
    while(summ1<17 || sim1<sum){
        var cnum=getrandom()
        sum1 +=cnum 
    }
    ctotal.innerHTML= `computer total: ${sum1}`
    if(sum>21 || (sum1<=21 && sum1>sum)){
        messsage.innerHTML="You lost the game"
    }
    else if(sum==sum1){
        messsage.innerHTML="It is a tie"
    }
    else{
        messsage.innerHTML="you won the game "
    }
    game=false
}