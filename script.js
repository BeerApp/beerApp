const beerApp = {};

beerApp.breweryLibrary = [
    {
        brewery: "Amsterdam Brewery",
        location: "245 Queens Quay W, Toronto, ON",
        post: "M5J 2K9",
        long: -79.356870,
        lat: 43.706700,
        facebook: "https://www.facebook.com/Amsterdambeer/",
        instagram: "https://www.instagram.com/amsterdambeer/?hl=en",
        website: "amsterdambeer.com",
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
                description: "Copious amounts of hops balanced with over 4 different malts, unfiltered and naturally carbonated. A truly unique taste experience and an award winning IPA! Expect fresh grapefruit & pine aromas followed by massive hop flavours!"
            }
        ]
    },
    {
        brewery: "Brickworks Cider House",
        location: "709 Queen St E, Toronto, ON",
        post: 'M4M 1H1',
        long: -79.349600,
        lat: 43.658730,
        facebook: "https://www.facebook.com/Brickworks.TO/",
        instagram: "https://www.instagram.com/brickworkscider/?hl=en",
        website: "theciderhouse.ca",
        beerList: [
            {
                name: "Batch: 1904",
                type: "Cider",
                category: "Cider",
                abv: 5,
                size: 473,
                price: 3.50,
                img: "https://www.theciderhouse.ca/sites/g/files/yrakuj166/files/products/2020-05/img-prod-batch.png",
                description: `A dry, tart cider with a refreshing full apple finish. Each can is proudly crafted with at least 7 fresh-pressed Ontario apples.`
            }
        ]
    },
    {
        brewery: 'Burdock Brewery',
        location: '1184 Bloor St W, Toronto, ON',
        post: 'M6H 1N2',
        long: -79.437820,
        lat: 43.659580,
        facebook: "https://www.facebook.com/BurdockBrewery/",
        instagram: "https://www.instagram.com/burdockbrewery/?hl=en",
        website: "burdockbrewery.com",
        beerList: [
            {
                name: 'Sea Barrel 23',
                type: 'Riesling, Chardonnay & Sea Buckthorn',
                category: 'Sour',
                abv: 6.3,
                size: 375,
                price: 10.18,
                img:
                    'https://cdn.shopify.com/s/files/1/0006/4598/8407/products/SEABARREL23333-web_750x.jpg?v=1614279807',
                description:
                    'Aged with Sea Buckthorns for one month and bottle conditioned for 1 year. Tastes like (surprise!) sea buckthorn.',
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
                    'A crisp, dry, European-style Pilsner. Refreshing bitterness, showing off our lovely pilsner malt. Dry-hopped with European hops.',
            },
        ]
    },
    {
        brewery: 'Blood Brothers',
        location: '165 Geary Ave, Toronto, ON',
        post: 'M6H 2B8',
        long: -79.436220,
        lat: 43.669850,
        facebook: "https://www.facebook.com/bloodbrothersbrewing/",
        instagram: "https://www.instagram.com/bloodbrothersbrewing/?hl=en",
        website: "bloodbrothersbrewing.com",
        beerList: [
            {
                name: 'Paradise Lost Guava',
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
        location: '124 Ossington Ave, Toronto, ON',
        post: 'M6J 2Z5',
        long: -79.420097,
        lat: 43.647079,
        facebook: "https://www.facebook.com/BellwoodsBrewery/",
        instagram: "https://www.instagram.com/bellwoodsbeer/?hl=en",
        website: "bellwoodsbrewery.com",
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
                    'Dry-hopped at the rate of our Double IPAs, perfectly balanced, and showcasing bright citrusy aromatics, ???Rocan??? has earned a place among our favourites.',
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
                    'Hop aromatics and fruity foundational flavours. Low bitterness, light body, and pale yellow in colour, with notes of fuzzy peach, tangerine, and cedar.',
            },
            {
                name: "Farmageddon",
                type: "Wild Farmhouse Ale",
                category: "Sour",
                abv: 6.3,
                size: 500,
                price: 12.39,
                img: "https://cdn.shopify.com/s/files/1/0072/8449/0309/products/Farmageddon_Batch15copy_460x.jpg?v=1595521561",
                description: "A barrel-aged wild farmhouse ale. Refined, effervescent, and delicious. Worthy of special occasions and idle weeknights."
            },
        ]
    },
    {
        brewery: 'Karbon Brewing',
        location: '150 Symes Rd, Toronto, ON',
        post: 'M6N 0B1',
        lat: 43.67374,
        long: -79.47898,
        facebook: "https://www.facebook.com/karbonbrewing/",
        instagram: "https://www.instagram.com/karbonbrewing/?hl=en",
        website: "karbonbrewing.com",
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
                    'A bright, crisp, golden lager with malty sweetness. Floral hop aroma and slight bitterness. Brewed with Ontario malt and hops.',
            },
        ]
    },
    {
        brewery: 'Left Field Brewery',
        location: '36 Wagstaff Dr, Toronto, ON',
        post: 'M4L 3W9',
        lat: 43.67365,
        long: -79.33042,
        facebook: "https://www.facebook.com/LeftFieldBrewery",
        instagram: "https://www.instagram.com/leftfieldbrewery/?hl=en",
        website: "leftfieldbrewery.ca",
        beerList: [
            {
                name: 'Sweet Spot',
                type: 'Mocha Marshmallow Stout',
                category: 'Stout',
                abv: 6.2,
                size: 355,
                price: 3.99,
                img: 'https://pbs.twimg.com/media/EMFHNYWWkAA4hSu.jpg',
                description:
                    'Rich and decadent blend of chocolate, caramel and vanilla topped off with a toasty, sweet and creamy marshmallow.',
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
                    'A tart, quenching ale packed with lime juice and zest with a crisp hint of spearmint. Contains wheat.',
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
                    'Lightly toasted malt background. Provides flavours of rich chocolate and freshly brewed coffee while remaining light and refreshing with a balanced bitterness.',
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
                    'Guatemalan and Columbian beans added in the final stages of conditioning, imparting notes of ripe plum, dark honey and milk chocolate.',
            },
            {
                name: '7th Inning Seltzer',
                type: 'Hard Seltzer',
                category: 'Hard Seltzer',
                abv: 5,
                size: 355,
                price: 2.3,
                img:
                    'https://cdn.shopify.com/s/files/1/2397/3329/products/7IS_BlueRazz_can_31e79058-a945-42b5-bae6-1d147f62381a_480x480.jpg?v=1621260247',
                description:
                    'These crystal clear, fizzy hard seltzers are naturally fermented with no added sugar and all natural fruit flavours.',
            },
        ]
    },
    {
        brewery: 'Godspeed Brewery',
        location: '242 Coxwell Ave, Toronto, ON',
        post: 'M4L 3B2',
        long: -79.3191,
        lat: 43.67251,
        facebook: "https://www.facebook.com/GodspeedBrewery/",
        instagram: "https://www.instagram.com/godspeedbeer/?hl=en",
        website: "godspeedbrewery.com",
        beerList: [
            {
                name: 'Polotmav?? Lez??k 11??',
                type: 'Czech Amber Lager',
                category: 'Lager',
                abv: 4.4,
                size: 355,
                price: 3.5,
                img:
                    'https://cdn.shopify.com/s/files/1/2133/7549/products/image_9a76f662-f233-43b0-8a3f-3b2f5ab726dd.jpg?v=1610381502',
                description:
                    'A balanced, clean, and malt-rich amber lager. Notes of toasted bread loaf crust, caramel, peppery spice, and granola. Generous carbonation, firm bitterness.',
            },
            {
                name: 'Yuzu',
                type: 'Citrus Saison',
                category: 'Saison',
                abv: 4.1,
                size: 355,
                price: 3.5,
                img:
                    'https://d2j6dbq0eux0bg.cloudfront.net/images/28682722/1661620674.jpg',
                description:
                    'Yuzu combines Japanese citrus and Belgian yeast. Light, lively with mild tartness and minerality. The combination of fruit and saison characteristics creates a dramatic nose of freshly-peeled clementines.',
            },
        ]
    },
    {
        brewery: 'Rorschach Brewing Co.',
        location: '1001 Eastern Ave, Toronto, ON',
        post: 'M4L 1A8',
        long: -79.31997,
        lat: 43.66371,
        facebook: "https://www.facebook.com/rorschachbrewing/",
        instagram: "https://www.instagram.com/rorschachbeer/?hl=en",
        website: "rorschachbrewing.com",
        beerList: [
            {
                name: 'Truth Serum',
                type: 'Double IPA',
                category: 'IIPA',
                abv: 6.5,
                size: 335,
                price: 3.1,
                img:
                    'https://images.squarespace-cdn.com/content/v1/5f69440bd09be264b24e25bd/1614725887052-OL92W8M09UDC2KWD78XL/ke17ZwdGBToddI8pDm48kKirrQBMV7BsaOS4YyKHKkRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw9gAWIthtj5CQ6kWys7izdrhgbP5CWW3u5k8NkuWh_NcsSu5Bcj9PDFRxg_BFbKbc/TruthSerumCans.jpg?format=1500w',
                description:
                    'Brewed with golden oats. Hopped with Citra, Simcoe and Mosaic. Notes of mango passionfruit, mandarin, pine, tropical fruit and grapefruit.',
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
                    'Notes of fresh brewed coffee, deep cinnamon, rich chocolate, vanilla, toffee, and dark fruits. Smooth texture, balanced sweetness.',
            },
        ]
    },
    {
        brewery: 'Black Lab Brewing',
        location: '818 Eastern Ave, Toronto, ON',
        post: 'M4L 1A1',
        long: -79.32896,
        lat: 43.66165,
        facebook: "https://www.facebook.com/BlackLabBeer/",
        instagram: "https://www.instagram.com/blacklabbeer/?hl=en",
        website: "blacklab.beer",
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
                    'Brewed with Ontario sourced amber maple syrup and made to be refreshing and easy going. Aromas of mild roast coffee and maple syrup.',
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
                    'Citrus forward American Pale with rye malt. Light body and dry finish. Provides a spicy undertone to an otherwise very passive malt profile. Mosaic, Citra, Denali hops.',
            },
        ]
    },
    {
        brewery: 'Great Lakes Brewery',
        location: '30 Queen Elizabeth Blvd, Etobicoke, ON',
        post: 'M8Z 1L8',
        long: -79.50476,
        lat: 43.62253,
        facebook: "https://www.facebook.com/GreatLakesBeer/",
        instagram: "https://www.instagram.com/greatlakesbeer/?hl=en",
        website: "greatlakesbeer.com",
        beerList: [
            {
                name: 'Octopus Wants To Fight',
                type: 'IPA',
                category: 'IPA',
                abv: 6.2,
                size: 473,
                price: 3.35,
                img:
                    'https://www.lcbo.com/content/dam/lcbo/products/458273.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
                description:
                    'Sweetness and dank grass combined with pine needles and then onto ???juicy fruit???. Soft body with some middle mouthfeel bitterness.',
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
                    "Amarillo hops provide orange and lime zest component with floral characteristics. Bright and light. Well-rounded, zesty/tangy, thirst quenching, sessionable, tart wheat ale.",
            },
            {
                name: "Canuck",
                type: "Pale Ale",
                category: "Pale Ale",
                abv: 5.2,
                size: 473,
                price: 2.90,
                img: "https://www.greatlakesbeer.com/glb/wp-content/uploads/2014/11/Canuck-Pale-Ale-Poster-2020-663x1024.jpg",
                description: "Aromas of grapefruit, mango and pine. Soft carbonation. Notes of grapefruit, tropical citrus, peaches and pine. Light to medium body with a very dry finish."
            },
            {
                name: "Shinny Pants",
                type: "Session Stout",
                category: "Stout",
                abv: 4.3,
                size: 473,
                price: 3,
                img: "https://www.greatlakesbeer.com/glb/wp-content/uploads/2019/02/Shinny-Pants-Poster-2018-663x1024.jpg",
                description: "Aromas of chocolate and lightly roasted coffee beans, light to medium body with notes of bitter chocolate, roasted malt and espresso."
            }
        ]
    },
    {
        brewery: 'Indie Ale House',
        location: '2876 Dundas St W, Toronto, ON',
        post: 'M6P 1Y8',
        long: -79.53835,
        lat: 43.63809,
        facebook: "https://m.facebook.com/profile.php?id=270701859716807&__tn__=C-R",
        instagram: "https://www.instagram.com/indiealehouse/?hl=en",
        website: "indiealehouse.com",
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
                    "Dry hopped and brewed with meyer lemons and lactose. Unbelievably refreshing with balanced tartness and notes of - you guessed it - lemon.",
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

beerApp.getBeer = function () {
    const allBeer = [];

    for (let i = 0; i < beerApp.breweryLibrary.length; i++) {
        const brewery = beerApp.breweryLibrary[i];

        for (let j = 0; j < brewery.beerList.length; j++) {
            const beerType = brewery.beerList[j];

            beerType.parent = brewery;
            allBeer.push(beerType);
        }
    }

    return allBeer;
}

beerApp.init = function () {
    beerApp.allBeer = beerApp.getBeer();
    beerApp.userErrorMessage = document.querySelector('.error-message');
    beerApp.resultsPage = document.querySelector('main');
    
    beerApp.getUserInput();
    beerApp.createMap();
}

beerApp.getUserInput = function () {
    beerApp.modalContainer = document.querySelector('.modal-container');

    document.querySelector('body').addEventListener('click', function (event) {
        if (!beerApp.modalContainer.firstElementChild.contains(event.target)) {
            beerApp.modalContainer.style.visibility = 'hidden';
        }
    });

    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();
        getCity = document.querySelector('input[type="text"]').value;

        beerApp.getTheWeather(getCity);
    })
}

