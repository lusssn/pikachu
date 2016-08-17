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
var contact_lists_service_1 = require('../services/contact-lists.service');
var FormGroupComponent = (function () {
    function FormGroupComponent(_contactService) {
        this._contactService = _contactService;
        this._item = this._contactService.getSelectedItem();
    }
    FormGroupComponent = __decorate([
        core_1.Component({
            selector: 'form-group',
            directives: [forms_1.FORM_DIRECTIVES],
            providers: [contact_lists_service_1.ContactListsService],
            template: "\n\t<input class=\"form_input\" type=\"text\" placeholder=\"\u59D3\u540D\" [(ngModel)]=\"_item.name\">\n\t<input class=\"form_input\" type=\"text\" placeholder=\"\u7535\u8BDD\" [(ngModel)]=\"_item.tel\">\n\t<input class=\"form_input\" type=\"text\" placeholder=\"\u90AE\u7BB1\" [(ngModel)]=\"_item.email\">\n\t<input class=\"form_input\" type=\"text\" placeholder=\"\u5730\u5740\" [(ngModel)]=\"_item.address\">\n\t<a class=\"btn btn_form btn_company_static\" href=\"#\">\u6DFB\u52A0</a>\n\t",
            inputs: ['item']
        }), 
        __metadata('design:paramtypes', [contact_lists_service_1.ContactListsService])
    ], FormGroupComponent);
    return FormGroupComponent;
}());
exports.FormGroupComponent = FormGroupComponent;
//# sourceMappingURL=form-group.component.js.map