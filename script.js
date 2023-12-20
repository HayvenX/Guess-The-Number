let hint = document.getElementById("hint")
let number = document.getElementById("number")
let minInput = document.getElementById("minInput")
let maxInput = document.getElementById("maxInput")
let guess = document.getElementById("guess")
const enter = document.getElementById("enter")

let isGuessed = true

let secretNum = 0

enter.onclick = function()
{
    let min = Number(minInput.value)
    let max = Number(maxInput.value)

    if(min < max)
    {
        if(isGuessed)
        {
            secretNum = Math.floor(Math.random() * (max - min + 1)) + min
            isGuessed = false
        }
        let yourNum = guess.value

        if(yourNum >= min && yourNum <= max)
        {
    
        if(yourNum < secretNum)
        {
            hint.innerText = "The Number is greater"
        }   
        else if(yourNum > secretNum)
        {
            hint.innerText = "The Number is less"
        }
        else if(yourNum == secretNum)
        {
            hint.innerText = `The Number is really ${secretNum}!`
            number.innerText = secretNum
            isGuessed = true
        }
        }
        else if(yourNum == "")
        {
            alert("Enter your Number")
        }
        else
        {
            alert("Invalid Number")
        }
    }
    else
    {
        alert("Something went wrong🤔")
    }
}