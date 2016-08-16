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
var hero_detail_component_1 = require('./hero-detail.component');
var hero_service_1 = require('./hero.service');
var AppComponent = (function () {
    function AppComponent(_heroService) {
        this._heroService = _heroService;
        this.title = '英雄之旅';
    }
    AppComponent.prototype.getHeroes = function () {
        var _this = this;
        this._heroService.getHeroesSlowly().then(function (heroes) { return _this.heroes = heroes; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [forms_1.FORM_DIRECTIVES, hero_detail_component_1.HeroDetailComponent],
            providers: [hero_service_1.HeroService],
            template: "\n\t<h1>{{title}}</h1>\n\n\t<hero-detail [hero1]=\"selectedHero\"></hero-detail>\n\n\t<h2>\u82F1\u96C4\u5217\u8868</h2>\n\t<ul class=\"heroes\">\n\t\t<li *ngFor=\"let item of heroes\"\n\t\t\t[class.selected]=\"item === selectedHero\"\n\t\t\t(click)=\"onSelect(item)\"\n\t\t> <span class=\"badge\">{{item.id}}</span> {{item.name}}</li>\n\t</ul>\n\t",
            styles: ["\n\t.heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}\n\t.heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n\t.heroes li:hover {color: #369; background-color: #EEE; left: .2em;}\n\t.heroes .badge {\n\t\tfont-size: small;\n\t\tcolor: white;\n\t\tpadding: 0.1em 0.7em;\n\t\tbackground-color: #369;\n\t\tline-height: 1em;\n\t\tposition: relative;\n\t\tleft: -1px;\n\t\ttop: -1px;\n\t}\n\t.selected { background-color: #EEE; color: #369; }\n\t"]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map