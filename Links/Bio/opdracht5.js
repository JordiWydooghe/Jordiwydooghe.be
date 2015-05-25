$(function(){
$( "#balk" ).mouseover(function() {
    $( "#dropdown" ).removeClass("hide");
});
$( "#antwoord" ).click(function() {
    $( "#antwoorden" ).removeClass("hide");
    $("#juist, #fout").addClass("hide");
});
$( "#terug" ).click(function() {
    $( "#antwoorden" ).addClass("hide");
    $("#juist, #fout").addClass("hide");
});
$( "#controle" ).click(function() {
    var antw = $( "#vraag" ).val().toLowerCase();
    
    var validate = false;
    switch(antw) {
        case "harry kane":
            validate = true;
            break;
        case "moussa dembele":
            validate = true;
            break;
        case "kane":
            validate = true;
            break;
        case "dembele":
            validate = true;
            break;
        case "nacer chadli":
            validate = true;
            break;
        case "chadli":
            validate = true;
            break;
        case "lamela":
            validate = true;
            break;
        case "erik lamela":
            validate = true;
            break;
        case "soldado":
            validate = true;
            break;
        case "roberto soldado":
            validate = true;
            break;
    }
    if (validate){
        $( "#juist" ).removeClass("hide");
    }
    else{
        $( "#fout" ).removeClass("hide");
    }
});
});

