const mongoose = require('mongoose')

var mongoSchema = mongoose.Schema;

var recipeSchema = new mongoSchema({
    "RecipeId": { type: String},
    "RecipeName": { type: String},
    "Description": {type: String},
    "Calories": { type: String},
    "Recipecreateddate": {type: Date},
    "IngredientNames": {type: String}
})

module.exports = mongoose.model("recipe", recipeSchema);