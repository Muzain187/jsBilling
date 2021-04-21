console.log("Bill");
let AddBtn = document.getElementById('AddBtn');
let TotalAmnt = document.getElementById('TotalAmnt');


// CustName.value='';

let Total = 0;
showlist();
/********ADD ustomer Name to the localstorage**************** */
function Add(){
    console.log('Add');
    let CustName = document.getElementById('CustName');
    console.log('Customer Name ',CustName.value);
    localStorage.setItem("CustomerName",CustName.value);
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
    Total += parseFloat(PriceObj[i]);
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
    for(i=0;i<NameObj.length;i++){
        p = PriceObj[i]*(1/QuantityObj[i]);
        // Total += Number(PriceObj[i]);
        console.log("Display ",Total,typeof(Total));
        html +=`
                  <tr>
                    <th scope="row">${i+1}</th>
                    <td scope="row" >${NameObj[i]}</td>
                    <td scope="row" >${QuantityObj[i]}X${p}</td>
                    <td scope="row" >${PriceObj[i]}</td>
                    <td >
                    <input type="image" src="deleteimage.png" name="delete" width="50" height="50" alt="delete" id="${i}" style="float:right;margin-right: 6em;"onclick="deleteList(this.id)"></td> 
                  </tr>
                  
                `;
        TotalAmnt.innerHTML = `${Total}`;
    }
    let total = parseFloat(Total);
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
