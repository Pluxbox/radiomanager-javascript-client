/**
 * RadioManager
 * RadioManager
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@pluxbox.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.2.2
 *
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
    instance = new radiomanager.StationResultStationStartDays();
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

  describe('StationResultStationStartDays', function() {
    it('should create an instance of StationResultStationStartDays', function() {
      // uncomment below and update the code to test StationResultStationStartDays
      //var instance = new radiomanager.StationResultStationStartDays();
      //expect(instance).to.be.a(radiomanager.StationResultStationStartDays);
    });

    it('should have the property monday (base name: "monday")', function() {
      // uncomment below and update the code to test the property monday
      //var instance = new radiomanager.StationResultStationStartDays();
      //expect(instance).to.be();
    });

    it('should have the property tuesday (base name: "tuesday")', function() {
      // uncomment below and update the code to test the property tuesday
      //var instance = new radiomanager.StationResultStationStartDays();
      //expect(instance).to.be();
    });

    it('should have the property wednesday (base name: "wednesday")', function() {
      // uncomment below and update the code to test the property wednesday
      //var instance = new radiomanager.StationResultStationStartDays();
      //expect(instance).to.be();
    });

    it('should have the property thursday (base name: "thursday")', function() {
      // uncomment below and update the code to test the property thursday
      //var instance = new radiomanager.StationResultStationStartDays();
      //expect(instance).to.be();
    });

    it('should have the property friday (base name: "friday")', function() {
      // uncomment below and update the code to test the property friday
      //var instance = new radiomanager.StationResultStationStartDays();
      //expect(instance).to.be();
    });

    it('should have the property saturday (base name: "saturday")', function() {
      // uncomment below and update the code to test the property saturday
      //var instance = new radiomanager.StationResultStationStartDays();
      //expect(instance).to.be();
    });

    it('should have the property sunday (base name: "sunday")', function() {
      // uncomment below and update the code to test the property sunday
      //var instance = new radiomanager.StationResultStationStartDays();
      //expect(instance).to.be();
    });

  });

}));
