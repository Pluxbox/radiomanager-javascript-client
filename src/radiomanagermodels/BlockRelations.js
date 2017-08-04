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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'radiomanagermodels/BlockRelationsBroadcast', 'radiomanagermodels/BlockRelationsItems', 'radiomanagermodels/BlockRelationsProgram'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BlockRelationsBroadcast'), require('./BlockRelationsItems'), require('./BlockRelationsProgram'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.BlockRelations = factory(root.radiomanager.ApiClient, root.radiomanager.BlockRelationsBroadcast, root.radiomanager.BlockRelationsItems, root.radiomanager.BlockRelationsProgram);
  }
}(this, function(ApiClient, BlockRelationsBroadcast, BlockRelationsItems, BlockRelationsProgram) {
  'use strict';




  /**
   * The BlockRelations model module.
   * @module radiomanagermodels/BlockRelations
   * @version 2.0
   */

  /**
   * Constructs a new <code>BlockRelations</code>.
   * @alias module:radiomanagermodels/BlockRelations
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>BlockRelations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/BlockRelations} obj Optional instance to populate.
   * @return {module:radiomanagermodels/BlockRelations} The populated <code>BlockRelations</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('items')) {
        obj['items'] = BlockRelationsItems.constructFromObject(data['items']);
      }
      if (data.hasOwnProperty('broadcast')) {
        obj['broadcast'] = BlockRelationsBroadcast.constructFromObject(data['broadcast']);
      }
      if (data.hasOwnProperty('program')) {
        obj['program'] = BlockRelationsProgram.constructFromObject(data['program']);
      }
    }
    return obj;
  }

  /**
   * @member {module:radiomanagermodels/BlockRelationsItems} items
   */
  exports.prototype['items'] = undefined;
  /**
   * @member {module:radiomanagermodels/BlockRelationsBroadcast} broadcast
   */
  exports.prototype['broadcast'] = undefined;
  /**
   * @member {module:radiomanagermodels/BlockRelationsProgram} program
   */
  exports.prototype['program'] = undefined;


  /**
   * @return {module:radiomanagermodels/BlockRelationsItems}
   */
  exports.prototype.getItems = function() {
    return this['items'];
  }

  /**
   * @param {module:radiomanagermodels/BlockRelationsItems} items
   */
  exports.prototype.setItems = function(items) {
    this['items'] = items;
  }


  /**
   * @return {module:radiomanagermodels/BlockRelationsBroadcast}
   */
  exports.prototype.getBroadcast = function() {
    return this['broadcast'];
  }

  /**
   * @param {module:radiomanagermodels/BlockRelationsBroadcast} broadcast
   */
  exports.prototype.setBroadcast = function(broadcast) {
    this['broadcast'] = broadcast;
  }


  /**
   * @return {module:radiomanagermodels/BlockRelationsProgram}
   */
  exports.prototype.getProgram = function() {
    return this['program'];
  }

  /**
   * @param {module:radiomanagermodels/BlockRelationsProgram} program
   */
  exports.prototype.setProgram = function(program) {
    this['program'] = program;
  }



  return exports;
}));


