const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1.js');

const chaveDaAPI = '';
const urlDaAPI = 'https://gateway.watsonplatform.net/natural-language-understanding/api';
const versaoDaAPI = '2019-07-12';
const urlDaPagina = 'https://www.universetoday.com/category/black-holes/';
const limiteDeCategorias = 3;
const descreverCategorias = true;

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: versaoDaAPI,
  iam_apikey: chaveDaAPI,
  url: urlDaAPI
});

const analyzeParams = {
  'url': urlDaPagina,
  'features': {
    'categories': {
      'limit': limiteDeCategorias,
      'explanation': descreverCategorias
    }
  }
};

naturalLanguageUnderstanding.analyze(analyzeParams)
  .then(analysisResults => {
    console.log(JSON.stringify(analysisResults, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });
