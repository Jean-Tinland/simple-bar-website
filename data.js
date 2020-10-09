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

    'simple-bar-demo-tooltip': 'Start/stop demo',

    'menu-features': 'Features',
    'menu-compatibility': 'Compatibility & requirements',
    'menu-installation': 'Installation',

    'features-subtitle': '<span>simple-bar</span> is splitted in <b>4</b> main widgets',

    'feature-1-title': 'Current process name',
    'feature-1-description':
      'Always keep track of  the <b>focused window</b> and its application <b>name</b> and <b>title</b>.'
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

    'simple-bar-demo-tooltip': 'Démarrer/arrêter la demo',

    'menu-features': 'Fonctionnalités',
    'menu-compatibility': 'Compatibilité & pré-requis',
    'menu-installation': 'Installation',

    'features-subtitle': '<span>simple-bar</span> est composé de <b>4</b> widgets principaux',

    'feature-1-title': 'Nom du processus courant',
    'feature-1-description':
      'Gardez tout le temps à portée de vue la <b>fenêtre courante</b> ainsi que le <b>nom</b> et le <b>titre</b> de celle-ci.'
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
