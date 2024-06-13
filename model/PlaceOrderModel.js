export default class PlaceOrderModel {

    constructor(orderID,orderDate,customerID,customerName,customerAddress,customerPhone,itemCode,itemName,unitPrice,qtyOnHand,orderQty,balance,discount,cash,totalPrice,subTotal) {
        this._orderID= orderID;
        this._orderDate= orderDate;
        this._customerID= customerID;
        this._customerName= customerName;
        this._customerAddress= customerAddress;
        this._customerPhone= customerPhone;
        this._itemCode= itemCode;
        this._itemName= itemName;
        this._unitPrice= unitPrice;
        this._qtyOnHand= qtyOnHand;
        this._orderQty= orderQty;
        this._balance= balance;
        this._discount= discount;
        this._cash= cash;
        this._totalPrice = totalPrice;
        this._subTotal = subTotal;
    }


    get orderID() {
        return this._orderID;
    }

    set orderID(value) {
        this._orderID = value;
    }

    get orderDate() {
        return this._orderDate;
    }

    set orderDate(value) {
        this._orderDate = value;
    }

    get customerID() {
        return this._customerID;
    }

    set customerID(value) {
        this._customerID = value;
    }

    get customerName() {
        return this._customerName;
    }

    set customerName(value) {
        this._customerName = value;
    }

    get customerAddress() {
        return this._customerAddress;
    }

    set customerAddress(value) {
        this._customerAddress = value;
    }

    get customerPhone() {
        return this._customerPhone;
    }

    set customerPhone(value) {
        this._customerPhone = value;
    }

    get itemCode() {
        return this._itemCode;
    }

    set itemCode(value) {
        this._itemCode = value;
    }

    get itemName() {
        return this._itemName;
    }

    set itemName(value) {
        this._itemName = value;
    }

    get unitPrice() {
        return this._unitPrice;
    }

    set unitPrice(value) {
        this._unitPrice = value;
    }

    get qtyOnHand() {
        return this._qtyOnHand;
    }

    set qtyOnHand(value) {
        this._qtyOnHand = value;
    }

    get orderQty() {
        return this._orderQty;
    }

    set orderQty(value) {
        this._orderQty = value;
    }

    get balance() {
        return this._balance;
    }

    set balance(value) {
        this._balance = value;
    }

    get discount() {
        return this._discount;
    }

    set discount(value) {
        this._discount = value;
    }

    get cash() {
        return this._cash;
    }

    set cash(value) {
        this._cash = value;
    }

    get totalPrice() {
        return this._totalPrice;
    }

    set totalPrice(value) {
        this._totalPrice = value;
    }

    get subTotal() {
        return this._subTotal;
    }

    set subTotal(value) {
        this._subTotal = value;
    }
}