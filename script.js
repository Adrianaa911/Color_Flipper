const body = document.getElementsByTagName("body")[0]

//body.style.backgroundColor = "pink" => change the background color from js

function setColor(name) {
    body.style.backgroundColor = name;
}

/*
setColor("green")
setColor("grey")
setColor("black")
setColor("aqua") Call the function as many you want */ 

function randomColor() {
    const red = Math.round (Math.random() * 255)
    const green = Math.round (Math.random() * 255)
    const blue = Math.round (Math.random() * 255)

    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;   
}

randomColor()