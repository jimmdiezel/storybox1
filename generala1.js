/* Window Items */

bodProp = document.body;

/* General Items */

var spa1 = document.getElementById('space1');
var spa2 = document.getElementById('space2');
var spa3 = document.getElementById('space3');

var sp3Canvas = document.getElementById('sp3Canvas');
var starCanvas = document.getElementById('starCanvas');

var navSlate2 = document.getElementById('navSlate2');
var navSlate1 = document.getElementById('navSlate1');
var navSlate = document.getElementById('navSlate');
var panSlate = document.getElementById('panSlate');
var panSlate1 = document.getElementById('panSlate1');

var reboot = document.getElementById('reboot');
var tribes = document.getElementById('tribes');
var cycles = document.getElementById('cycles');
var zones = document.getElementById('zones');
var comms = document.getElementById('comms');
var vault = document.getElementById('vault');
var admin = document.getElementById('admin');

var oldkent = document.getElementById('oldkent');
var mayfair = document.getElementById('mayfair');
var timemap = document.getElementById('timemap');
var teamsheet = document.getElementById('teamsheet');
var artbook = document.getElementById('artbook');
var doczone = document.getElementById('doczone');
var yardsale = document.getElementById('yardsale');
var postbox = document.getElementById('postbox');

var output = document.getElementById('output');
var input = document.getElementById('input');
var admin = document.getElementById('admin');
var target = document.getElementById('target');
var datatype = document.getElementById('datatype');
var notes = document.getElementById('notes');

var stars = document.getElementById('stars');
var system2 = document.getElementById('system2');
var logo = document.getElementById('logo');
var loginbox = document.getElementById('loginbox');
var sun = document.getElementById('sun');
var version = document.getElementById('version');
var pan1 = document.getElementById('pan1');
var sp3Bar = document.getElementById('sp3Bar');
var row1 = document.getElementById('row1');
var underL1 = document.getElementById('underL1');
var win1 = document.getElementById('win1');
var poster = document.getElementById('poster');
var sp3Win = document.getElementById('sp3Win');

var earth = document.getElementById('earth');
var moon = document.getElementById('moon');
var pan2 = document.getElementById('pan2');
var win2 = document.getElementById('win2');
var underL2 = document.getElementById('underL2');
var earSlate = document.getElementById('earSlate');
var starBar = document.getElementById('starBar');
var row2 = document.getElementById('row2');
var panSlate2 = document.getElementById('panSlate2');

var ozone = document.getElementById('ozone');
var endRow = document.getElementById('endRow');
var endSlate = document.getElementById('endSlate');
var system = document.getElementById('system');

var directory = document.getElementById('directory');
var dataset = document.getElementById('dataset');

var ind1 = document.getElementById('ind1');
var ind2 = document.getElementById('ind2');
var ind3 = document.getElementById('ind3');
var ind4 = document.getElementById('ind4');

var index = document.getElementById('index');
var navbar = document.getElementById('navbar');

var dropB1 = document.getElementById('dropButton1');
var dropB2 = document.getElementById('dropButton2');
var dropB3 = document.getElementById('dropButton3');

var dropInB1 = document.getElementById('dropIn1');
var dropInB2 = document.getElementById('dropIn2');
var dropInB3 = document.getElementById('dropIn3');

var button1 = document.getElementById('button1');
var inButton1 = document.getElementById('inButton1');

var directShort = document.getElementById('directShort');
var directIntro = document.getElementById('directIntro');
var directSocial = document.getElementById('directSocial');
var directLast = document.getElementById('directLast');
var pillar6 = document.getElementById('pillar6');


// KEEP INDEX FIRST IN NAVSELECTION





// navSelection = [ind1, output, mayfair, directory];
firstNavItemF = function () {return navSlate1.firstElementChild};
lastNavItemF = function () {return navSlate1.lastElementChild};

span = [5, 22, 8];
reset = {};
reset.no = 0;
reset.add = resetCount();

