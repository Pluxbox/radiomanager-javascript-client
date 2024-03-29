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

/**
 * The Group model module.
 * @module models/Group
 * @version 2.0
 */
class Group {
    /**
     * Constructs a new <code>Group</code>.
     * @alias module:models/Group
     * @param id {Number} 
     * @param updatedAt {Date} 
     * @param createdAt {Date} 
     */
    constructor(id, updatedAt, createdAt) { 
        
        Group.initialize(this, id, updatedAt, createdAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, updatedAt, createdAt) { 
        obj['id'] = id;
        obj['updated_at'] = updatedAt;
        obj['created_at'] = createdAt;
    }

    /**
     * Constructs a <code>Group</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/Group} obj Optional instance to populate.
     * @return {module:models/Group} The populated <code>Group</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Group();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Group</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Group</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Group.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
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
     * @return {String}
     */
    getTitle() {
        return this.title;
    }

    /**
     * @param {String} title
     */
    setTitle(title) {
        this['title'] = title;
    }

}

Group.RequiredProperties = ["id", "updated_at", "created_at"];

/**
 * @member {Number} id
 */
Group.prototype['id'] = undefined;

/**
 * @member {Date} updated_at
 */
Group.prototype['updated_at'] = undefined;

/**
 * @member {Date} created_at
 */
Group.prototype['created_at'] = undefined;

/**
 * @member {String} title
 */
Group.prototype['title'] = undefined;






export default Group;

