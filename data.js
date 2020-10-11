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
      'Always keep track of  the <b>focused window</b> and its application <b>name</b> and <b>title</b>.',
    'feature-2-title': 'Spaces display',
    'feature-2-description':
      'This widget goal is to display <b>each one of your spaces</b> and for each of them show you <b>all opened apps</b>. The currently focused space is highlited.<br/><br/>You can directy <b>go to a specific space</b> simply <b>by clicking on it</b>, no need to repeat five time the same gesture anymore!<br/><br/><span><i>Only with SIP disabled:</i><br/><b>Create</b>, <b>move</b> and <b>destroy</b> worspaces!</span>',
    'feature-3-title': 'Global information',
    'feature-3-description':
      'Stay updated with a selection of data widgets: <b>current browser song</b>, <b>Spotify current track</b> (with play/pause state), <b>battery level</b>, <b>microphone & sound</b>, <b>wifi</b>, <b>date & time</b>.</br></br><b>Some of them are interactive</b>: play/pause Spotify, mute/unmute microphone, toggle wifi on click.',
    'feature-4-title': 'Settings module',
    'feature-4-description':
      'Playing with simple-bar settings, you can for example <b>customize its layout</b> or <b>enable/disable individual global information widgets</b>.</br></br>Try it out to discover every possibilities!'
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
      'Gardez tout le temps à portée de vue la <b>fenêtre courante</b> ainsi que le <b>nom</b> et le <b>titre</b> de celle-ci.',
    'feature-2-title': 'Affichage des espaces de travail',
    'feature-2-description':
      "Le but de ce widget est de représenter <b>chacun de vos espaces de travail</b> et pour chacun d'entre eux d'afficher <b>toutes les applications ouvertes</b>. L'espace courant est mis en avant.<br/><br/>Vous pouvez <b>vous rendre directement à une espace</b> simplement <b>en cliquant dessus</b>, plus besoin de répéter 5 fois le même geste !<br/><br/><span><i>Seulement en désactivant la SIP :</i><br/><b>Créez</b>, <b>déplacez</b> et <b>supprimez</b> des espaces !</span>",
    'feature-3-title': 'Information générales',
    'feature-3-description':
      "Restez à jour d'un coup d'oeil rapide à l'aide de la sélection de widgets suivante : <b>musique en cours dans votre navigateur</b>, <b>musique en cours dans l'appli Spotify</b>, <b>niveau de batterie</b>, <b>microphone & volume sonore</b>, <b>wifi</b>, <b>date & heure</b>.</br></br><b>Certains d'entres eux sont interactifs</b> : mettez Spotify sur pause, coupez/allumez le microphone, désactivez le wifi au clic.",
    'feature-4-title': 'Paramètres',
    'feature-4-description':
      "En jouant avec les paramètres de simple-bar, vous pouvez par exemple <b>changer sa disposition</b> or <b>activer/désactivez certains widgets d'informations</b>.</br></br>Essayez le afin de découvrir toutes les possibilités !"
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
