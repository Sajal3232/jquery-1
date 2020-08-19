
var resultId=$("#result");
function inseartNumber(number){
    var existNumber=$("#result").val();
    $("#result").val(existNumber + number);
}
function clearResult(){
    $("#result").val("");
}
function equalNumbers(){
  var result= eval($("#result").val()); 
  $("#result").val(result);
}
function deleteField(){
    var presentNumbers=resultId.val();
    if(presentNumbers!=""){
     resultId.val(presentNumbers.slice(0,-1));
    }
}