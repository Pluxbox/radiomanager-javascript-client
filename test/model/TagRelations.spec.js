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
 * Swagger Codegen version: 2.3.0
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
    instance = new radiomanager.TagRelations();
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

  describe('TagRelations', function() {
    it('should create an instance of TagRelations', function() {
      // uncomment below and update the code to test TagRelations
      //var instane = new radiomanager.TagRelations();
      //expect(instance).to.be.a(radiomanager.TagRelations);
    });

    it('should have the property broadcasts (base name: "broadcasts")', function() {
      // uncomment below and update the code to test the property broadcasts
      //var instane = new radiomanager.TagRelations();
      //expect(instance).to.be();
    });

    it('should have the property programs (base name: "programs")', function() {
      // uncomment below and update the code to test the property programs
      //var instane = new radiomanager.TagRelations();
      //expect(instance).to.be();
    });

    it('should have the property contacts (base name: "contacts")', function() {
      // uncomment below and update the code to test the property contacts
      //var instane = new radiomanager.TagRelations();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instane = new radiomanager.TagRelations();
      //expect(instance).to.be();
    });

  });

}));
