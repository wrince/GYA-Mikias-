// Background fade

let bgLayers=[
document.getElementById('bg1'),
document.getElementById('bg2'),
document.getElementById('bg3')
];

let current=0;

function fadeBackground(){
bgLayers.forEach((bg,i)=>{
bg.style.opacity=(i===current?1:0);
});
current=(current+1)%bgLayers.length;
}

fadeBackground();
setInterval(fadeBackground,5000);

// Toggle features

function toggleFeature(id){
let f=document.getElementById(id);
f.style.display=(f.style.display==="block")?"none":"block";
}

// Calculator

function press(val){
let screen=document.getElementById("calcScreen");

if(val=="!"){
screen.value=factorial(parseFloat(screen.value));
}
else if(val=="1/"){
screen.value=1/parseFloat(screen.value);
}
else{
screen.value+=val;
}
}

function factorial(n){
if(n<0) return "Error";
if(n===0||n===1) return 1;

let res=1;
for(let i=2;i<=n;i++){
res*=i;
}
return res;
}

function calculate(){
try{
let screen=document.getElementById("calcScreen");
screen.value=eval(screen.value);
}
catch{
document.getElementById("calcScreen").value="Error";
}
}

function clearCalc(){
document.getElementById("calcScreen").value="";
}

// Notes

function saveNotes(){
let note=document.getElementById("notes").value;

if(note.trim()==="") return;

let saved=document.getElementById("savedNotes");

let div=document.createElement("div");
div.textContent=note;

saved.appendChild(div);

document.getElementById("notes").value="";
}

// Motivation

let quotes=[
"Success comes from discipline",
"Study now shine later",
"Small progress every day",
"Focus on your goals",
"Hard work beats talent",
"Believe in yourself",
"Never give up",
"Stay positive",
"Work smarter not harder",
"Dream big"
];

function newQuote(){
document.getElementById("quote").innerText=
quotes[Math.floor(Math.random()*quotes.length)];
}

// Pomodoro

let timerInterval;
let totalSeconds;
let isStudy=true;

function startCustomTimer(){

clearInterval(timerInterval);

let studyM=parseInt(document.getElementById("studyTime").value);
let breakM=parseInt(document.getElementById("breakTime").value);

totalSeconds=(isStudy?studyM:breakM)*60;

document.getElementById("statusDisplay").innerText=
isStudy?"Study Time":"Break Time";

timerInterval=setInterval(()=>{

totalSeconds--;

let m=Math.floor(totalSeconds/60);
let s=totalSeconds%60;

document.getElementById("timerDisplay").innerText=
m+":"+(s<10?"0":"")+s;

if(totalSeconds<=0){

clearInterval(timerInterval);

alert(isStudy?
"Study over! Break time."
:
"Break over! Back to study.");

isStudy=!isStudy;

startCustomTimer();

}

},1000);

}

function pauseTimer(){
clearInterval(timerInterval);
}

function resetCustomTimer(){

clearInterval(timerInterval);

let studyM=parseInt(document.getElementById("studyTime").value);

totalSeconds=studyM*60;

isStudy=true;

document.getElementById("timerDisplay").innerText=
studyM+":00";

document.getElementById("statusDisplay").innerText="Ready";
}

// Converter

function convert(val){
return parseFloat(document.getElementById("convertInput").value);
}

function mToCm(){document.getElementById("convertResult").innerText=convert()*100}
function cmToM(){document.getElementById("convertResult").innerText=convert()/100}
function kmToMiles(){document.getElementById("convertResult").innerText=convert()*0.621371}
function milesToKm(){document.getElementById("convertResult").innerText=convert()/0.621371}

function kgToG(){document.getElementById("convertResult").innerText=convert()*1000}
function gToKg(){document.getElementById("convertResult").innerText=convert()/1000}
function kgToLb(){document.getElementById("convertResult").innerText=convert()*2.20462}
function lbToKg(){document.getElementById("convertResult").innerText=convert()/2.20462}

function cToF(){document.getElementById("convertResult").innerText=(convert()*9/5)+32}
function fToC(){document.getElementById("convertResult").innerText=(convert()-32)*5/9}

// Tic Tac Toe

let currentPlayer="X";
let xWins=0;
let oWins=0;

function play(cell){

if(cell.innerText!=="") return;

cell.innerText=currentPlayer;

if(checkWinner()){

if(currentPlayer==="X") xWins++;
else oWins++;

document.getElementById("scoreboard").innerText=
"X Wins: "+xWins+" | O Wins: "+oWins;

}
else{

currentPlayer=(currentPlayer==="X")?"O":"X";

}

}

function checkWinner(){

let cells=document.querySelectorAll("#board button");

let combos=[
[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6]
];

for(let c of combos){

let a=cells[c[0]].innerText;
let b=cells[c[1]].innerText;
let d=cells[c[2]].innerText;

if(a && a===b && b===d){

document.getElementById("winner").innerText=a+" Wins!";

return true;

}

}

return false;

}

function resetGame(){

document.querySelectorAll("#board button").forEach(c=>c.innerText="");

document.getElementById("winner").innerText="";

currentPlayer="X";

}

function resetScores(){

xWins=0;
oWins=0;

document.getElementById("scoreboard").innerText=
"X Wins: 0 | O Wins: 0";

}
