function converterTemperatura() {
    var celsius = parseFloat(document.getElementById("celsius").value);
  
    // Converter para Fahrenheit: (0 °C × 9/5) + 32
    var fahrenheit = (celsius * 9/5) + 32;
  
    // Converter para Kelvin: 0 °C + 273.15
    var kelvin = celsius + 273.15;
  
    document.getElementById("fahrenheit").textContent = fahrenheit.toFixed(2) + " °F";
    document.getElementById("kelvin").textContent = kelvin.toFixed(2) + " K";
  }  