import {customers} from "../db/db.js";


$('#dashboard-section').show();
$('#customer-section').hide();
$('#item-section').hide();
$('#order-section').hide();
$('#placeOrder-section').hide();

$('#nav-dasboard').on('click', () => {
    $('#dashboard-section').css({display: 'block'});
    $('#customer-section').css({display: 'none'});
    $('#item-section').css({display: 'none'});
    $('#order-section').css({display: 'none'});
    $('#placeOrder-section').css({display: 'none'});
});

$('#nav-customer').on('click', () => {
    $('#dashboard-section').css({display: 'none'});
    $('#customer-section').css({display: 'block'});
    $('#item-section').css({display: 'none'});
    $('#order-section').css({display: 'none'});
    $('#placeOrder-section').css({display: 'none'});
});

$('#nav-item').on('click', () => {
    $('#dashboard-section').css({display: 'none'});
    $('#customer-section').css({display: 'none'});
    $('#item-section').css({display: 'block'});
    $('#order-section').css({display: 'none'});
    $('#placeOrder-section').css({display: 'none'});
});

$('#nav-order').on('click', () => {
    $('#dashboard-section').css({display: 'none'});
    $('#customer-section').css({display: 'none'});
    $('#item-section').css({display: 'none'});
    $('#order-section').css({display: 'block'});
    $('#placeOrder-section').css({display: 'none'});
});

$('#nav-placeorder').on('click', () => {
    $('#dashboard-section').css({display: 'none'});
    $('#customer-section').css({display: 'none'});
    $('#item-section').css({display: 'none'});
    $('#order-section').css({display: 'none'});
    $('#placeOrder-section').css({display: 'block'});
});

function totalCustomersHome() {
    var total = customers.length;
    $('#customerCount').text(total);
}