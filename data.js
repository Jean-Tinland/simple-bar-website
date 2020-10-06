export const locales = {
  en: {
    'home-title': 'simple-bar - A yabai status bar widget for Übersicht',

    'introduction-title': 'simple-bar',
    'introduction-tagline': 'A <b>yabai</b> status bar widget for <b>Übersicht</b>'
  },
  fr: {
    'home-title': 'simple-bar - Un widget pour yabai & Übersicht',

    'introduction-title': 'simple-bar',
    'introduction-tagline': 'Un widget pour <b>yabai</b> & <b>Übersicht</b>'
  }
}

export const fakeBar = {
  spaces: 3,
  process: [
    {
      app: 'Code',
      space: 1
    },
    {
      app: 'Chrome',
      space: 2
    },
    {
      app: 'Skype',
      space: 3
    },
    {
      app: 'Slack',
      space: 3
    }
  ],
  data: {
    battery: 100,
    sound: 33,
    wifi: {
      fr: 'My wifi',
      en: 'Mon wifi'
    }
  }
}
