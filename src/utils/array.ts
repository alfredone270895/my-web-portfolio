export type AscDesc = 'asc' | 'desc';

/**
 * Flat a multidimensional array with better performance
 * @param routes
 */
export function flat<T>(routes: T[][]): T[] {
  let flattedArray = [];
  for (let i = 0; i < routes.length; i++) {
    let current = routes[i];
    for (let j = 0; j < routes[i].length; j++) flattedArray.push(current[j]);
  }
  return flattedArray;
}

/**
 * Wrapped sort function
 * @param arr
 * @param key
 * @param ascDesc
 */
export function sortByKey<T>(arr: T[], key: keyof T, ascDesc: AscDesc = 'asc') {
  return arr.sort((a, b) =>
    ascDesc === 'desc'
      ? Number(a[key]) - Number(b[key])
      : Number(a[key]) - Number(b[key]),
  );
}
