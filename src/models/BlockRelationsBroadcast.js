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
 * OpenAPI Generator version: 4.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'models/BlockRelationsBroadcastParams'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BlockRelationsBroadcastParams'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.BlockRelationsBroadcast = factory(root.radiomanager.ApiClient, root.radiomanager.BlockRelationsBroadcastParams);
  }
}(this, function(ApiClient, BlockRelationsBroadcastParams) {
  'use strict';



  /**
   * The BlockRelationsBroadcast model module.
   * @module models/BlockRelationsBroadcast
   * @version 2.0
   */

  /**
   * Constructs a new <code>BlockRelationsBroadcast</code>.
   * @alias module:models/BlockRelationsBroadcast
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>BlockRelationsBroadcast</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/BlockRelationsBroadcast} obj Optional instance to populate.
   * @return {module:models/BlockRelationsBroadcast} The populated <code>BlockRelationsBroadcast</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('href')) {
        obj['href'] = ApiClient.convertToType(data['href'], 'String');
      }
      if (data.hasOwnProperty('model')) {
        obj['model'] = ApiClient.convertToType(data['model'], 'String');
      }
      if (data.hasOwnProperty('operation')) {
        obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
      }
      if (data.hasOwnProperty('params')) {
        obj['params'] = BlockRelationsBroadcastParams.constructFromObject(data['params']);
      }
    }
    return obj;
  }

  /**
   * @member {String} href
   */
  exports.prototype['href'] = undefined;
  /**
   * @member {String} model
   */
  exports.prototype['model'] = undefined;
  /**
   * @member {String} operation
   */
  exports.prototype['operation'] = undefined;
  /**
   * @member {module:models/BlockRelationsBroadcastParams} params
   */
  exports.prototype['params'] = undefined;


  /**
   * @return {String}
   */
  exports.prototype.getHref = function() {
    return this['href'];
  }

  /**
   * @param {String} href
   */
  exports.prototype.setHref = function(href) {
    this['href'] = href;
  }


  /**
   * @return {String}
   */
  exports.prototype.getModel = function() {
    return this['model'];
  }

  /**
   * @param {String} model
   */
  exports.prototype.setModel = function(model) {
    this['model'] = model;
  }


  /**
   * @return {String}
   */
  exports.prototype.getOperation = function() {
    return this['operation'];
  }

  /**
   * @param {String} operation
   */
  exports.prototype.setOperation = function(operation) {
    this['operation'] = operation;
  }


  /**
   * @return {module:models/BlockRelationsBroadcastParams}
   */
  exports.prototype.getParams = function() {
    return this['params'];
  }

  /**
   * @param {module:models/BlockRelationsBroadcastParams} params
   */
  exports.prototype.setParams = function(params) {
    this['params'] = params;
  }



  return exports;
}));

