import * as React from 'react'

const Icon = ({ width = 24, height = 24, children, ...props }) => (
  <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} {...props}>
    {children}
  </svg>
)

export const ChargingIcon = (props) => (
  <Icon {...props}>
    <path d="M7 2v11h3v9l7-12h-4l3-8z" />
  </Icon>
)

export const WifiIcon = (props) => (
  <Icon {...props}>
    <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
  </Icon>
)

export const WifiOffIcon = (props) => (
  <Icon {...props}>
    <path d="M21 11l2-2c-3.73-3.73-8.87-5.15-13.7-4.31l2.58 2.58c3.3-.02 6.61 1.22 9.12 3.73zM9 17l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm10-4c-1.08-1.08-2.36-1.85-3.72-2.33l3.02 3.02.7-.69zM3.41 1.64L2 3.05 5.05 6.1C3.59 6.83 2.22 7.79 1 9l2 2c1.23-1.23 2.65-2.16 4.17-2.78l2.24 2.24C7.79 10.89 6.27 11.74 5 13l2 2c1.35-1.35 3.11-2.04 4.89-2.06l7.08 7.08 1.41-1.41L3.41 1.64z" />
  </Icon>
)

export const VolumeHighIcon = (props) => (
  <Icon {...props}>
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
  </Icon>
)

export const VolumeLowIcon = (props) => (
  <Icon {...props}>
    <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z" />
  </Icon>
)

export const NoVolumeIcon = (props) => (
  <Icon {...props}>
    <path d="M7 9v6h4l5 5V4l-5 5H7z" />
  </Icon>
)

export const VolumeMutedIcon = (props) => (
  <Icon {...props}>
    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
  </Icon>
)

export const DateIcon = (props) => (
  <Icon {...props}>
    <path d="M21 3h-3V1h-2v2H8V1H6v2H3v18h18V3zm-2 16H5V8h14v11zM7 10h5v5H7v-5z" />
  </Icon>
)

export const CalendarIcon = (props) => (
  <Icon {...props}>
    <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
  </Icon>
)

export const ClockIcon = (props) => (
  <Icon {...props}>
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
  </Icon>
)

export const CodeIcon = (props) => (
  <Icon {...props}>
    <path d="M8.54 14.69L2.6 19.3 0 18.02V5.99l2.58-1.3L8.5 9.33 17.85 0 24 2.44v19.08L17.88 24l-9.34-9.31zm9.12 1.62V7.7L12.06 12l5.6 4.3zM2.8 14.76l2.94-2.66L2.8 9.18v5.58z" />
  </Icon>
)

export const GoogleChromeIcon = (props) => (
  <Icon {...props}>
    <path d="M12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9z" />
    <path d="M12 17.99a6 6 0 0 1-5.94-5.18L1.92 5.64v-.02l-.47.67c-.11.21-.23.42-.33.64l-.22.52c-.15.38-.29.76-.4 1.15l-.14.48c-.06.22-.1.44-.15.67l-.08.47-.08.66-.04.52c-.02.4-.02.8 0 1.2l.04.52.08.66.08.47.15.67.13.48.2.62.21.54.22.52.33.63.15.3.07.1c.13.23.28.45.42.66l.24.35c.14.2.3.38.45.57l.31.37.43.43c.14.14.28.29.43.42l.37.31.56.45.35.24c.22.15.43.3.66.42l.1.07.3.15c.2.12.42.23.64.33l.06.03.3.13c.81.34 1.66.59 2.53.75l3.42-5.94c-.4.08-.81.13-1.24.13v.01z" />
    <path d="M23.97 11.17l-.02-.2c-.08-1-.5-2.45-.83-3.42h-7.1a5.97 5.97 0 0 1-.29 9.13L11.51 24c1.49 0 3.49-.27 4.92-.84l.05-.02.08-.03c.94-.39 1.83-.9 2.65-1.5l.02-.02c.37-.28.71-.57 1.04-.88l.05-.05.17-.17c.72-.72 1.35-1.53 1.86-2.4l.05-.08.1-.2c.17-.3.32-.6.46-.92l.18-.41c.12-.3.22-.6.31-.9l.13-.38c.11-.42.2-.84.27-1.27l.03-.24c.06-.36.1-.73.11-1.1v-.3c.01-.37 0-.75-.02-1.12z" />
    <path d="M22.4 6c-.25-.44-.54-.85-.83-1.24l-.1-.12a11.6 11.6 0 0 0-.84-.98l-.2-.2c-.33-.32-.67-.63-1.02-.9l-.08-.07c-.4-.3-.81-.58-1.24-.83l-.08-.06-.33-.17c-.19-.1-.37-.2-.57-.29L16.55.9l-.47-.19L15.4.5 15 .4c-.25-.07-.5-.12-.75-.17L13.9.15l-.74-.1-.4-.03C12.54 0 12.33 0 12.12 0h-.52l-.4.03a12 12 0 0 0-2.68.49l-.18.04-.67.25-.42.17-.54.26-.52.26-.2.1-.28.19c-.34.2-.67.43-.99.67l-.41.33-.5.44-.3.3c-.18.17-.36.36-.52.54l-.11.14 3.41 5.92A6 6 0 0 1 12 5.99h10.4V6z" />
  </Icon>
)

