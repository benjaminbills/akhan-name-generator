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
console.log(userForm);
console.log(gendersValue);
