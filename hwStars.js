//stars 1
var i = 0,
  j = 0;
var max = 7;
var lines = "",
  star = "";

while (i < max) {
  lines = "";
  star = "";
  for (j = 0; j < max; j++);
  for (j = 0; j < 7; j++) star += "*";
  console.log(lines + star);
  i++;
}

//stars 2
var topLines = 7;
var vertLines = 7;
var star = '*';
var space = ' ';

for (var i = 0; i < vertLines; i++) {
  var str = '';


  if (i == 0 || i == vertLines - 1) {
    for (var j = 0; j < topLines; j++) {
      str += star;
    }

  } else {
    str = star;
    for (var j = 0; j < topLines - 2; j++) {
      str += space;
    }
    str += star;
  }
  console.log(str);
}

function triangleFirst() {
  var elem = ""
  for (var i = 0, d = 6; i < 7; i++, d--) {
    for (var k = 0; k < 7; k++) {
      if (i == 0) {
        elem += "*  ";
      } else if (k == 0 || k == d) {
        elem += "*  "
      } else {
        elem += "   "
      }
    }
    elem += "\n";
  }
  return elem;
}
console.log(triangleFirst());

function triangleSec() {
  var elem = ""
  for (var i = 0, d = 0; i < 7; i++, d++) {
    for (var k = 0; k < 7; k++) {
      if (i == 6) {
        elem += "*  ";
      } else if (k == 0 || k == d) {
        elem += "*  "
      } else {
        elem += "   "
      }
    }
    elem += "\n";
  }
  return elem;
}
console.log(triangleSec());

function triangleThird() {
  var elem = ""
  for (var i = 7, d = 6; i > 0; i--, d--) {
    for (var k = 0; k < 7; k++) {
      if (i == 1) {
        elem += "*  ";
      } else if (k == 6 || k == d) {
        elem += "*  "
      } else {
        elem += "   "
      }
    }
    elem += "\n";
  }
  return elem;
}
console.log(triangleThird());

function triangleFourth() {
  var elem = ""
  for (var i = 0, d = 0; i < 7; i++, d++) {
    for (var k = 0; k < 7; k++) {
      if (i == 0) {
        elem += "*  ";
      } else if (k == 6 || k == d) {
        elem += "*  "
      } else {
        elem += "   "
      }
    }
    elem += "\n";
  }
  return elem;
}
console.log(triangleFourth());

function cross() {
  var star = '';
  for (var i = 0; i < 7; i++) {
    for (var j = 0; j < 7; j++) {
      if (j === i || i === j) {
        star += '*  ';
      } else {
        star += '   ';
      }
    }
    star += '\n';
  }
  return star;
}
console.log(cross());



function star8() {
  var star = '';
  for (var i = 1; i < 8; i++) {
    for (var j = 7, k = 1; j >= 1, k < 8; j--, k++) {
      if (i === 1 || i === j && j < 5 ||  k === i && k < 5 ) {
        star += '* ';
      } else {
        star += '  ';
      }
    }
    star += "\n";
  }
  return star;
}

console.log(star8());

function star9() {
  var star = '';
  for (var i = 1; i < 8; i++) {
    for (var j = 7, k = 1; j >= 1, k < 8; j--, k++) {
      if (i === 7 || i === j && j > 3 ||  k === i && k > 3 ) {
        star += '* ';
      } else {
        star += '  ';
      }
    }
    star += "\n";
  }
  return star;
}

console.log(star9());
