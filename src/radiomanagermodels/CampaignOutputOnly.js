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
    define(['ApiClient', 'radiomanagermodels/Item'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Item'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.CampaignOutputOnly = factory(root.radiomanager.ApiClient, root.radiomanager.Item);
  }
}(this, function(ApiClient, Item) {
  'use strict';




  /**
   * The CampaignOutputOnly model module.
   * @module radiomanagermodels/CampaignOutputOnly
   * @version 2.0
   */

  /**
   * Constructs a new <code>CampaignOutputOnly</code>.
   * @alias module:radiomanagermodels/CampaignOutputOnly
   * @class
   * @param id {Number} 
   * @param updatedAt {Date} 
   * @param createdAt {Date} 
   * @param deletedAt {Date} 
   */
  var exports = function(id, updatedAt, createdAt, deletedAt) {
    var _this = this;

    _this['id'] = id;
    _this['updated_at'] = updatedAt;
    _this['created_at'] = createdAt;
    _this['deleted_at'] = deletedAt;


  };

  /**
   * Constructs a <code>CampaignOutputOnly</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/CampaignOutputOnly} obj Optional instance to populate.
   * @return {module:radiomanagermodels/CampaignOutputOnly} The populated <code>CampaignOutputOnly</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('deleted_at')) {
        obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
      }
      if (data.hasOwnProperty('item')) {
        obj['item'] = ApiClient.convertToType(data['item'], [Item]);
      }
      if (data.hasOwnProperty('_external_station_id')) {
        obj['_external_station_id'] = ApiClient.convertToType(data['_external_station_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;
  /**
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {Date} deleted_at
   */
  exports.prototype['deleted_at'] = undefined;
  /**
   * @member {Array.<module:radiomanagermodels/Item>} item
   */
  exports.prototype['item'] = undefined;
  /**
   * @member {Number} _external_station_id
   */
  exports.prototype['_external_station_id'] = undefined;


  /**
   * @return {Number}
   */
  exports.prototype.getId = function() {
    return this['id'];
  }

  /**
   * @param {Number} id
   */
  exports.prototype.setId = function(id) {
    this['id'] = id;
  }


  /**
   * @return {Date}
   */
  exports.prototype.getUpdatedAt = function() {
    return this['updated_at'];
  }

  /**
   * @param {Date} updatedAt
   */
  exports.prototype.setUpdatedAt = function(updatedAt) {
    this['updated_at'] = updatedAt;
  }


  /**
   * @return {Date}
   */
  exports.prototype.getCreatedAt = function() {
    return this['created_at'];
  }

  /**
   * @param {Date} createdAt
   */
  exports.prototype.setCreatedAt = function(createdAt) {
    this['created_at'] = createdAt;
  }


  /**
   * @return {Date}
   */
  exports.prototype.getDeletedAt = function() {
    return this['deleted_at'];
  }

  /**
   * @param {Date} deletedAt
   */
  exports.prototype.setDeletedAt = function(deletedAt) {
    this['deleted_at'] = deletedAt;
  }


  /**
   * @return {Array.<module:radiomanagermodels/Item>}
   */
  exports.prototype.getItem = function() {
    return this['item'];
  }

  /**
   * @param {Array.<module:radiomanagermodels/Item>} item
   */
  exports.prototype.setItem = function(item) {
    this['item'] = item;
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

