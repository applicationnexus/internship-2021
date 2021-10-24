function myFunction() {
  var w1 = document.getElementById('weights1').value;
  var w2 = document.getElementById('weights2').value;
  var value1 = document.getElementById('txtname').value;
  var output = document.getElementById('answer');
  var ans;
  switch (w1) {
    case 'Miligram':
      if (w1 === 'Miligram' && w2 === 'Miligram') {
        output.innerHTML = 'Converted Value (' + w2 + ') : ' + value1;
      } else if (w1 === 'Miligram' && w2 === 'Gram') {
        ans = Number(value1) / 1000;
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      } else if (w1 === 'Miligram' && w2 === 'Kilogram') {
        ans = Number(value1) / 1000000;
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      } else if (w1 === 'Miligram' && w2 === 'Tonne') {
        ans = Number(value1) / 907184740;
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      } else if (w1 === 'Miligram' && w2 === 'Pounds') {
        ans = Number(value1) / 453592.37;
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      } else if (w1 === 'Miligram' && w2 === 'Ounces') {
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      }
      break;
    case 'Gram':
      if (w1 === 'Gram' && w2 === 'Miligram') {
        ans = Number(value1) * 1000;
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      } else if (w1 === 'Gram' && w2 === 'Gram') {
        output.innerHTML = 'Converted Value (' + w2 + ') : ' + value1;
      } else if (w1 === 'Gram' && w2 === 'Kilogram') {
        ans = Number(value1) / 1000;
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      } else if (w1 === 'Gram' && w2 === 'Tonne') {
        ans = Number(value1) / 1000000;
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      } else if (w1 === 'Gram' && w2 === 'Pounds') {
        ans = Number(value1) * 0.0022046;
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      } else if (w1 === 'Gram' && w2 === 'Ounces') {
        ans = Number(value1) * 0.035274;
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      }
      break;
    case 'Kilogram':
      if (w1 === 'Kilogram' && w2 === 'Miligram') {
        ans = Number(value1) * 1000000;
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      } else if (w1 === 'Kilogram' && w2 === 'Gram') {
        ans = Number(value1) * 1000;
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      } else if (w1 === 'Kilogram' && w2 === 'Kilogram') {
        output.innerHTML = 'Converted Value (' + w2 + ') : ' + value1;
      } else if (w1 === 'Kilogram' && w2 === 'Tonne') {
        ans = Number(value1) / 907;
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      } else if (w1 === 'Kilogram' && w2 === 'Pounds') {
        ans = Number(value1) * 2.2046;
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      } else if (w1 === 'Kilogram' && w2 === 'Ounces') {
        ans = Number(value1) * 35.2774;
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      }
      break;
    case 'Tonne':
      if (w1 === 'Tonne' && w2 === 'Miligram') {
        ans = Number(value1) * 1000000000;
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      } else if (w1 === 'Tonne' && w2 === 'Gram') {
        ans = Number(value1) / 0.000001;
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      } else if (w1 === 'Tonne' && w2 === 'Kilogram') {
        ans = Number(value1) * 1000;
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      } else if (w1 === 'Tonne' && w2 === 'Tonne') {
        output.innerHTML = 'Converted Value (' + w2 + ') : ' + value1;
      } else if (w1 === 'Tonne' && w2 === 'Pounds') {
        ans = Number(value1) * 2204.6226;
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      } else if (w1 === 'Tonne' && w2 === 'Ounces') {
        ans = Number(value1) * 35274;
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      }
      break;
    case 'Pounds':
      if (w1 === 'Pounds' && w2 === 'Miligram') {
        ans = Number(value1) * 453592;
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      } else if (w1 === 'Pounds' && w2 === 'Gram') {
        ans = Number(value1) * 454;
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      } else if (w1 === 'Pounds' && w2 === 'Kilogram') {
        ans = Number(value1) / 2.205;
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      } else if (w1 === 'Pounds' && w2 === 'Tonne') {
        ans = Number(value1) / 2205;
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      } else if (w1 === 'Pounds' && w2 === 'Pounds') {
        output.innerHTML = 'Converted Value (' + w2 + ') : ' + value1;
      } else if (w1 === 'Pounds' && w2 === 'Ounces') {
        ans = Number(value1) * 16;
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      }
      break;
    case 'Ounces':
      if (w1 === 'Ounces' && w2 === 'Miligram') {
        ans = Number(value1) * 28350;
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      } else if (w1 === 'Ounces' && w2 === 'Gram') {
        ans = Number(value1) * 28.35;
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      } else if (w1 === 'Ounces' && w2 === 'Kilogram') {
        ans = Number(value1) / 35.274;
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      } else if (w1 === 'Ounces' && w2 === 'Tonne') {
        ans = Number(value1) / 35274;
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      } else if (w1 === 'Ounces' && w2 === 'Pounds') {
        ans = Number(value1) / 16;
        if (isFloat(ans)) {
          let n = ans.toFixed(5);
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + n;
        } else {
          output.innerHTML = 'Converted Value (' + w2 + ') : ' + ans;
        }
      } else if (w1 === 'Ounces' && w2 === 'Ounces') {
        output.innerHTML = 'Converted Value (' + w2 + ') : ' + value1;
      }

      break;
  }
}

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}
