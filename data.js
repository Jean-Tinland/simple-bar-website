import { GoogleChromeIcon, SkypeIcon, SlackIcon, CodeIcon } from './components/icons'

export const locales = {
  en: {
    'home-title': 'simple-bar - A yabai status bar widget for Übersicht',

    'introduction-title': 'simple-bar',
    'introduction-tagline': 'A <b>yabai</b> status bar widget for <b>Übersicht</b>',

    'wifi-active': 'Awesome wifi',
    'wifi-inactive': 'Disabled',
    'wifi-enabling': 'Enabling wifi...',
    'wifi-disabling': 'Disabling wifi...',
    'mic-enabling': 'Enabling microphone...',
    'mic-disabling': 'Disabling microphone...'
  },
  fr: {
    'home-title': 'simple-bar - Un widget pour yabai & Übersicht',

    'introduction-title': 'simple-bar',
    'introduction-tagline': 'Un widget pour <b>yabai</b> & <b>Übersicht</b>',

    'wifi-active': 'Votre wifi',
    'wifi-inactive': 'Désactivé',
    'wifi-enabling': 'Activation du wifi...',
    'wifi-disabling': 'Désactivation du wifi...',
    'mic-enabling': 'Activation du microphone...',
    'mic-disabling': 'Désactivation du microphone...'
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
    sound: 60
  }
}

export const appIcons = {
  Code: CodeIcon,
  Chrome: GoogleChromeIcon,
  Skype: SkypeIcon,
  Slack: SlackIcon
}
