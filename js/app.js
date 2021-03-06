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
  //Declare arrays of data to be used
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
  //getting data from user
  const userBirthday = userForm.elements.birthday.value;
  let birthdayArray = userBirthday.split("-");
  let yy = birthdayArray[0];
  let mm = birthdayArray[1] - 1;
  let dd = birthdayArray[2];
  let date = new Date(yy, mm, dd);
  let dayNum = date.getDay();
  let dayOfweek = days[dayNum];
  //validation
  if (userBirthday === "" && gendersValue() === false) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Put in correct birthday date and select gender",
    });
  }
  if (userBirthday === "" && gendersValue()) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Put in correct birthday date",
    });
  }
  if (gendersValue() === false && userBirthday) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please select a gender",
    });
  }
  //Check gender type and assign values to output
  const output = `You were born on ${dayOfweek} and your Akan name is :`;
  if (gendersValue() === "male" && !userBirthday == "") {
    newName = maleNames[dayNum];
    resultContainer.innerText = `${output} ${newName}`;
    userForm.reset();
  }

  if (gendersValue() === "female" && !userBirthday == "") {
    newName = femaleNames[dayNum];
    resultContainer.innerText = `${output} ${newName}`;
    userForm.reset();
  }
});
