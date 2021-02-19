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
  const userBirthday = userForm.elements.birthday.value;
  console.log(userBirthday);
  let birthdayArray = userBirthday.split("-");
  console.log(birthdayArray);
  let yy = birthdayArray[0];
  let mm = birthdayArray[1] - 1;
  let dd = birthdayArray[2];
  let dobj = new Date(yy, mm, dd);
  let dow = dobj.getDay();
  console.log(dow);
});
