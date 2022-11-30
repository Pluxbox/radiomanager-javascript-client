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
    instance = new radiomanager.ItemApi();
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

  describe('ItemApi', function() {
    describe('createItem', function() {
      it('should call createItem successfully', function(done) {
        //uncomment below and update the code to test createItem
        //instance.createItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('currentItemPostStructure', function() {
      it('should call currentItemPostStructure successfully', function(done) {
        //uncomment below and update the code to test currentItemPostStructure
        //instance.currentItemPostStructure(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('currentItemPostTiming', function() {
      it('should call currentItemPostTiming successfully', function(done) {
        //uncomment below and update the code to test currentItemPostTiming
        //instance.currentItemPostTiming(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteItemById', function() {
      it('should call deleteItemById successfully', function(done) {
        //uncomment below and update the code to test deleteItemById
        //instance.deleteItemById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCurrentItem', function() {
      it('should call getCurrentItem successfully', function(done) {
        //uncomment below and update the code to test getCurrentItem
        //instance.getCurrentItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemById', function() {
      it('should call getItemById successfully', function(done) {
        //uncomment below and update the code to test getItemById
        //instance.getItemById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listItems', function() {
      it('should call listItems successfully', function(done) {
        //uncomment below and update the code to test listItems
        //instance.listItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('playlistPostMerge', function() {
      it('should call playlistPostMerge successfully', function(done) {
        //uncomment below and update the code to test playlistPostMerge
        //instance.playlistPostMerge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('playlistPostStructure', function() {
      it('should call playlistPostStructure successfully', function(done) {
        //uncomment below and update the code to test playlistPostStructure
        //instance.playlistPostStructure(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('playlistPostTiming', function() {
      it('should call playlistPostTiming successfully', function(done) {
        //uncomment below and update the code to test playlistPostTiming
        //instance.playlistPostTiming(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stopCurrentItem', function() {
      it('should call stopCurrentItem successfully', function(done) {
        //uncomment below and update the code to test stopCurrentItem
        //instance.stopCurrentItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateItemById', function() {
      it('should call updateItemById successfully', function(done) {
        //uncomment below and update the code to test updateItemById
        //instance.updateItemById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
