const cities = {
    "barnaul": "barnaul",
    "vladivostok": "vladivostok",
    "volzhskij": "volzhskiy",
    "voronezh": "voronezh",
    "ekaterinburg": "ekaterinburg",
    "kazan": "kazan",
    "kld": "kaliningrad",
    "kemerovo": "kemerovo",
    "kirov": "kirov",
    "kostroma": "kostroma",
    "magnitogorsk": "magnitogorsk",
    "msk": "shakerquiz",
    "nizhny_novgorod": "nizhniy-novgorod",
    "omsk": "omsk",
    "orenburg": "orenburg",
    "orsk": "orsk",
    "penza": "penza",
    "rostov_on_don": "rostov-na-donu",
    "samara": "samara",
    "spb": "spb",
    "stavropol": "stavropol",
    "sktv": "syktyvkar",
    "tambov": "tambov",
    "ufa": "ufa",
    "khabarovsk": "habarovsk",
    "cheboksary": "cheboksary",
    "cheliabinsk": "chelyabinsk",
    "chita": "chita",
}

const origin = "https://shakerquiz.ru"

const [city = ""] = location.pathname.split("/").filter(Boolean);

location = city in cities ?
    new URL(cities[city], origin) :
    new URL(origin);
