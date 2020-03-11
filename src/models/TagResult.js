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
    define(['ApiClient', 'models/Tag', 'models/TagOutputOnly', 'models/TagRelations', 'models/TagRelationsBroadcasts', 'models/TagRelationsContacts', 'models/TagRelationsItems', 'models/TagRelationsPrograms'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Tag'), require('./TagOutputOnly'), require('./TagRelations'), require('./TagRelationsBroadcasts'), require('./TagRelationsContacts'), require('./TagRelationsItems'), require('./TagRelationsPrograms'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.TagResult = factory(root.radiomanager.ApiClient, root.radiomanager.Tag, root.radiomanager.TagOutputOnly, root.radiomanager.TagRelations, root.radiomanager.TagRelationsBroadcasts, root.radiomanager.TagRelationsContacts, root.radiomanager.TagRelationsItems, root.radiomanager.TagRelationsPrograms);
  }
}(this, function(ApiClient, Tag, TagOutputOnly, TagRelations, TagRelationsBroadcasts, TagRelationsContacts, TagRelationsItems, TagRelationsPrograms) {
  'use strict';



  /**
   * The TagResult model module.
   * @module models/TagResult
   * @version 2.0
   */

  /**
   * Constructs a new <code>TagResult</code>.
   * @alias module:models/TagResult
   * @class
   * @implements module:models/TagOutputOnly
   * @implements module:models/Tag
   * @implements module:models/TagRelations
   * @param id {Number} 
   * @param name {String} 
   */
  var exports = function(id, name) {
    var _this = this;

    TagOutputOnly.call(_this, id);
    Tag.call(_this, name);
    TagRelations.call(_this);
    _this['id'] = id;
    _this['name'] = name;
  };

  /**
   * Constructs a <code>TagResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:models/TagResult} obj Optional instance to populate.
   * @return {module:models/TagResult} The populated <code>TagResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      TagOutputOnly.constructFromObject(data, obj);
      Tag.constructFromObject(data, obj);
      TagRelations.constructFromObject(data, obj);
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
      if (data.hasOwnProperty('deleted_at')) {
        obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
      }
      if (data.hasOwnProperty('_external_station_id')) {
        obj['_external_station_id'] = ApiClient.convertToType(data['_external_station_id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('broadcasts')) {
        obj['broadcasts'] = TagRelationsBroadcasts.constructFromObject(data['broadcasts']);
      }
      if (data.hasOwnProperty('programs')) {
        obj['programs'] = TagRelationsPrograms.constructFromObject(data['programs']);
      }
      if (data.hasOwnProperty('contacts')) {
        obj['contacts'] = TagRelationsContacts.constructFromObject(data['contacts']);
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = TagRelationsItems.constructFromObject(data['items']);
      }
    }
    return obj;
  }

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
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:models/TagRelationsBroadcasts} broadcasts
   */
  exports.prototype['broadcasts'] = undefined;
  /**
   * @member {module:models/TagRelationsPrograms} programs
   */
  exports.prototype['programs'] = undefined;
  /**
   * @member {module:models/TagRelationsContacts} contacts
   */
  exports.prototype['contacts'] = undefined;
  /**
   * @member {module:models/TagRelationsItems} items
   */
  exports.prototype['items'] = undefined;

  // Implement TagOutputOnly interface:
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

  // Implement Tag interface:
  /**
   * @member {String} name
   */
exports.prototype['name'] = undefined;

  // Implement TagRelations interface:
  /**
   * @member {module:models/TagRelationsBroadcasts} broadcasts
   */
exports.prototype['broadcasts'] = undefined;

  /**
   * @member {module:models/TagRelationsPrograms} programs
   */
exports.prototype['programs'] = undefined;

  /**
   * @member {module:models/TagRelationsContacts} contacts
   */
exports.prototype['contacts'] = undefined;

  /**
   * @member {module:models/TagRelationsItems} items
   */
exports.prototype['items'] = undefined;


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
   * @return {String}
   */
  exports.prototype.getName = function() {
    return this['name'];
  }

  /**
   * @param {String} name
   */
  exports.prototype.setName = function(name) {
    this['name'] = name;
  }


  /**
   * @return {module:models/TagRelationsBroadcasts}
   */
  exports.prototype.getBroadcasts = function() {
    return this['broadcasts'];
  }

  /**
   * @param {module:models/TagRelationsBroadcasts} broadcasts
   */
  exports.prototype.setBroadcasts = function(broadcasts) {
    this['broadcasts'] = broadcasts;
  }


  /**
   * @return {module:models/TagRelationsPrograms}
   */
  exports.prototype.getPrograms = function() {
    return this['programs'];
  }

  /**
   * @param {module:models/TagRelationsPrograms} programs
   */
  exports.prototype.setPrograms = function(programs) {
    this['programs'] = programs;
  }


  /**
   * @return {module:models/TagRelationsContacts}
   */
  exports.prototype.getContacts = function() {
    return this['contacts'];
  }

  /**
   * @param {module:models/TagRelationsContacts} contacts
   */
  exports.prototype.setContacts = function(contacts) {
    this['contacts'] = contacts;
  }


  /**
   * @return {module:models/TagRelationsItems}
   */
  exports.prototype.getItems = function() {
    return this['items'];
  }

  /**
   * @param {module:models/TagRelationsItems} items
   */
  exports.prototype.setItems = function(items) {
    this['items'] = items;
  }



  return exports;
}));


