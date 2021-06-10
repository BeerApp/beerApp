//Year round
//Pilsner
//Lager

// > 15
//Cider
//Hard Seltzers

// > 10 degrees
//Sour
//Lighter IPAs
//APA

// > 5 && < 15 degrees
//wheat
//Saisons
//Strong IPA / Double IPA
//APA

// < 5 degrees
//Stout
//Porter
//Strong IPA / Double IPA
//Black Lager
//Amber Lager
//any beer >6% excluding sours


const beerApp = {};

beerApp.breweryLibrary = [
    {
        brewery: "Amsterdam Brewery",
        location: "245 Queens Quay W, Toronto, ON M5J 2K9",
        beerList: [
            {
                name: "Space Invader",
                type: "IPA",
                category: "IPA",
                abv: 6,
                size: 473,
                price: 3.50,
                img: "https://cdn.shopify.com/s/files/1/0364/1705/products/space_glass_x320@2x.png?v=1614613152",
                description: "Space Invader is a juicy and out-of-this world IPA. Brewed using citra hops brings big grapefruit flavours with a resinous hop finish."
            },
            {
                name: "Boneshaker",
                type: "IPA",
                category: "IPA",
                abv: 7.1,
                size: 473,
                price: 4.50,
                img: "https://cdn.shopify.com/s/files/1/0364/1705/products/boneshaker_glass_x530@2x.png?v=1614613183",
                description: "Boneshaker is brewed with copious amounts of hops balanced with over 4 different malts, unfiltered and naturally carbonated. The result? A truly unique taste experience and an award winning IPA! Expect fresh grapefruit & pine aromas followed by massive hop flavours!"
            }
        ]
    },
    {
        brewery: "Brickworks Cider House",
        location: "709 Queen St E, Toronto, ON M4M 1H1",
        beerList: [
            {
                name: "Batch: 1904",
                type: "Cider",
                category: "Cider",
                abv: 5,
                size: 473,
                price: 3.50,
                img: "https://www.theciderhouse.ca/sites/g/files/yrakuj166/files/products/2020-05/img-prod-batch.png",
                description: `Introducing Batch: 1904: Our first-born. Named to remember the Great Toronto Fire of the same year, and to celebrate a city standing tall for over 100 year since; the embodiment of "true north, strong and free." Batch: 1904 delivers a dry, tart cider with a refreshing full apple finish. Each can is proudly crafted with at least 7 fresh-pressed Ontario apples.`
            }
        ]
    },
    {
        brewery: 'Burdock Brewery',
        location: '1184 Bloor St W, Toronto, ON M6H 1N2',
        beerList: [
            {
                name: 'Sea Barrel 23',
                type: 'Riesling, Chardonnay & Sea BuckThorn',
                category: 'Sour',
                abv: 6.3,
                size: 375,
                price: 10.18,
                img:
                    'https://cdn.shopify.com/s/files/1/0006/4598/8407/products/SEABARREL23333-web_750x.jpg?v=1614279807',
                description:
                    'Beer aged on both freshly pressed 2019 Chardonnay and Riesling skins from Pearl Morissette then barrel aged in oak for 1 year. Aged again in stainless with Sea Buckthorns for one month and bottle conditioned for 1 year. Tastes like Sea Buckthorn (surprise!) aka little popping orange bursts of sunshine',
            },
            {
                name: 'Pilsner',
                type: 'Pilsner',
                category: 'Pilsner',
                abv: 5.1,
                size: 355,
                price: 3.98,
                img:
                    'https://cdn.shopify.com/s/files/1/0006/4598/8407/products/PILSNERweb_750x.jpg?v=1604699163',
                description:
                    'A crisp, dry, European-style Pilsner. Refreshing bitterness, showing off our lovely pilsner malt. Dry-hopped with European hops for an herbal, subtle character',
            },
        ]
    },
    {
        brewery: 'Blood Brothers',
        location: '165 Geary Ave, Toronto, ON, M6H 2B8',
        beerList: [
            {
                name: 'Paradise Lost - Guava',
                type: 'Sour Ale',
                category: 'Sour',
                abv: 6.9,
                size: 355,
                price: 4.95,
                img:
                    'https://cdn.shopify.com/s/files/1/0262/0109/6243/products/BloodBrothers_P.L_Guava_CANS.mailchimp_1024x1024@2x.jpg?v=1612189003',
                description:
                    'A golden sour ale refermented with heaps of Guava nectar. A juicy, fruit-forward sour ale with a lingering tropical fruit aftertaste.',
            },
        ]
    },
    {
        brewery: 'Bellwoods Brewery',
        location: '124 Ossington Ave, Toronto, ON M6J 2Z5',
        beerList: [
            {
                name: 'Roman Candle',
                type: 'IPA',
                category: 'IPA',
                abv: 6.8,
                size: 473,
                price: 4.42,
                img:
                    'https://cdn.shopify.com/s/files/1/0088/5076/7952/products/Screenshot2021-03-29at10.10.43.png?v=1617009163',
                description:
                    'Dry-hopped at the rate of our Double IPAs, perfectly balanced, and showcasing bright citrusy aromatics, “Rocan” has earned a place among our favourites.',
            },
            {
                name: 'Jutsu',
                type: 'Pale Ale',
                category: 'Pale Ale',
                abv: 5.6,
                size: 473,
                price: 3.98,
                img:
                    'https://www.lcbo.com/content/dam/lcbo/products/016051.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
                description:
                    'Hazy with restrained bitterness, juicy yeast- derived aromatics, and a dry body.A refreshing and super drinkable hoppy beer with notes of cantaloupe, and nectarine.',
            },
            {
                name: 'Jelly King',
                type: 'Dry-Hopped Sour',
                category: 'Sour',
                abv: 5.6,
                size: 500,
                price: 5.75,
                img:
                    'https://images.squarespace-cdn.com/content/v1/55081ed2e4b0db4245a9f024/1614359014692-NYPKR9UPSVV662LMMXGV/ke17ZwdGBToddI8pDm48kFQQgP34qnCpeHaeAOzTt7pZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PICHnXC1b9smDvYLPdL-DS7U1pkhCtl83kemXd5r3C5ngKMshLAGzx4R3EDFOm1kBS/Beer+-+Bellwoods+Jelly+King_crop800px_bright%26contrast_tone%26warm_FINAL.jpg?format=1000w',
                description:
                    'An everyday, juicy, drinkable sour with punchy hop aromatics and fruity foundational flavours. Low bitterness, light body, and pale yellow in colour, with notes of fuzzy peach, tangerine, and cedar.',
            },
            {
                name: "Farmageddon",
                type: "Barrel Aged Wild Farmhouse Ale",
                category: "Sour",
                abv: 6.3,
                size: 500,
                price: 12.39,
                img: "https://cdn.shopify.com/s/files/1/0072/8449/0309/products/Farmageddon_Batch15copy_460x.jpg?v=1595521561",
                description: "Farmageddon is our wild farmhouse ale that we've been brewing, blending, and aging for almost as many years as we've been open. The blending process allows us to maintain a common thread across batches, the aging adds nuanced layers, while the brett and bacteria work hard to create small idiosyncrasies in each release.  It's a refined, effervescent, and delicious beer worthy of special occasions and idle weeknights."
            },
        ]
    },
    {
        brewery: 'Karbon Brewing',
        location: '150 Symes Rd, Toronto, ON M6N 0B1',
        beerList: [
            {
                name: 'One World',
                type: 'Wit/Wheat',
                category: 'Wheat',
                abv: 5,
                size: 473,
                price: 3.46,
                img:
                    'https://eadn-wc02-3129471.nxedge.io/cdn/media/catalog/product/cache/fe0b6c8977d11b269549479dbdad08a9/6/0/60a66cd56a016.png',
                description:
                    'A very refreshing, hazy, round bodied ale with fruity aromas coming from the yeast. Accompanied by citrus notes from orange peel and spicy coriander. Brewed with Ontario Malts and hops.',
            },
            {
                name: 'Helios',
                type: 'Helles Lager',
                category: 'Lager',
                abv: 5,
                size: 473,
                price: 3.36,
                img:
                    'https://eadn-wc02-3129471.nxedge.io/cdn/media/catalog/product/cache/fe0b6c8977d11b269549479dbdad08a9/6/0/60a66b44c2b3c.png',
                description:
                    'A bright, crisp, golden lager with a pleasant malty sweetness. Balanced with a nice floral hop aroma and slight bitterness. Round and drinkable, this delicious lager is brewed with Ontario malt and hops.',
            },
        ]
    },
    {
        brewery: 'Left Field Brewery',
        location: '36 Wagstaff Dr, Toronto, ON M4L 3W9',
        beerList: [
            {
                name: 'Sweet Spot',
                type: 'Mocha Marshmallow Stout',
                category: 'Stout',
                abv: 6.2,
                size: 355,
                // price not accurate, couldn't find it online
                price: 3.99,
                img: 'https://pbs.twimg.com/media/EMFHNYWWkAA4hSu.jpg',
                description:
                    'To create this tasty mocha-inspired treat, we developed a sweet stout recipe and added lactose, roasted & crushed cocoa nibs and coffee beans during conditioning. The result is a rich and decadent blend of chocolate, caramel and vanilla topped off with a toasty, sweet and creamy marshmallow.',
            },
            {
                name: 'Lo Viste',
                type: 'Mojito Sour',
                category: 'Sour',
                abv: 4.2,
                size: 355,
                price: 3.55,
                img:
                    'https://cododesign.com/wp-content/uploads/2019/07/LeftField07-1200x1200.png',
                description:
                    'Inspired by the tasty Cuban cocktail and named for the on-base celebration popularized by many Latin American players, Lo Viste Mojito Sour is a tart, quenching ale packed with lime juice and zest with a crisp hint of spearmint. Celebrate victory with this satisfying spring sipper! Contains wheat.',
            },
            {
                name: "O'Neill",
                type: 'Stout',
                category: 'Stout',
                abv: 4.5,
                size: 355,
                price: 2.68,
                img:
                    'https://www.canadianbeernews.com/wp-content/uploads/2021/03/leftfield_oneillstout.jpg',
                description:
                    'Made with 100% Canadian ingredients, O’Neill stout is a tribute to ‘Canada’s Babe Ruth’ and the first ever winner of the Triple Crown. A base of Barn Owl (Ontario) Pale Ale malt provides a lightly toasted malt background, while Red Shed (Alberta) Roasted Barley provides flavours of rich chocolate and freshly brewed coffee while remaining light and refreshing with a balanced bitterness.',
            },
            {
                name: 'Bricks + Mortar',
                type: 'Coffee Porter',
                category: 'Porter',
                abv: 6.0,
                size: 355,
                price: 2.68,
                img:
                    'https://www.leftfieldbrewery.ca/wp-content/uploads/2015/10/BricksMortar_web.jpg',
                description:
                    'Bricks and Mortar is our tribute to the brick industry upon which our neighbourhood was built along with our own evolution to becoming a physical brewery. Pilot’s ‘Community’ Seasonal Blend of Guatemalan and Columbian beans were added in the final stages of conditioning imparting notes of ripe plum, dark honey and milk chocolate expressing the unique conditions of its origin.',
            },
        ]
    },
    {
        brewery: 'Godspeed Brewery',
        location: '242 Coxwell Ave, Toronto, ON M4L 3B2',
        beerList: [
            {
                name: 'Polotmavý Lezák 11°',
                type: 'Czech Amber Lager',
                category: 'Lager',
                abv: 4.4,
                size: 355,
                price: 3.5,
                img:
                    'https://cdn.shopify.com/s/files/1/2133/7549/products/image_9a76f662-f233-43b0-8a3f-3b2f5ab726dd.jpg?v=1610381502',
                description:
                    'A beautifully balanced, clean, and malt-rich amber lager with notes of toasted bread loaf crust, caramel, peppery spice, and distant granola. Backstopped by a generous carbonation and firm bitterness, this represents the next step in our unbounded obsession with Czech brewing tradition.',
            },
            {
                name: 'Yuzu',
                type: 'Citrus Saison',
                category: 'Saison',
                abv: 4.1,
                size: 355,
                // price not accurate, couldnt find online
                price: 3.5,
                img:
                    'https://d2j6dbq0eux0bg.cloudfront.net/images/28682722/1661620674.jpg',
                description:
                    'Yuzu combines Japanese citrus and Belgian yeast, with restrained hopping to create a light, lively beer accentuated by mild tartness and minerality. Yuzu is a tremendously aromatic fruit: you’ll smell the beer being poured from across the room. The combination of fruit and saison characteristics creates a dramatic nose of freshly-peeled clementines, all pith and bright orange. The acidity helps smooth and hone the minerality that gives the simple beer complexity, and allows for a crisp but memorable finish.',
            },
        ]
    },
    {
        brewery: 'Rorschach Brewing Co.',
        location: '1001 Eastern Ave, Toronto, ON M4L 1A8',
        beerList: [
            {
                name: 'Truth Serum',
                type: 'Double Dry-Hopped IPA',
                category: 'IIPA',
                abv: 6.5,
                size: 335,
                price: 3.1,
                img:
                    'https://images.squarespace-cdn.com/content/v1/5f69440bd09be264b24e25bd/1614725887052-OL92W8M09UDC2KWD78XL/ke17ZwdGBToddI8pDm48kKirrQBMV7BsaOS4YyKHKkRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw9gAWIthtj5CQ6kWys7izdrhgbP5CWW3u5k8NkuWh_NcsSu5Bcj9PDFRxg_BFbKbc/TruthSerumCans.jpg?format=1500w',
                description:
                    'Brewed with golden oats and hopped with Citra, Simcoe and Mosaic. Notes of mango passionfruit, mandarin, pine, tropical fruit and grapefruit. A nuanced bitterness with a hint of sweetness.',
            },
            {
                name: 'Malevolent Benevolence',
                type: 'Coffee Cake Stout',
                category: 'Stout',
                abv: 11.9,
                size: 375,
                price: 8.86,
                img:
                    'https://images.squarespace-cdn.com/content/v1/5f69440bd09be264b24e25bd/1610483637388-1DZ7W7K2G5PR983HSY90/ke17ZwdGBToddI8pDm48kLIj3bb_uLOihttx7hjsPSV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0lqfkVpRp1g_2L-WsTQRP4IUeQvxhQLxDj0GQzUQT21mzi2feheXFTkax-QWHoTYtA/CoffeeCakeMB.jpg?format=1500w',
                description:
                    'Brewed with an abundance of chocolate, coffee and caramel malts, with a hint of lactose sugar to add a silky texture. Conditioned on many pounds of fresh roasted coffee beans, as well as cinnamon sticks and vanilla beans. Notes of fresh brewed coffee, deep cinnamon, rich chocolate, vanilla, toffee, and dark fruits, with an extremely smooth texture, with balanced sweetness.',
            },
        ]
    },
    {
        brewery: 'Black Lab Brewing',
        location: '818 Eastern Ave, Toronto, ON M4L 1A1',
        beerList: [
            {
                name: 'Sticky Paws',
                type: 'Oatmeal Stout with Maple Syrup',
                category: 'Stout',
                abv: 5.5,
                size: 500,
                price: 8.0,
                img:
                    'https://cdn.shopify.com/s/files/1/0564/5605/2889/products/sticky-paws-lightbox-photo_1024x1024@2x.png?v=1621632795',
                description:
                    'Aromas of mild roast, coffee and maple brought to you in a very easy drinking package. Oat brings subtle nutty flavours and viscosity to the roasty impression and the maple remains intertwined with the malt derived flavours poking its head up every so often to make its presence known. Brewed with Ontario sourced amber maple syrup and made to be refreshing and easy going.',
            },
            {
                name: 'Sitting Pretty',
                type: 'American Pale Ale',
                category: 'APA',
                abv: 4.5,
                size: 500,
                price: 6.75,
                img:
                    'https://cdn.shopify.com/s/files/1/0564/5605/2889/products/SittingPretty_1024x1024@2x.png?v=1620222836',
                description:
                    'Hazy citrus forward American pale with with rye malt. Assertive with a light body and dry finish. Rye malt provides a spicy undertone to an otherwise very passive malt profile. Mosaic, Citra, Denali hops.',
            },
        ]
    },
    {
        brewery: 'Great Lakes Brewery',
        location: '30 Queen Elizabeth Blvd, Etobicoke, ON M8Z 1L8',
        beerList: [
            {
                name: 'Octopus Wants To Fight',
                type: 'IPA',
                category: 'IPA',
                abv: 6.2,
                size: 473,
                // this price is per the lcbo
                price: 3.35,
                img:
                    'https://www.lcbo.com/content/dam/lcbo/products/458273.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
                description:
                    'The first sip provides some sweetness, some dank grass combined with pine needles and then onto “juicy fruit”. Soft body with some middle mouthfeel bitterness that tastes like another.',
            },
            {
                name: 'Tango',
                type: 'Tart Wheat Ale',
                category: 'Wit/Wheat',
                abv: 4.3,
                size: 473,
                price: 3.0,
                img:
                    'https://www.lcbo.com/content/dam/lcbo/products/020663.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
                description:
                    "You get hint of tartness with every swirl of the glass. The Amarillo hop provides a wonderful orange and zested lime component alongside some floral characteristics. Bright and light. The fine touch of the brewers' sour-blend is makes TANGO a well-rounded, zesty/tangy, thirst quenching, sessionable, tart wheat ale. The finish is nice and dry leading to frequent imbibing.",
            },
            {
                name: "Canuck",
                type: "Pale Ale",
                category: "Pale Ale",
                abv: 5.2,
                size: 473,
                price: 2.90,
                img: "https://www.greatlakesbeer.com/glb/wp-content/uploads/2014/11/Canuck-Pale-Ale-Poster-2020-663x1024.jpg",
                description: "The minute you crack your can, aroma of grapefruit, mango and pine hit you in the face; like a beaver slapping his tail on a pristine small body of water in Ontario. Canuck pours a deep gold, bordering on burnt orange that produces a tight snowy white toque. Take one last nose before getting into the liquid, which you’ll soon find will be hard to put down. Soft carbonation leads into a sweet honeyish start before it gives way to more grapefruit, tropical citrus, canned peaches and pine. Light to medium body with a very dry finish. Drink at your local pub, in the fish hut, campground, the beach, in a canoe (responsibly), playing shinny, on a log…actually, anywhere north of the 49th."
            },
            {
                name: "Shinny Pants",
                type: "Session Stout",
                category: "Stout",
                abv: 4.3,
                size: 473,
                price: 3,
                img: "https://www.greatlakesbeer.com/glb/wp-content/uploads/2019/02/Shinny-Pants-Poster-2018-663x1024.jpg",
                description: "Aromas of chocolate and lightly roasted coffee beans, light to medium body with notes of bitter chocolate, roasted malt and espresso, this 4.3% Session Stout is a perfect companion to outdoor shinny rinks and perfect for post game bevvies."
            }
        ]
    },
    {
        brewery: 'Indie Ale House',
        location: '2876 Dundas St W, Toronto, ON M6P 1Y8',
        beerList: [
            {
                name: 'Zombie Apocalypse',
                type: 'Imperial Stout',
                category: 'Stout',
                abv: 10,
                size: 500,
                price: 8.85,
                img:
                    'https://cdn.shopify.com/s/files/1/0009/8484/2291/products/Zombie_720x.jpg?v=1607951661',
                description: 'Rich & roasty with a strong bitter malty backbone.',
            },
            {
                name: 'Lemonade Stand',
                type: 'Lactose Sour',
                category: 'Sour',
                abv: 5,
                size: 355,
                price: 3.85,
                img:
                    'https://cdn.shopify.com/s/files/1/0009/8484/2291/products/Lemonade2_1080x.jpg?v=1585786744',
                description:
                    "This beer pays homage to everyone's favourite summer drink. Dry hopped and brewed with meyer lemons and lactose, this beer is unbelievably refreshing with a balanced tartness and notes of - you guessed it - lemon.",
            },
            {
                name: 'Momento Mori',
                type: 'Oatmeal Stout',
                category: 'Stout',
                abv: 4.5,
                size: 500,
                price: 4.43,
                img:
                    'https://cdn.shopify.com/s/files/1/0009/8484/2291/products/Memento_1080x.jpg?v=1611083498',
                description:
                    'A classic Low ABV Oatmeal Stout with a smooth body, and a hint of roasted bitterness.',
            },
        ]
    }
]

