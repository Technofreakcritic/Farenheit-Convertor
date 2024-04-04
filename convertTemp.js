document.body.innerHTML = document.body.innerHTML.replace(/(-?\d+(?:\.\d+)?)\s*°?\s*(degrees)?\s*Fahrenheit|(-?\d+(?:\.\d+)?)\s*°?\s*F\b/gi, function(match, num1, _, num2) {
    // Check which capturing group got matched. Use num1 for the verbose match, num2 for the original pattern
    let num = num1 || num2;
    let celsius = ((parseFloat(num) - 32) * 5 / 9).toFixed(0); // Using toFixed(0) to not have decimal places for simplicity
    return `${num}°F (${celsius}°C)`;
  });
  