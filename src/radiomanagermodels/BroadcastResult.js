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
    define(['ApiClient', 'radiomanagermodels/BlockRelationsProgram', 'radiomanagermodels/Broadcast', 'radiomanagermodels/BroadcastOutputOnly', 'radiomanagermodels/BroadcastRelations', 'radiomanagermodels/BroadcastRelationsBlocks', 'radiomanagermodels/BroadcastRelationsItems', 'radiomanagermodels/BroadcastRelationsModelType', 'radiomanagermodels/BroadcastRelationsPresenters', 'radiomanagermodels/BroadcastRelationsTags'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BlockRelationsProgram'), require('./Broadcast'), require('./BroadcastOutputOnly'), require('./BroadcastRelations'), require('./BroadcastRelationsBlocks'), require('./BroadcastRelationsItems'), require('./BroadcastRelationsModelType'), require('./BroadcastRelationsPresenters'), require('./BroadcastRelationsTags'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.BroadcastResult = factory(root.radiomanager.ApiClient, root.radiomanager.BlockRelationsProgram, root.radiomanager.Broadcast, root.radiomanager.BroadcastOutputOnly, root.radiomanager.BroadcastRelations, root.radiomanager.BroadcastRelationsBlocks, root.radiomanager.BroadcastRelationsItems, root.radiomanager.BroadcastRelationsModelType, root.radiomanager.BroadcastRelationsPresenters, root.radiomanager.BroadcastRelationsTags);
  }
}(this, function(ApiClient, BlockRelationsProgram, Broadcast, BroadcastOutputOnly, BroadcastRelations, BroadcastRelationsBlocks, BroadcastRelationsItems, BroadcastRelationsModelType, BroadcastRelationsPresenters, BroadcastRelationsTags) {
  'use strict';




  /**
   * The BroadcastResult model module.
   * @module radiomanagermodels/BroadcastResult
   * @version 2.0
   */

  /**
   * Constructs a new <code>BroadcastResult</code>.
   * @alias module:radiomanagermodels/BroadcastResult
   * @class
   * @implements module:radiomanagermodels/BroadcastOutputOnly
   * @implements module:radiomanagermodels/Broadcast
   * @implements module:radiomanagermodels/BroadcastRelations
   * @param id {Number} 
   * @param updatedAt {Date} 
   * @param createdAt {Date} 
   * @param deletedAt {Date} 
   */
  var exports = function(id, updatedAt, createdAt, deletedAt) {
    var _this = this;

    BroadcastOutputOnly.call(_this, id, updatedAt, createdAt, deletedAt);
    Broadcast.call(_this);
    BroadcastRelations.call(_this);
  };

  /**
   * Constructs a <code>BroadcastResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/BroadcastResult} obj Optional instance to populate.
   * @return {module:radiomanagermodels/BroadcastResult} The populated <code>BroadcastResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      BroadcastOutputOnly.constructFromObject(data, obj);
      Broadcast.constructFromObject(data, obj);
      BroadcastRelations.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement BroadcastOutputOnly interface:
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
   * @member {Number} _external_station_id
   */
exports.prototype['_external_station_id'] = undefined;

  // Implement Broadcast interface:
  /**
   * @member {Number} program_id
   */
exports.prototype['program_id'] = undefined;

  /**
   * @member {Number} model_type_id
   */
exports.prototype['model_type_id'] = undefined;

  /**
   * @member {Number} station_id
   */
exports.prototype['station_id'] = undefined;

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
   * @member {Number} genre_id
   */
exports.prototype['genre_id'] = undefined;

  /**
   * @member {String} description
   */
exports.prototype['description'] = undefined;

  /**
   * @member {String} short_name
   */
exports.prototype['short_name'] = undefined;

  /**
   * @member {String} medium_name
   */
exports.prototype['medium_name'] = undefined;

  /**
   * @member {String} website
   */
exports.prototype['website'] = undefined;

  /**
   * @member {String} email
   */
exports.prototype['email'] = undefined;

  /**
   * @member {Boolean} recommended
   */
exports.prototype['recommended'] = undefined;

  /**
   * @member {String} language
   */
exports.prototype['language'] = undefined;

  /**
   * @member {Boolean} published
   */
exports.prototype['published'] = undefined;

  /**
   * @member {String} repetition_uid
   */
exports.prototype['repetition_uid'] = undefined;

  /**
   * @member {module:radiomanagermodels/Broadcast.RepetitionTypeEnum} repetition_type
   */
exports.prototype['repetition_type'] = undefined;

  /**
   * @member {Date} repetition_end
   */
exports.prototype['repetition_end'] = undefined;

  /**
   * @member {Date} repetition_start
   */
exports.prototype['repetition_start'] = undefined;

  /**
   * @member {String} repetition_days
   */
exports.prototype['repetition_days'] = undefined;

  /**
   * @member {Number} pty_code_id
   */
exports.prototype['pty_code_id'] = undefined;

  // Implement BroadcastRelations interface:
  /**
   * @member {module:radiomanagermodels/BroadcastRelationsItems} items
   */
exports.prototype['items'] = undefined;

  /**
   * @member {module:radiomanagermodels/BroadcastRelationsBlocks} blocks
   */
exports.prototype['blocks'] = undefined;

  /**
   * @member {module:radiomanagermodels/BlockRelationsProgram} program
   */
exports.prototype['program'] = undefined;

  /**
   * @member {module:radiomanagermodels/BroadcastRelationsTags} tags
   */
exports.prototype['tags'] = undefined;

  /**
   * @member {module:radiomanagermodels/BroadcastRelationsPresenters} presenters
   */
exports.prototype['presenters'] = undefined;

  /**
   * @member {module:radiomanagermodels/BroadcastRelationsModelType} model_type
   */
exports.prototype['model_type'] = undefined;



  return exports;
}));


