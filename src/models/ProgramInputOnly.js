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
    define(['ApiClient', 'models/ProgramInputOnlyAllOf'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProgramInputOnlyAllOf'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.ProgramInputOnly = factory(root.radiomanager.ApiClient, root.radiomanager.ProgramInputOnlyAllOf);
  }
}(this, function(ApiClient, ProgramInputOnlyAllOf) {
  'use strict';



  /**
   * The ProgramInputOnly model module.
   * @module models/ProgramInputOnly
   * @version 2.0
   */

  /**
   * Constructs a new <code>ProgramInputOnly</code>.
   * @alias module:models/ProgramInputOnly
   * @class
   * @extends module:models/ProgramInputOnlyAllOf
   * @implements module:models/ProgramInputOnlyAllOf
   */
  var exports = function() {
    var _this = this;

    ProgramInputOnlyAllOf.call(_this);
  };

  /**
   * Constructs a <code>ProgramInputOnly</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/ProgramInputOnly} obj Optional instance to populate.
   * @return {module:models/ProgramInputOnly} The populated <code>ProgramInputOnly</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ProgramInputOnlyAllOf.constructFromObject(data, obj);
    }
    return obj;
  }

  exports.prototype = Object.create(ProgramInputOnlyAllOf.prototype);
  exports.prototype.constructor = exports;


  // Implement ProgramInputOnlyAllOf interface:
  /**
   * @member {Array.<Number>} tags
   */
exports.prototype['tags'] = undefined;

  /**
   * @member {Array.<Number>} presenters
   */
exports.prototype['presenters'] = undefined;



  return exports;
}));

