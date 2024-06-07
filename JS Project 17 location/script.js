var loc = document.getElementsByClassName('location')[0]; // Get the first element with the class 'location'
const btn = document.getElementById('btn');
btn.addEventListener('click', getLocation);

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            geoLocationSuccess,
            geoLocationError,
            { timeout: 10000 }
        );
    } else {
        alert("Your browser doesn't support geolocation");
    }
}

function geoLocationSuccess(pos) {
    var myLat = pos.coords.latitude,
        myLng = pos.coords.longitude;
    var loadingTimeout;

    function loading() {
        loc.textContent = "Fetching...";
    }

    loadingTimeout = setTimeout(loading, 600);

    $.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${myLat}&lon=${myLng}`)
        .done(function (data) {
            if (loadingTimeout) {
                clearTimeout(loadingTimeout);
                loadingTimeout = null;
                const locationElement = document.createElement('h3');
                locationElement.textContent = data.display_name;
                loc.appendChild(locationElement); // Append the new element to the location div
            }
        })
        .fail(function () {
            loc.textContent = "Failed to retrieve location";
        });
}

function geoLocationError(error) {
    var errors = {
        1: "Permission denied",
        2: "Position unavailable",
        3: "Request timeout"
    };
    alert("Error: " + errors[error.code]);
}



