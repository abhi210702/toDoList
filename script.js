let arr = ["primary","secondary","success","info","warning","info","danger","dark"];

let ulList=$('#ulList');
let addbtn=$('#addbtn');
let delbtn=$('#delbtn');
let new_task=$('#new-task');
let resetbtn=$('#resetbtn');
let sortbtn=$('#sortbtn');

delbtn.click(()=>{
    new_task.val("");
    toggleInputButton(false);
})

function addItem()
{
    let x = Math.floor(Math.random()*8);
    console.log(x);
    let newid = "list-group-item list-group-item-"+ arr[x];

    let listItem=$('<li>',{
        'class':newid,
        text:new_task.val()
    })

    listItem.click(()=>{
        listItem.toggleClass('done');
    })
    ulList.append(listItem);
    new_task.val("");
    toggleInputButton();
    
}

function toggleInputButton(){
    addbtn.prop('disabled',new_task.val()=='');
    delbtn.prop('disabled',new_task.val()=='');
    sortbtn.prop('disabled',ulList.children().length<1);
    resetbtn.prop('disabled',ulList.children().length<1);
}

function sortDoneTasks(){
    ($('#ulList .done')).appendTo(ulList);
}

function clearDone(){
    ($('#ulList .done')).remove();
    toggleInputButton();
}

addbtn.click(addItem);
new_task.keypress((e)=>{
    if(e.which==13 && new_task.val()!=''){
        addItem();
    }
})

new_task.on('input',()=>{
    toggleInputButton(new_task.val()!='');
})

resetbtn.click(clearDone);
sortbtn.click(sortDoneTasks);








