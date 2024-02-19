// index.js

// 1) takes in an argument of a name and returns a phrase with that name using string interpolation
function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  
  // 2) takes in two arguments, a name and a language, and returns a phrase using those arguments
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // 3) takes in two arguments, a name and a language, and language defaults to JavaScript
  function introductionWithLanguageOptional(name, language = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // 4) takes in two arguments, a name and a language, and the default value can be overridden with an argument
  function introductionWithLanguageOptionalOverride(name, language = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  module.exports = {
    introduction,
    introductionWithLanguage,
    introductionWithLanguageOptional,
    introductionWithLanguageOptionalOverride
  };
  