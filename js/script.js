function updateTime() {
  //london
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = moment().format("dddd MMMM Do");
  londonTimeElement.innerHTML = `${londonTime.format("HH:mm:ss")}`;

  //ibiza
  let ibizaElement = document.querySelector("#ibiza");
  let ibizaDateElement = ibizaElement.querySelector(".date");
  let ibizaTimeElement = ibizaElement.querySelector(".time");
  let ibizaTime = moment().tz("Europe/Madrid");

  ibizaDateElement.innerHTML = moment().format("dddd MMMM Do");
  ibizaTimeElement.innerHTML = `${ibizaTime.format("HH:mm:ss")}`;

  //new york
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = moment().format("dddd MMMM Do");
  newYorkTimeElement.innerHTML = `${newYorkTime.format("HH:mm:ss")}`;

  //brisbane
  let brisbaneElement = document.querySelector("#brisbane");
  let brisbaneDateElement = brisbaneElement.querySelector(".date");
  let brisbaneTimeElement = brisbaneElement.querySelector(".time");
  let brisbaneTime = moment().tz("Australia/Brisbane");

  brisbaneDateElement.innerHTML = moment().format("dddd MMMM Do");
  brisbaneTimeElement.innerHTML = `${brisbaneTime.format("HH:mm:ss")}`;
}

function updateCity(event) {
  let locationTimeZone = event.target.value;
  let locationName = locationTimeZone.replace("").split("/")[1];
  let locationTime = moment().tz(locationTimeZone);
  let locationsElement = document.querySelector("#locations");
  locationsElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${locationName}</h2>
            <div class="date">${locationTime.format("dddd MMMM Do")}</div>
          </div>
          <div class="time">${locationTime.format("HH:mm:ss")}</div>
        </div>
        `;
}

updateTime();
setInterval(updateTime, 1000);

let locationsSelectElement = document.querySelector("#location");

locationsSelectElement.addEventListener("change", updateCity);
