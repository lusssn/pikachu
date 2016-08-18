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
/*import { ContactListsService } from '../services/contact-lists.service';*/
var FormGroupComponent = (function () {
    function FormGroupComponent() {
    }
    FormGroupComponent = __decorate([
        core_1.Component({
            selector: 'form-group',
            directives: [forms_1.FORM_DIRECTIVES],
            /*providers: [ContactListsService],*/
            template: "\n\t<span class=\"form_title\">Name</span>\n\t<input class=\"form_input\" type=\"text\" >\n\t<span class=\"form_title\">Telephone</span>\n\t<input class=\"form_input\" type=\"text\" >\n\t<span class=\"form_title\">E-mail</span>\n\t<input class=\"form_input\" type=\"text\" >\n\t<span class=\"form_title\">Address</span>\n\t<input class=\"form_input\" type=\"text\" >\n\n\t<a class=\"btn btn_company_static\" href=\"#\">Add</a>\n\t",
            inputs: ['editItem']
        }), 
        __metadata('design:paramtypes', [])
    ], FormGroupComponent);
    return FormGroupComponent;
}());
exports.FormGroupComponent = FormGroupComponent;
//# sourceMappingURL=form-group.component.js.map