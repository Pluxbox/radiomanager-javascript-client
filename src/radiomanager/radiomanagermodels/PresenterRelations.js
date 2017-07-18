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
    define(['radiomanager/ApiClient', 'radiomanager/radiomanagermodels/BroadcastRelationsModelType', 'radiomanager/radiomanagermodels/PresenterRelationsBroadcasts', 'radiomanager/radiomanagermodels/PresenterRelationsPrograms'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BroadcastRelationsModelType'), require('./PresenterRelationsBroadcasts'), require('./PresenterRelationsPrograms'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.PresenterRelations = factory(root.radiomanager.ApiClient, root.radiomanager.BroadcastRelationsModelType, root.radiomanager.PresenterRelationsBroadcasts, root.radiomanager.PresenterRelationsPrograms);
  }
}(this, function(ApiClient, BroadcastRelationsModelType, PresenterRelationsBroadcasts, PresenterRelationsPrograms) {
  'use strict';




  /**
   * The PresenterRelations model module.
   * @module radiomanager/radiomanagermodels/PresenterRelations
   * @version 2.0
   */

  /**
   * Constructs a new <code>PresenterRelations</code>.
   * @alias module:radiomanager/radiomanagermodels/PresenterRelations
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PresenterRelations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanager/radiomanagermodels/PresenterRelations} obj Optional instance to populate.
   * @return {module:radiomanager/radiomanagermodels/PresenterRelations} The populated <code>PresenterRelations</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('programs')) {
        obj['programs'] = PresenterRelationsPrograms.constructFromObject(data['programs']);
      }
      if (data.hasOwnProperty('broadcasts')) {
        obj['broadcasts'] = PresenterRelationsBroadcasts.constructFromObject(data['broadcasts']);
      }
      if (data.hasOwnProperty('model_type')) {
        obj['model_type'] = BroadcastRelationsModelType.constructFromObject(data['model_type']);
      }
    }
    return obj;
  }

  /**
   * @member {module:radiomanager/radiomanagermodels/PresenterRelationsPrograms} programs
   */
  exports.prototype['programs'] = undefined;
  /**
   * @member {module:radiomanager/radiomanagermodels/PresenterRelationsBroadcasts} broadcasts
   */
  exports.prototype['broadcasts'] = undefined;
  /**
   * @member {module:radiomanager/radiomanagermodels/BroadcastRelationsModelType} model_type
   */
  exports.prototype['model_type'] = undefined;


  /**
   * @return {module:radiomanager/radiomanagermodels/PresenterRelationsPrograms}
   */
  exports.prototype.getPrograms = function() {
    return this['programs'];
  }

  /**
   * @param {module:radiomanager/radiomanagermodels/PresenterRelationsPrograms} programs
   */
  exports.prototype.setPrograms = function(programs) {
    this['programs'] = programs;
  }


  /**
   * @return {module:radiomanager/radiomanagermodels/PresenterRelationsBroadcasts}
   */
  exports.prototype.getBroadcasts = function() {
    return this['broadcasts'];
  }

  /**
   * @param {module:radiomanager/radiomanagermodels/PresenterRelationsBroadcasts} broadcasts
   */
  exports.prototype.setBroadcasts = function(broadcasts) {
    this['broadcasts'] = broadcasts;
  }


  /**
   * @return {module:radiomanager/radiomanagermodels/BroadcastRelationsModelType}
   */
  exports.prototype.getModelType = function() {
    return this['model_type'];
  }

  /**
   * @param {module:radiomanager/radiomanagermodels/BroadcastRelationsModelType} modelType
   */
  exports.prototype.setModelType = function(modelType) {
    this['model_type'] = modelType;
  }



  return exports;
}));


