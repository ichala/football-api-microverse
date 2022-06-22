const express = require("express");
const router = express.Router();
router.get("/leagues", async (req, res) => {
    league= [
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
                    "details": "Manchester United Football Club, commonly referred to as Man United, is a professional football club based in the Old Trafford area of Manchester, England. The club competes in the Premier League, the top division in the English football league system.",
                    "logo": "https://media.api-sports.io/football/teams/33.png"
                },
                {
                    "id": "6ac5a9fd-9c5f-4b5e-b9a5-aeb3618890d6",
                    "name": "Newcastle",
                    "city": "Newcastle upon Tyne",
                    "founded": 1892,
                    "details": "Newcastle United Football Club is an English professional football club based in Newcastle upon Tyne, that plays in the Premier League – the top flight of English football. The club was founded in 1892 by the merger of Newcastle East End and Newcastle West End.",
                    "logo": "https://media.api-sports.io/football/teams/34.png"
                },
                {
                    "id": "a0957597-ee7b-45f6-adb7-5f271fa13643",
                    "name": "Watford",
                    "city": "Watford",
                    "founded": 1881,
                    "details": "Watford Football Club is an English professional football club based in Watford, Hertfordshire. They play in the EFL Championship, the second tier of English football. The club’s original foundation is 1881, aligned with that of its antecedent, Watford Rovers, and was established as Watford Football Club in 1898.",
                    "logo": "https://media.api-sports.io/football/teams/38.png"
                },
                {
                    "id": "164dc9b1-897e-4726-86e7-b571ed260a4f",
                    "name": "Wolves",
                    "city": "Wolverhampton, West Midlands",
                    "founded": 1877,
                    "details": "Wolverhampton Wanderers Football Club, commonly known as Wolves, is a professional association football club based in Wolverhampton, England.",
                    "logo": "https://media.api-sports.io/football/teams/39.png"
                },
                {
                    "id": "3a5fb0c0-bec8-4b9e-95c1-850d2bdd80b6",
                    "name": "Liverpool",
                    "city": "Liverpool",
                    "founded": 1892,
                    "details": "Liverpool Football Club is a professional football club based in Liverpool, England. The club competes in the Premier League, the top tier of English football. Founded in 1892, the club joined the Football League the following year and has played its home games at Anfield since its formation.",
                    "logo": "https://media.api-sports.io/football/teams/40.png"
                },
                {
                    "id": "eea10ba1-588a-4f50-9361-5eb574da845c",
                    "name": "Southampton",
                    "city": "Southampton, Hampshire",
                    "founded": 1885,
                    "details": "Southampton Football Club is an English professional football club based in Southampton, Hampshire, which plays in the Premier League, the top tier of English football.",
                    "logo": "https://media.api-sports.io/football/teams/41.png"
                },
                {
                    "id": "91b573ec-d279-48ae-8ccd-9374e524941f",
                    "name": "Arsenal",
                    "city": "London",
                    "founded": 1886,
                    "details": "Arsenal Football Club is a professional football club based in Islington, London, England. Arsenal plays in the Premier League, the top flight of English football.",
                    "logo": "https://media.api-sports.io/football/teams/42.png"
                },
                {
                    "id": "91b573qs-d239-48ae-8c3d-93742524941f",
                    "name": "Chelsea",
                    "city": "London",
                    "founded": 1905,
                    "details": "Chelsea Football Club is an English professional football club based in Fulham, in the western parts of London. Founded in 1905, they play their home games at Stamford Bridge. The club competes in the Premier League, the top division of English football.",
                    "logo": "https://media.api-sports.io/football/teams/49.png"
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
                    "details": "Futbol Club Barcelona, commonly referred to as Barcelona and colloquially known as Barça, is a professional football club based in Barcelona, Catalonia, Spain, that competes in La Liga, the top flight of Spanish football.",
                    "logo": "https://media.api-sports.io/football/teams/529.png"
                },
                {
                    "id": "64400da1-bbf8-4c4a-ba00-7fc1a0dc12fe",
                    "name": "Atletico Madrid",
                    "city": "Madrid",
                    "founded": 1903,
                    "details": "Club Atlético de Madrid, S.A.D., known simply as Atleti in the Spanish-speaking world and commonly referred to at international level as Atletico Madrid, is a Spanish professional football club based in Madrid that plays in La Liga. The club play their home games at the Metropolitano, which has a capacity of 68,456.",
                    "logo": "https://media.api-sports.io/football/teams/530.png"
                },
                {
                    "id": "a59fa5ed-8ef9-41bb-8b81-18ba5ec51c3c",
                    "name": "Valencia",
                    "city": "Valencia",
                    "founded": 1919,
                    "details": "Valencia Club de Fútbol, commonly referred to as Valencia CF is a professional football club based in Valencia, Spain, that currently plays in La Liga, the top flight of the Spanish league system. Valencia were founded in 1919 and have played their home games at the 55,000-seater Mestalla since 1923.",
                    "logo": "https://media.api-sports.io/football/teams/532.png"
                },
                {
                    "id": "f23b972e-db56-45da-9cf9-eda597914749",
                    "name": "Sevilla",
                    "city": "Sevilla",
                    "founded": 1890,
                    "details": "Sevilla Fútbol Club, is a Spanish professional football club based in Seville, the capital and largest city of the autonomous community of Andalusia, Spain. It plays in Spanish football's top flight, La Liga. Sevilla at the European level, have won the UEFA Europa League six times, the most of any club.",
                    "logo": "https://media.api-sports.io/football/teams/536.png"
                },
                {
                    "id": "65bf8bc6-3c4a-4f19-be72-d1e2a4e091a0",
                    "name": "Celta Vigo",
                    "city": "Vigo",
                    "founded": 1923,
                    "details": "Real Club Celta de Vigo, commonly known as Celta de Vigo or simply Celta, is a Spanish professional football club based in Vigo, Galicia, that competes in La Liga, the top tier of Spanish football. Nicknamed Os Celestes, the club was founded on 1923 as Club Celta, following the merger of two Vigo-based teams.",
                    "logo": "https://media.api-sports.io/football/teams/538.png"
                },
                {
                    "id": "a48c66c6-6aef-4704-b531-1832b165f291",
                    "name": "Real Madrid",
                    "city": "Madrid",
                    "founded": 1902,
                    "details": "Real Madrid Club de Fútbol, commonly referred to as Real Madrid or simply Real, is a Spanish professional football club based in Madrid. Founded in 1902 as Madrid Football Club, the club has traditionally worn a white home kit since its inception.",
                    "logo": "https://media.api-sports.io/football/teams/541.png"
                },
                {
                    "id": "6da408f2-fd15-48ec-8916-e525f276c58b",
                    "name": "Alaves",
                    "city": "Vitoria-Gasteiz",
                    "founded": 1921,
                    "details": "Deportivo Alavés, S.A.D., usually abbreviated to Alavés, is a Spanish football club based in Vitoria-Gasteiz, Álava, in the autonomous community of the Basque Country.",
                    "logo": "https://media.api-sports.io/football/teams/542.png"
                },
                {
                    "id": "91b573ec-dss9-4qqe-8ssd-9374e524ss1f",
                    "name": "Athletic Club",
                    "city": "Bilbao",
                    "founded": 1898,
                    "details": "Athletic Club, commonly known as Athletic Bilbao or just Athletic, is a professional football club based in the city of Bilbao in the Basque Country of Spain.",
                    "logo": "https://media.api-sports.io/football/teams/531.png"
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
                    "details": "Società Sportiva Lazio, commonly referred to as Lazio, is an Italian professional sports club based in Rome, most known for its football activity. The society, founded in 1900, plays in the Serie A and have spent most of their history in the top tier of Italian football.",
                    "logo": "https://media.api-sports.io/football/teams/487.png"
                },
                {
                    "id": "60f47e1f-26b0-4909-98b9-70c7b09d46b0",
                    "name": "Sassuolo",
                    "city": "Reggio nell Emilia",
                    "founded": 1922,
                    "details": "Unione Sportiva Sassuolo Calcio, commonly referred to as Sassuolo, is an Italian football club based in Sassuolo, Emilia-Romagna. Their colours are black and green, hence the nickname Neroverdi. ",
                    "logo": "https://media.api-sports.io/football/teams/488.png"
                },
                {
                    "id": "2a22e7e3-5814-4e1f-af7e-b79b6dc619a8",
                    "name": "AC Milan",
                    "city": "Milano",
                    "founded": 1899,
                    "details": "Associazione Calcio Milan, commonly referred to as AC Milan or simply Milan, is a professional football club in Milan, Italy, founded in 1899. The club has spent its entire history, with the exception of the 1980–81 and 1982–83 seasons, in the top flight of Italian football, known as Serie A since 1929–30.",
                    "logo": "https://media.api-sports.io/football/teams/489.png"
                },
                {
                    "id": "3423ddc1-efcf-4db7-899d-0b1e5c677bdd",
                    "name": "Cagliari",
                    "city": "Cagliari",
                    "founded": 1920,
                    "details": "Cagliari Calcio, commonly referred to as Cagliari, is an Italian football club based in Cagliari, Sardinia. In the 2022-23 season, The club competes in the Serie B. As of 2021–22, the team is temporarily playing their home games at the 16,416-seat Unipol Domus, adjacent to their future new stadium site. ",
                    "logo": "https://media.api-sports.io/football/teams/490.png"
                },
                {
                    "id": "1ae56ca5-62c6-4ec1-8f4a-9013df95a4a8",
                    "name": "Napoli",
                    "city": "Napoli",
                    "founded": 1904,
                    "details": "Società Sportiva Calcio Napoli, commonly referred to as Napoli, is an Italian professional football club based in Naples, Campania that plays in Serie A, the top flight of Italian football. Napoli have won two Serie A titles, six Coppa Italia titles, two Supercoppa Italiana titles, and one UEFA Cup.",
                    "logo": "https://media.api-sports.io/football/teams/492.png"
                },
                {
                    "id": "6b9b380a-4a65-444e-80f8-07b97b91c942",
                    "name": "Udinese",
                    "city": "Udine",
                    "founded": 1896,
                    "details": "Udinese Calcio, commonly referred to as Udinese, is a professional Italian football club based in Udine, Friuli-Venezia Giulia, that currently plays in Serie A. It was founded on 30 November 1896 as a sports club, and on 5 July 1911 as a football club.",
                    "logo": "https://media.api-sports.io/football/teams/494.png"
                },
                {
                    "id": "e16a6fce-8f87-4bf1-bbf5-2754dd25b99e",
                    "name": "Juventus",
                    "city": "Torino",
                    "founded": 1897,
                    "details": "Juventus Football Club, colloquially known as Juve, is a professional football club based in Turin, Piedmont, Italy, that competes in the Serie A, the top tier of the Italian football league system.",
                    "logo": "https://media.api-sports.io/football/teams/496.png"
                },
                {
                    "id": "91be73ec-d279-48ae-8ccd-9898t089941f",
                    "name": "Genoa",
                    "city": "Genova",
                    "founded": 1893,
                    "details": "Genoa Cricket and Football Club, commonly referred to as Genoa, is a professional football club based in Genoa, Liguria, Italy, that competes in the Serie B. Established on 7 September 1893, it is Italy's oldest football team, and the oldest Italian football team still active with over 125 years of history.",
                    "logo": "https://media.api-sports.io/football/teams/495.png"
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
                    "details": "Sport Lisboa e Benfica ComC MHIH OM, commonly known as Benfica, is a professional football club based in Lisbon, Portugal, that competes in the Primeira Liga, the top flight of Portuguese football.",
                    "logo": "https://media.api-sports.io/football/teams/211.png"
                },
                {
                    "id": "8305adc4-8791-437f-a64d-41dbd6a3fdb3",
                    "name": "FC Porto",
                    "city": "Porto",
                    "founded": 1893,
                    "details": "Futebol Clube do Porto, MHIH, OM, commonly known as FC Porto or simply Porto, is a Portuguese professional sports club based in Porto. It is best known for the professional football team playing in the Primeira Liga, the top flight of Portuguese football.",
                    "logo": "https://media.api-sports.io/football/teams/212.png"
                },
                {
                    "id": "3b3532fd-af78-497c-a0cc-ddeb98baabbc",
                    "name": "Maritimo",
                    "city": "Ilha da Madeira",
                    "founded": 1910,
                    "details": "Club Sport Marítimo MH M, commonly known as Marítimo, is a Portuguese sports club founded in Funchal, Madeira, in 1910. Marítimo is best known for its football team playing in Portugal's top-flight competition, the Primeira Liga.",
                    "logo": "https://media.api-sports.io/football/teams/214.png"
                },
                {
                    "id": "e147a65f-d041-4979-a1cf-a30bea0c46c0",
                    "name": "Moreirense",
                    "city": "Moreira de Cónegos",
                    "founded": 1938,
                    "details": "Moreirense Futebol Clube is a Portuguese professional football club based in Moreira de Cónegos, Guimarães Municipality, in Minho. Founded on 1 November 1938, it plays in the Liga Portugal 2, holding home games at Parque de Jogos Comendador Joaquim de Almeida Freitas, with a capacity for 9,000 spectators.",
                    "logo": "https://media.api-sports.io/football/teams/215.png"
                },
                {
                    "id": "99b6adbd-4eee-4a16-8261-f77b671ca360",
                    "name": "Portimonense",
                    "city": "Portimão",
                    "founded": 1914,
                    "details": "Portimonense Sporting Clube is a Portuguese sports club based in Portimão. Founded on 14 August 1914, it is most notable for its professional football team, which currently plays in the Primeira Liga, the top flight of Portuguese football.",
                    "logo": "https://media.api-sports.io/football/teams/216.png"
                },
                {
                    "id": "4a28fab8-2943-4691-8856-41254714c255",
                    "name": "SC Braga",
                    "city": "Braga",
                    "founded": 1921,
                    "details": "Sporting Clube de Braga, commonly known as Sporting de Braga or just Braga, is a Portuguese sports club from the city of Braga. It's a football team that plays in the Primeira Liga at the Estádio Municipal de Braga.",
                    "logo": "https://media.api-sports.io/football/teams/217.png"
                },
                {
                    "id": "49129b79-d877-4734-bda6-bbc285f99693",
                    "name": "Tondela",
                    "city": "Tondela",
                    "founded": 1933,
                    "details": "Clube Desportivo de Tondela is a Portuguese professional football club that plays in Primeira Liga, the top flight of Portuguese football. They are based in the town of Tondela, located in Viseu District, and play in the Estádio João Cardoso.",
                    "logo": "https://media.api-sports.io/football/teams/218.png"
                },
                {
                    "id": "91b233eH-d279-48ae-8Hcd-9374e524111f",
                    "name": "Belenenses",
                    "city": "Jamor, Oeiras",
                    "founded": 1919,
                    "details": "Clube de Futebol Os Belenenses, commonly known as Belenenses, is a Portuguese sports club best known for its football team. Founded in 1919, it is one of the oldest Portuguese sports clubs.",
                    "logo": "https://media.api-sports.io/football/teams/221.png"
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