beerApp.url = 'https://api.openweathermap.org/data/2.5/weather';
beerApp.key = 'e0554359d10b3fda0aa7048818773d46';

beerApp.init = function () {
    beerApp.allBeer = beerApp.getBeer();
    beerApp.getSubmit();
    beerApp.getTheWeather("toronto");
}

beerApp.getSubmit = function() {
    document.querySelector('form').addEventListener('submit', function(event){
        event.preventDefault();
        getCity = document.querySelector('input[type="text"]').value;
        beerApp.getTheWeather("getCity");

        // console.log(event);
        console.log(beerApp.getCity);
    })
}

beerApp.getTheWeather = function (location) {
    const weatherApiUrl = new URL(beerApp.url)
    weatherApiUrl.search = new URLSearchParams({
        appid: beerApp.key,
        q: location,
        // zip: searchByZip
    })
    fetch(weatherApiUrl)
        .then(function (weatherData) {
            return weatherData.json();
        })
        .then(function (weatherDataJson) {
            console.log(weatherDataJson);

            beerApp.currentWeather = weatherDataJson;

            beerApp.sortWeather(weatherDataJson);
        })
}

beerApp.sortWeather = function (currentWeather) {

    const CurrentTemp = Math.floor(currentWeather.main.temp - 273.15);
    console.log(CurrentTemp);
    const beerList = ["Pilsner", "Lager"];

    if (CurrentTemp < 5) {
        beerList.push("Stout", "Porter", "IIPA", "Black Lager", "Amber Lager")

        //any beer >6% excluding sours

    } else if (CurrentTemp > 5) {

        if (CurrentTemp < 15) {
            beerList.push("wheat", "Saison", "IIPA", "APA");

            //Strong IPA
        }
    }
    if (CurrentTemp > 10) {
        beerList.push("Sour");
        //Lighter IPAs

        if (CurrentTemp > 15) {
            beerList.push("Cider");

            //Hard Seltzers
        }
    }

    console.log(beerList);

    const randomCategory = Math.floor(Math.random() * beerList.length);
    const beerCategory = beerList[randomCategory];

    console.log(beerCategory);
    
    const beerSelection = beerApp.chooseBeer(beerCategory);
    beerApp.displayInfo(beerSelection, CurrentTemp);

    console.log(beerSelection);
    console.log(beerSelection.parent.brewery);
}

