/**
 * RadioManager
 * RadioManager
 *
 * OpenAPI spec version: 2.0
 * Contact: support@pluxbox.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
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
      //var instane = new radiomanager.StationResultStationStartDays();
      //expect(instance).to.be.a(radiomanager.StationResultStationStartDays);
    });

    it('should have the property monday (base name: "monday")', function() {
      // uncomment below and update the code to test the property monday
      //var instane = new radiomanager.StationResultStationStartDays();
      //expect(instance).to.be();
    });

    it('should have the property tuesday (base name: "tuesday")', function() {
      // uncomment below and update the code to test the property tuesday
      //var instane = new radiomanager.StationResultStationStartDays();
      //expect(instance).to.be();
    });

    it('should have the property wednesday (base name: "wednesday")', function() {
      // uncomment below and update the code to test the property wednesday
      //var instane = new radiomanager.StationResultStationStartDays();
      //expect(instance).to.be();
    });

    it('should have the property thursday (base name: "thursday")', function() {
      // uncomment below and update the code to test the property thursday
      //var instane = new radiomanager.StationResultStationStartDays();
      //expect(instance).to.be();
    });

    it('should have the property friday (base name: "friday")', function() {
      // uncomment below and update the code to test the property friday
      //var instane = new radiomanager.StationResultStationStartDays();
      //expect(instance).to.be();
    });

    it('should have the property saturday (base name: "saturday")', function() {
      // uncomment below and update the code to test the property saturday
      //var instane = new radiomanager.StationResultStationStartDays();
      //expect(instance).to.be();
    });

    it('should have the property sunday (base name: "sunday")', function() {
      // uncomment below and update the code to test the property sunday
      //var instane = new radiomanager.StationResultStationStartDays();
      //expect(instance).to.be();
    });

  });

}));