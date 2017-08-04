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
    define(['ApiClient', 'radiomanagermodels/Presenter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Presenter'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.PresenterDataInput = factory(root.radiomanager.ApiClient, root.radiomanager.Presenter);
  }
}(this, function(ApiClient, Presenter) {
  'use strict';




  /**
   * The PresenterDataInput model module.
   * @module radiomanagermodels/PresenterDataInput
   * @version 2.0
   */

  /**
   * Constructs a new <code>PresenterDataInput</code>.
   * @alias module:radiomanagermodels/PresenterDataInput
   * @class
   * @implements module:radiomanagermodels/Presenter
   * @param modelTypeId {Number} 
   */
  var exports = function(modelTypeId) {
    var _this = this;

    Presenter.call(_this, modelTypeId);
  };

  /**
   * Constructs a <code>PresenterDataInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/PresenterDataInput} obj Optional instance to populate.
   * @return {module:radiomanagermodels/PresenterDataInput} The populated <code>PresenterDataInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      Presenter.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement Presenter interface:
  /**
   * @member {Number} model_type_id
   */
exports.prototype['model_type_id'] = undefined;

  /**
   * @member {Array.<Object>} field_values
   */
exports.prototype['field_values'] = undefined;

  /**
   * @member {String} firstname
   */
exports.prototype['firstname'] = undefined;

  /**
   * @member {String} lastname
   */
exports.prototype['lastname'] = undefined;

  /**
   * @member {Boolean} active
   */
exports.prototype['active'] = undefined;

  /**
   * @member {String} name
   */
exports.prototype['name'] = undefined;



  return exports;
}));


