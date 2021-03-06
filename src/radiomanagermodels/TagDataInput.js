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
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'radiomanagermodels/Tag'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Tag'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.TagDataInput = factory(root.radiomanager.ApiClient, root.radiomanager.Tag);
  }
}(this, function(ApiClient, Tag) {
  'use strict';




  /**
   * The TagDataInput model module.
   * @module radiomanagermodels/TagDataInput
   * @version 2.0
   */

  /**
   * Constructs a new <code>TagDataInput</code>.
   * @alias module:radiomanagermodels/TagDataInput
   * @class
   * @implements module:radiomanagermodels/Tag
   * @param name {String} 
   */
  var exports = function(name) {
    var _this = this;

    Tag.call(_this, name);
  };

  /**
   * Constructs a <code>TagDataInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/TagDataInput} obj Optional instance to populate.
   * @return {module:radiomanagermodels/TagDataInput} The populated <code>TagDataInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      Tag.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement Tag interface:
  /**
   * @member {String} name
   */
exports.prototype['name'] = undefined;



  return exports;
}));


