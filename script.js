console.log("YO whatsupp");



const populate = async (value, currency) => {
    let myStr = ""
    
    document.querySelector(".output").style.display = "block"
    let rJson = JSON.parse(`{
  "meta": {
    "last_updated_at": "2024-09-07T23:59:59Z"
  },
  "data": {
    "ADA": {
      "code": "ADA",
      "value": 3.0683870216
    },
    "AED": {
      "code": "AED",
      "value": 3.6731307254
    },
    "AFN": {
      "code": "AFN",
      "value": 70.219747461
    },
    "ALL": {
      "code": "ALL",
      "value": 89.8958165709
    },
    "AMD": {
      "code": "AMD",
      "value": 388.3207378846
    },
    "ANG": {
      "code": "ANG",
      "value": 1.7860403467
    },
    "AOA": {
      "code": "AOA",
      "value": 925.6391504742
    },
    "ARB": {
      "code": "ARB",
      "value": 1.992138233
    },
    "ARS": {
      "code": "ARS",
      "value": 955.9914181654
    },
    "AUD": {
      "code": "AUD",
      "value": 1.4995601731
    },
    "AVAX": {
      "code": "AVAX",
      "value": 0.0457812235
    },
    "AWG": {
      "code": "AWG",
      "value": 1.79
    },
    "AZN": {
      "code": "AZN",
      "value": 1.7
    },
    "BAM": {
      "code": "BAM",
      "value": 1.7634602472
    },
    "BBD": {
      "code": "BBD",
      "value": 2
    },
    "BDT": {
      "code": "BDT",
      "value": 119.9509722486
    },
    "BGN": {
      "code": "BGN",
      "value": 1.7635502694
    },
    "BHD": {
      "code": "BHD",
      "value": 0.376
    },
    "BIF": {
      "code": "BIF",
      "value": 2879.2391370763
    },
    "BMD": {
      "code": "BMD",
      "value": 1
    },
    "BNB": {
      "code": "BNB",
      "value": 0.00201304
    },
    "BND": {
      "code": "BND",
      "value": 1.3025502404
    },
    "BOB": {
      "code": "BOB",
      "value": 6.9091208703
    },
    "BRL": {
      "code": "BRL",
      "value": 5.5996308934
    },
    "BSD": {
      "code": "BSD",
      "value": 1
    },
    "BTC": {
      "code": "BTC",
      "value": 0.0000184183
    },
    "BTN": {
      "code": "BTN",
      "value": 84.0173144639
    },
    "BWP": {
      "code": "BWP",
      "value": 13.2986819498
    },
    "BYN": {
      "code": "BYN",
      "value": 3.2750062455
    },
    "BYR": {
      "code": "BYR",
      "value": 32750.082551045
    },
    "BZD": {
      "code": "BZD",
      "value": 2
    },
    "CAD": {
      "code": "CAD",
      "value": 1.3570001415
    },
    "CDF": {
      "code": "CDF",
      "value": 2826.2655118465
    },
    "CHF": {
      "code": "CHF",
      "value": 0.8426301651
    },
    "CLF": {
      "code": "CLF",
      "value": 0.0246000041
    },
    "CLP": {
      "code": "CLP",
      "value": 944.0789505981
    },
    "CNY": {
      "code": "CNY",
      "value": 7.0827512361
    },
    "COP": {
      "code": "COP",
      "value": 4178.1303234778
    },
    "CRC": {
      "code": "CRC",
      "value": 524.2269460082
    },
    "CUC": {
      "code": "CUC",
      "value": 1
    },
    "CUP": {
      "code": "CUP",
      "value": 24
    },
    "CVE": {
      "code": "CVE",
      "value": 99.479803889
    },
    "CZK": {
      "code": "CZK",
      "value": 22.5789141027
    },
    "DAI": {
      "code": "DAI",
      "value": 0.9976528399
    },
    "DJF": {
      "code": "DJF",
      "value": 177.721
    },
    "DKK": {
      "code": "DKK",
      "value": 6.7321510912
    },
    "DOP": {
      "code": "DOP",
      "value": 59.7684712121
    },
    "DOT": {
      "code": "DOT",
      "value": 0.2446298922
    },
    "DZD": {
      "code": "DZD",
      "value": 132.7681953028
    },
    "EGP": {
      "code": "EGP",
      "value": 48.4109554965
    },
    "ERN": {
      "code": "ERN",
      "value": 15
    },
    "ETB": {
      "code": "ETB",
      "value": 115.1692617669
    },
    "ETH": {
      "code": "ETH",
      "value": 0.0004392209
    },
    "EUR": {
      "code": "EUR",
      "value": 0.9019401718
    },
    "FJD": {
      "code": "FJD",
      "value": 2.219150229
    },
    "FKP": {
      "code": "FKP",
      "value": 0.7615236894
    },
    "GBP": {
      "code": "GBP",
      "value": 0.7616600788
    },
    "GEL": {
      "code": "GEL",
      "value": 2.693140361
    },
    "GGP": {
      "code": "GGP",
      "value": 0.7615239262
    },
    "GHS": {
      "code": "GHS",
      "value": 15.6156524703
    },
    "GIP": {
      "code": "GIP",
      "value": 0.7615232122
    },
    "GMD": {
      "code": "GMD",
      "value": 56.4193706001
    },
    "GNF": {
      "code": "GNF",
      "value": 8644.7775030937
    },
    "GTQ": {
      "code": "GTQ",
      "value": 7.7216413316
    },
    "GYD": {
      "code": "GYD",
      "value": 208.8025562144
    },
    "HKD": {
      "code": "HKD",
      "value": 7.7940813714
    },
    "HNL": {
      "code": "HNL",
      "value": 24.7578738339
    },
    "HRK": {
      "code": "HRK",
      "value": 6.4478307948
    },
    "HTG": {
      "code": "HTG",
      "value": 133.5420441377
    },
    "HUF": {
      "code": "HUF",
      "value": 354.8266934553
    },
    "IDR": {
      "code": "IDR",
      "value": 15339.551532958
    },
    "ILS": {
      "code": "ILS",
      "value": 3.726360692
    },
    "IMP": {
      "code": "IMP",
      "value": 0.7615238017
    },
    "INR": {
      "code": "INR",
      "value": 83.9708530382
    },
    "IQD": {
      "code": "IQD",
      "value": 1307.3609010636
    },
    "IRR": {
      "code": "IRR",
      "value": 41978.421760233
    },
    "ISK": {
      "code": "ISK",
      "value": 137.8903773069
    },
    "JEP": {
      "code": "JEP",
      "value": 0.7615236334
    },
    "JMD": {
      "code": "JMD",
      "value": 157.3553829673
    },
    "JOD": {
      "code": "JOD",
      "value": 0.71
    },
    "JPY": {
      "code": "JPY",
      "value": 142.2912494088
    },
    "KES": {
      "code": "KES",
      "value": 128.3832425963
    },
    "KGS": {
      "code": "KGS",
      "value": 84.5002102506
    },
    "KHR": {
      "code": "KHR",
      "value": 4067.6741833185
    },
    "KMF": {
      "code": "KMF",
      "value": 444.4947972229
    },
    "KPW": {
      "code": "KPW",
      "value": 900
    },
    "KRW": {
      "code": "KRW",
      "value": 1336.0983585305
    },
    "KWD": {
      "code": "KWD",
      "value": 0.3053400338
    },
    "KYD": {
      "code": "KYD",
      "value": 0.83333
    },
    "KZT": {
      "code": "KZT",
      "value": 478.621781487
    },
    "LAK": {
      "code": "LAK",
      "value": 22080.481455794
    },
    "LBP": {
      "code": "LBP",
      "value": 89521.843571359
    },
    "LKR": {
      "code": "LKR",
      "value": 299.6877579758
    },
    "LRD": {
      "code": "LRD",
      "value": 195.1299692404
    },
    "LSL": {
      "code": "LSL",
      "value": 17.7166229448
    },
    "LTC": {
      "code": "LTC",
      "value": 0.0160961722
    },
    "LTL": {
      "code": "LTL",
      "value": 3.1141448729
    },
    "LVL": {
      "code": "LVL",
      "value": 0.6338689261
    },
    "LYD": {
      "code": "LYD",
      "value": 4.7554306605
    },
    "MAD": {
      "code": "MAD",
      "value": 9.7236715053
    },
    "MATIC": {
      "code": "MATIC",
      "value": 2.7034846747
    },
    "MDL": {
      "code": "MDL",
      "value": 17.3529227224
    },
    "MGA": {
      "code": "MGA",
      "value": 4536.7280215017
    },
    "MKD": {
      "code": "MKD",
      "value": 55.3381062247
    },
    "MMK": {
      "code": "MMK",
      "value": 2093.8598798246
    },
    "MNT": {
      "code": "MNT",
      "value": 3386.979398792
    },
    "MOP": {
      "code": "MOP",
      "value": 8.0507609734
    },
    "MRO": {
      "code": "MRO",
      "value": 356.999828
    },
    "MRU": {
      "code": "MRU",
      "value": 39.8102942631
    },
    "MUR": {
      "code": "MUR",
      "value": 45.9147550974
    },
    "MVR": {
      "code": "MVR",
      "value": 15.443591977
    },
    "MWK": {
      "code": "MWK",
      "value": 1732.7791756785
    },
    "MXN": {
      "code": "MXN",
      "value": 19.9761635959
    },
    "MYR": {
      "code": "MYR",
      "value": 4.3282006603
    },
    "MZN": {
      "code": "MZN",
      "value": 63.5535403784
    },
    "NAD": {
      "code": "NAD",
      "value": 17.812813402
    },
    "NGN": {
      "code": "NGN",
      "value": 1619.5048686198
    },
    "NIO": {
      "code": "NIO",
      "value": 36.6243631773
    },
    "NOK": {
      "code": "NOK",
      "value": 10.7155819094
    },
    "NPR": {
      "code": "NPR",
      "value": 134.6365556145
    },
    "NZD": {
      "code": "NZD",
      "value": 1.6196702421
    },
    "OMR": {
      "code": "OMR",
      "value": 0.3839500527
    },
    "OP": {
      "code": "OP",
      "value": 0.7045953009
    },
    "PAB": {
      "code": "PAB",
      "value": 0.9991501216
    },
    "PEN": {
      "code": "PEN",
      "value": 3.7989705064
    },
    "PGK": {
      "code": "PGK",
      "value": 3.9163004856
    },
    "PHP": {
      "code": "PHP",
      "value": 56.154540698
    },
    "PKR": {
      "code": "PKR",
      "value": 278.3856352876
    },
    "PLN": {
      "code": "PLN",
      "value": 3.8623806796
    },
    "PYG": {
      "code": "PYG",
      "value": 7747.3886296711
    },
    "QAR": {
      "code": "QAR",
      "value": 3.6375905285
    },
    "RON": {
      "code": "RON",
      "value": 4.4790507877
    },
    "RSD": {
      "code": "RSD",
      "value": 105.1480887696
    },
    "RUB": {
      "code": "RUB",
      "value": 90.2515114822
    },
    "RWF": {
      "code": "RWF",
      "value": 1331.7188005547
    },
    "SAR": {
      "code": "SAR",
      "value": 3.7530105426
    },
    "SBD": {
      "code": "SBD",
      "value": 8.2305429776
    },
    "SCR": {
      "code": "SCR",
      "value": 14.6996027127
    },
    "SDG": {
      "code": "SDG",
      "value": 601.5
    },
    "SEK": {
      "code": "SEK",
      "value": 10.297501196
    },
    "SGD": {
      "code": "SGD",
      "value": 1.3015902453
    },
    "SHP": {
      "code": "SHP",
      "value": 0.7616601175
    },
    "SLL": {
      "code": "SLL",
      "value": 22508.762517719
    },
    "SOL": {
      "code": "SOL",
      "value": 0.0078147283
    },
    "SOS": {
      "code": "SOS",
      "value": 570.9008304218
    },
    "SRD": {
      "code": "SRD",
      "value": 29.1008651746
    },
    "STD": {
      "code": "STD",
      "value": 22100.967871627
    },
    "STN": {
      "code": "STN",
      "value": 22.1009739445
    },
    "SVC": {
      "code": "SVC",
      "value": 8.75
    },
    "SYP": {
      "code": "SYP",
      "value": 13001.875692944
    },
    "SZL": {
      "code": "SZL",
      "value": 17.8531118857
    },
    "THB": {
      "code": "THB",
      "value": 33.5648842539
    },
    "TJS": {
      "code": "TJS",
      "value": 10.6941012444
    },
    "TMT": {
      "code": "TMT",
      "value": 3.5
    },
    "TND": {
      "code": "TND",
      "value": 3.0320805902
    },
    "TOP": {
      "code": "TOP",
      "value": 2.3149704449
    },
    "TRY": {
      "code": "TRY",
      "value": 33.9594251247
    },
    "TTD": {
      "code": "TTD",
      "value": 6.7793711721
    },
    "TWD": {
      "code": "TWD",
      "value": 32.0637260443
    },
    "TZS": {
      "code": "TZS",
      "value": 2715.8324071612
    },
    "UAH": {
      "code": "UAH",
      "value": 41.1964270392
    },
    "UGX": {
      "code": "UGX",
      "value": 3715.5657891889
    },
    "USD": {
      "code": "USD",
      "value": 1
    },
    "USDC": {
      "code": "USDC",
      "value": 0.9986544155
    },
    "USDT": {
      "code": "USDT",
      "value": 0.9977357806
    },
    "UYU": {
      "code": "UYU",
      "value": 40.3611051142
    },
    "UZS": {
      "code": "UZS",
      "value": 12735.888787228
    },
    "VEF": {
      "code": "VEF",
      "value": 3664913.4707152
    },
    "VES": {
      "code": "VES",
      "value": 36.6491175258
    },
    "VND": {
      "code": "VND",
      "value": 24584.668938384
    },
    "VUV": {
      "code": "VUV",
      "value": 117.3706060906
    },
    "WST": {
      "code": "WST",
      "value": 2.6824055398
    },
    "XAF": {
      "code": "XAF",
      "value": 591.6431237762
    },
    "XAG": {
      "code": "XAG",
      "value": 0.0358034385
    },
    "XAU": {
      "code": "XAU",
      "value": 0.0004004012
    },
    "XCD": {
      "code": "XCD",
      "value": 2.7
    },
    "XDR": {
      "code": "XDR",
      "value": 0.7433300956
    },
    "XOF": {
      "code": "XOF",
      "value": 591.6431591849
    },
    "XPD": {
      "code": "XPD",
      "value": 0.0010416683
    },
    "XPF": {
      "code": "XPF",
      "value": 107.5587386812
    },
    "XPT": {
      "code": "XPT",
      "value": 0.0011144685
    },
    "XRP": {
      "code": "XRP",
      "value": 1.8979413541
    },
    "YER": {
      "code": "YER",
      "value": 249.6748175848
    },
    "ZAR": {
      "code": "ZAR",
      "value": 17.8326225896
    },
    "ZMK": {
      "code": "ZMK",
      "value": 9001.2
    },
    "ZMW": {
      "code": "ZMW",
      "value": 26.3789144348
    },
    "ZWL": {
      "code": "ZWL",
      "value": 35207.377697785
    }
  }
}`)
    for (let key of Object.keys(rJson["data"])) {
        myStr += ` <tr>
                        <td>${key}</td>
                        <td>${rJson["data"][key]["code"]}</td>
                        <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
                    </tr> 
                `
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;

}
const btn = document.querySelector(".btn")
btn.addEventListener("click", (e) => {
    e.preventDefault()
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value
    populate(value, currency)
})

