// When the window has finished loading create our google map below
// Khi cửa sổ trang load xong sẽ tạo một bản đồ vị trí cửa hàng
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // Các lựa chọn cơ bản cho bản đồ Google Maps
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        // zoom:... Thay đổi mức độ zoom ngay khi trang vừa xuất hiện
        // scrollwheel: true: Cho phép lăn chuột để phóng to, nhỏ trong bản đồ; scrollwheel: false :không cho phép lăn chuột trên bản đồ
        zoom: 16,
        scrollwheel: true,
        // The latitude and longitude to center the map (always required)
        // .LatLng(toạ độ) :Thay thế tâm vị trí hiện có bằng tâm vị trí mới là toạ độ của 279 Nguyễn Tri Phương
        center: new google.maps.LatLng(10.761050611733557, 106.66836208858237),
    };
    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    // Dựa vào id"map" đã gán ở contact.html
    var mapElement = document.getElementById('map');
    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    // Let's also add a marker while we're at it
    // Đồng thời thay đổi toạ độ dưới đây
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(10.761050611733557, 106.66836208858237),
        map: map,
    });
}