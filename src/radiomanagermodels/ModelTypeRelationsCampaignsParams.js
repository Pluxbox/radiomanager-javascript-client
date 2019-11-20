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
    root.radiomanager.ModelTypeRelationsCampaignsParams = factory(root.radiomanager.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ModelTypeRelationsCampaignsParams model module.
   * @module radiomanagermodels/ModelTypeRelationsCampaignsParams
   * @version 2.0
   */

  /**
   * Constructs a new <code>ModelTypeRelationsCampaignsParams</code>.
   * @alias module:radiomanagermodels/ModelTypeRelationsCampaignsParams
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ModelTypeRelationsCampaignsParams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/ModelTypeRelationsCampaignsParams} obj Optional instance to populate.
   * @return {module:radiomanagermodels/ModelTypeRelationsCampaignsParams} The populated <code>ModelTypeRelationsCampaignsParams</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('model_type_id')) {
        obj['model_type_id'] = ApiClient.convertToType(data['model_type_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} model_type_id
   */
  exports.prototype['model_type_id'] = undefined;


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



  return exports;
}));


