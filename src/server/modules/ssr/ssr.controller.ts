import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('*')
export class ServerSideRenderingController {
  @Get()
  public routesRender(@Req() req: Request, @Res() res: Response) {
    res.render('index', {req}, (err, html) => {
      return res.send(html);
    });
  }
}
