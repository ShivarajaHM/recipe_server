const express = require('express')
var recipe = require('../models/recipemodel')

const router = express.Router()

router.post('/', (req, res, next) => {
    console.log('Dhatri........',req.body);
    const newRecipe = new recipe({
        "RecipeId": req.body.RecipeId,
        "RecipeName": req.body.RecipeName,
        "Description": req.body.Description,
        "Calories": req.body.Calories,
        "Recipecreateddate": req.body.Recipecreateddate,
        "IngredientNames": req.body.IngredientNames
    })

    newRecipe.save((err,result)=>{
        if(err){
            console.log('errorrr..........',err);
            return res.send({message: err})
        }else{
            console.log('Success.........');
            return res.status(200).send({response: result})
        }
    })
    
  })

router.get('/', (req, res, next) => {
    
    recipe.find({},(err,result)=>{
        if(err){
            console.log('errorrr..........',err);
            return res.send({message: err})
        }else{
            console.log('Success.........');
            return res.status(200).send({response: result})
        }
    })
    
  })

router.put('/', (req, res, next) => {
    
    recipe.updateOne({RecipeId: req.body.RecipeId},{$set: {Description: req.body.Description, Calories: req.body.Calories }},(err,result)=>{
        if(err){
            console.log('errorrr..........',err);
            return res.send({message: err})
        }else{
            console.log('Success.........');
            return res.status(200).send({response: result})
        }
    })
    
  })

router.delete('/', (req, res, next) => {
    
    recipe.deleteOne({RecipeId: req.body.RecipeId}, (err,result)=>{
        if(err){
            console.log('errorrr..........',err);
            return res.send({message: err})
        }else{
            console.log('Success.........');
            return res.status(200).send({response: result})
        }
    })
   
  })
  
//   router.use('/', (req, res) => {
//     res.render('todo', { title: 'To-do list', todo })
//   })
  
  module.exports = router;