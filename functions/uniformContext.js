import {
    Context,
    enableContextDevTools,
  } from "@uniformdev/context";
  import { NextCookieTransitionDataStore } from "@uniformdev/context-next";
  import manifest from "../contextManifest.json";
import { genericEventsPlugin } from "../functions/genericEventsPlugin";
  
  export function createUniformContext(serverContext) {
    const context = new Context({
      defaultConsent: true,
      manifest: manifest,
      transitionStore: new NextCookieTransitionDataStore({
        serverContext,
      }),
      plugins: [ 
        enableContextDevTools(), 
        genericEventsPlugin()
      ],
    });
  
    return context;
  }