![](https://komarev.com/ghpvc/?username=football-api-microverse&label=API+Views&color=red) ![](https://img.shields.io/badge/Microverse-blueviolet)

# Football Api Microverse

> a simple api to get data of the biggest football leagues , made for microverse students so they cann implement them in their projects

## Built With

- Express
- NodeJs
- MongoDB (Mongoose)
- JavaScript


## Base URL

[https://football-apis.herokuapp.com/api/v1](https://football-apis.herokuapp.com/api/v1)

### Endpoints


### `/leagues`
example : [https://football-apis.herokuapp.com/api/v1/leagues](https://football-apis.herokuapp.com/api/v1/leagues)


Allowed actions:

- **Get** 

Parameters:

- No parameters required

Response:

```
"status": 200,
"msg": "Success",
"leagues": [...]
```

## example with axios

```
 await axios.get('https://football-apis.herokuapp.com/api/v1/leagues')
    .then((response) => {
      leagues = response.data.leagues;
      console.log(leagues); // the response wich contain all the leagues
    });
```

## example with live project 
<p align="center">
  <img src="https://user-images.githubusercontent.com/89282221/176243654-fe0a2eae-ea75-479d-adfa-50858730f492.png" alt="example"/><br>
  <small>App Created by <a href="https://github.com/ha-manel/Football-Leagues">ha-manel</a> using this api </small>
</p>


