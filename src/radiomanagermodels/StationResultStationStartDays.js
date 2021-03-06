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
    root.radiomanager.StationResultStationStartDays = factory(root.radiomanager.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StationResultStationStartDays model module.
   * @module radiomanagermodels/StationResultStationStartDays
   * @version 2.0
   */

  /**
   * Constructs a new <code>StationResultStationStartDays</code>.
   * @alias module:radiomanagermodels/StationResultStationStartDays
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>StationResultStationStartDays</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/StationResultStationStartDays} obj Optional instance to populate.
   * @return {module:radiomanagermodels/StationResultStationStartDays} The populated <code>StationResultStationStartDays</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('monday')) {
        obj['monday'] = ApiClient.convertToType(data['monday'], 'String');
      }
      if (data.hasOwnProperty('tuesday')) {
        obj['tuesday'] = ApiClient.convertToType(data['tuesday'], 'String');
      }
      if (data.hasOwnProperty('wednesday')) {
        obj['wednesday'] = ApiClient.convertToType(data['wednesday'], 'String');
      }
      if (data.hasOwnProperty('thursday')) {
        obj['thursday'] = ApiClient.convertToType(data['thursday'], 'String');
      }
      if (data.hasOwnProperty('friday')) {
        obj['friday'] = ApiClient.convertToType(data['friday'], 'String');
      }
      if (data.hasOwnProperty('saturday')) {
        obj['saturday'] = ApiClient.convertToType(data['saturday'], 'String');
      }
      if (data.hasOwnProperty('sunday')) {
        obj['sunday'] = ApiClient.convertToType(data['sunday'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} monday
   */
  exports.prototype['monday'] = undefined;
  /**
   * @member {String} tuesday
   */
  exports.prototype['tuesday'] = undefined;
  /**
   * @member {String} wednesday
   */
  exports.prototype['wednesday'] = undefined;
  /**
   * @member {String} thursday
   */
  exports.prototype['thursday'] = undefined;
  /**
   * @member {String} friday
   */
  exports.prototype['friday'] = undefined;
  /**
   * @member {String} saturday
   */
  exports.prototype['saturday'] = undefined;
  /**
   * @member {String} sunday
   */
  exports.prototype['sunday'] = undefined;


  /**
   * @return {String}
   */
  exports.prototype.getMonday = function() {
    return this['monday'];
  }

  /**
   * @param {String} monday
   */
  exports.prototype.setMonday = function(monday) {
    this['monday'] = monday;
  }


  /**
   * @return {String}
   */
  exports.prototype.getTuesday = function() {
    return this['tuesday'];
  }

  /**
   * @param {String} tuesday
   */
  exports.prototype.setTuesday = function(tuesday) {
    this['tuesday'] = tuesday;
  }


  /**
   * @return {String}
   */
  exports.prototype.getWednesday = function() {
    return this['wednesday'];
  }

  /**
   * @param {String} wednesday
   */
  exports.prototype.setWednesday = function(wednesday) {
    this['wednesday'] = wednesday;
  }


  /**
   * @return {String}
   */
  exports.prototype.getThursday = function() {
    return this['thursday'];
  }

  /**
   * @param {String} thursday
   */
  exports.prototype.setThursday = function(thursday) {
    this['thursday'] = thursday;
  }


  /**
   * @return {String}
   */
  exports.prototype.getFriday = function() {
    return this['friday'];
  }

  /**
   * @param {String} friday
   */
  exports.prototype.setFriday = function(friday) {
    this['friday'] = friday;
  }


  /**
   * @return {String}
   */
  exports.prototype.getSaturday = function() {
    return this['saturday'];
  }

  /**
   * @param {String} saturday
   */
  exports.prototype.setSaturday = function(saturday) {
    this['saturday'] = saturday;
  }


  /**
   * @return {String}
   */
  exports.prototype.getSunday = function() {
    return this['sunday'];
  }

  /**
   * @param {String} sunday
   */
  exports.prototype.setSunday = function(sunday) {
    this['sunday'] = sunday;
  }



  return exports;
}));


