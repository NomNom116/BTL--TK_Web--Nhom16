const products = [
    //rackets
    {
    id: 'rc01',
    category: 'rackets',
    name: "Wilson Roland Garros Team 102 RKT 2",
    price: 2450000,
    image: "images/rackets/9.png",
    description: "Roland Garros Edition Design: This racket features signature patterns and colors inspired by the prestigious Roland Garros tournament."
    },
    {
    id: 'rc02',
    category: 'rackets',
    name: "Wilson Pro Staff Precision 100 TNS RKT",
    price: 3051000,
    image: "images/rackets/10.png",
    description: "Crafted from high-quality graphite, this racket offers exceptional vibration absorption, enhanced energy return, and impressive power—all while maintaining a lightweight feel for effortless handling."
    },
    {
    id: 'rc03',
    category: 'rackets',
    name: "Wilson Blade 100L V9",
    price: 5948000,
    image: "images/rackets/11.png",
    description: "Designed for dedicated players, the Wilson Blade 100L V9 FRM offers a perfect blend of control, feel, and stability for confident performance on the court."
    },
    {
    id: 'rc04',
    category: 'rackets',
    name: "Wilson Ultra Power 105 RXT TNS RKT",
    price: 1776000,
    image: "images/rackets/12.png",
    description: "Designed for intermediate players, the Ultra Power 105 RXT delivers the ideal combination of explosive power, rock-solid stability, and precise control to elevate your game."
    },
    {
    id: 'rc05',
    category: 'rackets',
    name: "Wilson Clash 100L V3.0 RG 2025 FRM",
    price: 6499000,
    image: "images/rackets/13.png",
    description: "With a design that balances exceptional control, explosive power, and dynamic flexibility, the Clash V3 redefines performance — and becomes your most trusted ally on the court."
    },
    {
    id: 'rc06',
    category: 'rackets',
    name: "Wilson Fusion XL",
    price: 4999000,
    image: "images/rackets/14.png",
    description: "Unleash your passion for the game with the WILSON Fusion XL — an oversized adult racket built for easy power and confident swings."
    },
    {
    id: 'rc07',
    category: 'rackets',
    name: "Wilson Clash Junior 26 V3",
    price: 3144000,
    image: "images/rackets/15.png",
    description: "Constructed with 100% graphite, the Wilson Clash 26 V3 Junior stands out as one of the most premium tennis rackets designed for junior players."
    },
    {
    id: 'rc08',
    category: 'rackets',
    name: "Wilson Clash 100 V3",
    price: 7130000,
    image: "images/rackets/16.png",
    description: "Leading the highly popular Clash series, the Clash 100 V3 refines its trusted design to deliver power, consistency, and control—empowering players of all levels to perform their best on the court."
    },
        {
    id: 'rc09',
    category: 'rackets',
    name: "Wilson Intrigue SE Pink",
    price: 7130000,
    image: "images/rackets/17.png",
    description: "With its elegant pink design, the Wilson Intrigue SE 105 (264g) is a stylish and powerful companion for beginners stepping into the world of tennis."
    },

    //accessories
    {
    id: 'acc01',
    name: 'Wilson Pro Overgrip',
    category: 'accessories',
    subCategory: 'Grip & Overgrip',
    price: 250000,
    salePrice: 200000,
    image: 'images/accessories/wilson_pro-overgrip.png',
    description: 'Includes three high-quality overgrips designed to provide a secure, non-slip hold for enhanced comfort and control.'
    },
    {
    id: 'acc02',
    name: 'Yonex Super Grap Grip',
    category: 'accessories',
    subCategory: 'Grip & Overgrip',
    price: 300000,
    image: 'images/accessories/yonex_super-grap-grip.png',
    description: 'Featuring a firm hold, breathable material, and superior durability, the Yonex Super Grap Overgrip is a top choice for players.'
    },
    {
    id: 'acc03',
    name: 'Wilson Headband Classic',
    category: 'accessories',
    subCategory: 'Headband & Wristband',
    price: 180000,
    image: 'images/accessories/wilson_headband.png',
    description: 'Stay dry and stylish with the Wilson moisture-wicking sweatband, designed for athletes.'
    },
    {
    id: 'acc04',
    name: 'Nike Dri-FIT Wristband',
    category: 'accessories',
    subCategory: 'Headband & Wristband',
    price: 150000,
    salePrice: 120000,
    image: 'images/accessories/nike_wristband.png',
    description: 'Crafted from breathable, stretchable material, the Nike Dri-FIT Wristband keeps you comfortable during play.'
    },
    {
    id: 'acc05',
    name: 'Babolat Racquet Bag',
    category: 'accessories',
    subCategory: 'Racquet Bag',
    price: 300000,
    image: 'images/accessories/babolat_racket-bag.png',
    description: 'Designed to protect your racket with shock-resistant materials, the Babolat Racket Bag is a must-have accessory.'
    },
    {
    id: 'acc06',
    name: 'Adidas Tennis Hat',
    category: 'accessories',
    subCategory: 'Hat',
    price: 350000,
    image: 'images/accessories/adidas_hat.png',
    description: 'Stay cool and stylish with the Adidas cap, designed with breathable material and an eye-catching embroidered logo.'
    },
    {
    id: 'acc07',
    name: 'CamelBak Chute Bottle',
    category: 'accessories',
    subCategory: 'Bottle',
    price: 400000,
    image: 'images/accessories/camelbak_bottle.png',
    description: 'Stay hydrated with the 750ml CamelBak Chute water bottle, featuring leak-proof functionality and easy maintenance.'
    },

    //bags
    {
    id: 'bg01',
    category: 'bags',
    name: "Wilson Super Tour 2 RKT Bag",
    price: 2899000,
    image: "images/bags/wilson_bag.png",
    description: "Designed for convenience, the Wilson Super Tour Bag includes dual racket compartments, a thermal mesh pocket for temperature control, and several accessory pockets."
    },
    {
    id: 'bg02',
    category: 'bags',
    name: "Babolat Pure Strike Racket Holder x6",
    price: 1999000,
    image: "images/bags/babolat_bag.png",
    description: "Babolat Pure Strike Racket Holder x6 accommodates 6 rackets, includes a Thermoguard thermal compartment, and sports a sleek, contemporary color scheme."
    },
    {
    id: 'bg03',
    category: 'bags',
    name: "Head Tour Team 3R Pro",
    price: 1599000,
    image: "images/bags/head_bag.png",
    description: "Designed for convenience and protection, the Head Tour Team 3R Pro includes space for 3 rackets, water-resistant construction, a shoe compartment, and cushioned shoulder straps."
    },
    {
    id: 'bg04',
    category: 'bags',
    name: "Yonex Pro Tournament 4 RKT Bag",
    price: 2399000,
    image: "images/bags/yonex_bag.png",
    description: "Designed for tournament players, the Yonex Pro Tournament Bag offers 4 racket compartments, insulated protection, and ample accessory and water bottle storage."
    },
    {
    id: 'bg05',
    category: 'bags',
    name: "Roland-Garros 2025 Team Backpack",
    price: 1799000,
    image: "images/bags/wilson_backpack.png",
    description: "Experience the elegance and prestige of Roland-Garros like you're part of the action with this Team Backpack. Featuring colors and design accents from the 2025 clay-court slam, this compact yet spacious pack has a locking zip compartment to carry up to two rackets. A ventilated area can accommodate a pair of shoes or clothing, and there's a padded sleeve for a laptop or tablet, as well as accessory pockets for snacks, a water bottle and personal items. Adjustable straps make it easy and comfortable to carry. Travel light with everything you need to play."
    },

];
export default products;