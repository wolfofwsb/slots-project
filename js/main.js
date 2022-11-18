

const myCryptoArray = [
    '₿',
    '🚀 ',
    '🦊',
  ]
  
  
  function getRandom() {
    const random = Math.floor(Math.random() * 3);
    return myCryptoArray[random];
  };
  
  
  
  let slot1 = document.querySelector('#crypto1')
  let slot2 = document.querySelector('#crypto2')
  let slot3 = document.querySelector('#crypto3')
  let resultMessage = document.querySelector('#resultMessage')
  let button = document.querySelector('button');
  
  button.addEventListener('click', play);
  
  function play() {
    slot1.innerText = getRandom()
    slot2.innerText = getRandom()
    slot3.innerText = getRandom()
    if ((slot1.innerText === slot2.innerText) && (slot1.innerText === slot3.innerText)) {
      resultMessage.innerText = 'You win!'
    } else {
      resultMessage.innerText = 'You lose'
    }
  }
  
  
  function init() {
    slot1.innerText = ""
    slot2.innerText = ""
    slot3.innerText = ""
    resultMessage.innerText = ""
    render();
  }