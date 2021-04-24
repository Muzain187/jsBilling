let CName = localStorage.getItem("CmpName");
let CAddr = localStorage.getItem("CmpAddr");
console.log("cmp addr",CAddr);
let CEmail = localStorage.getItem("CmpEmail");
let CPhno = localStorage.getItem("CmpPhno");

let CmpName = document.getElementById('CmpName');
let CmpAddr = document.getElementById('CmpAddress');
let CmpContact = document.getElementById('CmpContact');

let CustName = document.getElementById('CustName');
let TotalAmnt = document.getElementById('TotalAmnt');

console.log("hiii from final Bill");

let Name = localStorage.getItem('Name');
let Quantity = localStorage.getItem('Quantity');
let Price = localStorage.getItem('Price');
console.log(typeof(Name));

NameObj = JSON.parse(Name);
QuantityObj = JSON.parse(Quantity);
PriceObj = JSON.parse(Price);

console.log(typeof(NameObj));
// console.log(NameObj[0]);

/* ***************Display Company Name Address And Contact *********************** */

CmpName.innerHTML = CName;
CmpAddr.innerHTML = `<i class="fa fa-map-marker"></i> `+CAddr;
CmpContact.innerHTML = `<i class="fa fa-phone"></i>
`+CPhno+`<br>`+`<i class="fa fa-envelope"></i>
`+CEmail;

/* ***************End Of Display********************************* */

/* ******************display the items*************************** */
let html = "";
for(i=0;i<NameObj.length;i++){
    p = PriceObj[i]*(1/QuantityObj[i]);
    html +=`
    <tr>
      <th scope="row" style="width:15em">${i+1}</th>
      <td scope="row" style="width:20em">${NameObj[i]}</td>
      <td scope="row" style="width:20em">${QuantityObj[i]}X${p}</td>
      <td scope="row" style="width:20em">${PriceObj[i]}</td>
    </tr>   
  `;
}
let listElm = document.getElementById('list');
console.log(listElm);
listElm.innerHTML = html;
/* **************End of Display******************************* */

/* ******************Customer Name and Total Amount**** */

let CustomerName = localStorage.getItem('CustomerName');
console.log('Customer name',CustomerName);
CustName.innerHTML = `To:<i class="fa fa-user"></i> ${CustomerName}`;

let TotalAmount = localStorage.getItem('TotalAmount');
TotalAmnt.innerHTML = ` <strong>${TotalAmount}</strong>`;
console.log('Total Amount',TotalAmount);
/* *****End*** */

/* *****Convert Html to pdf *********************** */
function Download(){
  let html = document.getElementById('head');
  html2pdf()
  .from(html)
  .save();
}