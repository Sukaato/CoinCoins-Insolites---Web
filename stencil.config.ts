import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: 'coincoins-insolites',
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
<<<<<<< HEAD
    { type: 'dist' },
    { type: 'www' }
=======
    {
      type: 'www',
      empty: false
      // comment the following line to disable service workers in production
      // serviceWorker: null,
      // baseUrl: 'https://myapp.local/'
    }
>>>>>>> master
  ],
  plugins: [
    sass()
  ]
};
