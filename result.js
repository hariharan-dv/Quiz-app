
const scoreEle= document.getElementById('score') 

scoreEle ? scoreEle.innerText= `Your Score is ${Number(sessionStorage.getItem("TotalScore")).toFixed(2)}%`: ""
 