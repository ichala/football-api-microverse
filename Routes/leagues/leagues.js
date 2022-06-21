const express = require("express");
const router = express.Router();
router.get("/leagues", async (req, res) => {
  const league =[
    {
        "id": "423e4faa-4c4b-4cf2-b1e9-03e8e5cace1f",
        "name": "Premier League",
        "country": "England",
        "logo": "https://media.api-sports.io/football/leagues/39.png",
        "teams": [
            {
                "id": "0b9d69df-5a2d-44c4-8502-3bbf32e6bb3a",
                "name": "Manchester United",
                "city": "Manchester",
                "founded": 1878,
                "logo": "https://media.api-sports.io/football/teams/33.png"
            },
            {
                "id": "6ac5a9fd-9c5f-4b5e-b9a5-aeb3618890d6",
                "name": "Newcastle",
                "city": "Newcastle upon Tyne",
                "founded": 1892,
                "logo": "https://media.api-sports.io/football/teams/34.png"
            },
            {
                "id": "a0957597-ee7b-45f6-adb7-5f271fa13643",
                "name": "Watford",
                "city": "Watford",
                "founded": 1881,
                "logo": "https://media.api-sports.io/football/teams/38.png"
            },
            {
                "id": "164dc9b1-897e-4726-86e7-b571ed260a4f",
                "name": "Wolves",
                "city": "Wolverhampton, West Midlands",
                "founded": 1877,
                "logo": "https://media.api-sports.io/football/teams/39.png"
            },
            {
                "id": "3a5fb0c0-bec8-4b9e-95c1-850d2bdd80b6",
                "name": "Liverpool",
                "city": "Liverpool",
                "founded": 1892,
                "logo": "https://media.api-sports.io/football/teams/40.png"
            },
            {
                "id": "eea10ba1-588a-4f50-9361-5eb574da845c",
                "name": "Southampton",
                "city": "Southampton, Hampshire",
                "founded": 1885,
                "logo": "https://media.api-sports.io/football/teams/41.png"
            },
            {
                "id": "91b573ec-d279-48ae-8ccd-9374e524941f",
                "name": "Arsenal",
                "city": "London",
                "founded": 1886,
                "logo": "https://media.api-sports.io/football/teams/42.png"
            }
        ]
    },
    {
        "id": "1171c526-3c18-44f9-83b1-c7c470e0dd8c",
        "name": "La Liga",
        "country": "Spain",
        "logo": "https://media.api-sports.io/football/leagues/140.png",
        "teams": [
            {
                "id": "18cc305a-4a78-4303-90a4-01c0cf9b33f4",
                "name": "Barcelona",
                "city": "Barcelona",
                "founded": 1899,
                "logo": "https://media.api-sports.io/football/teams/529.png"
            },
            {
                "id": "64400da1-bbf8-4c4a-ba00-7fc1a0dc12fe",
                "name": "Atletico Madrid",
                "city": "Madrid",
                "founded": 1903,
                "logo": "https://media.api-sports.io/football/teams/530.png"
            },
            {
                "id": "a59fa5ed-8ef9-41bb-8b81-18ba5ec51c3c",
                "name": "Valencia",
                "city": "Valencia",
                "founded": 1919,
                "logo": "https://media.api-sports.io/football/teams/532.png"
            },
            {
                "id": "f23b972e-db56-45da-9cf9-eda597914749",
                "name": "Sevilla",
                "city": "Sevilla",
                "founded": 1890,
                "logo": "https://media.api-sports.io/football/teams/536.png"
            },
            {
                "id": "65bf8bc6-3c4a-4f19-be72-d1e2a4e091a0",
                "name": "Celta Vigo",
                "city": "Vigo",
                "founded": 1923,
                "logo": "https://media.api-sports.io/football/teams/538.png"
            },
            {
                "id": "a48c66c6-6aef-4704-b531-1832b165f291",
                "name": "Real Madrid",
                "city": "Madrid",
                "founded": 1902,
                "logo": "https://media.api-sports.io/football/teams/541.png"
            },
            {
                "id": "6da408f2-fd15-48ec-8916-e525f276c58b",
                "name": "Alaves",
                "city": "Vitoria-Gasteiz",
                "founded": 1921,
                "logo": "https://media.api-sports.io/football/teams/542.png"
            }
        ]
    },
    {
        "id": "1631784c-dbcf-4942-8be0-69534b654f8a",
        "name": "Serie A",
        "country": "Italy",
        "logo": "https://media.api-sports.io/football/leagues/135.png",
        "teams": [
            {
                "id": "7253c9d4-1c34-4858-8ba1-4d5ec21dfe70",
                "name": "Lazio",
                "city": "Roma",
                "founded": 1900,
                "logo": "https://media.api-sports.io/football/teams/487.png"
            },
            {
                "id": "60f47e1f-26b0-4909-98b9-70c7b09d46b0",
                "name": "Sassuolo",
                "city": "Reggio nell&apos;Emilia",
                "founded": 1922,
                "logo": "https://media.api-sports.io/football/teams/488.png"
            },
            {
                "id": "2a22e7e3-5814-4e1f-af7e-b79b6dc619a8",
                "name": "AC Milan",
                "city": "Milano",
                "founded": 1899,
                "logo": "https://media.api-sports.io/football/teams/489.png"
            },
            {
                "id": "3423ddc1-efcf-4db7-899d-0b1e5c677bdd",
                "name": "Cagliari",
                "city": "Cagliari",
                "founded": 1920,
                "logo": "https://media.api-sports.io/football/teams/490.png"
            },
            {
                "id": "1ae56ca5-62c6-4ec1-8f4a-9013df95a4a8",
                "name": "Napoli",
                "city": "Napoli",
                "founded": 1904,
                "logo": "https://media.api-sports.io/football/teams/492.png"
            },
            {
                "id": "6b9b380a-4a65-444e-80f8-07b97b91c942",
                "name": "Udinese",
                "city": "Udine",
                "founded": 1896,
                "logo": "https://media.api-sports.io/football/teams/494.png"
            },
            {
                "id": "e16a6fce-8f87-4bf1-bbf5-2754dd25b99e",
                "name": "Juventus",
                "city": "Torino",
                "founded": 1897,
                "logo": "https://media.api-sports.io/football/teams/496.png"
            }
        ]
    },
    {
        "id": "140cd7fb-0598-425d-8616-8efe12f0e5f3",
        "name": "Primeira Liga",
        "country": "Portugal",
        "logo": "https://media.api-sports.io/football/leagues/94.png",
        "teams": [
            {
                "id": "b9557ff8-175b-400a-a54a-7764515fac45",
                "name": "Benfica",
                "city": "Lisboa",
                "founded": 1904,
                "logo": "https://media.api-sports.io/football/teams/211.png"
            },
            {
                "id": "8305adc4-8791-437f-a64d-41dbd6a3fdb3",
                "name": "FC Porto",
                "city": "Porto",
                "founded": 1893,
                "logo": "https://media.api-sports.io/football/teams/212.png"
            },
            {
                "id": "3b3532fd-af78-497c-a0cc-ddeb98baabbc",
                "name": "Maritimo",
                "city": "Ilha da Madeira",
                "founded": 1910,
                "logo": "https://media.api-sports.io/football/teams/214.png"
            },
            {
                "id": "e147a65f-d041-4979-a1cf-a30bea0c46c0",
                "name": "Moreirense",
                "city": "Moreira de Cónegos",
                "founded": 1938,
                "logo": "https://media.api-sports.io/football/teams/215.png"
            },
            {
                "id": "99b6adbd-4eee-4a16-8261-f77b671ca360",
                "name": "Portimonense",
                "city": "Portimão",
                "founded": 1914,
                "logo": "https://media.api-sports.io/football/teams/216.png"
            },
            {
                "id": "4a28fab8-2943-4691-8856-41254714c255",
                "name": "SC Braga",
                "city": "Braga",
                "founded": 1921,
                "logo": "https://media.api-sports.io/football/teams/217.png"
            },
            {
                "id": "49129b79-d877-4734-bda6-bbc285f99693",
                "name": "Tondela",
                "city": "Tondela",
                "founded": 1933,
                "logo": "https://media.api-sports.io/football/teams/218.png"
            }
        ]
    }
]
  res.status(200).json({
    status: 200,
    msg: "Success",
    leagues: league,
  });
});

module.exports = router;
