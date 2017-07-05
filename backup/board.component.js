"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var keg_component_1 = require("./keg.component");
var BoardComponent = (function () {
    function BoardComponent() {
    }
    return BoardComponent;
}());
BoardComponent = __decorate([
    core_1.Component({
        selector: 'board',
        template: "\n  <h1>Board template</h1>\n  <table>\n    <tr *ngFor=\"let currentKeg of kegs\">\n      <th>Name: {{currentKeg.name}}</th>\n      <th>Brand: {{currentKeg.brand}}</th>\n      <th>Price: {{currentKeg.price}}</th>\n      <th>Alcohol Content: {{currentKeg.alcoholContent}}</th>\n      <th>Type: {{currentKeg.type}}</th>\n    </tr>\n    <tr>\n    </tr>\n    </table>\n\n  "
    })
], BoardComponent);
exports.BoardComponent = BoardComponent;
var Board = (function () {
    function Board() {
        this.kegs = [
            new keg_component_1.Keg('Guinness', 5.00, 'Guiness', 3.7, 'stout'),
            new keg_component_1.Keg('Cigar City', 5.00, 'Jal Alal', 7.5, 'IPA'),
            new keg_component_1.Keg('Belgian White Ale', 5.00, 'Blue Moon', 5.4, 'Witbier')
        ];
    }
    return Board;
}());
exports.Board = Board;
//# sourceMappingURL=board.component.js.map