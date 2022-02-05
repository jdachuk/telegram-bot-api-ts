export namespace Country {
  export type CountryCode =
    | "AD"
    | "AE"
    | "AF"
    | "AG"
    | "AI"
    | "AL"
    | "AM"
    | "AO"
    | "AQ"
    | "AR"
    | "AS"
    | "AT"
    | "AU"
    | "AW"
    | "AX"
    | "AZ"
    | "BA"
    | "BB"
    | "BD"
    | "BE"
    | "BF"
    | "BG"
    | "BH"
    | "BI"
    | "BJ"
    | "BL"
    | "BM"
    | "BN"
    | "BO"
    | "BQ"
    | "BR"
    | "BS"
    | "BT"
    | "BV"
    | "BW"
    | "BY"
    | "BZ"
    | "CA"
    | "CC"
    | "CD"
    | "CF"
    | "CG"
    | "CH"
    | "CI"
    | "CK"
    | "CL"
    | "CM"
    | "CN"
    | "CO"
    | "CR"
    | "CU"
    | "CV"
    | "CW"
    | "CX"
    | "CY"
    | "CZ"
    | "DE"
    | "DJ"
    | "DK"
    | "DM"
    | "DO"
    | "DZ"
    | "EC"
    | "EE"
    | "EG"
    | "EH"
    | "ER"
    | "ES"
    | "ET"
    | "FI"
    | "FJ"
    | "FK"
    | "FM"
    | "FO"
    | "FR"
    | "GA"
    | "GB"
    | "GD"
    | "GE"
    | "GF"
    | "GG"
    | "GH"
    | "GI"
    | "GL"
    | "GM"
    | "GN"
    | "GP"
    | "GQ"
    | "GR"
    | "GS"
    | "GT"
    | "GU"
    | "GW"
    | "GY"
    | "HK"
    | "HM"
    | "HN"
    | "HR"
    | "HT"
    | "HU"
    | "ID"
    | "IE"
    | "IL"
    | "IM"
    | "IN"
    | "IO"
    | "IQ"
    | "IR"
    | "IS"
    | "IT"
    | "JE"
    | "JM"
    | "JO"
    | "JP"
    | "KE"
    | "KG"
    | "KH"
    | "KI"
    | "KM"
    | "KN"
    | "KP"
    | "KR"
    | "KW"
    | "KY"
    | "KZ"
    | "LA"
    | "LB"
    | "LC"
    | "LI"
    | "LK"
    | "LR"
    | "LS"
    | "LT"
    | "LU"
    | "LV"
    | "LY"
    | "MA"
    | "MC"
    | "MD"
    | "ME"
    | "MF"
    | "MG"
    | "MH"
    | "MK"
    | "ML"
    | "MM"
    | "MN"
    | "MO"
    | "MP"
    | "MQ"
    | "MR"
    | "MS"
    | "MT"
    | "MU"
    | "MV"
    | "MW"
    | "MX"
    | "MY"
    | "MZ"
    | "NA"
    | "NC"
    | "NE"
    | "NF"
    | "NG"
    | "NI"
    | "NL"
    | "NO"
    | "NP"
    | "NR"
    | "NU"
    | "NZ"
    | "OM"
    | "PA"
    | "PE"
    | "PF"
    | "PG"
    | "PH"
    | "PK"
    | "PL"
    | "PM"
    | "PN"
    | "PR"
    | "PS"
    | "PT"
    | "PW"
    | "PY"
    | "QA"
    | "RE"
    | "RO"
    | "RS"
    | "RU"
    | "RW"
    | "SA"
    | "SB"
    | "SC"
    | "SD"
    | "SE"
    | "SG"
    | "SH"
    | "SI"
    | "SJ"
    | "SK"
    | "SL"
    | "SM"
    | "SN"
    | "SO"
    | "SR"
    | "SS"
    | "ST"
    | "SV"
    | "SX"
    | "SY"
    | "SZ"
    | "TC"
    | "TD"
    | "TF"
    | "TG"
    | "TH"
    | "TJ"
    | "TK"
    | "TL"
    | "TM"
    | "TN"
    | "TO"
    | "TR"
    | "TT"
    | "TV"
    | "TW"
    | "TZ"
    | "UA"
    | "UG"
    | "UM"
    | "US"
    | "UY"
    | "UZ"
    | "VA"
    | "VC"
    | "VE"
    | "VG"
    | "VI"
    | "VN"
    | "VU"
    | "WF"
    | "WS"
    | "YE"
    | "YT"
    | "ZA"
    | "ZM"
    | "ZW";

  export type Country = {
    code: CountryCode;
    name: string;
    ccTLD: string[];
  };

  export const AD: Readonly<Country> = {
    code: "AD",
    name: "Andorra",
    ccTLD: [".ad"],
  };
  export const AE: Readonly<Country> = {
    code: "AE",
    name: "United Arab Emirates",
    ccTLD: [".ae"],
  };
  export const AF: Readonly<Country> = {
    code: "AF",
    name: "Afghanistan",
    ccTLD: [".af"],
  };
  export const AG: Readonly<Country> = {
    code: "AG",
    name: "Antigua and Barbuda",
    ccTLD: [".ag"],
  };
  export const AI: Readonly<Country> = {
    code: "AI",
    name: "Anguilla",
    ccTLD: [".ai"],
  };
  export const AL: Readonly<Country> = {
    code: "AL",
    name: "Albania",
    ccTLD: [".al"],
  };
  export const AM: Readonly<Country> = {
    code: "AM",
    name: "Armenia",
    ccTLD: [".am"],
  };
  export const AO: Readonly<Country> = {
    code: "AO",
    name: "Angola",
    ccTLD: [".ao"],
  };
  export const AQ: Readonly<Country> = {
    code: "AQ",
    name: "Antarctica",
    ccTLD: [".aq"],
  };
  export const AR: Readonly<Country> = {
    code: "AR",
    name: "Argentina",
    ccTLD: [".ar"],
  };
  export const AS: Readonly<Country> = {
    code: "AS",
    name: "American Samoa",
    ccTLD: [".as"],
  };
  export const AT: Readonly<Country> = {
    code: "AT",
    name: "Austria",
    ccTLD: [".at"],
  };
  export const AU: Readonly<Country> = {
    code: "AU",
    name: "Australia",
    ccTLD: [".au"],
  };
  export const AW: Readonly<Country> = {
    code: "AW",
    name: "Aruba",
    ccTLD: [".aw"],
  };
  export const AX: Readonly<Country> = {
    code: "AX",
    name: "Åland Islands",
    ccTLD: [".ax"],
  };
  export const AZ: Readonly<Country> = {
    code: "AZ",
    name: "Azerbaijan",
    ccTLD: [".az"],
  };
  export const BA: Readonly<Country> = {
    code: "BA",
    name: "Bosnia and Herzegovina",
    ccTLD: [".ba"],
  };
  export const BB: Readonly<Country> = {
    code: "BB",
    name: "Barbados",
    ccTLD: [".bb"],
  };
  export const BD: Readonly<Country> = {
    code: "BD",
    name: "Bangladesh",
    ccTLD: [".bd"],
  };
  export const BE: Readonly<Country> = {
    code: "BE",
    name: "Belgium",
    ccTLD: [".be"],
  };
  export const BF: Readonly<Country> = {
    code: "BF",
    name: "Burkina Faso",
    ccTLD: [".bf"],
  };
  export const BG: Readonly<Country> = {
    code: "BG",
    name: "Bulgaria",
    ccTLD: [".bg"],
  };
  export const BH: Readonly<Country> = {
    code: "BH",
    name: "Bahrain",
    ccTLD: [".bh"],
  };
  export const BI: Readonly<Country> = {
    code: "BI",
    name: "Burundi",
    ccTLD: [".bi"],
  };
  export const BJ: Readonly<Country> = {
    code: "BJ",
    name: "Benin",
    ccTLD: [".bj"],
  };
  export const BL: Readonly<Country> = {
    code: "BL",
    name: "Saint Barthélemy",
    ccTLD: [".bl"],
  };
  export const BM: Readonly<Country> = {
    code: "BM",
    name: "Bermuda",
    ccTLD: [".bm"],
  };
  export const BN: Readonly<Country> = {
    code: "BN",
    name: "Brunei Darussalam",
    ccTLD: [".bn"],
  };
  export const BO: Readonly<Country> = {
    code: "BO",
    name: "Bolivia (Plurinational State of)",
    ccTLD: [".bo"],
  };
  export const BQ: Readonly<Country> = {
    code: "BQ",
    name: "Bonaire, Sint Eustatius and Saba",
    ccTLD: [".bq"],
  };
  export const BR: Readonly<Country> = {
    code: "BR",
    name: "Brazil",
    ccTLD: [".br"],
  };
  export const BS: Readonly<Country> = {
    code: "BS",
    name: "Bahamas",
    ccTLD: [".bs"],
  };
  export const BT: Readonly<Country> = {
    code: "BT",
    name: "Bhutan",
    ccTLD: [".bt"],
  };
  export const BV: Readonly<Country> = {
    code: "BV",
    name: "Bouvet Island",
    ccTLD: [".bv"],
  };
  export const BW: Readonly<Country> = {
    code: "BW",
    name: "Botswana",
    ccTLD: [".bw"],
  };
  export const BY: Readonly<Country> = {
    code: "BY",
    name: "Belarus",
    ccTLD: [".by"],
  };
  export const BZ: Readonly<Country> = {
    code: "BZ",
    name: "Belize",
    ccTLD: [".bz"],
  };
  export const CA: Readonly<Country> = {
    code: "CA",
    name: "Canada",
    ccTLD: [".ca"],
  };
  export const CC: Readonly<Country> = {
    code: "CC",
    name: "Cocos (Keeling) Islands",
    ccTLD: [".cc"],
  };
  export const CD: Readonly<Country> = {
    code: "CD",
    name: "Congo, Democratic Republic of the",
    ccTLD: [".cd"],
  };
  export const CF: Readonly<Country> = {
    code: "CF",
    name: "Central African Republic",
    ccTLD: [".cf"],
  };
  export const CG: Readonly<Country> = {
    code: "CG",
    name: "Congo",
    ccTLD: [".cg"],
  };
  export const CH: Readonly<Country> = {
    code: "CH",
    name: "Switzerland",
    ccTLD: [".ch"],
  };
  export const CI: Readonly<Country> = {
    code: "CI",
    name: "Côte d'Ivoire",
    ccTLD: [".ci"],
  };
  export const CK: Readonly<Country> = {
    code: "CK",
    name: "Cook Islands",
    ccTLD: [".ck"],
  };
  export const CL: Readonly<Country> = {
    code: "CL",
    name: "Chile",
    ccTLD: [".cl"],
  };
  export const CM: Readonly<Country> = {
    code: "CM",
    name: "Cameroon",
    ccTLD: [".cm"],
  };
  export const CN: Readonly<Country> = {
    code: "CN",
    name: "China",
    ccTLD: [".cn"],
  };
  export const CO: Readonly<Country> = {
    code: "CO",
    name: "Colombia",
    ccTLD: [".co"],
  };
  export const CR: Readonly<Country> = {
    code: "CR",
    name: "Costa Rica",
    ccTLD: [".cr"],
  };
  export const CU: Readonly<Country> = {
    code: "CU",
    name: "Cuba",
    ccTLD: [".cu"],
  };
  export const CV: Readonly<Country> = {
    code: "CV",
    name: "Cabo Verde",
    ccTLD: [".cv"],
  };
  export const CW: Readonly<Country> = {
    code: "CW",
    name: "Curaçao",
    ccTLD: [".cw"],
  };
  export const CX: Readonly<Country> = {
    code: "CX",
    name: "Christmas Island",
    ccTLD: [".cx"],
  };
  export const CY: Readonly<Country> = {
    code: "CY",
    name: "Cyprus",
    ccTLD: [".cy"],
  };
  export const CZ: Readonly<Country> = {
    code: "CZ",
    name: "Czechia",
    ccTLD: [".cz"],
  };
  export const DE: Readonly<Country> = {
    code: "DE",
    name: "Germany",
    ccTLD: [".de"],
  };
  export const DJ: Readonly<Country> = {
    code: "DJ",
    name: "Djibouti",
    ccTLD: [".dj"],
  };
  export const DK: Readonly<Country> = {
    code: "DK",
    name: "Denmark",
    ccTLD: [".dk"],
  };
  export const DM: Readonly<Country> = {
    code: "DM",
    name: "Dominica",
    ccTLD: [".dm"],
  };
  export const DO: Readonly<Country> = {
    code: "DO",
    name: "Dominican Republic",
    ccTLD: [".do"],
  };
  export const DZ: Readonly<Country> = {
    code: "DZ",
    name: "Algeria",
    ccTLD: [".dz"],
  };
  export const EC: Readonly<Country> = {
    code: "EC",
    name: "Ecuador",
    ccTLD: [".ec"],
  };
  export const EE: Readonly<Country> = {
    code: "EE",
    name: "Estonia",
    ccTLD: [".ee"],
  };
  export const EG: Readonly<Country> = {
    code: "EG",
    name: "Egypt",
    ccTLD: [".eg"],
  };
  export const EH: Readonly<Country> = {
    code: "EH",
    name: "Western Sahara",
    ccTLD: [],
  };
  export const ER: Readonly<Country> = {
    code: "ER",
    name: "Eritrea",
    ccTLD: [".er"],
  };
  export const ES: Readonly<Country> = {
    code: "ES",
    name: "Spain",
    ccTLD: [".es"],
  };
  export const ET: Readonly<Country> = {
    code: "ET",
    name: "Ethiopia",
    ccTLD: [".et"],
  };
  export const FI: Readonly<Country> = {
    code: "FI",
    name: "Finland",
    ccTLD: [".fi"],
  };
  export const FJ: Readonly<Country> = {
    code: "FJ",
    name: "Fiji",
    ccTLD: [".fj"],
  };
  export const FK: Readonly<Country> = {
    code: "FK",
    name: "Falkland Islands (Malvinas)",
    ccTLD: [".fk"],
  };
  export const FM: Readonly<Country> = {
    code: "FM",
    name: "Micronesia (Federated States of)",
    ccTLD: [".fm"],
  };
  export const FO: Readonly<Country> = {
    code: "FO",
    name: "Faroe Islands",
    ccTLD: [".fo"],
  };
  export const FR: Readonly<Country> = {
    code: "FR",
    name: "France",
    ccTLD: [".fr"],
  };
  export const GA: Readonly<Country> = {
    code: "GA",
    name: "Gabon",
    ccTLD: [".ga"],
  };
  export const GB: Readonly<Country> = {
    code: "GB",
    name: "United Kingdom of Great Britain and Northern Ireland",
    ccTLD: [".gb", ".uk"],
  };
  export const GD: Readonly<Country> = {
    code: "GD",
    name: "Grenada",
    ccTLD: [".gd"],
  };
  export const GE: Readonly<Country> = {
    code: "GE",
    name: "Georgia",
    ccTLD: [".ge"],
  };
  export const GF: Readonly<Country> = {
    code: "GF",
    name: "French Guiana",
    ccTLD: [".gf"],
  };
  export const GG: Readonly<Country> = {
    code: "GG",
    name: "Guernsey",
    ccTLD: [".gg"],
  };
  export const GH: Readonly<Country> = {
    code: "GH",
    name: "Ghana",
    ccTLD: [".gh"],
  };
  export const GI: Readonly<Country> = {
    code: "GI",
    name: "Gibraltar",
    ccTLD: [".gi"],
  };
  export const GL: Readonly<Country> = {
    code: "GL",
    name: "Greenland",
    ccTLD: [".gl"],
  };
  export const GM: Readonly<Country> = {
    code: "GM",
    name: "Gambia",
    ccTLD: [".gm"],
  };
  export const GN: Readonly<Country> = {
    code: "GN",
    name: "Guinea",
    ccTLD: [".gn"],
  };
  export const GP: Readonly<Country> = {
    code: "GP",
    name: "Guadeloupe",
    ccTLD: [".gp"],
  };
  export const GQ: Readonly<Country> = {
    code: "GQ",
    name: "Equatorial Guinea",
    ccTLD: [".gq"],
  };
  export const GR: Readonly<Country> = {
    code: "GR",
    name: "Greece",
    ccTLD: [".gr"],
  };
  export const GS: Readonly<Country> = {
    code: "GS",
    name: "South Georgia and the South Sandwich Islands",
    ccTLD: [".gs"],
  };
  export const GT: Readonly<Country> = {
    code: "GT",
    name: "Guatemala",
    ccTLD: [".gt"],
  };
  export const GU: Readonly<Country> = {
    code: "GU",
    name: "Guam",
    ccTLD: [".gu"],
  };
  export const GW: Readonly<Country> = {
    code: "GW",
    name: "Guinea-Bissau",
    ccTLD: [".gw"],
  };
  export const GY: Readonly<Country> = {
    code: "GY",
    name: "Guyana",
    ccTLD: [".gy"],
  };
  export const HK: Readonly<Country> = {
    code: "HK",
    name: "Hong Kong",
    ccTLD: [".hk"],
  };
  export const HM: Readonly<Country> = {
    code: "HM",
    name: "Heard Island and McDonald Islands",
    ccTLD: [".hm"],
  };
  export const HN: Readonly<Country> = {
    code: "HN",
    name: "Honduras",
    ccTLD: [".hn"],
  };
  export const HR: Readonly<Country> = {
    code: "HR",
    name: "Croatia",
    ccTLD: [".hr"],
  };
  export const HT: Readonly<Country> = {
    code: "HT",
    name: "Haiti",
    ccTLD: [".ht"],
  };
  export const HU: Readonly<Country> = {
    code: "HU",
    name: "Hungary",
    ccTLD: [".hu"],
  };
  export const ID: Readonly<Country> = {
    code: "ID",
    name: "Indonesia",
    ccTLD: [".id"],
  };
  export const IE: Readonly<Country> = {
    code: "IE",
    name: "Ireland",
    ccTLD: [".ie"],
  };
  export const IL: Readonly<Country> = {
    code: "IL",
    name: "Israel",
    ccTLD: [".il"],
  };
  export const IM: Readonly<Country> = {
    code: "IM",
    name: "Isle of Man",
    ccTLD: [".im"],
  };
  export const IN: Readonly<Country> = {
    code: "IN",
    name: "India",
    ccTLD: [".in"],
  };
  export const IO: Readonly<Country> = {
    code: "IO",
    name: "British Indian Ocean Territory",
    ccTLD: [".io"],
  };
  export const IQ: Readonly<Country> = {
    code: "IQ",
    name: "Iraq",
    ccTLD: [".iq"],
  };
  export const IR: Readonly<Country> = {
    code: "IR",
    name: "Iran (Islamic Republic of)",
    ccTLD: [".ir"],
  };
  export const IS: Readonly<Country> = {
    code: "IS",
    name: "Iceland",
    ccTLD: [".is"],
  };
  export const IT: Readonly<Country> = {
    code: "IT",
    name: "Italy",
    ccTLD: [".it"],
  };
  export const JE: Readonly<Country> = {
    code: "JE",
    name: "Jersey",
    ccTLD: [".je"],
  };
  export const JM: Readonly<Country> = {
    code: "JM",
    name: "Jamaica",
    ccTLD: [".jm"],
  };
  export const JO: Readonly<Country> = {
    code: "JO",
    name: "Jordan",
    ccTLD: [".jo"],
  };
  export const JP: Readonly<Country> = {
    code: "JP",
    name: "Japan",
    ccTLD: [".jp"],
  };
  export const KE: Readonly<Country> = {
    code: "KE",
    name: "Kenya",
    ccTLD: [".ke"],
  };
  export const KG: Readonly<Country> = {
    code: "KG",
    name: "Kyrgyzstan",
    ccTLD: [".kg"],
  };
  export const KH: Readonly<Country> = {
    code: "KH",
    name: "Cambodia",
    ccTLD: [".kh"],
  };
  export const KI: Readonly<Country> = {
    code: "KI",
    name: "Kiribati",
    ccTLD: [".ki"],
  };
  export const KM: Readonly<Country> = {
    code: "KM",
    name: "Comoros",
    ccTLD: [".km"],
  };
  export const KN: Readonly<Country> = {
    code: "KN",
    name: "Saint Kitts and Nevis",
    ccTLD: [".kn"],
  };
  export const KP: Readonly<Country> = {
    code: "KP",
    name: "Korea (Democratic People's Republic of)",
    ccTLD: [".kp"],
  };
  export const KR: Readonly<Country> = {
    code: "KR",
    name: "Korea, Republic of",
    ccTLD: [".kr"],
  };
  export const KW: Readonly<Country> = {
    code: "KW",
    name: "Kuwait",
    ccTLD: [".kw"],
  };
  export const KY: Readonly<Country> = {
    code: "KY",
    name: "Cayman Islands",
    ccTLD: [".ky"],
  };
  export const KZ: Readonly<Country> = {
    code: "KZ",
    name: "Kazakhstan",
    ccTLD: [".kz"],
  };
  export const LA: Readonly<Country> = {
    code: "LA",
    name: "Lao People's Democratic Republic",
    ccTLD: [".la"],
  };
  export const LB: Readonly<Country> = {
    code: "LB",
    name: "Lebanon",
    ccTLD: [".lb"],
  };
  export const LC: Readonly<Country> = {
    code: "LC",
    name: "Saint Lucia",
    ccTLD: [".lc"],
  };
  export const LI: Readonly<Country> = {
    code: "LI",
    name: "Liechtenstein",
    ccTLD: [".li"],
  };
  export const LK: Readonly<Country> = {
    code: "LK",
    name: "Sri Lanka",
    ccTLD: [".lk"],
  };
  export const LR: Readonly<Country> = {
    code: "LR",
    name: "Liberia",
    ccTLD: [".lr"],
  };
  export const LS: Readonly<Country> = {
    code: "LS",
    name: "Lesotho",
    ccTLD: [".ls"],
  };
  export const LT: Readonly<Country> = {
    code: "LT",
    name: "Lithuania",
    ccTLD: [".lt"],
  };
  export const LU: Readonly<Country> = {
    code: "LU",
    name: "Luxembourg",
    ccTLD: [".lu"],
  };
  export const LV: Readonly<Country> = {
    code: "LV",
    name: "Latvia",
    ccTLD: [".lv"],
  };
  export const LY: Readonly<Country> = {
    code: "LY",
    name: "Libya",
    ccTLD: [".ly"],
  };
  export const MA: Readonly<Country> = {
    code: "MA",
    name: "Morocco",
    ccTLD: [".ma"],
  };
  export const MC: Readonly<Country> = {
    code: "MC",
    name: "Monaco",
    ccTLD: [".mc"],
  };
  export const MD: Readonly<Country> = {
    code: "MD",
    name: "Moldova, Republic of",
    ccTLD: [".md"],
  };
  export const ME: Readonly<Country> = {
    code: "ME",
    name: "Montenegro",
    ccTLD: [".me"],
  };
  export const MF: Readonly<Country> = {
    code: "MF",
    name: "Saint Martin (French part)",
    ccTLD: [".mf"],
  };
  export const MG: Readonly<Country> = {
    code: "MG",
    name: "Madagascar",
    ccTLD: [".mg"],
  };
  export const MH: Readonly<Country> = {
    code: "MH",
    name: "Marshall Islands",
    ccTLD: [".mh"],
  };
  export const MK: Readonly<Country> = {
    code: "MK",
    name: "North Macedonia",
    ccTLD: [".mk"],
  };
  export const ML: Readonly<Country> = {
    code: "ML",
    name: "Mali",
    ccTLD: [".ml"],
  };
  export const MM: Readonly<Country> = {
    code: "MM",
    name: "Myanmar",
    ccTLD: [".mm"],
  };
  export const MN: Readonly<Country> = {
    code: "MN",
    name: "Mongolia",
    ccTLD: [".mn"],
  };
  export const MO: Readonly<Country> = {
    code: "MO",
    name: "Macao",
    ccTLD: [".mo"],
  };
  export const MP: Readonly<Country> = {
    code: "MP",
    name: "Northern Mariana Islands",
    ccTLD: [".mp"],
  };
  export const MQ: Readonly<Country> = {
    code: "MQ",
    name: "Martinique",
    ccTLD: [".mq"],
  };
  export const MR: Readonly<Country> = {
    code: "MR",
    name: "Mauritania",
    ccTLD: [".mr"],
  };
  export const MS: Readonly<Country> = {
    code: "MS",
    name: "Montserrat",
    ccTLD: [".ms"],
  };
  export const MT: Readonly<Country> = {
    code: "MT",
    name: "Malta",
    ccTLD: [".mt"],
  };
  export const MU: Readonly<Country> = {
    code: "MU",
    name: "Mauritius",
    ccTLD: [".mu"],
  };
  export const MV: Readonly<Country> = {
    code: "MV",
    name: "Maldives",
    ccTLD: [".mv"],
  };
  export const MW: Readonly<Country> = {
    code: "MW",
    name: "Malawi",
    ccTLD: [".mw"],
  };
  export const MX: Readonly<Country> = {
    code: "MX",
    name: "Mexico",
    ccTLD: [".mx"],
  };
  export const MY: Readonly<Country> = {
    code: "MY",
    name: "Malaysia",
    ccTLD: [".my"],
  };
  export const MZ: Readonly<Country> = {
    code: "MZ",
    name: "Mozambique",
    ccTLD: [".mz"],
  };
  export const NA: Readonly<Country> = {
    code: "NA",
    name: "Namibia",
    ccTLD: [".na"],
  };
  export const NC: Readonly<Country> = {
    code: "NC",
    name: "New Caledonia",
    ccTLD: [".nc"],
  };
  export const NE: Readonly<Country> = {
    code: "NE",
    name: "Niger",
    ccTLD: [".ne"],
  };
  export const NF: Readonly<Country> = {
    code: "NF",
    name: "Norfolk Island",
    ccTLD: [".nf"],
  };
  export const NG: Readonly<Country> = {
    code: "NG",
    name: "Nigeria",
    ccTLD: [".ng"],
  };
  export const NI: Readonly<Country> = {
    code: "NI",
    name: "Nicaragua",
    ccTLD: [".ni"],
  };
  export const NL: Readonly<Country> = {
    code: "NL",
    name: "Netherlands",
    ccTLD: [".nl"],
  };
  export const NO: Readonly<Country> = {
    code: "NO",
    name: "Norway",
    ccTLD: [".no"],
  };
  export const NP: Readonly<Country> = {
    code: "NP",
    name: "Nepal",
    ccTLD: [".np"],
  };
  export const NR: Readonly<Country> = {
    code: "NR",
    name: "Nauru",
    ccTLD: [".nr"],
  };
  export const NU: Readonly<Country> = {
    code: "NU",
    name: "Niue",
    ccTLD: [".nu"],
  };
  export const NZ: Readonly<Country> = {
    code: "NZ",
    name: "New Zealand",
    ccTLD: [".nz"],
  };
  export const OM: Readonly<Country> = {
    code: "OM",
    name: "Oman",
    ccTLD: [".om"],
  };
  export const PA: Readonly<Country> = {
    code: "PA",
    name: "Panama",
    ccTLD: [".pa"],
  };
  export const PE: Readonly<Country> = {
    code: "PE",
    name: "Peru",
    ccTLD: [".pe"],
  };
  export const PF: Readonly<Country> = {
    code: "PF",
    name: "French Polynesia",
    ccTLD: [".pf"],
  };
  export const PG: Readonly<Country> = {
    code: "PG",
    name: "Papua New Guinea",
    ccTLD: [".pg"],
  };
  export const PH: Readonly<Country> = {
    code: "PH",
    name: "Philippines",
    ccTLD: [".ph"],
  };
  export const PK: Readonly<Country> = {
    code: "PK",
    name: "Pakistan",
    ccTLD: [".pk"],
  };
  export const PL: Readonly<Country> = {
    code: "PL",
    name: "Poland",
    ccTLD: [".pl"],
  };
  export const PM: Readonly<Country> = {
    code: "PM",
    name: "Saint Pierre and Miquelon",
    ccTLD: [".pm"],
  };
  export const PN: Readonly<Country> = {
    code: "PN",
    name: "Pitcairn",
    ccTLD: [".pn"],
  };
  export const PR: Readonly<Country> = {
    code: "PR",
    name: "Puerto Rico",
    ccTLD: [".pr"],
  };
  export const PS: Readonly<Country> = {
    code: "PS",
    name: "Palestine, State of",
    ccTLD: [".ps"],
  };
  export const PT: Readonly<Country> = {
    code: "PT",
    name: "Portugal",
    ccTLD: [".pt"],
  };
  export const PW: Readonly<Country> = {
    code: "PW",
    name: "Palau",
    ccTLD: [".pw"],
  };
  export const PY: Readonly<Country> = {
    code: "PY",
    name: "Paraguay",
    ccTLD: [".py"],
  };
  export const QA: Readonly<Country> = {
    code: "QA",
    name: "Qatar",
    ccTLD: [".qa"],
  };
  export const RE: Readonly<Country> = {
    code: "RE",
    name: "Réunion",
    ccTLD: [".re"],
  };
  export const RO: Readonly<Country> = {
    code: "RO",
    name: "Romania",
    ccTLD: [".ro"],
  };
  export const RS: Readonly<Country> = {
    code: "RS",
    name: "Serbia",
    ccTLD: [".rs"],
  };
  export const RU: Readonly<Country> = {
    code: "RU",
    name: "Russian Federation",
    ccTLD: [".ru"],
  };
  export const RW: Readonly<Country> = {
    code: "RW",
    name: "Rwanda",
    ccTLD: [".rw"],
  };
  export const SA: Readonly<Country> = {
    code: "SA",
    name: "Saudi Arabia",
    ccTLD: [".sa"],
  };
  export const SB: Readonly<Country> = {
    code: "SB",
    name: "Solomon Islands",
    ccTLD: [".sb"],
  };
  export const SC: Readonly<Country> = {
    code: "SC",
    name: "Seychelles",
    ccTLD: [".sc"],
  };
  export const SD: Readonly<Country> = {
    code: "SD",
    name: "Sudan",
    ccTLD: [".sd"],
  };
  export const SE: Readonly<Country> = {
    code: "SE",
    name: "Sweden",
    ccTLD: [".se"],
  };
  export const SG: Readonly<Country> = {
    code: "SG",
    name: "Singapore",
    ccTLD: [".sg"],
  };
  export const SH: Readonly<Country> = {
    code: "SH",
    name: "Saint Helena, Ascension and Tristan da Cunha",
    ccTLD: [".sh"],
  };
  export const SI: Readonly<Country> = {
    code: "SI",
    name: "Slovenia",
    ccTLD: [".si"],
  };
  export const SJ: Readonly<Country> = {
    code: "SJ",
    name: "Svalbard and Jan Mayen",
    ccTLD: [".sj"],
  };
  export const SK: Readonly<Country> = {
    code: "SK",
    name: "Slovakia",
    ccTLD: [".sk"],
  };
  export const SL: Readonly<Country> = {
    code: "SL",
    name: "Sierra Leone",
    ccTLD: [".sl"],
  };
  export const SM: Readonly<Country> = {
    code: "SM",
    name: "San Marino",
    ccTLD: [".sm"],
  };
  export const SN: Readonly<Country> = {
    code: "SN",
    name: "Senegal",
    ccTLD: [".sn"],
  };
  export const SO: Readonly<Country> = {
    code: "SO",
    name: "Somalia",
    ccTLD: [".so"],
  };
  export const SR: Readonly<Country> = {
    code: "SR",
    name: "Suriname",
    ccTLD: [".sr"],
  };
  export const SS: Readonly<Country> = {
    code: "SS",
    name: "South Sudan",
    ccTLD: [".ss"],
  };
  export const ST: Readonly<Country> = {
    code: "ST",
    name: "Sao Tome and Principe",
    ccTLD: [".st"],
  };
  export const SV: Readonly<Country> = {
    code: "SV",
    name: "El Salvador",
    ccTLD: [".sv"],
  };
  export const SX: Readonly<Country> = {
    code: "SX",
    name: "Sint Maarten (Dutch part)",
    ccTLD: [".sx"],
  };
  export const SY: Readonly<Country> = {
    code: "SY",
    name: "Syrian Arab Republic",
    ccTLD: [".sy"],
  };
  export const SZ: Readonly<Country> = {
    code: "SZ",
    name: "Eswatini",
    ccTLD: [".sz"],
  };
  export const TC: Readonly<Country> = {
    code: "TC",
    name: "Turks and Caicos Islands",
    ccTLD: [".tc"],
  };
  export const TD: Readonly<Country> = {
    code: "TD",
    name: "Chad",
    ccTLD: [".td"],
  };
  export const TF: Readonly<Country> = {
    code: "TF",
    name: "French Southern Territories",
    ccTLD: [".tf"],
  };
  export const TG: Readonly<Country> = {
    code: "TG",
    name: "Togo",
    ccTLD: [".tg"],
  };
  export const TH: Readonly<Country> = {
    code: "TH",
    name: "Thailand",
    ccTLD: [".th"],
  };
  export const TJ: Readonly<Country> = {
    code: "TJ",
    name: "Tajikistan",
    ccTLD: [".tj"],
  };
  export const TK: Readonly<Country> = {
    code: "TK",
    name: "Tokelau",
    ccTLD: [".tk"],
  };
  export const TL: Readonly<Country> = {
    code: "TL",
    name: "Timor-Leste",
    ccTLD: [".tl"],
  };
  export const TM: Readonly<Country> = {
    code: "TM",
    name: "Turkmenistan",
    ccTLD: [".tm"],
  };
  export const TN: Readonly<Country> = {
    code: "TN",
    name: "Tunisia",
    ccTLD: [".tn"],
  };
  export const TO: Readonly<Country> = {
    code: "TO",
    name: "Tonga",
    ccTLD: [".to"],
  };
  export const TR: Readonly<Country> = {
    code: "TR",
    name: "Turkey",
    ccTLD: [".tr"],
  };
  export const TT: Readonly<Country> = {
    code: "TT",
    name: "Trinidad and Tobago",
    ccTLD: [".tt"],
  };
  export const TV: Readonly<Country> = {
    code: "TV",
    name: "Tuvalu",
    ccTLD: [".tv"],
  };
  export const TW: Readonly<Country> = {
    code: "TW",
    name: "Taiwan, Province of China",
    ccTLD: [".tw"],
  };
  export const TZ: Readonly<Country> = {
    code: "TZ",
    name: "Tanzania, United Republic of",
    ccTLD: [".tz"],
  };
  export const UA: Readonly<Country> = {
    code: "UA",
    name: "Ukraine",
    ccTLD: [".ua"],
  };
  export const UG: Readonly<Country> = {
    code: "UG",
    name: "Uganda",
    ccTLD: [".ug"],
  };
  export const UM: Readonly<Country> = {
    code: "UM",
    name: "United States Minor Outlying Islands",
    ccTLD: [],
  };
  export const US: Readonly<Country> = {
    code: "US",
    name: "United States of America",
    ccTLD: [".us"],
  };
  export const UY: Readonly<Country> = {
    code: "UY",
    name: "Uruguay",
    ccTLD: [".uy"],
  };
  export const UZ: Readonly<Country> = {
    code: "UZ",
    name: "Uzbekistan",
    ccTLD: [".uz"],
  };
  export const VA: Readonly<Country> = {
    code: "VA",
    name: "Holy See",
    ccTLD: [".va"],
  };
  export const VC: Readonly<Country> = {
    code: "VC",
    name: "Saint Vincent and the Grenadines",
    ccTLD: [".vc"],
  };
  export const VE: Readonly<Country> = {
    code: "VE",
    name: "Venezuela (Bolivarian Republic of)",
    ccTLD: [".ve"],
  };
  export const VG: Readonly<Country> = {
    code: "VG",
    name: "Virgin Islands (British)",
    ccTLD: [".vg"],
  };
  export const VI: Readonly<Country> = {
    code: "VI",
    name: "Virgin Islands (U.S.)",
    ccTLD: [".vi"],
  };
  export const VN: Readonly<Country> = {
    code: "VN",
    name: "Viet Nam",
    ccTLD: [".vn"],
  };
  export const VU: Readonly<Country> = {
    code: "VU",
    name: "Vanuatu",
    ccTLD: [".vu"],
  };
  export const WF: Readonly<Country> = {
    code: "WF",
    name: "Wallis and Futuna",
    ccTLD: [".wf"],
  };
  export const WS: Readonly<Country> = {
    code: "WS",
    name: "Samoa",
    ccTLD: [".ws"],
  };
  export const YE: Readonly<Country> = {
    code: "YE",
    name: "Yemen",
    ccTLD: [".ye"],
  };
  export const YT: Readonly<Country> = {
    code: "YT",
    name: "Mayotte",
    ccTLD: [".yt"],
  };
  export const ZA: Readonly<Country> = {
    code: "ZA",
    name: "South Africa",
    ccTLD: [".za"],
  };
  export const ZM: Readonly<Country> = {
    code: "ZM",
    name: "Zambia",
    ccTLD: [".zm"],
  };
  export const ZW: Readonly<Country> = {
    code: "ZW",
    name: "Zimbabwe",
    ccTLD: [".zw"],
  };
}
