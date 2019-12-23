import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: 'coincoins-insolites',
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    { type: 'dist' },
    { type: 'www' }
  ],
  plugins: [
    sass()
  ]
};
