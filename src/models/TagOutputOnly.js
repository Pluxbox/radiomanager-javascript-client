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
 * The TagOutputOnly model module.
 * @module models/TagOutputOnly
 * @version 2.0
 */
class TagOutputOnly {
    /**
     * Constructs a new <code>TagOutputOnly</code>.
     * @alias module:models/TagOutputOnly
     * @param id {Number} 
     */
    constructor(id) { 
        
        TagOutputOnly.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>TagOutputOnly</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TagOutputOnly} obj Optional instance to populate.
     * @return {module:models/TagOutputOnly} The populated <code>TagOutputOnly</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TagOutputOnly();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('_external_station_id')) {
                obj['_external_station_id'] = ApiClient.convertToType(data['_external_station_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TagOutputOnly</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TagOutputOnly</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TagOutputOnly.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
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
     * @return {Date}
     */
    getDeletedAt() {
        return this.deleted_at;
    }

    /**
     * @param {Date} deletedAt
     */
    setDeletedAt(deletedAt) {
        this['deleted_at'] = deletedAt;
    }
/**
     * @return {Number}
     */
    getExternalStationId() {
        return this._external_station_id;
    }

    /**
     * @param {Number} externalStationId
     */
    setExternalStationId(externalStationId) {
        this['_external_station_id'] = externalStationId;
    }

}

TagOutputOnly.RequiredProperties = ["id"];

/**
 * @member {Number} id
 */
TagOutputOnly.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
TagOutputOnly.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
TagOutputOnly.prototype['updated_at'] = undefined;

/**
 * @member {Date} deleted_at
 */
TagOutputOnly.prototype['deleted_at'] = undefined;

/**
 * @member {Number} _external_station_id
 */
TagOutputOnly.prototype['_external_station_id'] = undefined;






export default TagOutputOnly;