function resetCount (){

if (reset.no > 1){

reset.no++;
return 0;

}

else{

reset.no++;
return reset.no;

}

}

function bodPropGet(){

bodProp1 = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

return bodProp1;

}

function bodHeightGet(){

bodProp2 = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

return bodProp2;

}

function getWidth(target){

targetGeom = target.clientWidth;
targetGeomm = parseInt(targetGeom);

return targetGeomm;

} 

//getWidth end

function getHeight(target){

targetGeom = target.clientHeight;
targetGeomm = parseInt(targetGeom);

return targetGeomm;

} //getHeight end

function getRight(target){

targetGeom = target.style.right;
targetGeomm = parseInt(targetGeom);

return targetGeomm;

} //getRight end


function divider(widTotal, widCalc, widSelect){

var j = widCalc.length;
var k = 0;

for (l = 0; l < j; l++){
 
k += widCalc[l];

}

modulo = widTotal % k;
subTotal = widTotal - modulo;
factor = subTotal / k;

widFig = [];

for (m=0; m < j; m++){

widFig[m] = widCalc[m] * factor;

}

widFig[widSelect] = widFig[widSelect] + modulo;

return widFig;

} //divider end

function setup (set){

var setFig = [];
j = 0;

setNext = set.firstElementChild;

while (setNext != undefined){

setFig[j] = setNext;
setNext = setFig[j].nextElementSibling;
j++

}

return setFig;

} //setup end

function extender (set, space, widList, pad){

var setFig = setup(set);
var setNum = setFig.length;

widTotal = space.clientWidth;
widTotall = parseInt (widTotal);

factorA = pad + 1;
factorB = factorA * setNum;
factorC = factorB + 4;

widTotall -= factorC;

setTotal = 0;

for (j=0; j < setNum; j++){

var setAdd = widList[j];
setTotal += setAdd;

}

var widRem = widTotall - setTotal;

modulo = widRem % j;
subTotal = widRem - modulo;
factor = subTotal / j;

for (j=0; j < setNum; j++){

var setAdd = widList[j];
var setAdd2 = setAdd + factor;

if (j < modulo){

setAdd2 += 1;

}

setFig[j].style.width = setAdd2 + 'px';

}

} // extender end

function extSetupA (set){

setFig = setup(set);
setNum = setFig.length;

widSet = [];

for (b=0; b < setNum; b++){


var setAdd = setFig[b];
var setAddd = setAdd.clientWidth;
var setAdd2 = parseInt(setAddd);
widSet[b] = setAdd2


}

return widSet;

} // extSetupA end

function extSetupB (set){

setFig = setup(set);
setNum = setFig.length;

widSet = [];

setNumm = setNum / 2;
modulo = setNumm % 1;
setNumm = setNumm - modulo;

if(modulo != 0){

setNumm += 1;

}


for (c=setNumm, d=0; c < setNum; c++, d++){

var setAdd = setFig[c].clientWidth;
var setAdd2 = parseInt(setAdd);
widSet[d] = setAdd2;

}

return widSet;

} // extSetupB end

/* Framework Functions */

function setTop (set, target, extra){

height = 0;
setAdd = 0;

for (j = 0; j < set.length; j++){

add = getHeight(set[j]);
setAdd += add;

}

setAdd += extra;

target.style.top = setAdd + 'px';

}

function setHeight (set, target, extra){

height = 0;
setAdd = 0;

for (j = 0; j < set.length; j++){

add = getHeight(set[j]);
setAdd += add;

}

setAdd += extra;

target.style.height = setAdd + 'px';

}

function setWidth (set, target, extra){

height = 0;
setAdd = 0;

for (j = 0; j < set.length; j++){

add = getWidth(set[j]);
setAdd += add;

}

setAdd += extra;

target.style.width = setAdd + 'px';

}

function setLeft (set, target, extra){

height = 0;
setAdd = 0;

for (j = 0; j < set.length; j++){

add = getWidth(set[j]);
setAdd += add;

}

setAdd += extra;

target.style.left = setAdd + 'px';

}

