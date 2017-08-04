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
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'radiomanagermodels/BroadcastResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BroadcastResult'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.BroadcastResults = factory(root.radiomanager.ApiClient, root.radiomanager.BroadcastResult);
  }
}(this, function(ApiClient, BroadcastResult) {
  'use strict';




  /**
   * The BroadcastResults model module.
   * @module radiomanagermodels/BroadcastResults
   * @version 2.0
   */

  /**
   * Constructs a new <code>BroadcastResults</code>.
   * @alias module:radiomanagermodels/BroadcastResults
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>BroadcastResults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanagermodels/BroadcastResults} obj Optional instance to populate.
   * @return {module:radiomanagermodels/BroadcastResults} The populated <code>BroadcastResults</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('current_page')) {
        obj['current_page'] = ApiClient.convertToType(data['current_page'], 'Number');
      }
      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], 'Number');
      }
      if (data.hasOwnProperty('last_page')) {
        obj['last_page'] = ApiClient.convertToType(data['last_page'], 'Number');
      }
      if (data.hasOwnProperty('next_page_url')) {
        obj['next_page_url'] = ApiClient.convertToType(data['next_page_url'], 'String');
      }
      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
      if (data.hasOwnProperty('per_page')) {
        obj['per_page'] = ApiClient.convertToType(data['per_page'], 'Number');
      }
      if (data.hasOwnProperty('prev_page_url')) {
        obj['prev_page_url'] = ApiClient.convertToType(data['prev_page_url'], 'String');
      }
      if (data.hasOwnProperty('to')) {
        obj['to'] = ApiClient.convertToType(data['to'], 'Number');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
      if (data.hasOwnProperty('results')) {
        obj['results'] = ApiClient.convertToType(data['results'], [BroadcastResult]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} current_page
   */
  exports.prototype['current_page'] = undefined;
  /**
   * @member {Number} from
   */
  exports.prototype['from'] = undefined;
  /**
   * @member {Number} last_page
   */
  exports.prototype['last_page'] = undefined;
  /**
   * @member {String} next_page_url
   */
  exports.prototype['next_page_url'] = undefined;
  /**
   * @member {String} path
   */
  exports.prototype['path'] = undefined;
  /**
   * @member {Number} per_page
   */
  exports.prototype['per_page'] = undefined;
  /**
   * @member {String} prev_page_url
   */
  exports.prototype['prev_page_url'] = undefined;
  /**
   * @member {Number} to
   */
  exports.prototype['to'] = undefined;
  /**
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;
  /**
   * @member {Array.<module:radiomanagermodels/BroadcastResult>} results
   */
  exports.prototype['results'] = undefined;


  /**
   * @return {Number}
   */
  exports.prototype.getCurrentPage = function() {
    return this['current_page'];
  }

  /**
   * @param {Number} currentPage
   */
  exports.prototype.setCurrentPage = function(currentPage) {
    this['current_page'] = currentPage;
  }


  /**
   * @return {Number}
   */
  exports.prototype.getFrom = function() {
    return this['from'];
  }

  /**
   * @param {Number} from
   */
  exports.prototype.setFrom = function(from) {
    this['from'] = from;
  }


  /**
   * @return {Number}
   */
  exports.prototype.getLastPage = function() {
    return this['last_page'];
  }

  /**
   * @param {Number} lastPage
   */
  exports.prototype.setLastPage = function(lastPage) {
    this['last_page'] = lastPage;
  }


  /**
   * @return {String}
   */
  exports.prototype.getNextPageUrl = function() {
    return this['next_page_url'];
  }

  /**
   * @param {String} nextPageUrl
   */
  exports.prototype.setNextPageUrl = function(nextPageUrl) {
    this['next_page_url'] = nextPageUrl;
  }


  /**
   * @return {String}
   */
  exports.prototype.getPath = function() {
    return this['path'];
  }

  /**
   * @param {String} path
   */
  exports.prototype.setPath = function(path) {
    this['path'] = path;
  }


  /**
   * @return {Number}
   */
  exports.prototype.getPerPage = function() {
    return this['per_page'];
  }

  /**
   * @param {Number} perPage
   */
  exports.prototype.setPerPage = function(perPage) {
    this['per_page'] = perPage;
  }


  /**
   * @return {String}
   */
  exports.prototype.getPrevPageUrl = function() {
    return this['prev_page_url'];
  }

  /**
   * @param {String} prevPageUrl
   */
  exports.prototype.setPrevPageUrl = function(prevPageUrl) {
    this['prev_page_url'] = prevPageUrl;
  }


  /**
   * @return {Number}
   */
  exports.prototype.getTo = function() {
    return this['to'];
  }

  /**
   * @param {Number} to
   */
  exports.prototype.setTo = function(to) {
    this['to'] = to;
  }


  /**
   * @return {Number}
   */
  exports.prototype.getTotal = function() {
    return this['total'];
  }

  /**
   * @param {Number} total
   */
  exports.prototype.setTotal = function(total) {
    this['total'] = total;
  }


  /**
   * @return {Array.<module:radiomanagermodels/BroadcastResult>}
   */
  exports.prototype.getResults = function() {
    return this['results'];
  }

  /**
   * @param {Array.<module:radiomanagermodels/BroadcastResult>} results
   */
  exports.prototype.setResults = function(results) {
    this['results'] = results;
  }



  return exports;
}));


