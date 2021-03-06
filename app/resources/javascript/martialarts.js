$(document).ready(function() {

  //Définition des variables
  ///////////////////////////////////////////////////////////////
  var intro = 0;
  var lvl = 0;
  var nbMove = 2;
  $(".lvl-achieved").hide();

  //Création et lancement de l'audio
  ///////////////////////////////////////////////////////////////
  $("audio").append('<source class="audioSource" src="/audio/arts-martiaux/DarkTemple-DerekAndBrandonFiechter.mp3" type="audio/mpeg">');




  //Gestion des dialogue/////////////////////////////////////////
  var indexdialoguepersonnage = 0;
  var indexdialoguescript = 0;
  var dialoguescript = [
    "Wow où sommes-nous? Demandons à ce singe.",
    "Bonjour singe-sama. Quel est cet endroit?",
    "Appelle-moi Kaio-sensei. Tu es à l'entrée de mon dojo. Mais dis-moi, ton grand-père ne serait-il pas Ojiisan?",
    "Oui, mais comment le connaissez-vous?",
    "Ho... nous avons appris les arts martiaux ensemble, il y a fort longtemps. Nous nous étions rencontrés au cours d'une belle journée d'automne. C'était très certainement un samedi... ",
    "Hum...",
    "Ha non, il s'agissait d'un dimanche en réalité. J'ai aperçu Ojiisan sur un banc longeant un fleuve tranquille.",
    "Hum... Kaio-sensei",
    "Sacré Ojiisan, il m'a immédiatement invité à boire le thé en sa compagnie. Il disposait d'une tasse d'un bleu clair du plus bel effet avec de petites vagues dessinées dessus à la main.",
    "Oui c'est la tasse que je recherche!!!",
    "Ha la tasse! Figure-toi que j'ai vu un feu follet passer avec des morceaux de tasse. Ils ressemblaient fortement à la tasse de Ojiisan. J'ai essayé de l'arrêter, mais il s'est enfui.",
    "Par contre, il a laissé tomber un indice permettant de le retrouver. Suis-moi, je t'apprendrai les arts martiaux. Si je juge tes capacités suffisantes, je donnerai cet indice.",
    "Yuki, prépare-toi! Je vais te présenter un COMBO à effectuer. Il faudra que tu mémorises les différents mouvements, puis après un certain temps, tu pourras essayer de reproduire le COMBO.",
    "Ce n'est pas grave si tu n'y arrives pas du premier coup, nous avons le temps. À chaque fois que tu arrives à exécuter un COMBO, le suivant devient plus compliqué.",
    "Tu débutes donc je vais être gentil. Dès que tu parviens à exécuter 4 COMBOs, je te donnerai l'indice.",
    "Tu peux également obtenir des informations complémentaires sur les arts martiaux et notre monde en cliquant sur la bulle d'info."
  ];

  var dialoguepersonnage = [
    "Yuki : ",
    "Yuki : ",
    "Maître Kaio : ",
    "Yuki : ",
    "Maître Kaio : ",
    "Yuki : ",
    "Maître Kaio : ",
    "Yuki : ",
    "Maître Kaio : ",
    "Yuki : ",
    "Maître Kaio : ",
    "Maître Kaio : ",
    "Maître Kaio : ",
    "Maître Kaio : ",
    "Maître Kaio : ",
    "Maître Kaio : "
  ];

  $(".dialogue-personnage").append(dialoguepersonnage[
    indexdialoguepersonnage]);
    $(".dialogue-script").append(dialoguescript[indexdialoguescript]);

    $(".dialogue-skip").on('click', script);
    $(".dialogue-skip").on('click', personnage);

    function script() {
      indexdialoguescript++;

      if (indexdialoguescript < dialoguescript.length) {
        $(".dialogue-script").empty();
        $(".dialogue-script").append(dialoguescript[
          indexdialoguescript]);
        }

        if (indexdialoguescript === 12) {
          $( ".dojo-front" ).fadeOut();
          $( ".dojo-inside" ).fadeIn();
          $('#yuki_face').fadeOut();
          $('#yuki_profil').fadeIn();

          $( ".dialogue" ).removeClass( "dialogue-arts-martiaux" )


          var fileSrc = "/audio/arts-martiaux/NinjaMaster-DerekFiechter.mp3"
          $("audio").attr("src",fileSrc).trigger("play");



        }

        if (indexdialoguescript === dialoguescript.length) {
          $(".dialogue").fadeOut();
          //Lancer votre fonction post dialogue ici...
          $('.martialArtsBtn').show();
          kataGeneration(nbMove, lvl);
        }
      }

      function personnage() {
        indexdialoguepersonnage++;

        if (indexdialoguescript < dialoguescript.length) {
          $(".dialogue-personnage").empty();
          $(".dialogue-personnage").append(dialoguepersonnage[
            indexdialoguepersonnage]);
          }
        }

        ///////////////////////////////////////////////////////////////


        //Masquage des éléments
        $('.martialArtsBtn').hide();
        $('.round-info-button').hide();
        $('.round-audio-button').show();
        $('#martial-arts-info').hide();
        $('#martialArtsDialogue').hide();
        $(".lvl-achieved").hide();
        $("#newGamePlusFail").hide();
        $(".scoreBox").hide();



        //Masquage des sprites
        $('#yuki_profil').hide();
        $('#yuki_poing').hide();
        $('#yuki_pied').hide();
        $('#yuki_saut').hide();
        $('#yuki_poingDeFeu').hide();
        $('#yuki_tombe').hide();


        $('.round-info-button').on('click', showInfos);

      });



      function kataGeneration(nbMove, lvl) {

        var i = 0; //Index pour le kata aléatoire définir le kata
        var tblKata = []; //Premier kata préconfiguré
        var kataValidated = "true";
        lvl++;
        $('.scoreBox').fadeOut();
        $( "#score" ).empty();
        $( "#score" ).append(lvl);
        if (lvl < 4) {
                nbMove++;
        }
        $("#nbrKata").empty();
        $("#retry").empty();
        $("#nbrKata").append(lvl);

        $('.round-info-button').hide();

        //$( ".martialArtsBtn" ).addClass( "desactivatedBtn" );
        $(".martialArtsBtn").addClass("desactivatedBtn");
        //$(".desactivatedBtn").css("background", "grey");


        if (lvl > 0 && kataValidated === "true") {
          kataValidated = null;
          //Génération du kata aléatoire
          while (i < nbMove) {
            var aleatoireNbr = Math.round(Math.random() * 3) + 1;
            if (aleatoireNbr === 1) {
              tblKata[i] = "btnPoing";
              i++;


              $('<div>').attr({
                class: 'kataASaisir kataASaisirPoing'
              }).appendTo("#kataASaisir");

              $('<img>').attr({
                src: '/img/punch.png'
              }).appendTo(".kataASaisirPoing");

            } else if (aleatoireNbr === 2) {
              tblKata[i] = "btnPied";
              i++;

              $('<div>').attr({
                class: 'kataASaisir kataASaisirPied'
              }).appendTo("#kataASaisir");

              $('<img>').attr({
                src: '/img/kick.png'
              }).appendTo(".kataASaisirPied");

            } else if (aleatoireNbr === 3) {
              tblKata[i] = "btnJump";
              i++;

              $('<div>').attr({
                class: 'kataASaisir kataASaisirJump'
              }).appendTo("#kataASaisir");

              $('<img>').attr({
                src: '/img/jump.png'
              }).appendTo(".kataASaisirJump");

            } else if (aleatoireNbr === 4) {
              tblKata[i] = "btnSpe";
              i++;

              $('<div>').attr({
                class: 'kataASaisir kataASaisirSpe'
              }).appendTo("#kataASaisir");

              $('<img>').attr({
                src: '/img/special.png'
              }).appendTo(".kataASaisirSpe");

            }
          }
          $("#progressBar").show();
          $(".kataASaisir").show().delay(4000).fadeOut();
          $("#martialArtsDialogue").show().delay(4000).fadeOut();
          $("#progressBar .progress").addClass("started");


          setTimeout(
            function() {
              //$("#progressBar").hide();
              validationKata(tblKata, lvl, nbMove);
              $('.round-info-button').show();
              //showInfos();
              //do something special
            }, 4000);


            //console.log(tblKata);
            i = 0;
            //tblKata = [];
            //lvl++;
            //nbMove++;
          }
        }

        function validationKata(tblKata, lvl, nbMove) {
          var nbrInputKata = 0;
          var tblInputs = []; //Tableau stockant les inputs pour le kata
          var j = 0; //Index pour les inputs aléatoire définir le kata
          $('.scoreBox').fadeIn();



          //$("#progressBar").hide();
          $("#progressBar .progress").removeClass("started").addClass("stopped");


          $(".martialArtsBtn").removeClass("desactivatedBtn");



          //Détéction des inputs
          $('#btnPoing, #btnPied, #btnJump, #btnSpe').click(function() {

            var sprite = this.id;



            //Nombre d'input saisi
            nbrInputKata++;

            if (nbrInputKata < nbMove) {
              spriteAnimation(sprite);
            }

            //Injection des valeurs saisies dans un tableau
            tblInputs[j] = this.id;
            j++;

            //Dès que le bon nombre d'inputs est saisi...
            if (nbrInputKata === nbMove) {
              //On compare nos tableau
              var is_same = tblKata.length == tblInputs.length && tblKata
              .every(function(element, index) {
                return element === tblInputs[index];
              });
              //console.log(is_same);
              if (is_same === true) {
                //console.log(
                  //"Bien joué le kata a été effectué à la perfection!"
                //);
                $(".kataASaisir").remove();
                spriteAnimation(sprite);

                if (lvl === 4) {
                  $('.discussionContainer').hide();
                  $(".lvl-achieved").fadeIn();
                  $('.round-info-button').fadeOut();

                  $.post("/api/level/passLevelUser/martialarts",{ result: lvl}, function( data ) {
                  });
                  $( "#continueGame" ).on( "click", function() {
                    $(".lvl-achieved").fadeOut();
                    $('.discussionContainer').fadeIn();
                    //newGamePlus(nbMove, lvl);
                    kataGeneration(nbMove, lvl);
                  });

                } else if (lvl < 4) {
                  kataGeneration(nbMove, lvl);
                } else if (lvl >= 4 && is_same) {
                  kataGeneration(nbMove, lvl);
                }
              } else if (lvl >= 4 && is_same === false) {
                $.post("/api/level/passLevelUser/martialarts",{ result: lvl}, function( data ) {
                });
                $("#newGamePlusFail").fadeIn();
                $( ".scoreFinal" ).append(lvl);
                $('#inputBox').hide();
                $('.round-info-button-circle').hide();
              }
              else if (lvl <= 4 && is_same === false) {
                $('.round-info-button').hide();

                $('#yuki_profil').hide();
                $('#yuki_tombe').show();
                setTimeout(
                  function() {
                    //do something special
                    $('#yuki_profil').show();
                    $('#yuki_tombe').hide();
                  }, 4000);

                  $('.scoreBox').fadeOut();
                  $("#progressBar .progress").removeClass("stopped").addClass(
                    "started");
                    $("#progressBar").show();
                    $("#retry").empty("");
                    $("#retry").append("Dommage tu as fait une erreur. ");
                    $(".martialArtsBtn").addClass("desactivatedBtn");
                    $(".kataASaisir").show().delay(4000).fadeOut();
                    $("#martialArtsDialogue").show().delay(4000).fadeOut();
                    $("#progressBar .progress").removeClass("stopped").addClass(
                      "started");
                      setTimeout(
                        function() {

                          validationKata(tblKata, lvl, nbMove);
                          $('#yuki_profil').show();
                          $('.round-info-button').show();
                          //do something special
                        }, 4000);
                      }
                    }
                  });
                }

                function spriteAnimation(sprite) {


                  if (sprite === "btnPoing") {
                    //console.log(sprite);
                    $('#yuki_profil').hide();
                    $('#yuki_poing').show();
                    setTimeout(
                      function() {
                        //do something special
                        $('#yuki_profil').show();
                        $('#yuki_poing').hide();
                      }, 300);


                    } else if (sprite === "btnPied") {
                      $('#yuki_profil').hide();
                      $('#yuki_pied').show();
                      setTimeout(
                        function() {
                          //do something special
                          $('#yuki_profil').show();
                          $('#yuki_pied').hide();

                        }, 300);

                      } else if (sprite === "btnJump") {
                        $('#yuki_profil').hide();
                        $('#yuki_saut').show();
                        setTimeout(
                          function() {
                            //do something special
                            $('#yuki_profil').show();
                            $('#yuki_saut').hide();
                          }, 300);

                        } else if (sprite === "btnSpe") {
                          $('#yuki_profil').hide();
                          $('#yuki_poingDeFeu').show();
                          setTimeout(
                            function() {
                              //do something special
                              $('#yuki_profil').show();
                              $('#yuki_poingDeFeu').hide();
                            }, 600);

                          }
                        }

                        function showInfos() {
                          $('#martial-arts-info').show();
                          $('.round-info-button').hide();
                          $('.round-info-button-close').on('click', hideInfos);
                        }

                        function hideInfos() {
                          $('.round-info-button').show();
                          $('#martial-arts-info').hide();
                        }
