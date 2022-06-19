console.log("Bill");
let AddBtn = document.getElementById('AddBtn');
let TotalAmnt = document.getElementById('TotalAmnt');


//  let Total = 0;
// CustName.value='';


    Total = 0;
showlist();
/********ADD ustomer Name to the localstorage**************** */
function Add(){
    console.log('Add');
    let CustName = document.getElementById('CustName');
    console.log('Customer Name ',CustName.value);
    localStorage.setItem("CustomerName",CustName.value);
}
function FindTotal(){
    Total = 0;
    if(typeof(localStorage.Price) != 'undefined'){
    for(i=0;i<JSON.parse(localStorage.Price).length;i++)
        Total+= JSON.parse(localStorage.Price)[i];
    }
    return Total;
}

/* *******************************FUNCTION TO ADD LIST TO LOCAL STORAGE****************************  */
AddBtn.addEventListener('click',function(){
    console.log("created");
    // let addTxt = document.getElementById('addTxt');
    let ItemName = document.getElementById('ItemName');
    let ItemQuantity = document.getElementById('Quantity');
    let Itemprice = document.getElementById('price');

    // let notes = localStorage.getItem("notes");
    let Name = localStorage.getItem("Name");
    let Quantity = localStorage.getItem("Quantity");
    let Price = localStorage.getItem("Price");
    if(Name == null && Quantity==null && Price==null){
        // notesObj = [];
        NameObj = [];
        QuantityObj = [];
        PriceObj = [];
    }
    else{
        // notesObj = JSON.parse(notes);
        NameObj = JSON.parse(Name);
        QuantityObj = JSON.parse(Quantity);
        PriceObj = JSON.parse(Price);
    }
    // notesObj.push(addTxt.value);
    NameObj.push(ItemName.value);
    QuantityObj.push(ItemQuantity.value);
    PriceObj.push(Itemprice.value * ItemQuantity.value);

    // localStorage.setItem("notes",JSON.stringify(notesObj));
    localStorage.setItem("Name",JSON.stringify(NameObj));
    localStorage.setItem("Quantity",JSON.stringify(QuantityObj));
    localStorage.setItem("Price",JSON.stringify(PriceObj));

    // addTxt.value = '';
    ItemName.value = '';
    ItemQuantity.value = '';
    Itemprice.value = '';

    // console.log(notesObj);
    console.log(NameObj);
    console.log(QuantityObj);
    console.log(PriceObj);

    // console.log(NameObj.length);
    console.log('t',Total);
    
        
        
    console.log(Total);
    showlist();
    
})
/* ********************************END OF INSERTING TO LOCAL STORAGE****************************************** */ 
//*****************function to show the list of items********************** 
function showlist(){
    console.log("list showing here");
    let Name = localStorage.getItem("Name");
    let Quantity = localStorage.getItem("Quantity");
    let Price = localStorage.getItem("Price");
    if(Name == null && Quantity==null && Price==null){
        // notesObj = [];
        NameObj = [];
        QuantityObj = [];
        PriceObj = [];
    }
    else{
        // notesObj = JSON.parse(notes);
        NameObj = JSON.parse(Name);
        QuantityObj = JSON.parse(Quantity);
        PriceObj = JSON.parse(Price);
    }
    let html ="";
    // Total = parseFloat(JSON.parse(TotalAmnt));
    for(i=0;i<NameObj.length;i++){
        p = PriceObj[i]*(1/QuantityObj[i]);
        console.log('Total...',Total)
        for(j=0;j<NameObj.lenght;j++){
            Total += parseFloat(PriceObj[i]);
        }
        console.log("Display ",Total,typeof(Total));
        html +=`
                  <tr class="tablerow">
                    <th scope="row">${i+1}</th>
                    <td scope="row" >${NameObj[i]}</td>
                    <td scope="row" >${QuantityObj[i]}X${p}</td>
                    <td scope="row" >${PriceObj[i]}</td>
                    <td >
                    <i class="fa fa-edit" style="font-size: 29px;
                    color: #2b05e1;
                    float: right;
                    cursor: pointer;"id="${i}" onclick="edit(this.id,NameObj[this.id],QuantityObj[this.id],PriceObj[this.id])"></i>
                    </td>
                    <td>
                    <i class="material-icons" style="font-size:29px;color:red;cursor: pointer;"id="${i}" onclick="deleteList(this.id)">delete</i>
                    </td>
                  </tr>
                `;
              
    }
    let total = FindTotal();
    TotalAmnt.innerHTML = `${Total}`;
    localStorage.setItem("TotalAmount",total.toString());
    let listElm = document.getElementById('list');
    console.log(listElm);
    listElm.innerHTML = html;
}
//******************************************END of Show list***********************************

