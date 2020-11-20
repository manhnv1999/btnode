let xhtml = ``;
showItemLevel=(level)=>{
    let classLevel = (level=='medium') ? "success":"danger";
    return `<span class="label label-`+classLevel+`  ">` +level+ `<\span>` ;
}
funcShowItems =(items,elemAreaListTask)=>{
    xhtml = ``;
    let search = elemInputSearch.val();
   //if(search.length > 0 ){ search = new RegExp(search);}
    if(items.length > 0){
        let dem = 0;
        items.forEach(item => {
            var regexp = new RegExp("(" + search + ")", "gi");
            dem++;
            xhtml +=`<tr>
            <td class="text-center">`+dem+`</td>
            <td class="text-center">`
            +item.name.replace(regexp,`<span class="hight-light">$1</span>`)+
            `</td>
            <td  class="text-center">`+showItemLevel(item.level)+`</td>
            <td>
                <button onclick ="eventEditTask('`+item.id+`')" type="button" class="btn btn-warning">Edit</button>
                <button onclick ="eventDeleteTask('`+item.id+`')" type="button" class="btn btn-danger">Delete</button>
            </td>
            `
        });
    }
    elemAreaListTask.html(xhtml);
}
toggleElement=(ele,type)=>{
    if(type == "show"){
        ele.style.class("show");
    }else{
        ele.style.class("hide");
    }
}
funcResetForm=()=>{
    elemInputName.val('');
    elemInputID.val('');
    elemInputSearch.val('');
}
viewEditTask=()=>{
    
}
