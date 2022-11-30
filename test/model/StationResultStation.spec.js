/**
 * RadioManager
 * This OpenAPI 3 Document describes the functionality of the API v2 of RadioManager. Note that no rights can be derived from this Document and the true functionality of the API might differ.
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@pluxbox.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.radiomanager);
  }
}(this, function(expect, radiomanager) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new radiomanager.StationResultStation();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('StationResultStation', function() {
    it('should create an instance of StationResultStation', function() {
      // uncomment below and update the code to test StationResultStation
      //var instance = new radiomanager.StationResultStation();
      //expect(instance).to.be.a(radiomanager.StationResultStation);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new radiomanager.StationResultStation();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new radiomanager.StationResultStation();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new radiomanager.StationResultStation();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new radiomanager.StationResultStation();
      //expect(instance).to.be();
    });

    it('should have the property systemName (base name: "system_name")', function() {
      // uncomment below and update the code to test the property systemName
      //var instance = new radiomanager.StationResultStation();
      //expect(instance).to.be();
    });

    it('should have the property shortName (base name: "short_name")', function() {
      // uncomment below and update the code to test the property shortName
      //var instance = new radiomanager.StationResultStation();
      //expect(instance).to.be();
    });

    it('should have the property mediumName (base name: "medium_name")', function() {
      // uncomment below and update the code to test the property mediumName
      //var instance = new radiomanager.StationResultStation();
      //expect(instance).to.be();
    });

    it('should have the property website (base name: "website")', function() {
      // uncomment below and update the code to test the property website
      //var instance = new radiomanager.StationResultStation();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new radiomanager.StationResultStation();
      //expect(instance).to.be();
    });

    it('should have the property keywords (base name: "keywords")', function() {
      // uncomment below and update the code to test the property keywords
      //var instance = new radiomanager.StationResultStation();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new radiomanager.StationResultStation();
      //expect(instance).to.be();
    });

    it('should have the property sms (base name: "sms")', function() {
      // uncomment below and update the code to test the property sms
      //var instance = new radiomanager.StationResultStation();
      //expect(instance).to.be();
    });

    it('should have the property telephone (base name: "telephone")', function() {
      // uncomment below and update the code to test the property telephone
      //var instance = new radiomanager.StationResultStation();
      //expect(instance).to.be();
    });

    it('should have the property genreId (base name: "genre_id")', function() {
      // uncomment below and update the code to test the property genreId
      //var instance = new radiomanager.StationResultStation();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "language")', function() {
      // uncomment below and update the code to test the property language
      //var instance = new radiomanager.StationResultStation();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new radiomanager.StationResultStation();
      //expect(instance).to.be();
    });

    it('should have the property logoRectangle (base name: "logo_rectangle")', function() {
      // uncomment below and update the code to test the property logoRectangle
      //var instance = new radiomanager.StationResultStation();
      //expect(instance).to.be();
    });

    it('should have the property logo128x128 (base name: "logo_128x128")', function() {
      // uncomment below and update the code to test the property logo128x128
      //var instance = new radiomanager.StationResultStation();
      //expect(instance).to.be();
    });

    it('should have the property logo320x320 (base name: "logo_320x320")', function() {
      // uncomment below and update the code to test the property logo320x320
      //var instance = new radiomanager.StationResultStation();
      //expect(instance).to.be();
    });

    it('should have the property logo600x600 (base name: "logo_600x600")', function() {
      // uncomment below and update the code to test the property logo600x600
      //var instance = new radiomanager.StationResultStation();
      //expect(instance).to.be();
    });

    it('should have the property payOff (base name: "pay_off")', function() {
      // uncomment below and update the code to test the property payOff
      //var instance = new radiomanager.StationResultStation();
      //expect(instance).to.be();
    });

    it('should have the property ptyCode (base name: "pty_code")', function() {
      // uncomment below and update the code to test the property ptyCode
      //var instance = new radiomanager.StationResultStation();
      //expect(instance).to.be();
    });

    it('should have the property ptyType (base name: "pty_type")', function() {
      // uncomment below and update the code to test the property ptyType
      //var instance = new radiomanager.StationResultStation();
      //expect(instance).to.be();
    });

    it('should have the property stationKey (base name: "station_key")', function() {
      // uncomment below and update the code to test the property stationKey
      //var instance = new radiomanager.StationResultStation();
      //expect(instance).to.be();
    });

    it('should have the property timezone (base name: "timezone")', function() {
      // uncomment below and update the code to test the property timezone
      //var instance = new radiomanager.StationResultStation();
      //expect(instance).to.be();
    });

    it('should have the property metadataradioOrganisation (base name: "metadataradio_organisation")', function() {
      // uncomment below and update the code to test the property metadataradioOrganisation
      //var instance = new radiomanager.StationResultStation();
      //expect(instance).to.be();
    });

    it('should have the property metadataradioStationId (base name: "metadataradio_station_id")', function() {
      // uncomment below and update the code to test the property metadataradioStationId
      //var instance = new radiomanager.StationResultStation();
      //expect(instance).to.be();
    });

    it('should have the property startDays (base name: "start_days")', function() {
      // uncomment below and update the code to test the property startDays
      //var instance = new radiomanager.StationResultStation();
      //expect(instance).to.be();
    });

  });

}));