beerApp.getTheWeather = function (location) {
    const weatherApiUrl = new URL(beerApp.url)
    weatherApiUrl.search = new URLSearchParams({
        appid: beerApp.key,
        q: location
    })
    fetch(weatherApiUrl)
        .then(function (weatherData) {
            if (!weatherData.ok) {
                throw new error("city not found");
            }
            return weatherData.json();
        })
        .then(function (weatherDataJson) {
            beerApp.currentWeather = weatherDataJson;

            beerApp.chooseBeer();

            beerApp.userErrorMessage.style.visibility = "hidden";
            main = document.querySelector('main');
            main.classList.add("visible");
            main.scrollIntoView();
        })
        .catch(function () {
            beerApp.userErrorMessage.style.visibility = "visible";
        })
}

beerApp.chooseBeer = function () {
    const currentTemp = Math.floor(beerApp.currentWeather.main.temp - 273.15);

    const categoryList = ["Pilsner", "Lager"];
    const beerList = [];

    if (currentTemp < 5) {
        categoryList.push("Stout", "Porter", "IIPA", "Black Lager", "Amber Lager")

        beerList.push(...beerApp.allBeer.filter(beer => {
            return beer.category != "Sour" && beer.abv >= 6;
        }))

    } else if (currentTemp >= 5) {

        if (currentTemp < 15) {
            categoryList.push("wheat", "Saison", "IIPA", "APA");

            beerList.push(...beerApp.allBeer.filter(beer => {
                return beer.category === "IPA" && beer.abv >= 6;
            }))
        }
    }
    if (currentTemp >= 10) {
        categoryList.push("Sour");

        beerList.push(...beerApp.allBeer.filter(beer => {
            return beer.category === "IPA" && beer.abv < 6;
        }))

        if (currentTemp >= 15) {
            categoryList.push("Cider", "Hard Seltzer");
        }
    }

    categoryList.forEach(category => {
        beerList.push(...beerApp.allBeer.filter(beer => {
            return beer.category === category && !beerList.includes(beer);
        }));
    });

    const randomValue = Math.floor(Math.random() * beerList.length);
    const beerSuggestion = beerList[randomValue];

    beerApp.displayInfo(beerSuggestion, currentTemp);
}

