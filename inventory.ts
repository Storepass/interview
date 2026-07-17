export interface Variant {
  id: number;
  name: string;
  price_cash: number;
  price_credit: number;
}

export interface Card {
  id: string;
  name: string;
  img: string;
  variants: Variant[];
}

export const inventory: Card[] = [
  {
    "id": "cHqdEhYJV4",
    "name": "Octopus Umbra (C18-011) [Commander 2018]",
    "img": "https://cdn.shopify.com/s/files/1/0556/6962/0933/files/9efcf24c-ad57-4320-9b85-c838f5ed659b.png?v=1761388057",
    "variants": [
      { "id": 39429563678917, "name": "Near Mint", "price_cash": 1.75, "price_credit": 2.63 },
      { "id": 39429563875525, "name": "Lightly Played", "price_cash": 1.58, "price_credit": 2.37 },
      { "id": 39429564039365, "name": "Moderately Played", "price_cash": 1.4, "price_credit": 2.1 },
      { "id": 39429564235973, "name": "Heavily Played", "price_cash": 1.14, "price_credit": 1.71 },
      { "id": 39429564432581, "name": "Damaged", "price_cash": 0.44, "price_credit": 0.66 }
    ]
  },
  {
    "id": "a6xms2UBd5",
    "name": "Caldera Pyremaw (TDC-033) [Commander: Tarkir: Dragonstorm]",
    "img": "https://cdn.shopify.com/s/files/1/0556/6962/0933/files/f5fab7a4-3612-4b79-b2f5-8a1e52ebe409_3974276d-33d3-4f36-8efc-aa9daef6c379.png?v=1754539476",
    "variants": [
      { "id": 44583880556741, "name": "Near Mint", "price_cash": 0.22, "price_credit": 0.33 },
      { "id": 44583880589509, "name": "Lightly Played", "price_cash": 0.2, "price_credit": 0.3 },
      { "id": 44583880622277, "name": "Moderately Played", "price_cash": 0.17, "price_credit": 0.26 },
      { "id": 44583880655045, "name": "Heavily Played", "price_cash": 0.14, "price_credit": 0.21 },
      { "id": 44583880687813, "name": "Damaged", "price_cash": 0.11, "price_credit": 0.17 }
    ]
  },
  {
    "id": "vHdrg4SssM",
    "name": "Odric, Lunarch Marshal (DMC-103) [Dominaria United Commander]",
    "img": "https://cdn.shopify.com/s/files/1/0556/6962/0933/files/a2d5c9f2-8f58-40ac-a01c-f4ac4ab4d7f0_652acb9b-19ae-46d4-96b2-d317e44f0a7e.png?v=1761388192",
    "variants": [
      { "id": 41660300132549, "name": "Near Mint", "price_cash": 0.22, "price_credit": 0.33 },
      { "id": 41660300165317, "name": "Lightly Played", "price_cash": 0.2, "price_credit": 0.3 },
      { "id": 41660300230853, "name": "Moderately Played", "price_cash": 0.18, "price_credit": 0.27 },
      { "id": 41660300296389, "name": "Heavily Played", "price_cash": 0.14, "price_credit": 0.21 },
      { "id": 41660300361925, "name": "Damaged", "price_cash": 0.12, "price_credit": 0.18 }
    ]
  },
  {
    "id": "WO9CqkTmpf",
    "name": "Odric, Lunarch Marshal (INR-298) [Innistrad Remastered] (Borderless) Foil",
    "img": "https://cdn.shopify.com/s/files/1/0556/6962/0933/files/12e4f93c-6daf-458e-aa5a-26844c54bfdd_89889fae-f4e6-4cb8-ad2e-9ab2a1795fac.png?v=1756415575",
    "variants": [
      { "id": 44407736074437, "name": "Near Mint", "price_cash": 1.82, "price_credit": 2.73 },
      { "id": 44407736107205, "name": "Lightly Played", "price_cash": 1.64, "price_credit": 2.46 },
      { "id": 44407736139973, "name": "Moderately Played", "price_cash": 1.45, "price_credit": 2.17 },
      { "id": 44407736172741, "name": "Heavily Played", "price_cash": 1.18, "price_credit": 1.77 },
      { "id": 44407736205509, "name": "Damaged", "price_cash": 0.91, "price_credit": 1.36 }
    ]
  },
  {
    "id": "z3hTPAWdHZ",
    "name": "Swiftfoot Boots (FDN-355) [Foundations] (Borderless)",
    "img": "https://cdn.shopify.com/s/files/1/0556/6962/0933/files/3e9b53da-4744-429d-97c6-f7ee4d568731_86391215-3240-49fc-992b-af2b5cafd8fa.png?v=1756233851",
    "variants": [
      { "id": 44303036580037, "name": "Near Mint", "price_cash": 1.47, "price_credit": 2.21 },
      { "id": 44303036612805, "name": "Lightly Played", "price_cash": 1.32, "price_credit": 1.98 },
      { "id": 44303036645573, "name": "Moderately Played", "price_cash": 1.17, "price_credit": 1.75 },
      { "id": 44303036678341, "name": "Heavily Played", "price_cash": 0.95, "price_credit": 1.42 },
      { "id": 44303036711109, "name": "Damaged", "price_cash": 0.36, "price_credit": 0.54 }
    ]
  },
  {
    "id": "6XUFa8ZqYW",
    "name": "Swiftfoot Boots (CMA-233) [Commander Anthology]",
    "img": "https://cdn.shopify.com/s/files/1/0556/6962/0933/files/87a24550-e25d-47ec-9165-17ed8d15c923.png?v=1756486538",
    "variants": [
      { "id": 39428420337861, "name": "Near Mint", "price_cash": 1.34, "price_credit": 2.01 },
      { "id": 39428420370629, "name": "Lightly Played", "price_cash": 1.21, "price_credit": 1.81 },
      { "id": 39428420403397, "name": "Moderately Played", "price_cash": 1.07, "price_credit": 1.6 },
      { "id": 39428420436165, "name": "Heavily Played", "price_cash": 0.43, "price_credit": 0.65 },
      { "id": 39428420468933, "name": "Damaged", "price_cash": 0.33, "price_credit": 0.49 }
    ]
  },
  {
    "id": "Et1nN62Bsk",
    "name": "Swiftfoot Boots (NCC-382) [New Capenna Commander]",
    "img": "https://cdn.shopify.com/s/files/1/0556/6962/0933/files/3cb171ef-42eb-466e-b425-e3c16301c0ca_73425b96-ef70-45c4-aad2-abc36f4d0e4e.png?v=1757257134",
    "variants": [
      { "id": 41348260298949, "name": "Near Mint", "price_cash": 1.66, "price_credit": 2.49 },
      { "id": 41348260331717, "name": "Lightly Played", "price_cash": 1.5, "price_credit": 2.25 },
      { "id": 41348260364485, "name": "Moderately Played", "price_cash": 1.33, "price_credit": 2 },
      { "id": 41348260397253, "name": "Heavily Played", "price_cash": 1.08, "price_credit": 1.62 },
      { "id": 41348260430021, "name": "Damaged", "price_cash": 0.41, "price_credit": 0.61 }
    ]
  },
  {
    "id": "FvamGMKlnn",
    "name": "Obscuring Haze (Showcase) (TLE-313) [Avatar: The Last Airbender: Eternal-Legal]",
    "img": "https://cdn.shopify.com/s/files/1/0556/6962/0933/files/662429_86151ad3-0a98-4d5a-a62d-05b477234550.jpg?v=1763007099",
    "variants": [
      { "id": 45316381245637, "name": "Near Mint", "price_cash": 7.45, "price_credit": 11.18 },
      { "id": 45316381278405, "name": "Lightly Played", "price_cash": 6.71, "price_credit": 10.06 },
      { "id": 45316381311173, "name": "Moderately Played", "price_cash": 5.96, "price_credit": 8.94 },
      { "id": 45316381343941, "name": "Heavily Played", "price_cash": 4.84, "price_credit": 7.26 },
      { "id": 45316381376709, "name": "Damaged", "price_cash": 3.73, "price_credit": 5.59 }
    ]
  },
  {
    "id": "1CZQg6cNUJ",
    "name": "Swindler's Scheme (NCC-096) [New Capenna Commander] (Extended Art) Foil",
    "img": "https://cdn.shopify.com/s/files/1/0556/6962/0933/files/954a88f7-9d8f-4794-ac2a-b9e87c8e3b62.png?v=1771609909",
    "variants": [
      { "id": 45849864831173, "name": "Near Mint", "price_cash": 0.22, "price_credit": 0.33 },
      { "id": 45849864863941, "name": "Lightly Played", "price_cash": 0.2, "price_credit": 0.3 },
      { "id": 45849864896709, "name": "Moderately Played", "price_cash": 0.17, "price_credit": 0.26 },
      { "id": 45849864929477, "name": "Heavily Played", "price_cash": 0.14, "price_credit": 0.21 },
      { "id": 45849864962245, "name": "Damaged", "price_cash": 0.11, "price_credit": 0.17 }
    ]
  },
  {
    "id": "gg0hltEGgm",
    "name": "Swiftfoot Boots (A25-234) [Masters 25]",
    "img": "https://cdn.shopify.com/s/files/1/0556/6962/0933/files/aae09e17-b881-492c-ba47-8f381c09755d_58222a61-0f5a-47f9-b050-5ce51c8c644f.png?v=1755815864",
    "variants": [
      { "id": 44609874526405, "name": "Near Mint", "price_cash": 1.32, "price_credit": 1.98 },
      { "id": 44609874559173, "name": "Lightly Played", "price_cash": 1.19, "price_credit": 1.78 },
      { "id": 44609874591941, "name": "Moderately Played", "price_cash": 1.06, "price_credit": 1.59 },
      { "id": 44609874624709, "name": "Heavily Played", "price_cash": 0.43, "price_credit": 0.65 },
      { "id": 44609874657477, "name": "Damaged", "price_cash": 0.33, "price_credit": 0.49 }
    ]
  },
  {
    "id": "3OX0v0RlGH",
    "name": "Swiftfoot Boots (C15-271) [Commander 2015]",
    "img": "https://cdn.shopify.com/s/files/1/0556/6962/0933/files/b79b931d-93b6-46fa-8dff-87abe6dd7170_23dc4fd4-3cea-415b-8e0e-93a22f7cdd75.png?v=1757286542",
    "variants": [
      { "id": 39430837174469, "name": "Near Mint", "price_cash": 1.72, "price_credit": 2.58 },
      { "id": 39430837240005, "name": "Lightly Played", "price_cash": 1.55, "price_credit": 2.33 },
      { "id": 39430837338309, "name": "Moderately Played", "price_cash": 1.38, "price_credit": 2.07 },
      { "id": 39430837469381, "name": "Heavily Played", "price_cash": 1.12, "price_credit": 1.68 },
      { "id": 39430837567685, "name": "Damaged", "price_cash": 0.43, "price_credit": 0.65 }
    ]
  },
  {
    "id": "Qod04RnzTD",
    "name": "Swarmyard (PPWOE-284) [Time Spiral Remastered Promos]",
    "img": "https://cdn.shopify.com/s/files/1/0556/6962/0933/files/8fb0c910-0059-42bc-9ab1-384005653a15_a0abf3e7-865a-4eba-82c6-44119a9f96d9.png?v=1771535976",
    "variants": [
      { "id": 45857325580485, "name": "Near Mint", "price_cash": 2.85, "price_credit": 4.28 },
      { "id": 45857325613253, "name": "Lightly Played", "price_cash": 2.56, "price_credit": 3.84 },
      { "id": 45857325646021, "name": "Moderately Played", "price_cash": 2.27, "price_credit": 3.41 },
      { "id": 45857325678789, "name": "Heavily Played", "price_cash": 1.85, "price_credit": 2.78 },
      { "id": 45857325711557, "name": "Damaged", "price_cash": 1.43, "price_credit": 2.15 }
    ]
  },
  {
    "id": "jdh48KAA34",
    "name": "Swiftfoot Boots (BRR-058) [The Brothers' War Retro Artifacts] Foil",
    "img": "https://cdn.shopify.com/s/files/1/0556/6962/0933/files/96c69011-35bd-49f0-bae5-4a8367d32237_84ded565-930f-47f1-98da-a2650d77b164.png?v=1771645039",
    "variants": [
      { "id": 45856143704261, "name": "Near Mint", "price_cash": 2.16, "price_credit": 3.24 },
      { "id": 45856143737029, "name": "Lightly Played", "price_cash": 1.94, "price_credit": 2.91 },
      { "id": 45856143769797, "name": "Moderately Played", "price_cash": 1.72, "price_credit": 2.58 },
      { "id": 45856143802565, "name": "Heavily Played", "price_cash": 1.4, "price_credit": 2.1 },
      { "id": 45856143835333, "name": "Damaged", "price_cash": 1.08, "price_credit": 1.62 }
    ]
  },
  {
    "id": "ObfZqUoJCS",
    "name": "Swiftfoot Boots (C13-263) [Commander 2013]",
    "img": "https://cdn.shopify.com/s/files/1/0556/6962/0933/files/da8ac93d-3377-4768-8152-d988a090de2a.png?v=1753307703",
    "variants": [
      { "id": 39432536588485, "name": "Near Mint", "price_cash": 1.73, "price_credit": 2.59 },
      { "id": 39432536621253, "name": "Lightly Played", "price_cash": 1.56, "price_credit": 2.34 },
      { "id": 39432536654021, "name": "Moderately Played", "price_cash": 1.39, "price_credit": 2.08 },
      { "id": 39432536686789, "name": "Heavily Played", "price_cash": 1.13, "price_credit": 1.69 },
      { "id": 39432536719557, "name": "Damaged", "price_cash": 0.43, "price_credit": 0.65 }
    ]
  },
  {
    "id": "EkKDCEsWYo",
    "name": "Swiftfoot Boots (BRC-166) [The Brothers' War Commander]",
    "img": "https://cdn.shopify.com/s/files/1/0556/6962/0933/files/53a91058-f98a-48dd-94da-354710a27019.png?v=1757256944",
    "variants": [
      { "id": 41873464295621, "name": "Near Mint", "price_cash": 1.26, "price_credit": 1.89 },
      { "id": 41873464328389, "name": "Lightly Played", "price_cash": 1.13, "price_credit": 1.69 },
      { "id": 41873464361157, "name": "Moderately Played", "price_cash": 1.01, "price_credit": 1.52 },
      { "id": 41873464393925, "name": "Heavily Played", "price_cash": 0.41, "price_credit": 0.61 },
      { "id": 41873464426693, "name": "Damaged", "price_cash": 0.32, "price_credit": 0.48 }
    ]
  },
  {
    "id": "WidB5HlSvc",
    "name": "Swiftfoot Boots (AFC-217) [Forgotten Realms Commander]",
    "img": "https://cdn.shopify.com/s/files/1/0556/6962/0933/files/bc89db46-0df6-4ce1-b162-233f5fe1b554.png?v=1753307840",
    "variants": [
      { "id": 40141483901125, "name": "Near Mint", "price_cash": 1.92, "price_credit": 2.88 },
      { "id": 40141483933893, "name": "Lightly Played", "price_cash": 1.72, "price_credit": 2.58 },
      { "id": 40141483966661, "name": "Moderately Played", "price_cash": 1.54, "price_credit": 2.31 },
      { "id": 40141483999429, "name": "Heavily Played", "price_cash": 1.25, "price_credit": 1.88 },
      { "id": 40141484032197, "name": "Damaged", "price_cash": 0.96, "price_credit": 1.44 }
    ]
  },
  {
    "id": "4Xa7D1H70M",
    "name": "Swarmyard (TSR-284) [Time Spiral Remastered]",
    "img": "https://cdn.shopify.com/s/files/1/0556/6962/0933/files/b89329f2-d386-40a7-9098-6d80beeb8843_8ac12c1a-d5d1-4ec5-b40c-c254f964f8c2.png?v=1771182232",
    "variants": [
      { "id": 45822998282437, "name": "Near Mint", "price_cash": 2.66, "price_credit": 3.99 },
      { "id": 45822998315205, "name": "Lightly Played", "price_cash": 2.39, "price_credit": 3.58 },
      { "id": 45822998347973, "name": "Moderately Played", "price_cash": 2.13, "price_credit": 3.19 },
      { "id": 45822998380741, "name": "Heavily Played", "price_cash": 1.73, "price_credit": 2.59 },
      { "id": 45822998413509, "name": "Damaged", "price_cash": 1.33, "price_credit": 2 }
    ]
  },
  {
    "id": "qnTcAdDUUx",
    "name": "Canopy Vista (MIC-168) [Midnight Hunt Commander]",
    "img": "https://cdn.shopify.com/s/files/1/0556/6962/0933/files/3d341014-9f36-477a-89ad-65c9d9449769.png?v=1754541255",
    "variants": [
      { "id": 40610021376197, "name": "Near Mint", "price_cash": 0.22, "price_credit": 0.33 },
      { "id": 40610021474501, "name": "Lightly Played", "price_cash": 0.2, "price_credit": 0.3 },
      { "id": 40610021507269, "name": "Moderately Played", "price_cash": 0.17, "price_credit": 0.26 },
      { "id": 40610021540037, "name": "Heavily Played", "price_cash": 0.14, "price_credit": 0.21 },
      { "id": 40610021572805, "name": "Damaged", "price_cash": 0.11, "price_credit": 0.17 }
    ]
  },
  {
    "id": "ykfecJT9a3",
    "name": "Cultivate (AFC-155) [Forgotten Realms Commander]",
    "img": "https://cdn.shopify.com/s/files/1/0556/6962/0933/files/2c7b84c8-b79d-4d05-8d2e-23657bd6ca7c.png?v=1754741438",
    "variants": [
      { "id": 40141468926149, "name": "Near Mint", "price_cash": 0.26, "price_credit": 0.39 },
      { "id": 40141468958917, "name": "Lightly Played", "price_cash": 0.23, "price_credit": 0.35 },
      { "id": 40141468991685, "name": "Moderately Played", "price_cash": 0.21, "price_credit": 0.32 },
      { "id": 40141469024453, "name": "Heavily Played", "price_cash": 0.17, "price_credit": 0.26 },
      { "id": 40141469057221, "name": "Damaged", "price_cash": 0.13, "price_credit": 0.2 }
    ]
  },
  {
    "id": "2txBAVMMSq",
    "name": "Swift Demise (TMC-021) [Commander: Teenage Mutant Ninja Turtles]",
    "img": "https://cdn.shopify.com/s/files/1/0556/6962/0933/files/679588.jpg?v=1772651899",
    "variants": [
      { "id": 45859166486725, "name": "Near Mint", "price_cash": 0.22, "price_credit": 0.33 },
      { "id": 45859166519493, "name": "Lightly Played", "price_cash": 0.2, "price_credit": 0.3 },
      { "id": 45859166552261, "name": "Moderately Played", "price_cash": 0.17, "price_credit": 0.26 },
      { "id": 45859166585029, "name": "Heavily Played", "price_cash": 0.14, "price_credit": 0.21 },
      { "id": 45859166617797, "name": "Damaged", "price_cash": 0.11, "price_credit": 0.17 }
    ]
  },
  {
    "id": "g3JAAptYaS",
    "name": "Stony Silence (White Border) (MB2-021) [Mystery Booster 2]",
    "img": "https://cdn.shopify.com/s/files/1/0556/6962/0933/files/4727d08d-1aca-4003-9211-39e96cc61e5f.png?v=1756499360",
    "variants": [
      { "id": 44738832138437, "name": "Near Mint", "price_cash": 0.3, "price_credit": 0.45 },
      { "id": 44738832171205, "name": "Lightly Played", "price_cash": 0.27, "price_credit": 0.41 },
      { "id": 44738832203973, "name": "Moderately Played", "price_cash": 0.24, "price_credit": 0.36 },
      { "id": 44738832236741, "name": "Heavily Played", "price_cash": 0.2, "price_credit": 0.3 },
      { "id": 44738832269509, "name": "Damaged", "price_cash": 0.15, "price_credit": 0.22 }
    ]
  },
  {
    "id": "tG82HDSb3s",
    "name": "Swiftfoot Boots (TDC-328) [Commander: Tarkir: Dragonstorm]",
    "img": "https://cdn.shopify.com/s/files/1/0556/6962/0933/files/1969b151-3192-4d35-80ca-c4e180601ec8_39a4384b-b30a-458d-9f8c-dae3e9de2af3.png?v=1756410795",
    "variants": [
      { "id": 44594230788293, "name": "Near Mint", "price_cash": 1.84, "price_credit": 2.76 },
      { "id": 44594230821061, "name": "Lightly Played", "price_cash": 1.66, "price_credit": 2.49 },
      { "id": 44594230853829, "name": "Moderately Played", "price_cash": 1.47, "price_credit": 2.21 },
      { "id": 44594230886597, "name": "Heavily Played", "price_cash": 1.2, "price_credit": 1.8 },
      { "id": 44594230919365, "name": "Damaged", "price_cash": 0.92, "price_credit": 1.38 }
    ]
  },
  {
    "id": "uH7YpDtYpv",
    "name": "Swiftfoot Boots (WPN-001) [Wizards Play Network 2022] Foil",
    "img": "https://cdn.shopify.com/s/files/1/0556/6962/0933/files/01ba455b-9cd4-4ba2-9bbf-d83b84dcc891.png?v=1753307890",
    "variants": [
      { "id": 41398949019845, "name": "Near Mint Foil", "price_cash": 1.46, "price_credit": 2.19 },
      { "id": 41398949052613, "name": "Lightly Played Foil", "price_cash": 1.31, "price_credit": 1.97 },
      { "id": 41398949085381, "name": "Moderately Played Foil", "price_cash": 1.17, "price_credit": 1.75 },
      { "id": 41398949118149, "name": "Heavily Played Foil", "price_cash": 0.95, "price_credit": 1.42 },
      { "id": 41398949150917, "name": "Damaged Foil", "price_cash": 0.36, "price_credit": 0.54 }
    ]
  },
  {
    "id": "RBKeT2Gg3G",
    "name": "Swiftfoot Boots (FDN-258) [Foundations]",
    "img": "https://cdn.shopify.com/s/files/1/0556/6962/0933/files/41040541-b129-4cf4-9411-09b1d9d32c19_0624f343-344c-4624-8d6d-0c71dfcd0f2c.png?v=1756243400",
    "variants": [
      { "id": 44303015903429, "name": "Near Mint", "price_cash": 1.54, "price_credit": 2.31 },
      { "id": 44303015936197, "name": "Lightly Played", "price_cash": 1.39, "price_credit": 2.08 },
      { "id": 44303015968965, "name": "Moderately Played", "price_cash": 1.23, "price_credit": 1.84 },
      { "id": 44303016001733, "name": "Heavily Played", "price_cash": 1, "price_credit": 1.5 },
      { "id": 44303016034501, "name": "Damaged", "price_cash": 0.39, "price_credit": 0.58 }
    ]
  }
];
