import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { HousesService } from './houses.service';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';

@Controller('')
export class HousesController {
  constructor(private readonly housesService: HousesService) {}

  @Post()
  create(@Body() createHouseDto: CreateHouseDto) {
    return this.housesService.create(createHouseDto);
  }

  @Get('/houses')
  async findAll(@Body() body) {
    try {
      const houses = await this.housesService.findAll();

      return {
        statusCode: HttpStatus.OK,
        message: 'Houses retrieved successfully',
        data: houses,
      };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.SERVICE_UNAVAILABLE,
          error: 'Service is temporarily unavailable. Please try again later.',
        },
        HttpStatus.SERVICE_UNAVAILABLE,
        {
          cause: error,
        },
      );
    }
  }

  @Get('/houses/:id')
  async findOne(@Query('id') id: string) {
    try {
      const house = await this.housesService.findOne(id);

      return {
        statusCode: HttpStatus.OK,
        message: 'House retrieved successfully',
        data: house,
      };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.SERVICE_UNAVAILABLE,
          error: 'Service is temporarily unavailable. Please try again later.',
        },
        HttpStatus.SERVICE_UNAVAILABLE,
        {
          cause: error,
        },
      );
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHouseDto: UpdateHouseDto) {
    return this.housesService.update(+id, updateHouseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.housesService.remove(+id);
  }
}