widObj = [];
heiObj = [];
topObj = [];
lefObj = [];

/* Framework Functions End*/

function widNavGet(deck){

sla1Width = 0;

setFig = setup(deck);
setNum = setFig.length;
setNumm = setNum / 2;
modulo = setNumm % 1;
setNumm = setNumm - modulo;

for(j=0; j < setNum; j++){
sla1Trans = getWidth(setFig[j]);
sla1Width += sla1Trans;
}

return sla1Width;

}

function borderSetup(){

borderSelectL = navSlate1.firstElementChild;
borderSelectL2 = navSlate2.firstElementChild;
borderSelectR = setup(navSlate1);
selectRLen = borderSelectR.length - 1;
borderSelectR = borderSelectR[selectRLen];
borderSelectR2 = setup(navSlate2);
selectRLen = borderSelectR2.length - 1;
borderSelectR2 = borderSelectR2[selectRLen];

}

function twoDeckRewind (){

// var listBackF = function () {return navSlate2.children};

backSet = setup(navSlate2);
backNum = backSet.length;
backNumm = 0;

while(backNum > 0){

backTrans = backSet[backNumm];
navSlate1.append(backTrans);
backNum--;
backNumm++;

}

}

function twoDeck (topDeck, bottomDeck, space){

w = 'width';
widSpaceSaver = setNum * 5;
widSpaceSaverr = widSpaceSaver + 50;
widSpace = getWidth(space);
widSpacee = widSpace - widSpaceSaverr;

firstNavItem = firstNavItemF();
lastNavItem = lastNavItemF();
nav1Height = getHeight(firstNavItem);
nav2Height = getHeight(lastNavItem);

var listTransF = function () {return topDeck.lastElementChild};

if (sla1Width > widSpacee){

if(transFlag == 0){

sla2Num = 0;
transFlag = 1;

while (sla2Num < setNumm){
sla2Trans = listTransF();
bottomDeck.prepend(sla2Trans);
sla2Num++;
}

borderSetup();

borderSelectL.style.borderLeft = '1px solid #ACACAC';
borderSelectL2.style.borderLeft = '1px solid #ACACAC';
borderSelectR.style.borderRight = '1px solid #ACACAC';
borderSelectR2.style.borderRight ='1px solid #ACACAC';

}

navtotHeightt = nav1Height*2 + 6;
space.style.height = navtotHeightt + 'px';

}

else{

if(sla1Width < widSpacee && transFlag == 1){

borderSetup();

borderSelectL2.style.borderLeft = 'none';
borderSelectR.style.borderRight = '1px dot #ACACAC';

transFlag = 0;
navtotHeightt = nav1Height + 5;
space.style.height = navtotHeightt + 'px';

twoDeckRewind();

}

lastNavItem = lastNavItemF();
totHeightt = nav1Height + 5;
space.style.height = totHeightt + 'px';
lastNavItem.style.borderRight = '1px solid #ACACAC';

}

} //twoDeck end

function navSelectReset(){

var dropBarSet = [panSlate1, navSlate1, panSlate2];

for(u = 0, v = 1; u < dropBarSet.length; u++, v++){

dropBarHold = dropBarSet[u];
itemSelectHold = navSelection[v];

dropBarHold.prepend(itemSelectHold);

}

}

function navDropList(deck, space){

deck.style.width = widSpace2 + 'px';

widDrop = widSpace2 - 6;
widSet = setup(deck);
widNum = widSet.length; 

deck.className = 'dropBar';

s = 0;

topItem = widSet[s];
topItem.style.borderBottom = '1px solid #ACACAC';
topItem.style.borderLeft = '1px solid #ACACAC';
topItem.style.borderTop = '1px solid #ACACAC';
topItem.style.borderRight = '1px dotted #ACACAC';

for (s = 0; s < widNum; s++){

widItem = widSet[s];
widItem.style.width = widDrop + 'px';

}

for (t = 1; t < widNum; t++){

visItem = widSet[t];
visItem.style.display = 'none';

}

}  //navDropList end

