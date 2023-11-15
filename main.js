function opensubmenu1() {
  var x = document.getElementById("submenu1");
  var y = document.getElementById("caret1");

  var x2 = document.getElementById("submenu2");
  var y2 = document.getElementById("caret2");

  var x3 = document.getElementById("submenu3");
  var y3 = document.getElementById("caret3");

  var x4 = document.getElementById("submenu4");
  var y4 = document.getElementById("caret4");

  var x5 = document.getElementById("submenu5");
  var y5 = document.getElementById("caret5");

  if (x.style.height === "175px" && y.style.transform === "rotate(90deg)") {
    x.style.height = "0";
    y.style.transform = "rotate(0)";
  } else {
    x.style.height = "175px";
    y.style.transform = "rotate(90deg)";
    // Close other submenus if open
    x2.style.height = "0";
    y2.style.transform = "rotate(0)";

    x3.style.height = "0";
    y3.style.transform = "rotate(0)";

    x4.style.height = "0";
    y4.style.transform = "rotate(0)";

    x5.style.height = "0";
    y5.style.transform = "rotate(0)";
  }
}

function opensubmenu2() {
  var x = document.getElementById("submenu2");
  var y = document.getElementById("caret2");

  var x1 = document.getElementById("submenu1");
  var y1 = document.getElementById("caret1");

  var x3 = document.getElementById("submenu3");
  var y3 = document.getElementById("caret3");

  var x4 = document.getElementById("submenu4");
  var y4 = document.getElementById("caret4");

  var x5 = document.getElementById("submenu5");
  var y5 = document.getElementById("caret5");

  if (x.style.height === "175px" && y.style.transform === "rotate(90deg)") {
    x.style.height = "0";
    y.style.transform = "rotate(0)";
  } else {
    x.style.height = "175px";
    y.style.transform = "rotate(90deg)";
    // Close submenu1 if open
    x1.style.height = "0";
    y1.style.transform = "rotate(0)";

    x3.style.height = "0";
    y3.style.transform = "rotate(0)";

    x4.style.height = "0";
    y4.style.transform = "rotate(0)";

    x5.style.height = "0";
    y5.style.transform = "rotate(0)";
  }
}

function opensubmenu3() {
  var x = document.getElementById("submenu3");
  var y = document.getElementById("caret3");

  var x1 = document.getElementById("submenu1");
  var y1 = document.getElementById("caret1");

  var x2 = document.getElementById("submenu2");
  var y2 = document.getElementById("caret2");

  var x4 = document.getElementById("submenu4");
  var y4 = document.getElementById("caret4");

  var x5 = document.getElementById("submenu5");
  var y5 = document.getElementById("caret5");

  if (x.style.height === "210px" && y.style.transform === "rotate(90deg)") {
    x.style.height = "0";
    y.style.transform = "rotate(0)";
  } else {
    x.style.height = "210px";
    y.style.transform = "rotate(90deg)";

    // Close submenu1 if open
    x1.style.height = "0";
    y1.style.transform = "rotate(0)";

    x2.style.height = "0";
    y2.style.transform = "rotate(0)";

    x4.style.height = "0";
    y4.style.transform = "rotate(0)";

    x5.style.height = "0";
    y5.style.transform = "rotate(0)";
  }
}

function opensubmenu4() {
  var x = document.getElementById("submenu4");
  var y = document.getElementById("caret4");

  var x1 = document.getElementById("submenu1");
  var y1 = document.getElementById("caret1");

  var x2 = document.getElementById("submenu2");
  var y2 = document.getElementById("caret2");

  var x3 = document.getElementById("submenu3");
  var y3 = document.getElementById("caret3");

  var x5 = document.getElementById("submenu5");
  var y5 = document.getElementById("caret5");

  if (x.style.height === "105px",
    y.style.transform === "rotate(90deg)") {

    x.style.height = "0";
    y.style.transform = "rotate(0)";

  } else {
    x.style.height = "105px";
    y.style.transform = "rotate(90deg)";

    x1.style.height = "0";
    y1.style.transform = "rotate(0)";

    x2.style.height = "0";
    y2.style.transform = "rotate(0)";

    x3.style.height = "0";
    y3.style.transform = "rotate(0)";

    x5.style.height = "0";
    y5.style.transform = "rotate(0)";
  }
}

function opensubmenu5() {
  var x = document.getElementById("submenu5");
  var y = document.getElementById("caret5");

  var x1 = document.getElementById("submenu1");
  var y1 = document.getElementById("caret1");

  var x2 = document.getElementById("submenu2");
  var y2 = document.getElementById("caret2");

  var x3 = document.getElementById("submenu3");
  var y3 = document.getElementById("caret3");

  var x4 = document.getElementById("submenu4");
  var y4 = document.getElementById("caret4");

  if (x.style.height === "105px",
    y.style.transform === "rotate(90deg)") {

    x.style.height = "0";
    y.style.transform = "rotate(0)";

  } else {
    x.style.height = "105px";
    y.style.transform = "rotate(90deg)";

    x1.style.height = "0";
    y1.style.transform = "rotate(0)";

    x2.style.height = "0";
    y2.style.transform = "rotate(0)";

    x3.style.height = "0";
    y3.style.transform = "rotate(0)";

    x4.style.height = "0";
    y4.style.transform = "rotate(0)";
  }
}

