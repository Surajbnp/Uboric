
  document.querySelector("form").addEventListener("submit", todoList);
  
  //createTable(todoArr);
  // window.addEventListener("load", function () {
  //   createTable(addressArr);
  // });
  function todoList(event) {
    // var fulladd = JSON.parse(localStorage.getItem("Newaddress"))||[]
    event.preventDefault();
    var name = document.querySelector("#name").value;
    var mobile = document.querySelector("#Mnum").value;
    var address = document.querySelector("#addres").value;
    var pincode = document.querySelector("#pin").value;
    var atype = document.querySelector("#atype").value;
    //----------------------------------------------------
    var AddressList = { 
      perName: name, 
      perMobile : mobile,
      perAdd :address,
      perPIn : pincode,
      perAtype : atype
    };
    
    localStorage.setItem("Newaddress", JSON.stringify(AddressList));
    console.log(fulladd)
    //----------------------------------------------------
    // createTable(todoArr);
  }
 
  // document.querySelector("gotocart").addEventListener("click", onChange);
  // function onchange(){
  //   var fulladd =[]
  //   localStorage.setItem("Newaddress", JSON.stringify(fulladd));
  // }

