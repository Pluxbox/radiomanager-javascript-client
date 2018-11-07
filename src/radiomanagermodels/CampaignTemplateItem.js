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
    root.radiomanager.CampaignTemplateItem = factory(root.radiomanager.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CampaignTemplateItem model module.
   * @module radiomanagermodels/CampaignTemplateItem
   * @version 2.0
   */

  /**
   * Constructs a new <code>CampaignTemplateItem</code>.
   * @alias module:radiomanagermodels/CampaignTemplateItem
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>CampaignTemplateItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/CampaignTemplateItem} obj Optional instance to populate.
   * @return {module:radiomanagermodels/CampaignTemplateItem} The populated <code>CampaignTemplateItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('model_type_id')) {
        obj['model_type_id'] = ApiClient.convertToType(data['model_type_id'], 'Number');
      }
      if (data.hasOwnProperty('external_id')) {
        obj['external_id'] = ApiClient.convertToType(data['external_id'], 'String');
      }
      if (data.hasOwnProperty('field_values')) {
        obj['field_values'] = ApiClient.convertToType(data['field_values'], Object);
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
      }
      if (data.hasOwnProperty('recommended')) {
        obj['recommended'] = ApiClient.convertToType(data['recommended'], 'Boolean');
      }
      if (data.hasOwnProperty('static_start')) {
        obj['static_start'] = ApiClient.convertToType(data['static_start'], 'Boolean');
      }
      if (data.hasOwnProperty('_deltas')) {
        obj['_deltas'] = ApiClient.convertToType(data['_deltas'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {Number} model_type_id
   */
  exports.prototype['model_type_id'] = undefined;
  /**
   * @member {String} external_id
   */
  exports.prototype['external_id'] = undefined;
  /**
   * @member {Object} field_values
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
   * @member {Boolean} recommended
   */
  exports.prototype['recommended'] = undefined;
  /**
   * @member {Boolean} static_start
   */
  exports.prototype['static_start'] = undefined;
  /**
   * @member {Object} _deltas
   */
  exports.prototype['_deltas'] = undefined;


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
   * @return {String}
   */
  exports.prototype.getExternalId = function() {
    return this['external_id'];
  }

  /**
   * @param {String} externalId
   */
  exports.prototype.setExternalId = function(externalId) {
    this['external_id'] = externalId;
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
   * @return {Object}
   */
  exports.prototype.getDeltas = function() {
    return this['_deltas'];
  }

  /**
   * @param {Object} deltas
   */
  exports.prototype.setDeltas = function(deltas) {
    this['_deltas'] = deltas;
  }



  return exports;
}));

