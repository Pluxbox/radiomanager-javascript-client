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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.ModelTypeOutputOnly = factory(root.radiomanager.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ModelTypeOutputOnly model module.
   * @module radiomanagermodels/ModelTypeOutputOnly
   * @version 2.0
   */

  /**
   * Constructs a new <code>ModelTypeOutputOnly</code>.
   * @alias module:radiomanagermodels/ModelTypeOutputOnly
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ModelTypeOutputOnly</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/ModelTypeOutputOnly} obj Optional instance to populate.
   * @return {module:radiomanagermodels/ModelTypeOutputOnly} The populated <code>ModelTypeOutputOnly</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_external_station_id')) {
        obj['_external_station_id'] = ApiClient.convertToType(data['_external_station_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} _external_station_id
   */
  exports.prototype['_external_station_id'] = undefined;


  /**
   * @return {Number}
   */
  exports.prototype.getExternalStationId = function() {
    return this['_external_station_id'];
  }

  /**
   * @param {Number} externalStationId
   */
  exports.prototype.setExternalStationId = function(externalStationId) {
    this['_external_station_id'] = externalStationId;
  }



  return exports;
}));


