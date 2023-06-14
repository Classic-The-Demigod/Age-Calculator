const birthdayInput = document.querySelector(".birthday-input");
const btn = document.querySelector(".btn");
const result = document.querySelector(".age-result");

const ageCalc = function () {
  const birthdayValue = birthdayInput.value;
  if (birthdayValue === "") {
    result.style.color = "red";
    result.innerText = "Please enter your birthday";
  } else {
    const age = getAge(birthdayValue);
    result.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
}
};

function getAge(birthdayValue) {
    const currentDate = new Date()
    const actualDate = new Date(birthdayValue)

    let age = currentDate.getFullYear() - actualDate.getFullYear()
    const monthDiff = currentDate.getMonth() - actualDate.getMonth()

    if (monthDiff < 0 || (monthDiff === 0 && actual.getDate() < birthDate.getDate())) {
        age--
    }
    return age
}

btn.addEventListener("click", ageCalc)
