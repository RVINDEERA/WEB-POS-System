import ItemModel from "../model/ItemModel.js";
import {items} from "../db/db.js";

var recordIndexItems;
/*
$('#dashboard-section').css({display: 'none'});
$('#customer-section').css({display: 'none'});
$('#item-section').css({display: 'block'});
$('#order-section').css({display: 'none'});
$('#placeOrder-section').css({display: 'none'});
*/

var ValidItemID = $('#item-code>#item-code');
var ValidItemName = $('#item-name>#item-name');
var ValidPrice = $('#item-unitprice>#item-unitprice');
var ValidQty = $('#item-qty>#item-qty');
var isValidPriceAndQty = new RegExp("^[0-9]+\\.?[0-9]*$");
var isValidItemName = new RegExp("\\b[A-Z][a-z]*( [A-Z][a-z]*)*\\b");
var isValidCode = new RegExp("I\\d\\d\\d");


function emptyPlaceHolder() {
    $(ValidItemID).attr("placeholder", "");
    $(ValidItemName).attr("placeholder", "");
    $(ValidPrice).attr("placeholder", "");
    $(ValidQty).attr("placeholder", "");
}
function clearAll() {
    $('#item-code').val("");
    $('#item-name').val("");
    $('#item-unitprice').val("");
    $('#item-qty').val("");
}


function validItem() {
    var itemID = $('#item-code').val();
    var itemName = $('#item-name').val();
    var itemPrice = $('#item-unitprice').val();
    var itemQty = $('#item-qty').val();


    if (!isValidCode.test(itemID) || !isValidItemName.test(itemName) || !isValidPriceAndQty.test(itemPrice) || !isValidPriceAndQty.test(itemQty)) {

        $(ValidItemID).attr("placeholder", "ID Empty");
        $(ValidItemName).attr("placeholder", "Wrong Input Try Again");
        $(ValidPrice).attr("placeholder", "Wrong Input");
        $(ValidQty).attr("placeholder", "Wrong Input Try Again");

        return true;
    } else {
        emptyPlaceHolder();
    }
}

$('#item-cancel').on('click',() => {
    clearAll();
});

function loadItemTable() {
    $("#item-table-body").empty();

    items.map((item,index) => {
        var itemRecord = `<tr>
                        <td class="i-id">${item.id}</td>
                        <td class="i-name">${item.name}</td>
                        <td class="i-price">${item.price}</td>
                        <td class="i-qty">${item.qty}</td>
                    </tr>`
        $('#item-table-body').append(itemRecord);
    });
}


$('#item-table-body').on('click','tr',function () {
    recordIndexItems = $(this).index();

    var id = $(this).find(".i-id").text();
    var name = $(this).find(".i-name").text();
    var price = $(this).find(".i-price").text();
    var qty = $(this).find(".i-qty").text();

    $('#item-code').val(id);
    $('#item-name').val(name);
    $('#item-unitprice').val(price);
    $('#item-qty').val(qty);
});

$('#item-save').on('click',() => {
    var code = $('#item-code').val();
    var name = $('#item-name').val();
    var price = $('#item-unitprice').val();
    var qty = $('#item-qty').val();

    if (!isValidCode.test(code) || !isValidItemName.test(name) || !isValidPriceAndQty.test(price) || !isValidPriceAndQty.test(qty)) {
        validItem();
        return false;
    }

    let itemModel = new ItemModel(code,name,price,qty);
    items.push(itemModel);
    emptyPlaceHolder();
    loadItemTable();
    clearAll();

});
