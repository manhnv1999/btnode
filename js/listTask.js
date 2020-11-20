function listTask(){
    this.arrTask = [];
}
listTask.prototype.addTask = function(item){
    this.arrTask.push(item);
}