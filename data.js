import { GoogleChromeIcon, SkypeIcon, SlackIcon, CodeIcon } from './components/icons'

export const locales = {
  en: {
    'home-title': 'simple-bar - An Übersicht status bar widget for yabai',

    'introduction-title': 'simple-bar',
    'introduction-tagline': 'An <span>Übersicht</span> status bar widget for <span>yabai</span>',

    'wifi-active': 'Awesome wifi',
    'wifi-inactive': 'Disabled',
    'wifi-enabling': 'Enabling wifi...',
    'wifi-disabling': 'Disabling wifi...',
    'mic-enabling': 'Enabling microphone...',
    'mic-disabling': 'Disabling microphone...',

    'battery-more-info-not-charging': 'Not charging',
    'battery-more-info-low': 'Low battery',
    'sound-more-info-low': 'Volume low',
    'sound-more-info-no-volume': 'No volume',
    'sound-more-info-muted': 'Muted',
    'date-more-info-long': 'Long date format',
    'time-more-info-12h': '12h time format',

    'menu-features': 'Features',
    'menu-compatibility': 'Compatibility & requirements',
    'menu-installation': 'Installation',

    'features-subtitle': 'simple-bar is splitted in 4 main widgets'
  },
  fr: {
    'home-title': 'simple-bar - Un widget Übersicht pour yabai',

    'introduction-title': 'simple-bar',
    'introduction-tagline': 'Un widget <span>Übersicht</span> pour <span>yabai</span>',

    'wifi-active': 'Votre wifi',
    'wifi-inactive': 'Désactivé',
    'wifi-enabling': 'Activation du wifi...',
    'wifi-disabling': 'Désactivation du wifi...',
    'mic-enabling': 'Activation du microphone...',
    'mic-disabling': 'Désactivation du microphone...',

    'battery-more-info-not-charging': 'Non branchée',
    'battery-more-info-low': 'Batterie faible',
    'sound-more-info-low': 'Volume bas',
    'sound-more-info-no-volume': 'Pas de volume',
    'sound-more-info-muted': 'Muet',
    'date-more-info-long': 'Date en format long',
    'time-more-info-12h': 'Heure au format AM/PM',

    'menu-features': 'Fonctionnalités',
    'menu-compatibility': 'Compatibilité & pré-requis',
    'menu-installation': 'Installation',

    'features-subtitle': 'simple-bar est composé de 4 widgets principaux'
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

export const introductionMenuItems = (lang) => [
  {
    code: 'features',
    name: locales[lang]['menu-features']
  },
  {
    code: 'compatibility',
    name: locales[lang]['menu-compatibility']
  },
  {
    code: 'installation',
    name: locales[lang]['menu-installation']
  }
]
