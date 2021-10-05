let num = document.getElementById("factorId");

document.getElementById("factorOutput").innerHTML = factorize(
  parseInt(num.value, 10)
);

num.addEventListener("keyup", (event) => {
  if (event.target.value)
    document.getElementById("factorOutput").innerHTML = factorize(
      parseInt(event.target.value, 10)
    );
});

function factorize(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorize(num - 1);
}
