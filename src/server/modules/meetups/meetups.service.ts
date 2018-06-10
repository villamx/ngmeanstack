import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Meetup } from './interfaces/meetup';
import { CreateMeetupDto } from './dto/meetup.dto';

@Injectable()
export class MeetupsService {

  constructor(@InjectModel('Meetup') private readonly  meetupModel: Model<Meetup>) {
  }

  async create(createMeetupDto: CreateMeetupDto): Promise<Meetup> {

    const createdMeetup = new this.meetupModel(createMeetupDto);
    console.log('MeetupsService create ->', CreateMeetupDto, createdMeetup);
    return await createdMeetup.save({setDefaultsOnInsert: true});
  }

  async findAll(): Promise<Meetup[]> {
    return await this.meetupModel.find().exec();
  }
}
