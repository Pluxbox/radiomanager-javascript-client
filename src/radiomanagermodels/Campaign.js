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
    root.radiomanager.Campaign = factory(root.radiomanager.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Campaign model module.
   * @module radiomanagermodels/Campaign
   * @version 2.0
   */

  /**
   * Constructs a new <code>Campaign</code>.
   * @alias module:radiomanagermodels/Campaign
   * @class
   * @param modelTypeId {Number} 
   * @param start {Date} 
   * @param stop {Date} 
   */
  var exports = function(modelTypeId, start, stop) {
    var _this = this;

    _this['model_type_id'] = modelTypeId;


    _this['start'] = start;
    _this['stop'] = stop;


  };

  /**
   * Constructs a <code>Campaign</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/Campaign} obj Optional instance to populate.
   * @return {module:radiomanagermodels/Campaign} The populated <code>Campaign</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('model_type_id')) {
        obj['model_type_id'] = ApiClient.convertToType(data['model_type_id'], 'Number');
      }
      if (data.hasOwnProperty('field_values')) {
        obj['field_values'] = ApiClient.convertToType(data['field_values'], Object);
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('start')) {
        obj['start'] = ApiClient.convertToType(data['start'], 'Date');
      }
      if (data.hasOwnProperty('stop')) {
        obj['stop'] = ApiClient.convertToType(data['stop'], 'Date');
      }
      if (data.hasOwnProperty('recommended')) {
        obj['recommended'] = ApiClient.convertToType(data['recommended'], 'Boolean');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} model_type_id
   */
  exports.prototype['model_type_id'] = undefined;
  /**
   * @member {Object} field_values
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
   * @member {Boolean} recommended
   */
  exports.prototype['recommended'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;


  /**
   * @return {Number}
   */
  exports.prototype.getModelTypeId = function() {
    return this['model_type_id'];
  }

  /**
   * @param {Number} modelTypeId
   */
  exports.prototype.setModelTypeId = function(modelTypeId) {
    this['model_type_id'] = modelTypeId;
  }


  /**
   * @return {Object}
   */
  exports.prototype.getFieldValues = function() {
    return this['field_values'];
  }

  /**
   * @param {Object} fieldValues
   */
  exports.prototype.setFieldValues = function(fieldValues) {
    this['field_values'] = fieldValues;
  }


  /**
   * @return {String}
   */
  exports.prototype.getTitle = function() {
    return this['title'];
  }

  /**
   * @param {String} title
   */
  exports.prototype.setTitle = function(title) {
    this['title'] = title;
  }


  /**
   * @return {Date}
   */
  exports.prototype.getStart = function() {
    return this['start'];
  }

  /**
   * @param {Date} start
   */
  exports.prototype.setStart = function(start) {
    this['start'] = start;
  }


  /**
   * @return {Date}
   */
  exports.prototype.getStop = function() {
    return this['stop'];
  }

  /**
   * @param {Date} stop
   */
  exports.prototype.setStop = function(stop) {
    this['stop'] = stop;
  }


  /**
   * @return {Boolean}
   */
  exports.prototype.getRecommended = function() {
    return this['recommended'];
  }

  /**
   * @param {Boolean} recommended
   */
  exports.prototype.setRecommended = function(recommended) {
    this['recommended'] = recommended;
  }


  /**
   * @return {String}
   */
  exports.prototype.getDescription = function() {
    return this['description'];
  }

  /**
   * @param {String} description
   */
  exports.prototype.setDescription = function(description) {
    this['description'] = description;
  }



  return exports;
}));


