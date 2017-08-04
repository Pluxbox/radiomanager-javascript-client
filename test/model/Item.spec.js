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
    instance = new radiomanager.Item();
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

  describe('Item', function() {
    it('should create an instance of Item', function() {
      // uncomment below and update the code to test Item
      //var instane = new radiomanager.Item();
      //expect(instance).to.be.a(radiomanager.Item);
    });

    it('should have the property modelTypeId (base name: "model_type_id")', function() {
      // uncomment below and update the code to test the property modelTypeId
      //var instane = new radiomanager.Item();
      //expect(instance).to.be();
    });

    it('should have the property blockId (base name: "block_id")', function() {
      // uncomment below and update the code to test the property blockId
      //var instane = new radiomanager.Item();
      //expect(instance).to.be();
    });

    it('should have the property externalId (base name: "external_id")', function() {
      // uncomment below and update the code to test the property externalId
      //var instane = new radiomanager.Item();
      //expect(instance).to.be();
    });

    it('should have the property fieldValues (base name: "field_values")', function() {
      // uncomment below and update the code to test the property fieldValues
      //var instane = new radiomanager.Item();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new radiomanager.Item();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instane = new radiomanager.Item();
      //expect(instance).to.be();
    });

    it('should have the property start (base name: "start")', function() {
      // uncomment below and update the code to test the property start
      //var instane = new radiomanager.Item();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new radiomanager.Item();
      //expect(instance).to.be();
    });

    it('should have the property _import (base name: "import")', function() {
      // uncomment below and update the code to test the property _import
      //var instane = new radiomanager.Item();
      //expect(instance).to.be();
    });

    it('should have the property campaignId (base name: "campaign_id")', function() {
      // uncomment below and update the code to test the property campaignId
      //var instane = new radiomanager.Item();
      //expect(instance).to.be();
    });

    it('should have the property recommended (base name: "recommended")', function() {
      // uncomment below and update the code to test the property recommended
      //var instane = new radiomanager.Item();
      //expect(instance).to.be();
    });

    it('should have the property stationDraftId (base name: "station_draft_id")', function() {
      // uncomment below and update the code to test the property stationDraftId
      //var instane = new radiomanager.Item();
      //expect(instance).to.be();
    });

    it('should have the property programDraftId (base name: "program_draft_id")', function() {
      // uncomment below and update the code to test the property programDraftId
      //var instane = new radiomanager.Item();
      //expect(instance).to.be();
    });

    it('should have the property userDraftId (base name: "user_draft_id")', function() {
      // uncomment below and update the code to test the property userDraftId
      //var instane = new radiomanager.Item();
      //expect(instance).to.be();
    });

    it('should have the property staticStart (base name: "static_start")', function() {
      // uncomment below and update the code to test the property staticStart
      //var instane = new radiomanager.Item();
      //expect(instance).to.be();
    });

    it('should have the property details (base name: "details")', function() {
      // uncomment below and update the code to test the property details
      //var instane = new radiomanager.Item();
      //expect(instance).to.be();
    });

  });

}));
