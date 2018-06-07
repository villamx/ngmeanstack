import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateMeetupDto } from './dto/meetup.dto';
import { MeetupsService } from './meetups.service';
import { Meetup } from './interfaces/meetup';

@Controller('api/meetups')
export class MeetupsController {
  constructor(private readonly meetupsService: MeetupsService) {
  }

  @Post()
  async create(@Body() createMeetupDto: CreateMeetupDto) {
    console.log('MeetupsController create ->', createMeetupDto);
    return await this.meetupsService.create(createMeetupDto);
  }

  @Get()
  async findAll(): Promise<Meetup[]> {
    return this.meetupsService.findAll();
  }
}
