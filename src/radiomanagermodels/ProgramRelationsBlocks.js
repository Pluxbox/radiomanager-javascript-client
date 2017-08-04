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
    define(['ApiClient', 'radiomanagermodels/ProgramRelationsItemsParams'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProgramRelationsItemsParams'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.ProgramRelationsBlocks = factory(root.radiomanager.ApiClient, root.radiomanager.ProgramRelationsItemsParams);
  }
}(this, function(ApiClient, ProgramRelationsItemsParams) {
  'use strict';




  /**
   * The ProgramRelationsBlocks model module.
   * @module radiomanagermodels/ProgramRelationsBlocks
   * @version 2.0
   */

  /**
   * Constructs a new <code>ProgramRelationsBlocks</code>.
   * @alias module:radiomanagermodels/ProgramRelationsBlocks
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ProgramRelationsBlocks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/ProgramRelationsBlocks} obj Optional instance to populate.
   * @return {module:radiomanagermodels/ProgramRelationsBlocks} The populated <code>ProgramRelationsBlocks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('href')) {
        obj['href'] = ApiClient.convertToType(data['href'], 'String');
      }
      if (data.hasOwnProperty('model')) {
        obj['model'] = ApiClient.convertToType(data['model'], 'String');
      }
      if (data.hasOwnProperty('operation')) {
        obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
      }
      if (data.hasOwnProperty('params')) {
        obj['params'] = ProgramRelationsItemsParams.constructFromObject(data['params']);
      }
    }
    return obj;
  }

  /**
   * @member {String} href
   */
  exports.prototype['href'] = undefined;
  /**
   * @member {String} model
   */
  exports.prototype['model'] = undefined;
  /**
   * @member {String} operation
   */
  exports.prototype['operation'] = undefined;
  /**
   * @member {module:radiomanagermodels/ProgramRelationsItemsParams} params
   */
  exports.prototype['params'] = undefined;


  /**
   * @return {String}
   */
  exports.prototype.getHref = function() {
    return this['href'];
  }

  /**
   * @param {String} href
   */
  exports.prototype.setHref = function(href) {
    this['href'] = href;
  }


  /**
   * @return {String}
   */
  exports.prototype.getModel = function() {
    return this['model'];
  }

  /**
   * @param {String} model
   */
  exports.prototype.setModel = function(model) {
    this['model'] = model;
  }


  /**
   * @return {String}
   */
  exports.prototype.getOperation = function() {
    return this['operation'];
  }

  /**
   * @param {String} operation
   */
  exports.prototype.setOperation = function(operation) {
    this['operation'] = operation;
  }


  /**
   * @return {module:radiomanagermodels/ProgramRelationsItemsParams}
   */
  exports.prototype.getParams = function() {
    return this['params'];
  }

  /**
   * @param {module:radiomanagermodels/ProgramRelationsItemsParams} params
   */
  exports.prototype.setParams = function(params) {
    this['params'] = params;
  }



  return exports;
}));


