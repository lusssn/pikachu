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
var contact_lists_service_1 = require('../services/contact-lists.service');
var ContactListsComponent = (function () {
    function ContactListsComponent(_contactService) {
        this._contactService = _contactService;
        this.doContactList = new core_1.EventEmitter();
        this._selectedItem = this._contactService.getSelected();
    }
    ContactListsComponent.prototype.onEnter = function (item) {
        this._contactService.setSelected(item);
        this._selectedItem = this._contactService.getSelected();
        this.doContactList.emit("selected");
    };
    ContactListsComponent.prototype.onEdit = function () {
        this.doContactList.emit("edit");
    };
    ContactListsComponent.prototype.onAdd = function () {
        this._selectedItem = this._contactService.resetSelected();
        this.doContactList.emit("add");
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ContactListsComponent.prototype, "doContactList", void 0);
    ContactListsComponent = __decorate([
        core_1.Component({
            selector: 'contact-lists',
            template: "\n\t<ul class=\"nav_list\">\n\t\t<li class=\"list_item list_item_lg list_item_static\" \n\t\t\t*ngFor=\"let item of lists\"\n\t\t\t[class.list_item_selected]=\"item === _selectedItem\"\n\t\t\t(mouseenter)=\"onEnter(item)\"> \n\t\t\t<span>{{item.id}}</span>\n\t\t\t{{item.name}}<a class=\"btn_edit\" *ngIf=\"item === _selectedItem\" href=\"#\" (click)=\"onEdit()\">\u7F16\u8F91</a>\n\t\t</li>\n\t\t<li class=\"list_item list_item_lg list_item_static\"\n\t\t\t(click)=\"onAdd()\">\n\t\t\tAdd New\n\t\t</li>\n\t</ul>\n\t",
            styles: ["\n\t.btn_edit {\n\t\tfloat: right;\n\t\tcolor: #1B84B2;\n\t\ttext-decoration: underline;\n\t}\n\t.btn_edit:hover {\n\t\ttext-decoration: none;\n\t}\n\t"],
            inputs: ['lists']
        }), 
        __metadata('design:paramtypes', [contact_lists_service_1.ContactListsService])
    ], ContactListsComponent);
    return ContactListsComponent;
}());
exports.ContactListsComponent = ContactListsComponent;
//# sourceMappingURL=contact-lists.component.js.map