let myOrange;
let myRed;
let myLightBlue;
let myDarkBlue;
let myYellow;
let myGreen;
let myPink;
let myTurquoise;
let myUltraBlue;
let myGreyBlue;
let myColor;

let colorArray;
function setup() {
  createCanvas(400, 500);
  myColor = 0;
  colorMode(RGB);
  myOrange = color(214, 90, 14);
  myRed = color(235, 76, 103);
  myLightBlue = color(34, 165, 255);
  myDarkBlue = color(0, 82, 137);
  myYellow = color(255, 188, 0);
  myGreen = color(23, 169, 0);
  myPink = color(255, 182, 194);
  myTurquoise = color(0, 210, 255);
  myUltraBlue = color(57, 33, 235);
  myGreyBlue = color(161, 180, 238);

  colorArray = [myUltraBlue, myGreyBlue];
}

function draw() {
  background(220);

  birdBody();
  birdHead();
  cubeBackground();
  myTexture();
}

function mousePressed() {
  console.log(myColor);
  myColor++;
  if (myColor == 2) {
    myColor = 0;
  }
}

function birdBody() {
  strokeWeight(2);
  // noFill();

  fill(myRed);
  //red left bottom corner
  quad(0, 480, 0, 500, 80, 500, 60, 485);
  //red middle bottom
  triangle(155, 500, 270, 500, 220, 415);

  fill(myPink);
  //pink bottom left
  quad(60, 484, 160, 490, 155, 500, 80, 500);
  //pink middle left
  triangle(110, 370, 83, 307, 185, 310);
  //right side pink
  beginShape();
  vertex(335, 318);
  vertex(290, 236);
  vertex(247, 265);
  vertex(220, 320);
  vertex(320, 340);
  vertex(335, 318);
  endShape();

  fill(myYellow);
  //bottom yellow right
  beginShape();
  vertex(255, 470);
  vertex(270, 410);
  vertex(335, 321);
  vertex(360, 500);
  vertex(270, 500);
  vertex(255, 470);
  endShape();
  //yellow middle left
  quad(110, 370, 83, 307, 60, 350, 60, 420);

  fill(myLightBlue);
  //blue middle poka dot left corner
  triangle(60, 484, 60, 350, 0, 480);

  //middle light blue
  quad(220, 415, 255, 470, 285, 334, 222, 322);

  fill(myDarkBlue);
  //middle dark blue with stripes
  beginShape();
  vertex(185, 310);
  vertex(110, 370);
  vertex(160, 490);
  vertex(221, 413);
  vertex(220, 321);
  vertex(185, 310);
  endShape();

  fill(myGreen);
  //green middle left
  quad(62, 420, 110, 370, 160, 490, 60, 484);
  //right side green
  triangle(270, 406, 285, 335, 320, 342);

  //middle top green
  quad(222, 320, 185, 309, 176, 252, 247, 264);

  fill(myOrange);
  //top orange left
  quad(185, 309, 176, 252, 136, 233, 83, 306);
}

function birdHead() {
  fill(myRed);
  //red right
  quad(246, 228, 247, 262, 290, 235, 286, 199);

  fill(myPink);
  //pink right
  quad(245, 227, 226, 188, 271, 145, 286, 197);

  fill(myYellow);
  //eyebrow left yellow
  triangle(226, 187, 71, 102, 50, 195);
  //nose yellow right
  beginShape();
  vertex(225, 185);
  vertex(233, 193);
  vertex(239, 191);
  vertex(245, 241);
  vertex(225, 185);
  endShape();

  fill(myDarkBlue);
  //dark blue left
  beginShape();
  vertex(136, 232);
  vertex(176, 251);
  vertex(246, 263);
  vertex(244, 229);
  vertex(225, 188);
  vertex(129, 194);
  vertex(136, 232);
  endShape();

  //light blue eye left
  if (myColor == 1) {
    strokeWeight(5);
    line(246, 191, 265, 175);
    strokeWeight(2);
  } else {
    ellipse(256, 185, 20, 30);
  }
  // ellipse(256, 185, 20, 30);
  fill(myOrange);
  //eyebrow right orange
  triangle(226, 187, 336, 77, 243, 45);

  //nose orange left
  beginShape();
  vertex(221, 176);
  vertex(218, 197);
  vertex(201, 199);
  vertex(245, 241);
  vertex(221, 176);
  endShape();

  fill(myLightBlue);
  //blue top right
  triangle(194, 126, 225, 185, 235, 129);
  //light blue eye left
  if (myColor == 1) {
    strokeWeight(5);
    line(165, 210, 190, 210);
    strokeWeight(2);
  } else {
    ellipse(175, 210, 25, 30);
  }

  fill(myGreen);
  //green top left
  triangle(225, 185, 194, 126, 158, 148);
}

