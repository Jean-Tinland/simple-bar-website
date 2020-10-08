import { GoogleChromeIcon, SkypeIcon, SlackIcon, CodeIcon } from './components/icons'

export const locales = {
  en: {
    'home-title': 'simple-bar - A yabai status bar widget for Übersicht',

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

    'menu-features': 'Features',
    'menu-compatibility': 'Compatibility & requirements',
    'menu-installation': 'Installation'
  },
  fr: {
    'home-title': 'simple-bar - Un widget pour yabai & Übersicht',

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

    'menu-features': 'Fonctionnalités',
    'menu-compatibility': 'Compatibilité & pré-requis',
    'menu-installation': 'Installation'
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
