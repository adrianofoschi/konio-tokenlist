# konio-tokenlist

To request the listing of your token, create a pull request by adding a new JSON file.
The file must be named after the contractId, and its internal structure should be as follows:

```
{
    "chainId":"EiBZK_GGVP0H_fXVAM3j6EAuz3-B-l3ejxRSewi7qIBfSA==",
    "address":"15DJN4a8SgrbGhhGksSBASiSYjGnMU8dGL",
    "symbol":"KOIN",
    "priceUrl": "https://api.coingecko.com/api/v3/simple/price?ids=koinos&vs_currencies=usd",
    "pricePath": "koinos.usd",
    "priceUnit": "USD",
    "logo":"https://url.to.your.png"
}
```

Common chain ids

Mainnet
```
EiBZK_GGVP0H_fXVAM3j6EAuz3-B-l3ejxRSewi7qIBfSA==
```

Testnet
```
EiAAKqFi-puoXnuJTdn7qBGGJa8yd-dcS2P0ciODe4wupQ==
```
