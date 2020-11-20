const QUOTE = ['Tất cả mọi thứ chỉ quý giá ở 2 thời điểm trước khi có được và sau khi mất đi',
 'Để yêu một người cần phải đi một quãng đường rất dài', 'Để ngừng yêu một người chỉ cần lùi lại và quay lưng',
  'Yêu xa là một thử thách của hạnh phúc'];
function showQuote(a){
    document.getElementById('box_inform').innerHTML = (QUOTE[a]);
}
    
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
setInterval(function(){
    var tam =  getRndInteger(0,3);
    showQuote(tam);
}, 2000);
getRndInteger(0, 3);

eventDeleteTask=(id)=>{
    deleteItem(id);
    funcShowItems(items,elemAreaListTask);
}
eventEditTask=(name,level,id)=>{
   
}
funcAddTask=()=>{
    toggleElement=(elemAreaForm,"show");
}
eventSubmitForm = ()=>{
    submitForm(elemInputName.val(),elemInputLevel.find(":selected").text(),elemInputID.val());
}
