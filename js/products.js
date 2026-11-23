
const products = {
  skincare: [
    {
      id: "skincare-1",
      name: "Glow Face Cream",
      desc: "A silky face cream that reveals smoother, brighter, and naturally radiant skin.",
      price: 400,
      img: "./imgs/كريم جمال جوسون وسط أزهار رقيقة (1).png",
      tag: "best",
      soldOut: true
    },
    {
      id: "skincare-2",
      name: "Berry Lip Mask",
      desc: "A luxurious berry-infused lip mask for deep hydration and irresistibly soft, smooth lips.",
      price: 400,
      img: "./imgs/قناع الشفاه بالتوت في أجواء وردية.png",
      tag: "best",
      soldOut: false
    },
    {
      id: "skincare-3",
      name: "Peach & Niacinamide Serum",
      desc: "A brightening serum with peach and niacinamide for smoother, more even-looking skin.",
      price: 400,
      img: "./imgs/سيروم أنوا بالخوخ والنياسيناميد.png",
      tag: "best",
      soldOut: false
    },
    {
      id: "skincare-4",
      name: "Luxury Serum Set",
      desc: "A luxury serum set that deeply hydrates and restores your skin's youthful look.",
      price: 300,
      img: "./imgs/maria-lupan-wr2MdSZpFu4-unsplash.jpg",
      tag: "new",
      soldOut: false
    },
    {
      id: "skincare-5",
      name: "CBD Hand Cream",
      desc: "A rich CBD hand cream that eliminates dryness and leaves a velvety softness.",
      price: 200,
      img: "./imgs/close-up-woman-using-cbd-cream-pain.jpg",
      tag: "new",
      soldOut: false
    },
    {
      id: "skincare-6",
      name: "Radiance Skincare Trio",
      desc: "An essential skincare trio designed to boost radiance and provide daily nourishment.",
      price: 360,
      img: "./imgs/aleksandrs-karevs-V2Ks2FTkdEk-unsplash.jpg",
      tag: "new",
      soldOut: false
    },
    {
      id: "skincare-7",
      name: "Beauty of Joseon Relief Sun SPF50+",
      desc: "Beauty of Joseon Relief Sun with rice and probiotics, SPF50+.",
      price: 900,
      img: "./imgs/1792429950462358006.webp",
      tag: "",
      soldOut: false
    },
    {
      id: "skincare-8",
      name: "Karite Hyaluronic Sheet Mask",
      desc: "Karite Aloe Vera & Hyaluronic Acid nourishing sheet mask, 30 g.",
      price: 85,
      img: "https://files.easy-orders.net/1790777947148689191.jpg",
      tag: "",
      soldOut: true
    },
    {
      id: "skincare-9",
      name: "Hydrating Brightening Face Serum",
      desc: "A lightweight face serum that deeply hydrates, brightens, and leaves your skin smooth, soft, and glowing.",
      price: 460,
      img: "./imgs/natural-cbd-oil-dropper-composition.jpg",
      tag: "",
      soldOut: false
    },
    {
      id: "skincare-10",
      name: "Arencia Vitamin C Booster Shot",
      desc: "Arencia Vitamin C booster shot, 30 ml.",
      price: 900,
      img: "./imgs/1784825913474232589.png",
      tag: "",
      soldOut: false
    },
    {
      id: "skincare-11",
      name: "Some By Mi Retinol Eye Cream",
      desc: "Some By Mi retinol eye cream.",
      price: 940,
      img: "./imgs/1784823780514301491.jpg",
      tag: "",
      soldOut: true
    },
    {
      id: "skincare-12",
      name: "Celimax Retinal Shot Booster",
      desc: "Celimax Retinal Shot tightening booster, 15 ml.",
      price: 920,
      img: "./imgs/1784825107137888827.png",
      tag: "",
      soldOut: false
    },
    {
      id: "skincare-13",
      name: "SKIN1004 Centella Travel Kit",
      desc: "SKIN1004 Centella travel kit.",
      price: 800,
      img: "./imgs/1784155459024841186.webp",
      tag: "",
      soldOut: true
    },
    {
      id: "skincare-14",
      name: "Farm Stay Aloe Vera Sun Cream",
      desc: "Farm Stay Aloe Vera Perfect Sun Cream, SPF50, 70 g.",
      price: 600,
      img: "./imgs/1786374765747146480.webp",
      tag: "",
      soldOut: true
    },
    {
      id: "skincare-15",
      name: "COSRX Aloe Soothing Sun Cream",
      desc: "COSRX Aloe Soothing Sun Cream, SPF50+ PA+++, 50 ml.",
      price: 400,
      img: "./imgs/1784821365288884179.webp",
      tag: "",
      soldOut: false
    }
  ],

  makeup: [
    {
      id: "makeup-1",
      name: "Rose Berry Matte Liquid Lipstick",
      desc: "Air brush matte liquid lipsticks that don't dry out, crease, or settle into fine lines.",
      price: 500,
      img: "https://files.easy-orders.net/1792831543214075117.avif",
      tag: "best",
      soldOut: false
    },
    {
      id: "makeup-2",
      name: "Sandra Lip Gloss Gel",
      desc: "A glossy lip gloss gel for a shiny, smooth finish.",
      price: 90,
      img: "https://files.easy-orders.net/1792832334335267392.avif",
      tag: "best",
      soldOut: true
    },
    {
      id: "makeup-3",
      name: "Last Look 2-in-1 Blush & Highlighter",
      desc: "A 2-in-1 blush and highlighter duo for a fresh, glowing look.",
      price: 250,
      img: "https://files.easy-orders.net/1789347387007652006.png",
      tag: "best",
      soldOut: false
    },
    {
      id: "makeup-4",
      name: "Rose Berry Highlighter Corrector",
      desc: "A highlighter corrector and color-correcting liquid base concealer.",
      price: 230,
      img: "https://files.easy-orders.net/1789253896767715903.webp",
      tag: "new",
      soldOut: false
    },
    {
      id: "makeup-5",
      name: "Rose Berry Face & Lip Set",
      desc: "A set with highlighter, liquid blush, and matte lip color.",
      price: 435,
      img: "https://files.easy-orders.net/1789254264238654411.webp",
      tag: "new",
      soldOut: false
    },
    {
      id: "makeup-6",
      name: "Sheglam Pore No More Primer",
      desc: "A pore-blurring primer for a smooth, poreless, oil-free look.",
      price: 590,
      img: "https://files.easy-orders.net/1786370171447037332.jpg",
      tag: "new",
      soldOut: false
    },
    {
      id: "makeup-7",
      name: "Sandra Eyeshadow Palette 10 Colors",
      desc: "A 10-color eyeshadow palette in warm nude shades.",
      price: 350,
      img: "https://files.easy-orders.net/1790248529454575815.jpeg",
      tag: "",
      soldOut: true
    },
    {
      id: "makeup-8",
      name: "Lareen Naughty Nude Palette",
      desc: "An 18-color Naughty Nude eyeshadow palette.",
      price: 550,
      img: "https://files.easy-orders.net/1792829710433094572.png",
      tag: "",
      soldOut: false
    },
    {
      id: "makeup-9",
      name: "Sandra Eyeshadow Palette 24 Colors",
      desc: "A 24-color eyeshadow palette (model SC591).",
      price: 450,
      img: "https://files.easy-orders.net/1789482685369991480.jpeg",
      tag: "",
      soldOut: false
    },
    {
      id: "makeup-10",
      name: "Rose Berry Eyeliner Pencil",
      desc: "A black eyeliner pencil for daily makeup.",
      price: 180,
      img: "https://files.easy-orders.net/1789170207277597594.webp",
      tag: "",
      soldOut: true
    },
    {
      id: "makeup-11",
      name: "Sheglam All-in-One Mascara",
      desc: "A waterproof black mascara for volume and length.",
      price: 560,
      img: "https://files.easy-orders.net/1786369691812997213.jpg",
      tag: "",
      soldOut: false
    },
    {
      id: "makeup-12",
      name: "Sheglam Dual-Ended Blue Mascara",
      desc: "A dual-ended blue mascara with patterned packaging for bold volume and length.",
      price: 520,
      img: "https://files.easy-orders.net/1786369953223860454.jpg",
      tag: "",
      soldOut: true
    },
    {
      id: "makeup-13",
      name: "BBrose Contour Palette",
      desc: "A 16-color contour palette.",
      price: 380,
      img: "https://files.easy-orders.net/1790257502440145717.jpg",
      tag: "",
      soldOut: false
    },
    {
      id: "makeup-14",
      name: "Last Look Ultimate Brow Kit",
      desc: "An ultimate brow kit for defined, shaped brows.",
      price: 220,
      img: "https://files.easy-orders.net/1789348224523750363.webp",
      tag: "",
      soldOut: false
    },
    {
      id: "makeup-15",
      name: "Rose Berry Loose Setting Powder",
      desc: "A loose setting powder in 3 shades, 29 g.",
      price: 299,
      img: "https://files.easy-orders.net/1789167740735332939.jpg",
      tag: "",
      soldOut: true
    },
    {
      id: "makeup-16",
      name: "Rose Berry Glossy Nude Lip Kit",
      desc: "A glossy nude 3-in-1 lip kit.",
      price: 490,
      img: "https://files.easy-orders.net/1789483423321997647.jpg",
      tag: "",
      soldOut: false
    },
    {
      id: "makeup-17",
      name: "Rose Berry Brows On Demand Pencil",
      desc: "A 2-in-1 brow pencil in dark brown.",
      price: 200,
      img: "https://files.easy-orders.net/1792833191884934389.jpg",
      tag: "",
      soldOut: false
    },
    {
      id: "makeup-18",
      name: "Rose Berry Airbrush Flawless Kit",
      desc: "A flawless kit with 40 ml liquid foundation, powder foundation, and radiant concealer in shade A.",
      price: 899,
      img: "https://files.easy-orders.net/1789254885227046993.jpg",
      tag: "",
      soldOut: false
    }
  ],

  bodycare: [
    {
      id: "bodycare-1",
      name: "Soothing After-Sun Lotion",
      desc: "Soothing after-sun lotion with 10% Panthenol.",
      price: 800,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxY6Gh0J-4s1_dfNTI-fEiSuUPnEV_sfY9xVnmZgP9uA&s=10",
      tag: "best",
      soldOut: false
    },
    {
      id: "bodycare-2",
      name: "Lightweight Daily Moisturizing Lotion",
      desc: "Lightweight daily moisturizing lotion for dry to very dry skin.",
      price: 500,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEwbSiK1Ebs--A6m7lpyq8ovXHrZZVC4tEXviQPhzKNg&s=10",
      tag: "best",
      soldOut: false
    },
    {
      id: "bodycare-3",
      name: "3-in-1 Antibacterial Body Wash",
      desc: "Refreshing 3-in-1 antibacterial body wash with sea salt.",
      price: 200,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDOaqRQE3AboyEfwFJClIa6I4YKcZGrvQrk-bbLh5udQ&s=10",
      tag: "best",
      soldOut: false
    },
    {
      id: "bodycare-4",
      name: "Eva Senses Body Lotion In The Clouds",
      desc: "Eva Skin Care Senses Body Lotion In The Clouds, 240 ml.",
      price: 80,
      img: "https://www.shop.eva-cosmetics.com/cdn/shop/files/2MrH7YdHXhIC2XJNmoSy4reLeYTo8C7P74pLGGyB.webp?v=1759434048&width=355",
      tag: "new",
      soldOut: false
    },
    {
      id: "bodycare-5",
      name: "Mocha Strengthening Shampoo",
      desc: "Vegan strengthening shampoo for weak hair with a mocha scent.",
      price: 135,
      img: "https://www.shop.eva-cosmetics.com/cdn/shop/files/999518.png?v=1777561770&width=355",
      tag: "new",
      soldOut: false
    },
    {
      id: "bodycare-6",
      name: "Lengthening Hair Oil",
      desc: "Lengthening hair oil infused with 10 booster oils.",
      price: 180,
      img: "https://www.shop.eva-cosmetics.com/cdn/shop/files/mihwtbg1JF4Gmj8zb9CYJPJF2Q5HICd1mtKAM91n.webp?v=1759434018&width=355",
      tag: "new",
      soldOut: false
    },
    {
      id: "bodycare-7",
      name: "Floral Musk Perfumed Body Lotion",
      desc: "Satin-smooth perfumed body lotion with a floral musk scent.",
      price: 160,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCoi_xogfFHC_a3KZ4yoVhk7AeFUE0HCSOtpasiDoqg&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "bodycare-8",
      name: "Fresh Floral Perfumed Body Lotion",
      desc: "Satin-smooth perfumed body lotion with a fresh floral scent.",
      price: 140,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWbHjWAU9bf_44P58qbxDeBDFwtdV3NaHJKAtxf0d4jQ&s",
      tag: "",
      soldOut: false
    },
    {
      id: "bodycare-9",
      name: "72-Hour Moisturizing Body Milk",
      desc: "Intense 72-hour moisturizing body milk for dry to very dry skin.",
      price: 260,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGrEpxFNXbOwQT_3qAEWoTMYb-1J2zINxImGSxHWf1hg&s",
      tag: "",
      soldOut: false
    },
    {
      id: "bodycare-10",
      name: "Coconut & Dead Sea Salt Body Scrub",
      desc: "Mineral-rich coconut and Dead Sea salt exfoliating body scrub.",
      price: 140,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFvTTLFKHJAbeNvb009qIK4j12MjafxatVCHE6Bnrtg&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "bodycare-11",
      name: "Cocoa Radiant Body Lotion",
      desc: "Non-greasy cocoa radiant body lotion for 72-hour moisture.",
      price: 400,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwpdAlLKuc50myKwqK7nDC23fiq52r1c-9B8s126x01Q&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "bodycare-12",
      name: "Gentle Hydrating Body Wash",
      desc: "Gentle hydrating body wash for soft, nourished skin.",
      price: 200,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEP03_Du0AqjqwJ0zdW9vZik4-vrPTWWkMhd0Q1KeGw&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "bodycare-13",
      name: "Baby Powder Face & Body Moisturizer",
      desc: "Non-greasy daily face and body moisturizer with a soft baby powder scent.",
      price: 160,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJdyNkrE1cMN9OAAPIDLkvaEM-m9LNOP7ZFHQW7QQEKQ&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "bodycare-14",
      name: "Candy Exfoliating Body Scrub",
      desc: "Exfoliating candy-scented body scrub for smooth, glowing skin.",
      price: 220,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Xp8Y3dTigiWahVX3YCmrfDTHvPlXWZsWZIZ0GgDpYg&s=10",
      tag: "",
      soldOut: true
    },
    {
      id: "bodycare-15",
      name: "Vanilla Sugar Body Scrub",
      desc: "Exfoliating vanilla sugar body scrub for silky-smooth skin.",
      price: 110,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExaJRAgRj7sBQ7uC8E0df8hE4tvkmilnmBRQ_1_tmOw&s",
      tag: "",
      soldOut: false
    },
    {
      id: "bodycare-16",
      name: "Strawberry Body Lotion",
      desc: "Fast-absorbing strawberry body lotion for intensive hydration.",
      price: 115,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzEb_88KOg7qeuHcjGJvi9jeYgWfA5mFlAJDN0QFoheA&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "bodycare-17",
      name: "Strawberry Exfoliating Body Scrub",
      desc: "Refreshing strawberry exfoliating body scrub for glowing skin.",
      price: 130,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4uWc5k2MXnPF3cqnpSSUcgMQA70E48gnfYTSpv1veSA&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "bodycare-18",
      name: "Sea Salt Body Scrub",
      desc: "Mineral-rich sea salt body scrub for deeply exfoliated, radiant skin.",
      price: 900,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyN8rUd-fz1Z2-YQ9-BE8960ZZ3thlopFiKkYdNiHyw&s=10",
      tag: "",
      soldOut: false
    }
  ],
  haircare: [
    {
      id: "haircare-1",
      name: "Hairfall Control Hair Mask",
      desc: "Hairfall control mask for dry and damaged hair.",
      price: 220,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4hctd_P-o-KvTTNM7AbM2PfU6LJHKFpZMqi9HHo6LQ&s",
      tag: "best",
      soldOut: false
    },
    {
      id: "haircare-2",
      name: "Keratin & Marula Smoothing Mask",
      desc: "Deep smoothing hair mask with keratin and marula oil for frizz control.",
      price: 250,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAhxueejNitamDscUAEbXAlK8gh8H6GwzhFonieHhneA&s=10",
      tag: "best",
      soldOut: true
    },
    {
      id: "haircare-3",
      name: "Length-Boosting Hair Oil Elixir",
      desc: "Length-boosting hair oil elixir for all hair types.",
      price: 260,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe3LXS0ommGnhBcvoN6sHQPlJPCNLbx4W8SdNdt4HMCQ&s",
      tag: "best",
      soldOut: false
    },
    {
      id: "haircare-4",
      name: "High-Shine Intensive Conditioner",
      desc: "High-shine intensive conditioner for dull, dry hair.",
      price: 450,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdeAuMJD8a-as5GSQji78cNelT0_4fXAtMQQ5VR7zMiw&s",
      tag: "new",
      soldOut: false
    },
    {
      id: "haircare-5",
      name: "Nourishing Leave-In Conditioner",
      desc: "Nourishing leave-in conditioner to hydrate, detangle, and strengthen hair.",
      price: 750,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhJHWovfdK-26w5-KHNXr-Y5ZevzD04pAcnPK5OZACA&s",
      tag: "new",
      soldOut: false
    },
    {
      id: "haircare-6",
      name: "Mango, Cocoa & Shea Conditioner",
      desc: "Ultra-hydrating conditioner enriched with mango, cocoa, and shea butters.",
      price: 230,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3UladDF37R4y-apsXkFWsBZFHN9FxVTT2xOlGfNyliw&s",
      tag: "new",
      soldOut: false
    },
    {
      id: "haircare-7",
      name: "Overnight Leave-In Hair Mask",
      desc: "Hydrating overnight leave-in hair mask for soft, nourished hair.",
      price: 900,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3KOxOyWd2ujhH1lwDCh4u1GDzwNDtWANNLUwNbhGROg&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "haircare-8",
      name: "Hair Growth Scalp Serum",
      desc: "Scalp serum to support healthy hair growth and thickness.",
      price: 300,
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSNxCDGkdvrdlVVJh7shlHQMagaUrk2Zr0po9KgUrHy1tcWSacLMy30BRe-RSQPCs9bXhOWyXzyH3so2nQq8qQMHR7WhEAMeG_9hj2Uz7rYSSgf6FdI4Pd85NLrgFtiGbXFfw&usqp=CAc",
      tag: "",
      soldOut: false
    },
    {
      id: "haircare-9",
      name: "Hair Rescue Set",
      desc: "Complete hair rescue set featuring a purifying shampoo and repairing hair mask.",
      price: 700,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVYTNVmqF1BTzoxfGu6FD3yVwSbd2I1O79VdnjqN0zBw&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "haircare-10",
      name: "Botanical Curl Care Trio",
      desc: "Botanical curl care trio for hydrated, bouncy, defined curls.",
      price: 900,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlS7sneD3V0_W79i-GsfEMJeNH3jFbTFvMYB4VS1m6MQ&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "haircare-11",
      name: "Curly Hair Care Set",
      desc: "Complete curly hair care set for frizz-free, nourished curls.",
      price: 900,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_BRY9cRHLejZwNnOesbUUE5QWdXoev7e80EoNlW2YaA&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "haircare-12",
      name: "Natural Haircare Collection",
      desc: "Natural haircare collection for healthy, radiant, nourished hair.",
      price: 950,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSta4aciObV-lSx4f9hwevk83uWkCgPVLoFSnV8Lqx6eA&s",
      tag: "",
      soldOut: false
    },
    {
      id: "haircare-13",
      name: "Hairfall Control Conditioner",
      desc: "Hairfall control conditioner for soft, strengthened hair.",
      price: 210,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOOpXmC_5UTAN8HGdsyQE4AaCwA8jLrLM25KYHZsKO6g&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "haircare-14",
      name: "Curl Moisturizing Conditioner",
      desc: "Moisturizing conditioner for soft, frizz-free curls.",
      price: 140,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWIpRyqMlMQ4aBbaxSsMPJGgUwxq5vFnwZJNvh5p7jCg&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "haircare-15",
      name: "Nourishing Smooth Conditioner",
      desc: "Nourishing conditioner for smooth, hydrated hair.",
      price: 170,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKydIpTtZI3eIGuF2SPJXUm89tsyrk2x2df2T4CsNyPQ&s",
      tag: "",
      soldOut: false
    },
    {
      id: "haircare-16",
      name: "Luxury Haircare Travel Kit",
      desc: "Luxury haircare travel kit with styling essentials and a cosmetic pouch.",
      price: 900,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYyiBN45lWLdn7DXKsrYCwYPY_Im-7142jTcCd7nQAyw&s",
      tag: "",
      soldOut: true
    },
    {
      id: "haircare-17",
      name: "Indian Herbs Hair Cream",
      desc: "Nourishing hair cream infused with Indian herbs for soft, healthy hair.",
      price: 110,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT0Y7xPYOQMsZGLL71UMcGaxrXXJg3gUNo_uXoET1YVw&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "haircare-18",
      name: "Professional Curl Care Routine",
      desc: "Professional curl care routine for deep hydration and long-lasting definition.",
      price: 900,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8RxSltG9WiXsGTOE7BBFxeZhdLLgP-7AQcLPrzQRvQ&s=10",
      tag: "",
      soldOut: false
    }
  ],
  perfumes: [
    {
      id: "perfumes-1",
      name: "Vanilla Cashmeran Perfume",
      desc: "Warm vanilla and cashmeran perfume for a rich, velvety scent.",
      price: 600,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRchGGYpKYQzr7HNhoMH3Ulc7CpkYuv5QWE-r86S0wG_g&s=10",
      tag: "best",
      soldOut: false
    },
    {
      id: "perfumes-2",
      name: "Floral Musk Tassel Perfume",
      desc: "Romantic floral-musk fragrance in an elegant tassel-adorned bottle.",
      price: 900,
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQFr_Xed80wkNN0LtX9zVBgbUwgI3BfmZqC20Ocuiu-RuYHbqLXlw5HvV3BNrA68HnRuknhv7sJrttmg1XxjuUgeSTpz3XH496gvYMJQkc&usqp=CAc",
      tag: "best",
      soldOut: false
    },
    {
      id: "perfumes-3",
      name: "Floral Amber Neroli Perfume",
      desc: "Luminous floral-amber perfume with warm neroli and vanilla notes.",
      price: 900,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBoRDxJADcwqiQ-LuH3jT8UrqhYEtSerkTN4c58E7jNA&s=10",
      tag: "best",
      soldOut: true
    },
    {
      id: "perfumes-4",
      name: "Jasmine Bourbon Vanilla Perfume",
      desc: "Warm floral-woody fragrance infused with jasmine and bourbon vanilla.",
      price: 800,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKNedaoSQ7lp7JUn0gazL5BnWVo3WyI0jc2g2fxCV2Wg&s=10",
      tag: "new",
      soldOut: false
    },
    {
      id: "perfumes-5",
      name: "Lavender Orange Blossom Perfume",
      desc: "Bold floral fragrance blending lavender essence with warm orange blossom.",
      price: 900,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzg8MYa8GeuE1iRR-rhKOqrHClVWlmIB7Do3pdvL19sA&s=10",
      tag: "new",
      soldOut: false
    },
    {
      id: "perfumes-6",
      name: "Vintage Floral Atomizer Perfume",
      desc: "Vintage-inspired floral perfume with a classic atomizer spray pump.",
      price: 600,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDSsglWCkrM-MCtSXWhf3lQ8JzmYVGXfe6i9jbmi7-xg&s=10",
      tag: "new",
      soldOut: false
    },
    {
      id: "perfumes-7",
      name: "Cherry Blossom Musk Perfume",
      desc: "Delicate cherry blossom and musk perfume for a soft, fresh aura.",
      price: 450,
      img: "https://emaratiscents.com/cdn/shop/files/PINKDIAMOND1.jpg?v=1744151171&width=720",
      tag: "",
      soldOut: false
    },
    {
      id: "perfumes-8",
      name: "Vanilla Coconut Perfume",
      desc: "Sweet, creamy tropical vanilla and coconut fragrance with soft florals.",
      price: 950,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHdSJ5h49LqK51hyseMflVovdzFASaqX-9Jzoy-LXjg&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "perfumes-9",
      name: "Floral Fruity Arabic Perfume",
      desc: "Elegant floral-fruity Arabic perfume with warm woody and vanilla undertones.",
      price: 999,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8PEwmW5UrSE0-b6FvJIDrkemQUsRlFOse1JzpgdreOQ&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "perfumes-10",
      name: "Frankincense Vanilla Oriental Perfume",
      desc: "Opulent oriental fragrance blending rich frankincense with warm vanilla and labdanum.",
      price: 900,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI0mxEyl1RB-BHSJqPlMHNp3LfvNVCtcpsVDu03CFjkA&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "perfumes-11",
      name: "Powdery Floral Aldehyde Perfume",
      desc: "Iconic powdery floral aldehyde perfume exuding timeless elegance.",
      price: 950,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-3Ajuisc4VwI_PCv3owW9IryWTSasNcOubaovBb0usA&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "perfumes-12",
      name: "Amber Vanilla Cherry Perfume",
      desc: "Intense amber-vanilla perfume with sweet cherry and almond accents.",
      price: 960,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoZ34Z5pZoOIo2eUbr6I7YRRnFe63PVhN-fcsvWXBKbg&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "perfumes-13",
      name: "Velvety Rose Perfume",
      desc: "Fresh velvety rose perfume with iris, peony, and creamy sandalwood notes.",
      price: 980,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBHGSaR29xEfxVy3m5H3z8yR_MAIbSUQxBs0KY3zW3ug&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "perfumes-14",
      name: "Orange Jasmine Oriental Perfume",
      desc: "Vibrant oriental fragrance pairing fresh orange with jasmine and patchouli.",
      price: 900,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsUwNVoU9G70c-4bT35lUepySPJPx1bkMySbMQeFfX4g&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "perfumes-15",
      name: "Sambac Jasmine Orchid Perfume",
      desc: "Explosive floral bouquet blending sambac jasmine, cattleya orchid, and patchouli.",
      price: 970,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tn16D3GQ7zfLHr8acS-z6jEhIC8-8r7OFuexRQrLKg&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "perfumes-16",
      name: "Floral Musky Feminine Perfume",
      desc: "Elegant feminine fragrance with soft floral and warm musky notes.",
      price: 450,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLSgaoNbAngwJelf_3ioEALO1IE9guW4dcMUZIV6H2A&s=10",
      tag: "",
      soldOut: true
    },
    {
      id: "perfumes-17",
      name: "Lotus Blossom Musk Perfume",
      desc: "Delicate floral perfume infused with lotus blossom and soft musk.",
      price: 500,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyt-FL1ukWsP6VoPYfdnto02mD-MlF1n9cG93KqGc66g&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "perfumes-18",
      name: "Soft Powdery Floral Perfume",
      desc: "Soft, sensual feminine fragrance with delicate floral and powdery notes.",
      price: 550,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIWU5jdKklrTsfEPHnRjzU9wfZUS3SJHyOHHt-JWMmvw&s=10",
      tag: "",
      soldOut: false
    }
  ],
  bodysplash: [
    {
      id: "bodysplash-1",
      name: "Vanilla Fine Fragrance Mist",
      desc: "Long-lasting vanilla fine fragrance mist for an enchanting scent.",
      price: 900,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ1YCcgwHlRKM-qlKoddEH5XARSrKg3nK9hUjAiChIXw&s",
      tag: "best",
      soldOut: false
    },
    {
      id: "bodysplash-2",
      name: "Floral Fruity Fragrance Mist",
      desc: "Warm, floral-fruity fragrance mist for an enchanting, lasting scent.",
      price: 900,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqtZv0N-LdXvpzp_c9yo6e57RFvULtRShyqPFv1xpEzQ&s=10",
      tag: "best",
      soldOut: true
    },
    {
      id: "bodysplash-3",
      name: "Delicate Floral Body Mist",
      desc: "Delicate floral body mist for a glamorous, lasting freshness.",
      price: 350,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn18r0A65GMWWYCHZrtbmlfCknzzPiqBqZfboWftpRfw&s=10",
      tag: "best",
      soldOut: false
    },
    {
      id: "bodysplash-4",
      name: "Passionfruit Body Mist",
      desc: "Vegan passionfruit body mist for an instant cooling refreshment.",
      price: 700,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHrp1r8EedUesrB8sUomsYahgVa3zr_MBbk8jeBTTDzg&s=10",
      tag: "new",
      soldOut: false
    },
    {
      id: "bodysplash-5",
      name: "Cotton Candy Perfume Mist",
      desc: "Sweet floral-fruity perfume with playful cotton candy notes.",
      price: 900,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDUDPXxbjUxnDUPGaiy2SyBkcXLbQE4rz1ifZ_XaqRYA&s",
      tag: "new",
      soldOut: false
    },
    {
      id: "bodysplash-6",
      name: "Pink Rose Body Mist",
      desc: "Romantic pink rose body mist for a soft, refreshing scent.",
      price: 200,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpCQuNySxSwQgZ8sdv_oz0HKp9fDQYHRv242i4kK-t0A&s=10",
      tag: "new",
      soldOut: false
    },
    {
      id: "bodysplash-7",
      name: "Fresh Airy Body Mist",
      desc: "Fresh, airy scented body mist for light everyday freshness.",
      price: 200,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvn5ioMq2h0J95BCuIJUUBh_255hajSrElgmqqhFUPA&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "bodysplash-8",
      name: "Warm Vanilla Body Splash",
      desc: "Sweet, warm vanilla body splash for an irresistible daily scent.",
      price: 200,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5e58B2ZvOC1Sc0Ip9z14ojboIWDxxcE1lW24ogu2fkQ&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "bodysplash-9",
      name: "Vanilla Floral Hair & Body Mist",
      desc: "Warm, sensual hair and body mist with vanilla and floral notes.",
      price: 900,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVHriYmYCeS_FH8GDluVi0xH6QSxtor6CF6A5FUeRw8Q&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "bodysplash-10",
      name: "Vanilla Cardamom Fragrance Mist",
      desc: "Warm, romantic vanilla fragrance mist with spicy cardamom notes.",
      price: 850,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEX73IQhmzpt_c0YXoJdwUUWpAcYU6Y-3Ug9cizMAZw&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "bodysplash-11",
      name: "Clean Vanilla Body Mist",
      desc: "Clean, sensual vanilla body mist for a soft everyday scent.",
      price: 900,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrIt83I0BvnMq3N31JNf0tzdcp2GMF2Dr7iSZ75KlY7w&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "bodysplash-12",
      name: "Tropical Body Splash",
      desc: "Refreshing tropical body splash with a lively, sweet scent.",
      price: 140,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-F2Fy_kRx8rD-MTbFbBM8xVwPKPy16QNV2P7y6pnnw&s",
      tag: "",
      soldOut: false
    },
    {
      id: "bodysplash-13",
      name: "Floral Fruity Body Mist",
      desc: "Sweet, floral-fruity perfume body mist for daily freshness.",
      price: 600,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2x9RzGVpolaylj_XXI0ok0eCfIlo0fUTgUfxauuqDWw&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "bodysplash-14",
      name: "Tropical Coconut Body Mist",
      desc: "Tropical coconut scented body mist with essential oils.",
      price: 850,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjdb1Fk3DwKZnbBK0ORnZ7Scb-d5IH63Rqn16SM1pfqg&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "bodysplash-15",
      name: "Amber Pear Cinnamon Body Mist",
      desc: "Warm amber, pear, and cinnamon scented body mist for a rich aroma.",
      price: 220,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0_QscgzfymFov8FLUoinvwwaXLb73CO-GSbttfyTTIQ&s",
      tag: "",
      soldOut: true
    },
    {
      id: "bodysplash-16",
      name: "Musky Jasmine Body Mist",
      desc: "Soft musky jasmine body mist for lasting floral freshness.",
      price: 120,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyWSkN7HPUi6U4WYZI_YLLNhrF0cShogtG_Pxiu7IAA&s=10",
      tag: "",
      soldOut: false
    },
    {
      id: "bodysplash-17",
      name: "Pink Cashmere Fragrance Mist",
      desc: "Velvety pink cashmere fragrance mist with soft floral and amber.",
      price: 850,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRew9A0i5-zdgDXAUCYh9OCTogEriifdpIB8Hu7ovjxkg&s",
      tag: "",
      soldOut: false
    },
    {
      id: "bodysplash-18",
      name: "Vanilla Passionfruit Body Mist",
      desc: "Warm, cozy vanilla and passionfruit scented body mist.",
      price: 850,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoURTPx45dUCJoOC2U4GUrDh1v9YqETaFW87byQPQF1w&s=10",
      tag: "",
      soldOut: true
    }
  ]
};

