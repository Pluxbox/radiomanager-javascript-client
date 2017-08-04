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
 * Swagger Codegen version: 2.2.3
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
    instance = new radiomanager.TagApi();
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

  describe('TagApi', function() {
    describe('createTag', function() {
      it('should call createTag successfully', function(done) {
        //uncomment below and update the code to test createTag
        //instance.createTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTagById', function() {
      it('should call deleteTagById successfully', function(done) {
        //uncomment below and update the code to test deleteTagById
        //instance.deleteTagById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTagById', function() {
      it('should call getTagById successfully', function(done) {
        //uncomment below and update the code to test getTagById
        //instance.getTagById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listTags', function() {
      it('should call listTags successfully', function(done) {
        //uncomment below and update the code to test listTags
        //instance.listTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTagByID', function() {
      it('should call updateTagByID successfully', function(done) {
        //uncomment below and update the code to test updateTagByID
        //instance.updateTagByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