beerApp.displayInfo = function(beerSuggestion, currentTemp) {
    currentWeather = beerApp.currentWeather;
    console.log(currentWeather);
    console.log(beerSuggestion);
    const weatherDiv = document.querySelector('.weather-container')
    const newP = document.createElement('p')
    newP.innerText = `${currentWeather.name}: ${currentTemp} ${currentWeather.weather[0].description}`
    weatherDiv.appendChild(newP);

    const breweries = document.querySelectorAll('.brewery');
    breweries.forEach(brewery => {
        brewery.innerText = `${beerSuggestion.parent.brewery}`
    });

    const beerNames = document.querySelectorAll('.beer-name');
    beerNames.forEach(beerName => {
        beerName.innerText = `${beerSuggestion.name}`
    });

    // const brewery = document.querySelector('.brewery')
    // brewery.innerText = `${beerSuggestion.parent.brewery}`

    // const beerName = document.querySelector('.beer-name')
    // beerName.innerText = `"${beerSuggestion.name}"`

    const beerDescription = document.querySelector('.beer-description')
    beerDescription.innerText = `${beerSuggestion.description}`

    const beerType = document.querySelector('.beer-type')
    beerType.innerText = `${beerSuggestion.type}`

    const beerImage = document.querySelector('.beer-image')
    beerImage.src = `${beerSuggestion.img}`

    const beerAbv = document.querySelector('.abv')
    beerAbv.innerText = `${beerSuggestion.abv}% abv`
}

