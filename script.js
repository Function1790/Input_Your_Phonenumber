const inputNumber = document.getElementById("inputNumber")
const displayNumber = document.getElementById("displayNumber")

function splitNumber(num) {
    let strNum = parseInt(num).toString()
    let underInt = (num - parseInt(num)).toString().slice(1,4)
    console.log(num)
    const numLength = strNum.length
    for (var i = 0; i < 8 - numLength; i++) {
        strNum = "0" + strNum
    }
    return `010-${strNum.slice(0,4)}-${strNum.slice(4,8)}${underInt}`
}

inputNumber.addEventListener("change", (event) => {
    displayNumber.innerText=`Your Phone Number : ${splitNumber(inputNumber.value)}`
})