document.addEventListener('click', function (e) {
  makeButtonBordersDefaultColor()
  addScore(e)
  removePlayer(e)
  clearHistory(e)
})

let addplayer = e => {
  let name = e.target.name.value
  let divNode = document.createElement('div')
  let h1Node = document.createElement('h3')
  let text = document.createTextNode(name)

  let sum = document.createElement('h3')
  let history = document.createElement('div')
  let textS = document.createTextNode(0)

  for (let i = 0; i <= 5; i++) {
    let btnNodeP = document.createElement('button')
    let btnNodeM = document.createElement('button')
    let br = document.createElement('br')
    let textM = document.createTextNode(10 * -i)
    let textP = document.createTextNode('+' + 10 * i)

    btnNodeP.appendChild(textP)
    btnNodeM.appendChild(textM)
    
    
    if (i === 0) {
      let washlisBtn = document.createElement('button')
      let washlisText = document.createTextNode('X')
      washlisBtn.setAttribute('class', 'remove')
      washlisBtn.appendChild(washlisText)
      divNode.appendChild(washlisBtn)
      divNode.appendChild(btnNodeM)
    } else {
      divNode.appendChild(btnNodeM)
      divNode.appendChild(btnNodeP)
    }



    divNode.appendChild(br)
  }

  divNode.appendChild(sum)
  divNode.setAttribute('id', name)

  sum.appendChild(textS)
  history.appendChild(textS)
  h1Node.appendChild(text)
  divNode.appendChild(h1Node)

  sum.setAttribute('id', name + 'sum')
  history.setAttribute('id', name + 'history')
  history.setAttribute('class', 'history')

  divNode.appendChild(history)
  document.getElementsByClassName('players')[0].appendChild(divNode)
  e.target.name.value = ''
}

function clearHistory(e) {
  let id = e.target.parentNode.id

  if (e.target.textContent == 0) {
    let r = confirm('Do you want to clear a history ? ')
    if (r == true) {
      sum = 0
      document.getElementById(id + 'history').innerHTML = ''
      document.getElementById(id + 'sum').innerHTML = sum
    }
  }
}

function addScore(e) {
  let id = e.target.parentNode.id

  let score = Number(e.target.textContent)
  if (score.toString() != 'NaN' && e.target.id.slice(-3) !== 'sum') {
    let already = Number(document.getElementById(id + 'sum').textContent)
    let sum = already + score

    e.target.style.borderColor = 'red'

    document.getElementById(id + 'sum').innerHTML = sum

    let text = document.createTextNode(score)
    let divNode = document.createElement('div')
    divNode.appendChild(text)

    document.getElementById(id + 'history').appendChild(divNode)
  }
}

function makeButtonBordersDefaultColor() {
  let buttons = document.getElementsByTagName('button')

  for (b of buttons) {
    b.style.borderColor = ''
  }
}

function removePlayer(e) {
  const content = e.target.textContent
  if (content === 'X') {
    const parent = e.target.parentNode
    parent.parentNode.removeChild(parent)
  }
}