beerApp.chooseBeer = (categoryChoice) => {
    const beerSuggestions = beerApp.allBeer.filter(beer => {
        return beer.category === categoryChoice;
    })

    const randomValue = Math.floor(Math.random() * beerSuggestions.length);
    const beerSuggestion = beerSuggestions[randomValue];

    return beerSuggestion;

    // console.log(beerSuggestions);
    // console.log(beerSuggestion);
    // console.log(beerSuggestion.parent);
}


beerApp.getBeer = function () {
    const beerSuggestions = [];

    for (let i = 0; i < beerApp.breweryLibrary.length; i++) {
        const brewery = beerApp.breweryLibrary[i];

        for (let j = 0; j < brewery.beerList.length; j++) {
            const beerType = brewery.beerList[j];

            beerType.parent = brewery;
            beerSuggestions.push(beerType);
        }
    }

    return beerSuggestions;
}

beerApp.init();

//OLD WAY OF RETURNING BEER CHOICE FROM CATEGORY
//Replaced with "beerApp.allBeer" in init();
//More dry

//Beer selection being a category 
// beerApp.findBeer = (beerSelection) => {
//     const beerSuggestions = [];

//     for (let i = 0; i < beerApp.breweryLibrary.length; i++) {
//         const brewery = beerApp.breweryLibrary[i];

