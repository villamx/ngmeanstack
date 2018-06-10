import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MeetupsController } from './meetups.controller';
import { MeetupsService } from './meetups.service';
import { MeetupSchema } from './schemas/meetup.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Meetup', schema: MeetupSchema}])],
  controllers: [MeetupsController],
  components: [MeetupsService],
})
export class MeetupsModule {
}
