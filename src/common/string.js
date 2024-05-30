/**
 * Return a copy of the string with trailing whitespace removed.
 * If chars is given and not None, remove characters in chars instead.
 *
 * @param {string} string
 * @param {string} chars
 */
export function rstrim(string, chars = null) {
  if (chars === null || chars === "") {
    return string.trimEnd();
  }

  while (string.endsWith(chars)) {
    string = string.slice(0, -1);
  }

  return string;
}

/**
 * Return a copy of the string with leading whitespace removed.
 * If chars is given and not None, remove characters in chars instead.
 *
 * @param {string} string
 * @param {string} chars
 */
export function lstrim(string, chars = null) {
  if (chars === null || chars === "") {
    return string.trimEnd();
  }

  while (string.startsWith(chars)) {
    string = string.slice(1);
  }

  return string;
}

/**
 * Return a copy of the string with leading and trailing whitespace removed.
 * If chars is given and not None, remove characters in chars instead.
 *
 * @param {string} string
 * @param {string} chars
 */
export function strim(string, chars = null) {
  if (chars === null || chars === "") {
    return string.trim();
  }

  string = lstrim(string, chars);
  string = rstrim(string, chars);

  return string;
}
