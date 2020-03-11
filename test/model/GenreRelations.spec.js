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
    instance = new radiomanager.GenreRelations();
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

  describe('GenreRelations', function() {
    it('should create an instance of GenreRelations', function() {
      // uncomment below and update the code to test GenreRelations
      //var instance = new radiomanager.GenreRelations();
      //expect(instance).to.be.a(radiomanager.GenreRelations);
    });

    it('should have the property broadcasts (base name: "broadcasts")', function() {
      // uncomment below and update the code to test the property broadcasts
      //var instance = new radiomanager.GenreRelations();
      //expect(instance).to.be();
    });

    it('should have the property programs (base name: "programs")', function() {
      // uncomment below and update the code to test the property programs
      //var instance = new radiomanager.GenreRelations();
      //expect(instance).to.be();
    });

  });

}));
