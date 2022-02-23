const express = require('express')
const nunjucks = require('nunjucks')
const recipes = require('./data')

const server = express()

const recipesIndex = recipes.filter(function(recipe, index) {
  if (index < 6) return recipe 
})

server.set('view engine', 'njk')
server.use(express.static('public'))

nunjucks.configure('views', {
  express:server
})

server.listen(5000, function() {
  console.log('Server is running!')
})

server.get('/', function(req, res) {
  return res.render('index', {recipes: recipesIndex})
})

server.get('/about', function(req, res) {
  return res.render('about')
})

server.get('/recipes', function(req, res) {
  return res.render('recipes', {recipes: recipes})
})
