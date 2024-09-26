// script.js

const holdings = ['bitcoin', 'ethereum', 'pendle'];

async function fetchHoldings() {
    const list = document.getElementById('holdings-list');
    for (let coin of holdings) {
        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}`);
            const data = await response.json();
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <img src="${data.image.thumb}" alt="${data.name}" />
                <strong>${data.name} (${data.symbol.toUpperCase()})</strong> - 
                Current Price: $${data.market_data.current_price.usd.toLocaleString()}
            `;
            list.appendChild(listItem);
        } catch (error) {
            console.error(`Error fetching data for ${coin}:`, error);
        }
    }
}

fetchHoldings();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
