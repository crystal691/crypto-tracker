let userPower = 100; // dalam Th/s
let networkPower = 50000; // total kekuatan seluruh pengguna
let blockReward = 0.5; // jumlah koin yang dibagikan per blok

function calculateEarnings() {
    // Rumus dasar proporsional
    let myEarnings = (userPower / networkPower) * blockReward;
    return myEarnings;
}

console.log("Estimasi pendapatan koin Anda:", calculateEarnings());
