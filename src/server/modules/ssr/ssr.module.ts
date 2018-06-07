import { Module } from '@nestjs/common';
import { ServerSideRenderingController } from './ssr.controller';

@Module({
  imports: [],
  controllers: [ServerSideRenderingController],
  components: [],
})
export class ServerSideRenderingModule {}
