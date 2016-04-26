/*
 *intro
 */

//Déclare id en tant que variable globale pour qu'elle soit visible dans les 2 fonctions
var id;

$(document).ready(function() {
    //Permet de prendre l'id dans l'url
    var sPageURL = window.location.toString();
    var sURLid = sPageURL.split('/');
    id = sURLid[sURLid.length-1];

    //Controle si l'id existe pour faire le get pour modifier un niveau
    if (id) {
        $.get( "/api/level/" + id)
            .done(function(data) {
                $("#num").val(data.number);
                $("#nom").val(data.name);
                $("#code").val(data.code);
                $("#date_sortie").val(data.release_date);
                $("#info_sup").val(data.additional_info);
                $("#desc").val(data.description);
                $("#url").val(data.url);
            })
            .fail(function() {
                console.log( "error" );
        })
    }
});

//Function envoyant les données des formulaires (créer un level, modifier un level) pour créer ou modifier un level
function capture() {
    var level = {};
    level.number = $("#num").val();
    level.name = $("#nom").val();
    level.code = $("#code").val();
    level.release_date = $("#date_sortie").val();
    level.additional_info = $("#info_sup").val();
    level.description = $("#desc").val();
    level.url = $("#url").val();

    //Sélectionne la bonne root pour le bon formulaire
    if (id == "ajoutMonde") {
        $.ajax({
          type: "POST",
          url: "/api/level",
          data: level
        }).done(function (data) {
            window.location.replace('/admin');
        }).fail(function (err){
            console.log(err);
        });
    } else {
        $.ajax({
          type: "PUT",
          url: "/api/level/" + id,
          data: level
        }).done(function (data) {
            window.location.replace('/admin');
        }).fail(function (err){
            console.log(err);
        });
    }
}