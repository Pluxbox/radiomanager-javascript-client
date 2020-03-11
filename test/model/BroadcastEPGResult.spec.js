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
    instance = new radiomanager.BroadcastEPGResult();
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

  describe('BroadcastEPGResult', function() {
    it('should create an instance of BroadcastEPGResult', function() {
      // uncomment below and update the code to test BroadcastEPGResult
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be.a(radiomanager.BroadcastEPGResult);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property deletedAt (base name: "deleted_at")', function() {
      // uncomment below and update the code to test the property deletedAt
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property externalStationId (base name: "_external_station_id")', function() {
      // uncomment below and update the code to test the property externalStationId
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property programId (base name: "program_id")', function() {
      // uncomment below and update the code to test the property programId
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property modelTypeId (base name: "model_type_id")', function() {
      // uncomment below and update the code to test the property modelTypeId
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property stationId (base name: "station_id")', function() {
      // uncomment below and update the code to test the property stationId
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property fieldValues (base name: "field_values")', function() {
      // uncomment below and update the code to test the property fieldValues
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property start (base name: "start")', function() {
      // uncomment below and update the code to test the property start
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property stop (base name: "stop")', function() {
      // uncomment below and update the code to test the property stop
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property genreId (base name: "genre_id")', function() {
      // uncomment below and update the code to test the property genreId
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property shortName (base name: "short_name")', function() {
      // uncomment below and update the code to test the property shortName
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property mediumName (base name: "medium_name")', function() {
      // uncomment below and update the code to test the property mediumName
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property website (base name: "website")', function() {
      // uncomment below and update the code to test the property website
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property recommended (base name: "recommended")', function() {
      // uncomment below and update the code to test the property recommended
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "language")', function() {
      // uncomment below and update the code to test the property language
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property published (base name: "published")', function() {
      // uncomment below and update the code to test the property published
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property repetitionUid (base name: "repetition_uid")', function() {
      // uncomment below and update the code to test the property repetitionUid
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property repetitionType (base name: "repetition_type")', function() {
      // uncomment below and update the code to test the property repetitionType
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property repetitionEnd (base name: "repetition_end")', function() {
      // uncomment below and update the code to test the property repetitionEnd
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property repetitionStart (base name: "repetition_start")', function() {
      // uncomment below and update the code to test the property repetitionStart
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property repetitionDays (base name: "repetition_days")', function() {
      // uncomment below and update the code to test the property repetitionDays
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property ptyCodeId (base name: "pty_code_id")', function() {
      // uncomment below and update the code to test the property ptyCodeId
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property blocks (base name: "blocks")', function() {
      // uncomment below and update the code to test the property blocks
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property program (base name: "program")', function() {
      // uncomment below and update the code to test the property program
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property presenters (base name: "presenters")', function() {
      // uncomment below and update the code to test the property presenters
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

    it('should have the property modelType (base name: "model_type")', function() {
      // uncomment below and update the code to test the property modelType
      //var instance = new radiomanager.BroadcastEPGResult();
      //expect(instance).to.be();
    });

  });

}));