export const SkypeIcon = (props) => (
  <Icon {...props}>
    <path d="M23.3 14.55C25.06 6.74 18.2-.35 10.18 1 5.81-1.7 0 1.36 0 6.55c0 1.2.33 2.33.91 3.3C-.7 17.69 6.2 24.69 14.22 23.23c.94.5 2 .78 3.14.78a6.55 6.55 0 0 0 5.95-9.45zm-11.2 5.33c-2.35 0-4.63-.57-5.99-2.5-2.02-2.85.64-4.28 1.95-3.2 1.1.93.75 3.15 3.95 3.15 1.41 0 3.15-.6 3.15-2 0-2.82-6.24-1.49-8.73-4.55a3.77 3.77 0 0 1 .04-4.55c1.95-2.51 7.68-2.67 10.14-.77 2.28 1.76 1.66 4.1-.17 4.1-2.2 0-1.05-2.89-4.61-2.89-2.58 0-3.6 1.84-1.78 2.73 2.42 1.2 8.75.83 8.75 5.6 0 3.36-3.25 4.88-6.7 4.88z" />
  </Icon>
)

export const SlackIcon = (props) => (
  <Icon {...props}>
    <path d="M8.8 12.7a2.5 2.5 0 0 0-2.5 2.5v6.3a2.5 2.5 0 0 0 5 0v-6.3c0-1.4-1-2.5-2.5-2.5zM0 15.2a2.5 2.5 0 0 0 5 0v-2.6H2.6A2.5 2.5 0 0 0 0 15.2zM8.8 0a2.5 2.5 0 0 0 0 5h2.6V2.5c0-1.4-1.2-2.5-2.6-2.5zM2.5 11.4h6.3a2.5 2.5 0 0 0 0-5H2.5a2.5 2.5 0 0 0 0 5zM21.5 6.3a2.5 2.5 0 0 0-2.6 2.5v2.6h2.6a2.5 2.5 0 0 0 0-5zM12.6 2.5v6.3a2.5 2.5 0 0 0 5 0V2.5a2.5 2.5 0 0 0-5 0zM17.7 21.5c0-1.4-1.1-2.5-2.5-2.5h-2.6v2.5a2.5 2.5 0 0 0 5 0zM21.5 12.6h-6.3a2.5 2.5 0 0 0 0 5.1h6.3a2.5 2.5 0 0 0 0-5z" />
  </Icon>
)

export const GitHubIcon = (props) => (
  <Icon {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </Icon>
)

export const MicOff = (props) => (
  <Icon {...props}>
    <path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z" />
  </Icon>
)

export const MicOn = (props) => (
  <Icon {...props}>
    <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
  </Icon>
)

export const EyeIcon = (props) => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.52 11.9c.62-.93 1.86-2.63 3.55-4.08C7.77 6.36 9.79 5.25 12 5.25c2.21 0 4.24 1.11 5.93 2.57a20.56 20.56 0 0 1 3.55 4.08.18.18 0 0 1 0 .2c-.62.93-1.86 2.63-3.55 4.08-1.7 1.46-3.72 2.57-5.93 2.57-2.2 0-4.24-1.11-5.93-2.57a20.42 20.42 0 0 1-3.55-4.08.18.18 0 0 1 0-.2zM12 3C9.03 3 6.5 4.49 4.6 6.12a22.78 22.78 0 0 0-3.95 4.53 2.43 2.43 0 0 0 0 2.7c.67 1.01 2.05 2.9 3.95 4.53C6.5 19.51 9.03 21 12 21c2.97 0 5.5-1.49 7.4-3.12a22.74 22.74 0 0 0 3.96-4.53 2.43 2.43 0 0 0 0-2.7 22.74 22.74 0 0 0-3.96-4.53C17.5 4.49 14.97 3 12 3zm0 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
    />
  </Icon>
)

