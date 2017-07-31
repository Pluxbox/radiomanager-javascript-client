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
 * Swagger Codegen version: 2.2.3-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.ItemInputOnly = factory(root.radiomanager.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ItemInputOnly model module.
   * @module radiomanagermodels/ItemInputOnly
   * @version 2.0
   */

  /**
   * Constructs a new <code>ItemInputOnly</code>.
   * @alias module:radiomanagermodels/ItemInputOnly
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ItemInputOnly</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/ItemInputOnly} obj Optional instance to populate.
   * @return {module:radiomanagermodels/ItemInputOnly} The populated <code>ItemInputOnly</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('previous_id')) {
        obj['previous_id'] = ApiClient.convertToType(data['previous_id'], 'Number');
      }
      if (data.hasOwnProperty('contacts')) {
        obj['contacts'] = ApiClient.convertToType(data['contacts'], ['Number']);
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} previous_id
   */
  exports.prototype['previous_id'] = undefined;
  /**
   * @member {Array.<Number>} contacts
   */
  exports.prototype['contacts'] = undefined;
  /**
   * @member {Array.<Number>} tags
   */
  exports.prototype['tags'] = undefined;


  /**
   * @return {Number}
   */
  exports.prototype.getPreviousId = function() {
    return this['previous_id'];
  }

  /**
   * @param {Number} previousId
   */
  exports.prototype.setPreviousId = function(previousId) {
    this['previous_id'] = previousId;
  }


  /**
   * @return {Array.<Number>}
   */
  exports.prototype.getContacts = function() {
    return this['contacts'];
  }

  /**
   * @param {Array.<Number>} contacts
   */
  exports.prototype.setContacts = function(contacts) {
    this['contacts'] = contacts;
  }


  /**
   * @return {Array.<Number>}
   */
  exports.prototype.getTags = function() {
    return this['tags'];
  }

  /**
   * @param {Array.<Number>} tags
   */
  exports.prototype.setTags = function(tags) {
    this['tags'] = tags;
  }



  return exports;
}));


