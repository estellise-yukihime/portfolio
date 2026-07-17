import { RedirectFunction } from '@angular/router'

export const indexRandomRedirect: RedirectFunction = (route) => {
  const random = Math.floor(Math.random() * 2)

  switch (random) {
    case 0:
      return '/profiles'
    case 1:
      return '/profiles/33a88871-2a53-47db-98a3-c479c196f4f5/hero'
  }

  return '/profiles'
}
