import CustomerModel from "../model/CustomerModel";
import {customers} from "../db/db";
var recodIndexCustomers;


$('#dashboard-section').css({display: 'none'});
$('#customer-section').css({display: 'block'});
$('#item-section').css({display: 'none'});
$('#order-section').css({display: 'none'});
$('#placeOrder-section').css({display: 'none'});



function loadCustomerTable() {

    $("#customer-tbl-tbody").empty();

    customers.map((item, index) => {
        console.log(item)
        var customerRecord = `<tr>
                 <td class="c-id">${item.id}</td>
                 <td class="c-name">${item.name}</td>
                 <td class="c-address">${item.address}</td>
                 <td class="c-phoneNumber">${item.phone}</td>
            </tr>`;
        $("#student-tbl-tbody").append(customerRecord);
    });
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
    console.log("press");

    let customerModel = new CustomerModel(id,name,address,phoneNumber);
    customers.push(customerModel);

    loadCustomerTable();
    clearAll();

});