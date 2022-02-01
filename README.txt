1. Potrebno je namestiti Ganache in enega izmed računov importati v MetaMask
2. Potrebujemo tudi orodje truffle
3. Ukaz za migracijo pogodb na verigo: truffle migrate --reset
4. Ukaz za run projekta na localhostu: npm run start

Dapp vsebuje 4 pametne pogodbe:

 - DaiToken.sol za stabilno kriptoval. DAI, ki jo lahko stejkamo
 - DappToken.sol za namišljeno kriptoval., ki jo dobimo za nagrado
 - Migrations.sol 
 - TokenFarm.sol pravila za delovanje farme

2 migracijski skripti služita za deployanje pametnih pogodb na verigo

Frontend v Reactu