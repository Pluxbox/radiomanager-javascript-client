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
    root.radiomanager.Broadcast = factory(root.radiomanager.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Broadcast model module.
   * @module radiomanagermodels/Broadcast
   * @version 2.0
   */

  /**
   * Constructs a new <code>Broadcast</code>.
   * @alias module:radiomanagermodels/Broadcast
   * @class
   */
  var exports = function() {
    var _this = this;























  };

  /**
   * Constructs a <code>Broadcast</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/Broadcast} obj Optional instance to populate.
   * @return {module:radiomanagermodels/Broadcast} The populated <code>Broadcast</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('program_id')) {
        obj['program_id'] = ApiClient.convertToType(data['program_id'], 'Number');
      }
      if (data.hasOwnProperty('model_type_id')) {
        obj['model_type_id'] = ApiClient.convertToType(data['model_type_id'], 'Number');
      }
      if (data.hasOwnProperty('station_id')) {
        obj['station_id'] = ApiClient.convertToType(data['station_id'], 'Number');
      }
      if (data.hasOwnProperty('field_values')) {
        obj['field_values'] = ApiClient.convertToType(data['field_values'], Object);
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('start')) {
        obj['start'] = ApiClient.convertToType(data['start'], 'Date');
      }
      if (data.hasOwnProperty('stop')) {
        obj['stop'] = ApiClient.convertToType(data['stop'], 'Date');
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
      if (data.hasOwnProperty('published')) {
        obj['published'] = ApiClient.convertToType(data['published'], 'Boolean');
      }
      if (data.hasOwnProperty('repetition_uid')) {
        obj['repetition_uid'] = ApiClient.convertToType(data['repetition_uid'], 'String');
      }
      if (data.hasOwnProperty('repetition_type')) {
        obj['repetition_type'] = ApiClient.convertToType(data['repetition_type'], 'String');
      }
      if (data.hasOwnProperty('repetition_end')) {
        obj['repetition_end'] = ApiClient.convertToType(data['repetition_end'], 'Date');
      }
      if (data.hasOwnProperty('repetition_start')) {
        obj['repetition_start'] = ApiClient.convertToType(data['repetition_start'], 'Date');
      }
      if (data.hasOwnProperty('repetition_days')) {
        obj['repetition_days'] = ApiClient.convertToType(data['repetition_days'], 'String');
      }
      if (data.hasOwnProperty('pty_code_id')) {
        obj['pty_code_id'] = ApiClient.convertToType(data['pty_code_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} program_id
   */
  exports.prototype['program_id'] = undefined;
  /**
   * @member {Number} model_type_id
   */
  exports.prototype['model_type_id'] = undefined;
  /**
   * @member {Number} station_id
   */
  exports.prototype['station_id'] = undefined;
  /**
   * @member {Object} field_values
   */
  exports.prototype['field_values'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {Date} start
   */
  exports.prototype['start'] = undefined;
  /**
   * @member {Date} stop
   */
  exports.prototype['stop'] = undefined;
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
   * @member {Boolean} published
   */
  exports.prototype['published'] = undefined;
  /**
   * @member {String} repetition_uid
   */
  exports.prototype['repetition_uid'] = undefined;
  /**
   * @member {module:radiomanagermodels/Broadcast.RepetitionTypeEnum} repetition_type
   */
  exports.prototype['repetition_type'] = undefined;
  /**
   * @member {Date} repetition_end
   */
  exports.prototype['repetition_end'] = undefined;
  /**
   * @member {Date} repetition_start
   */
  exports.prototype['repetition_start'] = undefined;
  /**
   * @member {String} repetition_days
   */
  exports.prototype['repetition_days'] = undefined;
  /**
   * @member {Number} pty_code_id
   */
  exports.prototype['pty_code_id'] = undefined;


  /**
   * @return {Number}
   */
  exports.prototype.getProgramId = function() {
    return this['program_id'];
  }

  /**
   * @param {Number} programId
   */
  exports.prototype.setProgramId = function(programId) {
    this['program_id'] = programId;
  }


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
   * @return {Number}
   */
  exports.prototype.getStationId = function() {
    return this['station_id'];
  }

  /**
   * @param {Number} stationId
   */
  exports.prototype.setStationId = function(stationId) {
    this['station_id'] = stationId;
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
   * @return {Date}
   */
  exports.prototype.getStart = function() {
    return this['start'];
  }

  /**
   * @param {Date} start
   */
  exports.prototype.setStart = function(start) {
    this['start'] = start;
  }


  /**
   * @return {Date}
   */
  exports.prototype.getStop = function() {
    return this['stop'];
  }

  /**
   * @param {Date} stop
   */
  exports.prototype.setStop = function(stop) {
    this['stop'] = stop;
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
   * @return {Boolean}
   */
  exports.prototype.getPublished = function() {
    return this['published'];
  }

  /**
   * @param {Boolean} published
   */
  exports.prototype.setPublished = function(published) {
    this['published'] = published;
  }


  /**
   * @return {String}
   */
  exports.prototype.getRepetitionUid = function() {
    return this['repetition_uid'];
  }

  /**
   * @param {String} repetitionUid
   */
  exports.prototype.setRepetitionUid = function(repetitionUid) {
    this['repetition_uid'] = repetitionUid;
  }


  /**
   * @return {module:radiomanagermodels/Broadcast.RepetitionTypeEnum}
   */
  exports.prototype.getRepetitionType = function() {
    return this['repetition_type'];
  }

  /**
   * @param {module:radiomanagermodels/Broadcast.RepetitionTypeEnum} repetitionType
   */
  exports.prototype.setRepetitionType = function(repetitionType) {
    this['repetition_type'] = repetitionType;
  }


  /**
   * @return {Date}
   */
  exports.prototype.getRepetitionEnd = function() {
    return this['repetition_end'];
  }

  /**
   * @param {Date} repetitionEnd
   */
  exports.prototype.setRepetitionEnd = function(repetitionEnd) {
    this['repetition_end'] = repetitionEnd;
  }


  /**
   * @return {Date}
   */
  exports.prototype.getRepetitionStart = function() {
    return this['repetition_start'];
  }

  /**
   * @param {Date} repetitionStart
   */
  exports.prototype.setRepetitionStart = function(repetitionStart) {
    this['repetition_start'] = repetitionStart;
  }


  /**
   * @return {String}
   */
  exports.prototype.getRepetitionDays = function() {
    return this['repetition_days'];
  }

  /**
   * @param {String} repetitionDays
   */
  exports.prototype.setRepetitionDays = function(repetitionDays) {
    this['repetition_days'] = repetitionDays;
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


  /**
   * Allowed values for the <code>repetition_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RepetitionTypeEnum = {
    /**
     * value: "1 week"
     * @const
     */
    "1 week": "1 week",
    /**
     * value: "2 weeks"
     * @const
     */
    "2 weeks": "2 weeks",
    /**
     * value: "4 weeks"
     * @const
     */
    "4 weeks": "4 weeks",
    /**
     * value: "1 month"
     * @const
     */
    "1 month": "1 month"  };


  return exports;
}));


