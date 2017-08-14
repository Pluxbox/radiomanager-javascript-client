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
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.StoryInputOnly = factory(root.radiomanager.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StoryInputOnly model module.
   * @module radiomanagermodels/StoryInputOnly
   * @version 2.0
   */

  /**
   * Constructs a new <code>StoryInputOnly</code>.
   * @alias module:radiomanagermodels/StoryInputOnly
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>StoryInputOnly</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/StoryInputOnly} obj Optional instance to populate.
   * @return {module:radiomanagermodels/StoryInputOnly} The populated <code>StoryInputOnly</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<Number>} tags
   */
  exports.prototype['tags'] = undefined;


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



  return exports;
}));

