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

    //SHOES
    {
    id: 'sh01',
    category: 'shoes',
    name: "Nike Court Air Zoom Vapor",
    price: 3290000,
    image: "images/shoes/nike_air_zoom_vapor.png",
    description: "Featuring responsive Zoom Air cushioning and a low-profile design, the Court Air Zoom Vapor delivers exceptional court feel, lockdown stability, and advanced breathability for the elite competitor."
    },
    {
    id: 'sh02',
    category: 'shoes',
    name: "Adidas Adizero Ubersonic",
    price: 2790000,
    image: "images/shoes/adidas_adizero_ubersonic.png",
    description: "Engineered for lightning-fast agility, the Adizero Ubersonic combines a feather-light mesh upper with a Continental™ rubber outsole, offering superior traction and durability on every surface."
    },
    {
    id: 'sh03',
    category: 'shoes',
    name: "Asics Gel-Resolution 8",
    price: 2490000,
    image: "images/shoes/asics_gel_resolution8.png",
    description: "Incorporating advanced GEL™ technology in both the heel and forefoot, the Gel-Resolution 8 provides industry-leading shock absorption and unparalleled support during high-impact play."
    },
    {
    id: 'sh04',
    category: 'shoes',
    name: "New Balance FuelCell 996v4",
    price: 3090000,
    image: "images/shoes/nb_fuelcell_996v4.png",
    description: "Powered by FuelCell® midsole foam for an energetic, propulsive feel, and crafted with a seamless Hypoknit upper, the 996v4 offers precise lockdown and luxurious comfort."
    },
    {
    id: 'sh05',
    category: 'shoes',
    name: "Wilson Rush Pro 3.0",
    price: 2590000,
    image: "images/shoes/wilson_rush_pro3.png",
    description: "Designed for the high-intensity athlete, the Rush Pro 3.0 features R-DST+ cushioning and a Duralast outsole for optimal responsiveness and enduring traction during every rally."
    },
    {
    id: 'sh06',
    category: 'shoes',
    name: "Babolat Propulse Fury",
    price: 2390000,
    image: "images/shoes/babolat_propulse_fury.png",
    description: "Equipped with the Kompressor System for superior shock absorption and a Michelin® performance outsole, the Propulse Fury delivers lasting grip and stability in marathon matches."
    },
    {
    id: 'sh07',
    category: 'shoes',
    name: "Head Sprint Pro 3.0",
    price: 1990000,
    image: "images/shoes/head_sprint_pro3.png",
    description: "The Sprint Pro 3.0 blends ultra-lightweight construction with a durable Grip+ outsole, ensuring rapid court-to-court transitions and premium support under pressure."
    },
    {
    id: 'sh08',
    category: 'shoes',
    name: "Yonex Power Cushion Eclipsion 3",
    price: 2890000,
    image: "images/shoes/yonex_eclipsion3.png",
    description: "Featuring Power Cushion+ technology for exceptional shock dispersal and rebound, the Eclipsion 3 provides superior stability and a secure fit for advanced players."
    },
    {
    id: 'sh09',
    category: 'shoes',
    name: "Puma Legacy Pro",
    price: 2190000,
    image: "images/shoes/puma_legacy_pro.png",
    description: "With ProFoam cushioning for immediate responsiveness and a molded midfoot cage for enhanced support, the Legacy Pro balances durability with refined court control."
    },
    {
    id: 'sh10',
    category: 'shoes',
    name: "Tecnifibre T-Fight 10",
    price: 2690000,
    image: "images/shoes/tecnifibre_tfight10.png",
    description: "Engineered with a T-Wings anti-torsion system and Michelin® performance outsole, the T-Fight 10 delivers precise stability and uncompromising grip for strategic, high-speed play."
    },

    // Men's Tops
    {
    id: 'mt01',
    category: 'men',
    subCategory: 'tops',
    name: "Nike Dri-FIT Advantage Polo",
    price: 1299000,
    image: "images/men/tops/nike_drifit_polo.png",
    description: "Crafted from lightweight Dri-FIT fabric for superior moisture management, the Advantage Polo offers a refined silhouette, UV protection, and stretch for unhindered court movement."
    },
    {
    id: 'mt02',
    category: 'men',
    subCategory: 'tops',
    name: "Adidas Primeblue Club Tee",
    price: 699000,
    image: "images/men/tops/adidas_primeblue_tee.png",
    description: "Made with Parley Ocean Plastic, this Primeblue Club Tee delivers breathable comfort and a modern fit, featuring moisture-absorbing AEROREADY technology for all-day performance."
    },
    {
    id: 'mt03',
    category: 'men',
    subCategory: 'tops',
    name: "Under Armour Tech 2.0 Short Sleeve",
    price: 599000,
    image: "images/men/tops/ua_tech2_shortsleeve.png",
    description: "Engineered from ultra-soft, quick-dry fabric, the Tech 2.0 Tee offers 4-way stretch and anti-odor technology, ensuring freshness and unrestricted movement during intense rallies."
    },
    {
    id: 'mt04',
    category: 'men',
    subCategory: 'tops',
    name: "Lacoste Sport Stretch Jersey Polo",
    price: 2199000,
    image: "images/men/tops/lacoste_stretch_polo.png",
    description: "This signature Stretch Jersey Polo combines heritage style with modern performance—its bi-stretch cotton blend provides exceptional freedom of motion and a sleek, tailored look."
    },
    {
    id: 'mt05',
    category: 'men',
    subCategory: 'tops',
    name: "Yonex Crew Neck Performance Tee",
    price: 749000,
    image: "images/men/tops/yonex_performance_tee.png",
    description: "Featuring Yonex’s DRYMASTER technology and strategic mesh panels, this Crew Neck Tee offers superior ventilation and a comfortable, athletic fit for intense play."
    },
    {
    id: 'mt06',
    category: 'men',
    subCategory: 'tops',
    name: "Puma Ultraweave Polo",
    price: 1550000,
    image: "images/men/tops/puma_ultraweave_polo.png",
    description: "Constructed with ULTRAWEAVE fabric for dynamic stretch and support, this polo combines a classic cut with moisture-wicking capabilities for peak court performance."
    },
    {
    id: 'mt07',
    category: 'men',
    subCategory: 'tops',
    name: "Asics Silver Long Sleeve",
    price: 899000,
    image: "images/men/tops/asics_silver_ls.png",
    description: "Designed with Silver Plus anti-odor technology and brushed interior for warmth, this long-sleeve top offers lightweight insulation and a streamlined fit."
    },
    {
    id: 'mt08',
    category: 'men',
    subCategory: 'tops',
    name: "New Balance HeatGrid Quarter-Zip",
    price: 1799000,
    image: "images/men/tops/nb_heatgrid_quarterzip.png",
    description: "The HeatGrid Quarter-Zip features a thermo-regulating grid fleece and articulated sleeves for unrestricted swing mechanics, delivering premium warmth on cooler days."
    },
    {
    id: 'mt09',
    category: 'men',
    subCategory: 'tops',
    name: "Wilson Performance Tank",
    price: 649000,
    image: "images/men/tops/wilson_perf_tank.png",
    description: "A sleeveless essential with stretch mesh panels and quick-dry fabrication, the Performance Tank offers maximum breathability and freedom of motion."
    },
    {
    id: 'mt10',
    category: 'men',
    subCategory: 'tops',
    name: "Tecnifibre Stretch Polo",
    price: 1399000,
    image: "images/men/tops/tecnifibre_stretch_polo.png",
    description: "Engineered for elite athletes, this Stretch Polo features a four-way stretch knit, moisture-management fibers, and a refined collar for a polished, performance-driven look."
    },

    // Men's Bottoms
    {
    id: 'mb01',
    category: 'men',
    subCategory: 'bottoms',
    name: "Nike Flex Ace 9” Shorts",
    price: 899000,
    image: "images/men/bottoms/nike_flex_shorts.png",
    description: "Constructed from Nike Flex fabric for natural mobility, these 9-inch shorts feature Dri-FIT technology and built-in stretch liner for unmatched comfort."
    },
    {
    id: 'mb02',
    category: 'men',
    subCategory: 'bottoms',
    name: "Adidas Club 7” Knit Short",
    price: 699000,
    image: "images/men/bottoms/adidas_club_shorts.png",
    description: "Featuring moisture-managing AEROREADY fabric and side slit details, the Club Knit Short offers a classic fit with enhanced breathability."
    },
    {
    id: 'mb03',
    category: 'men',
    subCategory: 'bottoms',
    name: "Under Armour Challenger Shorts",
    price: 749000,
    image: "images/men/bottoms/ua_challenger_shorts.png",
    description: "Light-weight and durable, the Challenger Shorts offer four-way stretch, anti-odor finish, and mesh back panels to keep you cool during intense rallies."
    },
    {
    id: 'mb04',
    category: 'men',
    subCategory: 'bottoms',
    name: "Lululemon Surge Jogger",
    price: 1999000,
    image: "images/men/bottoms/lulu_surge_jogger.png",
    description: "Designed for high-impact movement, these joggers feature sweat-wicking Warpstreme™ fabric and articulated knees for a full range of motion."
    },
    {
    id: 'mb05',
    category: 'men',
    subCategory: 'bottoms',
    name: "Asics Silver 5” Short",
    price: 849000,
    image: "images/men/bottoms/asics_silver_shorts.png",
    description: "Silver Plus anti-odor technology and stretch mesh waistband make these 5-inch shorts a superior choice for cooler-climate performance."
    },
    {
    id: 'mb06',
    category: 'men',
    subCategory: 'bottoms',
    name: "New Balance Impact Run Shorts",
    price: 799000,
    image: "images/men/bottoms/nb_impact_shorts.png",
    description: "Featuring a lightweight, moisture-wicking shell and built-in briefs, these Impact Run Shorts balance support with breathability for maximum agility."
    },
    {
    id: 'mb07',
    category: 'men',
    subCategory: 'bottoms',
    name: "Puma LUX Woven Pant",
    price: 1599000,
    image: "images/men/bottoms/puma_lux_pant.png",
    description: "Crafted from performance woven fabric with water-repellent finish, the LUX Pant offers refined style and weather protection during warm-ups or cool-downs."
    },
    {
    id: 'mb08',
    category: 'men',
    subCategory: 'bottoms',
    name: "Wilson Match Knit Pant",
    price: 1299000,
    image: "images/men/bottoms/wilson_match_pant.png",
    description: "A premium knit pant with ribbed cuffs, side pockets, and a slim leg, ideal for pre-match routines and off-court comfort."
    },
    {
    id: 'mb09',
    category: 'men',
    subCategory: 'bottoms',
    name: "Tecnifibre Performance Pants",
    price: 1450000,
    image: "images/men/bottoms/tecnifibre_perf_pant.png",
    description: "Designed with stretch woven fabric and tapered leg, these Performance Pants offer moisture-management and a clean, tailored look."
    },
    {
    id: 'mb10',
    category: 'men',
    subCategory: 'bottoms',
    name: "Yonex Core 6” Short",
    price: 699000,
    image: "images/men/bottoms/yonex_core_shorts.png",
    description: "Featuring DRYMASTER quick-dry fabric and an adjustable waistband, the Core 6” Short delivers dependable comfort and performance on court."
    },

    // Women's Tops
    {
    id: 'wt01',
    category: 'women',
    subCategory: 'tops',
    name: "Nike Dri-FIT Scoop Tank",
    price: 599000,
    image: "images/women/tops/nike_scoop_tank.png",
    description: "This scoop-neck tank features Dri-FIT technology and stretch mesh panels for exceptional ventilation and an unrestricted range of motion."
    },
    {
    id: 'wt02',
    category: 'women',
    subCategory: 'tops',
    name: "Adidas Primeblue AEROREADY Tee",
    price: 699000,
    image: "images/women/tops/adidas_primeblue_tee.png",
    description: "Crafted from ocean-bound plastic waste with AEROREADY moisture-management, this Tee offers a soft handfeel and sustainable performance."
    },
    {
    id: 'wt03',
    category: 'women',
    subCategory: 'tops',
    name: "Under Armour Tech Twist V-Neck",
    price: 649000,
    image: "images/women/tops/ua_tech_twist.png",
    description: "Featuring a flattering twist-back design and quick-dry fabric, the Tech Twist V-Neck offers comfort and style for both on- and off-court wear."
    },
    {
    id: 'wt04',
    category: 'women',
    subCategory: 'tops',
    name: "Lululemon Swiftly Tech Long Sleeve",
    price: 999000,
    image: "images/women/tops/lulu_swiftly_ls.png",
    description: "Seamless construction and anti-odor technology combine to make this Long Sleeve a luxurious, second-skin top for high-intensity training."
    },
    {
    id: 'wt05',
    category: 'women',
    subCategory: 'tops',
    name: "Asics Silver Tank",
    price: 749000,
    image: "images/women/tops/asics_silver_tank.png",
    description: "Lightweight and breathable, the Silver Tank features Silver Plus anti-odor technology and a racerback cut for enhanced cooling."
    },
    {
    id: 'wt06',
    category: 'women',
    subCategory: 'tops',
    name: "New Balance Impact Run Crop",
    price: 799000,
    image: "images/women/tops/nb_impact_crop.png",
    description: "A supportive crop top with breathable mesh back and quick-dry fabric, designed to keep you cool during intense matches."
    },
    {
    id: 'wt07',
    category: 'women',
    subCategory: 'tops',
    name: "Wilson Court Luxe Polo",
    price: 1299000,
    image: "images/women/tops/wilson_court_luxe_polo.png",
    description: "This Court Luxe Polo blends soft pique cotton with moisture-wicking performance fibers for a premium feel and classic style."
    },
    {
    id: 'wt08',
    category: 'women',
    subCategory: 'tops',
    name: "Puma Evostripe Crop Tee",
    price: 699000,
    image: "images/women/tops/puma_evostripe_tee.png",
    description: "Featuring dynamic Evostripe panels and breathable mesh inserts, this Crop Tee offers unparalleled freedom of movement."
    },
    {
    id: 'wt09',
    category: 'women',
    subCategory: 'tops',
    name: "Tecnifibre X-Seamless Top",
    price: 899000,
    image: "images/women/tops/tecnifibre_xseamless_top.png",
    description: "With seamless construction and targeted compression zones, the X-Seamless Top provides support and chafe-free comfort."
    },
    {
    id: 'wt10',
    category: 'women',
    subCategory: 'tops',
    name: "Yonex Crew Neck Performance Tee",
    price: 749000,
    image: "images/women/tops/yonex_crew_perf_tee.png",
    description: "This performance tee features DRYMASTER rapid-dry technology and ergonomic seams to deliver a flawless fit and superior moisture control."
    },

    // Women's Bottoms
    {
    id: 'wb01',
    category: 'women',
    subCategory: 'bottoms',
    name: "Nike Dri-FIT 7” Shorts",
    price: 699000,
    image: "images/women/bottoms/nike_drifit_shorts_women.png",
    description: "These 7-inch shorts combine lightweight Dri-FIT fabric with built-in liner for support and breathability, perfect for intense court play."
    },
    {
    id: 'wb02',
    category: 'women',
    subCategory: 'bottoms',
    name: "Adidas Club Primeblue Skirt",
    price: 899000,
    image: "images/women/bottoms/adidas_primeblue_skirt.png",
    description: "Made with Parley Ocean Plastic, the Club Skirt features built-in shorts, moisture-wicking fabric, and a stretch waistband for a clean, polished look."
    },
    {
    id: 'wb03',
    category: 'women',
    subCategory: 'bottoms',
    name: "Under Armour Play Up Shorts",
    price: 649000,
    image: "images/women/bottoms/ua_playup_shorts.png",
    description: "Designed for active women, these Play Up Shorts offer lightning-dry fabric, side mesh panels, and a comfortable elastic waistband."
    },
    {
    id: 'wb04',
    category: 'women',
    subCategory: 'bottoms',
    name: "Lululemon Pace Rival Crop",
    price: 1299000,
    image: "images/women/bottoms/lulu_pace_rival_crop.png",
    description: "Engineered for peak performance, the Pace Rival Crop features Luxtreme™ fabric and secure waistband pockets for essentials on the go."
    },
    {
    id: 'wb05',
    category: 'women',
    subCategory: 'bottoms',
    name: "Asics Silver 7” Short",
    price: 749000,
    image: "images/women/bottoms/asics_silver7_shorts.png",
    description: "Featuring Silver Plus anti-odor technology and stretch mesh side panels, providing superior airflow and freshness."
    },
    {
    id: 'wb06',
    category: 'women',
    subCategory: 'bottoms',
    name: "New Balance Accelerate Capri",
    price: 999000,
    image: "images/women/bottoms/nb_accelerate_capri.png",
    description: "This capri legging offers a high-rise fit, NB DRY quick-dry fabric, and hidden waistband pocket, perfect for extended court sessions."
    },
    {
    id: 'wb07',
    category: 'women',
    subCategory: 'bottoms',
    name: "Wilson Athletic Skirt",
    price: 899000,
    image: "images/women/bottoms/wilson_athletic_skirt.png",
    description: "A classic athletic skirt with integrated shorts, moisture-wicking fibers, and back pocket to keep essentials secure during play."
    },
    {
    id: 'wb08',
    category: 'women',
    subCategory: 'bottoms',
    name: "Puma Fit Knit Joggers",
    price: 1199000,
    image: "images/women/bottoms/puma_fit_knit_joggers.png",
    description: "Crafted from lightweight knit fabric with tapered ankle, these joggers offer a sleek silhouette and moisture management for warm-ups."
    },
    {
    id: 'wb09',
    category: 'women',
    subCategory: 'bottoms',
    name: "Tecnifibre X-Motion Tight",
    price: 1099000,
    image: "images/women/bottoms/tecnifibre_xmotion_tight.png",
    description: "Featuring ergonomic seams and a compressive fit, the X-Motion Tight enhances muscle support and offers superior freedom of movement."
    },
    {
    id: 'wb10',
    category: 'women',
    subCategory: 'bottoms',
    name: "Yonex Core Skirt",
    price: 849000,
    image: "images/women/bottoms/yonex_core_skirt.png",
    description: "This Core Skirt combines DRYMASTER quick-dry fabric with integrated shorts and a flattering A-line silhouette for effortless style."
    }

];
export default products;