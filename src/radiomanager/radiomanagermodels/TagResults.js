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
    define(['radiomanager/ApiClient', 'radiomanager/radiomanagermodels/TagResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TagResult'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.TagResults = factory(root.radiomanager.ApiClient, root.radiomanager.TagResult);
  }
}(this, function(ApiClient, TagResult) {
  'use strict';




  /**
   * The TagResults model module.
   * @module radiomanager/radiomanagermodels/TagResults
   * @version 2.0
   */

  /**
   * Constructs a new <code>TagResults</code>.
   * @alias module:radiomanager/radiomanagermodels/TagResults
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>TagResults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:radiomanager/radiomanagermodels/TagResults} obj Optional instance to populate.
   * @return {module:radiomanager/radiomanagermodels/TagResults} The populated <code>TagResults</code> instance.
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
      if (data.hasOwnProperty('to')) {
        obj['to'] = ApiClient.convertToType(data['to'], 'Number');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
      if (data.hasOwnProperty('results')) {
        obj['results'] = ApiClient.convertToType(data['results'], [TagResult]);
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
   * @member {Number} to
   */
  exports.prototype['to'] = undefined;
  /**
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;
  /**
   * @member {Array.<module:radiomanager/radiomanagermodels/TagResult>} results
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
   * @return {Array.<module:radiomanager/radiomanagermodels/TagResult>}
   */
  exports.prototype.getResults = function() {
    return this['results'];
  }

  /**
   * @param {Array.<module:radiomanager/radiomanagermodels/TagResult>} results
   */
  exports.prototype.setResults = function(results) {
    this['results'] = results;
  }



  return exports;
}));


