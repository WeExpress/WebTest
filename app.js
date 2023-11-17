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