export namespace Currency {
  export type Currency = {
    code: string;
    title: string;
    symbol: string;
    native: string;
    thousands_sep: string;
    decimal_sep: string;
    symbol_left: boolean;
    space_between: boolean;
    exp: number;
  };

  export const AED: Readonly<Currency> = {
    code: "AED",
    title: "United Arab Emirates Dirham",
    symbol: "AED",
    native: "د.إ.‏",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: true,
    exp: 2,
  };
  export const AFN: Readonly<Currency> = {
    code: "AFN",
    title: "Afghan Afghani",
    symbol: "AFN",
    native: "؋",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const ALL: Readonly<Currency> = {
    code: "ALL",
    title: "Albanian Lek",
    symbol: "ALL",
    native: "Lek",
    thousands_sep: ".",
    decimal_sep: ",",
    symbol_left: false,
    space_between: false,
    exp: 2,
  };
  export const AMD: Readonly<Currency> = {
    code: "AMD",
    title: "Armenian Dram",
    symbol: "AMD",
    native: "դր.",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: false,
    space_between: true,
    exp: 2,
  };
  export const ARS: Readonly<Currency> = {
    code: "ARS",
    title: "Argentine Peso",
    symbol: "ARS",
    native: "$",
    thousands_sep: ".",
    decimal_sep: ",",
    symbol_left: true,
    space_between: true,
    exp: 2,
  };
  export const AUD: Readonly<Currency> = {
    code: "AUD",
    title: "Australian Dollar",
    symbol: "AU$",
    native: "$",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const AZN: Readonly<Currency> = {
    code: "AZN",
    title: "Azerbaijani Manat",
    symbol: "AZN",
    native: "ман.",
    thousands_sep: " ",
    decimal_sep: ",",
    symbol_left: false,
    space_between: true,
    exp: 2,
  };
  export const BAM: Readonly<Currency> = {
    code: "BAM",
    title: "Bosnia & Herzegovina Convertible Mark",
    symbol: "BAM",
    native: "KM",
    thousands_sep: ".",
    decimal_sep: ",",
    symbol_left: false,
    space_between: true,
    exp: 2,
  };
  export const BDT: Readonly<Currency> = {
    code: "BDT",
    title: "Bangladeshi Taka",
    symbol: "BDT",
    native: "৳",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: true,
    exp: 2,
  };
  export const BGN: Readonly<Currency> = {
    code: "BGN",
    title: "Bulgarian Lev",
    symbol: "BGN",
    native: "лв.",
    thousands_sep: " ",
    decimal_sep: ",",
    symbol_left: false,
    space_between: true,
    exp: 2,
  };
  export const BND: Readonly<Currency> = {
    code: "BND",
    title: "Brunei Dollar",
    symbol: "BND",
    native: "$",
    thousands_sep: ".",
    decimal_sep: ",",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const BOB: Readonly<Currency> = {
    code: "BOB",
    title: "Bolivian Boliviano",
    symbol: "BOB",
    native: "Bs",
    thousands_sep: ".",
    decimal_sep: ",",
    symbol_left: true,
    space_between: true,
    exp: 2,
  };
  export const BRL: Readonly<Currency> = {
    code: "BRL",
    title: "Brazilian Real",
    symbol: "R$",
    native: "R$",
    thousands_sep: ".",
    decimal_sep: ",",
    symbol_left: true,
    space_between: true,
    exp: 2,
  };
  export const CAD: Readonly<Currency> = {
    code: "CAD",
    title: "Canadian Dollar",
    symbol: "CA$",
    native: "$",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const CHF: Readonly<Currency> = {
    code: "CHF",
    title: "Swiss Franc",
    symbol: "CHF",
    native: "CHF",
    thousands_sep: "'",
    decimal_sep: ".",
    symbol_left: false,
    space_between: true,
    exp: 2,
  };
  export const CLP: Readonly<Currency> = {
    code: "CLP",
    title: "Chilean Peso",
    symbol: "CLP",
    native: "$",
    thousands_sep: ".",
    decimal_sep: ",",
    symbol_left: true,
    space_between: true,
    exp: 0,
  };
  export const CNY: Readonly<Currency> = {
    code: "CNY",
    title: "Chinese Renminbi Yuan",
    symbol: "CN¥",
    native: "CN¥",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const COP: Readonly<Currency> = {
    code: "COP",
    title: "Colombian Peso",
    symbol: "COP",
    native: "$",
    thousands_sep: ".",
    decimal_sep: ",",
    symbol_left: true,
    space_between: true,
    exp: 2,
  };
  export const CRC: Readonly<Currency> = {
    code: "CRC",
    title: "Costa Rican Colón",
    symbol: "CRC",
    native: "₡",
    thousands_sep: ".",
    decimal_sep: ",",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const CZK: Readonly<Currency> = {
    code: "CZK",
    title: "Czech Koruna",
    symbol: "CZK",
    native: "Kč",
    thousands_sep: " ",
    decimal_sep: ",",
    symbol_left: false,
    space_between: true,
    exp: 2,
  };
  export const DKK: Readonly<Currency> = {
    code: "DKK",
    title: "Danish Krone",
    symbol: "DKK",
    native: "kr",
    thousands_sep: "",
    decimal_sep: ",",
    symbol_left: false,
    space_between: true,
    exp: 2,
  };
  export const DOP: Readonly<Currency> = {
    code: "DOP",
    title: "Dominican Peso",
    symbol: "DOP",
    native: "$",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const DZD: Readonly<Currency> = {
    code: "DZD",
    title: "Algerian Dinar",
    symbol: "DZD",
    native: "د.ج.‏",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: true,
    exp: 2,
  };
  export const EGP: Readonly<Currency> = {
    code: "EGP",
    title: "Egyptian Pound",
    symbol: "EGP",
    native: "ج.م.‏",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: true,
    exp: 2,
  };
  export const EUR: Readonly<Currency> = {
    code: "EUR",
    title: "Euro",
    symbol: "€",
    native: "€",
    thousands_sep: " ",
    decimal_sep: ",",
    symbol_left: false,
    space_between: true,
    exp: 2,
  };
  export const GBP: Readonly<Currency> = {
    code: "GBP",
    title: "British Pound",
    symbol: "£",
    native: "£",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const GEL: Readonly<Currency> = {
    code: "GEL",
    title: "Georgian Lari",
    symbol: "GEL",
    native: "GEL",
    thousands_sep: " ",
    decimal_sep: ",",
    symbol_left: false,
    space_between: true,
    exp: 2,
  };
  export const GTQ: Readonly<Currency> = {
    code: "GTQ",
    title: "Guatemalan Quetzal",
    symbol: "GTQ",
    native: "Q",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const HKD: Readonly<Currency> = {
    code: "HKD",
    title: "Hong Kong Dollar",
    symbol: "HK$",
    native: "$",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const HNL: Readonly<Currency> = {
    code: "HNL",
    title: "Honduran Lempira",
    symbol: "HNL",
    native: "L",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: true,
    exp: 2,
  };
  export const HRK: Readonly<Currency> = {
    code: "HRK",
    title: "Croatian Kuna",
    symbol: "HRK",
    native: "kn",
    thousands_sep: ".",
    decimal_sep: ",",
    symbol_left: false,
    space_between: true,
    exp: 2,
  };
  export const HUF: Readonly<Currency> = {
    code: "HUF",
    title: "Hungarian Forint",
    symbol: "HUF",
    native: "Ft",
    thousands_sep: " ",
    decimal_sep: ",",
    symbol_left: false,
    space_between: true,
    exp: 2,
  };
  export const IDR: Readonly<Currency> = {
    code: "IDR",
    title: "Indonesian Rupiah",
    symbol: "IDR",
    native: "Rp",
    thousands_sep: ".",
    decimal_sep: ",",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const ILS: Readonly<Currency> = {
    code: "ILS",
    title: "Israeli New Sheqel",
    symbol: "₪",
    native: "₪",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: true,
    exp: 2,
  };
  export const INR: Readonly<Currency> = {
    code: "INR",
    title: "Indian Rupee",
    symbol: "₹",
    native: "₹",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const ISK: Readonly<Currency> = {
    code: "ISK",
    title: "Icelandic Króna",
    symbol: "ISK",
    native: "kr",
    thousands_sep: ".",
    decimal_sep: ",",
    symbol_left: false,
    space_between: true,
    exp: 0,
  };
  export const JMD: Readonly<Currency> = {
    code: "JMD",
    title: "Jamaican Dollar",
    symbol: "JMD",
    native: "$",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const JPY: Readonly<Currency> = {
    code: "JPY",
    title: "Japanese Yen",
    symbol: "¥",
    native: "￥",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: false,
    exp: 0,
  };
  export const KES: Readonly<Currency> = {
    code: "KES",
    title: "Kenyan Shilling",
    symbol: "KES",
    native: "Ksh",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const KGS: Readonly<Currency> = {
    code: "KGS",
    title: "Kyrgyzstani Som",
    symbol: "KGS",
    native: "KGS",
    thousands_sep: " ",
    decimal_sep: "-",
    symbol_left: false,
    space_between: true,
    exp: 2,
  };
  export const KRW: Readonly<Currency> = {
    code: "KRW",
    title: "South Korean Won",
    symbol: "₩",
    native: "₩",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: false,
    exp: 0,
  };
  export const KZT: Readonly<Currency> = {
    code: "KZT",
    title: "Kazakhstani Tenge",
    symbol: "KZT",
    native: "₸",
    thousands_sep: " ",
    decimal_sep: "-",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const LBP: Readonly<Currency> = {
    code: "LBP",
    title: "Lebanese Pound",
    symbol: "LBP",
    native: "ل.ل.‏",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: true,
    exp: 2,
  };
  export const LKR: Readonly<Currency> = {
    code: "LKR",
    title: "Sri Lankan Rupee",
    symbol: "LKR",
    native: "රු.",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: true,
    exp: 2,
  };
  export const MAD: Readonly<Currency> = {
    code: "MAD",
    title: "Moroccan Dirham",
    symbol: "MAD",
    native: "د.م.‏",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: true,
    exp: 2,
  };
  export const MDL: Readonly<Currency> = {
    code: "MDL",
    title: "Moldovan Leu",
    symbol: "MDL",
    native: "MDL",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: false,
    space_between: true,
    exp: 2,
  };
  export const MNT: Readonly<Currency> = {
    code: "MNT",
    title: "Mongolian Tögrög",
    symbol: "MNT",
    native: "MNT",
    thousands_sep: " ",
    decimal_sep: ",",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const MUR: Readonly<Currency> = {
    code: "MUR",
    title: "Mauritian Rupee",
    symbol: "MUR",
    native: "MUR",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const MVR: Readonly<Currency> = {
    code: "MVR",
    title: "Maldivian Rufiyaa",
    symbol: "MVR",
    native: "MVR",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: false,
    space_between: true,
    exp: 2,
  };
  export const MXN: Readonly<Currency> = {
    code: "MXN",
    title: "Mexican Peso",
    symbol: "MX$",
    native: "$",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const MYR: Readonly<Currency> = {
    code: "MYR",
    title: "Malaysian Ringgit",
    symbol: "MYR",
    native: "RM",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const MZN: Readonly<Currency> = {
    code: "MZN",
    title: "Mozambican Metical",
    symbol: "MZN",
    native: "MTn",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const NGN: Readonly<Currency> = {
    code: "NGN",
    title: "Nigerian Naira",
    symbol: "NGN",
    native: "₦",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const NIO: Readonly<Currency> = {
    code: "NIO",
    title: "Nicaraguan Córdoba",
    symbol: "NIO",
    native: "C$",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: true,
    exp: 2,
  };
  export const NOK: Readonly<Currency> = {
    code: "NOK",
    title: "Norwegian Krone",
    symbol: "NOK",
    native: "kr",
    thousands_sep: " ",
    decimal_sep: ",",
    symbol_left: true,
    space_between: true,
    exp: 2,
  };
  export const NPR: Readonly<Currency> = {
    code: "NPR",
    title: "Nepalese Rupee",
    symbol: "NPR",
    native: "नेरू",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const NZD: Readonly<Currency> = {
    code: "NZD",
    title: "New Zealand Dollar",
    symbol: "NZ$",
    native: "$",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const PAB: Readonly<Currency> = {
    code: "PAB",
    title: "Panamanian Balboa",
    symbol: "PAB",
    native: "B/.",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: true,
    exp: 2,
  };
  export const PEN: Readonly<Currency> = {
    code: "PEN",
    title: "Peruvian Nuevo Sol",
    symbol: "PEN",
    native: "S/.",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: true,
    exp: 2,
  };
  export const PHP: Readonly<Currency> = {
    code: "PHP",
    title: "Philippine Peso",
    symbol: "PHP",
    native: "₱",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const PKR: Readonly<Currency> = {
    code: "PKR",
    title: "Pakistani Rupee",
    symbol: "PKR",
    native: "₨",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const PLN: Readonly<Currency> = {
    code: "PLN",
    title: "Polish Złoty",
    symbol: "PLN",
    native: "zł",
    thousands_sep: " ",
    decimal_sep: ",",
    symbol_left: false,
    space_between: true,
    exp: 2,
  };
  export const PYG: Readonly<Currency> = {
    code: "PYG",
    title: "Paraguayan Guaraní",
    symbol: "PYG",
    native: "₲",
    thousands_sep: ".",
    decimal_sep: ",",
    symbol_left: true,
    space_between: true,
    exp: 0,
  };
  export const QAR: Readonly<Currency> = {
    code: "QAR",
    title: "Qatari Riyal",
    symbol: "QAR",
    native: "ر.ق.‏",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: true,
    exp: 2,
  };
  export const RON: Readonly<Currency> = {
    code: "RON",
    title: "Romanian Leu",
    symbol: "RON",
    native: "RON",
    thousands_sep: ".",
    decimal_sep: ",",
    symbol_left: false,
    space_between: true,
    exp: 2,
  };
  export const RSD: Readonly<Currency> = {
    code: "RSD",
    title: "Serbian Dinar",
    symbol: "RSD",
    native: "дин.",
    thousands_sep: ".",
    decimal_sep: ",",
    symbol_left: false,
    space_between: true,
    exp: 2,
  };
  export const RUB: Readonly<Currency> = {
    code: "RUB",
    title: "Russian Ruble",
    symbol: "RUB",
    native: "руб.",
    thousands_sep: " ",
    decimal_sep: ",",
    symbol_left: false,
    space_between: true,
    exp: 2,
  };
  export const SAR: Readonly<Currency> = {
    code: "SAR",
    title: "Saudi Riyal",
    symbol: "SAR",
    native: "ر.س.‏",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: true,
    exp: 2,
  };
  export const SEK: Readonly<Currency> = {
    code: "SEK",
    title: "Swedish Krona",
    symbol: "SEK",
    native: "kr",
    thousands_sep: ".",
    decimal_sep: ",",
    symbol_left: false,
    space_between: true,
    exp: 2,
  };
  export const SGD: Readonly<Currency> = {
    code: "SGD",
    title: "Singapore Dollar",
    symbol: "SGD",
    native: "$",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const THB: Readonly<Currency> = {
    code: "THB",
    title: "Thai Baht",
    symbol: "฿",
    native: "฿",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const TJS: Readonly<Currency> = {
    code: "TJS",
    title: "Tajikistani Somoni",
    symbol: "TJS",
    native: "TJS",
    thousands_sep: " ",
    decimal_sep: ";",
    symbol_left: false,
    space_between: true,
    exp: 2,
  };
  export const TRY: Readonly<Currency> = {
    code: "TRY",
    title: "Turkish Lira",
    symbol: "TRY",
    native: "TL",
    thousands_sep: ".",
    decimal_sep: ",",
    symbol_left: false,
    space_between: true,
    exp: 2,
  };
  export const TTD: Readonly<Currency> = {
    code: "TTD",
    title: "Trinidad and Tobago Dollar",
    symbol: "TTD",
    native: "$",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const TWD: Readonly<Currency> = {
    code: "TWD",
    title: "New Taiwan Dollar",
    symbol: "NT$",
    native: "NT$",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const TZS: Readonly<Currency> = {
    code: "TZS",
    title: "Tanzanian Shilling",
    symbol: "TZS",
    native: "TSh",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const UAH: Readonly<Currency> = {
    code: "UAH",
    title: "Ukrainian Hryvnia",
    symbol: "UAH",
    native: "₴",
    thousands_sep: " ",
    decimal_sep: ",",
    symbol_left: false,
    space_between: false,
    exp: 2,
  };
  export const UGX: Readonly<Currency> = {
    code: "UGX",
    title: "Ugandan Shilling",
    symbol: "UGX",
    native: "USh",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: false,
    exp: 0,
  };
  export const USD: Readonly<Currency> = {
    code: "USD",
    title: "United States Dollar",
    symbol: "$",
    native: "$",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: false,
    exp: 2,
  };
  export const UYU: Readonly<Currency> = {
    code: "UYU",
    title: "Uruguayan Peso",
    symbol: "UYU",
    native: "$",
    thousands_sep: ".",
    decimal_sep: ",",
    symbol_left: true,
    space_between: true,
    exp: 2,
  };
  export const UZS: Readonly<Currency> = {
    code: "UZS",
    title: "Uzbekistani Som",
    symbol: "UZS",
    native: "UZS",
    thousands_sep: " ",
    decimal_sep: ",",
    symbol_left: false,
    space_between: true,
    exp: 2,
  };
  export const VND: Readonly<Currency> = {
    code: "VND",
    title: "Vietnamese Đồng",
    symbol: "₫",
    native: "₫",
    thousands_sep: ".",
    decimal_sep: ",",
    symbol_left: false,
    space_between: true,
    exp: 0,
  };
  export const YER: Readonly<Currency> = {
    code: "YER",
    title: "Yemeni Rial",
    symbol: "YER",
    native: "ر.ي.‏",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: true,
    exp: 2,
  };
  export const ZAR: Readonly<Currency> = {
    code: "ZAR",
    title: "South African Rand",
    symbol: "ZAR",
    native: "R",
    thousands_sep: ",",
    decimal_sep: ".",
    symbol_left: true,
    space_between: true,
    exp: 2,
  };

  export type CurrencyCode =
    | "AED"
    | "AFN"
    | "ALL"
    | "AMD"
    | "ARS"
    | "AUD"
    | "AZN"
    | "BAM"
    | "BDT"
    | "BGN"
    | "BND"
    | "BOB"
    | "BRL"
    | "CAD"
    | "CHF"
    | "CLP"
    | "CNY"
    | "COP"
    | "CRC"
    | "CZK"
    | "DKK"
    | "DOP"
    | "DZD"
    | "EGP"
    | "EUR"
    | "GBP"
    | "GEL"
    | "GTQ"
    | "HKD"
    | "HNL"
    | "HRK"
    | "HUF"
    | "IDR"
    | "ILS"
    | "INR"
    | "ISK"
    | "JMD"
    | "JPY"
    | "KES"
    | "KGS"
    | "KRW"
    | "KZT"
    | "LBP"
    | "LKR"
    | "MAD"
    | "MDL"
    | "MNT"
    | "MUR"
    | "MVR"
    | "MXN"
    | "MYR"
    | "MZN"
    | "NGN"
    | "NIO"
    | "NOK"
    | "NPR"
    | "NZD"
    | "PAB"
    | "PEN"
    | "PHP"
    | "PKR"
    | "PLN"
    | "PYG"
    | "QAR"
    | "RON"
    | "RSD"
    | "RUB"
    | "SAR"
    | "SEK"
    | "SGD"
    | "THB"
    | "TJS"
    | "TRY"
    | "TTD"
    | "TWD"
    | "TZS"
    | "UAH"
    | "UGX"
    | "USD"
    | "UYU"
    | "UZS"
    | "VND"
    | "YER"
    | "ZAR";
}
