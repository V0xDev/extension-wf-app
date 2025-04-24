export function prettyNumber(
  num: number,
  locales: Intl.LocalesArgument = 'ru-RU',
  options?: Intl.NumberFormatOptions,
) {
  return num.toLocaleString(locales, options)
}