//         for (let j = 0; j < brewery.beerList.length; j++) {
//             const beerType = brewery.beerList[j];

//             if (beerType.category === beerSelection) {
//                 beerType.parent = brewery;
//                 beerSuggestions.push(beerType);
//             }
//         }
//     }

//     const randomValue = Math.floor(Math.random() * beerSuggestions.length);
//     const beerSuggestion = beerSuggestions[randomValue];

//     console.log(beerSuggestions);
//     console.log(beerSuggestion);
//     console.log(beerSuggestion.parent);
// }


//Issues
//randomly selecting a category, then randomly selecting a beer from that category doesnt supply the results we want.
//Some categories only have one beer in them, which is good if their category appears more often.
//example: comparing Sour category to Pilsner category is a 1:1 ratio. But looking at each category, Sour has many beer inside of it, compared to Pilsers few beer.
//For summer category, it shouldnt be 1:1 Sour/Pilsner, it would be a better result to randomly select between all sour and all pilsner beer. 
//This would make the results more often sours in the summer time

// find a good map API 
// make a parameter for the zip code which would be the users input 
// 

// static map api endpoint:
// http://maps.google.com/staticmap

// api key
// pk.eyJ1IjoicHBvaXJpM3IiLCJhIjoiY2twcmI5OHZ1MDBhaTJ2bzRyaXZpcHR2NSJ9.6jw-WV9fJqqwnXLLQELNdg

// left field
// lat:
// 43.673800
// long:
// -79.330520
