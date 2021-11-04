let statTable = document.getElementsByClassName("stats_table")[0];
let tableBody = statTable.getElementsByTagName('tbody')[0];
let cells = tableBody.getElementsByTagName("td");

let views = cells[0].innerText.replace(",", "");
let subs = cells[2].innerText.replace(",", "");
let favs = cells[4].innerText.replace(",", "");

// Subscription rate
let subRateRow = tableBody.insertRow();
let subRateCellValue = subRateRow.insertCell();
let subRateCellText = subRateRow.insertCell();

let subRatePercent = Math.round((subs / views) * 100); 

subRateCellValue.appendChild(document.createTextNode(subRatePercent + "%"));
subRateCellText.appendChild(document.createTextNode("Subscription Rate"));

// Favourite rate
let favRateRow = tableBody.insertRow();
let favRateCellValue = favRateRow.insertCell();
let favRateCellText = favRateRow.insertCell();

let favRatePercent = Math.round((favs / views) * 100); 

favRateCellValue.appendChild(document.createTextNode(favRatePercent + "%"));
favRateCellText.appendChild(document.createTextNode("Favourite Rate"));

