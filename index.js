fetch("https://api.coincap.io/v2/assets").then((response) =>
  response.json().then(function (data) {
    let datayeman = data.data;
    datayeman.forEach((element) => {
      renderItems(element);
    });
  })
);
function renderItems(element) {
  let mainFirst = document.querySelector("main .container .main-first");
  let mainContent = document.createElement("a");
  let leftInfo = document.createElement("div");
  let info = document.createElement("div");
  let rank = document.createElement("span");
  let names = document.createElement("div");
  let icon = document.createElement("img");
  let id = document.createElement("span");
  let name = document.createElement("span");
  let symbol = document.createElement("span");
  let price = document.createElement("span");
  let marketCap = document.createElement("span");
  let VWAP = document.createElement("span");
  let supply = document.createElement("span");
  let volume = document.createElement("span");
  let change = document.createElement("span");
  mainContent.setAttribute("href", "#");
  mainFirst.appendChild(mainContent);
  mainContent.appendChild(leftInfo);
  mainContent.appendChild(info);
  leftInfo.appendChild(rank);
  leftInfo.appendChild(names);
  names.appendChild(icon);
  names.appendChild(id);
  id.appendChild(name);
  id.appendChild(symbol);
  info.appendChild(price);
  info.appendChild(marketCap);
  info.appendChild(VWAP);
  info.appendChild(supply);
  info.appendChild(volume);
  info.appendChild(change);
  info.classList.add("main-info");
  rank.classList.add("rank");
  leftInfo.classList.add("left-info");
  names.classList.add("names");
  id.classList.add("id");
  name.classList.add("name");
  let symbol_ui = "";
  symbol_ui = element.symbol.toLowerCase();
  icon.setAttribute(
    "src",
    `https://assets.coincap.io/assets/icons/${symbol_ui}@2x.png`
  );
  icon.setAttribute("width", "30px");
  icon.setAttribute("height", "30px");
  symbol.classList.add("symbol");
  // mainContent.innerText = "testmikonim"; chera in comment nabashe baghie kar nemiiknan?
  // info.innerHTML = "test konam";
  rank.innerHTML = element.rank;
  name.innerHTML = element.name;
  symbol.innerHTML = element.symbol;
  price.textContent = numeral(element.priceUsd).format("$0,0,0.00");
  marketCap.innerHTML = numeral(element.marketCapUsd).format("$0.00a");
  VWAP.innerHTML = numeral(element.vwap24Hr).format("$0,0,0.00");
  supply.innerHTML = numeral(element.supply).format("$0.00a");
  volume.innerHTML = numeral(element.volumeUsd24Hr).format("$0.00a");
  change.innerHTML = Number(element.changePercent24Hr).toFixed(2) + "%";

  if (element.changePercent24Hr > 0) {
    change.classList.add("green-text");
  } else {
    change.classList.add("red-text");
  }
}

// fetch("https://api.coincap.io/v2/assets")
//   .then(function (responce) {
//     console.log(responce);
//     return responce.json();
//   })
//   .then(function (data) {
//     let list = data.data;

//     list.forEach(function (items) {
//       console.log(items);
//       rendertable(items);
//     });
//   });

// async function getAssetsData(page, limit = 20) {
//   const endpointUrl = "https://api.coincap.io/v2/assets";
//   const offset = (page - 1) * limit;
//   const urlParams = new URLSearchParams({
//     limit: limit,
//     offset: offset,
//   });

//   const response = await fetch(endpointUrl + "?" + urlParams.toString());
//   const data = await response.json();

//   console.log(data);
// }
