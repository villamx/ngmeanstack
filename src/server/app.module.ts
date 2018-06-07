import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ServerSideRenderingModule } from './modules/ssr';
import { MeetupsModule } from './modules/meetups';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/demo'),
    MeetupsModule,
    ServerSideRenderingModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
