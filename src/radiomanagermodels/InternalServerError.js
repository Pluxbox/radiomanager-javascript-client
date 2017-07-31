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
    root.radiomanager.InternalServerError = factory(root.radiomanager.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InternalServerError model module.
   * @module radiomanagermodels/InternalServerError
   * @version 2.0
   */

  /**
   * Constructs a new <code>InternalServerError</code>.
   * @alias module:radiomanagermodels/InternalServerError
   * @class
   * @param error {String} Given error (not formatted), describes the problem.
   * @param statusCode {Number} Assigned StatusCode, is used in order to create a relationship between Error and Response.
   */
  var exports = function(error, statusCode) {
    var _this = this;

    _this['error'] = error;
    _this['statusCode'] = statusCode;
  };

  /**
   * Constructs a <code>InternalServerError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/InternalServerError} obj Optional instance to populate.
   * @return {module:radiomanagermodels/InternalServerError} The populated <code>InternalServerError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
      if (data.hasOwnProperty('statusCode')) {
        obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Given error (not formatted), describes the problem.
   * @member {String} error
   */
  exports.prototype['error'] = undefined;
  /**
   * Assigned StatusCode, is used in order to create a relationship between Error and Response.
   * @member {Number} statusCode
   */
  exports.prototype['statusCode'] = undefined;


  /**
   * Returns Given error (not formatted), describes the problem.
   * @return {String}
   */
  exports.prototype.getError = function() {
    return this['error'];
  }

  /**
   * Sets Given error (not formatted), describes the problem.
   * @param {String} error Given error (not formatted), describes the problem.
   */
  exports.prototype.setError = function(error) {
    this['error'] = error;
  }


  /**
   * Returns Assigned StatusCode, is used in order to create a relationship between Error and Response.
   * @return {Number}
   */
  exports.prototype.getStatusCode = function() {
    return this['statusCode'];
  }

  /**
   * Sets Assigned StatusCode, is used in order to create a relationship between Error and Response.
   * @param {Number} statusCode Assigned StatusCode, is used in order to create a relationship between Error and Response.
   */
  exports.prototype.setStatusCode = function(statusCode) {
    this['statusCode'] = statusCode;
  }



  return exports;
}));


