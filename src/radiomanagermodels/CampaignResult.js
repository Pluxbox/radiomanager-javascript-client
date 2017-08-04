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
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'radiomanagermodels/BroadcastRelationsModelType', 'radiomanagermodels/Campaign', 'radiomanagermodels/CampaignOutputOnly', 'radiomanagermodels/CampaignRelations', 'radiomanagermodels/CampaignRelationsItems', 'radiomanagermodels/Item'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BroadcastRelationsModelType'), require('./Campaign'), require('./CampaignOutputOnly'), require('./CampaignRelations'), require('./CampaignRelationsItems'), require('./Item'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.CampaignResult = factory(root.radiomanager.ApiClient, root.radiomanager.BroadcastRelationsModelType, root.radiomanager.Campaign, root.radiomanager.CampaignOutputOnly, root.radiomanager.CampaignRelations, root.radiomanager.CampaignRelationsItems, root.radiomanager.Item);
  }
}(this, function(ApiClient, BroadcastRelationsModelType, Campaign, CampaignOutputOnly, CampaignRelations, CampaignRelationsItems, Item) {
  'use strict';




  /**
   * The CampaignResult model module.
   * @module radiomanagermodels/CampaignResult
   * @version 2.0
   */

  /**
   * Constructs a new <code>CampaignResult</code>.
   * @alias module:radiomanagermodels/CampaignResult
   * @class
   * @implements module:radiomanagermodels/CampaignOutputOnly
   * @implements module:radiomanagermodels/Campaign
   * @implements module:radiomanagermodels/CampaignRelations
   * @param id {Number} 
   * @param updatedAt {Date} 
   * @param createdAt {Date} 
   * @param deletedAt {Date} 
   * @param modelTypeId {Number} 
   * @param start {Date} 
   * @param stop {Date} 
   */
  var exports = function(id, updatedAt, createdAt, deletedAt, modelTypeId, start, stop) {
    var _this = this;

    CampaignOutputOnly.call(_this, id, updatedAt, createdAt, deletedAt);
    Campaign.call(_this, modelTypeId, start, stop);
    CampaignRelations.call(_this);
  };

  /**
   * Constructs a <code>CampaignResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/CampaignResult} obj Optional instance to populate.
   * @return {module:radiomanagermodels/CampaignResult} The populated <code>CampaignResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      CampaignOutputOnly.constructFromObject(data, obj);
      Campaign.constructFromObject(data, obj);
      CampaignRelations.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement CampaignOutputOnly interface:
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

  // Implement Campaign interface:
  /**
   * @member {Number} model_type_id
   */
exports.prototype['model_type_id'] = undefined;

  /**
   * @member {Array.<Object>} field_values
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

  // Implement CampaignRelations interface:
  /**
   * @member {module:radiomanagermodels/CampaignRelationsItems} items
   */
exports.prototype['items'] = undefined;

  /**
   * @member {module:radiomanagermodels/BroadcastRelationsModelType} model_type
   */
exports.prototype['model_type'] = undefined;



  return exports;
}));


