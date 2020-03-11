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
    define(['ApiClient', 'models/BroadcastRelationsModelType', 'models/CampaignRelationsItems'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BroadcastRelationsModelType'), require('./CampaignRelationsItems'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.CampaignRelations = factory(root.radiomanager.ApiClient, root.radiomanager.BroadcastRelationsModelType, root.radiomanager.CampaignRelationsItems);
  }
}(this, function(ApiClient, BroadcastRelationsModelType, CampaignRelationsItems) {
  'use strict';



  /**
   * The CampaignRelations model module.
   * @module models/CampaignRelations
   * @version 2.0
   */

  /**
   * Constructs a new <code>CampaignRelations</code>.
   * @alias module:models/CampaignRelations
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>CampaignRelations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/CampaignRelations} obj Optional instance to populate.
   * @return {module:models/CampaignRelations} The populated <code>CampaignRelations</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('items')) {
        obj['items'] = CampaignRelationsItems.constructFromObject(data['items']);
      }
      if (data.hasOwnProperty('model_type')) {
        obj['model_type'] = BroadcastRelationsModelType.constructFromObject(data['model_type']);
      }
    }
    return obj;
  }

  /**
   * @member {module:models/CampaignRelationsItems} items
   */
  exports.prototype['items'] = undefined;
  /**
   * @member {module:models/BroadcastRelationsModelType} model_type
   */
  exports.prototype['model_type'] = undefined;


  /**
   * @return {module:models/CampaignRelationsItems}
   */
  exports.prototype.getItems = function() {
    return this['items'];
  }

  /**
   * @param {module:models/CampaignRelationsItems} items
   */
  exports.prototype.setItems = function(items) {
    this['items'] = items;
  }


  /**
   * @return {module:models/BroadcastRelationsModelType}
   */
  exports.prototype.getModelType = function() {
    return this['model_type'];
  }

  /**
   * @param {module:models/BroadcastRelationsModelType} modelType
   */
  exports.prototype.setModelType = function(modelType) {
    this['model_type'] = modelType;
  }



  return exports;
}));

