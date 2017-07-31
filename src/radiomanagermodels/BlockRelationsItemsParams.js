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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.BlockRelationsItemsParams = factory(root.radiomanager.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BlockRelationsItemsParams model module.
   * @module radiomanagermodels/BlockRelationsItemsParams
   * @version 2.0
   */

  /**
   * Constructs a new <code>BlockRelationsItemsParams</code>.
   * @alias module:radiomanagermodels/BlockRelationsItemsParams
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>BlockRelationsItemsParams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/BlockRelationsItemsParams} obj Optional instance to populate.
   * @return {module:radiomanagermodels/BlockRelationsItemsParams} The populated <code>BlockRelationsItemsParams</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('block_id')) {
        obj['block_id'] = ApiClient.convertToType(data['block_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} block_id
   */
  exports.prototype['block_id'] = undefined;


  /**
   * @return {Number}
   */
  exports.prototype.getBlockId = function() {
    return this['block_id'];
  }

  /**
   * @param {Number} blockId
   */
  exports.prototype.setBlockId = function(blockId) {
    this['block_id'] = blockId;
  }



  return exports;
}));


