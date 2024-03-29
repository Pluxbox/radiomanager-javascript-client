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
 * The TagRelationsBroadcastsParams model module.
 * @module models/TagRelationsBroadcastsParams
 * @version 2.0
 */
class TagRelationsBroadcastsParams {
    /**
     * Constructs a new <code>TagRelationsBroadcastsParams</code>.
     * @alias module:models/TagRelationsBroadcastsParams
     */
    constructor() { 
        
        TagRelationsBroadcastsParams.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TagRelationsBroadcastsParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TagRelationsBroadcastsParams} obj Optional instance to populate.
     * @return {module:models/TagRelationsBroadcastsParams} The populated <code>TagRelationsBroadcastsParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TagRelationsBroadcastsParams();

            if (data.hasOwnProperty('tag_id')) {
                obj['tag_id'] = ApiClient.convertToType(data['tag_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TagRelationsBroadcastsParams</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TagRelationsBroadcastsParams</code>.
     */
    static validateJSON(data) {

        return true;
    }

/**
     * @return {Number}
     */
    getTagId() {
        return this.tag_id;
    }

    /**
     * @param {Number} tagId
     */
    setTagId(tagId) {
        this['tag_id'] = tagId;
    }

}



/**
 * @member {Number} tag_id
 */
TagRelationsBroadcastsParams.prototype['tag_id'] = undefined;






export default TagRelationsBroadcastsParams;

