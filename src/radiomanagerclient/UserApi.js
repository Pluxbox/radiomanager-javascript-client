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
    define(['ApiClient', 'radiomanagermodels/Forbidden', 'radiomanagermodels/InviteUserData', 'radiomanagermodels/InviteUserSuccess', 'radiomanagermodels/NotFound', 'radiomanagermodels/Success', 'radiomanagermodels/TooManyRequests', 'radiomanagermodels/UnprocessableEntity', 'radiomanagermodels/UserResult', 'radiomanagermodels/UserResults'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../radiomanagermodels/Forbidden'), require('../radiomanagermodels/InviteUserData'), require('../radiomanagermodels/InviteUserSuccess'), require('../radiomanagermodels/NotFound'), require('../radiomanagermodels/Success'), require('../radiomanagermodels/TooManyRequests'), require('../radiomanagermodels/UnprocessableEntity'), require('../radiomanagermodels/UserResult'), require('../radiomanagermodels/UserResults'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.UserApi = factory(root.radiomanager.ApiClient, root.radiomanager.Forbidden, root.radiomanager.InviteUserData, root.radiomanager.InviteUserSuccess, root.radiomanager.NotFound, root.radiomanager.Success, root.radiomanager.TooManyRequests, root.radiomanager.UnprocessableEntity, root.radiomanager.UserResult, root.radiomanager.UserResults);
  }
}(this, function(ApiClient, Forbidden, InviteUserData, InviteUserSuccess, NotFound, Success, TooManyRequests, UnprocessableEntity, UserResult, UserResults) {
  'use strict';

  /**
   * User service.
   * @module radiomanagerclient/UserApi
   * @version 2.0
   */

  /**
   * Constructs a new UserApi. 
   * @alias module:radiomanagerclient/UserApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Remove user from station by Id
     * Remove user from station by Id
     * @param {Number} id id of User
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/Success} and HTTP response
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

      var authNames = ['API Key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Success;

      return this.apiClient.callApi(
        '/users/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove user from station by Id
     * Remove user from station by Id
     * @param {Number} id id of User
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/Success}
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/UserResult} and HTTP response
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

      var authNames = ['API Key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UserResult;

      return this.apiClient.callApi(
        '/users/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get user by id
     * Get user by id
     * @param {Number} id id of User
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/UserResult}
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
     * @param {module:radiomanagermodels/InviteUserData} data Data **(Required)**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/InviteUserSuccess} and HTTP response
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

      var authNames = ['API Key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InviteUserSuccess;

      return this.apiClient.callApi(
        '/users/invite', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Invite user by mail
     * Invite user by mail
     * @param {module:radiomanagermodels/InviteUserData} data Data **(Required)**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/InviteUserSuccess}
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/UserResults} and HTTP response
     */
    this.listUsersWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'role_id': opts['roleId'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API Key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UserResults;

      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all users.
     * List all users.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page *(Optional)* (default to 1)
     * @param {Number} opts.roleId Search on Role ID *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/UserResults}
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