export const StarIcon = (props) => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0a1.25 1.25 0 0 1 1.09.7l3.05 6.47 6.82 1.04c.22.03.43.13.6.29.18.15.31.35.38.57a1.33 1.33 0 0 1-.3 1.3l-4.94 5.04 1.16 7.1c.04.24.02.48-.07.7-.08.22-.23.4-.4.55a1.18 1.18 0 0 1-1.29.1L12 20.5l-6.1 3.35a1.17 1.17 0 0 1-1.28-.1 1.26 1.26 0 0 1-.4-.54 1.33 1.33 0 0 1-.08-.7l1.17-7.1-4.94-5.03A1.33 1.33 0 0 1 .43 8.5c.18-.16.39-.26.61-.3l6.82-1.03L10.91.71c.1-.21.26-.4.45-.52.2-.12.41-.19.64-.19zm0 4.14L9.76 8.9c-.09.18-.22.34-.38.46s-.34.2-.54.23l-5.01.76 3.63 3.7a1.28 1.28 0 0 1 .35 1.13l-.86 5.23 4.49-2.47a1.17 1.17 0 0 1 1.13 0l4.48 2.47-.85-5.23a1.33 1.33 0 0 1 .35-1.13l3.62-3.7-5.01-.76c-.2-.03-.38-.1-.54-.23a1.26 1.26 0 0 1-.38-.46L12 4.14z"
    />
  </Icon>
)

export const ForkIcon = (props) => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.75 3.86c0 .34-.14.66-.38.9a1.33 1.33 0 0 1-1.86 0 1.27 1.27 0 0 1 0-1.81 1.33 1.33 0 0 1 1.86 0c.24.24.38.56.38.9zm0 3.63c.88-.3 1.61-.9 2.08-1.68A3.79 3.79 0 0 0 7.98.9 3.99 3.99 0 0 0 2.9.9a3.84 3.84 0 0 0-.86 4.9c.47.78 1.2 1.38 2.09 1.68V9c0 1.03.41 2.01 1.15 2.74a3.98 3.98 0 0 0 2.78 1.13h2.63v3.64c-.88.3-1.62.9-2.09 1.69a3.8 3.8 0 0 0 .86 4.9 3.99 3.99 0 0 0 5.08 0 3.84 3.84 0 0 0 .86-4.9 3.92 3.92 0 0 0-2.09-1.69v-3.64h2.63c1.04 0 2.04-.41 2.78-1.13A3.82 3.82 0 0 0 19.88 9V7.5c.87-.31 1.6-.9 2.08-1.7A3.8 3.8 0 0 0 21.1.9a3.99 3.99 0 0 0-5.08 0 3.84 3.84 0 0 0-.85 4.9c.47.8 1.2 1.39 2.08 1.7V9c0 .34-.14.67-.38.9-.25.25-.58.38-.93.38H8.06c-.35 0-.68-.13-.93-.37A1.27 1.27 0 0 1 6.75 9V7.5zm6.56 12.65c0 .34-.14.67-.38.91a1.33 1.33 0 0 1-1.86 0 1.27 1.27 0 0 1 0-1.82 1.33 1.33 0 0 1 1.86 0c.24.24.38.57.38.91zm5.25-15c.35 0 .68-.13.93-.38a1.27 1.27 0 0 0 0-1.81 1.33 1.33 0 0 0-1.86 0 1.27 1.27 0 0 0 0 1.81c.25.25.58.38.93.38z"
    />
  </Icon>
)

export const PlayIcon = (props) => (
  <Icon {...props}>
    <path d="M3 22v-20l18 10-18 10z" />
  </Icon>
)

export const StopIcon = (props) => (
  <Icon {...props}>
    <path d="M0 0h24v24H0z" />
  </Icon>
)

export const CopyIcon = (props) => (
  <Icon {...props}>
    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
  </Icon>
)

export const CheckIcon = (props) => (
  <Icon {...props}>
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
  </Icon>
)

export const DefaultIcon = (props) => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 2a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm1.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM9 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM11.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
    />
  </Icon>
)
