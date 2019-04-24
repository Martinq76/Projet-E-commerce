// Affichage Page de démarrage :
$(".containerPC2").hide();
$(".containerMobile2").hide();
$(".containerAccessories2").hide();

$(function(){
// Affichage des catégories :
// Nos produits :
$("#AllProducts").click(function(){
      $(".containerPC").hide();
      $(".containerMobile").hide();
      $(".containerAccessories").hide();
      $(".containerPC2").show();
      $(".containerMobile2").show();
      $(".containerAccessories2").show();
    })
// Pc de Bureau :
$("#desktopPc").click(function(){
      $(".containerPC").hide();
      $(".containerPC2").show();
      $(".containerMobile").hide();
      $(".containerMobile2").hide();
      $(".containerAccessories").hide();
      $(".containerAccessories2").hide();
    })
// Mobile :
$("#mobile").click(function(){
      $(".containerPC").hide();
      $(".containerPC2").hide();
      $(".containerMobile").hide();
      $(".containerMobile2").show();
      $(".containerAccessories").hide();
      $(".containerAccessories2").hide();
    })
// Accessoires :
    $("#accessories").click(function(){
          $(".containerPC").hide();
          $(".containerPC2").hide();
          $(".containerMobile").hide();
          $(".containerMobile2").hide();
          $(".containerAccessories").hide();
          $(".containerAccessories2").show();
        })
})
