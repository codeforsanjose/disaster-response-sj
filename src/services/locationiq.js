const endpoints = {
	forwardGeocode: 'https://us1.locationiq.com/v1/search.php?key=',
  reverseGeocode: 'https://us1.locationiq.com/v1/reverse.php?key='
}

const encodeAddress = ({address, zip, city, state}) => {
	/*
  Formats the address into a valid query string to append to the endpoint URL. Uses passed in address parts in an obj.
  Args: address components (obj) - object containing address components formatted like so: {address: '123 fake st.', zip: '94560', city: 'San Jose', state: 'CA'}
  Return: formatted address query (str) - address formatted as a query string
  */
  // need to escape special characters in the address to be a valid URL string
  const encodedAddress = encodeURIComponent(`${address}, ${city}, ${state} ${zip}`);

  return '&q=' +
         encodedAddress +
         '&format=json'
}

const encodeLatLng = ({lat, lng}) => {
	/*
  Formats the latitutde/longitude coordinates into a valid query string to append to the endpoint URL.
  Args: latitude/longitude coordinates (obj) - object containing the latitude and longitude values
  Return:
  */
  return '&lat=' +
      		lat +
      		'&lon=' +
      		lng +
      		'&format=json';
}

const checkResponseJSON = (response) => {
  /*
  Checks the http response from fetch requests for errors. If it contains errors, it will reject the Promise with that relevant status codes.
  Args: http response (obj) - passed from a fetch function
  Return: Success: json response (obj)
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
  Checksfor an error returned from the API side ie unable to geocode a query or no results. Use after checking for http errors in the response because this just checks if the json response has a key with specifically 'error'
  Args: json (obj) - the json object returned from response.json()
  Return: Success: json response (obj)
          Fail: Rejected Promise containing response status and status text (obj)
  */
  if (JSON.error) {
    // to throw some error info back to the catch statement
    return Promise.reject({
      status: 'The Geocoding API ran into an error while processing your search, please check that valid data was inputted and that the API is working correctly. This error happens if everything goes through, but the Geocoding API is unable to give you results for your search.',
      statusText: JSON.error
    })
  } else {
    return JSON
  }
}

const get = async ({key, endpoint, encoder}, query) => {
  /*
  Fetches a json response containing place information from the api based on the passed query and using the specified API key, endpoint URL, and encoder to format the query with.
  Args: settings (obj) - config obj containing the address strings to query aka street address, zip, city, and state
  Return: Success - JSON response array of found coordinates (array) after first returning a promise obj
  				Error - Error object containing status & statusText (obj)
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

const createClient = (key, endpoints) => {
	return {
  	get: {
    	 LatLng: get.bind(this, {key: key,
                               endpoint: endpoints.forwardGeocode,
                               encoder: encodeAddress}),
       Address: get.bind(this, {key: key,
                               endpoint: endpoints.reverseGeocode,
                               encoder: encodeLatLng})
    }
  }
}

export default {
  
}
