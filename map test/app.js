// set map options

let mylatlng = { lat: 29.7604, lng: -95.3698}
let mapOptions = {
    center: mylatlng,
    zoom: 10,
    mapId: "197e4e157a73fc6f",
    mapTypeId: google.maps.MapTypeId.ROADMAP
}

//create Map

const map = new google.maps.Map(document.getElementById('googleMap'), mapOptions)

//markers 

function initMap() {

    const brittanie = document.createElement('div')

    brittanie.className = 'tag'
    brittanie.textContent = "Brittanie"

    const brittanieMarker = new google.maps.marker.AdvancedMarkerView({
      map,
      position: { lat: 29.73317, lng: -95.53036 },
      content: brittanie
    });

    const caitie = document.createElement('div')

    caitie.className = 'tag'
    caitie.textContent = "Caitie"

    const caitieMarker = new google.maps.marker.AdvancedMarkerView({
      map,
      position: { lat: 29.52821, lng: -95.22296 },
      content: caitie
    });

    const amanda = document.createElement('div')

    amanda.className = 'tag'
    amanda.textContent = "Amanda"

    const amandaMarker = new google.maps.marker.AdvancedMarkerView({
      map,
      position: { lat: 29.69031, lng: -95.14257 },
      content: amanda
    });

    const emily = document.createElement('div')

    emily.className = 'tag'
    emily.textContent = "Emily"

    const emilyMarker = new google.maps.marker.AdvancedMarkerView({
      map,
      position: { lat: 29.82379, lng: -95.51773 },
      content: emily
    });

    const cameo = document.createElement('div')

    cameo.className = 'tag'
    cameo.textContent = "Cameo"

    const cameoMarker = new google.maps.marker.AdvancedMarkerView({
      map,
      position: { lat: 29.66733, lng: -95.00992 },
      content: cameo
    });

    const josie = document.createElement('div')

    josie.className = 'tag'
    josie.textContent = "Josie"

    const josieMarker = new google.maps.marker.AdvancedMarkerView({
      map,
      position: { lat: 29.83738, lng: -95.78578 },
      content: josie
    });

    const marie = document.createElement('div')

    marie.className = 'tag'
    marie.textContent = 'Marie'

    const marieMarker = new google.maps.marker.AdvancedMarkerView({
        map,
        position: { lat: 29.65384, lng: -95.48553 },
        content: marie
      });

  }
  
window.initMap = initMap;

//create a Directions service object to use the route method and get a result for our request

const directionsService = new google.maps.DirectionsService()

//create a DirectionsRenderer object which we will use to display the route

const directionsDisplay = new google.maps.DirectionsRenderer()

//bind the directionsRenderer to the map

directionsDisplay.setMap(map)


const caitieAddress = new google.maps.LatLng(29.52821, -95.22296)
const brittanieAddress = new google.maps.LatLng(29.73317, -95.53036)
const josieAddress = new google.maps.LatLng(29.83738, -95.78578)
const emilyAddress = new google.maps.LatLng(29.82379, -95.51773)
const amandaAddress = new google.maps.LatLng(29.69031, -95.14257)
const cameoAddress = new google.maps.LatLng(29.66733, -95.00992)
const marieAddress = new google.maps.LatLng(29.65384, -95.48553)


