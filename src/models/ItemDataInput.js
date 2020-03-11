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
    define(['ApiClient', 'models/Item', 'models/ItemInputOnly'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Item'), require('./ItemInputOnly'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.ItemDataInput = factory(root.radiomanager.ApiClient, root.radiomanager.Item, root.radiomanager.ItemInputOnly);
  }
}(this, function(ApiClient, Item, ItemInputOnly) {
  'use strict';



  /**
   * The ItemDataInput model module.
   * @module models/ItemDataInput
   * @version 2.0
   */

  /**
   * Constructs a new <code>ItemDataInput</code>.
   * @alias module:models/ItemDataInput
   * @class
   * @implements module:models/Item
   * @implements module:models/ItemInputOnly
   * @param modelTypeId {Number} 
   */
  var exports = function(modelTypeId) {
    var _this = this;

    Item.call(_this, modelTypeId);
    ItemInputOnly.call(_this);
    _this['model_type_id'] = modelTypeId;
  };

  /**
   * Constructs a <code>ItemDataInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/ItemDataInput} obj Optional instance to populate.
   * @return {module:models/ItemDataInput} The populated <code>ItemDataInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      Item.constructFromObject(data, obj);
      ItemInputOnly.constructFromObject(data, obj);
      if (data.hasOwnProperty('model_type_id')) {
        obj['model_type_id'] = ApiClient.convertToType(data['model_type_id'], 'Number');
      }
      if (data.hasOwnProperty('block_id')) {
        obj['block_id'] = ApiClient.convertToType(data['block_id'], 'Number');
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
      if (data.hasOwnProperty('start')) {
        obj['start'] = ApiClient.convertToType(data['start'], 'Date');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('import')) {
        obj['import'] = ApiClient.convertToType(data['import'], 'Number');
      }
      if (data.hasOwnProperty('campaign_id')) {
        obj['campaign_id'] = ApiClient.convertToType(data['campaign_id'], 'Number');
      }
      if (data.hasOwnProperty('recommended')) {
        obj['recommended'] = ApiClient.convertToType(data['recommended'], 'Boolean');
      }
      if (data.hasOwnProperty('station_draft_id')) {
        obj['station_draft_id'] = ApiClient.convertToType(data['station_draft_id'], 'Number');
      }
      if (data.hasOwnProperty('program_draft_id')) {
        obj['program_draft_id'] = ApiClient.convertToType(data['program_draft_id'], 'Number');
      }
      if (data.hasOwnProperty('user_draft_id')) {
        obj['user_draft_id'] = ApiClient.convertToType(data['user_draft_id'], 'Number');
      }
      if (data.hasOwnProperty('static_start')) {
        obj['static_start'] = ApiClient.convertToType(data['static_start'], 'Boolean');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], 'String');
      }
      if (data.hasOwnProperty('_previous_id')) {
        obj['_previous_id'] = ApiClient.convertToType(data['_previous_id'], 'Number');
      }
      if (data.hasOwnProperty('_before_id')) {
        obj['_before_id'] = ApiClient.convertToType(data['_before_id'], 'Number');
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
   * @member {Number} block_id
   */
  exports.prototype['block_id'] = undefined;
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
   * @member {Date} start
   */
  exports.prototype['start'] = undefined;
  /**
   * @member {module:models/ItemDataInput.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Number} import
   */
  exports.prototype['import'] = undefined;
  /**
   * @member {Number} campaign_id
   */
  exports.prototype['campaign_id'] = undefined;
  /**
   * @member {Boolean} recommended
   */
  exports.prototype['recommended'] = undefined;
  /**
   * @member {Number} station_draft_id
   */
  exports.prototype['station_draft_id'] = undefined;
  /**
   * @member {Number} program_draft_id
   */
  exports.prototype['program_draft_id'] = undefined;
  /**
   * @member {Number} user_draft_id
   */
  exports.prototype['user_draft_id'] = undefined;
  /**
   * @member {Boolean} static_start
   */
  exports.prototype['static_start'] = undefined;
  /**
   * @member {String} details
   */
  exports.prototype['details'] = undefined;
  /**
   * @member {Number} _previous_id
   */
  exports.prototype['_previous_id'] = undefined;
  /**
   * @member {Number} _before_id
   */
  exports.prototype['_before_id'] = undefined;
  /**
   * @member {Array.<Number>} contacts
   */
  exports.prototype['contacts'] = undefined;
  /**
   * @member {Array.<Number>} tags
   */
  exports.prototype['tags'] = undefined;

  // Implement Item interface:
  /**
   * @member {Number} model_type_id
   */
exports.prototype['model_type_id'] = undefined;

  /**
   * @member {Number} block_id
   */
exports.prototype['block_id'] = undefined;

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
   * @member {Date} start
   */
exports.prototype['start'] = undefined;

  /**
   * @member {module:models/Item.StatusEnum} status
   */
exports.prototype['status'] = undefined;

  /**
   * @member {Number} import
   */
exports.prototype['import'] = undefined;

  /**
   * @member {Number} campaign_id
   */
exports.prototype['campaign_id'] = undefined;

  /**
   * @member {Boolean} recommended
   */
exports.prototype['recommended'] = undefined;

  /**
   * @member {Number} station_draft_id
   */
exports.prototype['station_draft_id'] = undefined;

  /**
   * @member {Number} program_draft_id
   */
exports.prototype['program_draft_id'] = undefined;

  /**
   * @member {Number} user_draft_id
   */
exports.prototype['user_draft_id'] = undefined;

  /**
   * @member {Boolean} static_start
   */
exports.prototype['static_start'] = undefined;

  /**
   * @member {String} details
   */
exports.prototype['details'] = undefined;

  // Implement ItemInputOnly interface:
  /**
   * @member {Number} _previous_id
   */
exports.prototype['_previous_id'] = undefined;

  /**
   * @member {Number} _before_id
   */
exports.prototype['_before_id'] = undefined;

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
  exports.prototype.getBlockId = function() {
    return this['block_id'];
  }

  /**
   * @param {Number} blockId
   */
  exports.prototype.setBlockId = function(blockId) {
    this['block_id'] = blockId;
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
   * @return {module:models/ItemDataInput.StatusEnum}
   */
  exports.prototype.getStatus = function() {
    return this['status'];
  }

  /**
   * @param {module:models/ItemDataInput.StatusEnum} status
   */
  exports.prototype.setStatus = function(status) {
    this['status'] = status;
  }


  /**
   * @return {Number}
   */
  exports.prototype.getImport = function() {
    return this['import'];
  }

  /**
   * @param {Number} _import
   */
  exports.prototype.setImport = function(_import) {
    this['import'] = _import;
  }


  /**
   * @return {Number}
   */
  exports.prototype.getCampaignId = function() {
    return this['campaign_id'];
  }

  /**
   * @param {Number} campaignId
   */
  exports.prototype.setCampaignId = function(campaignId) {
    this['campaign_id'] = campaignId;
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
   * @return {Number}
   */
  exports.prototype.getStationDraftId = function() {
    return this['station_draft_id'];
  }

  /**
   * @param {Number} stationDraftId
   */
  exports.prototype.setStationDraftId = function(stationDraftId) {
    this['station_draft_id'] = stationDraftId;
  }


  /**
   * @return {Number}
   */
  exports.prototype.getProgramDraftId = function() {
    return this['program_draft_id'];
  }

  /**
   * @param {Number} programDraftId
   */
  exports.prototype.setProgramDraftId = function(programDraftId) {
    this['program_draft_id'] = programDraftId;
  }


  /**
   * @return {Number}
   */
  exports.prototype.getUserDraftId = function() {
    return this['user_draft_id'];
  }

  /**
   * @param {Number} userDraftId
   */
  exports.prototype.setUserDraftId = function(userDraftId) {
    this['user_draft_id'] = userDraftId;
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
   * @return {Number}
   */
  exports.prototype.getPreviousId = function() {
    return this['_previous_id'];
  }

  /**
   * @param {Number} previousId
   */
  exports.prototype.setPreviousId = function(previousId) {
    this['_previous_id'] = previousId;
  }


  /**
   * @return {Number}
   */
  exports.prototype.getBeforeId = function() {
    return this['_before_id'];
  }

  /**
   * @param {Number} beforeId
   */
  exports.prototype.setBeforeId = function(beforeId) {
    this['_before_id'] = beforeId;
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


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "scheduled"
     * @const
     */
    "scheduled": "scheduled",
    /**
     * value: "playing"
     * @const
     */
    "playing": "playing",
    /**
     * value: "played"
     * @const
     */
    "played": "played"  };


  return exports;
}));

