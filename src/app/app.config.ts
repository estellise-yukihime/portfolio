import { ApplicationConfig, inject, provideBrowserGlobalErrorListeners } from '@angular/core'
import {
  provideRouter,
  Router,
  withComponentInputBinding,
  withInMemoryScrolling,
  withNavigationErrorHandler
} from '@angular/router'

import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withNavigationErrorHandler((error) => {
        const router = inject(Router)

        if (error?.error) {
          console.error(error.error)
        }

        return router.navigate(['/404'])
      }),
      withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' })
    )
  ]
}