function navSelector(){

y=0;
selectLength = navSelection.length;

while(y < 4 && y < selectLength){
navItem = navSelection[y];
navItem.style.color = '#262626';
navItem.style.background = 'linear-gradient(to left,  #BCDCDC, #CDE5E5)';

if (resetCounter > 1){

navItem.className += 'navSelection';

}
y++;

}

}

function navDelector(){

y=1;

selectLength = navSelection.length;

while(y < 4 && y < selectLength){

navItem = navSelection[y];
navItem.style.color = '#000000';
navItem.style.background = 'linear-gradient(to left,  #DDEEEE, #EEF6F6)';
navItem.className = ' ';
y++;

}

}





function starShift(spa3Wid){

starsWid = getWidth(stars);
system2Wid = getWidth(system2);
totalWid = spa3Wid + starsWid + system2Wid;
totalMod = totalWid % 2;
totalWid -= totalMod;
halfWid = totalWid / 2;
widFig = halfWid - spa3Wid;

widAdj = spa3Wid + 150;
infoSpace = spa3Wid + starsWid;

if (infoSpace > system2Wid || widAdj > system2Wid){

stars.style.width = widFig + 'px';
system2.style.right = widFig + 'px';

}

else{

stars.style.width = '150px';
system2.style.right = '150px';

}

}

function bottomAdjust(){

topObj.underL2 = [pan2, win2];
setTop(topObj.underL2, underL2, 0);

heiObj.earSlate = [pan2, win2, underL2];
setHeight(heiObj.earSlate, earSlate, 1);

heiObj.earth = [row1, earSlate];
setHeight(heiObj.earth, earth, 1);

topObj.ozone = [moon, earth];
setTop(topObj.ozone, ozone, -1);

heiObj.ozone = [endRow, endSlate];
setHeight(heiObj.ozone, ozone, 0);

heiObj.system2 = [moon, earth, ozone];
setHeight(heiObj.system2, system2, 0);

}


function bottomLevelA(){

win2Kids = [];
win2Kids = win2.children;
win2Num = win2Kids.length
win2Sub = 0;
d = 0;

margg = win2Num * 2; // 2 Added for UnderL1/2
margg += 10;

while(d < win2Num){

win2Hold = win2Kids[d];
win2Holdd = win2Hold.offsetHeight;
win2Sub += win2Holdd;
d++; 

}

win2Total = win2Sub + margg;

return win2Total;

}

function bottomLevelB(){

win2Totall = bottomLevelA();
system2Hei = getHeight(system2);
sunHei = getHeight(sun);
systemHeight = system2Hei + sunHei;
bodHei = bodHeightGet();
heightDiff = 0;

if (systemHeight < bodHei){

heightDiff = bodHei - systemHeight;
win2Totall += heightDiff;
win2.style.height = win2Totall + 'px';

bottomAdjust();

}

}

function sp3WinF(spa3Width){

starsWidth = getWidth(stars);
widTot = spa3Width + starsWidth - 6;

sp3Win.style.width = widTot + 'px';


var sp3Grp = document.getElementsByClassName("textBorderB");
var sp3Grp2 = document.getElementsByClassName("textboxC");


widTot -= 8;
widTot2 = widTot - 4;

for (d = 0; d < sp3Grp.length; d++){

sp3Holder = sp3Grp[d];
sp3Holder2 = sp3Grp2[d];
sp3Holder.style.width = widTot + 'px';
sp3Holder2.style.width = widTot2 + 'px';

}

}



function heightReset(){

win2Hei = bottomLevelA(); 
win2.style.height = win2Hei + 'px';

bottomAdjust();
bottomLevelB();

heiObj.system = [sun, system2];
setHeight(heiObj.system, system, 0);

heiObj.starBar = [navSlate];
setHeight(heiObj.starBar, starBar, -4);

heiObj.star = [system2];
setHeight(heiObj.star, stars, 0);


firstNavItem = firstNavItemF();
heiObj.navSlate = [firstNavItem];
setHeight(heiObj.navSlate, navSlate, 6);
setHeight(heiObj.navSlate, pan2, 5);
setTop(heiObj.navSlate, win2, 6);

}



