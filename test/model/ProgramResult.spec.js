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
    instance = new radiomanager.ProgramResult();
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

  describe('ProgramResult', function() {
    it('should create an instance of ProgramResult', function() {
      // uncomment below and update the code to test ProgramResult
      //var instance = new radiomanager.ProgramResult();
      //expect(instance).to.be.a(radiomanager.ProgramResult);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new radiomanager.ProgramResult();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new radiomanager.ProgramResult();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new radiomanager.ProgramResult();
      //expect(instance).to.be();
    });

    it('should have the property deletedAt (base name: "deleted_at")', function() {
      // uncomment below and update the code to test the property deletedAt
      //var instance = new radiomanager.ProgramResult();
      //expect(instance).to.be();
    });

    it('should have the property externalStationId (base name: "_external_station_id")', function() {
      // uncomment below and update the code to test the property externalStationId
      //var instance = new radiomanager.ProgramResult();
      //expect(instance).to.be();
    });

    it('should have the property modelTypeId (base name: "model_type_id")', function() {
      // uncomment below and update the code to test the property modelTypeId
      //var instance = new radiomanager.ProgramResult();
      //expect(instance).to.be();
    });

    it('should have the property fieldValues (base name: "field_values")', function() {
      // uncomment below and update the code to test the property fieldValues
      //var instance = new radiomanager.ProgramResult();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new radiomanager.ProgramResult();
      //expect(instance).to.be();
    });

    it('should have the property disabled (base name: "disabled")', function() {
      // uncomment below and update the code to test the property disabled
      //var instance = new radiomanager.ProgramResult();
      //expect(instance).to.be();
    });

    it('should have the property genreId (base name: "genre_id")', function() {
      // uncomment below and update the code to test the property genreId
      //var instance = new radiomanager.ProgramResult();
      //expect(instance).to.be();
    });

    it('should have the property groupId (base name: "group_id")', function() {
      // uncomment below and update the code to test the property groupId
      //var instance = new radiomanager.ProgramResult();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new radiomanager.ProgramResult();
      //expect(instance).to.be();
    });

    it('should have the property shortName (base name: "short_name")', function() {
      // uncomment below and update the code to test the property shortName
      //var instance = new radiomanager.ProgramResult();
      //expect(instance).to.be();
    });

    it('should have the property mediumName (base name: "medium_name")', function() {
      // uncomment below and update the code to test the property mediumName
      //var instance = new radiomanager.ProgramResult();
      //expect(instance).to.be();
    });

    it('should have the property website (base name: "website")', function() {
      // uncomment below and update the code to test the property website
      //var instance = new radiomanager.ProgramResult();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new radiomanager.ProgramResult();
      //expect(instance).to.be();
    });

    it('should have the property recommended (base name: "recommended")', function() {
      // uncomment below and update the code to test the property recommended
      //var instance = new radiomanager.ProgramResult();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "language")', function() {
      // uncomment below and update the code to test the property language
      //var instance = new radiomanager.ProgramResult();
      //expect(instance).to.be();
    });

    it('should have the property ptyCodeId (base name: "pty_code_id")', function() {
      // uncomment below and update the code to test the property ptyCodeId
      //var instance = new radiomanager.ProgramResult();
      //expect(instance).to.be();
    });

    it('should have the property genre (base name: "genre")', function() {
      // uncomment below and update the code to test the property genre
      //var instance = new radiomanager.ProgramResult();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instance = new radiomanager.ProgramResult();
      //expect(instance).to.be();
    });

    it('should have the property blocks (base name: "blocks")', function() {
      // uncomment below and update the code to test the property blocks
      //var instance = new radiomanager.ProgramResult();
      //expect(instance).to.be();
    });

    it('should have the property broadcasts (base name: "broadcasts")', function() {
      // uncomment below and update the code to test the property broadcasts
      //var instance = new radiomanager.ProgramResult();
      //expect(instance).to.be();
    });

    it('should have the property presenters (base name: "presenters")', function() {
      // uncomment below and update the code to test the property presenters
      //var instance = new radiomanager.ProgramResult();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new radiomanager.ProgramResult();
      //expect(instance).to.be();
    });

    it('should have the property modelType (base name: "model_type")', function() {
      // uncomment below and update the code to test the property modelType
      //var instance = new radiomanager.ProgramResult();
      //expect(instance).to.be();
    });

    it('should have the property group (base name: "group")', function() {
      // uncomment below and update the code to test the property group
      //var instance = new radiomanager.ProgramResult();
      //expect(instance).to.be();
    });

  });

}));
