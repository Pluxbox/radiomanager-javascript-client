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
    define(['ApiClient', 'radiomanagermodels/BroadcastRelationsModelType', 'radiomanagermodels/Story', 'radiomanagermodels/StoryOutputOnly', 'radiomanagermodels/StoryRelations', 'radiomanagermodels/StoryRelationsItems', 'radiomanagermodels/StoryRelationsTags'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BroadcastRelationsModelType'), require('./Story'), require('./StoryOutputOnly'), require('./StoryRelations'), require('./StoryRelationsItems'), require('./StoryRelationsTags'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.StoryResult = factory(root.radiomanager.ApiClient, root.radiomanager.BroadcastRelationsModelType, root.radiomanager.Story, root.radiomanager.StoryOutputOnly, root.radiomanager.StoryRelations, root.radiomanager.StoryRelationsItems, root.radiomanager.StoryRelationsTags);
  }
}(this, function(ApiClient, BroadcastRelationsModelType, Story, StoryOutputOnly, StoryRelations, StoryRelationsItems, StoryRelationsTags) {
  'use strict';




  /**
   * The StoryResult model module.
   * @module radiomanagermodels/StoryResult
   * @version 2.0
   */

  /**
   * Constructs a new <code>StoryResult</code>.
   * @alias module:radiomanagermodels/StoryResult
   * @class
   * @implements module:radiomanagermodels/StoryOutputOnly
   * @implements module:radiomanagermodels/Story
   * @implements module:radiomanagermodels/StoryRelations
   * @param modelTypeId {Number} 
   * @param name {String} 
   * @param tags {module:radiomanagermodels/StoryRelationsTags} 
   */
  var exports = function(modelTypeId, name, tags) {
    var _this = this;

    StoryOutputOnly.call(_this);
    Story.call(_this, modelTypeId, name);
    StoryRelations.call(_this, tags);
  };

  /**
   * Constructs a <code>StoryResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/StoryResult} obj Optional instance to populate.
   * @return {module:radiomanagermodels/StoryResult} The populated <code>StoryResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      StoryOutputOnly.constructFromObject(data, obj);
      Story.constructFromObject(data, obj);
      StoryRelations.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement StoryOutputOnly interface:
  /**
   * @member {Number} id
   */
exports.prototype['id'] = undefined;

  /**
   * @member {Date} created_at
   */
exports.prototype['created_at'] = undefined;

  /**
   * @member {Date} updated_at
   */
exports.prototype['updated_at'] = undefined;

  /**
   * @member {Date} deleted_at
   */
exports.prototype['deleted_at'] = undefined;

  /**
   * @member {Number} _external_station_id
   */
exports.prototype['_external_station_id'] = undefined;

  // Implement Story interface:
  /**
   * @member {Number} model_type_id
   */
exports.prototype['model_type_id'] = undefined;

  /**
   * @member {Boolean} recommended
   */
exports.prototype['recommended'] = undefined;

  /**
   * @member {Object} field_values
   */
exports.prototype['field_values'] = undefined;

  /**
   * @member {String} name
   */
exports.prototype['name'] = undefined;

  /**
   * @member {String} description
   */
exports.prototype['description'] = undefined;

  // Implement StoryRelations interface:
  /**
   * @member {module:radiomanagermodels/StoryRelationsTags} tags
   */
exports.prototype['tags'] = undefined;

  /**
   * @member {module:radiomanagermodels/StoryRelationsItems} items
   */
exports.prototype['items'] = undefined;

  /**
   * @member {module:radiomanagermodels/BroadcastRelationsModelType} model_type
   */
exports.prototype['model_type'] = undefined;



  return exports;
}));


