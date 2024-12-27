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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trait = exports.Head = exports.House = void 0;
const typeorm_1 = require("typeorm");
let House = class House {
};
exports.House = House;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], House.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, nullable: false }),
    __metadata("design:type", String)
], House.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], House.prototype, "houseColours", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], House.prototype, "founder", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], House.prototype, "animal", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], House.prototype, "element", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], House.prototype, "ghost", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], House.prototype, "commonRoom", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Array)
], House.prototype, "heads", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Array)
], House.prototype, "traits", void 0);
exports.House = House = __decorate([
    (0, typeorm_1.Entity)('house')
], House);
class Head {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
exports.Head = Head;
class Trait {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
exports.Trait = Trait;
//# sourceMappingURL=house.entity.js.map