const opennav = () => {
  document.getElementById('mysidenav').setAttribute("style", "left: 0;");
  document.getElementById('closeit').setAttribute("style", "width: 100%;");
}
const closenav = () => {
  document.getElementById('mysidenav').setAttribute("style", "left: -330px;");
  document.getElementById('closeit').setAttribute("style", "width:0;");
  document.getElementById('submenu1').setAttribute("style", "height: 0;");
  document.getElementById('submenu2').setAttribute("style", "height: 0;");
  document.getElementById('submenu3').setAttribute("style", "height: 0;");
  document.getElementById('submenu4').setAttribute("style", "height: 0;");
  document.getElementById('submenu5').setAttribute("style", "height: 0;");
  document.getElementById('caret1').setAttribute("style", "transform: rotate(0);");
  document.getElementById('caret2').setAttribute("style", "transform: rotate(0);");
  document.getElementById('caret3').setAttribute("style", "transform: rotate(0);");
  document.getElementById('caret4').setAttribute("style", "transform: rotate(0);");
  document.getElementById('caret5').setAttribute("style", "transform: rotate(0);");
}
oncontextmenu = function() {
  return false;
}

function mediaQuery() {
  const screenWidth = window.innerWidth;
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;
  const isLandscape = window.matchMedia("(orientation: landscape)").matches;

  const page1 = document.querySelector('.page01');
  const Right = document.querySelector('.rightside');
  const Left = document.querySelector('.leftside');
  const h3 = document.querySelector('.h3');
  const h1List = document.querySelectorAll('.h1');
  const p = document.querySelector('.p');
  const contain = document.querySelector('.contain');
  const buttonList = document.querySelectorAll('.button');
  const textbox = document.querySelector('.text');

  if (isPortrait) {
    if (screenWidth <= 576) {
      //page1
      page1.style.height = "100vh";
      Right.setAttribute('style', 'width: 100%; height: 45vh; position: absolute; top: 0; right: 0; padding: 80px 0; overflow: hidden;');
      Left.setAttribute('style', 'width: 100%; height: 55vh; position: absolute; top: 45vh; left: 0; display: flex; text-align: center; padding: 0 25px; overflow: hidden;   font-family: "Poppins", sans-serif;');
      h3.setAttribute('style', 'font-size: 7vw; color: #fff;')
      h1List.forEach(h1 => h1.setAttribute('style', 'color: transparent; -webkit-text-stroke: 1px #ff1493; font-size: 8vw; letter-spacing: 1px;'));
      contain.setAttribute('style', 'display: flex; align-items: center; justify-content: center;');
      buttonList.forEach(buttonList => buttonList.setAttribute('style', 'border-radius: 23px; display: flex; align-items: center; justify-content: center; width: 25vw; height: 8.5vw; background: #ff1493; color: black; font-size: 3vw; text-decoration: none; letter-spacing: .5px;'));
      p.textContent = "Lippan art weaves stories of tradition of love onto the canvas of clay, where each stroke echoes the heartbeat of a cultural legacy.";
      p.setAttribute('style', 'font-size: 4vw; color: #ff1493;');
      textbox.setAttribute('style', 'width: 100%; height: 100%; display: flex; padding-top: 50px; flex-direction: column; overflow: hidden;');
      //page2
      
    } else if (screenWidth <= 767) {

    } else {

    }
  }

  if (isLandscape) {
    if (screenWidth <= 1000) {
      page1.style.height = "100vh";
      Left.setAttribute('style', 'width: 50vw; height: 100%; position: absolute; top: 0; left: 0; display: flex; flex-direction: coloumn; text-align: left; padding: 10px 30px; overflow: hidden;   font-family: "Poppins", sans-serif;');
      Right.setAttribute('style', 'width: 50vw; height: 100%; position: absolute; top: 0; left: 50vw; padding: 95px 25px; overflow: hidden;');
      h3.setAttribute('style', 'font-size: 2vw; color: #fff;');
      h1List.forEach(h1 => h1.setAttribute('style', 'color: transparent; -webkit-text-stroke: 1px #ff1493; text-align: left; font-size: 3vw; letter-spacing: 1px;'));
      contain.setAttribute('style', 'display: flex; align-items: center;');
      buttonList.forEach(buttonList => buttonList.setAttribute('style', 'border-radius: 19px; display: flex; align-items: center; justify-content: center; width: 11vw; height: 3.5vw; background: #ff1493; color: black; font-size: 1.2vw; text-decoration: none; letter-spacing: .5px;'));
      p.textContent = "❛❛ Lippan art weaves stories of tradition of love onto the canvas of clay, where each stroke echoes the heartbeat of a cultural legacy. ❜❜";
      p.setAttribute('style', 'font-size: 1.6vw; color: #ff1493;');
      textbox.setAttribute('style', 'width: 100%; height: 100%; display: flex; padding-top: 95px; flex-direction: column; overflow: hidden;');
    } else if (screenWidth <= 1199) {

    } else {
      // Medium and large screens
      // Adjust styles accordingly
    }
  }
}

window.addEventListener("resize", mediaQuery);

document.addEventListener('DOMContentLoaded', function() {
  mediaQuery();
  AOS.init();
});

$(document).ready(function() {
  $('.p').textillate({
    in: {
      effect: 'fadeInUp',
      delayScale: 10,
      delay: 1,
    }
  });
});