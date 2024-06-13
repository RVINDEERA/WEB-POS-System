export default class CustomerModel{

    constructor(id,name,address,phoneNumber) {
        this._id=id;
        this._name = name;
        this._address = address;
        this._phoneNumber = phoneNumber;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    set phoneNumber(value) {
        this._phoneNumber = value;
    }
}
