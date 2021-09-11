const showMoreElement = document.querySelector(".showMoreText")
const showMoreClicker = document.querySelector(".showMoreClicker")
showMore = () => {
    if (showMoreElement.style.display === "none") {
        showMoreElement.style.display = "inline"
        showMoreClicker.innerHTML = "Read less";
    } else {
        showMoreElement.style.display = "none"
        showMoreClicker.innerHTML = "Read more";
    }
}

const formCheckInput = document.querySelector("#flexCheckDefault")
const buttonSubmitInput = document.querySelector("#submitButton")

buttonShow = () => {
    if (formCheckInput.checked === false) {
        buttonSubmitInput.disabled = true
        buttonSubmitInput.classList.add('btn-secondary')
        buttonSubmitInput.classList.remove('btn-primary')

    } else {
        buttonSubmitInput.disabled = false;
        buttonSubmitInput.classList.remove('btn-secondary')
        buttonSubmitInput.classList.add('btn-primary')
    }
}

const submitSuccessMessage = document.querySelector("#submitSuccessMessage")
buttonAfterSubmition = () => {
    buttonSubmitInput.style.display = 'none'
    submitSuccessMessage.classList.remove('d-none')

}

