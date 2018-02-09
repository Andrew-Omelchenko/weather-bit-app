function extractBase(urlString) {
  return urlString.split("?").slice(0, -1);
}

function parseLocation(urlString) {
  let parsed = new URL(urlString);
  return parsed.searchParams.get("city");
}

function toFahrenheit(value) {
  return Math.round(value * 1.8 + 32);
}

function toCelsius(value) {
  return Math.round((value - 32) / 1.8);
}

function toMph(value) {
  return Math.round(value * 2.25);
}

function toMs(value) {
  return Math.round(value / 2.25);
}

function clearSelect(selectId) {
  while (selectId.firstChild) {
    selectId.removeChild(selectId.firstChild);
  }
}

function populateSelect(doc, selectId, data, direction) {
  let opt = null;
  if (direction == "normal") {
    for (let elem of data) {
      opt = doc.createElement("option");
      opt.value = elem;
      selectId.appendChild(opt);
    }
  } else if (direction == "reverse") {
    for (let i = data.length - 1; i >= 0; i--) {
      opt = doc.createElement("option");
      opt.value = data[i];
      selectId.appendChild(opt);
    }
  }
}
