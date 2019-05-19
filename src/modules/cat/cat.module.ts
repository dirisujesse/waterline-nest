import { Module } from '@nestjs/common';
import { CatController } from './cat/cat.controller';
import { CatService } from '../../services/cat.service';
import { Cats } from '../../db/schemas/cat.schema';

@Module({
  controllers: [CatController],
  providers: [
    {
      provide: 'CAT_CTRL',
      useFactory: async () => {
        const ctrl = await Cats();
        return ctrl;
      },
    },
    CatService,
  ],
})
export class CatModule {}
