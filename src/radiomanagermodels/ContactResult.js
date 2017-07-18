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
    define(['ApiClient', 'radiomanagermodels/BroadcastRelationsModelType', 'radiomanagermodels/Contact', 'radiomanagermodels/ContactFieldValues', 'radiomanagermodels/ContactOutputOnly', 'radiomanagermodels/ContactRelations', 'radiomanagermodels/ContactRelationsItems', 'radiomanagermodels/ContactRelationsTags'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BroadcastRelationsModelType'), require('./Contact'), require('./ContactFieldValues'), require('./ContactOutputOnly'), require('./ContactRelations'), require('./ContactRelationsItems'), require('./ContactRelationsTags'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.ContactResult = factory(root.radiomanager.ApiClient, root.radiomanager.BroadcastRelationsModelType, root.radiomanager.Contact, root.radiomanager.ContactFieldValues, root.radiomanager.ContactOutputOnly, root.radiomanager.ContactRelations, root.radiomanager.ContactRelationsItems, root.radiomanager.ContactRelationsTags);
  }
}(this, function(ApiClient, BroadcastRelationsModelType, Contact, ContactFieldValues, ContactOutputOnly, ContactRelations, ContactRelationsItems, ContactRelationsTags) {
  'use strict';




  /**
   * The ContactResult model module.
   * @module radiomanagermodels/ContactResult
   * @version 2.0
   */

  /**
   * Constructs a new <code>ContactResult</code>.
   * @alias module:radiomanagermodels/ContactResult
   * @class
   * @implements module:radiomanagermodels/ContactOutputOnly
   * @implements module:radiomanagermodels/Contact
   * @implements module:radiomanagermodels/ContactRelations
   * @param modelTypeId {Number} 
   * @param firstname {String} 
   * @param lastname {String} 
   */
  var exports = function(modelTypeId, firstname, lastname) {
    var _this = this;

    ContactOutputOnly.call(_this);
    Contact.call(_this, modelTypeId, firstname, lastname);
    ContactRelations.call(_this);
  };

  /**
   * Constructs a <code>ContactResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/ContactResult} obj Optional instance to populate.
   * @return {module:radiomanagermodels/ContactResult} The populated <code>ContactResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      ContactOutputOnly.constructFromObject(data, obj);
      Contact.constructFromObject(data, obj);
      ContactRelations.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement ContactOutputOnly interface:
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

  // Implement Contact interface:
  /**
   * @member {Number} model_type_id
   */
exports.prototype['model_type_id'] = undefined;

  /**
   * @member {module:radiomanagermodels/ContactFieldValues} field_values
   */
exports.prototype['field_values'] = undefined;

  /**
   * @member {String} email
   */
exports.prototype['email'] = undefined;

  /**
   * @member {String} firstname
   */
exports.prototype['firstname'] = undefined;

  /**
   * @member {String} lastname
   */
exports.prototype['lastname'] = undefined;

  /**
   * @member {String} phone
   */
exports.prototype['phone'] = undefined;

  // Implement ContactRelations interface:
  /**
   * @member {module:radiomanagermodels/ContactRelationsTags} tags
   */
exports.prototype['tags'] = undefined;

  /**
   * @member {module:radiomanagermodels/ContactRelationsItems} items
   */
exports.prototype['items'] = undefined;

  /**
   * @member {module:radiomanagermodels/BroadcastRelationsModelType} model_type
   */
exports.prototype['model_type'] = undefined;



  return exports;
}));

