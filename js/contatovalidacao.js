var objTelefone = document.querySelector("#idtelefone");
var objvalidar = document.querySelector("#idvalidatell");

objTelefone.onblur = function(){
    var ObjRegExp = new RegExp("^([0-9]{2})([0-9]{5}[0-9]{4})$");
    if(ObjRegExp.test(objTelefone.value) == true){
        objTelefone.style.borderColor = "#009900"
        objvalidar.style.color = "#009900"
        objvalidar.style.fontWeight = "bold"

        objvalidar.innerHTML = `Sucesso`
    }else{
        objTelefone.style.borderColor = "#ff0000"
        objvalidar.style.color = "#ff0000"
        objvalidar.innerHTML = `Inválido!`
        objTelefone.value = ``
    }


}