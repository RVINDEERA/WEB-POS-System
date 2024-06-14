import CustomerModel from "../model/CustomerModel.js";
import {customers} from "../db/db.js";
var recodIndexCustomers;


/*$('#dashboard-section').css({display: 'none'});
$('#customer-section').css({display: 'block'});
$('#item-section').css({display: 'none'});
$('#order-section').css({display: 'none'});
$('#placeOrder-section').css({display: 'none'});*/



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
    console.log("press");

    let customerModel = new CustomerModel(id,name,address,phoneNumber);
    customers.push(customerModel);

    loadCustomerTable();
    clearAll();

});

$('#customer-delete').on('click',() => {

    var id = $('#customer-id').val();
    var name = $('#customer-name').val();
    var address = $('#customer-address').val();
    var phoneNumber = $('#customer-phone').val();

    customers.splice(recodIndexCustomers,1);

    loadCustomerTable();
    clearAll();

});


$('#customer-update').on('click',() => {

    var id = $('#customer-id').val();
    var name = $('#customer-name').val();
    var address = $('#customer-address').val();
    var phoneNumber = $('#customer-phone').val();


    var cOb = customers[recodIndexCustomers];
    cOb.id = id;
    cOb.name = name;
    cOb.address = address;
    cOb.phoneNumber = phoneNumber;

    loadCustomerTable();
    clearAll();

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
