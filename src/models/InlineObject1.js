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
    define(['ApiClient', 'models/ImportItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ImportItem'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.InlineObject1 = factory(root.radiomanager.ApiClient, root.radiomanager.ImportItem);
  }
}(this, function(ApiClient, ImportItem) {
  'use strict';



  /**
   * The InlineObject1 model module.
   * @module models/InlineObject1
   * @version 2.0
   */

  /**
   * Constructs a new <code>InlineObject1</code>.
   * @alias module:models/InlineObject1
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>InlineObject1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/InlineObject1} obj Optional instance to populate.
   * @return {module:models/InlineObject1} The populated <code>InlineObject1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('start')) {
        obj['start'] = ApiClient.convertToType(data['start'], 'Date');
      }
      if (data.hasOwnProperty('allow_playlist_past')) {
        obj['allow_playlist_past'] = ApiClient.convertToType(data['allow_playlist_past'], 'Number');
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [ImportItem]);
      }
    }
    return obj;
  }

  /**
   * @member {Date} start
   */
  exports.prototype['start'] = undefined;
  /**
   * @member {Number} allow_playlist_past
   */
  exports.prototype['allow_playlist_past'] = undefined;
  /**
   * @member {Array.<module:models/ImportItem>} items
   */
  exports.prototype['items'] = undefined;


  /**
   * @return {Date}
   */
  exports.prototype.getStart = function() {
    return this['start'];
  }

  /**
   * @param {Date} start
   */
  exports.prototype.setStart = function(start) {
    this['start'] = start;
  }


  /**
   * @return {Number}
   */
  exports.prototype.getAllowPlaylistPast = function() {
    return this['allow_playlist_past'];
  }

  /**
   * @param {Number} allowPlaylistPast
   */
  exports.prototype.setAllowPlaylistPast = function(allowPlaylistPast) {
    this['allow_playlist_past'] = allowPlaylistPast;
  }


  /**
   * @return {Array.<module:models/ImportItem>}
   */
  exports.prototype.getItems = function() {
    return this['items'];
  }

  /**
   * @param {Array.<module:models/ImportItem>} items
   */
  exports.prototype.setItems = function(items) {
    this['items'] = items;
  }



  return exports;
}));

