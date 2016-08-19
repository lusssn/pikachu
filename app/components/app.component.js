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
var form_group_component_1 = require('./form-group.component');
var contact_lists_component_1 = require('./contact-lists.component');
var contact_lists_service_1 = require('../services/contact-lists.service');
var AppComponent = (function () {
    function AppComponent(_contactService) {
        this._contactService = _contactService;
        this.title = '通讯录';
        this.editSignal = false;
        this.selectedItem = this._contactService.getSelected();
        this.lists = this._contactService.getContactLists();
    }
    AppComponent.prototype.onListChange = function (signal) {
        if (signal == "selected") {
            this.selectedItem = this._contactService.getSelected();
        }
        else if (signal == "edit") {
            this.editItem = this.selectedItem;
            this.editSignal = true;
        }
        else if (signal == "add") {
            this.editItem = this._contactService.getNewItem();
            this.editSignal = true;
        }
    };
    AppComponent.prototype.onFormChange = function (signal) {
        if (signal == "cancel") {
            this.editSignal = false;
        }
        else if (signal == "add") {
            this.lists = this._contactService.getContactLists();
            this._contactService.resetContactItem(this.editItem);
            // 移除form-group
            this.editSignal = false;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [form_group_component_1.FormGroupComponent, contact_lists_component_1.ContactListsComponent],
            providers: [contact_lists_service_1.ContactListsService],
            template: "\n\t<div class=\"title1\">{{title}}</div>\n\t<div class=\"my_app\">\n\t\t<contact-lists [lists]=\"lists\" (doContactList)=\"onListChange($event)\"></contact-lists>\n\t\t\n\t\t<div class=\"detail_board\">\n\t\t\t<div class=\"board_bkg\"></div>\n\t\t\t<div class=\"borad_item\">\n\t\t\t\t<label>Name :</label>\n\t\t\t\t{{selectedItem.name}}\n\t\t\t</div>\n\t\t\t<div class=\"borad_item\">\n\t\t\t\t<label>Tel :</label>\n\t\t\t\t{{selectedItem.tel}}\n\t\t\t</div>\n\t\t\t<div class=\"borad_item\">\n\t\t\t\t<label>E-mail :</label>\n\t\t\t\t{{selectedItem.email}}\n\t\t\t</div>\n\t\t\t<div class=\"borad_item\">\n\t\t\t\t<label>Address :</label>\n\t\t\t\t{{selectedItem.address}}\n\t\t\t</div>\n\t\t\t<div class=\"board_decorator\"></div>\n\t\t</div>\n\n\t\t<form-group class=\"form_group\" \n\t\t\t*ngIf=\"editSignal\" [editItem]=\"editItem\"\n\t\t\t(doContactForm)=\"onFormChange($event)\"></form-group>\n\t</div>\n\t",
            styles: ["\n\t.my_app {\n\t\twidth: 1170px;\n\t\tmargin: 0 auto;\n\t}\n\tcontact-lists, .detail_board, form-group {\n\t\tdisplay: inline-block;\n\t\tvertical-align: top;\n\t\tmargin: 0 20px;\n\t}\n\tform-group {\n\t\twidth: 400px;\n\t}\n\t"],
        }), 
        __metadata('design:paramtypes', [contact_lists_service_1.ContactListsService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map