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
    instance = new radiomanager.ItemAllOf();
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

  describe('ItemAllOf', function() {
    it('should create an instance of ItemAllOf', function() {
      // uncomment below and update the code to test ItemAllOf
      //var instance = new radiomanager.ItemAllOf();
      //expect(instance).to.be.a(radiomanager.ItemAllOf);
    });

    it('should have the property modelTypeId (base name: "model_type_id")', function() {
      // uncomment below and update the code to test the property modelTypeId
      //var instance = new radiomanager.ItemAllOf();
      //expect(instance).to.be();
    });

    it('should have the property blockId (base name: "block_id")', function() {
      // uncomment below and update the code to test the property blockId
      //var instance = new radiomanager.ItemAllOf();
      //expect(instance).to.be();
    });

    it('should have the property externalId (base name: "external_id")', function() {
      // uncomment below and update the code to test the property externalId
      //var instance = new radiomanager.ItemAllOf();
      //expect(instance).to.be();
    });

    it('should have the property fieldValues (base name: "field_values")', function() {
      // uncomment below and update the code to test the property fieldValues
      //var instance = new radiomanager.ItemAllOf();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new radiomanager.ItemAllOf();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instance = new radiomanager.ItemAllOf();
      //expect(instance).to.be();
    });

    it('should have the property start (base name: "start")', function() {
      // uncomment below and update the code to test the property start
      //var instance = new radiomanager.ItemAllOf();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new radiomanager.ItemAllOf();
      //expect(instance).to.be();
    });

    it('should have the property _import (base name: "import")', function() {
      // uncomment below and update the code to test the property _import
      //var instance = new radiomanager.ItemAllOf();
      //expect(instance).to.be();
    });

    it('should have the property campaignId (base name: "campaign_id")', function() {
      // uncomment below and update the code to test the property campaignId
      //var instance = new radiomanager.ItemAllOf();
      //expect(instance).to.be();
    });

    it('should have the property recommended (base name: "recommended")', function() {
      // uncomment below and update the code to test the property recommended
      //var instance = new radiomanager.ItemAllOf();
      //expect(instance).to.be();
    });

    it('should have the property stationDraftId (base name: "station_draft_id")', function() {
      // uncomment below and update the code to test the property stationDraftId
      //var instance = new radiomanager.ItemAllOf();
      //expect(instance).to.be();
    });

    it('should have the property programDraftId (base name: "program_draft_id")', function() {
      // uncomment below and update the code to test the property programDraftId
      //var instance = new radiomanager.ItemAllOf();
      //expect(instance).to.be();
    });

    it('should have the property userDraftId (base name: "user_draft_id")', function() {
      // uncomment below and update the code to test the property userDraftId
      //var instance = new radiomanager.ItemAllOf();
      //expect(instance).to.be();
    });

    it('should have the property staticStart (base name: "static_start")', function() {
      // uncomment below and update the code to test the property staticStart
      //var instance = new radiomanager.ItemAllOf();
      //expect(instance).to.be();
    });

    it('should have the property details (base name: "details")', function() {
      // uncomment below and update the code to test the property details
      //var instance = new radiomanager.ItemAllOf();
      //expect(instance).to.be();
    });

  });

}));