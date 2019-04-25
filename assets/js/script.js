// Affichage Page de démarrage :
$(".containerPC2").hide();
$(".containerMobile2").hide();
$(".containerAccessories2").hide();
$(".DescriptifImg").hide();


$(function() {
  // Affichage des catégories :
  // Nos produits :
  $("#AllProducts").click(function() {
    $(".containerPC").hide();
    $(".containerMobile").hide();
    $(".containerAccessories").hide();
    $(".containerPC2").show();
    $(".containerMobile2").show();
    $(".containerAccessories2").show();
  })
  // Pc de Bureau :
  $("#desktopPc").click(function() {
    $(".containerPC").hide();
    $(".containerPC2").show();
    $(".containerMobile").hide();
    $(".containerMobile2").hide();
    $(".containerAccessories").hide();
    $(".containerAccessories2").hide();
  })
  // Mobile :
  $("#mobile").click(function() {
    $(".containerPC").hide();
    $(".containerPC2").hide();
    $(".containerMobile").hide();
    $(".containerMobile2").show();
    $(".containerAccessories").hide();
    $(".containerAccessories2").hide();
  })
  // Accessoires :
  $("#accessories").click(function() {
    $(".containerPC").hide();
    $(".containerPC2").hide();
    $(".containerMobile").hide();
    $(".containerMobile2").hide();
    $(".containerAccessories").hide();
    $(".containerAccessories2").show();
  })
//   $(".imgpc").mouseover(function() {
//     var newid = $(this).id;
//     console.log(idcible);
// });

  // Mise en animation des descriptifs :
  $("#image1").mouseover(function() {
    $("#description1").show();
  })
  $("#image1").mouseout(function() {
    $("#description1").hide();
  })

  $("#image2").mouseover(function() {
    $("#description2").show();
  })
  $("#image2").mouseout(function() {
    $("#description2").hide();
  })

  $("#image3").mouseover(function() {
    $("#description3").show();
  })
  $("#image3").mouseout(function() {
    $("#description3").hide();
  })

  $("#image4").mouseover(function() {
    $("#description4").show();
  })
  $("#image4").mouseout(function() {
    $("#description4").hide();
  })

  $("#image5").mouseover(function() {
    $("#description5").show();
  })
  $("#image5").mouseout(function() {
    $("#description5").hide();
  })

  $("#image6").mouseover(function() {
    $("#description6").show();
  })
  $("#image6").mouseout(function() {
    $("#description6").hide();
  })

  $("#image7").mouseover(function() {
    $("#description7").show();
  })
  $("#image7").mouseout(function() {
    $("#description7").hide();
  })

  $("#image8").mouseover(function() {
    $("#description8").show();
  })
  $("#image8").mouseout(function() {
    $("#description8").hide();
  })

  $("#image9").mouseover(function() {
    $("#description9").show();
  })
  $("#image9").mouseout(function() {
    $("#description19").hide();
  })

  $("#image10").mouseover(function() {
    $("#description10").show();
  })
  $("#image10").mouseout(function() {
    $("#description10").hide();
  })

  $("#image11").mouseover(function() {
    $("#description11").show();
  })
  $("#image11").mouseout(function() {
    $("#description11").hide();
  })

  $("#image12").mouseover(function() {
    $("#description12").show();
  })
  $("#image12").mouseout(function() {
    $("#description12").hide();
  })

  $("#image13").mouseover(function() {
    $("#description13").show();
  })
  $("#image13").mouseout(function() {
    $("#description13").hide();
  })

  $("#image14").mouseover(function() {
    $("#description14").show();
  })
  $("#image14").mouseout(function() {
    $("#description14").hide();
  })

  $("#image15").mouseover(function() {
    $("#description15").show();
  })
  $("#image15").mouseout(function() {
    $("#description15").hide();
  })

  $("#image16").mouseover(function() {
    $("#description16").show();
  })
  $("#image16").mouseout(function() {
    $("#description16").hide();
  })

  $("#image17").mouseover(function() {
    $("#description17").show();
  })
  $("#image17").mouseout(function() {
    $("#description17").hide();
  })

  $("#image18").mouseover(function() {
    $("#description18").show();
  })
  $("#image18").mouseout(function() {
    $("#description18").hide();
  })

  $("#image19").mouseover(function() {
    $("#description19").show();
  })
  $("#image19").mouseout(function() {
    $("#description19").hide();
  })

  $("#image20").mouseover(function() {
    $("#description20").show();
  })
  $("#image20").mouseout(function() {
    $("#description20").hide();
  })
  $("#image21").mouseover(function() {
    $("#description21").show();
  })
  $("#image21").mouseout(function() {
    $("#description21").hide();
  })

  $("#image22").mouseover(function() {
    $("#description22").show();
  })
  $("#image22").mouseout(function() {
    $("#description22").hide();
  })

  $("#image23").mouseover(function() {
    $("#description23").show();
  })
  $("#image23").mouseout(function() {
    $("#description23").hide();
  })

  $("#image24").mouseover(function() {
    $("#description24").show();
  })
  $("#image24").mouseout(function() {
    $("#description24").hide();
  })

  $("#image25").mouseover(function() {
    $("#description25").show();
  })
  $("#image25").mouseout(function() {
    $("#description25").hide();
  })

  $("#image26").mouseover(function() {
    $("#description26").show();
  })
  $("#image26").mouseout(function() {
    $("#description26").hide();
  })

  $("#image27").mouseover(function() {
    $("#description27").show();
  })
  $("#image27").mouseout(function() {
    $("#description27").hide();
  })

  $("#image28").mouseover(function() {
    $("#description28").show();
  })
  $("#image28").mouseout(function() {
    $("#description28").hide();
  })

  $("#image29").mouseover(function() {
    $("#description29").show();
  })
  $("#image29").mouseout(function() {
    $("#description29").hide();
  })

  $("#image30").mouseover(function() {
    $("#description30").show();
  })
  $("#image30").mouseout(function() {
    $("#description30").hide();
  })

  $("#image31").mouseover(function() {
    $("#description31").show();
  })
  $("#image31").mouseout(function() {
    $("#description31").hide();
  })

  $("#image32").mouseover(function() {
    $("#description32").show();
  })
  $("#image32").mouseout(function() {
    $("#description32").hide();
  })

  $("#image33").mouseover(function() {
    $("#description33").show();
  })
  $("#image33").mouseout(function() {
    $("#description33").hide();
  })

  $("#image34").mouseover(function() {
    $("#description34").show();
  })
  $("#image34").mouseout(function() {
    $("#description34").hide();
  })

  $("#image35").mouseover(function() {
    $("#description35").show();
  })
  $("#image35").mouseout(function() {
    $("#description35").hide();
  })

  $("#image36").mouseover(function() {
    $("#description36").show();
  })
  $("#image36").mouseout(function() {
    $("#description36").hide();
  })

  $("#image37").mouseover(function() {
    $("#description37").show();
  })
  $("#image37").mouseout(function() {
    $("#description37").hide();
  })

  $("#image38").mouseover(function() {
    $("#description38").show();
  })
  $("#image38").mouseout(function() {
    $("#description38").hide();
  })

  $("#image39").mouseover(function() {
    $("#description39").show();
  })
  $("#image39").mouseout(function() {
    $("#description39").hide();
  })

  $("#image40").mouseover(function() {
    $("#description40").show();
  })
  $("#image40").mouseout(function() {
    $("#description40").hide();
  })

  $("#image41").mouseover(function() {
    $("#description41").show();
  })
  $("#image41").mouseout(function() {
    $("#description41").hide();
  })

  $("#image42").mouseover(function() {
    $("#description42").show();
  })
  $("#image42").mouseout(function() {
    $("#description42").hide();
  })

  $("#image43").mouseover(function() {
    $("#description43").show();
  })
  $("#image43").mouseout(function() {
    $("#description43").hide();
  })

  $("#image44").mouseover(function() {
    $("#description44").show();
  })
  $("#image44").mouseout(function() {
    $("#description44").hide();
  })

  $("#image45").mouseover(function() {
    $("#description45").show();
  })
  $("#image45").mouseout(function() {
    $("#description45").hide();
  })

  $("#image46").mouseover(function() {
    $("#description46").show();
  })
  $("#image46").mouseout(function() {
    $("#description46").hide();
  })

  $("#image47").mouseover(function() {
    $("#description47").show();
  })
  $("#image47").mouseout(function() {
    $("#description47").hide();
  })

  $("#image48").mouseover(function() {
    $("#description48").show();
  })
  $("#image48").mouseout(function() {
    $("#description48").hide();
  })

//Fin affichage catégories


var code = ['pcb001', 'pcb002', 'pcb003', 'pcb004', 'pcb005', 'pcb006', 'pcb007', 'pcb008', 'pcb009', 'pcb010', 'pcb011', 'pcb012', 'smart001', 'smart002', 'smart003', 'smart004', 'smart005', 'smart006', 'smart007', 'smart008', 'smart009', 'smart010', 'smart011', 'smart012', 'accs001', 'accs002', 'accs003', 'accs004', 'accs005', 'accs006', 'accs007', 'accs008', 'accs009', 'accs010', 'accs011', 'accs012'];

var price = ['549.95', '2549.95', '679,94', '3299,95', '599,95', '1079.95', '1649.95', '699.95', '1249.95', '1299.95', '4999.95', '859.95', '709.96', '229,96', '249.95', '499.95', '199.94', '799.96', '169.96', '349.95', '549.95', '239.95', '899.95', '169.95', '107.45', '2799.95', '249.90', '89.95', '109.95', '69,76', '59.95', '306.95', '599.95', '99.95', '99.95', '84.95'];

var nameProducts = ['ASUS A41GAT', 'Coffee Macchiato', 'Chopin', 'ASUS ROG G12CM', 'NUC-I5-8-S1', 'Bazooka', 'Macchiato Artic Refresh', 'Lenovo V330-20ICB AIO', 'Lenovo ThinkStation P320 Tiny', 'MSI Pro 16 Flex 8GL-001XEU', 'MSI Trident 3 VR7RC', 'MSI Vortex W25 8SM-098FR', 'IPhone Xs Max', 'Samsung Galaxy S8', 'Honor 9 Lite', 'Huawei Mate 20 Pro', 'Honor 10 lite', 'Huawey p 30', 'Xiaomi redmi 7', 'Samsung A50', 'Iphone 7', 'Blackberry KEYone', 'ASUS ROG Phone ZS600KL', 'Motorola Moto G7 Play', 'G.Skill Aegis (2 x 8 Go) DDR4', 'NVIDIA TITAN RTX', 'ASUS ROG STRIX Z390-E', 'Seagate BarraCuda 2 To', 'Antec HCG750', 'ASUS BC-12D2HT', 'Aerocool ORBIT RC', 'Kit Upgrade AMD Ryzen ASUS PRIME', 'Intel core I9', 'ASUS Strix Soar', 'Noctua NH-D15 SE-AM4', 'Samsung SSD 860 EVO 500 Go'];

$('.addButton').click(function() {
  var index = $(this).val();
  console.log(index);
  var tableau = '<tr><td>' + nameProducts[index] + '</td><td>' + code[index] + '</td><td>' + price[index] + '€' + '</td><td>' + '<input type="text" id="quantityCaddy" value="1" />' + '</td><td>' + '</td></tr>';
  $('#tableau > tbody:last').append(tableau);

$(document).keyup(function(){
  var quantityproduct = $("#quantityCaddy").val();
  console.log(quantityproduct);
  var subtotalprice = quantityproduct * price[index];
  console.log(subtotalprice);
  $('tbody>tr').empty();
var tableau = '<tr><td>' + nameProducts[index] + '</td><td>' + code[index] + '</td><td>' + price[index] + '€' + '</td><td>' + '<input type="text" id="quantityCaddy" />' + '</td><td>' + subtotalprice + '</td></tr>';
$('#tableau > tbody:last').append(tableau);
});
});
})



