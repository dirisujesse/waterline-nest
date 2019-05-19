import { Controller, Get, Post, Put, Body, Param, Query, UsePipes, UseGuards } from '@nestjs/common';
import { CatService } from '../../../services/cat.service';
import { CatDto, UpdateCatDto } from '../../../db/dto/cat.dto';
import { AuthGuard } from '../../../services/auth.guard';

@Controller('cat') // the string passed into the decorator serves as a path prefix
export class CatController {
    constructor(readonly service: CatService) {}

    @Get()
    allCats(@Query('limit') limit?, @Query('sort') sort?: string, @Query('skip') skip?: number) {
        limit = limit === undefined ? 20 : limit;
        sort = sort === undefined ? 'name ASC' : sort;
        skip = skip === undefined ? 0 : skip;
        return this.service.getCats(+limit, sort, +skip);
    }

    @Get(':id')
    getCat(@Param('id') id) {
        return this.service.getCat(id);
    }

    @Post()
    // @UsePipes(new BodyValidator(CatCreateSchema))
    @UseGuards(new AuthGuard())
    createCat(@Body() body: CatDto) {
        return this.service.createCat(body);
    }

    @Put(':id')
    updateCat(@Param('id') id, @Body() data: UpdateCatDto) {
        return this.service.updateCat(id, data);
    }
}