function cubeBackground() {
  if (myColor == 1) {
    fill(myGreyBlue);
    // fill(myDarkBlue);
    //bottom left dark blue
    triangle(0, 476, 48, 375, 0, 370);
    //dark blue top left
    fill(myUltraBlue);
    beginShape();
    vertex(50, 194);
    vertex(0, 193);
    vertex(0, 0);
    vertex(84, 0);
    vertex(84, 108);
    vertex(70, 101);
    vertex(50, 194);
    endShape();
    // fill(myPink);
    //pink left

    beginShape();
    vertex(82, 303);
    vertex(135, 233);
    vertex(127, 192);
    vertex(0, 196);
    vertex(0, 292);
    vertex(82, 303);
    endShape();
    //pink top right
    beginShape();
    vertex(243, 44);
    vertex(244, 0);
    vertex(400, 0);
    vertex(400, 77);
    vertex(338, 77);
    vertex(243, 44);
    endShape();

    // fill(myYellow);
    //yellow top quad
    quad(194, 125, 172, 0, 245, 0, 233, 127);
    //yellow right
    quad(287, 197, 400, 198, 400, 238, 291, 236);

    // fill(myLightBlue);
    //light blue poka dot
    beginShape();
    vertex(193, 127);
    vertex(171, 0);
    vertex(84, 0);
    vertex(85, 107);
    vertex(156, 148);
    vertex(193, 127);
    endShape();
    // fill(myOrange);
    //orange quad left
    quad(48, 374, 58, 350, 0, 349, 0, 367);

    // fill(myRed);
    //red quad left
    quad(60, 348, 82, 305, 0, 294, 0, 346);

    //red right
    beginShape();
    vertex(400, 78);
    vertex(336, 76);
    vertex(271, 144);
    vertex(287, 197);
    vertex(400, 197);
    vertex(400, 77);
    endShape();

    //light blue bottom right
    quad(292, 237, 400, 239, 400, 319, 336, 318);

    //dark blue bottom right
    fill(myGreyBlue);
    quad(336, 318, 400, 319, 400, 370, 345, 391);

    beginShape();
    vertex(82, 303);
    vertex(135, 233);
    vertex(127, 192);
    vertex(0, 196);
    vertex(0, 292);
    vertex(82, 303);
    endShape();
    //pink top right
    beginShape();
    vertex(243, 44);
    vertex(244, 0);
    vertex(400, 0);
    vertex(400, 77);
    vertex(338, 77);
    vertex(243, 44);
    endShape();

    // fill(myGreen);
    //green bottom right
    quad(400, 500, 400, 370, 345, 391, 361, 500);
    // text(mouseX + "," + mouseY, 20, 20);
  } else {
    fill(myYellow);
    //bottom left dark blue
    triangle(0, 476, 48, 375, 0, 370);
    //dark blue top left
    beginShape();
    vertex(50, 194);
    vertex(0, 193);
    vertex(0, 0);
    vertex(84, 0);
    vertex(84, 108);
    vertex(70, 101);
    vertex(50, 194);
    endShape();
    //dark blue bottom right
    quad(336, 318, 400, 319, 400, 370, 345, 391);

    fill(myOrange);
    //orange quad left
    quad(48, 374, 58, 350, 0, 349, 0, 367);

    fill(myRed);
    //red quad left
    quad(60, 348, 82, 305, 0, 294, 0, 346);
    //red right
    beginShape();
    vertex(400, 78);
    vertex(336, 76);
    vertex(271, 144);
    vertex(287, 197);
    vertex(400, 197);
    vertex(400, 77);
    endShape();

    fill(myPink);
    //pink left
    beginShape();
    vertex(82, 303);
    vertex(135, 233);
    vertex(127, 192);
    vertex(0, 196);
    vertex(0, 292);
    vertex(82, 303);
    endShape();
    //pink top right
    beginShape();
    vertex(243, 44);
    vertex(244, 0);
    vertex(400, 0);
    vertex(400, 77);
    vertex(338, 77);
    vertex(243, 44);
    endShape();

    fill(myOrange);
    //light blue poka dot
    beginShape();
    vertex(193, 127);
    vertex(171, 0);
    vertex(84, 0);
    vertex(85, 107);
    vertex(156, 148);
    vertex(193, 127);
    endShape();
    //light blue bottom right
    quad(292, 237, 400, 239, 400, 319, 336, 318);

    fill(myYellow);
    //yellow top quad
    quad(194, 125, 172, 0, 245, 0, 233, 127);
    //yellow right
    quad(287, 197, 400, 198, 400, 238, 291, 236);

    fill(myGreen);
    quad(400, 500, 400, 370, 345, 391, 361, 500);
  }
}

