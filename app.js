document.querySelector('button').addEventListener('click', calculateDistance)

// set map options
function calculateDistance(){
    const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${document.getElementById('from').value}&destinations=29.73317,-95.53036|29.83733,-95.78578|29.82379,-95.51773|29.69031,-95.14257|29.66733,-95.00992|29.65384,-95.48553|29.52821,-95.22296&key=AIzaSyDqicw8EWoGd0VS-CabUtzgS9NnxPZ9uwM`
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector("#Brittanie").innerText = data.rows[0].elements[0].duration.text
        document.querySelector("#Josie").innerText = data.rows[0].elements[1].duration.text
        document.querySelector("#Emily").innerText = data.rows[0].elements[2].duration.text
        document.querySelector("#Amanda").innerText = data.rows[0].elements[3].duration.text
        document.querySelector("#Cameo").innerText = data.rows[0].elements[4].duration.text
        document.querySelector("#Marie").innerText = data.rows[0].elements[5].duration.text
        document.querySelector("#Caitie").innerText = data.rows[0].elements[6].duration.text
    })
    .catch(error => {
        console.log(error.message)
    })
}

let options = {
    types: ['address']
}

let input1 = document.getElementById('from')
let autocomplete1 = new google.maps.places.Autocomplete(input1, options)
