const cardIcon = {
  amex: 'fab fa-cc-amex',
  mastercard: 'fab fa-cc-mastercard',
  visa: 'fab fa-cc-visa',
  unknown: 'fas fa-credit-card'
};

const category = {
  0: "ISO/TC 68 and other industry assignments",
  1: "Airlines",
  2: "Airlines, financial and other future industry assignments",
  3: "Travel and entertainment",
  4: "Banking and financial",
  5: "Banking and financial",
  6: "Merchandising and banking/financial",
  7: "Petroleum and other future industry assignments",
  8: "Healthcare, telecommunications and other future industry assignments",
  9: "For assignment by national standards bodies"
};

// add listener to form and prevent the default behavior
document.querySelector('#cc-form').addEventListener('submit', event => {
  event.preventDefault();

  const ccinput = document.querySelector('#cc-input');
  const ccicon = document.querySelector('#cc-icon');
  const ccissuer = document.querySelector('#cc-issuer');
  const cccategory = document.querySelector('#cc-category');
  const error = document.querySelector('#error');

  let valid = /^[0-9]{12,}$/.test(ccinput.value) && luhnCheck(ccinput.value);
  if (valid) {
    // reset error
    error.innerHTML = '';
    // display info
    let type = issuerCheck(ccinput.value);
    ccissuer.innerHTML = type;
    cccategory.innerHTML = category[ccinput.value.charAt(0)];
    ccicon.className = `${cardIcon[type]} fa-3x`;
  } else {
    // reset other items
    ccissuer.innerHTML = '';
    ccicon.className = '';
    cccategory = '';
    // display error
    error.innerHTML = 'not valid';
  }
  // reset input field
  ccinput.value = '';
  console.log('Made with love <3');
});

// checks cc# validity using the luhn algorithm.
// assumes the number string is non-empty and contains numbers only
// returns boolean
function luhnCheck(numberString) {
  let sum = 0;
  // store size since we need it every iteration
  const size = numberString.length;
  // going through backwards so there is no need to reverse order
  for (let i = 0; i < size; i++) {
    let number = parseInt(numberString.charAt(size - i - 1));
    // every other number gets adjusted
    if (i % 2 === 1) {
      number = (number * 2 < 10) ? number * 2 : number * 2 - 9;
    }
    sum += number;
  }
  // only valid if sum is a multiple of 10
  return (sum % 10 === 0);
}

// checks cc# to see if the issuer can be identified
// assumes the number string is non-empty and contains numbers only
// returns string of issuer name
function issuerCheck(numberString) {
  if (/^3(4|7)[0-9]{13}$/.test(numberString)) {
    return 'amex';
  }
  if (/^5[1-5]{1}[0-9]{14}$/.test(numberString)) {
    return 'mastercard';
  }
  if (/^4[0-9]{15}$/.test(numberString)) {
    return 'visa';
  }
  return 'unknown';
}
