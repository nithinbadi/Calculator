const view1 = document.getElementsByClassName("view1");
const view2 = document.getElementsByClassName("view2");

const numbers = document.querySelectorAll("button");
let result = "";
let ans = 0;

numbers.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.innerText === "=") {
      //evaluate expression
      if (result.includes("Ans") === true) result = result.replace("Ans", ans);
      ans = eval(result);
      view2[0].innerText = ans;
      view1[0].innerText = "";
    } else {
      if (event.target.innerText === "C") {
        view1[0].innerText = "";
        view2[0].innerText = "";
      } else {
        view1[0].innerText += event.target.innerText;
        result = view1[0].innerText;
      }
    }
  });
});
