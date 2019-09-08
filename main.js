document.addEventListener("click", function(e) {
  let buttons = document.getElementsByTagName("button");
 
  // document
  //   .getElementsByTagName("button")
  //   .forEach(b => (b));

  for (b of buttons) {
    console.log(
      (b.style = `{  padding: 0;
      border: none;
      font: inherit;
      color: inherit;
      background-color: transparent;}`)
    );
  }

  let id = e.target.parentNode.id;

  let score = Number(e.target.textContent);
  if (score.toString() != "NaN" && e.target.id.slice(-3) !== "sum") {
    let already = Number(document.getElementById(id + "sum").textContent);
    let sum = already + score;
    if (e.target.textContent == 0) {
      let r = confirm("Do you want to clear a history ? ");
      if (r == true) {
        sum = 0;
        document.getElementById(id + "history").innerHTML = "";
      }
    }
    e.target.style.border = "2px solid red";
 
    document.getElementById(id + "sum").innerHTML = sum;

    let text = document.createTextNode(score);
    let divNode = document.createElement("div");
    divNode.appendChild(text);

    document.getElementById(id + "history").appendChild(divNode);
  }
});
// lom
let addplayer = e => {
  let name = e.target.name.value;
  let divNode = document.createElement("div");
  let h1Node = document.createElement("h3");
  let text = document.createTextNode(name);

  let sum = document.createElement("h3");
  let history = document.createElement("div");
  let textS = document.createTextNode(0);

  for (let i = 0; i <= 5; i++) {
    let btnNodeP = document.createElement("button");
    let btnNodeM = document.createElement("button");
    let br = document.createElement("br");
    let textM = document.createTextNode(10 * -i);
    let textP = document.createTextNode("+" + 10 * i);

    btnNodeP.appendChild(textP);
    btnNodeM.appendChild(textM);

    divNode.appendChild(btnNodeM);
    if (i !== 0) {
      divNode.appendChild(btnNodeP);
    }
    divNode.appendChild(br);
  }
  divNode.appendChild(sum);
  divNode.setAttribute("id", name);

  sum.appendChild(textS);
  history.appendChild(textS);
  h1Node.appendChild(text);
  divNode.appendChild(h1Node);

  sum.setAttribute("id", name + "sum");
  history.setAttribute("id", name + "history");
  history.setAttribute("class", "history");


  divNode.appendChild(history);
  document.getElementsByClassName("players")[0].appendChild(divNode);
  e.target.name.value = "";
};
