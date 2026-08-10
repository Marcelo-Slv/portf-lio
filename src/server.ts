import { AngularAppEngine, createRequestHandler } from '@angular/ssr';

const angularAppEngine = new AngularAppEngine();

export const reqHandler = createRequestHandler((request) =>
  angularAppEngine.handle(request)
);

export default angularAppEngine;
