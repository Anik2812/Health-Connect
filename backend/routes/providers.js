const router = require('express').Router();
let Provider = require('../models/provider.model');

router.route('/').get((req, res) => {
  Provider.find()
    .then(providers => res.json(providers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const { name, specialty, address, phone } = req.body;

  const newProvider = new Provider({
    name,
    specialty,
    address,
    phone
  });

  newProvider.save()
    .then(() => res.json('Provider added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
