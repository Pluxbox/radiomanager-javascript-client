/**
 * RadioManager
 * This OpenAPI 3 Document describes the functionality of the API v2 of RadioManager. Note that no rights can be derived from this Document and the true functionality of the API might differ.
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@pluxbox.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
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
    instance = new radiomanager.CampaignTemplateItemAllOf();
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

  describe('CampaignTemplateItemAllOf', function() {
    it('should create an instance of CampaignTemplateItemAllOf', function() {
      // uncomment below and update the code to test CampaignTemplateItemAllOf
      //var instance = new radiomanager.CampaignTemplateItemAllOf();
      //expect(instance).to.be.a(radiomanager.CampaignTemplateItemAllOf);
    });

    it('should have the property modelTypeId (base name: "model_type_id")', function() {
      // uncomment below and update the code to test the property modelTypeId
      //var instance = new radiomanager.CampaignTemplateItemAllOf();
      //expect(instance).to.be();
    });

    it('should have the property externalId (base name: "external_id")', function() {
      // uncomment below and update the code to test the property externalId
      //var instance = new radiomanager.CampaignTemplateItemAllOf();
      //expect(instance).to.be();
    });

    it('should have the property fieldValues (base name: "field_values")', function() {
      // uncomment below and update the code to test the property fieldValues
      //var instance = new radiomanager.CampaignTemplateItemAllOf();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new radiomanager.CampaignTemplateItemAllOf();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instance = new radiomanager.CampaignTemplateItemAllOf();
      //expect(instance).to.be();
    });

    it('should have the property recommended (base name: "recommended")', function() {
      // uncomment below and update the code to test the property recommended
      //var instance = new radiomanager.CampaignTemplateItemAllOf();
      //expect(instance).to.be();
    });

    it('should have the property staticStart (base name: "static_start")', function() {
      // uncomment below and update the code to test the property staticStart
      //var instance = new radiomanager.CampaignTemplateItemAllOf();
      //expect(instance).to.be();
    });

    it('should have the property deltas (base name: "_deltas")', function() {
      // uncomment below and update the code to test the property deltas
      //var instance = new radiomanager.CampaignTemplateItemAllOf();
      //expect(instance).to.be();
    });

  });

}));
