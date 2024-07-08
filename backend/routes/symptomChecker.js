const router = require('express').Router();

router.post('/', (req, res) => {
  const { symptoms } = req.body;
  
  // This is a very basic symptom checker. In a real application, you'd use a more sophisticated system or API.
  let result;
  if (symptoms.toLowerCase().includes('fever') || symptoms.toLowerCase().includes('cough')) {
    result = "You may have a common cold or flu. Rest, drink plenty of fluids, and monitor your symptoms. If they worsen, please consult a doctor.";
  } else if (symptoms.toLowerCase().includes('headache')) {
    result = "You may be experiencing a headache. Try resting in a quiet, dark room and stay hydrated. If the pain is severe or persistent, consult a doctor.";
  } else {
    result = "Based on the symptoms provided, we recommend consulting with a healthcare professional for a proper diagnosis.";
  }

  res.json({ result });
});

module.exports = router;