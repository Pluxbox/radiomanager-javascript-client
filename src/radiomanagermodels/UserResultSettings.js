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
    root.radiomanager.UserResultSettings = factory(root.radiomanager.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserResultSettings model module.
   * @module radiomanagermodels/UserResultSettings
   * @version 2.0
   */

  /**
   * Constructs a new <code>UserResultSettings</code>.
   * @alias module:radiomanagermodels/UserResultSettings
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>UserResultSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/UserResultSettings} obj Optional instance to populate.
   * @return {module:radiomanagermodels/UserResultSettings} The populated <code>UserResultSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('showSideBar')) {
        obj['showSideBar'] = ApiClient.convertToType(data['showSideBar'], 'Boolean');
      }
      if (data.hasOwnProperty('showSocialBar')) {
        obj['showSocialBar'] = ApiClient.convertToType(data['showSocialBar'], 'Boolean');
      }
      if (data.hasOwnProperty('showCheckboxColumn')) {
        obj['showCheckboxColumn'] = ApiClient.convertToType(data['showCheckboxColumn'], 'Boolean');
      }
      if (data.hasOwnProperty('showTimeColumn')) {
        obj['showTimeColumn'] = ApiClient.convertToType(data['showTimeColumn'], 'Boolean');
      }
      if (data.hasOwnProperty('showSpeechTime')) {
        obj['showSpeechTime'] = ApiClient.convertToType(data['showSpeechTime'], 'Boolean');
      }
      if (data.hasOwnProperty('zoomFactor')) {
        obj['zoomFactor'] = ApiClient.convertToType(data['zoomFactor'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} showSideBar
   */
  exports.prototype['showSideBar'] = undefined;
  /**
   * @member {Boolean} showSocialBar
   */
  exports.prototype['showSocialBar'] = undefined;
  /**
   * @member {Boolean} showCheckboxColumn
   */
  exports.prototype['showCheckboxColumn'] = undefined;
  /**
   * @member {Boolean} showTimeColumn
   */
  exports.prototype['showTimeColumn'] = undefined;
  /**
   * @member {Boolean} showSpeechTime
   */
  exports.prototype['showSpeechTime'] = undefined;
  /**
   * @member {Number} zoomFactor
   */
  exports.prototype['zoomFactor'] = undefined;


  /**
   * @return {Boolean}
   */
  exports.prototype.getShowSideBar = function() {
    return this['showSideBar'];
  }

  /**
   * @param {Boolean} showSideBar
   */
  exports.prototype.setShowSideBar = function(showSideBar) {
    this['showSideBar'] = showSideBar;
  }


  /**
   * @return {Boolean}
   */
  exports.prototype.getShowSocialBar = function() {
    return this['showSocialBar'];
  }

  /**
   * @param {Boolean} showSocialBar
   */
  exports.prototype.setShowSocialBar = function(showSocialBar) {
    this['showSocialBar'] = showSocialBar;
  }


  /**
   * @return {Boolean}
   */
  exports.prototype.getShowCheckboxColumn = function() {
    return this['showCheckboxColumn'];
  }

  /**
   * @param {Boolean} showCheckboxColumn
   */
  exports.prototype.setShowCheckboxColumn = function(showCheckboxColumn) {
    this['showCheckboxColumn'] = showCheckboxColumn;
  }


  /**
   * @return {Boolean}
   */
  exports.prototype.getShowTimeColumn = function() {
    return this['showTimeColumn'];
  }

  /**
   * @param {Boolean} showTimeColumn
   */
  exports.prototype.setShowTimeColumn = function(showTimeColumn) {
    this['showTimeColumn'] = showTimeColumn;
  }


  /**
   * @return {Boolean}
   */
  exports.prototype.getShowSpeechTime = function() {
    return this['showSpeechTime'];
  }

  /**
   * @param {Boolean} showSpeechTime
   */
  exports.prototype.setShowSpeechTime = function(showSpeechTime) {
    this['showSpeechTime'] = showSpeechTime;
  }


  /**
   * @return {Number}
   */
  exports.prototype.getZoomFactor = function() {
    return this['zoomFactor'];
  }

  /**
   * @param {Number} zoomFactor
   */
  exports.prototype.setZoomFactor = function(zoomFactor) {
    this['zoomFactor'] = zoomFactor;
  }



  return exports;
}));


