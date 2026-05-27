async function updateHarga() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd');
        const data = await response.json();
        
        let html = `
            <p>Bitcoin: $${data.bitcoin.usd}</p>
            <p>Ethereum: $${data.ethereum.usd}</p>
            <p>Tether: $${data.tether.usd}</p>
        `;
        document.getElementById("crypto-data").innerHTML = html;
    } catch (error) {
        document.getElementById("crypto-data").innerText = "Gagal mengambil data.";
    }
}

// Update harga setiap 30 detik
setInterval(updateHarga, 30000);
updateHarga();