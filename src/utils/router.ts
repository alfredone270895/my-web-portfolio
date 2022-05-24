import * as utils from './local-storage';

const localStorageLastLocationKey: string = 'last-location';

export function acceptLocation(lastLocation: Location) {
  return !!(
    lastLocation &&
    lastLocation.pathname &&
    lastLocation.pathname !== '/' &&
    lastLocation.pathname.indexOf('auth') === -1 &&
    lastLocation.pathname !== '/logout'
  );
}

export function saveLastLocation(lastLocation: Location) {
  if (acceptLocation(lastLocation)) {
    utils.setStorage(
      localStorageLastLocationKey,
      JSON.stringify(lastLocation),
      120,
    );
  }
}

export function forgotLastLocation() {
  utils.removeStorage(localStorageLastLocationKey);
}

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

export function getCurrentUrl(location: Location) {
  return location.pathname.split(/[?#]/)[0];
}

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
