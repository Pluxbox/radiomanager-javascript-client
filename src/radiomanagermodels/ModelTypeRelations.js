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
    define(['ApiClient', 'radiomanagermodels/ModelTypeRelationsBroadcasts', 'radiomanagermodels/ModelTypeRelationsCampaigns', 'radiomanagermodels/ModelTypeRelationsContacts', 'radiomanagermodels/ModelTypeRelationsItems', 'radiomanagermodels/ModelTypeRelationsPresenters', 'radiomanagermodels/ModelTypeRelationsPrograms'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelTypeRelationsBroadcasts'), require('./ModelTypeRelationsCampaigns'), require('./ModelTypeRelationsContacts'), require('./ModelTypeRelationsItems'), require('./ModelTypeRelationsPresenters'), require('./ModelTypeRelationsPrograms'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.ModelTypeRelations = factory(root.radiomanager.ApiClient, root.radiomanager.ModelTypeRelationsBroadcasts, root.radiomanager.ModelTypeRelationsCampaigns, root.radiomanager.ModelTypeRelationsContacts, root.radiomanager.ModelTypeRelationsItems, root.radiomanager.ModelTypeRelationsPresenters, root.radiomanager.ModelTypeRelationsPrograms);
  }
}(this, function(ApiClient, ModelTypeRelationsBroadcasts, ModelTypeRelationsCampaigns, ModelTypeRelationsContacts, ModelTypeRelationsItems, ModelTypeRelationsPresenters, ModelTypeRelationsPrograms) {
  'use strict';




  /**
   * The ModelTypeRelations model module.
   * @module radiomanagermodels/ModelTypeRelations
   * @version 2.0
   */

  /**
   * Constructs a new <code>ModelTypeRelations</code>.
   * @alias module:radiomanagermodels/ModelTypeRelations
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ModelTypeRelations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/ModelTypeRelations} obj Optional instance to populate.
   * @return {module:radiomanagermodels/ModelTypeRelations} The populated <code>ModelTypeRelations</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('campaigns')) {
        obj['campaigns'] = ModelTypeRelationsCampaigns.constructFromObject(data['campaigns']);
      }
      if (data.hasOwnProperty('broadcasts')) {
        obj['broadcasts'] = ModelTypeRelationsBroadcasts.constructFromObject(data['broadcasts']);
      }
      if (data.hasOwnProperty('programs')) {
        obj['programs'] = ModelTypeRelationsPrograms.constructFromObject(data['programs']);
      }
      if (data.hasOwnProperty('contacts')) {
        obj['contacts'] = ModelTypeRelationsContacts.constructFromObject(data['contacts']);
      }
      if (data.hasOwnProperty('presenters')) {
        obj['presenters'] = ModelTypeRelationsPresenters.constructFromObject(data['presenters']);
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ModelTypeRelationsItems.constructFromObject(data['items']);
      }
    }
    return obj;
  }

  /**
   * @member {module:radiomanagermodels/ModelTypeRelationsCampaigns} campaigns
   */
  exports.prototype['campaigns'] = undefined;
  /**
   * @member {module:radiomanagermodels/ModelTypeRelationsBroadcasts} broadcasts
   */
  exports.prototype['broadcasts'] = undefined;
  /**
   * @member {module:radiomanagermodels/ModelTypeRelationsPrograms} programs
   */
  exports.prototype['programs'] = undefined;
  /**
   * @member {module:radiomanagermodels/ModelTypeRelationsContacts} contacts
   */
  exports.prototype['contacts'] = undefined;
  /**
   * @member {module:radiomanagermodels/ModelTypeRelationsPresenters} presenters
   */
  exports.prototype['presenters'] = undefined;
  /**
   * @member {module:radiomanagermodels/ModelTypeRelationsItems} items
   */
  exports.prototype['items'] = undefined;


  /**
   * @return {module:radiomanagermodels/ModelTypeRelationsCampaigns}
   */
  exports.prototype.getCampaigns = function() {
    return this['campaigns'];
  }

  /**
   * @param {module:radiomanagermodels/ModelTypeRelationsCampaigns} campaigns
   */
  exports.prototype.setCampaigns = function(campaigns) {
    this['campaigns'] = campaigns;
  }


  /**
   * @return {module:radiomanagermodels/ModelTypeRelationsBroadcasts}
   */
  exports.prototype.getBroadcasts = function() {
    return this['broadcasts'];
  }

  /**
   * @param {module:radiomanagermodels/ModelTypeRelationsBroadcasts} broadcasts
   */
  exports.prototype.setBroadcasts = function(broadcasts) {
    this['broadcasts'] = broadcasts;
  }


  /**
   * @return {module:radiomanagermodels/ModelTypeRelationsPrograms}
   */
  exports.prototype.getPrograms = function() {
    return this['programs'];
  }

  /**
   * @param {module:radiomanagermodels/ModelTypeRelationsPrograms} programs
   */
  exports.prototype.setPrograms = function(programs) {
    this['programs'] = programs;
  }


  /**
   * @return {module:radiomanagermodels/ModelTypeRelationsContacts}
   */
  exports.prototype.getContacts = function() {
    return this['contacts'];
  }

  /**
   * @param {module:radiomanagermodels/ModelTypeRelationsContacts} contacts
   */
  exports.prototype.setContacts = function(contacts) {
    this['contacts'] = contacts;
  }


  /**
   * @return {module:radiomanagermodels/ModelTypeRelationsPresenters}
   */
  exports.prototype.getPresenters = function() {
    return this['presenters'];
  }

  /**
   * @param {module:radiomanagermodels/ModelTypeRelationsPresenters} presenters
   */
  exports.prototype.setPresenters = function(presenters) {
    this['presenters'] = presenters;
  }


  /**
   * @return {module:radiomanagermodels/ModelTypeRelationsItems}
   */
  exports.prototype.getItems = function() {
    return this['items'];
  }

  /**
   * @param {module:radiomanagermodels/ModelTypeRelationsItems} items
   */
  exports.prototype.setItems = function(items) {
    this['items'] = items;
  }



  return exports;
}));


