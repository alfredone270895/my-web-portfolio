import * as utils from './local-storage';

const localStorageLastLocationKey: string = 'last-location';

/**
 * Check if location could be saved in history
 * @param lastLocation
 */
export function acceptLocation(lastLocation: Location) {
  return !!(
    lastLocation &&
    lastLocation.pathname &&
    lastLocation.pathname !== '/' &&
    lastLocation.pathname.indexOf('auth') === -1 &&
    lastLocation.pathname !== '/logout'
  );
}

/**
 * Save last web browser location
 * @param lastLocation
 */
export function saveLastLocation(lastLocation: Location) {
  if (acceptLocation(lastLocation)) {
    utils.setStorage(
      localStorageLastLocationKey,
      JSON.stringify(lastLocation),
      120,
    );
  }
}

/**
 * Forget last location from local storage
 */
export function forgotLastLocation() {
  utils.removeStorage(localStorageLastLocationKey);
}

/**
 * Get the last location saved in storage
 */
export function getLastLocation() {
  const defaultLocation = { pathname: '/', title: 'Dashboard' };
  const localStorateLocations = utils.getStorage(localStorageLastLocationKey);
  if (!localStorateLocations) {
    return { pathname: '/', title: 'Dashboard' };
  }
  try {
    return JSON.parse(localStorateLocations);
  } catch (error) {
    return defaultLocation;
  }
}

/**
 * Get current url with location
 * @param location
 */
export function getCurrentUrl(location: Location) {
  return location.pathname.split(/[?#]/)[0];
}

/**
 * Check if current location is active with url
 * @param location
 * @param url
 */
export function checkIsActive(location: Location, url: string) {
  const current = getCurrentUrl(location);
  if (!current || !url) {
    return false;
  }

  if (current === url) {
    return true;
  }

  return current.indexOf(url) > -1;
}
