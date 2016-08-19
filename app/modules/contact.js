"use strict";
var ContactInit = (function () {
    function ContactInit(item) {
        if (item) {
            this.id = item.id;
            this.name = item.name;
            this.tel = item.tel;
            this.email = item.email;
            this.address = item.address;
            this.isNew = false;
        }
        else {
            this.id = 0;
            this.name = "";
            this.tel = "";
            this.email = "";
            this.address = "";
            this.isNew = true;
        }
    }
    return ContactInit;
}());
exports.ContactInit = ContactInit;
//# sourceMappingURL=contact.js.map