const KEY = process.env.REACT_APP_LOCATION_IQ_KEY;
export const ENDPOINTS = {
	forwardGeocode: 'https://us1.locationiq.com/v1/search.php?key=',
  reverseGeocode: 'https://us1.locationiq.com/v1/reverse.php?key='
};

export const encodeAddress = ({address, zip, city, state}) => {
	/*
  Formats address into a valid query string to append to the endpoint URL.
  Args: address components (obj) - object containing address components formatted: {address: '123 fake st.', zip: '94560', city: 'San Jose', state: 'CA'}
  Return: formatted address query (str)
  */
  // need to escape special characters in the address to be a valid URL string
  const encodedAddress = encodeURIComponent(`${address}, ${city}, ${state} ${zip}`);

  return `&q=${encodedAddress}&format=json`
}

export const encodeLatLng = ({lat, lng}) => {
	/*
  Formats latitude/longitude coordinates into a valid query string to append to the endpoint URL.
  Args: latitude/longitude coordinates (obj) - object containing the latitude and longitude values: {lat: 37.12312, lng: -121.12314}
  Return: formatted lat/lng query (str)
  */
  return `&lat=${lat}&lon=${lng}&format=json`
}

export const checkResponseJSON = (response) => {
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

export const checkAPIErrors = (JSON) => {
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

export const get = async ({key, endpoint, encoder}, query) => {
  /*
  Fetches a json response containing place information from the api based on the passed query and using the specified API key, endpoint URL, and encoder to format the query with.
  Args: settings (obj) - config obj containing the address strings to query aka street address, zip, city, and state
  Return: Success: JSON response array of found coordinates (array) after first returning a promise obj
  				Error: Rejected Promise containing error response status and status text (obj)
  */
  // construct the URL to fetch
  const apiURL = endpoint + key + encoder(query);

  try {
    const response = await fetch(apiURL);
    const json = await checkResponseJSON(response);

    // no async ops in this check
    const validatedJSON = checkAPIErrors(json);

    return validatedJSON
  }
  catch(error) {
    return error
  }
}

export const createGetter = (key, endpoint, encoder) => {
  /*
  Predefine api key, endpoint url, and query encoding function for a desired type of get request so you don't have to enter environment info every request.
  Args: api key (str), endpoint url (str), query encoding function (obj)
  Return: getter function (obj) - with preset args, except the query
  */
	return get.bind(this, {key, endpoint, encoder})
}

export const getLatLng = createGetter(KEY, ENDPOINTS.forwardGeocode, encodeAddress);
export const getAddress = createGetter(KEY, ENDPOINTS.reverseGeocode, encodeLatLng);
