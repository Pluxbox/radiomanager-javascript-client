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
    define(['ApiClient', 'models/BlockRelationsProgram', 'models/Broadcast', 'models/BroadcastEPGRelations', 'models/BroadcastOutputOnly', 'models/BroadcastRelationsBlocks', 'models/BroadcastRelationsItems', 'models/BroadcastRelationsModelType', 'models/BroadcastRelationsTags', 'models/PresenterEPGResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BlockRelationsProgram'), require('./Broadcast'), require('./BroadcastEPGRelations'), require('./BroadcastOutputOnly'), require('./BroadcastRelationsBlocks'), require('./BroadcastRelationsItems'), require('./BroadcastRelationsModelType'), require('./BroadcastRelationsTags'), require('./PresenterEPGResult'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.BroadcastEPGResult = factory(root.radiomanager.ApiClient, root.radiomanager.BlockRelationsProgram, root.radiomanager.Broadcast, root.radiomanager.BroadcastEPGRelations, root.radiomanager.BroadcastOutputOnly, root.radiomanager.BroadcastRelationsBlocks, root.radiomanager.BroadcastRelationsItems, root.radiomanager.BroadcastRelationsModelType, root.radiomanager.BroadcastRelationsTags, root.radiomanager.PresenterEPGResult);
  }
}(this, function(ApiClient, BlockRelationsProgram, Broadcast, BroadcastEPGRelations, BroadcastOutputOnly, BroadcastRelationsBlocks, BroadcastRelationsItems, BroadcastRelationsModelType, BroadcastRelationsTags, PresenterEPGResult) {
  'use strict';



  /**
   * The BroadcastEPGResult model module.
   * @module models/BroadcastEPGResult
   * @version 2.0
   */

  /**
   * Constructs a new <code>BroadcastEPGResult</code>.
   * @alias module:models/BroadcastEPGResult
   * @class
   * @implements module:models/BroadcastOutputOnly
   * @implements module:models/Broadcast
   * @implements module:models/BroadcastEPGRelations
   * @param id {Number} 
   * @param updatedAt {Date} 
   * @param createdAt {Date} 
   * @param deletedAt {Date} 
   */
  var exports = function(id, updatedAt, createdAt, deletedAt) {
    var _this = this;

    BroadcastOutputOnly.call(_this, id, updatedAt, createdAt, deletedAt);
    Broadcast.call(_this);
    BroadcastEPGRelations.call(_this);
    _this['id'] = id;
    _this['updated_at'] = updatedAt;
    _this['created_at'] = createdAt;
    _this['deleted_at'] = deletedAt;
  };

  /**
   * Constructs a <code>BroadcastEPGResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/BroadcastEPGResult} obj Optional instance to populate.
   * @return {module:models/BroadcastEPGResult} The populated <code>BroadcastEPGResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      BroadcastOutputOnly.constructFromObject(data, obj);
      Broadcast.constructFromObject(data, obj);
      BroadcastEPGRelations.constructFromObject(data, obj);
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('deleted_at')) {
        obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
      }
      if (data.hasOwnProperty('_external_station_id')) {
        obj['_external_station_id'] = ApiClient.convertToType(data['_external_station_id'], 'Number');
      }
      if (data.hasOwnProperty('program_id')) {
        obj['program_id'] = ApiClient.convertToType(data['program_id'], 'Number');
      }
      if (data.hasOwnProperty('model_type_id')) {
        obj['model_type_id'] = ApiClient.convertToType(data['model_type_id'], 'Number');
      }
      if (data.hasOwnProperty('station_id')) {
        obj['station_id'] = ApiClient.convertToType(data['station_id'], 'Number');
      }
      if (data.hasOwnProperty('field_values')) {
        obj['field_values'] = ApiClient.convertToType(data['field_values'], Object);
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('start')) {
        obj['start'] = ApiClient.convertToType(data['start'], 'Date');
      }
      if (data.hasOwnProperty('stop')) {
        obj['stop'] = ApiClient.convertToType(data['stop'], 'Date');
      }
      if (data.hasOwnProperty('genre_id')) {
        obj['genre_id'] = ApiClient.convertToType(data['genre_id'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('short_name')) {
        obj['short_name'] = ApiClient.convertToType(data['short_name'], 'String');
      }
      if (data.hasOwnProperty('medium_name')) {
        obj['medium_name'] = ApiClient.convertToType(data['medium_name'], 'String');
      }
      if (data.hasOwnProperty('website')) {
        obj['website'] = ApiClient.convertToType(data['website'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('recommended')) {
        obj['recommended'] = ApiClient.convertToType(data['recommended'], 'Boolean');
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }
      if (data.hasOwnProperty('published')) {
        obj['published'] = ApiClient.convertToType(data['published'], 'Boolean');
      }
      if (data.hasOwnProperty('repetition_uid')) {
        obj['repetition_uid'] = ApiClient.convertToType(data['repetition_uid'], 'String');
      }
      if (data.hasOwnProperty('repetition_type')) {
        obj['repetition_type'] = ApiClient.convertToType(data['repetition_type'], 'String');
      }
      if (data.hasOwnProperty('repetition_end')) {
        obj['repetition_end'] = ApiClient.convertToType(data['repetition_end'], 'Date');
      }
      if (data.hasOwnProperty('repetition_start')) {
        obj['repetition_start'] = ApiClient.convertToType(data['repetition_start'], 'Date');
      }
      if (data.hasOwnProperty('repetition_days')) {
        obj['repetition_days'] = ApiClient.convertToType(data['repetition_days'], 'String');
      }
      if (data.hasOwnProperty('pty_code_id')) {
        obj['pty_code_id'] = ApiClient.convertToType(data['pty_code_id'], 'Number');
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = BroadcastRelationsItems.constructFromObject(data['items']);
      }
      if (data.hasOwnProperty('blocks')) {
        obj['blocks'] = BroadcastRelationsBlocks.constructFromObject(data['blocks']);
      }
      if (data.hasOwnProperty('program')) {
        obj['program'] = BlockRelationsProgram.constructFromObject(data['program']);
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = BroadcastRelationsTags.constructFromObject(data['tags']);
      }
      if (data.hasOwnProperty('presenters')) {
        obj['presenters'] = ApiClient.convertToType(data['presenters'], [PresenterEPGResult]);
      }
      if (data.hasOwnProperty('model_type')) {
        obj['model_type'] = BroadcastRelationsModelType.constructFromObject(data['model_type']);
      }
    }
    return obj;
  }

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
   * @member {module:models/BroadcastEPGResult.RepetitionTypeEnum} repetition_type
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
  /**
   * @member {module:models/BroadcastRelationsItems} items
   */
  exports.prototype['items'] = undefined;
  /**
   * @member {module:models/BroadcastRelationsBlocks} blocks
   */
  exports.prototype['blocks'] = undefined;
  /**
   * @member {module:models/BlockRelationsProgram} program
   */
  exports.prototype['program'] = undefined;
  /**
   * @member {module:models/BroadcastRelationsTags} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * @member {Array.<module:models/PresenterEPGResult>} presenters
   */
  exports.prototype['presenters'] = undefined;
  /**
   * @member {module:models/BroadcastRelationsModelType} model_type
   */
  exports.prototype['model_type'] = undefined;

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
   * @member {module:models/Broadcast.RepetitionTypeEnum} repetition_type
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

  // Implement BroadcastEPGRelations interface:
  /**
   * @member {module:models/BroadcastRelationsItems} items
   */
exports.prototype['items'] = undefined;

  /**
   * @member {module:models/BroadcastRelationsBlocks} blocks
   */
exports.prototype['blocks'] = undefined;

  /**
   * @member {module:models/BlockRelationsProgram} program
   */
exports.prototype['program'] = undefined;

  /**
   * @member {module:models/BroadcastRelationsTags} tags
   */
exports.prototype['tags'] = undefined;

  /**
   * @member {Array.<module:models/PresenterEPGResult>} presenters
   */
exports.prototype['presenters'] = undefined;

  /**
   * @member {module:models/BroadcastRelationsModelType} model_type
   */
exports.prototype['model_type'] = undefined;


  /**
   * @return {Number}
   */
  exports.prototype.getId = function() {
    return this['id'];
  }

  /**
   * @param {Number} id
   */
  exports.prototype.setId = function(id) {
    this['id'] = id;
  }


  /**
   * @return {Date}
   */
  exports.prototype.getUpdatedAt = function() {
    return this['updated_at'];
  }

  /**
   * @param {Date} updatedAt
   */
  exports.prototype.setUpdatedAt = function(updatedAt) {
    this['updated_at'] = updatedAt;
  }


  /**
   * @return {Date}
   */
  exports.prototype.getCreatedAt = function() {
    return this['created_at'];
  }

  /**
   * @param {Date} createdAt
   */
  exports.prototype.setCreatedAt = function(createdAt) {
    this['created_at'] = createdAt;
  }


  /**
   * @return {Date}
   */
  exports.prototype.getDeletedAt = function() {
    return this['deleted_at'];
  }

  /**
   * @param {Date} deletedAt
   */
  exports.prototype.setDeletedAt = function(deletedAt) {
    this['deleted_at'] = deletedAt;
  }


  /**
   * @return {Number}
   */
  exports.prototype.getExternalStationId = function() {
    return this['_external_station_id'];
  }

  /**
   * @param {Number} externalStationId
   */
  exports.prototype.setExternalStationId = function(externalStationId) {
    this['_external_station_id'] = externalStationId;
  }


  /**
   * @return {Number}
   */
  exports.prototype.getProgramId = function() {
    return this['program_id'];
  }

  /**
   * @param {Number} programId
   */
  exports.prototype.setProgramId = function(programId) {
    this['program_id'] = programId;
  }


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
  exports.prototype.getStationId = function() {
    return this['station_id'];
  }

  /**
   * @param {Number} stationId
   */
  exports.prototype.setStationId = function(stationId) {
    this['station_id'] = stationId;
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
   * @return {Date}
   */
  exports.prototype.getStop = function() {
    return this['stop'];
  }

  /**
   * @param {Date} stop
   */
  exports.prototype.setStop = function(stop) {
    this['stop'] = stop;
  }


  /**
   * @return {Number}
   */
  exports.prototype.getGenreId = function() {
    return this['genre_id'];
  }

  /**
   * @param {Number} genreId
   */
  exports.prototype.setGenreId = function(genreId) {
    this['genre_id'] = genreId;
  }


  /**
   * @return {String}
   */
  exports.prototype.getDescription = function() {
    return this['description'];
  }

  /**
   * @param {String} description
   */
  exports.prototype.setDescription = function(description) {
    this['description'] = description;
  }


  /**
   * @return {String}
   */
  exports.prototype.getShortName = function() {
    return this['short_name'];
  }

  /**
   * @param {String} shortName
   */
  exports.prototype.setShortName = function(shortName) {
    this['short_name'] = shortName;
  }


  /**
   * @return {String}
   */
  exports.prototype.getMediumName = function() {
    return this['medium_name'];
  }

  /**
   * @param {String} mediumName
   */
  exports.prototype.setMediumName = function(mediumName) {
    this['medium_name'] = mediumName;
  }


  /**
   * @return {String}
   */
  exports.prototype.getWebsite = function() {
    return this['website'];
  }

  /**
   * @param {String} website
   */
  exports.prototype.setWebsite = function(website) {
    this['website'] = website;
  }


  /**
   * @return {String}
   */
  exports.prototype.getEmail = function() {
    return this['email'];
  }

  /**
   * @param {String} email
   */
  exports.prototype.setEmail = function(email) {
    this['email'] = email;
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
   * @return {String}
   */
  exports.prototype.getLanguage = function() {
    return this['language'];
  }

  /**
   * @param {String} language
   */
  exports.prototype.setLanguage = function(language) {
    this['language'] = language;
  }


  /**
   * @return {Boolean}
   */
  exports.prototype.getPublished = function() {
    return this['published'];
  }

  /**
   * @param {Boolean} published
   */
  exports.prototype.setPublished = function(published) {
    this['published'] = published;
  }


  /**
   * @return {String}
   */
  exports.prototype.getRepetitionUid = function() {
    return this['repetition_uid'];
  }

  /**
   * @param {String} repetitionUid
   */
  exports.prototype.setRepetitionUid = function(repetitionUid) {
    this['repetition_uid'] = repetitionUid;
  }


  /**
   * @return {module:models/BroadcastEPGResult.RepetitionTypeEnum}
   */
  exports.prototype.getRepetitionType = function() {
    return this['repetition_type'];
  }

  /**
   * @param {module:models/BroadcastEPGResult.RepetitionTypeEnum} repetitionType
   */
  exports.prototype.setRepetitionType = function(repetitionType) {
    this['repetition_type'] = repetitionType;
  }


  /**
   * @return {Date}
   */
  exports.prototype.getRepetitionEnd = function() {
    return this['repetition_end'];
  }

  /**
   * @param {Date} repetitionEnd
   */
  exports.prototype.setRepetitionEnd = function(repetitionEnd) {
    this['repetition_end'] = repetitionEnd;
  }


  /**
   * @return {Date}
   */
  exports.prototype.getRepetitionStart = function() {
    return this['repetition_start'];
  }

  /**
   * @param {Date} repetitionStart
   */
  exports.prototype.setRepetitionStart = function(repetitionStart) {
    this['repetition_start'] = repetitionStart;
  }


  /**
   * @return {String}
   */
  exports.prototype.getRepetitionDays = function() {
    return this['repetition_days'];
  }

  /**
   * @param {String} repetitionDays
   */
  exports.prototype.setRepetitionDays = function(repetitionDays) {
    this['repetition_days'] = repetitionDays;
  }


  /**
   * @return {Number}
   */
  exports.prototype.getPtyCodeId = function() {
    return this['pty_code_id'];
  }

  /**
   * @param {Number} ptyCodeId
   */
  exports.prototype.setPtyCodeId = function(ptyCodeId) {
    this['pty_code_id'] = ptyCodeId;
  }


  /**
   * @return {module:models/BroadcastRelationsItems}
   */
  exports.prototype.getItems = function() {
    return this['items'];
  }

  /**
   * @param {module:models/BroadcastRelationsItems} items
   */
  exports.prototype.setItems = function(items) {
    this['items'] = items;
  }


  /**
   * @return {module:models/BroadcastRelationsBlocks}
   */
  exports.prototype.getBlocks = function() {
    return this['blocks'];
  }

  /**
   * @param {module:models/BroadcastRelationsBlocks} blocks
   */
  exports.prototype.setBlocks = function(blocks) {
    this['blocks'] = blocks;
  }


  /**
   * @return {module:models/BlockRelationsProgram}
   */
  exports.prototype.getProgram = function() {
    return this['program'];
  }

  /**
   * @param {module:models/BlockRelationsProgram} program
   */
  exports.prototype.setProgram = function(program) {
    this['program'] = program;
  }


  /**
   * @return {module:models/BroadcastRelationsTags}
   */
  exports.prototype.getTags = function() {
    return this['tags'];
  }

  /**
   * @param {module:models/BroadcastRelationsTags} tags
   */
  exports.prototype.setTags = function(tags) {
    this['tags'] = tags;
  }


  /**
   * @return {Array.<module:models/PresenterEPGResult>}
   */
  exports.prototype.getPresenters = function() {
    return this['presenters'];
  }

  /**
   * @param {Array.<module:models/PresenterEPGResult>} presenters
   */
  exports.prototype.setPresenters = function(presenters) {
    this['presenters'] = presenters;
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


  /**
   * Allowed values for the <code>repetition_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RepetitionTypeEnum = {
    /**
     * value: "1 week"
     * @const
     */
    "1 week": "1 week",
    /**
     * value: "2 week"
     * @const
     */
    "2 week": "2 week",
    /**
     * value: "4 week"
     * @const
     */
    "4 week": "4 week",
    /**
     * value: "1 month"
     * @const
     */
    "1 month": "1 month"  };


  return exports;
}));


