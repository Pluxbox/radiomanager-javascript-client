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
    define(['radiomanager/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.ItemRelationsContactsParams = factory(root.radiomanager.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ItemRelationsContactsParams model module.
   * @module radiomanager/radiomanagermodels/ItemRelationsContactsParams
   * @version 2.0
   */

  /**
   * Constructs a new <code>ItemRelationsContactsParams</code>.
   * @alias module:radiomanager/radiomanagermodels/ItemRelationsContactsParams
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ItemRelationsContactsParams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanager/radiomanagermodels/ItemRelationsContactsParams} obj Optional instance to populate.
   * @return {module:radiomanager/radiomanagermodels/ItemRelationsContactsParams} The populated <code>ItemRelationsContactsParams</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('item_id')) {
        obj['item_id'] = ApiClient.convertToType(data['item_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} item_id
   */
  exports.prototype['item_id'] = undefined;


  /**
   * @return {Number}
   */
  exports.prototype.getItemId = function() {
    return this['item_id'];
  }

  /**
   * @param {Number} itemId
   */
  exports.prototype.setItemId = function(itemId) {
    this['item_id'] = itemId;
  }



  return exports;
}));


