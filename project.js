let nfts = [];
let cnt = 0;

function mintNFT(cardName, rarity, price) {
  const nft = {
    cardName: cardName,
    rarity: rarity,
    price: price
  };
  nfts.push(nft);
  cnt++;
}

function listNFTs() {
    nfts.forEach((nft, index) =>{
    console.log(`Card No ${index+1}: ` + nft.cardName);
    console.log("Rarity: " + nft.rarity);
    console.log("Price: " + nft.price);
    console.log("\n-----------------------------\n");
   });
}

function getTotalSupply() {
  console.log("Total Supply: " + cnt);
}

mintNFT("Pokemon Card", "Legendary", "$100");
mintNFT("Bey-Blade Card", "common", "$50");
mintNFT("Dragon Ball Card", "Epic", "$150");

listNFTs();
getTotalSupply();
