app.js
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Please fill in both fields.");
        return;
    }

    // Simulate successful login
    document.querySelector(".login-container").style.display = "none";
    document.querySelector(".stock-container").style.display = "block";

    generateStocks();
}

function generateStocks() {
    const stockList = document.getElementById("stocks");
    const stocks = ["AAPL", "GOOGL", "MSFT", "TSLA", "AMZN", "META"];
    stockList.innerHTML = "";

    stocks.forEach((stock) => {
        const price = (Math.random() * 2000).toFixed(2);
        const stockItem = document.createElement("div");
        stockItem.className = "stock";
        stockItem.innerHTML = `<span>${stock}</span><span>$${price}</span>`;
        stockList.appendChild(stockItem);
    });

    // Update prices every 2 seconds
    setInterval(() => {
        document.querySelectorAll(".stock").forEach((stockItem, index) => {
            const price = (Math.random() * 2000).toFixed(2);
            stockItem.children[1].textContent = `$${price}`;
        });
    }, 2000);
}