// ===================== Render products =====================
const categoryNames = {
  skincare: "Skin Care",
  makeup: "Makeup",
  bodycare: "Body Care",
  haircare: "Hair Care",
  perfumes: "Perfumes",
  bodysplash: "Body Splash"
};

// Puts <mark> around the typed letters inside a text (not case sensitive)
function highlight(text, word) {
  if (word === "") return text;

  // escape special characters so typing "(" or "+" doesn't break the search
  const safe = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(safe, "gi");

  return text.replace(regex, function (match) {
    return "<mark>" + match + "</mark>";
  });
}

function fillSection(name, items, word) {
  word = word || "";
  const section = document.getElementById(name + "-section");

  // no products for this section -> hide it
  if (items.length === 0) {
    document.getElementById(name + "-list").innerHTML = "";
    section.classList.add("d-none");
    return;
  }

  let cartona = "";   // empty at the start

  for (let i = 0; i < items.length; i++) {
    const p = items[i];

    const badge = p.soldOut ? '<span class="sold-badge">Sold out</span>' : "";
    const oldPrice = p.oldPrice ? `<del class="me-2">${p.oldPrice} EGP</del>` : "";
    const button = p.soldOut
      ? '<button class="btn btn-secondary w-100" disabled>Sold out</button>'
      : `<button class="btn add-to-cart w-100" data-id="${p.id}">Add to cart</button>`;

    // add one more card to cartona on every loop
    cartona += `
      <div class="col-md-4">
        <div class="card h-100">
          <div class="img-wrap">
            ${badge}
            <img src="${p.img}" class="card-img-top" alt="${p.name}">
          </div>
          <div class="card-body">
            <h5 class="card-title">${highlight(p.name, word)}</h5>
            <p class="card-text">${highlight(p.desc, word)}</p>
            <p class="fw-bold">${oldPrice}${p.price} EGP</p>
            ${button}
          </div>
        </div>
      </div>`;
  }

  document.getElementById(name + "-list").innerHTML = cartona;
  section.classList.remove("d-none");
}