function microWidth(){

var textSetA = document.getElementsByClassName("textBorderA");
var textSetB = document.getElementsByClassName("textboxB");
var apicSet = document.getElementsByClassName("apic");


if (pillar6 != undefined){

if (nav1Width < microBar){

pillar6.style.width = '100%';

}

else {

pillar6.style.width = '50%';

}

}


if (nav1Width < microBar){

poster.style.left = '4px';
poster.style.right = '3px';

for (e = 0; e < apicSet.length; e++){

picAdj = apicSet[e];
picAdj.style.width = '100%';

}

}

else {

poster.style.left = '80px';
poster.style.right = '80px';

for (e = 0; e < apicSet.length; e++){

picAdj = apicSet[e];
picAdj.style.width = '50%';

}

}


winSpace = getWidth(win2);
winSpace -= 7;
winSpace2 = winSpace - 8;
winSet = setup(win2);

for(d = 0; d < textSetA.length; d++){

borderSelect = textSetA[d];
divWidth = getWidth(borderSelect);

borderSelect2 = textSetB[d]

if (winSpace < divWidth || winSpace > divWidth){

borderSelect.style.width = winSpace + 'px';
borderSelect2.style.width = winSpace2 + 'px';


}

}

}

function microHide(){

hideFlag = 1;

hideSet = setup(win2);

for(d = 3; d < hideSet.length; d++){

hideSelect = hideSet[d];
hideSelect.style.display = 'none';

}

}

function microShow(){

if (directShort != undefined){

hideSet = setup(win2);
showSet = setup(directShort);

for(d = 2; d < hideSet.length; d++){

var e;
e = d - 2;

showSelect = showSet[e];
hideSelect = hideSet[d]

if (this != showSelect){

hideSelect.style.display = 'none';

}

else {

hideSelect.style.display = 'initial';

}

}

heightReset();

}

}






//trans func

function listOver(){

this.style.background = 'linear-gradient(to right,  #E6E6E6, #D7E9E9)';
this.style.color = '#458787';

}

function listOut(){

navCheck = this.className;

if (navCheck == 'navSelection'){

this.style.background = 'linear-gradient(to left,  #BCDCDC, #CDE5E5)';
this.style.color = '#1A1A1A';

}

else {

this.style.background = 'linear-gradient(to left,  #DDEEEE, #EEF6F6)';
this.style.color = '#000000';

}

}

function listHoverTrans (setList){

hoverList = [input, output, admin, dataset, directory, notes];

q = 6;
v = 0;
sets = setList.length;

for (x = 0; x < sets; x++){

setHold = setList[x];
setNext = setup(setHold);
setNum = setNext.length;

for (w = 0; w < setNum; w++){
hoverList[q] = setNext[w];
q++;
}

}

hovNum = hoverList.length;

return hoverList;

}

function indexOut(){

var spa1 = document.getElementById('space1');
spa1.style.width = '150px';

}

function indexIn(){

spa1.style.width = '25px';

}

function spa3Trans (){

widStars = getWidth(stars);
rigSpa2 = getRight(spa2);
widSpa3 = getWidth(spa3);

widTrans = widSpa3 + widStars;

if (widSpa3 == rigSpa2){

widTranss = widTrans + 'px';
spa3.style.width = widTranss;

}

else {

rigSpaa = rigSpa2 + 'px';
spa3.style.width = rigSpaa;

}

}

function inButtonOn(){

inButton1.style.border = '1px solid #ACACAC';
inButton1.style.background = '#E6E6E6';

}

function inButtonOff(){

inButton1.style.background = 'none';
inButton1.style.border = 'none';

}

