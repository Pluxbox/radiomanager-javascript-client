/**
 * RadioManager
 * RadioManager
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@pluxbox.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'models/Forbidden', 'models/InviteUserData', 'models/NotFound', 'models/Success', 'models/TooManyRequests', 'models/UnprocessableEntity', 'models/UserResult', 'models/UserResults'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../models/Forbidden'), require('../models/InviteUserData'), require('../models/NotFound'), require('../models/Success'), require('../models/TooManyRequests'), require('../models/UnprocessableEntity'), require('../models/UserResult'), require('../models/UserResults'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.UserApi = factory(root.radiomanager.ApiClient, root.radiomanager.Forbidden, root.radiomanager.InviteUserData, root.radiomanager.NotFound, root.radiomanager.Success, root.radiomanager.TooManyRequests, root.radiomanager.UnprocessableEntity, root.radiomanager.UserResult, root.radiomanager.UserResults);
  }
}(this, function(ApiClient, Forbidden, InviteUserData, NotFound, Success, TooManyRequests, UnprocessableEntity, UserResult, UserResults) {
  'use strict';

  /**
   * User service.
   * @module radiomanager/UserApi
   * @version 2.0
   */

  /**
   * Constructs a new UserApi. 
   * @alias module:radiomanager/UserApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Remove user from station by Id
     * Remove user from station by Id
     * @param {Number} id id of User
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/Success} and HTTP response
     */
    this.deleteUserByIdWithHttpInfo = function(id) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteUserById");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API-Key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Success;
      return this.apiClient.callApi(
        '/users/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove user from station by Id
     * Remove user from station by Id
     * @param {Number} id id of User
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/Success}
     */
    this.deleteUserById = function(id) {
      return this.deleteUserByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get user by id
     * Get user by id
     * @param {Number} id id of User
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/UserResult} and HTTP response
     */
    this.getUserByIdWithHttpInfo = function(id) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getUserById");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API-Key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = UserResult;
      return this.apiClient.callApi(
        '/users/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get user by id
     * Get user by id
     * @param {Number} id id of User
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/UserResult}
     */
    this.getUserById = function(id) {
      return this.getUserByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Invite user by mail
     * Invite user by mail
     * @param {module:models/InviteUserData} data Data **(Required)**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    this.inviteUserByMailWithHttpInfo = function(data) {
      var postBody = data;
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling inviteUserByMail");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API-Key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi(
        '/users/invite', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Invite user by mail
     * Invite user by mail
     * @param {module:models/InviteUserData} data Data **(Required)**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    this.inviteUserByMail = function(data) {
      return this.inviteUserByMailWithHttpInfo(data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all users.
     * List all users.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page *(Optional)* (default to 1)
     * @param {Number} opts.roleId Search on Role ID *(Optional)*
     * @param {Number} opts.limit Results per page *(Optional)*
     * @param {String} opts.orderBy Field to order the results *(Optional)*
     * @param {module:models/String} opts.orderDirection Direction of ordering *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/UserResults} and HTTP response
     */
    this.listUsersWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'role_id': opts['roleId'],
        'limit': opts['limit'],
        'order-by': opts['orderBy'],
        'order-direction': opts['orderDirection'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API-Key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = UserResults;
      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all users.
     * List all users.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page *(Optional)* (default to 1)
     * @param {Number} opts.roleId Search on Role ID *(Optional)*
     * @param {Number} opts.limit Results per page *(Optional)*
     * @param {String} opts.orderBy Field to order the results *(Optional)*
     * @param {module:models/String} opts.orderDirection Direction of ordering *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/UserResults}
     */
    this.listUsers = function(opts) {
      return this.listUsersWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));