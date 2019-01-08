// Write your Pizza Builder JavaScript in this file.

// function defaultValue (){
//         // BUTTONS

//         $(".btn-crust", ".btn-sauce").removeClass("active");

//         // INGREDIENTS
//         $(".crust").toggleClass("crust-gluten-free")
//         $(".crust").find(".sauce").toggleClass("sauce-white");
// }



// Pepperonni button and design
$(".btn-pepperonni").click(function() {
    $(".btn-pepperonni").toggleClass("active");
    $(".pep").toggle();
    $(".panel li:contains('pepperonni')").toggle();
    updatePrice(classStatus)
})


// mushrooms button and design
$(".btn-mushrooms").click(function() {
    $(".btn-mushrooms").toggleClass("active");
    $(".mushroom").toggle();
    $(".panel li:contains('mushrooms')").toggle();
    updatePrice(classStatus)
})


// Green Pepper button and design
$(".btn-green-peppers").click(function() {
    $(".btn-green-peppers").toggleClass("active");
    $(".green-pepper").toggle();
    $(".panel li:contains('green peppers')").toggle();
    updatePrice(classStatus)
});

$(".btn-sauce").click(function(){
    $(".btn-sauce").toggleClass("active");
    $(".sauce").toggleClass("sauce-white");
    $(".price li:contains('sauce')").toggle();
    updatePrice(classStatus)
});

$(".btn-crust").click(function(){
    $(".btn-crust").toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
    $(".price li:contains('gluten')").toggle();
    updatePrice(classStatus)
});


// $(document).ready(function(){
//     defaultValue();
// })


var classStatus = [
    {name: $(".btn-pepperonni"), price: 1},
    {name: $(".btn-mushrooms"), price: 1},
    {name: $(".btn-green-peppers"), price: 1},
    {name: $(".btn-sauce"), price: 3},
    {name: $(".btn-crust"), price: 5},
]



function updatePrice(classStatus) {
    var total = 10;
    for (var i = 0; i<classStatus.length ; i++) {
        if(classStatus[i].name.hasClass("active")) {
            total += classStatus[i].price;
        }
    }
    var displayedTotalPrice = $("#total").text(total + "$")
    return displayedTotalPrice;

}
