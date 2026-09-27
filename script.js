const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueToConverted = document.querySelector(".currency-value")
    
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.87
    const bitcoinToday = 439386.41

    if (currencySelect.value == "dolar"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR" 
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputCurrencyValue / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

convertValues()
}

const inputCurrency = document.querySelector(".input-currency")
inputCurrency.addEventListener("input", function(){
    convertButton.disabled = inputCurrency.value.trim() === ""
})

inputCurrency.addEventListener("keydown", function(event){
    if (event.key === "Enter" && !event.shiftKey){
        event.preventDefault()

        convertButton.click()
    }
})

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)