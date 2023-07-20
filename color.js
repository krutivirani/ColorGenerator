const getColor = () =>{
    const randomNumber = Math.floor(Math.random() * 16777215);  // 16 to power of 6 = 16777215
    const randomCode = "#" + randomNumber.toString(16);  // The hexadecimal number, has a base value equal to 16
    document.body.style.backgroundColor = randomCode;
    document.getElementById('color-code').innerText = randomCode;
}

// event call
document.getElementById('btn').addEventListener('click', getColor)

// initial call
getColor()