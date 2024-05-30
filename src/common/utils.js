export function swapMapper(mapper) {
  return Object.fromEntries(Object.entries(mapper).map(([key, value]) => [value, key]))
}
