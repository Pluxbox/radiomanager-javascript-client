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
 * Swagger Codegen version: 2.2.3-SNAPSHOT
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
    instance = new radiomanager.BlockRelations();
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

  describe('BlockRelations', function() {
    it('should create an instance of BlockRelations', function() {
      // uncomment below and update the code to test BlockRelations
      //var instane = new radiomanager.BlockRelations();
      //expect(instance).to.be.a(radiomanager.BlockRelations);
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instane = new radiomanager.BlockRelations();
      //expect(instance).to.be();
    });

    it('should have the property broadcast (base name: "broadcast")', function() {
      // uncomment below and update the code to test the property broadcast
      //var instane = new radiomanager.BlockRelations();
      //expect(instance).to.be();
    });

    it('should have the property program (base name: "program")', function() {
      // uncomment below and update the code to test the property program
      //var instane = new radiomanager.BlockRelations();
      //expect(instance).to.be();
    });

  });

}));
