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
    define(['ApiClient', 'models/ContactRelationsTagsParams'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContactRelationsTagsParams'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.ContactRelationsItems = factory(root.radiomanager.ApiClient, root.radiomanager.ContactRelationsTagsParams);
  }
}(this, function(ApiClient, ContactRelationsTagsParams) {
  'use strict';



  /**
   * The ContactRelationsItems model module.
   * @module models/ContactRelationsItems
   * @version 2.0
   */

  /**
   * Constructs a new <code>ContactRelationsItems</code>.
   * @alias module:models/ContactRelationsItems
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ContactRelationsItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/ContactRelationsItems} obj Optional instance to populate.
   * @return {module:models/ContactRelationsItems} The populated <code>ContactRelationsItems</code> instance.
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
        obj['params'] = ContactRelationsTagsParams.constructFromObject(data['params']);
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
   * @member {module:models/ContactRelationsTagsParams} params
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
   * @return {module:models/ContactRelationsTagsParams}
   */
  exports.prototype.getParams = function() {
    return this['params'];
  }

  /**
   * @param {module:models/ContactRelationsTagsParams} params
   */
  exports.prototype.setParams = function(params) {
    this['params'] = params;
  }



  return exports;
}));

