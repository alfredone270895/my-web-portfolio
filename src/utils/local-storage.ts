/**
 * Remove a key=>value on local storage with key name
 * @param key
 */
export function removeStorage(key: string) {
  try {
    localStorage.removeItem(key);
    localStorage.removeItem(`${key}_expiresIn`);
  } catch (e) {
    console.error(
      `removeStorage: Error removing key [${key}] from localStorage: ${JSON.stringify(
        e,
      )}`,
    );
    return false;
  }
  return true;
}

/**
 * Get storage key value with key id
 * @param key
 */
export function getStorage(key: string) {
  const now = Date.now(); // epoch time, lets deal only with integer
  // set expiration for storage
  let expiresIn = Number(localStorage.getItem(`${key}_expiresIn`));
  if (expiresIn === undefined || expiresIn === null) {
    expiresIn = 0;
  }

  expiresIn = Math.abs(expiresIn);
  if (expiresIn < now) {
    // Expired
    removeStorage(key);
    return null;
  }

  try {
    return localStorage.getItem(key);
  } catch (e) {
    console.error(
      `getStorage: Error reading key [${key}] from localStorage: ${JSON.stringify(
        e,
      )}`,
    );
    return null;
  }
}

/**
 * Set a storage key with value and expire date
 * @param key
 * @param value
 * @param expires
 */
export function setStorage(key: string, value: string, expires?: number) {
  if (expires === undefined || expires === null) {
    const now = Date.now(); // millisecs since epoch time, lets deal only with integer
    expires = now + 24 * 60 * 60 * 1000; // default: seconds for 1 day
  }
  try {
    localStorage.setItem(key, value);
    localStorage.setItem(`${key}_expiresIn`, expires.toString());
  } catch (e) {
    console.error(
      `setStorage: Error setting key [${key}] in localStorage: ${JSON.stringify(
        e,
      )}`,
    );
    return false;
  }
  return true;
}
