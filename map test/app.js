// set map options

let mylatlng = { lat: 29.7604, lng: -95.3698}
let mapOptions = {
    center: mylatlng,
    zoom: 10,
}

//create Map

// const map = new google.maps.Map(document.getElementById('googleMap'), mapOptions)

function initMap() {
    const map = new google.maps.Map(document.getElementById('googleMap'), mapOptions)

    const caitieAddress = new google.maps.LatLng(29.52821, -95.22296)
    const brittanieAddress = new google.maps.LatLng(29.73317, -95.53036)
    const josieAddress = new google.maps.LatLng(29.83738, -95.78578)
    const emilyAddress = new google.maps.LatLng(29.82379, -95.51773)
    const amandaAddress = new google.maps.LatLng(29.69031, -95.14257)
    const cameoAddress = new google.maps.LatLng(29.66733, -95.00992)
    const marieAddress = new google.maps.LatLng(29.65384, -95.48553)

    const service = new google.maps.DistanceMatrixService()
    service.getDistanceMatrix(
        { origins: [document.getElementById('from').value],
          destinations: [caitieAddress, brittanieAddress, josieAddress, emilyAddress, amandaAddress, cameoAddress, marieAddress],
          travelMode: google.maps.TravelMode.DRIVING,
          unitSystem: google.maps.UnitSystem.IMPERIAL
        }, callback);
}

function callback(response, status) {
    if (status == 'OK') {
      var origins = response.originAddresses;
      var destinations = response.destinationAddresses;
  
      for (var i = 0; i < origins.length; i++) {
        var results = response.rows[i].elements;
        for (var j = 0; j < results.length; j++) {
          var element = results[j];
          var distance = element.distance.text;
          var duration = element.duration.text;
          var from = origins[i];
          var to = destinations[j];
        }
      }
    }
  }

window.initMap = initMap

// function calcRoute(){
    
//     //Organize the times and find the shortest time
//     allTimes = []
//     smallest = Math.min(...allTimes)

//     //Place response in the output
//     const output = document.querySelector('#output')
//     output.innerHTML = "<div class='alert-info'> From: " + document.getElementById('from').value + " .<br />To: The Closest Coordinator " + ".<br /> Duration <i class = 'fas fa-hourglass-start'></i>: " + smallest + ".</div>"
// }


//create autocomplete objects for all inputs

let options = {
    types: ['address']
}

let input1 = document.getElementById('from')
let autocomplete1 = new google.maps.places.Autocomplete(input1, options)

let input2 = document.getElementById('to')
let autocomplete2 = new google.maps.places.Autocomplete(input2, options)
