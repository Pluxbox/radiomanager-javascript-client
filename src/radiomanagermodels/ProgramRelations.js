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
    define(['ApiClient', 'radiomanagermodels/BroadcastRelationsModelType', 'radiomanagermodels/ProgramRelationsBlocks', 'radiomanagermodels/ProgramRelationsBroadcasts', 'radiomanagermodels/ProgramRelationsItems', 'radiomanagermodels/ProgramRelationsPresenters', 'radiomanagermodels/ProgramRelationsTags'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BroadcastRelationsModelType'), require('./ProgramRelationsBlocks'), require('./ProgramRelationsBroadcasts'), require('./ProgramRelationsItems'), require('./ProgramRelationsPresenters'), require('./ProgramRelationsTags'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.ProgramRelations = factory(root.radiomanager.ApiClient, root.radiomanager.BroadcastRelationsModelType, root.radiomanager.ProgramRelationsBlocks, root.radiomanager.ProgramRelationsBroadcasts, root.radiomanager.ProgramRelationsItems, root.radiomanager.ProgramRelationsPresenters, root.radiomanager.ProgramRelationsTags);
  }
}(this, function(ApiClient, BroadcastRelationsModelType, ProgramRelationsBlocks, ProgramRelationsBroadcasts, ProgramRelationsItems, ProgramRelationsPresenters, ProgramRelationsTags) {
  'use strict';




  /**
   * The ProgramRelations model module.
   * @module radiomanagermodels/ProgramRelations
   * @version 2.0
   */

  /**
   * Constructs a new <code>ProgramRelations</code>.
   * @alias module:radiomanagermodels/ProgramRelations
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ProgramRelations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/ProgramRelations} obj Optional instance to populate.
   * @return {module:radiomanagermodels/ProgramRelations} The populated <code>ProgramRelations</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('items')) {
        obj['items'] = ProgramRelationsItems.constructFromObject(data['items']);
      }
      if (data.hasOwnProperty('blocks')) {
        obj['blocks'] = ProgramRelationsBlocks.constructFromObject(data['blocks']);
      }
      if (data.hasOwnProperty('broadcasts')) {
        obj['broadcasts'] = ProgramRelationsBroadcasts.constructFromObject(data['broadcasts']);
      }
      if (data.hasOwnProperty('presenters')) {
        obj['presenters'] = ProgramRelationsPresenters.constructFromObject(data['presenters']);
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ProgramRelationsTags.constructFromObject(data['tags']);
      }
      if (data.hasOwnProperty('model_type')) {
        obj['model_type'] = BroadcastRelationsModelType.constructFromObject(data['model_type']);
      }
    }
    return obj;
  }

  /**
   * @member {module:radiomanagermodels/ProgramRelationsItems} items
   */
  exports.prototype['items'] = undefined;
  /**
   * @member {module:radiomanagermodels/ProgramRelationsBlocks} blocks
   */
  exports.prototype['blocks'] = undefined;
  /**
   * @member {module:radiomanagermodels/ProgramRelationsBroadcasts} broadcasts
   */
  exports.prototype['broadcasts'] = undefined;
  /**
   * @member {module:radiomanagermodels/ProgramRelationsPresenters} presenters
   */
  exports.prototype['presenters'] = undefined;
  /**
   * @member {module:radiomanagermodels/ProgramRelationsTags} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * @member {module:radiomanagermodels/BroadcastRelationsModelType} model_type
   */
  exports.prototype['model_type'] = undefined;


  /**
   * @return {module:radiomanagermodels/ProgramRelationsItems}
   */
  exports.prototype.getItems = function() {
    return this['items'];
  }

  /**
   * @param {module:radiomanagermodels/ProgramRelationsItems} items
   */
  exports.prototype.setItems = function(items) {
    this['items'] = items;
  }


  /**
   * @return {module:radiomanagermodels/ProgramRelationsBlocks}
   */
  exports.prototype.getBlocks = function() {
    return this['blocks'];
  }

  /**
   * @param {module:radiomanagermodels/ProgramRelationsBlocks} blocks
   */
  exports.prototype.setBlocks = function(blocks) {
    this['blocks'] = blocks;
  }


  /**
   * @return {module:radiomanagermodels/ProgramRelationsBroadcasts}
   */
  exports.prototype.getBroadcasts = function() {
    return this['broadcasts'];
  }

  /**
   * @param {module:radiomanagermodels/ProgramRelationsBroadcasts} broadcasts
   */
  exports.prototype.setBroadcasts = function(broadcasts) {
    this['broadcasts'] = broadcasts;
  }


  /**
   * @return {module:radiomanagermodels/ProgramRelationsPresenters}
   */
  exports.prototype.getPresenters = function() {
    return this['presenters'];
  }

  /**
   * @param {module:radiomanagermodels/ProgramRelationsPresenters} presenters
   */
  exports.prototype.setPresenters = function(presenters) {
    this['presenters'] = presenters;
  }


  /**
   * @return {module:radiomanagermodels/ProgramRelationsTags}
   */
  exports.prototype.getTags = function() {
    return this['tags'];
  }

  /**
   * @param {module:radiomanagermodels/ProgramRelationsTags} tags
   */
  exports.prototype.setTags = function(tags) {
    this['tags'] = tags;
  }


  /**
   * @return {module:radiomanagermodels/BroadcastRelationsModelType}
   */
  exports.prototype.getModelType = function() {
    return this['model_type'];
  }

  /**
   * @param {module:radiomanagermodels/BroadcastRelationsModelType} modelType
   */
  exports.prototype.setModelType = function(modelType) {
    this['model_type'] = modelType;
  }



  return exports;
}));