// $('.addButton').click(function() {
//   var index = $(this).val();
//   console.log(index);
//   var tableau = '<tr><td>' + nameProducts[index] + '</td><td>' + code[index] + '</td><td>' + price[index] + '€' + '</td><td>' + '<button id="buttonMoins"> - </button>' + '<input type="number" id="quantityCaddy" value="1" />' + '<button id="buttonPlus"> + </button>' + '</td></tr>';
//   $('#tableau > tbody:last').append(tableau);
//   $('#priceCaddy').text(price[index]);
//   var quantityCaddyup = 'quantityCaddy' + [index];
//   console.log(quantityCaddyup);
//   $('.addButton').prop('id', 'quantityCaddyup');
//
// $('#buttonMoins').click(function() {
//   var quantityCaddy = $('#quantityCaddyup').val();
//   console.log('QTY : ' + $('#quantityCaddyup').val());
//
//   if (quantityCaddy <= 1) {
//     $('tbody>tr').empty();
//   } else {
//     quantityCaddy--;
//     $('#quantityCaddyup').val(quantityCaddy);
//     console.log(quantityCaddy);
//   }
// });
//
// $('#buttonPlus').click(function() {
//   var quantityCaddy = $('#quantityCaddy').val();
//   quantityCaddy++;
//   $('#quantityCaddy').val(quantityCaddy);
//   console.log('QTY : ' + $('#quantityCaddy'));
// });
//
// console.log(quantityCaddy);
// console.log(price[0]);
// console.log(code[0]);
// console.log(nameProducts[0]);
