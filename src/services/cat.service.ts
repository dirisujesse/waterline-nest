import { Injectable, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { CatDto, UpdateCatDto } from '../db/dto/cat.dto';

@Injectable()
export class CatService {
    constructor(@Inject('CAT_CTRL') readonly catModel) { }

    async getCats(limit: number, sort: string = 'name ASC', skip: number = 0): Promise<any> {
        return await this.catModel.find({}).limit(limit).skip(skip).sort(sort);
    }

    async getCat(_id: string): Promise<any> {
        return await this.catModel.findOne({ id: _id });
    }

    async createCat(data: CatDto): Promise<any> {
        return await this.catModel.create(data);
    }

    async updateCat(_id: string, data: UpdateCatDto): Promise<any> {
        return await this.catModel.update({ id: _id }, data);
    }
}
