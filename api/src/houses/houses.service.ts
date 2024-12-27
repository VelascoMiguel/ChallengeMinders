import { Injectable } from '@nestjs/common';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';
import axios from 'axios';
import { createClient } from 'redis';

const redisClient = createClient({
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

@Injectable()
export class HousesService {
  create(createHouseDto: CreateHouseDto) {
    return 'This action adds a new house';
  }

  async findAll() {
    try {
      const cachedHouses = await redisClient.get(process.env.KEY_HOUSES);

      if (cachedHouses) {
        console.log('Returning houses from cache');
        return JSON.parse(cachedHouses);
      }

      const response = await axios.get(process.env.API_URL_HOUSES);
      const newHouses = response.data;

      if (cachedHouses) {
        const cachedData = JSON.parse(cachedHouses);

        if (JSON.stringify(cachedData) !== JSON.stringify(newHouses)) {
          console.log('Data has changed, updating cache');
          await redisClient.set(
            process.env.KEY_HOUSES,
            JSON.stringify(newHouses),
          );
        }
      } else {
        console.log('No cache found, setting new data');
        await redisClient.set(
          process.env.KEY_HOUSES,
          JSON.stringify(newHouses),
        );
      }

      return newHouses;
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);

      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const response = await axios.get(`${process.env.API_URL_HOUSES}/${id}`);

      const data = response.data;

      return JSON.stringify(data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    }
  }

  update(id: number, updateHouseDto: UpdateHouseDto) {
    return `This action updates a #${id} house`;
  }

  remove(id: number) {
    return `This action removes a #${id} house`;
  }
}
