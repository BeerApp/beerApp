// const proxiedUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
// const url = new URL('http://proxy.hackeryou.com/%27');
// url.search = new URLSearchParams({
//     reqUrl: proxiedUrl,
//     api_key: "1"
// });
// fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
//     .then(function (response) {
//         console.log(response.json());
//         // or
//         return response.json();
//     });

const breweryLibrary = [
    {
        name: "Burdock Brewery",
        location: "1184 Bloor St W, Toronto, ON M6H 1N2",
        beerList: [
            {
                name: "Sea Barrel 23",
                type: "Riesling, Chardonnay & Sea BuckThorn",
                category: "sour",
                abv: 6.3,
                size: 375,
                price: 10.18,
                img: "https://cdn.shopify.com/s/files/1/0006/4598/8407/products/SEABARREL23333-web_750x.jpg?v=1614279807",
                description: "Beer aged on both freshly pressed 2019 Chardonnay and Riesling skins from Pearl Morissette then barrel aged in oak for 1 year. Aged again in stainless with Sea Buckthorns for one month and bottle conditioned for 1 year. Tastes like Sea Buckthorn (surprise!) aka little popping orange bursts of sunshine"
            },
            {
                name: "Pilsner",
                type: "pilsner tree",
                category: "pilsner",
                abv: 5.1,
                size: 355,
                price: 3.98,
                img: "https://cdn.shopify.com/s/files/1/0006/4598/8407/products/PILSNERweb_750x.jpg?v=1604699163",
                description: "A crisp, dry, European-style Pilsner. Refreshing bitterness, showing off our lovely pilsner malt. Dry-hopped with European hops for an herbal, subtle character"
            }
        ]
    },
    {
        name: "Blood Brothers",
        location: "165 Geary Ave, Toronto, ON, M6H 2B8",
        beerList: [
            {
                name: "Paradise Lost - Guava",
                type: "Sour Ale",
                category: "sour",
                abv: 6.9,
                size: 355,
                price: 4.95,
                img: "https://cdn.shopify.com/s/files/1/0262/0109/6243/products/BloodBrothers_P.L_Guava_CANS.mailchimp_1024x1024@2x.jpg?v=1612189003",
                description: "A golden sour ale refermented with heaps of Guava nectar. A juicy, fruit-forward sour ale with a lingering tropical fruit aftertaste."
            }
        ]
    },
]

console.log(breweryLibrary[0].beerList[0].name)