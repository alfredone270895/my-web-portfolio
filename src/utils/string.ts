/**
 * Return a string with first letter capitalized
 * @param string
 * @return {string}
 */
export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
