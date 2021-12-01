const string = `* {
    box-sizing: border-box;
  }
  *body::before,
  ::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    background-image: url(./image/天空.jpg);
  }
  
  .head {
    border: 2px solid black;
    width: 200px;
    height: 200px;
    position: relative;
    top: 87px;
    left: 50%;
    margin-left: -100px;
    border-radius: 50%;
    background: rgb(53, 161, 201);
    z-index: 3;
  }
  .face {
    border: 2px solid black;
    width: 170px;
    height: 170px;
    position: absolute;
    top: 103px;
    left: 50%;
    margin-left: -85px;
    border-radius: 50%;
    background: white;
    z-index: 3;
  }
  .eye {
    border: 1px solid black;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 105px;
    left: 50%;
    margin-left: -25px;
    border-radius: 50%;
    background: white;
    z-index: 3;
  }
  .eye.left {
    transform: translateX(-25px);
  }
  .eye.right {
    transform: translateX(25px);
  }
  .eye::before {
    content: "";
    display: block;
    width: 14px;
    height: 22px;
    position: absolute;
    background: black;
    z-index: 4;
    border-radius: 10px/15px;
  }
  .eye.left::before {
    margin-top: 15px;
    margin-left: 28px;
  }
  .eye.right::before {
    margin-top: 15px;
    margin-left: 5px;
  }
  .eye .small {
    width: 4px;
    height: 6px;
    position: absolute;
    top: 23px;
    background: white;
    border-radius: 10px/15px;
    z-index: 5;
  }
  .eye .small.left {
    left: 50%;
    margin-left: 10px;
  }
  .eye .small.right {
    right: 50%;
    margin-right: 10px;
  }
  .noes {
    border: 1px solid black;
    width: 34px;
    height: 34px;
    position: absolute;
    top: 148px;
    left: 50%;
    margin-left: -17px;
    border-radius: 50%;
    background: rgb(177, 23, 53);
    z-index: 5;
  }
  .noes::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 6px;
    margin-left: 7px;
    border-radius: 50%;
    background: white;
    z-index: 6;
  }
  .beard {
    z-index: 5;
  }
  .beard.left1 {
    border: 0.5px solid black;
    width: 60px;
    height: 1px;
    background: black;
    position: absolute;
    top: 175px;
    left: 50%;
    margin-left: -80px;
  }
  .beard.right1 {
    border: 0.5px solid black;
    width: 60px;
    height: 1px;
    background: black;
    position: absolute;
    top: 175px;
    left: 50%;
    margin-left: 20px;
  }
  .beard.left2 {
    border: 0.5px solid black;
    width: 65px;
    height: 2px;
    background: black;
    position: absolute;
    top: 160px;
    left: 50%;
    margin-left: -88px;
    transform: rotate(12deg);
  }
  
  .beard.right2 {
    border: 0.5px solid black;
    width: 65px;
    height: 2px;
    background: black;
    position: absolute;
    top: 160px;
    left: 50%;
    margin-left: 24px;
    transform: rotate(-12deg);
  }
  .beard.left3 {
    border: 0.5px solid black;
    width: 65px;
    height: 2px;
    background: black;
    position: absolute;
    top: 190px;
    left: 50%;
    margin-left: -88px;
    transform: rotate(-18deg);
  }
  
  .beard.right3 {
    border: 0.5px solid black;
    width: 65px;
    height: 2px;
    background: black;
    position: absolute;
    top: 190px;
    left: 50%;
    margin-left: 25px;
    transform: rotate(18deg);
  }
  .beard.down {
    border: 0.5px solid black;
    width: 2px;
    height: 17px;
    background: black;
    position: absolute;
    top: 182px;
    left: 50%;
  }
  .mouth {
    border: 65px solid red;
    width: 0px;
    height: 0px;
    position: absolute;
    top: 134px;
    left: 50%;
    margin-left: -66px;
    border-radius: 50%;
    border-color: transparent transparent rgb(177, 22, 53) rgb(177, 22, 53);
    transform: rotate(-45deg);
    z-index: 5;
  }
  .yuan {
    width: 130px;
    height: 130px;
    position: absolute;
    top: 134px;
    left: 50%;
    margin-left: -66px;
    border-radius: 50%;
    overflow: hidden;
  }
  .yuan .mouth1 {
    width: 50px;
    height: 50px;
    position: absolute;
    border-radius: 50%;
    top: 90px;
    left: 50%;
    margin-left: -2px;
    background: rgb(202, 37, 51);
  
    z-index: 10;
  }
  .yuan .mouth2 {
    width: 50px;
    height: 50px;
    position: absolute;
    border-radius: 50%;
    top: 90px;
    left: 50%;
    margin-left: -45px;
    background: rgb(202, 37, 51);
    z-index: 10;
  }
  .rope {
    width: 130px;
    height: 100px;
    position: absolute;
    top: 198px;
    left: 50%;
    margin-left: -65px;
    border-radius: 50%;
    background: rgb(161, 23, 46);
    z-index: 2;
  }
  .bell {
    border: 2px solid black;
    width: 34px;
    height: 34px;
    position: absolute;
    top: 287px;
    left: 50%;
    margin-left: -17px;
    border-radius: 50%;
    background: rgb(241, 150, 41);
    z-index: 2;
  }
  .bell::before {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    position: absolute;
    top: 13px;
    left: 11px;
    border-radius: 50%;
    background: black;
    z-index: 2;
  }
  .bell .line {
    border: 1px solid black;
    width: 16px;
    height: 3px;
    position: absolute;
    top: 22px;
    left: 50%;
    margin-left: -8px;
    background: black;
    z-index: 2;
  }
  .body {
    border: 2px solid black;
    width: 140px;
    height: 140px;
    position: absolute;
    top: 220px;
    left: 50%;
    margin-left: -70px;
    border-radius: 50%;
    background: rgb(53, 161, 201);
    z-index: 1;
  }
  .body .belly {
    width: 100px;
    height: 70px;
    position: absolute;
    top: 52px;
    left: 50%;
    margin-left: -50px;
    border-radius: 50%;
    background: white;
    z-index: 2;
  }
  .body .sack {
    border: 2px solid black;
    width: 60px;
    height: 30px;
    position: absolute;
    top: 80px;
    left: 50%;
    margin-left: -30px;
    border-radius: 0 0 100px 100px;
    background: white;
    z-index: 2;
  }
  .leg {
    border: 2px solid black;
    width: 62px;
    height: 130px;
    position: absolute;
    top: 255px;
    left: 50%;
    border-radius: 50%;
    background: white;
  }
  .leg.left {
    transform: rotate(10deg);
    margin-left: -48px;
  }
  .leg.right {
    transform: rotate(-10deg);
    margin-left: -12px;
  }
  .arm {
    border: 2px solid black;
    width: 50px;
    height: 80px;
    position: absolute;
    top: 220px;
    left: 50%;
    border-radius: 50%;
    background: rgb(53, 161, 201);
    z-index: 1;
  }
  .arm.left {
    transform: rotate(-50deg);
    margin-left: -90px;
  }
  .arm.right {
    transform: rotate(50deg);
    margin-left: 40px;
  }
  .handy {
    border: 2px solid black;
    width: 60px;
    height: 60px;
    position: absolute;
    top: 200px;
    left: 50%;
    border-radius: 50%;
    background: white;
    z-index: 1;
  }
  .handy.left {
    transform: rotate(-50deg);
    margin-left: -130px;
  }
  .handy.right {
    transform: rotate(50deg);
    margin-left: 70px;
  }
  .up {
    border: 1px solid black;
    width: 16px;
    height: 8px;
    position: absolute;
    top: 68px;
    left: 50%;
    margin-left: -8px;
    border-radius: 100px 100px 0 0;
    background: rgb(189, 141, 34);
  }
  .middle {
    border: 1px solid black;
    width: 100px;
    height: 4px;
    background: rgb(189, 141, 34);
    position: absolute;
    top: 76px;
    left: 50%;
    margin-left: -50px;
    z-index: 1;
  
    animation-name: rotar;
    animation-duration: 0.1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  .down {
    border: 1px solid black;
    width: 6px;
    height: 12px;
    background: rgb(189, 141, 34);
    position: absolute;
    top: 76px;
    left: 50%;
    margin-left: -3px;
  }
  @keyframes rotar {
    from {
      transform: rotate3D(0, 1, 0, 0deg);
    }
    to {
      transform: rotate3D(0, 1, 0, 360deg);
    }
  }
  `
