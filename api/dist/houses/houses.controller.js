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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HousesController = void 0;
const common_1 = require("@nestjs/common");
const houses_service_1 = require("./houses.service");
const create_house_dto_1 = require("./dto/create-house.dto");
const update_house_dto_1 = require("./dto/update-house.dto");
let HousesController = class HousesController {
    constructor(housesService) {
        this.housesService = housesService;
    }
    create(createHouseDto) {
        return this.housesService.create(createHouseDto);
    }
    async findAll(body) {
        try {
            const houses = await this.housesService.findAll();
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'Houses retrieved successfully',
                data: houses,
            };
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.SERVICE_UNAVAILABLE,
                error: 'Service is temporarily unavailable. Please try again later.',
            }, common_1.HttpStatus.SERVICE_UNAVAILABLE, {
                cause: error,
            });
        }
    }
    async findOne(id) {
        try {
            const house = await this.housesService.findOne(id);
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'House retrieved successfully',
                data: house,
            };
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.SERVICE_UNAVAILABLE,
                error: 'Service is temporarily unavailable. Please try again later.',
            }, common_1.HttpStatus.SERVICE_UNAVAILABLE, {
                cause: error,
            });
        }
    }
    update(id, updateHouseDto) {
        return this.housesService.update(+id, updateHouseDto);
    }
    remove(id) {
        return this.housesService.remove(+id);
    }
};
exports.HousesController = HousesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_house_dto_1.CreateHouseDto]),
    __metadata("design:returntype", void 0)
], HousesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/houses'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HousesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/houses/:id'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HousesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_house_dto_1.UpdateHouseDto]),
    __metadata("design:returntype", void 0)
], HousesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HousesController.prototype, "remove", null);
exports.HousesController = HousesController = __decorate([
    (0, common_1.Controller)(''),
    __metadata("design:paramtypes", [houses_service_1.HousesService])
], HousesController);
//# sourceMappingURL=houses.controller.js.map