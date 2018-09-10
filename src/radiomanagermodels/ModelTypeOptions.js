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
    root.radiomanager.ModelTypeOptions = factory(root.radiomanager.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ModelTypeOptions model module.
   * @module radiomanagermodels/ModelTypeOptions
   * @version 2.0
   */

  /**
   * Constructs a new <code>ModelTypeOptions</code>.
   * @alias module:radiomanagermodels/ModelTypeOptions
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ModelTypeOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/ModelTypeOptions} obj Optional instance to populate.
   * @return {module:radiomanagermodels/ModelTypeOptions} The populated <code>ModelTypeOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('color')) {
        obj['color'] = ApiClient.convertToType(data['color'], 'String');
      }
      if (data.hasOwnProperty('subBroadcast')) {
        obj['subBroadcast'] = ApiClient.convertToType(data['subBroadcast'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} color
   */
  exports.prototype['color'] = undefined;
  /**
   * @member {Boolean} subBroadcast
   */
  exports.prototype['subBroadcast'] = undefined;


  /**
   * @return {String}
   */
  exports.prototype.getColor = function() {
    return this['color'];
  }

  /**
   * @param {String} color
   */
  exports.prototype.setColor = function(color) {
    this['color'] = color;
  }


  /**
   * @return {Boolean}
   */
  exports.prototype.getSubBroadcast = function() {
    return this['subBroadcast'];
  }

  /**
   * @param {Boolean} subBroadcast
   */
  exports.prototype.setSubBroadcast = function(subBroadcast) {
    this['subBroadcast'] = subBroadcast;
  }



  return exports;
}));


