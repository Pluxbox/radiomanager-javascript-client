/**
 * Pluxbox Radiomanager Client
 * Pluxbox RadioManager gives you the power, flexibility and speed you always wanted in a lightweight and easy-to-use web-based radio solution. With Pluxbox RadioManager you can organise your radio workflow and automate your omnichannel communication with your listeners. We offer wide range specialised services for the radio and connections like Hybrid Radio, Visual Radio, your website and social media without losing focus on your broadcast. For more information visit https://pluxbox.com
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
    define(['ApiClient', 'radiomanagermodels/Tag', 'radiomanagermodels/TagOutputOnly', 'radiomanagermodels/TagRelations', 'radiomanagermodels/TagRelationsBroadcasts', 'radiomanagermodels/TagRelationsContacts', 'radiomanagermodels/TagRelationsItems', 'radiomanagermodels/TagRelationsPrograms'], factory);
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
   * @module radiomanagermodels/TagResult
   * @version 2.0
   */

  /**
   * Constructs a new <code>TagResult</code>.
   * @alias module:radiomanagermodels/TagResult
   * @class
   * @implements module:radiomanagermodels/TagOutputOnly
   * @implements module:radiomanagermodels/Tag
   * @implements module:radiomanagermodels/TagRelations
   * @param id {Number} 
   * @param name {String} 
   */
  var exports = function(id, name) {
    var _this = this;

    TagOutputOnly.call(_this, id);
    Tag.call(_this, name);
    TagRelations.call(_this);
  };

  /**
   * Constructs a <code>TagResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/TagResult} obj Optional instance to populate.
   * @return {module:radiomanagermodels/TagResult} The populated <code>TagResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      TagOutputOnly.constructFromObject(data, obj);
      Tag.constructFromObject(data, obj);
      TagRelations.constructFromObject(data, obj);
    }
    return obj;
  }


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



  return exports;
}));

