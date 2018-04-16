module.exports = function(html){
  var lowercaseHTML = html.split('').reverse().join('');
  console.log(lowercaseHTML);
};