const KEY = process.env.REACT_APP_LOCATION_IQ_KEY;
const ENDPOINTS = {
	forwardGeocode: 'https://us1.locationiq.com/v1/search.php?key=',
  reverseGeocode: 'https://us1.locationiq.com/v1/reverse.php?key='
};

const encodeAddress = ({address, zip, city, state}) => {
	/*
  Formats address into a valid query string to append to the endpoint URL.
  Args: address components (obj) - object containing address components formatted: {address: '123 fake st.', zip: '94560', city: 'San Jose', state: 'CA'}
  Return: formatted address query (str)
  */
  // need to escape special characters in the address to be a valid URL string
  const encodedAddress = encodeURIComponent(`${address}, ${city}, ${state} ${zip}`);

  return `&q=${encodedAddress}&format=json`
}

const encodeLatLng = ({lat, lng}) => {
	/*
  Formats latitude/longitude coordinates into a valid query string to append to the endpoint URL.
  Args: latitude/longitude coordinates (obj) - object containing the latitude and longitude values: {lat: 37.12312, lng: -121.12314}
  Return: formatted lat/lng query (str)
  */
  return `&lat=${lat}&lon=${lng}&format=json`
}

const responseToJSON = (response) => {
  /*
  Checks the http response from fetch requests for errors. If it contains errors, it will reject the Promise with that relevant status codes.
  Args: http response (obj) - passed from a fetch function
  Return: Success: json response (obj) - api payload in json format
          Fail: Rejected Promise containing response status and status text (obj)
  */
  if (response.ok) {
    return response.json();
  } else {
    // throw some error info back to the catch statement
    return Promise.reject({
      status: response.status,
      statusText: response.statusText
    });
  }
}

const checkAPIErrors = (JSON) => {
  /*
  Checks for an error returned from the API side ie unable to geocode a query or no results. Use after checking for http errors in the response because this just checks if the json response has a key with specifically 'error'
  Args: json (obj) - the json object returned from response.json()
  Return: Success: json response (obj)
          Fail: Rejected Promise containing response status and status text (obj)
  */
  if (JSON.error) {
    // to throw some error info back to the catch statement
    return Promise.reject({
      status: 'The Geocoding API ran into an error while processing your search, please check that valid data was inputted and that the API is working correctly. This error happens if your search reaches the API server, but the Geocoding API is unable to give you results for your search.',
      statusText: JSON.error
    })
  } else {
    return JSON
  }
}

const formatJSON = async (response) => {
  /*
  Formats an http response into JSON and checks for validates the data.
  Args: http response (obj)
  Return: Success: JSON response array (arr)
  				Error: Rejected Promise containing error status and status text (obj)
  */
  try {
    const json = await responseToJSON(response);

    // no async ops in this check
    return checkAPIErrors(json);
  }
  catch(error) {
    return error
  }
}

const get = async ({url, formatter, encoder}, query) => {
  /*
  Fetches a response from the geocoding api based on the passed query, using the specified api URL, response formatting, and query formatting encoder.
  Args: settings (obj) - config obj contains endpoint url w/ api key, formatter function to process response, query encoder function, and the query obj itself
  Return: http response (obj)
  */
  // construct the URL to fetch
  const apiURL = url + encoder(query);
  const response = await fetch(apiURL);

  return formatter(response);
}

const createGetter = (url, formatter, encoder) => {
  /*
  Predefine api key, endpoint url, and query encoding function for a desired type of get request so you don't have to enter environment info every request.
  Args: api key (str), endpoint url (str), query encoding function (obj)
  Return: getter function (obj) - with preset args, except the query
  */
	return get.bind(this, {url, formatter, encoder})
}

const latLngApiURL = ENDPOINTS.forwardGeocode + key;
const addressApiURL = ENDPOINTS.reverseGeocode + key;

// build preset getter functions for each type of geocoding api request
const getLatLng = createGetter(latLngApiURL, formatJSON, encodeAddress);
const getAddress = createGetter(addressApiURL, formatJSON, encodeLatLng);

export {
  ENDPOINTS,
  encodeAddress,
  encodeLatLng,
  checkResponseJSON,
  checkAPIErrors,
  formatJSON,
  get,
  createGetter,
  getLatLng,
  getAddress
}
