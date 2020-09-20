// declaration des variables
let likeBtn = document.querySelectorAll(".like-btn");

let plusBtn = document.querySelectorAll(".fa-plus");

let minusBtn = document.querySelectorAll(".fa-minus");

let itemp = document.querySelectorAll(".itemprice");

let itemVal = document.querySelectorAll(".itemval");

let totalprices = document.getElementById("totalPrice");

let rmvBtn = document.querySelectorAll(".rmv-btn");


function ttp() {
    let itemVal = document.querySelectorAll(".itemval");
    console.log(itemVal)
    let priceArr = Array.from(itemVal);
    let sum = 0;
    for (let i = 0; i < priceArr.length; i++) {

        sum += Number(priceArr[i].innerHTML)
    }
    totalprices.innerHTML = sum;
}
for (let i = 0; i < plusBtn.length; i++) {
    plusBtn[i].addEventListener("click", function() {
        plusBtn[i].parentElement.previousElementSibling.value++;
        itemVal[i].innerHTML =
            parseInt(itemVal[i].innerHTML) + parseInt(itemp[i].innerHTML);
        ttp();
    });
}
for (let i = 0; i < minusBtn.length; i++) {
    minusBtn[i].addEventListener("click", function() {
        if (minusBtn[i].parentElement.nextElementSibling.value <= 0) {
            minusBtn[i].parentElement.nextElementSibling.value = 0;
            alert("Negative quantity not allowed");
        } else {
            minusBtn[i].parentElement.nextElementSibling.value--;
            itemVal[i].innerHTML =
                parseInt(itemVal[i].innerHTML) - parseInt(itemp[i].innerHTML);
            ttp();
        }
    });
}
for (let i = 0; i < likeBtn.length; i++) {
    likeBtn[i].addEventListener("click", function() {
        if (likeBtn[i].style.color == "grey") likeBtn[i].style.color = "red";
        else likeBtn[i].style.color = "grey";
    });
}
for (let i = 0; i < rmvBtn.length; i++) {
    rmvBtn[i].addEventListener("click", function() {
        rmvBtn[i].parentElement.parentElement.remove()
        ttp();
    });
}