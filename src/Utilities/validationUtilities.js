const validateEmail = (email, errorMessage) => {
    let emailPatternReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!emailPatternReg.test(email)) {
        errorMessage += 'Please enter a valid email\n'
    }
    return errorMessage
}

const isInvalid = {
  sanJoseRegionalPoints: {
    // constants for use in some validator functions
    maxLong: -118,
    minLong: -124,
    maxLat: 41,
    minLat: 34,
    maxRadius: 10
  },
  email: (email) => {
    if ( email.length === 0 && validateEmail(email) ) {
      return 'Invalid email, please re-enter valid email'
    }
  },
  longitude: function (long) {
    if ( this.sanJoseRegionalPoints.minLong > long || long > this.sanJoseRegionalPoints.maxLong ) {
      return 'Invalid longitude, please re-enter valid longitude between ' + this.sanJoseRegionalPoints.minLong + ' & ' + this.sanJoseRegionalPoints.maxLong
    }
  },
  latitude: function (lat) {
    if ( this.sanJoseRegionalPoints.minLat > lat || lat > this.sanJoseRegionalPoints.maxLat ) {
      return 'Invalid latitude, please re-enter valid longitude between ' + this.sanJoseRegionalPoints.minLat + ' & ' + this.sanJoseRegionalPoints.maxLat
    }
  },
  radius: function (radius) {
    if ( 0 > radius || radius > this.sanJoseRegionalPoints.maxRadius ) {
      return 'Invalid radius, please re-enter valid radius between 0 & ' + this.sanJoseRegionalPoints.maxRadius
    }
  },
  field: (fieldName, fieldInput) => {
    if ( fieldInput.length === 0 && (fieldName !== 'updates' && fieldName !== 'updateItem') ) {
      return 'Invalid ' + fieldName + ', Please re-enter a valid ' + fieldName
    }
  },
  withDefault: function(validation, input) {
    /*
    Tries to call one of the defined validation function but if the validation isn't defined
    use the default field validation function instead
    Args: validation (str) - name of the validation to attempt
          input (str) - the data to validate
    Return: results of the corresponding validation function (str)
    */
    try {
      return this[validation](input)
    }
    catch (e) {
      return this.field(validation, input)
    }
  }
}

export {
    validateEmail,
    isInvalid
}