// Shows the products of one category (Best-Selling, New Arrivals, then the rest)
function showCategory(cat) {
  const list = products[cat];
  const emptyMsg = document.getElementById("empty-msg");

  emptyMsg.classList.add("d-none");
  document.getElementById("page-title").textContent = categoryNames[cat] || "Products";

  // category is empty or the name in the link is wrong
  if (!list || list.length === 0) {
    emptyMsg.textContent = "No products here yet.";
    emptyMsg.classList.remove("d-none");
    fillSection("best", []);
    fillSection("new", []);
    fillSection("all", []);
    return;
  }

  document.title = "GlowMatch - " + categoryNames[cat];

  let bestItems = [];
  let newItems = [];
  let otherItems = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i].tag === "best") {
      bestItems.push(list[i]);
    } else if (list[i].tag === "new") {
      newItems.push(list[i]);
    } else {
      otherItems.push(list[i]);
    }
  }

  fillSection("best", bestItems);
  fillSection("new", newItems);
  fillSection("all", otherItems);
}

// Search: looks in ALL categories (name, description and category name)
function showSearchResults(text) {
  const word = text.trim();
  const emptyMsg = document.getElementById("empty-msg");
  let results = [];

  emptyMsg.classList.add("d-none");

  for (const cat in products) {
    for (let i = 0; i < products[cat].length; i++) {
      const p = products[cat][i];
      const searchIn = (p.name + " " + p.desc + " " + categoryNames[cat]).toLowerCase();

      if (searchIn.includes(word.toLowerCase())) {
        results.push(p);
      }
    }
  }

  document.getElementById("page-title").textContent = word === "" ? "All Products" : 'Search: "' + word + '"';
  document.title = "GlowMatch - Search";

  // search results are shown in one list (no Best-Selling / New Arrivals titles)
  fillSection("best", []);
  fillSection("new", []);

  if (results.length === 0) {
    emptyMsg.textContent = "No products found.";
    emptyMsg.classList.remove("d-none");
    fillSection("all", []);
    return;
  }

  fillSection("all", results, word);
}

