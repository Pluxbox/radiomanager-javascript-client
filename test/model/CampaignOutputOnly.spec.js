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
    instance = new radiomanager.CampaignOutputOnly();
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

  describe('CampaignOutputOnly', function() {
    it('should create an instance of CampaignOutputOnly', function() {
      // uncomment below and update the code to test CampaignOutputOnly
      //var instane = new radiomanager.CampaignOutputOnly();
      //expect(instance).to.be.a(radiomanager.CampaignOutputOnly);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new radiomanager.CampaignOutputOnly();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new radiomanager.CampaignOutputOnly();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new radiomanager.CampaignOutputOnly();
      //expect(instance).to.be();
    });

    it('should have the property deletedAt (base name: "deleted_at")', function() {
      // uncomment below and update the code to test the property deletedAt
      //var instane = new radiomanager.CampaignOutputOnly();
      //expect(instance).to.be();
    });

    it('should have the property item (base name: "item")', function() {
      // uncomment below and update the code to test the property item
      //var instane = new radiomanager.CampaignOutputOnly();
      //expect(instance).to.be();
    });

    it('should have the property externalStationId (base name: "_external_station_id")', function() {
      // uncomment below and update the code to test the property externalStationId
      //var instane = new radiomanager.CampaignOutputOnly();
      //expect(instance).to.be();
    });

  });

}));
