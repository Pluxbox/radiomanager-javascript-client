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
    define(['ApiClient', 'radiomanagermodels/Story', 'radiomanagermodels/StoryInputOnly'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Story'), require('./StoryInputOnly'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.StoryDataInput = factory(root.radiomanager.ApiClient, root.radiomanager.Story, root.radiomanager.StoryInputOnly);
  }
}(this, function(ApiClient, Story, StoryInputOnly) {
  'use strict';




  /**
   * The StoryDataInput model module.
   * @module radiomanagermodels/StoryDataInput
   * @version 2.0
   */

  /**
   * Constructs a new <code>StoryDataInput</code>.
   * @alias module:radiomanagermodels/StoryDataInput
   * @class
   * @implements module:radiomanagermodels/Story
   * @implements module:radiomanagermodels/StoryInputOnly
   * @param modelTypeId {Number} 
   * @param name {String} 
   */
  var exports = function(modelTypeId, name) {
    var _this = this;

    Story.call(_this, modelTypeId, name);
    StoryInputOnly.call(_this);
  };

  /**
   * Constructs a <code>StoryDataInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/StoryDataInput} obj Optional instance to populate.
   * @return {module:radiomanagermodels/StoryDataInput} The populated <code>StoryDataInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      Story.constructFromObject(data, obj);
      StoryInputOnly.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement Story interface:
  /**
   * @member {Number} model_type_id
   */
exports.prototype['model_type_id'] = undefined;

  /**
   * @member {Boolean} recommended
   */
exports.prototype['recommended'] = undefined;

  /**
   * @member {Object} field_values
   */
exports.prototype['field_values'] = undefined;

  /**
   * @member {String} name
   */
exports.prototype['name'] = undefined;

  /**
   * @member {String} description
   */
exports.prototype['description'] = undefined;

  // Implement StoryInputOnly interface:
  /**
   * @member {Array.<Number>} tags
   */
exports.prototype['tags'] = undefined;



  return exports;
}));


