console.log("Add Item");
showlist();
let AddBtn = document.getElementById('AddBtn');

AddBtn.addEventListener('click',function(){
    console.log('Clicked + Button');
    let Name = document.getElementById('ItemName');
    let Price = document.getElementById('ItemPrice');

    let ItemName = localStorage.getItem("ItemName");
    let ItemPrice = localStorage.getItem("ItemPrice");
    if(ItemName == null && ItemPrice == null){
        NameObj = [];
        PriceObj = [];
    }
    else{
        NameObj = JSON.parse(ItemName);
        PriceObj = JSON.parse(ItemPrice);
    }
    NameObj.push(Name.value);
    PriceObj.push(Price.value);

    localStorage.setItem("ItemName",JSON.stringify(NameObj));
    localStorage.setItem("ItemPrice",JSON.stringify(PriceObj));

    Name.value = '';
    Price.value = '';

    showlist();

})

function showlist(){
    console.log("Item list showing here");
    let ItemName = localStorage.getItem("ItemName");
    let ItemPrice = localStorage.getItem("ItemPrice");
    if(ItemName == null && ItemPrice == null){
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
        <tr class='tableList'>
                <th scope="row">${i+1}</th>
                <td scope="row" id='name'>${NameObj[i]}</td>
                <td scope="row" id='name'>${PriceObj[i]}</td>
                <td>
                    <i class="fa fa-edit" style="font-size: 29px;
                    color: #2b05e1;
                    float: right;
                    cursor: pointer;"id="${i}" onclick="edit(this.id,NameObj[this.id],PriceObj[this.id])"></i>
                </td>
                <td>
                    <i class="material-icons" style="font-size:29px;color:red;cursor: pointer;"id="${i}" onclick="deleteList(this.id)">delete</i>
                </td>

        </tr>
        `;  
    }
    let items = document.getElementById('lists');
    console.log('items',items);
    // console.log(html);
    items.innerHTML = html;
}

function deleteList(index){
    // let notes = localStorage.getItem("notes");
    let ItemName = localStorage.getItem("ItemName");
    let ItemPrice = localStorage.getItem("ItemPrice");
    if(ItemName == null && ItemPrice == null){
        NameObj = [];
        PriceObj = [];
    }
    else{
        NameObj = JSON.parse(ItemName);
        PriceObj = JSON.parse(ItemPrice);
    }
    // notesObj.splice(index,1);
    NameObj.splice(index,1);
    PriceObj.splice(index,1);

    // localStorage.setItem("notes",JSON.stringify(notesObj));
    localStorage.setItem("ItemName",JSON.stringify(NameObj));
    localStorage.setItem("ItemPrice",JSON.stringify(PriceObj));
    showlist();
    
}

function edit(index,Name,Price){
    // console.log("edit",index,Name);
    document.getElementById('ItemName').value = Name;  
    document.getElementById('ItemPrice').value = Price;  
    deleteList(index);

}