//**************************Function to Delete list************************
function deleteList(index){
    // let notes = localStorage.getItem("notes");
    let Name = localStorage.getItem("Name");
    let Quantity = localStorage.getItem("Quantity");
    let Price = localStorage.getItem("Price");
    if(Name == null && Quantity==null && Price==null){
        // notesObj = [];
        NameObj = [];
        QuantityObj = [];
        PriceObj = [];
    }
    else{
        // notesObj = JSON.parse(notes);
        NameObj = JSON.parse(Name);
        QuantityObj = JSON.parse(Quantity);
        PriceObj = JSON.parse(Price);
    }
    // notesObj.splice(index,1);
    NameObj.splice(index,1);
    QuantityObj.splice(index,1);
    let presentAmnt = PriceObj[index];//storing the amount in temporary memory
    PriceObj.splice(index,1);

    // localStorage.setItem("notes",JSON.stringify(notesObj));
    localStorage.setItem("Name",JSON.stringify(NameObj));
    localStorage.setItem("Quantity",JSON.stringify(QuantityObj));
    localStorage.setItem("Price",JSON.stringify(PriceObj));

    console.log("Deleted");
    console.log(NameObj.length);
    Total -= parseFloat(presentAmnt);
    console.log("Deletion ",Total,typeof(Total));
    showlist();
    
}
/* ***************************************END OF DELETION***************************** */

function edit(index,Name,Quantity,Price){
    console.log("edit",index,Name,Quantity,Price);
    document.getElementById('ItemName').value = Name;
    document.getElementById('Quantity').value = Quantity;
    document.getElementById('price').value = Price;    
    deleteList(index);

}




/**********Search and drop down menu ************** */
function showDropdown(){
    let ItemName = localStorage.getItem("ItemName");
    let ItemPrice = localStorage.getItem("ItemPrice");
    // let ItemPrice = localStorage.getItem('ItemPrice');
    if(ItemName == null ){
        NameObj = [];
        PriceObj = [];
    }
    else{
        NameObj = JSON.parse(ItemName);
        PriceObj = JSON.parse(ItemPrice);
    }
    let html ="";

    for(i=0;i<NameObj.length;i++){
        html +=`
            <ul style="display:none;list-style-type:none" class="Itemlist">
                <li id='${i}'onclick="printToScreen(NameObj[this.id],PriceObj[this.id])" style="cursor:pointer">${NameObj[i]}</li>
                </ul>
        `;  
    }
    let items = document.getElementById('dropdown');
    console.log('items',items);
    // console.log(html);
    items.innerHTML = html;
}
showDropdown();
let searchVal = document.getElementById('ItemName');
searchVal.addEventListener('input',function(){
    let inputval = searchVal.value.toUpperCase();
    let listItem = document.getElementsByClassName('Itemlist');
    Array.from(listItem).forEach(function(element){
        let Itemtxt = element.getElementsByTagName('li')[0].innerText.toUpperCase();
        // console.log(Itemtxt);
        if(Itemtxt.includes(inputval)){
            // showDropdown();
            console.log('matched');
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
            console.log('not matched');
        }
        // element.style.display = 'none';
    })
    
})
function printToScreen(Name,price){
    // console.log(typeof(Name),Name);
    console.log('selected',Name,price);
    let ItemName = document.getElementById('ItemName');
    let ItemPrice = document.getElementById('price');
    if(typeof(Name) != 'undefined' && typeof(price) != 'undefined'){
        ItemName.value = Name;
        ItemPrice.value = price;
    }
    showDropdown();

}




//onkeyup=search()
