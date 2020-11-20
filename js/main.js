let item_list = listItem();
funcShowItems(item_list,elemAreaListTask);
// fucsear{
//     listItem();
// }
funcaddTask=(taskobj)=>{
    localStorage.setItem('listTask', JSON.stringify(taskobj) );
    var items = loadStorage();
    funcShowItems(items,elemAreaListTask);
    funcResetForm();
}
eventEditTask=(id)=>{
    let result =  getIdTask(id);
    console.log(result);
    //hien thi len giao dien
    $("#input-id").val(result[0].id);
    $("#input-name").val(result[0].name);
    $("#input-level :selected").text(result[0].level);
  
    //Luu localstorage
}
//-------Search-------------------//
$(document).ready(function(){
    elemBtnSearch.click(()=>{
        elemBtnClear.removeClass("d-hide");
        searchItem(elemInputSearch.val());
    });
    elemDropSort.click(()=>{
        var value_sort = ($(this).text());
        
        elemLabelSort.html(value_sort);
        //0 giam dan
        if(value_sort == 'Level ASC'){
            sortTask("level",1);
        }else if(value_sort == 'Level DESC'){
            sortTask("level",0);
        }else if(value_sort == 'Name ASC'){
            sortTask("name",1);
        }else{ //mac dinh
            sortTask("name",0);
        }
    });
    elemBtnClear.click(()=>{
        funcResetForm();
        elemBtnClear.addClass("d-hide");
    });
    sortTask("name",0);
});