// const demo = document.querySelector('#demo')
// const demo2 = document.querySelector('#demo2')

// let n = 1
// let time = 50
// let id


// const player = {
//     init : () => {
//         demo.innerText = string.substr(0,n)
//         demo2.innerHTML = string.substr(0,n)
//         player.play()
//         player.bindEvents()
//     },
//     bindEvents :  () => {
//         document.querySelector('#btnPause').onclick =  player.pause
//         document.querySelector('#btnPlay').onclick = player.play
//         document.querySelector('#btnSlow').onclick = player.slow
//         document.querySelector('#btnNormal').onclick = player.normal
//         document.querySelector('#btnFast').onclick = player.fast       

//     },
//      run : () => {
//         n += 1
//         if (n > string.length) {
//             window.clearInterval(id)
//             return
//         }
//         demo.innerText = string.substr(0,n)
//         demo2.innerHTML = string.substr(0,n)
//         demo.scrollTop = demo.scrollHeight
//     },
//     play : () => {
//          setInterval(player.run, time)
//     },
//     pause : () => {
//         window.clearInterval(id)
//     },
//      slow : () => {
//         player.pause()    
//         time = 150
//          player.play()
//     },
//      normal : () => {
//         player.pause()    
//         time = 50
//          player.play()
//     },
//      fast : () => {
//         player.pause()   
//         time = 0
//          player.play()
//     }
// }

// player.init()

const player = {
    id: undefined,
    time: 100,
    ui: {
      demo: document.querySelector('#demo'),
      demo2: document.querySelector('#demo2')
    },
    events: {
      '#btnPause': 'pause',
      '#btnPlay': 'play',
      '#btnSlow': 'slow',
      '#btnNormal': 'normal',
      '#btnFast': 'fast'
    },
    n: 1,
    init: () => {
      player.ui.demo.innerText = string.substr(0, player.n)
      player.ui.demo2.innerHTML = string.substr(0, player.n)
      player.bindEvents()
      player.play()
    },
    bindEvents: () => {
      for (let key in player.events) {
        if (player.events.hasOwnProperty(key)) {
          const value = player.events[key] // pause / play / slow
          document.querySelector(key).onclick = player[value]
        }
      }
  
    },
    run: () => {
      player.n += 1
      if (player.n > string.length) {
        window.clearInterval(player.id)
        return
      }
      player.ui.demo.innerText = string.substr(0, player.n)
      player.ui.demo2.innerHTML = string.substr(0, player.n)
      player.ui.demo.scrollTop = player.ui.demo.scrollHeight
    },
    play: () => {
      window.clearInterval(player.id)
      player.id = setInterval(player.run, player.time)
    },
    pause: () => {
      window.clearInterval(player.id)
    },
    slow: () => {
      player.pause()
      player.time = 300
      player.play()
    },
    normal: () => {
      player.pause()
      player.time = 100
      player.play()
    },
    fast: () => {
      player.pause()
      player.time = 0
      player.play()
    }
  }
  
  player.init()
  