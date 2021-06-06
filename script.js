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
        brewery: "Burdock Brewery",
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
        brewery: "Blood Brothers",
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
    {
        brewery: "Bellwoods Brewery",
        location: "124 Ossington Ave, Toronto, ON M6J 2Z5",
        beerList: [
            {
                name: "Farmageddon",
                type: "Barrel Aged Wild Farmhouse Ale",
                category: "sour",
                abv: 6.3,
                size: 500,
                price: 12.39,
                img: "https://cdn.shopify.com/s/files/1/0072/8449/0309/products/Farmageddon_Batch15copy_460x.jpg?v=1595521561",
                description: "Farmageddon is our wild farmhouse ale that we've been brewing, blending, and aging for almost as many years as we've been open. The blending process allows us to maintain a common thread across batches, the aging adds nuanced layers, while the brett and bacteria work hard to create small idiosyncrasies in each release.  It's a refined, effervescent, and delicious beer worthy of special occasions and idle weeknights."
            },
            {
                name: "Roman Candle",
                type: "IPA",
                category: "ipa",
                abv: 6.8,
                size: 475,
                price: 4.42,
                img: "https://cdn.shopify.com/s/files/1/0072/8449/0309/products/RomanCandle_can_460x.jpg?v=1558052171",
                description: "Roman Candle is the first IPA we ever brewed, back when we first got reliable access to Citra and decided to base a beer around it. Dry-hopped at the rate of our Double IPAs, perfectly balanced, and showcasing bright citrusy aromatics, “Rocan” has earned a place among our favourites."
            }
        ]
    },
    {
        name: "Amsterdam Brewery",
        location: "245 Queens Quay W, Toronto, ON M5J 2K9",
        beerList: [
            {
                name: "Space Invader",
                type: "IPA",
                category: "ipa",
                abv: 6,
                size: 473,
                price: 3.50,
                img: "https://cdn.shopify.com/s/files/1/0364/1705/products/space_glass_x320@2x.png?v=1614613152",
                description: "Space Invader is a juicy and out-of-this world IPA. Brewed using citra hops brings big grapefruit flavours with a resinous hop finish."
            },
            {
                name: "Boneshaker",
                type: "IPA",
                category: "ipa",
                abv: 7.1,
                size: 473,
                price: 4.50,
                img: "https://cdn.shopify.com/s/files/1/0364/1705/products/boneshaker_glass_x530@2x.png?v=1614613183",
                description: "Boneshaker is brewed with copious amounts of hops balanced with over 4 different malts, unfiltered and naturally carbonated. The result? A truly unique taste experience and an award winning IPA! Expect fresh grapefruit & pine aromas followed by massive hop flavours!"
            }
        ]
    },
    {
        name: "Great Lakes",
        location: "30 Queen Elizabeth Blvd, Etobicoke, ON M8Z 1L8",
        beerList: [
            {
                name: "Canuck",
                type: "Pale Ale",
                category: "pale ale",
                abv: 5.2,
                size: 473,
                price: 2.90,
                img: "https://www.greatlakesbeer.com/glb/wp-content/uploads/2014/11/Canuck-Pale-Ale-Poster-2020-663x1024.jpg",
                description: "The minute you crack your can, aroma of grapefruit, mango and pine hit you in the face; like a beaver slapping his tail on a pristine small body of water in Ontario. Canuck pours a deep gold, bordering on burnt orange that produces a tight snowy white toque. Take one last nose before getting into the liquid, which you’ll soon find will be hard to put down. Soft carbonation leads into a sweet honeyish start before it gives way to more grapefruit, tropical citrus, canned peaches and pine. Light to medium body with a very dry finish. Drink at your local pub, in the fish hut, campground, the beach, in a canoe (responsibly), playing shinny, on a log…actually, anywhere north of the 49th."
            },
            {
                name: "Shinny Pants",
                type: "Session Stout",
                category: "stout",
                abv: 4.3,
                size: 473,
                price: 3,
                img: "https://www.greatlakesbeer.com/glb/wp-content/uploads/2019/02/Shinny-Pants-Poster-2018-663x1024.jpg",
                description: "Aromas of chocolate and lightly roasted coffee beans, light to medium body with notes of bitter chocolate, roasted malt and espresso, this 4.3% Session Stout is a perfect companion to outdoor shinny rinks and perfect for post game bevvies."
            }
        ]
    },
    {
        name: "Brickworks Cider House",
        location: "709 Queen St E, Toronto, ON M4M 1H1",
        beerList: [
            {
                name: "Batch: 1904",
                type: "Cider",
                category: "cider",
                abv: 5,
                size: 473,
                price: 3.50,
                img: "https://www.theciderhouse.ca/sites/g/files/yrakuj166/files/products/2020-05/img-prod-batch.png",
                description: `Introducing Batch: 1904: Our first-born. Named to remember the Great Toronto Fire of the same year, and to celebrate a city standing tall for over 100 year since; the embodiment of "true north, strong and free." Batch: 1904 delivers a dry, tart cider with a refreshing full apple finish. Each can is proudly crafted with at least 7 fresh-pressed Ontario apples.`
            }
        ]
    }
]

console.log(breweryLibrary[0].beerList[0].name)