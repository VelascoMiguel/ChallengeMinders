import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';
export declare class HousesService {
    create(createHouseDto: CreateHouseDto): string;
    findAll(): Promise<any>;
    findOne(id: string): Promise<string>;
    update(id: number, updateHouseDto: UpdateHouseDto): string;
    remove(id: number): string;
}
