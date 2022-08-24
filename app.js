// phil welsby - 24 aug 2022

//Function to get location of ISS
async function getLocation () {
        while (true) {
                const response = await fetch('http://api.open-notify.org/iss-now.json');
                const location = await response.json();
                document.getElementById('lat').innerHTML = `Lattitude: ${location.iss_position.latitude}`;
                document.getElementById('lon').innerHTML = `Longitude: ${location.iss_position.longitude}`;
        }
}


//Function to get names of people currently in space
let count = 0;
async function loadNames() {
    count++;
    if (count >1) {
        return;
    }
    const response = await fetch('http://api.open-notify.org/astros.json');
    const names = await response.json();
    console.log(`Number of people currently in space is ${names.number}`);
    for (i=0; i<names.people.length; i++) {
        const para = document.createElement("h3");
        para.innerHTML = `${names.people[i].name} aboard the ${names.people[i].craft}`;
        document.getElementById("names").appendChild(para);
    }
  }
  