function dropSelect(dropList){

dropSet = setup(dropList);
dropNum = dropSet.length; 

dropTop = dropSet[0];
dropTop.style.borderBottom = '1px dotted #ACACAC';

t = 1;

for (t = 1; t < dropNum; t++){

dropItem = dropSet[t];
dropItem.style.display = 'inline';

dropItem.style.color = '#1A1A1A';
dropItem.style.background = 'linear-gradient(to left,  #DDEEEE, #EEF6F6)';


dropItem.style.borderRight = '1px solid #ACACAC';
dropItem.style.borderLeft = '1px solid #ACACAC';
dropItem.style.borderBottom = '1px dotted #ACACAC';

}

dropBottom = dropSet[dropNum - 1];
dropBottom.style.borderBottom = '1px solid #ACACAC';

}

function dropDisplay(){

if (this == dropB3){

dropSelect(panSlate2);

} 

else if (this == dropB2){

navSlate1.style.zIndex = 2;
dropSelect(navSlate1);

}

else if (this == dropB1){

panSlate1.style.zIndex = 2;
dropSelect(panSlate1);

}

}

function dropOff1(offDrop){

offSet = setup(offDrop);
offNum = offSet.length;

offTop = offSet[0];
offTop.style.borderBottom = '1px solid #ACACAC';

while (offNum > 1){

offNum--;
offItem = offSet[offNum];

offItem.style.display = 'none';
}

}

function dropHide(){

if (this == pan2){

dropOff1(panSlate2);
 
} 

else if (this == pan1){


dropOff1(navSlate1);
navSlate1.style.zIndex = 1;

}

else if (this == navbar){

dropOff1(panSlate1);
panSlate1.style.zIndex = 1;

}

} // dropHide End

function dropInOn(){

this.style.background = '#E6E6E6';
this.style.border = '1px solid #ACACAC';

}

function dropInOff(){

this.style.background = 'none';
this.style.border = 'none';

}

function microShowSet() {

if (directShort != undefined){

var sDirectSet = directShort.children;

for (w = 0; w < sDirectSet.length; w++){

sDirectSet[w].addEventListener("click", microShow);

}

}

}


//framework calc

//space calc

widNav1 = extSetupA(navSlate1);
widNav2 = extSetupB(navSlate1);
widPan1 = extSetupA(panSlate1);
widPan2 = extSetupA(panSlate2);
sla1Width = widNavGet(navSlate1);
transFlag = 0;
dropFlag = 0;
hideFlag = 0;

