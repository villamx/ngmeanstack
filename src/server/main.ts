import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { enableProdMode } from '@angular/core';
// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import * as express from 'express';
import { join } from 'path';

import { AppModule } from './app.module';

async function bootstrap() {
  // Express server
  const app = express();

  // Faster server renders w/ Prod mode (dev mode never needed)
  enableProdMode();

  const PORT = process.env.PORT || 3000;
  const DIST_FOLDER = join(process.cwd(), 'dist');

  // * NOTE :: leave this as require() since this file is built Dynamically from webpack
  const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('../../dist/server/main');

  const configuredNgExpressEngine = ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [provideModuleMap(LAZY_MODULE_MAP)],
  });

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  app.engine('html', configuredNgExpressEngine);

  app.set('view engine', 'html');
  app.set('views', join(DIST_FOLDER, 'browser'));

  // Example Express Rest API endpoints
  // app.get('/api/**', (req, res) => { });

  // Server static files from /browser
  app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), {
    maxAge: '1y'
  }));

  app.disable('x-powered-by');

  const nestApp = await NestFactory.create(AppModule, app);
  nestApp.enableCors();
  // Start up the Node server
  await nestApp.listen(PORT, () => {
    console.log(`Node Express server listening on http://localhost:${PORT}`);
  });
}

bootstrap();