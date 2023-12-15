// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 12,
        scrollwheel: false,
        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(37.393322, -122.023780),
    };
    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');
    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(37.393322, -122.023780),
        map: map,
    });
}
//-------------------------Delete cart-------------------------
function deleteCart(){
    var carItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<carItem.length;i++){
        var product = document/querySelectorAll(".cart-delete")
        productT[i].addEventListener("click", function(event){
            var cartDelete = event.target
            var cartitemR = cartDelete.parentElement.parentElement
            cartitemR.remove()
            //cosole.log(caritemR)
        })
    }
}
// thay đổi số lượng sản phẩm
var quantity_input = document.getElementsByClassName("cart-quantity-input");
for (var i = 0; i < quantity_input.length; i++) {
  var input = quantity_input[i];
  input.addEventListener("change", function (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}

carttotal()
//----------------Tính tổng-----------------
function carttotal(){
  var carItem = document.querySelectorAll("tbody tr")
  var totalC = 0 
  //console.log(carItem.length)
  for (var i=0;i<carItem.length;i++){
    var inputValue = carItem[i].querySelector("input").value
    //console.log(inputValue)
    var productPrice = carItem[i].querySelector("span").innerHTML
    //console.log(productPrice)
    totalA = inputValue*productPrice*1000
    totalB = totalA.toLocaleString('de-DE')
    console.log(totalB)
    totalC = totalC + totalA
    totalD = totalC.toLocaleString(de-DE)
  }
  var carttotalA = document.querySelector(".o-summary__box td")
  carttotalA.innerHTML = totalD
  console.log(carttotalA)
}
tinhTong()


function addCart(objSp){
  cell3.innerHTML = objSp.price * objSp.qty;
  tong += objSp.price * objSp.qty;
}
function tinhTong(){
  var tong = 0;
  giohang.forEach(item => {
    tong += item.price * item.qty;
  })
  document.getElementById("tong").innerHTML = tong;
}
