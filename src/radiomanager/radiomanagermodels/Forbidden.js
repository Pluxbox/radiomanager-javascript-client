/**
 * Pluxbox Radiomanager Client
 * Pluxbox RadioManager gives you the power, flexibility and speed you always wanted in a lightweight and easy-to-use web-based radio solution. With Pluxbox RadioManager you can organise your radio workflow and automate your omnichannel communication with your listeners. We offer wide range specialised services for the radio and connections like Hybrid Radio, Visual Radio, your website and social media without losing focus on your broadcast. For more information visit https://pluxbox.com
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
    define(['radiomanager/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.Forbidden = factory(root.radiomanager.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Forbidden model module.
   * @module radiomanager/radiomanagermodels/Forbidden
   * @version 2.0
   */

  /**
   * Constructs a new <code>Forbidden</code>.
   * @alias module:radiomanager/radiomanagermodels/Forbidden
   * @class
   * @param error {String} Given error, describes the problem.
   * @param statusCode {Number} Assigned StatusCode, is used in order to create a relationship between Error and Response.
   */
  var exports = function(error, statusCode) {
    var _this = this;

    _this['error'] = error;
    _this['statusCode'] = statusCode;
  };

  /**
   * Constructs a <code>Forbidden</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanager/radiomanagermodels/Forbidden} obj Optional instance to populate.
   * @return {module:radiomanager/radiomanagermodels/Forbidden} The populated <code>Forbidden</code> instance.
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
   * Given error, describes the problem.
   * @member {String} error
   */
  exports.prototype['error'] = undefined;
  /**
   * Assigned StatusCode, is used in order to create a relationship between Error and Response.
   * @member {Number} statusCode
   */
  exports.prototype['statusCode'] = undefined;


  /**
   * Returns Given error, describes the problem.
   * @return {String}
   */
  exports.prototype.getError = function() {
    return this['error'];
  }

  /**
   * Sets Given error, describes the problem.
   * @param {String} error Given error, describes the problem.
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


