  
  var count =0;

   var btn= document.querySelector("#addtocart")
  
   btn.addEventListener("click",function(){

      
     
       var newqty =document.querySelector("#qty").value
     
       count += +newqty;
       console.log(count)
        newcount=document.getElementById("icount")
       newcount.textContent=count +" "+ "items in cart"

       var obj ={
          imgg :"https://www.uboric.com/wp-content/uploads/2021/01/DSC_0572_result.jpg",
          nam : " G.SERIES MEN’S CHAPPLE / SLIPPERS IN BLUE COLOUR",
          price:322,
          qty : count,
       }

      
      
      localStorage.setItem("pro1",JSON.stringify(obj))
   })


  
   

//    add.addEventListener("click",function(){
//     cartarray.push(data[index]);
//     localStorage.setItem("cartData", JSON.stringify(cartarray));
// })

//    function addtocart(product){
//        var selectedproduct = document.createElement('div')
//        var imgg = document.createElement("img");
//        imgg.setAttribute(src,"https://cdn01.pharmeasy.in/dam/products_otc/180461/venusia-max-intensive-moisturizing-cream-for-dry-very-dry-skin-tube-of-150-g-2-1641398613.jpg?dim=320x320&dpr=1&q=100")
//        selectedproduct.classList.add('cartimg');
//        selectedproduct.setAttribute("id",addproductId)

//        var cartname = document.getElementById("text").textContent
       
//        selectedproduct.appand(imgg,cartname)
//        document.querySelector("cartbody").append(selectedproduct)
 
//    }