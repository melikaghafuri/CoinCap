fetch("https://api.coincap.io/v2/exchanges").then((response) =>
  response.json().then(function (data) {
    let datayeman = data.data;
    console.log(datayeman);
    datayeman.forEach((element) => {
      renderItems(element);
    });
  })
);

function renderItems(element) {
  let mainFirst = document.querySelector("main .container .main-first");
  let mainContent = document.createElement("a");
  let names = document.createElement("div");
  let info = document.createElement("div");
  let rank = document.createElement("span");
  let name = document.createElement("span");
  let tradingPairs = document.createElement("span");
  let volumeUsd = document.createElement("span");
  let percentTotalVolume = document.createElement("span");
  let status = document.createElement("span");
  let dot = document.createElement("span");
  mainContent.setAttribute("href", "#");
  mainFirst.appendChild(mainContent);
  mainContent.appendChild(names);
  mainContent.appendChild(info);
  names.appendChild(rank);
  names.appendChild(name);
  info.appendChild(tradingPairs);
  info.appendChild(volumeUsd);
  info.appendChild(percentTotalVolume);
  info.appendChild(status);
  status.appendChild(dot);
  info.classList.add("main-info");
  name.classList.add("names");
  dot.classList.add("green");

  rank.innerHTML = element.rank;
  name.innerHTML = element.name;
  tradingPairs.innerHTML = element.tradingPairs;
  volumeUsd.innerHTML = numeral(element.volumeUsd).format("$0.00a");
  percentTotalVolume.innerHTML =
    numeral(element.percentTotalVolume).format("0.00") + "%";
}
