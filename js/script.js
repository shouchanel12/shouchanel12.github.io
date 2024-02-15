function convertTemperature() {
    var inputElement = document.getElementById('inputTemperature');
    var temperatureValue = inputElement.value.trim();
    var temperatureScale = document.getElementById('temperatureScale').value;
    var resultElement = document.getElementById('result');
    var formulaElement = document.getElementById('formula');

    if (!temperatureValue || isNaN(temperatureValue)) {
        alert('Silakan masukkan suhu dalam bentuk angka yang valid.');
        return;
    }

    var temperature = parseFloat(temperatureValue);
    var result = 0;
    var formula = '';

    if (temperatureScale === 'toCelsius') {
        result = (temperature - 32) * 5 / 9;
        formula = temperature + '°F = ' + result.toFixed(2) + '°C';
    } else if (temperatureScale === 'toFahrenheit') {
        result = (temperature * 9 / 5) + 32;
        formula = temperature + '°C = ' + result.toFixed(2) + '°F';
    }

    resultElement.innerHTML = 'Hasil: ' + result.toFixed(2);
    formulaElement.innerHTML = 'Rumus: ' + formula;
}

function reverseConversion() {
    var selectElement = document.getElementById('temperatureScale');
    selectElement.value = selectElement.value === 'toCelsius' ? 'toFahrenheit' : 'toCelsius';
}

function resetForm() {
    document.getElementById('inputTemperature').value = '';
    document.getElementById('result').innerHTML = 'Hasil: -';
    document.getElementById('formula').innerHTML = 'Rumus: -';
}
