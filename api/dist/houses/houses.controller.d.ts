import { HttpStatus } from '@nestjs/common';
import { HousesService } from './houses.service';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';
export declare class HousesController {
    private readonly housesService;
    constructor(housesService: HousesService);
    create(createHouseDto: CreateHouseDto): string;
    findAll(body: any): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: any;
    }>;
    findOne(id: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: string;
    }>;
    update(id: string, updateHouseDto: UpdateHouseDto): string;
    remove(id: string): string;
}
