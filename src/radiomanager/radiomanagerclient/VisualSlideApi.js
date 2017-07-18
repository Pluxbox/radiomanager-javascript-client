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
    define(['radiomanager/ApiClient', 'radiomanager/radiomanagermodels/NotFound', 'radiomanager/radiomanagermodels/TooManyRequests', 'radiomanager/radiomanagermodels/VisualImageResult', 'radiomanager/radiomanagermodels/VisualResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../radiomanagermodels/NotFound'), require('../radiomanagermodels/TooManyRequests'), require('../radiomanagermodels/VisualImageResult'), require('../radiomanagermodels/VisualResult'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.VisualSlideApi = factory(root.radiomanager.ApiClient, root.radiomanager.NotFound, root.radiomanager.TooManyRequests, root.radiomanager.VisualImageResult, root.radiomanager.VisualResult);
  }
}(this, function(ApiClient, NotFound, TooManyRequests, VisualImageResult, VisualResult) {
  'use strict';

  /**
   * VisualSlide service.
   * @module radiomanager/radiomanagerclient/VisualSlideApi
   * @version 2.0
   */

  /**
   * Constructs a new VisualSlideApi. 
   * @alias module:radiomanager/radiomanagerclient/VisualSlideApi
   * @class
   * @param {module:radiomanager/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:radiomanager/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get Visual Slide Image as JPEG
     * Get Visual Slide Image as JPEG
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanager/radiomanagermodels/VisualImageResult} and HTTP response
     */
    this.downloadVisualSlideWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API Key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = VisualImageResult;

      return this.apiClient.callApi(
        '/visual/image', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Visual Slide Image as JPEG
     * Get Visual Slide Image as JPEG
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanager/radiomanagermodels/VisualImageResult}
     */
    this.downloadVisualSlide = function() {
      return this.downloadVisualSlideWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Visual Slide Image as Base64
     * Get Visual Slide Image as Base64
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanager/radiomanagermodels/VisualResult} and HTTP response
     */
    this.getVisualSlideWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API Key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = VisualResult;

      return this.apiClient.callApi(
        '/visual', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Visual Slide Image as Base64
     * Get Visual Slide Image as Base64
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanager/radiomanagermodels/VisualResult}
     */
    this.getVisualSlide = function() {
      return this.getVisualSlideWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
