function getInputValueById(id) {
    const inputValue = document.getElementById(id).value;
    const convertedValue = parseFloat(inputValue);
    return convertedValue;
}

function getInnerTextById(id){
    const innerText = document.getElementById(id).innerText;
    const textToNumber = parseFloat(innerText);
    return textToNumber;
}

function setInnerTextByIdAndValue(id, value) {
    document.getElementById(id).innerText = value;
}

// Toggle

function toggle(id, status) {
    document.getElementById(id).style.display = status;
}