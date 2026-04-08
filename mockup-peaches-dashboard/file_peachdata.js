// All static data lives here — swap out for an API call later if needed

export const productionTrend = [
  { year: "'10", val: 20.4, yoy: null },
  { year: "'11", val: 21,   yoy: 3.0  },
  { year: "'12", val: 21,   yoy: 0    },
  { year: "'13", val: 22,   yoy: 4.8  },
  { year: "'14", val: 22,   yoy: 0    },
  { year: "'15", val: 22,   yoy: 6.2  },
  { year: "'16", val: 23,   yoy: -2.8 },
  { year: "'17", val: 24,   yoy: 4.3  },
  { year: "'18", val: 24,   yoy: 0    },
  { year: "'19", val: 24,   yoy: 0    },
  { year: "'20", val: 24,   yoy: -1.4 },
  { year: "'21", val: 25,   yoy: 5.2  },
  { year: "'22", val: 27,   yoy: 8.0  },
  { year: "'23", val: 27,   yoy: 0    },
  { year: "'24", val: 27.9, yoy: 2.6  },
];

export const regionalShare = [
  { label: "Asia",     val: 75, color: "#C8612A" },
  { label: "Europe",   val: 13, color: "#E8936A" },
  { label: "Americas", val: 7,  color: "#D4A080" },
  { label: "Africa",   val: 4,  color: "#B88060" },
  { label: "Others",   val: 1,  color: "#7A5040" },
];

export const topProducers = [
  { country: "China",       flag: "🇨🇳", val: 17.6, share: 63   },
  { country: "Spain",       flag: "🇪🇸", val: 1.4,  share: 5    },
  { country: "Turkey",      flag: "🇹🇷", val: 1.2,  share: 4.3  },
  { country: "Italy",       flag: "🇮🇹", val: 1.1,  share: 3.9  },
  { country: "USA",         flag: "🇺🇸", val: 0.74, share: 2.6  },
  { country: "Greece",      flag: "🇬🇷", val: 0.70, share: 2.5  },
  { country: "Iran",        flag: "🇮🇷", val: 0.64, share: 2.3  },
  { country: "Chile",       flag: "🇨🇱", val: 0.32, share: 1.1  },
];

export const exportShareByContinent = [
  { region: "Europe",   export: 42, import: 58 },
  { region: "Asia",     export: 61, import: 39 },
  { region: "Americas", export: 55, import: 45 },
  { region: "Africa",   export: 80, import: 20 },
  { region: "Oceania",  export: 93, import: 7  },
];

export const topExporters = [
  { country: "Spain",  flag: "🇪🇸", value: 1.11,  share: 39.9 },
  { country: "Turkey", flag: "🇹🇷", value: 0.257, share: 9.2  },
  { country: "Chile",  flag: "🇨🇱", value: 0.182, share: 6.5  },
  { country: "Italy",  flag: "🇮🇹", value: 0.165, share: 5.9  },
  { country: "Greece", flag: "🇬🇷", value: 0.142, share: 5.1  },
];

export const tabularData = [
  {
    region: "Asia", continent: true,
    production: "21.0M t", area: "1.1M ha", yield_: "18.5 t/ha",
    exportV: "$695.9K", importV: "$352.9K", balance: "+$343.0K",
    share: "75.4%", status: "Healthy",
    children: [
      { country: "China",       production: "17.6M t", area: "868.3K ha", yield_: "20.3 t/ha", exportV: "$151.4K", importV: "$244.2K", balance: "-$92.8K",  share: "63.2%", status: "Watch"   },
      { country: "Turkey",      production: "1.2M t",  area: "58.0K ha",  yield_: "20.3 t/ha", exportV: "$256.9K", importV: "$28",     balance: "+$256.9K", share: "4.2%",  status: "Healthy" },
      { country: "Iran",        production: "638.1K t",area: "32.1K ha",  yield_: "19.9 t/ha", exportV: "$1.2K",   importV: "$32",     balance: "+$1.2K",   share: "2.3%",  status: "Healthy" },
      { country: "Uzbekistan",  production: "233.4K t",area: "21.9K ha",  yield_: "10.6 t/ha", exportV: "$96.9K",  importV: "$6",      balance: "+$96.9K",  share: "0.8%",  status: "Healthy" },
      { country: "South Korea", production: "192.5K t",area: "20.6K ha",  yield_: "9.4 t/ha",  exportV: "$1.6K",   importV: "$0",      balance: "+$1.6K",   share: "0.7%",  status: "Healthy" },
    ],
  },
  {
    region: "Europe", continent: true,
    production: "3.6M t", area: "186K ha", yield_: "19.4 t/ha",
    exportV: "$1.6B", importV: "$1.1B", balance: "+$0.5B",
    share: "13.0%", status: "Healthy",
    children: [
      { country: "Spain",  production: "1.4M t", area: "72.1K ha", yield_: "19.4 t/ha", exportV: "$1.11B", importV: "$42M", balance: "+$1.07B", share: "5.0%",  status: "Healthy" },
      { country: "Italy",  production: "1.1M t", area: "55.4K ha", yield_: "19.9 t/ha", exportV: "$165M",  importV: "$85M", balance: "+$80M",   share: "3.9%",  status: "Healthy" },
      { country: "Greece", production: "0.7M t", area: "32.6K ha", yield_: "21.5 t/ha", exportV: "$142M",  importV: "$21M", balance: "+$121M",  share: "2.5%",  status: "Healthy" },
    ],
  },
  {
    region: "Americas", continent: true,
    production: "2.1M t", area: "95K ha", yield_: "22.1 t/ha",
    exportV: "$386M", importV: "$265M", balance: "+$121M",
    share: "7.5%", status: "Healthy",
    children: [
      { country: "Chile", production: "0.32M t", area: "14.2K ha", yield_: "22.5 t/ha", exportV: "$182M", importV: "$12M",  balance: "+$170M", share: "1.1%", status: "Healthy" },
      { country: "USA",   production: "0.74M t", area: "31.5K ha", yield_: "23.5 t/ha", exportV: "$95M",  importV: "$148M", balance: "-$53M",  share: "2.6%", status: "Watch"   },
    ],
  },
  {
    region: "Africa", continent: true,
    production: "1.0M t", area: "52K ha", yield_: "19.2 t/ha",
    exportV: "$88M", importV: "$45M", balance: "+$43M",
    share: "3.6%", status: "Healthy",
    children: [
      { country: "South Africa", production: "0.32M t", area: "12.4K ha", yield_: "25.8 t/ha", exportV: "$55M", importV: "$8M",  balance: "+$47M", share: "1.1%", status: "Healthy" },
      { country: "Egypt",        production: "0.41M t", area: "22.8K ha", yield_: "18.0 t/ha", exportV: "$19M", importV: "$24M", balance: "-$5M",  share: "1.5%", status: "Watch"   },
    ],
  },
];
