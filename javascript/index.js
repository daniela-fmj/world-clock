function updateTime() {
  {
    //Sydney
    let sydneyElement = document.querySelector("#sydney");

    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("dddd, MMMM Do, YYYY");
    sydneyTimeElement.innerHTML = ` ${sydneyTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;

    //Lisbon
    let lisbonElement = document.querySelector("#lisbon");

    let lisbonDateElement = lisbonElement.querySelector(".date");
    let lisbonTimeElement = lisbonElement.querySelector(".time");
    let lisbonTime = moment().tz("Europe/Lisbon");

    lisbonDateElement.innerHTML = lisbonTime.format("dddd, MMMM Do, YYYY");
    lisbonTimeElement.innerHTML = ` ${lisbonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;

    //Boston
    let bostonElement = document.querySelector("#boston");

    let bostonDateElement = bostonElement.querySelector(".date");
    let bostonTimeElement = bostonElement.querySelector(".time");
    let bostonTime = moment().tz("America/New_York");

    bostonDateElement.innerHTML = bostonTime.format("dddd, MMMM Do, YYYY");
    bostonTimeElement.innerHTML = ` ${bostonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;

    //Ann Arbor
    let detroitElement = document.querySelector("#detroit");

    let detroitDateElement = detroitElement.querySelector(".date");
    let detroitTimeElement = detroitElement.querySelector(".time");
    let detroitTime = moment().tz("America/Detroit");

    detroitDateElement.innerHTML = detroitTime.format("dddd, MMMM Do, YYYY");
    detroitTimeElement.innerHTML = ` ${detroitTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;

    //Mexico City
    let cdmxElement = document.querySelector("#mexico-city");

    let cdmxDateElement = cdmxElement.querySelector(".date");
    let cdmxTimeElement = cdmxElement.querySelector(".time");
    let cdmxTime = moment().tz("America/Mexico_City");

    cdmxDateElement.innerHTML = cdmxTime.format("dddd, MMMM Do, YYYY");
    cdmxTimeElement.innerHTML = ` ${cdmxTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;

    //Portland
    let portlandElement = document.querySelector("#portland");

    let portlandDateElement = portlandElement.querySelector(".date");
    let portlandTimeElement = portlandElement.querySelector(".time");
    let portlandTime = moment().tz("America/Los_Angeles");

    portlandDateElement.innerHTML = portlandTime.format("dddd, MMMM Do, YYYY");
    portlandTimeElement.innerHTML = ` ${portlandTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  console.log(cityName);
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("dddd, MMMM Do, YYYY")}</div>
      </div>
      <div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
      </div>
    </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
