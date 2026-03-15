let fromUserInputEl = document.getElementById("fromUserInput");
let toUserInputEl = document.getElementById("toUserInput");
let counterTextEl = document.getElementById("counterText");

let timerId = null;

function displayNumbers(fromCount, toCount) {
    // Stop any existing timer before starting a new one.
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }

    let currentCount = fromCount;
    counterTextEl.textContent = currentCount;

    timerId = setInterval(function() {
        if (currentCount < toCount) {
            currentCount += 1;
            counterTextEl.textContent = currentCount;
        } else {
            clearInterval(timerId);
            timerId = null;
        }
    }, 1000);
    
}

function onClickStart() {
    let fromVal = fromUserInputEl.value;
    let toVal = toUserInputEl.value;

    if (fromVal === "") {
        alert("Enter the from value");
    } else if (toVal === "") {
        alert("Enter the to value");
    } else {
        let fromValInteger = parseInt(fromVal);
        let toValInteger = parseInt(toVal);

        displayNumbers(fromValInteger, toValInteger);
    }
}
function onClickReset() {
    counterTextEl.textContent = "";
    fromUserInputEl.value = "";
    toUserInputEl.value = "";

    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
}