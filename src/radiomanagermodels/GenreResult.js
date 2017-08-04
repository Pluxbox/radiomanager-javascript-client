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
    define(['ApiClient', 'radiomanagermodels/Genre', 'radiomanagermodels/GenreOutputOnly', 'radiomanagermodels/GenreRelations', 'radiomanagermodels/GenreRelationsBroadcasts', 'radiomanagermodels/GenreRelationsPrograms'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Genre'), require('./GenreOutputOnly'), require('./GenreRelations'), require('./GenreRelationsBroadcasts'), require('./GenreRelationsPrograms'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.GenreResult = factory(root.radiomanager.ApiClient, root.radiomanager.Genre, root.radiomanager.GenreOutputOnly, root.radiomanager.GenreRelations, root.radiomanager.GenreRelationsBroadcasts, root.radiomanager.GenreRelationsPrograms);
  }
}(this, function(ApiClient, Genre, GenreOutputOnly, GenreRelations, GenreRelationsBroadcasts, GenreRelationsPrograms) {
  'use strict';




  /**
   * The GenreResult model module.
   * @module radiomanagermodels/GenreResult
   * @version 2.0
   */

  /**
   * Constructs a new <code>GenreResult</code>.
   * @alias module:radiomanagermodels/GenreResult
   * @class
   * @implements module:radiomanagermodels/Genre
   * @implements module:radiomanagermodels/GenreRelations
   * @implements module:radiomanagermodels/GenreOutputOnly
   * @param id {Number} 
   * @param name {String} 
   */
  var exports = function(id, name) {
    var _this = this;

    Genre.call(_this, id, name);
    GenreRelations.call(_this);
    GenreOutputOnly.call(_this);
  };

  /**
   * Constructs a <code>GenreResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/GenreResult} obj Optional instance to populate.
   * @return {module:radiomanagermodels/GenreResult} The populated <code>GenreResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      Genre.constructFromObject(data, obj);
      GenreRelations.constructFromObject(data, obj);
      GenreOutputOnly.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement Genre interface:
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

  // Implement GenreRelations interface:
  /**
   * @member {module:radiomanagermodels/GenreRelationsBroadcasts} broadcasts
   */
exports.prototype['broadcasts'] = undefined;

  /**
   * @member {module:radiomanagermodels/GenreRelationsPrograms} programs
   */
exports.prototype['programs'] = undefined;

  // Implement GenreOutputOnly interface:
  /**
   * @member {Number} _external_station_id
   */
exports.prototype['_external_station_id'] = undefined;



  return exports;
}));


