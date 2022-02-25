

// Product information
var Total;

prod()

function prod(){
    var data = JSON.parse(localStorage.getItem("pro1"));

 if(data !== "") {
    console.log(data)
var imgg = document.querySelector(".imgdiv")
imgg.src= data.imgg;
console.log(imgg)

var namee = document.querySelector("#n")
namee.textContent= data.nam;

var rate = document.querySelector("#p")
rate.textContent="Price - " +" " + data.price;

var Qty = document.querySelector("#q")
Qty.textContent= "Quantity - " +" " + data.qty;

Total = data.price* data.qty
var total = document.querySelector("#t")
total.textContent = "Total Price - " + " " + Total ;

var it = document.querySelector("h3")
it.textContent= data.qty + " " + "items in cart"



var del = document.querySelector("#delete")
del.innerHTML = `<i class="fas fa-trash-alt"></i>`


// document.querySelector(".imgdiv").append(imgg);
document.querySelector(".textdiv").append(namee,rate,Qty,total);
document.querySelector("#main").append(del);
document.querySelector("#h3").append(it);

del.addEventListener("click",function(){
    data = "";
   
    localStorage.setItem("pro1", JSON.stringify(data));
    it.textContent= data.qty + " " + "items in cart"
    location.reload();
})

    }
    }   


    // Address input


var addres = JSON.parse(localStorage.getItem("Newaddress"));
console.log(addres)

var nam = document.createElement("p")
nam.textContent = addres.perName

var mobile = document.createElement("p")
mobile.textContent = addres.perMobile

var adde = document.createElement("p")
adde.textContent = addres.perAdd

var pin = document.createElement("p")
pin.textContent = addres.perPIn

document.querySelector("#addressadded").append(nam,mobile,adde,pin);

    
//   <!-- promo code -->

  document.querySelector("#promobutton").addEventListener("click", function(){
    if(pcode.value == "masai30"){
        // console.log(Total)
        Total = Math.floor((Total*70)/100);
        // console.log(total)
        var total = document.querySelector("#t")
        total.textContent = "Total Price - " + " " + Total ;
        alert("Congratulations,You get 30% OFF");
        localStorage.setItem("finalprice", JSON.stringify(Total));

    }
    else{
        alert("error");
    }
})