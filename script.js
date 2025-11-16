function bmi() {
    const yourname = document.getElementById("name").value;
    const weightInput = parseFloat(document.getElementById("weight").value);
    const heightInput = parseFloat(document.getElementById("height").value);
    const result = document.getElementById("result");

    if (!yourname || isNaN(weightInput) || isNaN(heightInput) || weightInput <= 0 || heightInput <= 0) {
        result.textContent = "Please enter valid values!";
        result.style.color = "red";
        return;
    }
    const height = heightInput / 100;
    let bmi = weightInput / (height * height);
    let category = "";
    let color = "";

    if (bmi < 18.5) {
        category = "Underweight";
        color = "orange";
    } else if (bmi < 25) {
        category = "Normal";
        color = "green";
    } else if (bmi < 30) {
        category = "Overweight";
        color = "rgb(255,165,0)";
    } else {
        category = "Obese";
        color = "red";
    }

    result.textContent = `${yourname.toUpperCase()}, Your BMI is ${bmi.toFixed(2)} (${category})`;
    result.style.color = color;

    document.querySelector("form").reset();
}
