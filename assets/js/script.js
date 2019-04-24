// Affichage Page de démarrage :
$(".containerPC2").hide();
$(".containerMobile2").hide();
$(".containerAccessories2").hide();

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
})
//Fin affichage catégories

var code = ['pcb001', 'pcb002', 'pcb003', 'pcb004', 'pcb005', 'pcb006', 'pcb007', 'pcb008', 'pcb009', 'pcb010', 'pcb011', 'pcb012', 'smart001', 'smart002', 'smart003', 'smart004', 'smart005', 'smart006', 'smart007', 'smart008', 'smart009', 'smart010', 'smart011', 'smart012', 'accs001', 'accs002', 'accs003', 'accs004', 'accs005', 'accs006', 'accs007', 'accs008', 'accs009', 'accs010', 'accs011', 'accs012'];

var price = ['549.95', '2549.95', '679,94', '3299,95', '599,95', '1079.95', '1649.95', '699.95', '1249.95', '1299.95', '4999.95', '859.95', '709.96', '229,96', '249.95', '499.95', '199.94', '799.96', '169.96', '349.95', '549.95', '239.95', '899.95', '169.95', '107.45', '2799.95', '249.90', '89.95', '109.95', '69,76', '59.95', '306.95', '599.95', '99.95', '99.95', '84.95'];

var name = ['ASUS A41GAT', 'Coffee Macchiato', 'Chopin', 'ASUS ROG G12CM', 'NUC-I5-8-S1', 'Bazooka', 'Macchiato Artic Refresh', 'Lenovo V330-20ICB AIO', 'Lenovo ThinkStation P320 Tiny', 'MSI Pro 16 Flex 8GL-001XEU', 'MSI Trident 3 VR7RC', 'MSI Vortex W25 8SM-098FR', 'IPhone Xs Max', 'Samsung Galaxy S8', 'Honor 9 Lite', 'Huawei Mate 20 Pro', 'Honor 10 lite', 'Huawey p 30', 'Xiaomi redmi 7', 'Samsung A50', 'Iphone 7', 'Blackberry KEYone', 'ASUS ROG Phone ZS600KL', 'Motorola Moto G7 Play', 'G.Skill Aegis (2 x 8 Go) DDR4', 'NVIDIA TITAN RTX', 'ASUS ROG STRIX Z390-E', 'Seagate BarraCuda 2 To', 'Antec HCG750', 'ASUS BC-12D2HT', 'Aerocool ORBIT RC', 'Kit Upgrade AMD Ryzen ASUS PRIME', 'Intel core I9', 'ASUS Strix Soar', 'Noctua NH-D15 SE-AM4', 'Samsung SSD 860 EVO 500 Go'];

$('.addButton').click(function() {

  var index = $(this).val();
  console.log(index);
  var tableau = '<tr><td>' + code[index] + '</td><td>' + price[index] + '</td><td>' + name[index] + '</td></tr>';
  $('#tableau > tbody:last').append(tableau);


  console.log(name[0]);
});
