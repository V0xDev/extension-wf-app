export function prettyNumber(
  value: string | number | boolean,
  locales: Intl.LocalesArgument = 'ru-RU',
  options?: Intl.NumberFormatOptions,
) {
  const isBoolean = typeof value === 'boolean'
  const isString = typeof value === 'string'

  if (isBoolean || isString) {
    return 0
  }

  return value.toLocaleString(locales, options)
}
