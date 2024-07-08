const router = require('express').Router();
const Provider = require('../models/provider.model');

// Get all providers
router.route('/').get((req, res) => {
  Provider.find()
    .then(providers => {
      console.log('Fetched providers:', providers);  // Detailed log
      res.json(providers);
    })
    .catch(err => {
      console.error('Error fetching providers:', err);  // Detailed error log
      res.status(400).json('Error: ' + err);
    });
});

// Add a new provider
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
