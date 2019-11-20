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
    instance = new radiomanager.BroadcastApi();
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

  describe('BroadcastApi', function() {
    describe('createBroadcast', function() {
      it('should call createBroadcast successfully', function(done) {
        //uncomment below and update the code to test createBroadcast
        //instance.createBroadcast(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBroadcastById', function() {
      it('should call deleteBroadcastById successfully', function(done) {
        //uncomment below and update the code to test deleteBroadcastById
        //instance.deleteBroadcastById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBroadcastById', function() {
      it('should call getBroadcastById successfully', function(done) {
        //uncomment below and update the code to test getBroadcastById
        //instance.getBroadcastById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCurrentBroadcast', function() {
      it('should call getCurrentBroadcast successfully', function(done) {
        //uncomment below and update the code to test getCurrentBroadcast
        //instance.getCurrentBroadcast(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDailyEPG', function() {
      it('should call getDailyEPG successfully', function(done) {
        //uncomment below and update the code to test getDailyEPG
        //instance.getDailyEPG(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEPGByDate', function() {
      it('should call getEPGByDate successfully', function(done) {
        //uncomment below and update the code to test getEPGByDate
        //instance.getEPGByDate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNextBroadcast', function() {
      it('should call getNextBroadcast successfully', function(done) {
        //uncomment below and update the code to test getNextBroadcast
        //instance.getNextBroadcast(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWeeklyEPG', function() {
      it('should call getWeeklyEPG successfully', function(done) {
        //uncomment below and update the code to test getWeeklyEPG
        //instance.getWeeklyEPG(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listBroadcasts', function() {
      it('should call listBroadcasts successfully', function(done) {
        //uncomment below and update the code to test listBroadcasts
        //instance.listBroadcasts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('printBroadcastById', function() {
      it('should call printBroadcastById successfully', function(done) {
        //uncomment below and update the code to test printBroadcastById
        //instance.printBroadcastById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateBroadcastByID', function() {
      it('should call updateBroadcastByID successfully', function(done) {
        //uncomment below and update the code to test updateBroadcastByID
        //instance.updateBroadcastByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
