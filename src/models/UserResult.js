/**
 * RadioManager
 * This OpenAPI 3 Document describes the functionality of the API v2 of RadioManager. Note that no rights can be derived from this Document and the true functionality of the API might differ.
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@pluxbox.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import UserResultGroups from './UserResultGroups';
import UserResultRoles from './UserResultRoles';
import UserResultSettings from './UserResultSettings';

/**
 * The UserResult model module.
 * @module models/UserResult
 * @version 2.0
 */
class UserResult {
    /**
     * Constructs a new <code>UserResult</code>.
     * @alias module:models/UserResult
     * @param id {Number} 
     * @param email {String} 
     * @param firstname {String} 
     * @param lastname {String} 
     */
    constructor(id, email, firstname, lastname) { 
        
        UserResult.initialize(this, id, email, firstname, lastname);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, email, firstname, lastname) { 
        obj['id'] = id;
        obj['email'] = email;
        obj['firstname'] = firstname;
        obj['lastname'] = lastname;
    }

    /**
     * Constructs a <code>UserResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UserResult} obj Optional instance to populate.
     * @return {module:models/UserResult} The populated <code>UserResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserResult();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('firstname')) {
                obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
            }
            if (data.hasOwnProperty('lastname')) {
                obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('settings')) {
                obj['settings'] = UserResultSettings.constructFromObject(data['settings']);
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'Boolean');
            }
            if (data.hasOwnProperty('active_external_station_id')) {
                obj['active_external_station_id'] = ApiClient.convertToType(data['active_external_station_id'], 'Number');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], [UserResultRoles]);
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], [UserResultGroups]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserResult</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UserResult.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['firstname'] && !(typeof data['firstname'] === 'string' || data['firstname'] instanceof String)) {
            throw new Error("Expected the field `firstname` to be a primitive type in the JSON string but got " + data['firstname']);
        }
        // ensure the json data is a string
        if (data['lastname'] && !(typeof data['lastname'] === 'string' || data['lastname'] instanceof String)) {
            throw new Error("Expected the field `lastname` to be a primitive type in the JSON string but got " + data['lastname']);
        }
        // ensure the json data is a string
        if (data['phone'] && !(typeof data['phone'] === 'string' || data['phone'] instanceof String)) {
            throw new Error("Expected the field `phone` to be a primitive type in the JSON string but got " + data['phone']);
        }
        // validate the optional field `settings`
        if (data['settings']) { // data not null
          UserResultSettings.validateJSON(data['settings']);
        }
        if (data['roles']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['roles'])) {
                throw new Error("Expected the field `roles` to be an array in the JSON data but got " + data['roles']);
            }
            // validate the optional field `roles` (array)
            for (const item of data['roles']) {
                UserResultRoles.validateJsonObject(item);
            };
        }
        if (data['groups']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['groups'])) {
                throw new Error("Expected the field `groups` to be an array in the JSON data but got " + data['groups']);
            }
            // validate the optional field `groups` (array)
            for (const item of data['groups']) {
                UserResultGroups.validateJsonObject(item);
            };
        }

        return true;
    }

/**
     * @return {Number}
     */
    getId() {
        return this.id;
    }

    /**
     * @param {Number} id
     */
    setId(id) {
        this['id'] = id;
    }
/**
     * @return {String}
     */
    getEmail() {
        return this.email;
    }

    /**
     * @param {String} email
     */
    setEmail(email) {
        this['email'] = email;
    }
/**
     * @return {String}
     */
    getFirstname() {
        return this.firstname;
    }

    /**
     * @param {String} firstname
     */
    setFirstname(firstname) {
        this['firstname'] = firstname;
    }
/**
     * @return {String}
     */
    getLastname() {
        return this.lastname;
    }

    /**
     * @param {String} lastname
     */
    setLastname(lastname) {
        this['lastname'] = lastname;
    }
/**
     * @return {String}
     */
    getPhone() {
        return this.phone;
    }

    /**
     * @param {String} phone
     */
    setPhone(phone) {
        this['phone'] = phone;
    }
/**
     * @return {Date}
     */
    getCreatedAt() {
        return this.created_at;
    }

    /**
     * @param {Date} createdAt
     */
    setCreatedAt(createdAt) {
        this['created_at'] = createdAt;
    }
/**
     * @return {Date}
     */
    getUpdatedAt() {
        return this.updated_at;
    }

    /**
     * @param {Date} updatedAt
     */
    setUpdatedAt(updatedAt) {
        this['updated_at'] = updatedAt;
    }
/**
     * @return {Boolean}
     */
    getActive() {
        return this.active;
    }

    /**
     * @param {Boolean} active
     */
    setActive(active) {
        this['active'] = active;
    }
/**
     * @return {module:models/UserResultSettings}
     */
    getSettings() {
        return this.settings;
    }

    /**
     * @param {module:models/UserResultSettings} settings
     */
    setSettings(settings) {
        this['settings'] = settings;
    }
/**
     * @return {Boolean}
     */
    getLanguage() {
        return this.language;
    }

    /**
     * @param {Boolean} language
     */
    setLanguage(language) {
        this['language'] = language;
    }
/**
     * @return {Number}
     */
    getActiveExternalStationId() {
        return this.active_external_station_id;
    }

    /**
     * @param {Number} activeExternalStationId
     */
    setActiveExternalStationId(activeExternalStationId) {
        this['active_external_station_id'] = activeExternalStationId;
    }
/**
     * @return {Array.<module:models/UserResultRoles>}
     */
    getRoles() {
        return this.roles;
    }

    /**
     * @param {Array.<module:models/UserResultRoles>} roles
     */
    setRoles(roles) {
        this['roles'] = roles;
    }
/**
     * @return {Array.<module:models/UserResultGroups>}
     */
    getGroups() {
        return this.groups;
    }

    /**
     * @param {Array.<module:models/UserResultGroups>} groups
     */
    setGroups(groups) {
        this['groups'] = groups;
    }

}

UserResult.RequiredProperties = ["id", "email", "firstname", "lastname"];

/**
 * @member {Number} id
 */
UserResult.prototype['id'] = undefined;

/**
 * @member {String} email
 */
UserResult.prototype['email'] = undefined;

/**
 * @member {String} firstname
 */
UserResult.prototype['firstname'] = undefined;

/**
 * @member {String} lastname
 */
UserResult.prototype['lastname'] = undefined;

/**
 * @member {String} phone
 */
UserResult.prototype['phone'] = undefined;

/**
 * @member {Date} created_at
 */
UserResult.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
UserResult.prototype['updated_at'] = undefined;

/**
 * @member {Boolean} active
 */
UserResult.prototype['active'] = undefined;

/**
 * @member {module:models/UserResultSettings} settings
 */
UserResult.prototype['settings'] = undefined;

/**
 * @member {Boolean} language
 */
UserResult.prototype['language'] = undefined;

/**
 * @member {Number} active_external_station_id
 */
UserResult.prototype['active_external_station_id'] = undefined;

/**
 * @member {Array.<module:models/UserResultRoles>} roles
 */
UserResult.prototype['roles'] = undefined;

/**
 * @member {Array.<module:models/UserResultGroups>} groups
 */
UserResult.prototype['groups'] = undefined;






export default UserResult;

