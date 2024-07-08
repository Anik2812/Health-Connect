const router = require('express').Router();

const symptomAdvice = {
  'Fever': "Rest, stay hydrated, and take over-the-counter fever reducers. If fever persists or is high, consult a doctor.",
  'Cough': "Stay hydrated, use cough drops, and consider over-the-counter cough suppressants. If cough persists or is severe, consult a doctor.",
  'Fatigue': "Get plenty of rest, maintain a balanced diet, and stay hydrated. If fatigue persists, consult a doctor.",
  'Shortness of breath': "This can be serious. If severe or sudden, seek immediate medical attention. Otherwise, consult a doctor soon.",
  'Headache': "Rest in a quiet, dark room, stay hydrated, and consider over-the-counter pain relievers. If severe or persistent, consult a doctor.",
  'Body aches': "Rest, apply heat or cold packs, and consider over-the-counter pain relievers. If severe or persistent, consult a doctor.",
  'Sore throat': "Gargle with warm salt water, drink warm liquids, and use throat lozenges. If severe or persistent, consult a doctor.",
  'Nausea': "Eat bland foods, stay hydrated, and avoid strong odors. If severe or persistent, consult a doctor.",
  'Diarrhea': "Stay hydrated, eat bland foods, and consider over-the-counter anti-diarrheal medication. If severe or persistent, consult a doctor.",
  'Loss of taste or smell': "This can be associated with COVID-19. Self-isolate and consult a doctor for testing and further advice."
};

router.post('/', (req, res) => {
  const { symptoms } = req.body;
  
  let advice = [];
  symptoms.forEach(symptom => {
    if (symptomAdvice[symptom]) {
      advice.push(`${symptom}: ${symptomAdvice[symptom]}`);
    }
  });
  
  if (advice.length === 0) {
    advice.push("Based on the symptoms provided, we recommend consulting with a healthcare professional for a proper diagnosis.");
  }
  
  res.json({ result: advice.join("\n\n") });
});

module.exports = router;