// Search while typing: runs on every letter
function setupLiveSearch(cat) {
  const boxes = document.querySelectorAll('input[name="search"]');
  const forms = document.querySelectorAll('form[role="search"]');

  // pressing Enter should not reload the page (results are already shown)
  for (let i = 0; i < forms.length; i++) {
    forms[i].addEventListener("submit", function (e) {
      e.preventDefault();
    });
  }

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("input", function () {
      const text = boxes[i].value;

      // keep the mobile box and the big-screen box the same
      for (let j = 0; j < boxes.length; j++) {
        boxes[j].value = text;
      }

      if (text.trim() !== "") {
        showSearchResults(text);
      } else if (cat) {
        showCategory(cat);          // box is empty -> back to the category
      } else {
        showSearchResults("");      // no category -> all products
      }
    });
  }
}

function renderProducts() {
  // do nothing on pages that don't have the products containers (e.g. cart.html)
  if (!document.getElementById("all-list")) return;

  const params = new URLSearchParams(location.search);
  const cat = params.get("cat");               // products.html?cat=makeup
  const searchText = params.get("search");     // products.html?search=vanilla

  setupLiveSearch(cat);

  if (searchText !== null) {
    // came from another page with a searched word: keep it inside the boxes
    const boxes = document.querySelectorAll('input[name="search"]');
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].value = searchText;
    }
    showSearchResults(searchText);
  } else if (cat === null) {
    // opened products.html without ?cat=... -> show all products (not an empty page)
    showSearchResults("");
  } else {
    showCategory(cat);
  }
}

renderProducts();