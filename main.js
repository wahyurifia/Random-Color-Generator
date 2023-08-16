const container = document.querySelector('.container');
const spinBtn = document.querySelector('.spin');

for(let i = 0; i < 30; i++){
    const color = document.createElement("div");
    color.classList.add('color');
    color.textContent = "Click Spin";
    container.appendChild(color);
}

const colors = document.querySelectorAll(".color");


spinBtn.addEventListener('click', function() {
    generateColors();
});

function generateColors() {
    colors.forEach(function (color) {
        const newColorCode = randomColor();
        // console.log(newColorCode);
        color.style.backgroundColor = "#" + newColorCode;
        color.textContent = "#" + newColorCode;
    });
};

randomColor();

function randomColor() {
    let chars = '0123456789abcdef';
    let colorCode = "";
    for(let i = 0; i < 6; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode = colorCode + chars.substring(randomNum, randomNum + 1);
        console.log(colorCode, randomNum);
    };
    return colorCode;
};