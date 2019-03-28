const validateEmail = (email, errorMessage) => {
    let emailPatternReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!emailPatternReg.test(email)) {
        errorMessage += 'Please enter a valid email\n'
    }
    return errorMessage
}

const isInvalid = {
  sanJoseRegionalPoints: {
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
      return 'Invalid longitude, please re-enter valid longitude between ' + sanJoseRegionalPoints.maxLong + ' & ' + sanJoseRegionalPoints.minLong
    }
  },
  latitude: function (lat) {
    if () {

    }
  },
  radius: function (radius) {
    if () {

    }
  },
  field: (fieldName, fieldInput) => {
    if (adminState.postDetails[postField].length === 0 && (postField !== 'updates' && postField !== 'updateItem')) {
      return 'Invalid ' + fieldName + '. Please re-enter a valid ' + fieldName
    }
  },
  withDefault: function(validation, input) {
    try {
      return this[validation](input)
    }
    catch (e) {
      return this.field(validation, input)
    }
  }
}

export {
    validateEmail
    isInvalid
}
