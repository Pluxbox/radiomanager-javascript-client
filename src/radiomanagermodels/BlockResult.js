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
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'radiomanagermodels/Block', 'radiomanagermodels/BlockRelations', 'radiomanagermodels/BlockRelationsBroadcast', 'radiomanagermodels/BlockRelationsItems', 'radiomanagermodels/BlockRelationsProgram'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Block'), require('./BlockRelations'), require('./BlockRelationsBroadcast'), require('./BlockRelationsItems'), require('./BlockRelationsProgram'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.BlockResult = factory(root.radiomanager.ApiClient, root.radiomanager.Block, root.radiomanager.BlockRelations, root.radiomanager.BlockRelationsBroadcast, root.radiomanager.BlockRelationsItems, root.radiomanager.BlockRelationsProgram);
  }
}(this, function(ApiClient, Block, BlockRelations, BlockRelationsBroadcast, BlockRelationsItems, BlockRelationsProgram) {
  'use strict';




  /**
   * The BlockResult model module.
   * @module radiomanagermodels/BlockResult
   * @version 2.0
   */

  /**
   * Constructs a new <code>BlockResult</code>.
   * @alias module:radiomanagermodels/BlockResult
   * @class
   * @implements module:radiomanagermodels/Block
   * @implements module:radiomanagermodels/BlockRelations
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

    Block.call(_this, id, broadcastId, start, stop, createdAt, updatedAt, deletedAt);
    BlockRelations.call(_this);
  };

  /**
   * Constructs a <code>BlockResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/BlockResult} obj Optional instance to populate.
   * @return {module:radiomanagermodels/BlockResult} The populated <code>BlockResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      Block.constructFromObject(data, obj);
      BlockRelations.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement Block interface:
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

  // Implement BlockRelations interface:
  /**
   * @member {module:radiomanagermodels/BlockRelationsItems} items
   */
exports.prototype['items'] = undefined;

  /**
   * @member {module:radiomanagermodels/BlockRelationsBroadcast} broadcast
   */
exports.prototype['broadcast'] = undefined;

  /**
   * @member {module:radiomanagermodels/BlockRelationsProgram} program
   */
exports.prototype['program'] = undefined;



  return exports;
}));