function myTexture() {
  stroke(myRed);
  //lines on left eyebrow
  line(176, 172, 81, 122);
  line(157, 175, 79, 132);
  line(144, 177, 77, 143);
  line(126, 180, 74, 153);
  line(103, 181, 71, 166);

  stroke(myLightBlue);
  //lines on dark blue shape on bird body
  line(124, 379, 124, 365);
  line(131, 395, 134, 360);
  line(144, 425, 146, 349);
  line(161, 456, 161, 340);
  line(175, 450, 174, 330);
  line(190, 444, 190, 320);
  line(206, 416, 206, 330);

  fill(myYellow);
  stroke(myYellow);
  //sun
  if (myColor == 1) {
    circle(341, 134, 60);
    fill(myUltraBlue);
    stroke(myUltraBlue);
    circle(364, 127, 60);
  } else {
    circle(341, 134, 60);
  }

  //poka dots on bottom left blue triange
  strokeWeight(4);
  stroke(myTurquoise);
  point(55, 477);
  point(55, 467);
  point(55, 457);
  point(55, 447);
  point(55, 437);
  point(55, 427);
  point(55, 417);
  point(55, 407);
  point(55, 397);
  point(55, 387);
  point(55, 377);

  point(48, 477);
  point(48, 467);
  point(48, 457);
  point(48, 447);
  point(48, 437);
  point(48, 427);
  point(48, 417);
  point(48, 407);
  point(48, 397);
  point(48, 387);

  point(41, 477);
  point(41, 467);
  point(41, 457);
  point(41, 457);
  point(41, 447);
  point(41, 437);
  point(41, 427);
  point(41, 417);
  point(41, 407);

  point(34, 477);
  point(34, 467);
  point(34, 457);
  point(34, 457);
  point(34, 447);
  point(34, 437);
  point(34, 427);
  point(34, 417);

  point(27, 477);
  point(27, 467);
  point(27, 457);
  point(27, 457);
  point(27, 447);
  point(27, 437);

  point(20, 477);
  point(20, 467);
  point(20, 457);
  point(20, 457);
  point(20, 447);

  point(13, 477);
  point(13, 467);

  point(6, 477);

  if (myColor == 1) {
    stroke(myYellow);
  } else {
    stroke(myDarkBlue);
  }

  //poka dots top left shape blue
  point(94, 101);
  point(94, 91);
  point(94, 81);
  point(94, 71);
  point(94, 61);
  point(94, 51);
  point(94, 41);
  point(94, 31);
  point(94, 21);
  point(94, 11);

  point(101, 111);
  point(101, 101);
  point(101, 91);
  point(101, 81);
  point(101, 71);
  point(101, 61);
  point(101, 51);
  point(101, 41);
  point(101, 31);
  point(101, 21);
  point(101, 11);

  point(108, 111);
  point(108, 101);
  point(108, 91);
  point(108, 81);
  point(108, 71);
  point(108, 61);
  point(108, 51);
  point(108, 41);
  point(108, 31);
  point(108, 21);
  point(108, 11);

  point(115, 121);
  point(115, 111);
  point(115, 101);
  point(115, 91);
  point(115, 81);
  point(115, 71);
  point(115, 61);
  point(115, 51);
  point(115, 41);
  point(115, 31);
  point(115, 21);
  point(115, 11);

  point(122, 121);
  point(122, 111);
  point(122, 101);
  point(122, 91);
  point(122, 81);
  point(122, 71);
  point(122, 61);
  point(122, 51);
  point(122, 41);
  point(122, 31);
  point(122, 21);
  point(122, 11);

  point(129, 121);
  point(129, 111);
  point(129, 101);
  point(129, 91);
  point(129, 81);
  point(129, 71);
  point(129, 61);
  point(129, 51);
  point(129, 41);
  point(129, 31);
  point(129, 21);
  point(129, 11);

  point(136, 131);
  point(136, 121);
  point(136, 111);
  point(136, 101);
  point(136, 91);
  point(136, 81);
  point(136, 71);
  point(136, 61);
  point(136, 51);
  point(136, 41);
  point(136, 31);
  point(136, 21);
  point(136, 11);

  point(143, 131);
  point(143, 121);
  point(143, 111);
  point(143, 101);
  point(143, 91);
  point(143, 81);
  point(143, 71);
  point(143, 61);
  point(143, 51);
  point(143, 41);
  point(143, 31);
  point(143, 21);
  point(143, 11);

  point(150, 141);
  point(150, 131);
  point(150, 121);
  point(150, 111);
  point(150, 101);
  point(150, 91);
  point(150, 81);
  point(150, 71);
  point(150, 61);
  point(150, 51);
  point(150, 41);
  point(150, 31);
  point(150, 21);
  point(150, 11);

  point(157, 141);
  point(157, 131);
  point(157, 121);
  point(157, 111);
  point(157, 101);
  point(157, 91);
  point(157, 81);
  point(157, 71);
  point(157, 61);
  point(157, 51);
  point(157, 41);
  point(157, 31);
  point(157, 21);
  point(157, 11);

  point(164, 141);
  point(164, 131);
  point(164, 121);
  point(164, 111);
  point(164, 101);
  point(164, 91);
  point(164, 81);
  point(164, 71);
  point(164, 61);
  point(164, 51);
  point(164, 41);
  point(164, 31);
  point(164, 21);
  point(164, 11);

  point(171, 131);
  point(171, 121);
  point(171, 111);
  point(171, 101);
  point(171, 91);
  point(171, 81);
  point(171, 71);
  point(171, 61);
  point(171, 51);

  point(178, 131);
  point(178, 121);
  point(178, 111);
  point(178, 101);
  point(178, 91);

  stroke("black");
}

