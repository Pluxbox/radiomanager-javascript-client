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
    define(['ApiClient', 'radiomanagermodels/ImportItemFieldValues', 'radiomanagermodels/Item', 'radiomanagermodels/ItemInputOnly'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ImportItemFieldValues'), require('./Item'), require('./ItemInputOnly'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.ItemDataInput = factory(root.radiomanager.ApiClient, root.radiomanager.ImportItemFieldValues, root.radiomanager.Item, root.radiomanager.ItemInputOnly);
  }
}(this, function(ApiClient, ImportItemFieldValues, Item, ItemInputOnly) {
  'use strict';




  /**
   * The ItemDataInput model module.
   * @module radiomanagermodels/ItemDataInput
   * @version 2.0
   */

  /**
   * Constructs a new <code>ItemDataInput</code>.
   * @alias module:radiomanagermodels/ItemDataInput
   * @class
   * @implements module:radiomanagermodels/Item
   * @implements module:radiomanagermodels/ItemInputOnly
   * @param modelTypeId {Number} 
   * @param externalId {Number} 
   */
  var exports = function(modelTypeId, externalId) {
    var _this = this;

    Item.call(_this, modelTypeId, externalId);
    ItemInputOnly.call(_this);
  };

  /**
   * Constructs a <code>ItemDataInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/ItemDataInput} obj Optional instance to populate.
   * @return {module:radiomanagermodels/ItemDataInput} The populated <code>ItemDataInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      Item.constructFromObject(data, obj);
      ItemInputOnly.constructFromObject(data, obj);
    }
    return obj;
  }


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
   * @member {Number} external_id
   */
exports.prototype['external_id'] = undefined;

  /**
   * @member {module:radiomanagermodels/ImportItemFieldValues} field_values
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
   * @member {module:radiomanagermodels/Item.StatusEnum} status
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
   * @member {Number} previous_id
   */
exports.prototype['previous_id'] = undefined;

  /**
   * @member {Array.<Number>} contacts
   */
exports.prototype['contacts'] = undefined;

  /**
   * @member {Array.<Number>} tags
   */
exports.prototype['tags'] = undefined;



  return exports;
}));