function spacer(){

resetCounter = resetCount();
bodProp2 = bodPropGet();
widProp = [];
widPropa = [];
widProp = divider(bodProp2, span, 1);
widProp[3] = widProp[1] - 1; // DELETE

if (widProp[0] > 140){

widPropa[0] = widProp[0] + 'px';
widPropa[2] = widProp[2] + 'px';

spa1.style.width = widPropa[0];
spa2.style.left = widPropa[0];
spa2.style.right= widPropa[2];
spa3.style.width= widPropa[2];

spa1.removeEventListener("mouseover", indexOut);
spa1.removeEventListener("mouseout", indexIn);

starShift(widProp[2]);
sp3WinF(widProp[2]);

}

else {

bodProp2 -= 25;
span2 = [22, 8];
widProp2 = divider(bodProp2, span2, 0);

spa1.style.width = '25px';
spa2.style.left = '29px';
spa2.style.right = widProp2[1] + 'px'; // change from 'widProp[2]'
spa3.style.width = widProp2[1] + 'px';

spa1.addEventListener("mouseover", indexOut);
spa1.addEventListener("mouseout", indexIn);

starShift(widProp2[1]);
sp3WinF(widProp2[1]);

}

//sun calc


heiObj.sun = [loginbox, logo];
setHeight(heiObj.sun, sun, 5);

topObj.system2 = [sun];
setTop(topObj.system2, system2, 0);

topObj.logo = [loginbox];
setTop(topObj.logo, logo, 2);
setTop(topObj.logo, version, 2);

lefObj.version = [logo];
setLeft(lefObj.version, version, 4);

//navbar calc

nav1Width = getWidth(navSlate1);
microHalf = nav1Width / 2;
microHalf = parseInt(microHalf);

microBar = sla1Width/2 + 110;

if(nav1Width < microBar || dropFlag == 1){

twoDeckRewind();

navSelectReset();


dropB1.className = 'dropButton';
dropB2.className = 'dropButton';
dropB3.className = 'dropButton';

dropInB1.className = 'dropIn';
dropInB2.className = 'dropIn';
dropInB3.className = 'dropIn';

firstNavItem = firstNavItemF();
heiUpdate = getHeight(firstNavItem);
widSpace2 = getWidth(pan1);
widSpace2 -= heiUpdate;
widSpace2 -= 1;



navDropList(navSlate1, pan1);
navDropList(panSlate1, pan1);
navDropList(panSlate2, pan1);

navSelectReset();

heiObj.firstItem = [firstNavItem];
setHeight(heiObj.firstItem, pan1, 5);

if(nav1Width < microBar || dropFlag == 0){

dropInB1.addEventListener("mouseover", dropInOn);
dropInB2.addEventListener("mouseover", dropInOn);
dropInB3.addEventListener("mouseover", dropInOn);

dropInB1.addEventListener("mouseleave", dropInOff);
dropInB2.addEventListener("mouseleave", dropInOff);
dropInB3.addEventListener("mouseleave", dropInOff);

dropB1.addEventListener("click", dropDisplay);
dropB2.addEventListener("click", dropDisplay);
dropB3.addEventListener("click", dropDisplay);

pan2.addEventListener("mouseleave", dropHide);
pan1.addEventListener("mouseleave", dropHide);
navbar.addEventListener("mouseleave", dropHide);

}

borderSelectT = navSlate1.firstElementChild;
borderSelectT.style.borderTop = '1px solid #ACACAC';
borderSelectT.style.borderLeft ='1px solid #ACACAC';

navDelector();

dropFlag = 1;

microWidth();

if (hideFlag == 0){

microHide();

}

}

else{

dropInB1.className = " ";
dropInB2.className = " ";
dropInB3.className = " ";

twoDeck(navSlate1, navSlate2, pan1);

extender(navSlate1, navSlate, widNav1, 4);
extender(navSlate2, navSlate, widNav2, 4);
extender(panSlate1, panSlate, widPan1, 4);
extender(panSlate2, panSlate, widPan2, 4);

navSelector();

}

//general calc

heiObj.sp3Bar = [loginbox];
setHeight(heiObj.sp3Bar, sp3Bar, -3);
setTop(heiObj.sp3Bar, sp3Win, -2);




topObj.stars = [sun];
setTop(topObj.stars, stars, 0);

topObj.row1 = [navSlate];
setTop(topObj.row1, row1, 0);

topObj.win1 = [pan1];
setTop(topObj.win1, win1, 1);

topObj.win2 = [poster];
setHeight(topObj.win2, win1, 12);

topObj.panSlate = [navSlate, row1];
setTop(topObj.panSlate, panSlate, 0);

heiObj.panSlate = [pan1, win1, underL1];
setHeight(heiObj.panSlate, panSlate, 2);

topObj.underL1 = [pan1, win1];
setTop(topObj.underL1, underL1, 1);

heiObj.moon = [navSlate, row1, panSlate];
setHeight(heiObj.moon, moon, 0);

topObj.earth = [moon];
setTop(topObj.earth, earth, 0);

heightReset();


}

spacer();

window.addEventListener("resize", spacer);

setList = [index, navSlate1, navSlate2];
setList2 = setList.concat(shortList);
hoverList = listHoverTrans (setList2);
a = 0;

for(a = 0; a < hoverList.length; a++){

hoverTarget = hoverList[a];
hoverTarget.addEventListener("mouseover", listOver);
hoverTarget.addEventListener("mouseout", listOut);

}

button1.addEventListener("mouseover", inButtonOn);
button1.addEventListener("mouseout", inButtonOff);
button1.addEventListener("click", spa3Trans);

microShowSet();

