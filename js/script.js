let text = document.querySelector(".h1");
TypJs(text);
function TypJs(text) {
  let inner = text.innerHTML;
  text.innerHTML = "";
  let count = 0;
  function typUp() {
    text.innerHTML += inner.charAt(count);
    count++;
    console.log(count);
    if (inner.length + 1 == count) {
      text.innerHTML = "";
      count = -1;
    }
  }
  let stop = setInterval(() => {
    typUp();
  }, 400);
}

let ptext = document.querySelector("p");
TypJs(ptext);
