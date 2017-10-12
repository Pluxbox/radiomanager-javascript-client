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
    root.radiomanager.StationResultStation = factory(root.radiomanager.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StationResultStation model module.
   * @module radiomanagermodels/StationResultStation
   * @version 2.0
   */

  /**
   * Constructs a new <code>StationResultStation</code>.
   * @alias module:radiomanagermodels/StationResultStation
   * @class
   */
  var exports = function() {
    var _this = this;


























  };

  /**
   * Constructs a <code>StationResultStation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/StationResultStation} obj Optional instance to populate.
   * @return {module:radiomanagermodels/StationResultStation} The populated <code>StationResultStation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
      if (data.hasOwnProperty('system_name')) {
        obj['system_name'] = ApiClient.convertToType(data['system_name'], 'String');
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
      if (data.hasOwnProperty('keywords')) {
        obj['keywords'] = ApiClient.convertToType(data['keywords'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('sms')) {
        obj['sms'] = ApiClient.convertToType(data['sms'], 'String');
      }
      if (data.hasOwnProperty('telephone')) {
        obj['telephone'] = ApiClient.convertToType(data['telephone'], 'String');
      }
      if (data.hasOwnProperty('genre_id')) {
        obj['genre_id'] = ApiClient.convertToType(data['genre_id'], 'Number');
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('logo_rectangle')) {
        obj['logo_rectangle'] = ApiClient.convertToType(data['logo_rectangle'], 'String');
      }
      if (data.hasOwnProperty('logo_128x128')) {
        obj['logo_128x128'] = ApiClient.convertToType(data['logo_128x128'], 'String');
      }
      if (data.hasOwnProperty('logo_320x320')) {
        obj['logo_320x320'] = ApiClient.convertToType(data['logo_320x320'], 'String');
      }
      if (data.hasOwnProperty('logo_600x600')) {
        obj['logo_600x600'] = ApiClient.convertToType(data['logo_600x600'], 'String');
      }
      if (data.hasOwnProperty('pay_off')) {
        obj['pay_off'] = ApiClient.convertToType(data['pay_off'], 'String');
      }
      if (data.hasOwnProperty('pty_code')) {
        obj['pty_code'] = ApiClient.convertToType(data['pty_code'], 'Number');
      }
      if (data.hasOwnProperty('pty_type')) {
        obj['pty_type'] = ApiClient.convertToType(data['pty_type'], 'String');
      }
      if (data.hasOwnProperty('station_key')) {
        obj['station_key'] = ApiClient.convertToType(data['station_key'], 'String');
      }
      if (data.hasOwnProperty('trial_date')) {
        obj['trial_date'] = ApiClient.convertToType(data['trial_date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;
  /**
   * @member {String} system_name
   */
  exports.prototype['system_name'] = undefined;
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
   * @member {String} keywords
   */
  exports.prototype['keywords'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} sms
   */
  exports.prototype['sms'] = undefined;
  /**
   * @member {String} telephone
   */
  exports.prototype['telephone'] = undefined;
  /**
   * @member {Number} genre_id
   */
  exports.prototype['genre_id'] = undefined;
  /**
   * @member {String} language
   */
  exports.prototype['language'] = undefined;
  /**
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * @member {String} logo_rectangle
   */
  exports.prototype['logo_rectangle'] = undefined;
  /**
   * @member {String} logo_128x128
   */
  exports.prototype['logo_128x128'] = undefined;
  /**
   * @member {String} logo_320x320
   */
  exports.prototype['logo_320x320'] = undefined;
  /**
   * @member {String} logo_600x600
   */
  exports.prototype['logo_600x600'] = undefined;
  /**
   * @member {String} pay_off
   */
  exports.prototype['pay_off'] = undefined;
  /**
   * @member {Number} pty_code
   */
  exports.prototype['pty_code'] = undefined;
  /**
   * @member {String} pty_type
   */
  exports.prototype['pty_type'] = undefined;
  /**
   * @member {String} station_key
   */
  exports.prototype['station_key'] = undefined;
  /**
   * @member {Date} trial_date
   */
  exports.prototype['trial_date'] = undefined;


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
  exports.prototype.getName = function() {
    return this['name'];
  }

  /**
   * @param {String} name
   */
  exports.prototype.setName = function(name) {
    this['name'] = name;
  }


  /**
   * @return {Date}
   */
  exports.prototype.getCreatedAt = function() {
    return this['created_at'];
  }

  /**
   * @param {Date} createdAt
   */
  exports.prototype.setCreatedAt = function(createdAt) {
    this['created_at'] = createdAt;
  }


  /**
   * @return {Date}
   */
  exports.prototype.getUpdatedAt = function() {
    return this['updated_at'];
  }

  /**
   * @param {Date} updatedAt
   */
  exports.prototype.setUpdatedAt = function(updatedAt) {
    this['updated_at'] = updatedAt;
  }


  /**
   * @return {String}
   */
  exports.prototype.getSystemName = function() {
    return this['system_name'];
  }

  /**
   * @param {String} systemName
   */
  exports.prototype.setSystemName = function(systemName) {
    this['system_name'] = systemName;
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
   * @return {String}
   */
  exports.prototype.getKeywords = function() {
    return this['keywords'];
  }

  /**
   * @param {String} keywords
   */
  exports.prototype.setKeywords = function(keywords) {
    this['keywords'] = keywords;
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
  exports.prototype.getSms = function() {
    return this['sms'];
  }

  /**
   * @param {String} sms
   */
  exports.prototype.setSms = function(sms) {
    this['sms'] = sms;
  }


  /**
   * @return {String}
   */
  exports.prototype.getTelephone = function() {
    return this['telephone'];
  }

  /**
   * @param {String} telephone
   */
  exports.prototype.setTelephone = function(telephone) {
    this['telephone'] = telephone;
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
  exports.prototype.getActive = function() {
    return this['active'];
  }

  /**
   * @param {Boolean} active
   */
  exports.prototype.setActive = function(active) {
    this['active'] = active;
  }


  /**
   * @return {String}
   */
  exports.prototype.getLogoRectangle = function() {
    return this['logo_rectangle'];
  }

  /**
   * @param {String} logoRectangle
   */
  exports.prototype.setLogoRectangle = function(logoRectangle) {
    this['logo_rectangle'] = logoRectangle;
  }


  /**
   * @return {String}
   */
  exports.prototype.getLogo128x128 = function() {
    return this['logo_128x128'];
  }

  /**
   * @param {String} logo128x128
   */
  exports.prototype.setLogo128x128 = function(logo128x128) {
    this['logo_128x128'] = logo128x128;
  }


  /**
   * @return {String}
   */
  exports.prototype.getLogo320x320 = function() {
    return this['logo_320x320'];
  }

  /**
   * @param {String} logo320x320
   */
  exports.prototype.setLogo320x320 = function(logo320x320) {
    this['logo_320x320'] = logo320x320;
  }


  /**
   * @return {String}
   */
  exports.prototype.getLogo600x600 = function() {
    return this['logo_600x600'];
  }

  /**
   * @param {String} logo600x600
   */
  exports.prototype.setLogo600x600 = function(logo600x600) {
    this['logo_600x600'] = logo600x600;
  }


  /**
   * @return {String}
   */
  exports.prototype.getPayOff = function() {
    return this['pay_off'];
  }

  /**
   * @param {String} payOff
   */
  exports.prototype.setPayOff = function(payOff) {
    this['pay_off'] = payOff;
  }


  /**
   * @return {Number}
   */
  exports.prototype.getPtyCode = function() {
    return this['pty_code'];
  }

  /**
   * @param {Number} ptyCode
   */
  exports.prototype.setPtyCode = function(ptyCode) {
    this['pty_code'] = ptyCode;
  }


  /**
   * @return {String}
   */
  exports.prototype.getPtyType = function() {
    return this['pty_type'];
  }

  /**
   * @param {String} ptyType
   */
  exports.prototype.setPtyType = function(ptyType) {
    this['pty_type'] = ptyType;
  }


  /**
   * @return {String}
   */
  exports.prototype.getStationKey = function() {
    return this['station_key'];
  }

  /**
   * @param {String} stationKey
   */
  exports.prototype.setStationKey = function(stationKey) {
    this['station_key'] = stationKey;
  }


  /**
   * @return {Date}
   */
  exports.prototype.getTrialDate = function() {
    return this['trial_date'];
  }

  /**
   * @param {Date} trialDate
   */
  exports.prototype.setTrialDate = function(trialDate) {
    this['trial_date'] = trialDate;
  }



  return exports;
}));


