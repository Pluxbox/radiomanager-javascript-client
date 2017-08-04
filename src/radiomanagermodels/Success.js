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
    root.radiomanager.Success = factory(root.radiomanager.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Success model module.
   * @module radiomanagermodels/Success
   * @version 2.0
   */

  /**
   * Constructs a new <code>Success</code>.
   * @alias module:radiomanagermodels/Success
   * @class
   * @param success {String} Describes whatever has succeeded
   */
  var exports = function(success) {
    var _this = this;

    _this['success'] = success;
  };

  /**
   * Constructs a <code>Success</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/Success} obj Optional instance to populate.
   * @return {module:radiomanagermodels/Success} The populated <code>Success</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'String');
      }
    }
    return obj;
  }

  /**
   * Describes whatever has succeeded
   * @member {String} success
   */
  exports.prototype['success'] = undefined;


  /**
   * Returns Describes whatever has succeeded
   * @return {String}
   */
  exports.prototype.getSuccess = function() {
    return this['success'];
  }

  /**
   * Sets Describes whatever has succeeded
   * @param {String} success Describes whatever has succeeded
   */
  exports.prototype.setSuccess = function(success) {
    this['success'] = success;
  }



  return exports;
}));


