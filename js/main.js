// Hex To RGB Converter Variables

const hexCOut = document.querySelector('#hexCOut');
const hexCInp = document.querySelector('#hexCInp');


// RGB To Hex Variables

const RCInput = document.querySelector("#RCInput");
const GCInput = document.querySelector("#GCInput");
const BCInput = document.querySelector("#BCInput");
const rgbCOut = document.querySelector("#rgbCOut");


// RGB Range Variables

const RrInput = document.querySelector("#RrInput");
const GrInput = document.querySelector("#GrInput");
const BrInput = document.querySelector("#BrInput");
const rangeColorBox = document.querySelector("#range-color-box");

// Color By Hex Code
const hexInput = document.querySelector("#hexInput");
const colorBox = document.querySelector("#color-box");

// Color By RGB Code
const rgbColorBox = document.querySelector("#rgb-color-box");
const RInput = document.querySelector("#RInput");
const GInput = document.querySelector("#GInput");
const BInput = document.querySelector("#BInput");


// Random Color Picker

const randomPickerButton = document.querySelector("#randomPickerButton");
const randomValuePara = document.querySelector("#randomValuePara");

const hexToRgbMap = new Map([
    ['A',10],['a',10],['B',11],['b',11],['C',12],['c',12],
    ['D',13],['d',13],['E',14],['e',14],['F',15],['f',15],
    ['0',0],['1',1],['2',2],['3',3],['4',4],['5',5],['6',6],['7',7],
    ['8',8],['9',9]
]);

const rgbToHexMap = new Map([
    [10,'A'],[11,'B'],[12,'C'],[13,'D'],[14,'E'],[15,'F'],
    [0,'0'],[1,'1'],[2,'2'],[3,'3'],[4,'4'],[5,'5'],[6,'6'],[7,'7'],
    [8,'8'],[9,'9']
]);


function randompickerbtn() {
    let hash = '#';
    let text = "0123456789ABCDEF";

    for(let i=0; i< 6; i++){
        hash = hash + text[Math.round(Math.random() * 15)];
    }

    randomValuePara.style.backgroundColor = hash;
    randomValuePara.innerHTML = hash;
}

function hexFindbtn() {

    let hexValue = hexInput.value;
    colorBox.style.backgroundColor = `${hexValue}`;
}

function RGBFindbtn() {
    let redInput = RInput.value;
    let greenInput = GInput.value;
    let blueInput = BInput.value;
    rgbColorBox.style.backgroundColor = `rgb(${redInput},${greenInput},${blueInput})`;

}

function RangeSelector() {
  let redRange = RrInput.value;
  let greenRange = GrInput.value;
  let blueRange = BrInput.value;

  rangeColorBox.style.backgroundColor = `rgb(${redRange},${greenRange},${blueRange})`;
  rangeColorBox.innerHTML = `rgb(${redRange},${greenRange},${blueRange})`;
}

// hex to rgb converter

String.prototype.convertToRGB = function () {
  
};

function hexConvbtn() {
    let hexCode = hexCInp.value;
    let value = '';
    let rgbArray = [];
    for(let i=0; i<hexCode.length; i++){
        value = (hexToRgbMap.get(hexCode[i]) * 16) + Number(hexToRgbMap.get(hexCode[i + 1]));
        i++;
        rgbArray.push(value);
        value = '';    
    }
    hexCOut.innerHTML =  `rgb(${rgbArray[0]},${rgbArray[1]},${rgbArray[2]})`;
    hexCOut.style.backgroundColor = `rgb(${rgbArray[0]},${rgbArray[1]},${rgbArray[2]})`;
}

function rgbConvbtn() {
    let finalCode = '#';
    let rgbArray = [RCInput.value,GCInput.value,BCInput.value];

    for (const col of rgbArray) {
        
        let division, remainder, code;
        
        division = Math.floor(col / 16);
        remainder = col % 16;

        console.log( division,  remainder);
        code = rgbToHexMap.get(division) + rgbToHexMap.get(remainder)
        finalCode += code;

    }

    rgbCOut.innerHTML = `${finalCode}`;
    rgbCOut.style.backgroundColor = `${finalCode}`
}
