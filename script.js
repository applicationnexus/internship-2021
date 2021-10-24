var country = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'China',
    'Colombia',
    'Finland',
'France',
'India',
'Indonesia',
'Iran',
'Iraq',
'Ireland'
];
function autocomplete(input) {
  if (input == '') {
    return [];
  }
  var con = new RegExp(input);
  return country.filter(function (term) {
    if (term.match(con)) {
      return term;
    }
  });
}
function result(res1) {
  res = document.getElementById('result');
  res.innerHTML = '';
  let list = '';
  let terms = autocomplete(res1);
  for (i = 0; i < terms.length; i++) {
    list = list + '<li>' + terms[i] + '</li>';
  }
  res.innerHTML = '<ul>' + list + '</ul>';
}
