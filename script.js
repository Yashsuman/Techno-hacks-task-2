function convertCurrency() {
    // Get the input values
    var amount = parseFloat(document.getElementById("amount").value);
    var fromCurrency = document.getElementById("fromCurrency").value;
    var toCurrency = document.getElementById("toCurrency").value;

    // Conversion rates (as of 1 USD = 75.5 INR and 1 USD = 0.85 EUR)
    var inrToUsdRate = 0.012;
    var usdToInrRate = 81.966;
    var usdToEurRate = 0.917;
    var eurToUsdRate = 1.091;

    // Perform the conversion
    var convertedAmount = 0;

    if (fromCurrency === "INR" && toCurrency === "USD") {
      convertedAmount = amount * inrToUsdRate;
    } else if (fromCurrency === "USD" && toCurrency === "INR") {
      convertedAmount = amount * usdToInrRate;
    } else if (fromCurrency === "USD" && toCurrency === "EUR") {
      convertedAmount = amount * usdToEurRate;
    } else if (fromCurrency === "EUR" && toCurrency === "USD") {
      convertedAmount = amount * eurToUsdRate;
    } else {
      convertedAmount = amount; // Same currency, no conversion needed
    }

    // Display the result
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML ="Result: "+ amount + " " + fromCurrency + " = " + convertedAmount.toFixed(3) + " " + toCurrency;
  } 