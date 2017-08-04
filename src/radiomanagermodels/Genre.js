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
    root.radiomanager.Genre = factory(root.radiomanager.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Genre model module.
   * @module radiomanagermodels/Genre
   * @version 2.0
   */

  /**
   * Constructs a new <code>Genre</code>.
   * @alias module:radiomanagermodels/Genre
   * @class
   * @param id {Number} 
   * @param name {String} 
   */
  var exports = function(id, name) {
    var _this = this;

    _this['id'] = id;


    _this['name'] = name;
  };

  /**
   * Constructs a <code>Genre</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/Genre} obj Optional instance to populate.
   * @return {module:radiomanagermodels/Genre} The populated <code>Genre</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('urn')) {
        obj['urn'] = ApiClient.convertToType(data['urn'], 'String');
      }
      if (data.hasOwnProperty('parent_id')) {
        obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} urn
   */
  exports.prototype['urn'] = undefined;
  /**
   * @member {Number} parent_id
   */
  exports.prototype['parent_id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;


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
   * @return {String}
   */
  exports.prototype.getUrn = function() {
    return this['urn'];
  }

  /**
   * @param {String} urn
   */
  exports.prototype.setUrn = function(urn) {
    this['urn'] = urn;
  }


  /**
   * @return {Number}
   */
  exports.prototype.getParentId = function() {
    return this['parent_id'];
  }

  /**
   * @param {Number} parentId
   */
  exports.prototype.setParentId = function(parentId) {
    this['parent_id'] = parentId;
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



  return exports;
}));


