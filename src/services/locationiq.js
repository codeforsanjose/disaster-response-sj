const Geocoder = {
    key: 'api key here',
    endpoints: {
      forwardGeocode: 'https://us1.locationiq.com/v1/search.php?key=',
      reverseGeocode: 'https://us1.locationiq.com/v1/reverse.php?key='
    },

  }

  checkResponseJSON(response) {
    /*
    Checks the http response from fetch requests for errors. If it contains errors, it will reject the Promise with that relevant status codes.
    Args: http response (obj) - passed from a fetch function
    Return: either json response (obj) or Promise reject function containing response status and status text (obj)
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

  checkAPIErrors(JSON) {
    /*
    Checks if for an error returned from the API side ie unable to geocode a query or no results.
    Meant to be used after checking for connection errors in the response first because this just checks
    if the json response has a key with specifically 'error'
    Args: json (obj) - the json object returned from response.json()
    Return: either json response (obj) or Promise reject function containing response status and status text (obj)
    */
    if (JSON.error) {
      // to throw some error info back to the catch statement
      return Promise.reject({
        status: 'API Encountered an Error, check that valid data inputted',
        statusText: JSON.error
      })
    } else {
      return JSON
    }
  }

  getLatLngJSON(settings) {
    /*
    Fetches a json response containing the lat lng coordinates and other place information from the api based on the passed in street address.
    Args: settings (obj) - config obj containing the address strings to query aka street address, zip, city, and state
    Return: JSON response promise w/ coordinate info (obj)
    */
    const {address, zip, city, state} = settings;
    // need to escape special characters in the address to be a valid URL string
    const encodedAddress = encodeURIComponent(address + ', ' + city + ', ' + state + ' ' + zip);
    const apiURL = this.endpoints.forwardGeocode +
                   this.key +
                   '&q=' +
                   encodedAddress +
                   '&format=json';

    return fetch(apiURL)
      .then(response => this.checkResponseJSON(response))
      .then(json => this.checkAPIErrors(json))
  }

  getAddressJSON(settings) {
    /*
    Fetches a json response containing the street and other place information from the api based on the passed in lat lng coordinates.
    Args: settings (obj) - config obj containing the address strings to query aka street address, zip, city, and state
    Return: JSON response promise w/ street address info (obj)
    */
    const {lat, lng} = settings;
    const apiURL = this.endpoints.reverseGeocode +
                   this.key +
                   '&lat=' +
                   lat +
                   '&lon=' +
                   lng +
                   '&format=json';

    return fetch(apiURL)
      .then(response => this.checkResponseJSON(response))
      .then(json => this.checkAPIErrors(json))
  }

}

export {
  Geocoder
}
