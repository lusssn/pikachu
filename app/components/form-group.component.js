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
var forms_1 = require('@angular/forms');
var contact_1 = require('../modules/contact');
var contact_lists_service_1 = require('../services/contact-lists.service');
var FormGroupComponent = (function () {
    function FormGroupComponent(_contactService) {
        this._contactService = _contactService;
        this.doContactForm = new core_1.EventEmitter();
    }
    FormGroupComponent.prototype.onCancel = function () {
        // TODO
        // 编辑状态下还原数据 
        this.doContactForm.emit("cancel");
    };
    FormGroupComponent.prototype.onAdd = function () {
        var newItem = new contact_1.ContactInit(this.editItem);
        this._contactService.addContactItem(newItem);
        this.doContactForm.emit("add");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FormGroupComponent.prototype, "editItem", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FormGroupComponent.prototype, "doContactForm", void 0);
    FormGroupComponent = __decorate([
        core_1.Component({
            selector: 'form-group',
            directives: [forms_1.FORM_DIRECTIVES],
            template: "\n\t<span class=\"form_title\">Name</span>\n\t<input class=\"form_input\" type=\"text\" [(ngModel)]=\"editItem.name\">\n\t<span class=\"form_title\">Telephone</span>\n\t<input class=\"form_input\" type=\"text\" [(ngModel)]=\"editItem.tel\">\n\t<span class=\"form_title\">E-mail</span>\n\t<input class=\"form_input\" type=\"text\" [(ngModel)]=\"editItem.email\">\n\t<span class=\"form_title\">Address</span>\n\t<input class=\"form_input\" type=\"text\" [(ngModel)]=\"editItem.address\">\n\n\t<a *ngIf=\"editItem.isNew\" class=\"btn btn_company_static\" href=\"#\" (click)=\"onAdd()\">Add</a>\n\t<a class=\"btn btn_cancel_static\" href=\"#\" (click)=\"onCancel()\">Cancel</a>\n\t"
        }), 
        __metadata('design:paramtypes', [contact_lists_service_1.ContactListsService])
    ], FormGroupComponent);
    return FormGroupComponent;
}());
exports.FormGroupComponent = FormGroupComponent;
//# sourceMappingURL=form-group.component.js.map