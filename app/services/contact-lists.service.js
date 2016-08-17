"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var mock_contacts_1 = require('../config/mock-contacts');
var ContactListsService = (function () {
    function ContactListsService() {
        this._selectedItem = mock_contacts_1.CONTACTS[0];
    }
    ContactListsService.prototype.getSelectedItem = function () {
        return this._selectedItem;
    };
    ContactListsService.prototype.setSelectedItem = function (item) {
        this._selectedItem = item;
    };
    ContactListsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ContactListsService);
    return ContactListsService;
}());
exports.ContactListsService = ContactListsService;
//# sourceMappingURL=contact-lists.service.js.map