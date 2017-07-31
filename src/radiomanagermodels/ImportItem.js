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
    define(['ApiClient', 'radiomanagermodels/ImportItemFieldValues'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ImportItemFieldValues'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.ImportItem = factory(root.radiomanager.ApiClient, root.radiomanager.ImportItemFieldValues);
  }
}(this, function(ApiClient, ImportItemFieldValues) {
  'use strict';




  /**
   * The ImportItem model module.
   * @module radiomanagermodels/ImportItem
   * @version 2.0
   */

  /**
   * Constructs a new <code>ImportItem</code>.
   * @alias module:radiomanagermodels/ImportItem
   * @class
   * @param modelTypeId {Number} 
   * @param externalId {Number} 
   */
  var exports = function(modelTypeId, externalId) {
    var _this = this;

    _this['model_type_id'] = modelTypeId;
    _this['external_id'] = externalId;









  };

  /**
   * Constructs a <code>ImportItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/ImportItem} obj Optional instance to populate.
   * @return {module:radiomanagermodels/ImportItem} The populated <code>ImportItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('model_type_id')) {
        obj['model_type_id'] = ApiClient.convertToType(data['model_type_id'], 'Number');
      }
      if (data.hasOwnProperty('external_id')) {
        obj['external_id'] = ApiClient.convertToType(data['external_id'], 'Number');
      }
      if (data.hasOwnProperty('field_values')) {
        obj['field_values'] = ImportItemFieldValues.constructFromObject(data['field_values']);
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
      }
      if (data.hasOwnProperty('start')) {
        obj['start'] = ApiClient.convertToType(data['start'], 'Date');
      }
      if (data.hasOwnProperty('recommended')) {
        obj['recommended'] = ApiClient.convertToType(data['recommended'], 'Boolean');
      }
      if (data.hasOwnProperty('static_start')) {
        obj['static_start'] = ApiClient.convertToType(data['static_start'], 'Boolean');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], 'String');
      }
      if (data.hasOwnProperty('contacts')) {
        obj['contacts'] = ApiClient.convertToType(data['contacts'], ['Number']);
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} model_type_id
   */
  exports.prototype['model_type_id'] = undefined;
  /**
   * @member {Number} external_id
   */
  exports.prototype['external_id'] = undefined;
  /**
   * @member {module:radiomanagermodels/ImportItemFieldValues} field_values
   */
  exports.prototype['field_values'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {Number} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * @member {Date} start
   */
  exports.prototype['start'] = undefined;
  /**
   * @member {Boolean} recommended
   */
  exports.prototype['recommended'] = undefined;
  /**
   * @member {Boolean} static_start
   */
  exports.prototype['static_start'] = undefined;
  /**
   * @member {String} details
   */
  exports.prototype['details'] = undefined;
  /**
   * @member {Array.<Number>} contacts
   */
  exports.prototype['contacts'] = undefined;
  /**
   * @member {Array.<Number>} tags
   */
  exports.prototype['tags'] = undefined;


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
   * @return {Number}
   */
  exports.prototype.getExternalId = function() {
    return this['external_id'];
  }

  /**
   * @param {Number} externalId
   */
  exports.prototype.setExternalId = function(externalId) {
    this['external_id'] = externalId;
  }


  /**
   * @return {module:radiomanagermodels/ImportItemFieldValues}
   */
  exports.prototype.getFieldValues = function() {
    return this['field_values'];
  }

  /**
   * @param {module:radiomanagermodels/ImportItemFieldValues} fieldValues
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
   * @return {Number}
   */
  exports.prototype.getDuration = function() {
    return this['duration'];
  }

  /**
   * @param {Number} duration
   */
  exports.prototype.setDuration = function(duration) {
    this['duration'] = duration;
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
   * @return {Boolean}
   */
  exports.prototype.getStaticStart = function() {
    return this['static_start'];
  }

  /**
   * @param {Boolean} staticStart
   */
  exports.prototype.setStaticStart = function(staticStart) {
    this['static_start'] = staticStart;
  }


  /**
   * @return {String}
   */
  exports.prototype.getDetails = function() {
    return this['details'];
  }

  /**
   * @param {String} details
   */
  exports.prototype.setDetails = function(details) {
    this['details'] = details;
  }


  /**
   * @return {Array.<Number>}
   */
  exports.prototype.getContacts = function() {
    return this['contacts'];
  }

  /**
   * @param {Array.<Number>} contacts
   */
  exports.prototype.setContacts = function(contacts) {
    this['contacts'] = contacts;
  }


  /**
   * @return {Array.<Number>}
   */
  exports.prototype.getTags = function() {
    return this['tags'];
  }

  /**
   * @param {Array.<Number>} tags
   */
  exports.prototype.setTags = function(tags) {
    this['tags'] = tags;
  }



  return exports;
}));


