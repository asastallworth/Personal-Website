function billMe() {
  var a = parseInt(document.querySelector('#orginBill').value);
  var b = parseInt(document.querySelector('#people').value);
  var service = document.querySelector('#service').value;
  var total;

  if (service == 'Exclent') {
    total = (a / b) * 0.25 + a;
  } else if (service == 'Good') {
    total = (a / b) * 0.2 + a;
  } else if (service == 'Okay') {
    total = (a / b) * 0.15 + a;
  } else if (service == 'Bad') {
    total = (a / b) * 0.1 + a;
  } else if (service == 'Awful') {
    total = a / b;
  }

  document.querySelector('#result').innerHTML = total;
}
