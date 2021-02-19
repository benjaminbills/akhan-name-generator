const userForm = document.querySelector("#userForm");
const resultContainer = document.querySelector("#result");
const gendersValue = () => {
  if (document.getElementById("male").checked) {
    return document.getElementById("male").value;
  }
  if (document.getElementById("female").checked) {
    return document.getElementById("female").value;
  }
  return false;
};
userForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const userBirthday = userForm.elements.birthday.value;
  console.log(userBirthday);
  let birthdayArray = userBirthday.split("-");
  console.log(birthdayArray);
  let yy = birthdayArray[0];
  let mm = birthdayArray[1] - 1;
  let dd = birthdayArray[2];
  let date = new Date(yy, mm, dd);
  let dayNum = date.getDay();
  let dayOfweek = days[dayNum];

  const output = `You were born on ${dayOfweek} and your Akan name is :`;

  if (userBirthday === "") {
    alert("Put in correct birthday");
  }
  if (gendersValue() === false) {
    alert("Please select a gender");
  }

  if (gendersValue() === "male") {
    newName = maleNames[dayNum];
    resultContainer.innerText = `${output} ${newName}`;
    userForm.reset();
  }

  if (gendersValue() === "female") {
    newName = femaleNames[dayNum];
    resultContainer.innerText = `${output} ${newName}`;
    userForm.reset();
  }
});
