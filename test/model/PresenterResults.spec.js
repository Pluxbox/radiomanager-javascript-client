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
    instance = new radiomanager.PresenterResults();
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

  describe('PresenterResults', function() {
    it('should create an instance of PresenterResults', function() {
      // uncomment below and update the code to test PresenterResults
      //var instane = new radiomanager.PresenterResults();
      //expect(instance).to.be.a(radiomanager.PresenterResults);
    });

    it('should have the property currentPage (base name: "current_page")', function() {
      // uncomment below and update the code to test the property currentPage
      //var instane = new radiomanager.PresenterResults();
      //expect(instance).to.be();
    });

    it('should have the property from (base name: "from")', function() {
      // uncomment below and update the code to test the property from
      //var instane = new radiomanager.PresenterResults();
      //expect(instance).to.be();
    });

    it('should have the property lastPage (base name: "last_page")', function() {
      // uncomment below and update the code to test the property lastPage
      //var instane = new radiomanager.PresenterResults();
      //expect(instance).to.be();
    });

    it('should have the property nextPageUrl (base name: "next_page_url")', function() {
      // uncomment below and update the code to test the property nextPageUrl
      //var instane = new radiomanager.PresenterResults();
      //expect(instance).to.be();
    });

    it('should have the property path (base name: "path")', function() {
      // uncomment below and update the code to test the property path
      //var instane = new radiomanager.PresenterResults();
      //expect(instance).to.be();
    });

    it('should have the property perPage (base name: "per_page")', function() {
      // uncomment below and update the code to test the property perPage
      //var instane = new radiomanager.PresenterResults();
      //expect(instance).to.be();
    });

    it('should have the property prevPageUrl (base name: "prev_page_url")', function() {
      // uncomment below and update the code to test the property prevPageUrl
      //var instane = new radiomanager.PresenterResults();
      //expect(instance).to.be();
    });

    it('should have the property to (base name: "to")', function() {
      // uncomment below and update the code to test the property to
      //var instane = new radiomanager.PresenterResults();
      //expect(instance).to.be();
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instane = new radiomanager.PresenterResults();
      //expect(instance).to.be();
    });

    it('should have the property results (base name: "results")', function() {
      // uncomment below and update the code to test the property results
      //var instane = new radiomanager.PresenterResults();
      //expect(instance).to.be();
    });

  });

}));
