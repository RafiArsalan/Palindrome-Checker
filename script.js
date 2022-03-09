const textInput = document.querySelector(".inputs input"),
checkBtn = document.querySelector(".inputs button"),
infoTxt = document.querySelector(".info-txt");
let filterInput;

checkBtn.addEventListener("click", () => {
    //splitting user input charecter, reversing them,
    //and joining them in a single word
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if(filterInput != reverseInput) {
        return infoTxt.innerHTML = `No, <span> '${textInput.value}' </span> is NOT a palindrome!`
    }
    infoTxt.innerHTML = `Yes, <span>'${textInput.value}'</span> is a palindrome!`
})


textInput.addEventListener("keyup", () => {
    //removing all special charecters and spaces from the given entered values
    filterInput = textInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "")
    if(filterInput) {
        return checkBtn.classList.add("active");

    }
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");

})