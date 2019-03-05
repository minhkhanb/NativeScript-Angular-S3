export const API_KEY = 'AIzaSyBAEehe8qH1uRuq4a3GFPrSuxld3tEBQ6Y';

export const getGeoCodeRequestUrl = (latitude, longtitude) => `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longtitude}&key=${API_KEY}`;
