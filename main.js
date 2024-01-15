var registerForm = document.querySelector(".registerForm");
var Result = document.querySelector(".result");
var res;

registerForm.onsubmit = function (e) {
  e.preventDefault();
  var element = e.target.elements;
  var Amout = element[0].value;
  var currency = element[1].value;

  if (currency == "dollar") {
    res = Amout * 3.74;
    Result.textContent = res;
  } else if (currency == "dinar") {
    res = Amout * 5.2;
    Result.textContent = res;
  } else {
    Result.textContent = Amout;
  }
};
