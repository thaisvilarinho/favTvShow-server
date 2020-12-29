const express = require ('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('../models');
const fetch = require('node-fetch');


const app = express ();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
let user = models.User;
let favorite = models.Favorite;
 


let port = process.env.PORT || 3000;
app.listen(port, (req, res)=>{
    console.log('Servidor rodando');
});

app.post('/login',async (req, res)=>{
    let response = await user.findOne({
        where:{
            email: req.body.email,
            password: req.body.password
        }
    })
    if( response === null){
        res.send(JSON.stringify('error'));
    }
    res.send(response);
});

app.post('/createAccount',async (req, res)=>{

    const createNewUser = await user.findOrCreate({
        email: req.body.email,
        password: req.body.email,
        createdAt: new Date(),
        updatedAt: new Date(),
    });
    console.log(createNewUser)

    res.send('Account successfully created!');
});

app.post('/addFavoriteShow', async(req, res)=>{   

    const showId = req.body.showId;
    const userId = req.body.userId;

    const userLogged = await user.findByPk(userId);

    if (!userLogged){
        return res.status(400).json({ error: 'User not found'})
    }

    let [ favoriteId ] = await favorite.findOrCreate({
        where: { idShow : showId}
    });
    await userLogged.addFavorite(favoriteId);

    return res.json(favoriteId)


});

app.post('/getIsFavorite', async(req, res)=>{   

    const userId = req.body.userId;

    const userLogged = await user.findByPk(userId,{
        include: { association: 'favorite'}
    });
    return res.json(userLogged.favorite)
});


app.post('/deleteFavoriteShow', async(req, res)=>{   

    const showId = req.body.showId;
    const userId = req.body.userId;

    const userLogged = await user.findByPk(userId);

    if (!userLogged){
        return res.status(400).json({ error: 'User not found'})
    }

    const favoritedShow = await favorite.findOne({
        where: { idShow : showId}
    });

    await favoritedShow.destroy();
});

app.post('/getFavoriteShow', async(req, res)=>{   

    const showId = req.body.showId;
    fetch(`http://api.tvmaze.com/shows/${showId}`)
    .then( (response) => response.json())
    .then( (jsonData) => res.send(jsonData))
    .catch( (error) => res.send(JSON.stringify('error')));    
})

app.get('/getShows', async(req, res)=>{   
    fetch(`http://api.tvmaze.com/shows`)
    .then( (response) => response.json())
    .then( (jsonData) => res.send(jsonData))
    .catch( (error) => res.send(JSON.stringify('error')));    
});

app.post('/searchShows', async(req, res)=>{   
    const show = req.body.show;
    fetch(`http://api.tvmaze.com/search/shows?q=${show}`)
    .then( (response) => response.json())
    .then( (jsonData) => res.send(jsonData))
    .catch( (error) => res.send(JSON.stringify('error')));    
})
