const KEY = process.env.REACT_APP_LOCATION_IQ_KEY;
const ENDPOINTS = {
	forwardGeocode: 'https://us1.locationiq.com/v1/search.php?key=',
  reverseGeocode: 'https://us1.locationiq.com/v1/reverse.php?key='
};

const encodeAddress = (endpoint, {address, zip, city, state}) => {
	/*
  Formats address into a valid query string to append to the endpoint URL.
  Args: endpoint (str) - url including the api key
        address components (obj) - object containing address components formatted: {address: '123 fake st.', zip: '94560', city: 'San Jose', state: 'CA'}
  Return: formatted address query (str)
  */
  // need to escape special characters in the address to be a valid URL string
  const encodedAddress = encodeURIComponent(`${address}, ${city}, ${state} ${zip}`);

  return `${endpoint}&q=${encodedAddress}&format=json`
}

const encodeLatLng = (endpoint, {lat, lng}) => {
	/*
  Formats latitude/longitude coordinates into a valid query string to append to the endpoint URL.
  Args: endpoint (str) - url including the api key
        latitude/longitude coordinates (obj) - object containing the latitude and longitude values: {lat: 37.12312, lng: -121.12314}
  Return: formatted lat/lng query (str)
  */
  return `${endpoint}&lat=${lat}&lon=${lng}&format=json`
}

const responseToJSON = (response) => {
  /*
  Checks the http response from a fetch request for errors. If it contains errors, it will reject the Promise with relevant status codes.
  Args: http response (obj) - passed from a fetch function
  Return: Success: json response (obj) - api payload in json format
          Fail: Rejected Promise (obj) containing response status code (int) and status text (str)
  */
  if (response.ok) {
    return response.json();
  } else {
    const {status, statusText} = response;
    // throw some error info back to the catch statement
    return Promise.reject({
      status,
      statusText
    });
  }
}

const get = async (queryURL) => {
  /*
  Fetches a response from the geocoding api based on the passed query url string.
  Args: queryURL (str) - endpoint url w/ api key and encoded request embedded
  Return: http response (obj)
  */
  const response = await fetch(queryURL);

  return response;
}

const createGetter = ({endpoint, encoder, getter, formatter}) => {
  /*
  Predefines getter that fetches from a specified endpoint, encodes the query, and formats it as a desired data type. Closure creates getter function with presets.
  Args: endpoint url w/ key (str), query encoding function (obj), getter function (obj), response data formatting function (obj)
  Return: getter function (obj) - preset async function w/ parameter for query object, uses passed in functions/endpoint to encode the query, make the fetch request, and format response as a data type
  */
  return async (query) => {
      const queryString = encoder(endpoint, query)
      const response = await getter(queryString)
      const json = await formatter(response);

      return json
  }
}

const latLngURL = ENDPOINTS.forwardGeocode + KEY;
const addressURL = ENDPOINTS.reverseGeocode + KEY;

// build preset getter functions for each type of geocoding api request
const getLatLng = createGetter({endpoint: latLngURL,
                                encoder: encodeAddress,
                                getter: get,
                                formatter: responseToJSON});
const getAddress = createGetter({endpoint: addressURL,
                                encoder: encodeLatLng,
                                getter: get,
                                formatter: responseToJSON});

export {
  ENDPOINTS,
  encodeAddress,
  encodeLatLng,
  responseToJSON,
  get,
  createGetter,
  getLatLng,
  getAddress
}
