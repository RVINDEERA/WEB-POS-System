import CustomerModel from "../model/CustomerModel.js";
import {customers} from "../db/db.js";
var recodIndexCustomers;


/*$('#dashboard-section').css({display: 'none'});
$('#customer-section').css({display: 'block'});
$('#item-section').css({display: 'none'});
$('#order-section').css({display: 'none'});
$('#placeOrder-section').css({display: 'none'});*/


var ValidCustomerID = $('#customer-id>#customer-id');
var ValidCustomerName = $('#customer-name>#customer-name');
var ValidCustomerAddress = $('#customer-address>#customer-address');
var ValidCustomerPhoneNumber = $('#customer-phone>#customer-phone');
var isValidCustomerName = new RegExp("\\b[A-Z][a-z]*( [A-Z][a-z]*)*\\b");
var isValidCustomerAddress = new RegExp("^[A-Za-z0-9'\\/\\.,\\s]{5,}$");
var isValidPhoneNumber = new RegExp("^(?:0|94|\\+94|0094)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|91)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\\d)\\d{6}$");
var isValidID = new RegExp("C\\d\\d\\d");

function emptyPlaceHolder() {
    $(ValidCustomerID).attr("placeholder", "");
    $(ValidCustomerName).attr("placeholder", "");
    $(ValidCustomerAddress).attr("placeholder", "");
    $(ValidCustomerPhoneNumber).attr("placeholder", "");
}
function loadCustomerTable() {

    $("#customer-tbl-tbody").empty();

    customers.map((item, index) => {
        console.log(item)
        var customerRecord = `<tr>
                 <td class="c-id">${item.id}</td>
                 <td class="c-name">${item.name}</td>
                 <td class="c-address">${item.address}</td>
                 <td class="c-phoneNumber">${item.phoneNumber}</td>
            </tr>`;
        $("#customer-tbl-tbody").append(customerRecord);
    });
}

$('#customer-tbl-tbody').on('click','tr',function () {
    recodIndexCustomers = $(this).index();

    var id = $(this).find(".c-id").text();
    var name = $(this).find(".c-name").text();
    var address = $(this).find(".c-address").text();
    var phoneNumber = $(this).find(".c-phoneNumber").text();

    $('#customer-id').val(id);
    $('#customer-name').val(name);
    $('#customer-address').val(address);
    $('#customer-phone').val(phoneNumber);
});

function validCustomer() {
    var customerID = $('#customer-id').val();
    var customerName = $('#customer-name').val();
    var customerAddress = $('#customer-address').val();
    var phoneNumber = $('#customer-phone').val();

    if (!isValidID.test(customerID) || !isValidCustomerName.test(customerName) || !isValidCustomerAddress.test(customerAddress) || !isValidPhoneNumber.test(phoneNumber)) {

        $(ValidCustomerID).attr("placeholder", "ID Empty");
        $(ValidCustomerName).attr("placeholder", "Wrong Input Try Again");
        $(ValidCustomerAddress).attr("placeholder", "Wrong Input Try Again");
        $(ValidCustomerPhoneNumber).attr("placeholder", "Wrong Input Try Again");
    }  else {
        emptyPlaceHolder();
    }
}
function clearAll() {
    $('#customer-id').val("");
    $('#customer-name').val("");
    $('#customer-address').val("");
    $('#customer-phone').val("");
}
$('#customer-cancel').on('click',() => {
    clearAll();
});

$("#customer-save").on('click',() => {

    var id = $('#customer-id').val();
    var name = $('#customer-name').val();
    var address = $('#customer-address').val();
    var phoneNumber = $('#customer-phone').val();

    if (!isValidID.test(id) || !isValidCustomerName.test(name) || !isValidCustomerAddress.test(address) || !isValidPhoneNumber.test(phoneNumber)) {
        validCustomer();
        return;
    }

    let customerModel = new CustomerModel(id,name,address,phoneNumber);
    customers.push(customerModel);

    loadCustomerTable();
    clearAll();
    totalCustomers();
    emptyPlaceHolder();


});

$('#customer-delete').on('click',() => {

    var id = $('#customer-id').val();
    var name = $('#customer-name').val();
    var address = $('#customer-address').val();
    var phoneNumber = $('#customer-phone').val();

    if (!isValidID.test(id) || !isValidCustomerName.test(name) || !isValidCustomerAddress.test(address) || !isValidPhoneNumber.test(phoneNumber)) {
        validCustomer();
        return;
    }

    customers.splice(recodIndexCustomers,1);

    loadCustomerTable();
    clearAll();
    totalCustomers();
    emptyPlaceHolder();
});

$('#customer-update').on('click',() => {

    var id = $('#customer-id').val();
    var name = $('#customer-name').val();
    var address = $('#customer-address').val();
    var phoneNumber = $('#customer-phone').val();

    if (!isValidID.test(id) || !isValidCustomerName.test(name) || !isValidCustomerAddress.test(address) || !isValidPhoneNumber.test(phoneNumber)) {
        validCustomer();
        return;
    }

    var cOb = customers[recodIndexCustomers];
    cOb.id = id;
    cOb.name = name;
    cOb.address = address;
    cOb.phoneNumber = phoneNumber;

    loadCustomerTable();
    clearAll();
    totalCustomers();
    emptyPlaceHolder();


});

function searchCustomers(query) {
    const searchTerm = query.toLowerCase();

    for (let i = 0; i < customers.length; i++) {
        if (searchTerm === customers[i].id.toLowerCase() || searchTerm === customers[i].phoneNumber.toLowerCase()) {
            $('#customer-id').val(customers[i].id);
            $('#customer-name').val(customers[i].name);
            $('#customer-address').val(customers[i].address);
            $('#customer-phone').val(customers[i].phoneNumber);
            break;
        }
    }
}

$('#btnSearchCustomer').on('click', function() {
    const searchQuery = $('#search-customer').val();
    searchCustomers(searchQuery);
});

function totalCustomers() {
    var total = customers.length;
    $('#customerCount').text(total);
}