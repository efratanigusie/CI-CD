function performCalculation(operation) {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;

  fetch("http://localhost:5000/calculate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      num1: parseFloat(num1),
      num2: parseFloat(num2),
      operation,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("result").innerText = data.result;
    })
    .catch((error) => console.error("Error:", error));
}
