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
/**
 * Created by Robin on 15/04/2017.
 */
var core_1 = require("@angular/core");
var PageTwoComponent = (function () {
    function PageTwoComponent() {
        this.lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        this.lorems = [];
        this.addLorems();
    }
    PageTwoComponent.prototype.ngAfterViewChecked = function () {
        this.stop = performance.now();
        console.log(this.stop - this.start);
    };
    PageTwoComponent.prototype.addLorems = function () {
        for (var i = 0; i < 50000; i++) {
            this.lorems.push(this.lorem);
        }
    };
    ;
    PageTwoComponent.prototype.ngOnInit = function () {
        this.start = performance.now();
    };
    return PageTwoComponent;
}());
PageTwoComponent = __decorate([
    core_1.Component({
        selector: 'pageTwo',
        templateUrl: 'app/pageTwo/pageTwo.html'
    }),
    __metadata("design:paramtypes", [])
], PageTwoComponent);
exports.PageTwoComponent = PageTwoComponent;
//# sourceMappingURL=pageTwo.component.js.map