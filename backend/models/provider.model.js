const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const providerSchema = new Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },  // Ensure this field is required
  address: { type: String, required: true },
  phone: { type: String, required: true },
}, {
  collection: 'healthconnect',  // Explicitly reference the collection name
  timestamps: true,
});

const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;
