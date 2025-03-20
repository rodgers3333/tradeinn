const sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-250px";
}

document.addEventListener('DOMContentLoaded', fetchCryptoData);
document.getElementById('searchInput').addEventListener('input', filterCoins);

function fetchCryptoData() {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

    fetch(url)
        .then(response => response.json())
        .then(data => displayCryptoData(data))
        .catch(error => console.error('Error fetching data:', error));
}

function displayCryptoData(data) {
    const tableBody = document.getElementById('cryptoTable');
    tableBody.innerHTML = '';

    data.forEach(coin => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${coin.name} (${coin.symbol.toUpperCase()})</td>
            <td>$${coin.current_price.toFixed(2)}</td>
            <td class="${coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}">
                ${coin.price_change_percentage_24h.toFixed(2)}%
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function filterCoins() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('#cryptoTable tr');

    rows.forEach(row => {
        const coinName = row.cells[0].textContent.toLowerCase();
        row.style.display = coinName.includes(searchValue) ? '' : 'none';
    });
}

// display informtaion OF CLIENTS WHO RECENTLY GOT PAY directly from the database
    const content = document.getElementsById("train");
    const clone = content.cloneNode(true);
    document.querySelector(".rail").appendChild(clone);