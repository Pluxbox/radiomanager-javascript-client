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
    root.radiomanager.BroadcastFieldValues = factory(root.radiomanager.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BroadcastFieldValues model module.
   * @module radiomanagermodels/BroadcastFieldValues
   * @version 2.0
   */

  /**
   * Constructs a new <code>BroadcastFieldValues</code>.
   * @alias module:radiomanagermodels/BroadcastFieldValues
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BroadcastFieldValues</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/BroadcastFieldValues} obj Optional instance to populate.
   * @return {module:radiomanagermodels/BroadcastFieldValues} The populated <code>BroadcastFieldValues</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} image
   */
  exports.prototype['image'] = undefined;


  /**
   * @return {String}
   */
  exports.prototype.getImage = function() {
    return this['image'];
  }

  /**
   * @param {String} image
   */
  exports.prototype.setImage = function(image) {
    this['image'] = image;
  }



  return exports;
}));


