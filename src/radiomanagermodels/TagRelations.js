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
    define(['ApiClient', 'radiomanagermodels/TagRelationsBroadcasts', 'radiomanagermodels/TagRelationsContacts', 'radiomanagermodels/TagRelationsItems', 'radiomanagermodels/TagRelationsPrograms'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TagRelationsBroadcasts'), require('./TagRelationsContacts'), require('./TagRelationsItems'), require('./TagRelationsPrograms'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.TagRelations = factory(root.radiomanager.ApiClient, root.radiomanager.TagRelationsBroadcasts, root.radiomanager.TagRelationsContacts, root.radiomanager.TagRelationsItems, root.radiomanager.TagRelationsPrograms);
  }
}(this, function(ApiClient, TagRelationsBroadcasts, TagRelationsContacts, TagRelationsItems, TagRelationsPrograms) {
  'use strict';




  /**
   * The TagRelations model module.
   * @module radiomanagermodels/TagRelations
   * @version 2.0
   */

  /**
   * Constructs a new <code>TagRelations</code>.
   * @alias module:radiomanagermodels/TagRelations
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>TagRelations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/TagRelations} obj Optional instance to populate.
   * @return {module:radiomanagermodels/TagRelations} The populated <code>TagRelations</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

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
   * @member {module:radiomanagermodels/TagRelationsBroadcasts} broadcasts
   */
  exports.prototype['broadcasts'] = undefined;
  /**
   * @member {module:radiomanagermodels/TagRelationsPrograms} programs
   */
  exports.prototype['programs'] = undefined;
  /**
   * @member {module:radiomanagermodels/TagRelationsContacts} contacts
   */
  exports.prototype['contacts'] = undefined;
  /**
   * @member {module:radiomanagermodels/TagRelationsItems} items
   */
  exports.prototype['items'] = undefined;


  /**
   * @return {module:radiomanagermodels/TagRelationsBroadcasts}
   */
  exports.prototype.getBroadcasts = function() {
    return this['broadcasts'];
  }

  /**
   * @param {module:radiomanagermodels/TagRelationsBroadcasts} broadcasts
   */
  exports.prototype.setBroadcasts = function(broadcasts) {
    this['broadcasts'] = broadcasts;
  }


  /**
   * @return {module:radiomanagermodels/TagRelationsPrograms}
   */
  exports.prototype.getPrograms = function() {
    return this['programs'];
  }

  /**
   * @param {module:radiomanagermodels/TagRelationsPrograms} programs
   */
  exports.prototype.setPrograms = function(programs) {
    this['programs'] = programs;
  }


  /**
   * @return {module:radiomanagermodels/TagRelationsContacts}
   */
  exports.prototype.getContacts = function() {
    return this['contacts'];
  }

  /**
   * @param {module:radiomanagermodels/TagRelationsContacts} contacts
   */
  exports.prototype.setContacts = function(contacts) {
    this['contacts'] = contacts;
  }


  /**
   * @return {module:radiomanagermodels/TagRelationsItems}
   */
  exports.prototype.getItems = function() {
    return this['items'];
  }

  /**
   * @param {module:radiomanagermodels/TagRelationsItems} items
   */
  exports.prototype.setItems = function(items) {
    this['items'] = items;
  }



  return exports;
}));


