/**
 * Pluxbox Radiomanager Client
 * Pluxbox RadioManager gives you the power, flexibility and speed you always wanted in a lightweight and easy-to-use web-based radio solution. With Pluxbox RadioManager you can organise your radio workflow and automate your omnichannel communication with your listeners. We offer wide range specialised services for the radio and connections like Hybrid Radio, Visual Radio, your website and social media without losing focus on your broadcast. For more information visit https://pluxbox.com
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
    instance = new radiomanager.Broadcast();
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

  describe('Broadcast', function() {
    it('should create an instance of Broadcast', function() {
      // uncomment below and update the code to test Broadcast
      //var instane = new radiomanager.Broadcast();
      //expect(instance).to.be.a(radiomanager.Broadcast);
    });

    it('should have the property programId (base name: "program_id")', function() {
      // uncomment below and update the code to test the property programId
      //var instane = new radiomanager.Broadcast();
      //expect(instance).to.be();
    });

    it('should have the property modelTypeId (base name: "model_type_id")', function() {
      // uncomment below and update the code to test the property modelTypeId
      //var instane = new radiomanager.Broadcast();
      //expect(instance).to.be();
    });

    it('should have the property stationId (base name: "station_id")', function() {
      // uncomment below and update the code to test the property stationId
      //var instane = new radiomanager.Broadcast();
      //expect(instance).to.be();
    });

    it('should have the property fieldValues (base name: "field_values")', function() {
      // uncomment below and update the code to test the property fieldValues
      //var instane = new radiomanager.Broadcast();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new radiomanager.Broadcast();
      //expect(instance).to.be();
    });

    it('should have the property start (base name: "start")', function() {
      // uncomment below and update the code to test the property start
      //var instane = new radiomanager.Broadcast();
      //expect(instance).to.be();
    });

    it('should have the property stop (base name: "stop")', function() {
      // uncomment below and update the code to test the property stop
      //var instane = new radiomanager.Broadcast();
      //expect(instance).to.be();
    });

    it('should have the property genreId (base name: "genre_id")', function() {
      // uncomment below and update the code to test the property genreId
      //var instane = new radiomanager.Broadcast();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new radiomanager.Broadcast();
      //expect(instance).to.be();
    });

    it('should have the property shortName (base name: "short_name")', function() {
      // uncomment below and update the code to test the property shortName
      //var instane = new radiomanager.Broadcast();
      //expect(instance).to.be();
    });

    it('should have the property mediumName (base name: "medium_name")', function() {
      // uncomment below and update the code to test the property mediumName
      //var instane = new radiomanager.Broadcast();
      //expect(instance).to.be();
    });

    it('should have the property website (base name: "website")', function() {
      // uncomment below and update the code to test the property website
      //var instane = new radiomanager.Broadcast();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new radiomanager.Broadcast();
      //expect(instance).to.be();
    });

    it('should have the property recommended (base name: "recommended")', function() {
      // uncomment below and update the code to test the property recommended
      //var instane = new radiomanager.Broadcast();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "language")', function() {
      // uncomment below and update the code to test the property language
      //var instane = new radiomanager.Broadcast();
      //expect(instance).to.be();
    });

    it('should have the property published (base name: "published")', function() {
      // uncomment below and update the code to test the property published
      //var instane = new radiomanager.Broadcast();
      //expect(instance).to.be();
    });

    it('should have the property repetitionUid (base name: "repetition_uid")', function() {
      // uncomment below and update the code to test the property repetitionUid
      //var instane = new radiomanager.Broadcast();
      //expect(instance).to.be();
    });

    it('should have the property repetitionType (base name: "repetition_type")', function() {
      // uncomment below and update the code to test the property repetitionType
      //var instane = new radiomanager.Broadcast();
      //expect(instance).to.be();
    });

    it('should have the property repetitionEnd (base name: "repetition_end")', function() {
      // uncomment below and update the code to test the property repetitionEnd
      //var instane = new radiomanager.Broadcast();
      //expect(instance).to.be();
    });

    it('should have the property repetitionStart (base name: "repetition_start")', function() {
      // uncomment below and update the code to test the property repetitionStart
      //var instane = new radiomanager.Broadcast();
      //expect(instance).to.be();
    });

    it('should have the property repetitionDays (base name: "repetition_days")', function() {
      // uncomment below and update the code to test the property repetitionDays
      //var instane = new radiomanager.Broadcast();
      //expect(instance).to.be();
    });

    it('should have the property ptyCodeId (base name: "pty_code_id")', function() {
      // uncomment below and update the code to test the property ptyCodeId
      //var instane = new radiomanager.Broadcast();
      //expect(instance).to.be();
    });

  });

}));