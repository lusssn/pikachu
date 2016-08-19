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
var contact_1 = require('../modules/contact');
var mock_contacts_1 = require('../config/mock-contacts');
var ContactListsService = (function () {
    function ContactListsService() {
        this.setSelected(new contact_1.ContactInit());
        this.resetContactLists();
    }
    ContactListsService.prototype.getSelected = function () {
        return this._selectedItem;
    };
    ContactListsService.prototype.setSelected = function (item) {
        this._selectedItem = item;
    };
    ContactListsService.prototype.resetSelected = function () {
        this.setSelected(new contact_1.ContactInit());
        return this._selectedItem;
    };
    ContactListsService.prototype.getContactLists = function () {
        return this._contactLists;
    };
    ContactListsService.prototype.resetContactLists = function () {
        this._contactLists = mock_contacts_1.CONTACTS;
    };
    ContactListsService.prototype.addContactItem = function (item) {
        this._contactLists.push(item);
    };
    ContactListsService.prototype.getContactItem = function (index) {
        return this._contactLists[index];
    };
    ContactListsService.prototype.getNewItem = function () {
        var newItem = new contact_1.ContactInit();
        newItem.id = this._contactLists.length + 1;
        return newItem;
    };
    ContactListsService.prototype.resetContactItem = function (item) {
        item.id = 0;
        item.name = "";
        item.tel = "";
        item.email = "";
        item.address = "";
    };
    ContactListsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ContactListsService);
    return ContactListsService;
}());
exports.ContactListsService = ContactListsService;
//# sourceMappingURL=contact-lists.service.js.map