function calcRoute(){
    // Map the times of the 'from' to each coordinator

    //create request
    let requestCaitie = {
        origin: document.getElementById('from').value, 
        destination: caitieAddress,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL
    }

    //pass the request to the route method
    directionsService.route(requestCaitie, (result, status) => {
        if (status == google.maps.DirectionsStatus.OK){
            caitieTime = result.routes[0].legs[0].duration.text
            caitieArr = caitieTime.split(" ")
            allTimes.push(Number(caitieArr[0]))
        }
    })

    let requestBrittanie = {
        origin: document.getElementById('from').value, 
        destination: brittanieAddress,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL
    }

    //pass the request to the route method
    directionsService.route(requestBrittanie, (result, status) => {
        if (status == google.maps.DirectionsStatus.OK){
            brittanieTime = result.routes[0].legs[0].duration.text
            brittanieArr = brittanieTime.split(" ")
            allTimes.push(Number(brittanieArr[0]))
        }
    })

    let requestJosie = {
        origin: document.getElementById('from').value, 
        destination: josieAddress,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL
    }

    //pass the request to the route method
    directionsService.route(requestJosie, (result, status) => {
        if (status == google.maps.DirectionsStatus.OK){
            josieTime = result.routes[0].legs[0].duration.text
            josieArr = josieTime.split(" ")
            allTimes.push(Number(josieArr[0]))
        }
    })

    let requestEmily = {
        origin: document.getElementById('from').value, 
        destination: emilyAddress,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL
    }

    //pass the request to the route method
    directionsService.route(requestEmily, (result, status) => {
        if (status == google.maps.DirectionsStatus.OK){
            emilyTime = result.routes[0].legs[0].duration.text
            emilyArr = emilyTime.split(" ")
            allTimes.push(Number(emilyArr[0]))
        }
    })

    let requestAmanda = {
        origin: document.getElementById('from').value, 
        destination: amandaAddress,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL
    }

    //pass the request to the route method
    directionsService.route(requestAmanda, (result, status) => {
        if (status == google.maps.DirectionsStatus.OK){
            amandaTime = result.routes[0].legs[0].duration.text
            amandaArr = amandaTime.split(" ")
            allTimes.push(Number(amandaArr[0]))
        }
    })

    let requestCameo = {
        origin: document.getElementById('from').value, 
        destination: cameoAddress,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL
    }

    //pass the request to the route method
    directionsService.route(requestCameo, (result, status) => {
        if (status == google.maps.DirectionsStatus.OK){
            cameoTime = result.routes[0].legs[0].duration.text
            cameoArr = cameoTime.split(" ")
            allTimes.push(Number(cameoArr[0]))
        }
    })

    let requestMarie = {
        origin: document.getElementById('from').value, 
        destination: marieAddress,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL
    }

    //pass the request to the route method
    directionsService.route(requestMarie, (result, status) => {
        if (status == google.maps.DirectionsStatus.OK){
            marieTime = result.routes[0].legs[0].duration.text
            marieArr = marieTime.split(" ")
            allTimes.push(Number(marieArr[0]))
        }
    })    

    //Organize the times and find the shortest time
    allTimes = []
    smallest = Math.min(...allTimes)

    //Place response in the output
    const output = document.querySelector('#output')
    output.innerHTML = "<div class='alert-info'> From: " + document.getElementById('from').value + " .<br />To: The Closest Coordinator " + ".<br /> Duration <i class = 'fas fa-hourglass-start'></i>: " + smallest + ".</div>"
}


//create autocomplete objects for all inputs

let options = {
    types: ['address']
}

let input1 = document.getElementById('from')
let autocomplete1 = new google.maps.places.Autocomplete(input1, options)

let input2 = document.getElementById('to')
let autocomplete2 = new google.maps.places.Autocomplete(input2, options)


// let request = {
//     origin: document.getElementById('from').value, 
//     destination: caitieAddress,
//     travelMode: google.maps.TravelMode.DRIVING,
//     unitSystem: google.maps.UnitSystem.IMPERIAL
// }

// //pass the request to the route method
// directionsService.route(request, (result, status) => {
//     if (status == google.maps.DirectionsStatus.OK){
//         // get distance and time
//         const output = document.querySelector('#output')
//         output.innerHTML = "<div class='alert-info'> From: " + document.getElementById('from').value + " .<br />To: " + document.getElementById('to').value + ".<br/ > Driving distance <i class = 'fas fa-road'></i>:" + result.routes[0].legs[0].distance.text + ".<br /> Duration <i class = 'fas fa-hourglass-start'></i>: " + result.routes[0].legs[0].duration.text + ".</div>"

//         //display route
//         directionsDisplay.setDirections(result)
//     }else{
//         // delete route from map
//         directionsDisplay.setDirections({ routes: []})

//         //center map in Houston
//         map.setCenter(mylatlng)

//         //show error message
//         output.innerHTML = "<div class = 'alert-danger'><i class ='fas fa-exclamation-triangle'></i> Could not retrieve driving distance. </div>"
//     }
// })