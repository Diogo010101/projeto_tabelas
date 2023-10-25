var objNavPrincipal = document.querySelector("#nav_principal");
var objNavLogin = document.querySelector("#nav_login");


function menu_responsivel(){
    if (objNavPrincipal.style.display == "block"){
        objNavPrincipal.style.display = 'none';

    }else{
        objNavPrincipal.style.display = 'block';
    }
}