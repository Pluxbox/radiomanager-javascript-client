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
    root.radiomanager.UnprocessableEntity = factory(root.radiomanager.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UnprocessableEntity model module.
   * @module radiomanager/radiomanagermodels/UnprocessableEntity
   * @version 2.0
   */

  /**
   * Constructs a new <code>UnprocessableEntity</code>.
   * @alias module:radiomanager/radiomanagermodels/UnprocessableEntity
   * @class
   * @param errors {Array.<String>} A list that displays all the missing properties.
   */
  var exports = function(errors) {
    var _this = this;

    _this['errors'] = errors;
  };

  /**
   * Constructs a <code>UnprocessableEntity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanager/radiomanagermodels/UnprocessableEntity} obj Optional instance to populate.
   * @return {module:radiomanager/radiomanagermodels/UnprocessableEntity} The populated <code>UnprocessableEntity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], ['String']);
      }
    }
    return obj;
  }

  /**
   * A list that displays all the missing properties.
   * @member {Array.<String>} errors
   */
  exports.prototype['errors'] = undefined;


  /**
   * Returns A list that displays all the missing properties.
   * @return {Array.<String>}
   */
  exports.prototype.getErrors = function() {
    return this['errors'];
  }

  /**
   * Sets A list that displays all the missing properties.
   * @param {Array.<String>} errors A list that displays all the missing properties.
   */
  exports.prototype.setErrors = function(errors) {
    this['errors'] = errors;
  }



  return exports;
}));


