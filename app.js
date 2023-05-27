const input = document.querySelector("#input-value");
const button = document.querySelector(".btn");
const error = document.querySelector(".error");
const thankyou = document.querySelector(".thankyou");
const row = document.querySelector(".row");
const dismis = document.querySelector(".dismis");
const paragraf = document.querySelector(".paragraf");
const lds = document.querySelector(".lds-roller")



button.addEventListener("click", () => {
    danger();
});

function danger() {
    const tikla = input.value;
    if (tikla === "") {
        error.innerHTML = "Cannot be blank";
        input.style.backgroundColor="hsl(4, 77%, 79%)"

    } else if (!isValidEmail(tikla)) {
        error.innerHTML = "Please enter a valid e-mail address";
        input.style.backgroundColor="hsl(4, 77%, 79%)"
    }else{
        error.innerHTML = "Thank you ";
        input.style.backgroundColor="green"
        element()
    elementparagraf()

    }
}

function isValidEmail(email) {
    // E-posta adresi doğrulama mantığını burada gerçekleştirin.
    // Bu örnekte basit bir doğrulama yapılacak.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function element() {
    lds.style.display = "block";
    row.style.display = "none";
    setTimeout(() => {
      lds.style.display = "none";
      thankyou.style.display = "block";
    }, 3000);
  }

dismis.addEventListener("click",()=>{
    newelement()
})
function newelement() {
    lds.style.display = "block";
    thankyou.style.display = "none";

    setTimeout(() => {
      row.style.display = "block";
      lds.style.display = "none";
      row.style.display = "flex";
    }, 3000);
  }

  function elementparagraf(){
    const tikla = input.value;
        const parag = document.createElement("p")
        parag.classList.add("paragraf")
        paragraf.appendChild(parag)
        parag.innerHTML=`A confirmation email has been sent to ${tikla}.Please open it and click the button inside to confirm your subsciription`
  }