prod()
var Total;
var data;
function prod(){
    data = JSON.parse(localStorage.getItem("pro1"));
    da = JSON.parse(localStorage.getItem("finalprice"));

 if(data !== "") {
    console.log(da)

var namee = document.querySelector("#n")
namee.textContent= data.nam;

var rate = document.querySelector("#p")
rate.textContent="Price - " +" " + data.price;

var Qty = document.querySelector("#q")
Qty.textContent= "Quantity - " +" " + data.qty;

Total = data.price* data.qty
total = document.querySelector("#t")
total.textContent = "Total Price - " + " " + da ;

document.querySelector(".textdiv").append(namee,rate,Qty,total);

    }
    }   

var cashadd =  document.querySelector("#Cash")
cashadd.addEventListener("click",function(){
        
        Total = Total +29;
        console.log(total)
        var total = document.querySelector("#t")
        total.textContent = "Total Price - " + " " + Total ;
        alert(" Rs.29 Added");
        // location.reload();
    })


    document.querySelector(".caddtocart").addEventListener("click", function(){
        window.location.href = "Homepage.html";
}) 

