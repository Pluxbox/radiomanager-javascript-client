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
    instance = new radiomanager.ModelTypeResults();
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

  describe('ModelTypeResults', function() {
    it('should create an instance of ModelTypeResults', function() {
      // uncomment below and update the code to test ModelTypeResults
      //var instance = new radiomanager.ModelTypeResults();
      //expect(instance).to.be.a(radiomanager.ModelTypeResults);
    });

    it('should have the property currentPage (base name: "current_page")', function() {
      // uncomment below and update the code to test the property currentPage
      //var instance = new radiomanager.ModelTypeResults();
      //expect(instance).to.be();
    });

    it('should have the property from (base name: "from")', function() {
      // uncomment below and update the code to test the property from
      //var instance = new radiomanager.ModelTypeResults();
      //expect(instance).to.be();
    });

    it('should have the property lastPage (base name: "last_page")', function() {
      // uncomment below and update the code to test the property lastPage
      //var instance = new radiomanager.ModelTypeResults();
      //expect(instance).to.be();
    });

    it('should have the property nextPageUrl (base name: "next_page_url")', function() {
      // uncomment below and update the code to test the property nextPageUrl
      //var instance = new radiomanager.ModelTypeResults();
      //expect(instance).to.be();
    });

    it('should have the property path (base name: "path")', function() {
      // uncomment below and update the code to test the property path
      //var instance = new radiomanager.ModelTypeResults();
      //expect(instance).to.be();
    });

    it('should have the property perPage (base name: "per_page")', function() {
      // uncomment below and update the code to test the property perPage
      //var instance = new radiomanager.ModelTypeResults();
      //expect(instance).to.be();
    });

    it('should have the property prevPageUrl (base name: "prev_page_url")', function() {
      // uncomment below and update the code to test the property prevPageUrl
      //var instance = new radiomanager.ModelTypeResults();
      //expect(instance).to.be();
    });

    it('should have the property to (base name: "to")', function() {
      // uncomment below and update the code to test the property to
      //var instance = new radiomanager.ModelTypeResults();
      //expect(instance).to.be();
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instance = new radiomanager.ModelTypeResults();
      //expect(instance).to.be();
    });

    it('should have the property results (base name: "results")', function() {
      // uncomment below and update the code to test the property results
      //var instance = new radiomanager.ModelTypeResults();
      //expect(instance).to.be();
    });

  });

}));
