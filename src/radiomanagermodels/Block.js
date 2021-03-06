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
    root.radiomanager.Block = factory(root.radiomanager.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Block model module.
   * @module radiomanagermodels/Block
   * @version 2.0
   */

  /**
   * Constructs a new <code>Block</code>.
   * @alias module:radiomanagermodels/Block
   * @class
   * @param id {Number} ID of the current Block.
   * @param broadcastId {Number} Currently assigned Broadcast connected to the current Block, identified by the Broadcast ID.
   * @param start {Date} Start of the Block (formatted as a DateTime object), saved with an TimeZone.
   * @param stop {Date} End of the Block (formatted as a DateTime object), saved with an TimeZone.
   * @param createdAt {Date} Time of the creation of the Block (formatted as a DateTime object), saved with an TimeZone.
   * @param updatedAt {Date} Time of the last update of the Block (formatted as a DateTime object), saved with an TimeZone.
   * @param deletedAt {Date} Moment when the Block got deleted (formatted as a DateTime object), saved with an TimeZone.
   */
  var exports = function(id, broadcastId, start, stop, createdAt, updatedAt, deletedAt) {
    var _this = this;

    _this['id'] = id;
    _this['broadcast_id'] = broadcastId;
    _this['start'] = start;
    _this['stop'] = stop;
    _this['created_at'] = createdAt;
    _this['updated_at'] = updatedAt;
    _this['deleted_at'] = deletedAt;

  };

  /**
   * Constructs a <code>Block</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/Block} obj Optional instance to populate.
   * @return {module:radiomanagermodels/Block} The populated <code>Block</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('broadcast_id')) {
        obj['broadcast_id'] = ApiClient.convertToType(data['broadcast_id'], 'Number');
      }
      if (data.hasOwnProperty('start')) {
        obj['start'] = ApiClient.convertToType(data['start'], 'Date');
      }
      if (data.hasOwnProperty('stop')) {
        obj['stop'] = ApiClient.convertToType(data['stop'], 'Date');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
      if (data.hasOwnProperty('deleted_at')) {
        obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
      }
      if (data.hasOwnProperty('_external_station_id')) {
        obj['_external_station_id'] = ApiClient.convertToType(data['_external_station_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * ID of the current Block.
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Currently assigned Broadcast connected to the current Block, identified by the Broadcast ID.
   * @member {Number} broadcast_id
   */
  exports.prototype['broadcast_id'] = undefined;
  /**
   * Start of the Block (formatted as a DateTime object), saved with an TimeZone.
   * @member {Date} start
   */
  exports.prototype['start'] = undefined;
  /**
   * End of the Block (formatted as a DateTime object), saved with an TimeZone.
   * @member {Date} stop
   */
  exports.prototype['stop'] = undefined;
  /**
   * Time of the creation of the Block (formatted as a DateTime object), saved with an TimeZone.
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * Time of the last update of the Block (formatted as a DateTime object), saved with an TimeZone.
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;
  /**
   * Moment when the Block got deleted (formatted as a DateTime object), saved with an TimeZone.
   * @member {Date} deleted_at
   */
  exports.prototype['deleted_at'] = undefined;
  /**
   * @member {Number} _external_station_id
   */
  exports.prototype['_external_station_id'] = undefined;


  /**
   * Returns ID of the current Block.
   * @return {Number}
   */
  exports.prototype.getId = function() {
    return this['id'];
  }

  /**
   * Sets ID of the current Block.
   * @param {Number} id ID of the current Block.
   */
  exports.prototype.setId = function(id) {
    this['id'] = id;
  }


  /**
   * Returns Currently assigned Broadcast connected to the current Block, identified by the Broadcast ID.
   * @return {Number}
   */
  exports.prototype.getBroadcastId = function() {
    return this['broadcast_id'];
  }

  /**
   * Sets Currently assigned Broadcast connected to the current Block, identified by the Broadcast ID.
   * @param {Number} broadcastId Currently assigned Broadcast connected to the current Block, identified by the Broadcast ID.
   */
  exports.prototype.setBroadcastId = function(broadcastId) {
    this['broadcast_id'] = broadcastId;
  }


  /**
   * Returns Start of the Block (formatted as a DateTime object), saved with an TimeZone.
   * @return {Date}
   */
  exports.prototype.getStart = function() {
    return this['start'];
  }

  /**
   * Sets Start of the Block (formatted as a DateTime object), saved with an TimeZone.
   * @param {Date} start Start of the Block (formatted as a DateTime object), saved with an TimeZone.
   */
  exports.prototype.setStart = function(start) {
    this['start'] = start;
  }


  /**
   * Returns End of the Block (formatted as a DateTime object), saved with an TimeZone.
   * @return {Date}
   */
  exports.prototype.getStop = function() {
    return this['stop'];
  }

  /**
   * Sets End of the Block (formatted as a DateTime object), saved with an TimeZone.
   * @param {Date} stop End of the Block (formatted as a DateTime object), saved with an TimeZone.
   */
  exports.prototype.setStop = function(stop) {
    this['stop'] = stop;
  }


  /**
   * Returns Time of the creation of the Block (formatted as a DateTime object), saved with an TimeZone.
   * @return {Date}
   */
  exports.prototype.getCreatedAt = function() {
    return this['created_at'];
  }

  /**
   * Sets Time of the creation of the Block (formatted as a DateTime object), saved with an TimeZone.
   * @param {Date} createdAt Time of the creation of the Block (formatted as a DateTime object), saved with an TimeZone.
   */
  exports.prototype.setCreatedAt = function(createdAt) {
    this['created_at'] = createdAt;
  }


  /**
   * Returns Time of the last update of the Block (formatted as a DateTime object), saved with an TimeZone.
   * @return {Date}
   */
  exports.prototype.getUpdatedAt = function() {
    return this['updated_at'];
  }

  /**
   * Sets Time of the last update of the Block (formatted as a DateTime object), saved with an TimeZone.
   * @param {Date} updatedAt Time of the last update of the Block (formatted as a DateTime object), saved with an TimeZone.
   */
  exports.prototype.setUpdatedAt = function(updatedAt) {
    this['updated_at'] = updatedAt;
  }


  /**
   * Returns Moment when the Block got deleted (formatted as a DateTime object), saved with an TimeZone.
   * @return {Date}
   */
  exports.prototype.getDeletedAt = function() {
    return this['deleted_at'];
  }

  /**
   * Sets Moment when the Block got deleted (formatted as a DateTime object), saved with an TimeZone.
   * @param {Date} deletedAt Moment when the Block got deleted (formatted as a DateTime object), saved with an TimeZone.
   */
  exports.prototype.setDeletedAt = function(deletedAt) {
    this['deleted_at'] = deletedAt;
  }


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


