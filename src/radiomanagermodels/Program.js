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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.Program = factory(root.radiomanager.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Program model module.
   * @module radiomanagermodels/Program
   * @version 2.0
   */

  /**
   * Constructs a new <code>Program</code>.
   * @alias module:radiomanagermodels/Program
   * @class
   * @param modelTypeId {Number} 
   * @param title {String} 
   */
  var exports = function(modelTypeId, title) {
    var _this = this;

    _this['model_type_id'] = modelTypeId;

    _this['title'] = title;










  };

  /**
   * Constructs a <code>Program</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/Program} obj Optional instance to populate.
   * @return {module:radiomanagermodels/Program} The populated <code>Program</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('model_type_id')) {
        obj['model_type_id'] = ApiClient.convertToType(data['model_type_id'], 'Number');
      }
      if (data.hasOwnProperty('field_values')) {
        obj['field_values'] = ApiClient.convertToType(data['field_values'], Object);
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('disabled')) {
        obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
      }
      if (data.hasOwnProperty('genre_id')) {
        obj['genre_id'] = ApiClient.convertToType(data['genre_id'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('short_name')) {
        obj['short_name'] = ApiClient.convertToType(data['short_name'], 'String');
      }
      if (data.hasOwnProperty('medium_name')) {
        obj['medium_name'] = ApiClient.convertToType(data['medium_name'], 'String');
      }
      if (data.hasOwnProperty('website')) {
        obj['website'] = ApiClient.convertToType(data['website'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('recommended')) {
        obj['recommended'] = ApiClient.convertToType(data['recommended'], 'Boolean');
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }
      if (data.hasOwnProperty('pty_code_id')) {
        obj['pty_code_id'] = ApiClient.convertToType(data['pty_code_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} model_type_id
   */
  exports.prototype['model_type_id'] = undefined;
  /**
   * @member {Object} field_values
   */
  exports.prototype['field_values'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {Boolean} disabled
   */
  exports.prototype['disabled'] = undefined;
  /**
   * @member {Number} genre_id
   */
  exports.prototype['genre_id'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} short_name
   */
  exports.prototype['short_name'] = undefined;
  /**
   * @member {String} medium_name
   */
  exports.prototype['medium_name'] = undefined;
  /**
   * @member {String} website
   */
  exports.prototype['website'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {Boolean} recommended
   */
  exports.prototype['recommended'] = undefined;
  /**
   * @member {String} language
   */
  exports.prototype['language'] = undefined;
  /**
   * @member {Number} pty_code_id
   */
  exports.prototype['pty_code_id'] = undefined;


  /**
   * @return {Number}
   */
  exports.prototype.getModelTypeId = function() {
    return this['model_type_id'];
  }

  /**
   * @param {Number} modelTypeId
   */
  exports.prototype.setModelTypeId = function(modelTypeId) {
    this['model_type_id'] = modelTypeId;
  }


  /**
   * @return {Object}
   */
  exports.prototype.getFieldValues = function() {
    return this['field_values'];
  }

  /**
   * @param {Object} fieldValues
   */
  exports.prototype.setFieldValues = function(fieldValues) {
    this['field_values'] = fieldValues;
  }


  /**
   * @return {String}
   */
  exports.prototype.getTitle = function() {
    return this['title'];
  }

  /**
   * @param {String} title
   */
  exports.prototype.setTitle = function(title) {
    this['title'] = title;
  }


  /**
   * @return {Boolean}
   */
  exports.prototype.getDisabled = function() {
    return this['disabled'];
  }

  /**
   * @param {Boolean} disabled
   */
  exports.prototype.setDisabled = function(disabled) {
    this['disabled'] = disabled;
  }


  /**
   * @return {Number}
   */
  exports.prototype.getGenreId = function() {
    return this['genre_id'];
  }

  /**
   * @param {Number} genreId
   */
  exports.prototype.setGenreId = function(genreId) {
    this['genre_id'] = genreId;
  }


  /**
   * @return {String}
   */
  exports.prototype.getDescription = function() {
    return this['description'];
  }

  /**
   * @param {String} description
   */
  exports.prototype.setDescription = function(description) {
    this['description'] = description;
  }


  /**
   * @return {String}
   */
  exports.prototype.getShortName = function() {
    return this['short_name'];
  }

  /**
   * @param {String} shortName
   */
  exports.prototype.setShortName = function(shortName) {
    this['short_name'] = shortName;
  }


  /**
   * @return {String}
   */
  exports.prototype.getMediumName = function() {
    return this['medium_name'];
  }

  /**
   * @param {String} mediumName
   */
  exports.prototype.setMediumName = function(mediumName) {
    this['medium_name'] = mediumName;
  }


  /**
   * @return {String}
   */
  exports.prototype.getWebsite = function() {
    return this['website'];
  }

  /**
   * @param {String} website
   */
  exports.prototype.setWebsite = function(website) {
    this['website'] = website;
  }


  /**
   * @return {String}
   */
  exports.prototype.getEmail = function() {
    return this['email'];
  }

  /**
   * @param {String} email
   */
  exports.prototype.setEmail = function(email) {
    this['email'] = email;
  }


  /**
   * @return {Boolean}
   */
  exports.prototype.getRecommended = function() {
    return this['recommended'];
  }

  /**
   * @param {Boolean} recommended
   */
  exports.prototype.setRecommended = function(recommended) {
    this['recommended'] = recommended;
  }


  /**
   * @return {String}
   */
  exports.prototype.getLanguage = function() {
    return this['language'];
  }

  /**
   * @param {String} language
   */
  exports.prototype.setLanguage = function(language) {
    this['language'] = language;
  }


  /**
   * @return {Number}
   */
  exports.prototype.getPtyCodeId = function() {
    return this['pty_code_id'];
  }

  /**
   * @param {Number} ptyCodeId
   */
  exports.prototype.setPtyCodeId = function(ptyCodeId) {
    this['pty_code_id'] = ptyCodeId;
  }



  return exports;
}));


