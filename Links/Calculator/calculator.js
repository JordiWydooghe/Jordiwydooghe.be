function c(val){
    document.getElementById("scherm").value=val;
}

function v(val){
    document.getElementById("scherm").value+=val;
}

function e() { 
    try 
    { 
      c(eval(document.getElementById("scherm").value)) 
    } 
    catch(e) 
    {
      c('Error') 
    } 
}  