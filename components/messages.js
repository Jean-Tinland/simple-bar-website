import { locales } from '../data'

const message = (lang, id) => {
  if (!locales || !locales[lang]) return id
  const messages = locales[lang]
  return messages[id] || `??${id}??`
}

export default message
