import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ['Mi gato', 'Mi perro', 'Mi orangutan', 'Mi calamardo'];
  let action = ['comió', 'absorbió', 'conquistó', 'destrozó'];
  let what = ['mi código', 'mi intento de código', 'mi what'];
  let when = ['antes de tener un curro', 'cuando estaba de rave', 'durante la pandémia', 'mientras estaba echando un valo'];

  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;

  console.log(excuse);
  document.getElementById("excuse").innerHTML = excuse;
};
