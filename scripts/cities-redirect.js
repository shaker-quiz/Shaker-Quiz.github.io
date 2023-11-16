const cities = {
    "barnaul": "85302a1e-575a-4081-98eb-6d39d8bfca89",
    "vladivostok": "95856429-c342-4f19-9f50-1a1d8f18540f",
    "volzhskij": "0ab20995-5135-46a2-a702-276b035b3c18",
    "voronezh": "5d33918e-bb4c-41af-a3b8-c2f6835f1c6d",
    "ekaterinburg": "a50dd3c8-8ba7-4bb2-a4b2-eb6c9a6f7f9f",
    "kazan": "3fe2fbff-b96a-4069-9270-48312eb912d8",
    "kld": "423b726c-4258-43c9-98ff-101bd290c3c8",
    "kemerovo": "0864fe86-7064-471d-9293-ab891654471b",
    "kirov": "c5bb441a-e580-4ed0-afda-e79c2cab6181",
    "kostroma": "b1016912-fd48-4b6c-a5fb-5f8647a84a17",
    "magnitogorsk": "f2cd199c-aa4a-4399-b1ad-2b0d589c25e4",
    "msk": "c2e2affb-8719-42bb-880b-8678bbe04f03",
    "nizhny_novgorod": "f9931e7e-e30f-4cd9-a718-b38cbb855384",
    "omsk": "9663406d-fa0e-487f-aebe-637d0213ba8e",
    "orenburg": "cecdc295-8aa3-4e87-bcc1-7e7973a3bf22",
    "orsk": "acb2d9a7-f0b9-4cd8-9eaa-eb7b3660438d",
    "penza": "1d393e13-7b1d-4f8e-98b5-08c3b713af69",
    "rostov_on_don": "5b44513d-4bfd-43d2-b898-9ee273d0d9c3",
    "samara": "8fe57e5d-0a26-45f6-99d5-07009891ebe0",
    "spb": "b489621b-cfb2-4aef-8c22-02daf19fa08f",
    "stavropol": "4ec678ba-3ae7-4b74-90ca-8613cb812c13",
    "sktv": "96ccc86f-5b54-46ac-b127-8299d5efb62c",
    "tambov": "311c78c1-b345-4549-bee5-c5d07b4ae505",
    "ufa": "3cad3131-1db7-4298-8645-493c1bfeac6b",
    "khabarovsk": "628af56c-ec9c-4413-aa8c-780a82c0c605",
    "cheboksary": "468b6ad5-7c53-495f-aea7-b90589168367",
    "cheliabinsk": "94d1b410-de85-426d-a132-22bb46bc355d",
    "chita": "1b5cbe60-179b-469c-9e98-2ec2790d6180",
}

const origin = "https://shakerquiz.ru"

const [city = ""] = location.pathname.split("/").filter(Boolean);

location = city in cities ?
    new URL(cities[city], origin) :
    new URL(origin);
