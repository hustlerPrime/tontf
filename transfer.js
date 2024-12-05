document.getElementById("transferBtn").addEventListener("click", async () => {
    const provider = new TonWeb.HttpProvider("https://testnet.toncenter.com/api/v2/jsonRPC");
    const tonweb = new TonWeb(provider);

    console.log("TonWeb initialized:", tonweb);

    // Example: Fetch and display wallet balance
    const address = "TARGET_WALLET_ADDRESS"; // Replace with your wallet address
    try {
        const balance = await tonweb.provider.getBalance(address);
        console.log("Wallet Balance:", balance);
        document.getElementById("status").innerText = `Balance: ${balance}`;
    } catch (error) {
        console.error("Error fetching balance:", error);
        document.getElementById("status").innerText = `Error: ${error.message}`;
    }
});
