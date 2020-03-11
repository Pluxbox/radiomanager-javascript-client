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
    instance = new radiomanager.PresenterApi();
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

  describe('PresenterApi', function() {
    describe('createPresenter', function() {
      it('should call createPresenter successfully', function(done) {
        //uncomment below and update the code to test createPresenter
        //instance.createPresenter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePresenterById', function() {
      it('should call deletePresenterById successfully', function(done) {
        //uncomment below and update the code to test deletePresenterById
        //instance.deletePresenterById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPresenterById', function() {
      it('should call getPresenterById successfully', function(done) {
        //uncomment below and update the code to test getPresenterById
        //instance.getPresenterById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listPresenters', function() {
      it('should call listPresenters successfully', function(done) {
        //uncomment below and update the code to test listPresenters
        //instance.listPresenters(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePresenterByID', function() {
      it('should call updatePresenterByID successfully', function(done) {
        //uncomment below and update the code to test updatePresenterByID
        //instance.updatePresenterByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
