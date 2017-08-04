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
 * Swagger Codegen version: 2.3.0-SNAPSHOT
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
    instance = new radiomanager.UserResultSettings();
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

  describe('UserResultSettings', function() {
    it('should create an instance of UserResultSettings', function() {
      // uncomment below and update the code to test UserResultSettings
      //var instane = new radiomanager.UserResultSettings();
      //expect(instance).to.be.a(radiomanager.UserResultSettings);
    });

    it('should have the property showSideBar (base name: "showSideBar")', function() {
      // uncomment below and update the code to test the property showSideBar
      //var instane = new radiomanager.UserResultSettings();
      //expect(instance).to.be();
    });

    it('should have the property showSocialBar (base name: "showSocialBar")', function() {
      // uncomment below and update the code to test the property showSocialBar
      //var instane = new radiomanager.UserResultSettings();
      //expect(instance).to.be();
    });

    it('should have the property showCheckboxColumn (base name: "showCheckboxColumn")', function() {
      // uncomment below and update the code to test the property showCheckboxColumn
      //var instane = new radiomanager.UserResultSettings();
      //expect(instance).to.be();
    });

    it('should have the property showTimeColumn (base name: "showTimeColumn")', function() {
      // uncomment below and update the code to test the property showTimeColumn
      //var instane = new radiomanager.UserResultSettings();
      //expect(instance).to.be();
    });

    it('should have the property showSpeechTime (base name: "showSpeechTime")', function() {
      // uncomment below and update the code to test the property showSpeechTime
      //var instane = new radiomanager.UserResultSettings();
      //expect(instance).to.be();
    });

    it('should have the property zoomFactor (base name: "zoomFactor")', function() {
      // uncomment below and update the code to test the property zoomFactor
      //var instane = new radiomanager.UserResultSettings();
      //expect(instance).to.be();
    });

  });

}));
