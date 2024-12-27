"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HousesService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const redis_1 = require("redis");
const redisClient = (0, redis_1.createClient)({
    url: process.env.REDIS_URL,
});
redisClient.connect();
redisClient.on('connect', () => {
    console.log('The Redis Database is connected');
});
redisClient.on('disconnect', () => {
    console.log('The Redis Database is disconnected');
});
redisClient.on('error', (error) => {
    console.error(`Redis client error:`, error);
});
let HousesService = class HousesService {
    create(createHouseDto) {
        return 'This action adds a new house';
    }
    async findAll() {
        try {
            const cachedHouses = await redisClient.get(process.env.KEY_HOUSES);
            if (cachedHouses) {
                console.log('Returning houses from cache');
                return JSON.parse(cachedHouses);
            }
            const response = await axios_1.default.get(process.env.API_URL_HOUSES);
            const newHouses = response.data;
            if (cachedHouses) {
                const cachedData = JSON.parse(cachedHouses);
                if (JSON.stringify(cachedData) !== JSON.stringify(newHouses)) {
                    console.log('Data has changed, updating cache');
                    await redisClient.set(process.env.KEY_HOUSES, JSON.stringify(newHouses));
                }
            }
            else {
                console.log('No cache found, setting new data');
                await redisClient.set(process.env.KEY_HOUSES, JSON.stringify(newHouses));
            }
            return newHouses;
        }
        catch (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
            else if (error.request) {
                console.log(error.request);
            }
            else {
                console.log('Error', error.message);
            }
            console.log(error.config);
            throw error;
        }
    }
    async findOne(id) {
        try {
            const response = await axios_1.default.get(`${process.env.API_URL_HOUSES}/${id}`);
            const data = response.data;
            return JSON.stringify(data);
        }
        catch (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
            else if (error.request) {
                console.log(error.request);
            }
            else {
                console.log('Error', error.message);
            }
            console.log(error.config);
        }
    }
    update(id, updateHouseDto) {
        return `This action updates a #${id} house`;
    }
    remove(id) {
        return `This action removes a #${id} house`;
    }
};
exports.HousesService = HousesService;
exports.HousesService = HousesService = __decorate([
    (0, common_1.Injectable)()
], HousesService);
//# sourceMappingURL=houses.service.js.map