//No need to do any work here.  If package.json and the proper modules are installed, this will

function displayTime() {
  let clock = document.querySelector('#clock')
  clock.innerText = moment().format('MMMM Do YYYY, h:mm:ss a')
  // setInterval(function() {
  //     clock.style.color = '#'+Math.floor(Math.random()*16777215).toString(16);
  //     clock.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  // }, 3000)
  setInterval(function() {
      clock.innerText = moment().format('MMMM Do YYYY, h:mm:ss a')
  }, 1000)


}

window.onload = displayTime()
