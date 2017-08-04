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
    define(['ApiClient', 'radiomanagermodels/Broadcast', 'radiomanagermodels/BroadcastFieldValues', 'radiomanagermodels/BroadcastInputOnly'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Broadcast'), require('./BroadcastFieldValues'), require('./BroadcastInputOnly'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.BroadcastDataInput = factory(root.radiomanager.ApiClient, root.radiomanager.Broadcast, root.radiomanager.BroadcastFieldValues, root.radiomanager.BroadcastInputOnly);
  }
}(this, function(ApiClient, Broadcast, BroadcastFieldValues, BroadcastInputOnly) {
  'use strict';




  /**
   * The BroadcastDataInput model module.
   * @module radiomanagermodels/BroadcastDataInput
   * @version 2.0
   */

  /**
   * Constructs a new <code>BroadcastDataInput</code>.
   * @alias module:radiomanagermodels/BroadcastDataInput
   * @class
   * @implements module:radiomanagermodels/Broadcast
   * @implements module:radiomanagermodels/BroadcastInputOnly
   */
  var exports = function() {
    var _this = this;

    Broadcast.call(_this);
    BroadcastInputOnly.call(_this);
  };

  /**
   * Constructs a <code>BroadcastDataInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/BroadcastDataInput} obj Optional instance to populate.
   * @return {module:radiomanagermodels/BroadcastDataInput} The populated <code>BroadcastDataInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      Broadcast.constructFromObject(data, obj);
      BroadcastInputOnly.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement Broadcast interface:
  /**
   * @member {Number} program_id
   */
exports.prototype['program_id'] = undefined;

  /**
   * @member {Number} model_type_id
   */
exports.prototype['model_type_id'] = undefined;

  /**
   * @member {Number} station_id
   */
exports.prototype['station_id'] = undefined;

  /**
   * @member {module:radiomanagermodels/BroadcastFieldValues} field_values
   */
exports.prototype['field_values'] = undefined;

  /**
   * @member {String} title
   */
exports.prototype['title'] = undefined;

  /**
   * @member {Date} start
   */
exports.prototype['start'] = undefined;

  /**
   * @member {Date} stop
   */
exports.prototype['stop'] = undefined;

  /**
   * @member {Number} genre_id
   */
exports.prototype['genre_id'] = undefined;

  /**
   * @member {String} description
   */
exports.prototype['description'] = undefined;

  /**
   * @member {String} short_name
   */
exports.prototype['short_name'] = undefined;

  /**
   * @member {String} medium_name
   */
exports.prototype['medium_name'] = undefined;

  /**
   * @member {String} website
   */
exports.prototype['website'] = undefined;

  /**
   * @member {String} email
   */
exports.prototype['email'] = undefined;

  /**
   * @member {Boolean} recommended
   */
exports.prototype['recommended'] = undefined;

  /**
   * @member {String} language
   */
exports.prototype['language'] = undefined;

  /**
   * @member {Boolean} published
   */
exports.prototype['published'] = undefined;

  /**
   * @member {String} repetition_uid
   */
exports.prototype['repetition_uid'] = undefined;

  /**
   * @member {module:radiomanagermodels/Broadcast.RepetitionTypeEnum} repetition_type
   */
exports.prototype['repetition_type'] = undefined;

  /**
   * @member {Date} repetition_end
   */
exports.prototype['repetition_end'] = undefined;

  /**
   * @member {Date} repetition_start
   */
exports.prototype['repetition_start'] = undefined;

  /**
   * @member {String} repetition_days
   */
exports.prototype['repetition_days'] = undefined;

  /**
   * @member {Number} pty_code_id
   */
exports.prototype['pty_code_id'] = undefined;

  // Implement BroadcastInputOnly interface:
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


