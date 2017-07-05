"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NewKegFormComponent = (function () {
    function NewKegFormComponent() {
    }
    NewKegFormComponent.prototype.addKeg = function (form) {
        // console.log(BoardComponent.kegs);
    };
    return NewKegFormComponent;
}());
NewKegFormComponent = __decorate([
    core_1.Component({
        selector: 'newkegform',
        template: "\n  <h1>New Keg Form Component</h1>\n  <form #addKegForm=\"ngForm\" (ngSubmit)=\"addKeg(addKegForm);false\">\n    <label for=\"name\">Beer Name</label>\n    <input type=\"text\" name=\"name\" ngModel>\n    <label for=\"price\">Price</label>\n    <input type=\"number\" name=\"price\" ngModel>\n    <label for=\"brand\">Brand</label>\n    <input type=\"text\" name=\"brand\" ngModel>\n    <label for=\"alcohol-content\">Alcohol Content</label>\n    <input type=\"number\" name=\"alcohol-content\" ngModel>\n    <label for=\"type\">Style</label>\n    <input type=\"text\" name=\"type\" ngModel>\n    <button type=\"submit\">Submit</button>\n  </form>\n  "
    })
], NewKegFormComponent);
exports.NewKegFormComponent = NewKegFormComponent;
//# sourceMappingURL=newkegform.component.js.map