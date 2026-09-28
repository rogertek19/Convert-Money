const convertButton = document.querySelector(".convert-button")
const currencySelectOne = document.querySelector(".currency-select-one")
const currencySelectTwo = document.querySelector(".currency-select-two")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueToConverted = document.querySelector(".currency-value")
    
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.87
    const bitcoinToday = 439386.41

    if (currencySelectOne.value == "dolar"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelectOne.value == "euro"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR" 
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelectOne.value == "libra"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelectOne.value == "bitcoin"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if (currencySelectOne.value == "real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (currencySelectTwo.value == "dolar"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelectTwo.value == "euro"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR" 
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelectTwo.value == "libra"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelectTwo.value == "bitcoin"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if (currencySelectTwo.value == "real"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }
}

function select(){
    const selectedValue = currencySelectOne.value

    if (currencySelectTwo.value === selectedValue){
        for (const option of currencySelectTwo.options){
            if (option.value !== selectedValue){
                currencySelectTwo.value = option.value
                break
            }
        }
    }

    for (const option of currencySelectTwo.options){
        option.hidden = option.value === selectedValue
    }
    changeCurrencyTwo()
}

function changeCurrencyOne(){
    const currencyName = document.querySelector("#currency-name-one")
    const currencyImage = document.querySelector(".currency-img-one")

    if (currencySelectOne.value == "real"){
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }

    if (currencySelectOne.value == "dolar"){
        currencyName.innerHTML = "Dólar"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelectOne.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelectOne.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelectOne.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    convertValues()
}

function changeCurrencyTwo(){
    const currencyName = document.querySelector("#currency-name-two")
    const currencyImage = document.querySelector(".currency-img-two")

    if (currencySelectTwo.value == "dolar"){
        currencyName.innerHTML = "Dólar"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelectTwo.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelectTwo.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelectTwo.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    if (currencySelectTwo.value == "real"){
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
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

currencySelectOne.addEventListener("change", select)
currencySelectOne.addEventListener("change", changeCurrencyOne)
currencySelectTwo.addEventListener("change", changeCurrencyTwo)
convertButton.addEventListener("click", convertValues)