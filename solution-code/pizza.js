function getPrice(ingredient) {
  price = $(ingredient).html().split(' ')[0];
  return parseInt(price.replace('$', ''), 10);
}

function updatePrice() {
  var pricesPanel      = $('.panel.price');
  var base             = $(pricesPanel).find('b:first');
  var total            = $(pricesPanel).find('strong:last');
  var ingredients      = $(pricesPanel).find('ul').find('li:visible');
  var totalPrice       = getPrice(base);

  $.each(ingredients, function (index, ingredient) {
    totalPrice += getPrice(ingredient);
  });
  $(total).html('$' + totalPrice);
}

function defaultValues() {
  // Ingredients
  $('.crust').removeClass('crust-gluten-free');
  $('.crust').find('.sauce').removeClass('sauce-white');

  // Buttons state
  $('.btn-pepperonni, .btn-mushrooms, .btn-green-peppers').addClass('active');
  $('.btn-crust, .btn-sauce').removeClass('active');

  // Ingredients list
  $('.panel.price').find('ul').find('li:contains("sauce")').toggle();
  $('.panel.price').find('ul').find('li:contains("crust")').toggle();

  // Total price
  updatePrice();
}

function changeButtonStyle(button) {
  $(button).toggleClass('active');
}

function updateIngredientsList(ingredient) {
  ingredient = ingredient.replace('.', '').split('-');
  var element = $('.panel.price').find('ul').find('li:contains("' + ingredient[0] + '")');
  element.toggle();
}

function btnHandler(triggerClass, targetClass, toggleClass) {
  $(triggerClass).on('click', function () {
    if (toggleClass) {
      $(targetClass).toggleClass(toggleClass);
    } else {
      $(targetClass).toggle();
    }
    changeButtonStyle($(this));
    updateIngredientsList(targetClass);
    updatePrice();
  });
}

btnHandler('.btn-pepperonni', '.pepperonni');
btnHandler('.btn-mushrooms', '.mushroom');
btnHandler('.btn-green-peppers', '.green-pepper');
btnHandler('.btn-crust', '.crust', 'crust-gluten-free');
btnHandler('.btn-sauce', '.sauce', 'sauce-white');

// Write your Pizza Builder JavaScript in this file.
$(document).ready(function () {
  defaultValues();
});