beerApp.displayInfo = function (beerSuggestion, currentTemp) {
    const weatherElement = document.querySelector('.weather');
    weatherElement.innerText = `${beerApp.currentWeather.name} ${currentTemp}?? ${beerApp.currentWeather.weather[0].description}`;

    const breweries = document.querySelectorAll('.brewery');
    breweries.forEach(brewery => {
        brewery.innerText = `${beerSuggestion.parent.brewery}`
    });

    const beerNames = document.querySelectorAll('.beer-name');
    beerNames.forEach(beerName => {
        beerName.innerText = `${beerSuggestion.name}`
    });

    const beerDescription = document.querySelector('.beer-description');
    beerDescription.innerText = `${beerSuggestion.description}`;

    const beerType = document.querySelector('.beer-type');
    beerType.innerText = `${beerSuggestion.type}`;

    const beerImage = document.querySelector('.beer-image');
    beerImage.src = `${beerSuggestion.img}`;
    beerImage.alt = `${beerSuggestion.name} craft beverage from ${beerSuggestion.parent.brewery}.`;

    const beerAbv = document.querySelector('.abv');
    beerAbv.innerText = `${beerSuggestion.abv}% abv`;

    const beerFb = document.querySelector('.facebook');
    beerFb.href = `${beerSuggestion.parent.facebook}`;

    const beerInsta = document.querySelector('.instagram');
    beerInsta.href = `${beerSuggestion.parent.instagram}`;

    const beerWebsite = document.querySelector('.website');
    beerWebsite.href = `https://${beerSuggestion.parent.website}/`;
    beerWebsite.innerText = `${beerSuggestion.parent.website}`;

    const breweryAddress = document.querySelector('.location');
    breweryAddress.innerHTML = `
      <i class="fas fa-map-marker-alt"></i>
      <span>${beerSuggestion.parent.location}</span> 
    `;
    breweryAddress.addEventListener('click', function (event) {
        event.stopPropagation();
        beerApp.displayMap(beerSuggestion);
    });
}

beerApp.createMap = function () {
    beerApp.myMap = new L.Map(
        "mapid",
        {
            center: new L.LatLng(
                43.673800, -79.330520
            ),
            zoom: 14,
            layers: new L.TileLayer("https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=YR3vNPdVXM0k8f2oqpUn")
        }
    );
}

beerApp.displayMap = function (beerSuggestion) {
    if(beerApp.marker) {
        beerApp.myMap.removeLayer(beerApp.marker);
    }

    beerApp.marker = L.marker([beerSuggestion.parent.lat, beerSuggestion.parent.long]).addTo(beerApp.myMap);
    beerApp.marker.bindPopup(beerSuggestion.parent.brewery).openPopup();

    beerApp.myMap.setView(new L.LatLng(beerSuggestion.parent.lat, beerSuggestion.parent.long));

    beerApp.modalContainer.style.visibility = 'visible';
}

beerApp.init();