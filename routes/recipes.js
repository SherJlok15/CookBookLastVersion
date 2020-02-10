const router = require('express').Router();
const Recipe = require('../models/recipe.model');

router.route('/').get((req, res) => {
  Recipe.find()
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const title = req.body.title;
  const text = req.body.text;
  const update = req.body.update;
  const lastVersions = [];
  const comments = [];
  const favorite = 0;

  const newRecipe = new Recipe({
    username,
    title,
    text,
    update,
    lastVersions,
    comments,
    favorite
  });

  newRecipe.save()
    .then((recipe) => {
      res.json(recipe._id)
    }
    )
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => res.json(recipe))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then(() => res.json('Recipe deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => {
      recipe.lastVersions.push({
        username: recipe.username,
        title: recipe.title,
        text: recipe.text,
        edittime: req.body.edittime
      })
      recipe.update = req.body.update;
      recipe.username = req.body.username;
      recipe.title = req.body.title;
      recipe.text = req.body.text;

      recipe.save()
        .then(() => res.json('Recipe updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/favorite/:id').post((req, res) => {
  console.log('ok')
  Recipe.findById(req.params.id)
    .then(recipe => {
      recipe.favorite = recipe.favorite === 0 ? 1 : 0;
      recipe.save()
        .then(() => res.json('Recipe updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;
