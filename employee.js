var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];

var n = 1;
var x = 0;

function AddRow() {
  var AddRow = document.getElementById('show');
  var NewRow = AddRow.insertRow(n);

  list1[x] = document.getElementById('ename').value;
  list2[x] = document.getElementById('age').value;
  list3[x] = document.getElementById('salary').value;
  list4[x] = document.getElementById('enumber').value;
  list5[x] = document.getElementById('department').value;

  var cel1 = NewRow.insertcell(0);
  var cel2 = NewRow.insertcell(1);
  var cel3 = NewRow.insertcell(2);
  var cel4 = NewRow.insertcell(3);
  var cel5 = NewRow.insertcell(4);

  cel1.innerHTML = list1[x];
  cel2.innerHTML = list2[x];
  cel3.innerHTML = list3[x];
  cel4.innerHTML = list4[x];
  cel5.innerHTML = list5[x];

  n++;
  x++;
}
