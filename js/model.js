let items =[{id:'0',name:'a',level:'medium'},{id:'1',name:'b',level:'hight'}];
loadStorage=()=>{
    if(localStorage.getItem('listTask') ){
        items = JSON.parse(localStorage.getItem('listTask') );
    }
    return items;
    
}

saveStorage=(items)=>{
    localStorage.setItem('listTask', JSON.stringify(items) );
}
listItem=(params = null)=>{
    var listItem =  loadStorage();
    return listItem;
}
getItem=(id)=>{

}

apdateItem=(item)=>{
    
}
deleteItem=(id)=>{
    let items = listItem();
    items = items.filter(item=>{return item.id !== id});
    saveStorage=(items);
    return items;
}

guidGenerator=()=>{
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}
addItem = (item)=>{
    items.push(item);
    saveStorage(items);
}   
editItem=(id)=>{
    let items = loadStorage();
    for (const key in items) {
        if ( items[key].id === id ) {
            items[key].name = elemInputName.val();
            items[key].level = elemInputLevel.find(":selected").text();
        }
    }
    saveStorage(items);
}
//var item = {id:guidGenerator(),name:'c',level:'hight'};
//let task = addItem(item);
getIdTask=(id)=>{
    let objcookie= JSON.parse(localStorage.getItem('listTask') );
    objcookie = objcookie.filter(item => item.id == id); 
    return objcookie;
}
deleteItem=(id)=>{
    console.log(id);
    objcookie= JSON.parse(localStorage.getItem('listTask') );
    const new_cookie = objcookie.filter(item => item.id !== id);
    localStorage.setItem("listTask", null, { path: '/' });
    localStorage.setItem('listTask', JSON.stringify(new_cookie) ); 
}
//------------------------
submitForm = (name,level,id)=>{
    if(id){
        editItem(id);
    }else{
        let taskobj = new task(guidGenerator(),name,level);
        addItem(taskobj);
    }
    //M
    let items = listItem();
    //V
    funcResetForm();
    funcShowItems(items,elemAreaListTask);
}
searchItem=(search)=>{
    let items = null;
    items = loadStorage();
    let arrTask = [];
    for (const key in items) {
      let string_temp = items[key].name;
      if(string_temp.toUpperCase().indexOf(search.toUpperCase()) !== -1){
        arrTask.push(items[key]);
      }
    }
    console.log(arrTask);
    funcShowItems(arrTask,elemAreaListTask);
}

sortTask=(flag,sort)=>{
    var itemsm= JSON.parse(localStorage.getItem('listTask') );
     if(flag === "name"){
      itemsm.sort(function(a, b) {
          var nameA = a.name.toUpperCase(); // bỏ qua hoa thường
          var nameB = b.name.toUpperCase(); // bỏ qua hoa thường
          if (nameA < nameB) {
              if(sort == 0)
                return 1;
              else
                return -1;
          }
          if (nameA > nameB) {
            if(sort == 0)
                return -1;
            else
                return 1;
          }
          // name trùng nhau
          return 0;
      });
      funcShowItems(itemsm,elemAreaListTask);
    }else if(flag === "level"){
        // sắp xếp theo level (tên)
        itemsm.sort(function(a, b) {
            var levelA = a.level.toUpperCase(); // bỏ qua hoa thường
            var levelB = b.level.toUpperCase(); // bỏ qua hoa thường
            if (levelA < levelB) {
                if(sort == 0)
                    return 1;
                else
                    return -1;
            }
            if (levelA > levelB) {
                if(sort == 0)
                    return -1;
                else
                    return 1;
            }
            // level trùng nhau
            return 0;
        });
        
        funcShowItems(itemsm,elemAreaListTask);
      }
  }


