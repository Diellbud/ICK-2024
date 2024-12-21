// F = C * 1.8 + 32

const convertCelciusToFarenheit = (celciusValue) => {
    return celciusValue * 1.8 + 32
}

const x = convertCelciusToFarenheit(10)
console.log(x)
const y = convertCelciusToFarenheit(20)
console.log(y)

// 1km * 0.621371 mi

const convertKilometersToMiles = (KilometerValue) => {
    return KilometerValue / 1.6093
}

const x1 = convertKilometersToMiles(10)
console.log(x1)
const y2 = convertKilometersToMiles(20)
console.log(y2)
