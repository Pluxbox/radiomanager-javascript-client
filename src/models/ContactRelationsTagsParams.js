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
 * The ContactRelationsTagsParams model module.
 * @module models/ContactRelationsTagsParams
 * @version 2.0
 */
class ContactRelationsTagsParams {
    /**
     * Constructs a new <code>ContactRelationsTagsParams</code>.
     * @alias module:models/ContactRelationsTagsParams
     */
    constructor() { 
        
        ContactRelationsTagsParams.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContactRelationsTagsParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ContactRelationsTagsParams} obj Optional instance to populate.
     * @return {module:models/ContactRelationsTagsParams} The populated <code>ContactRelationsTagsParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactRelationsTagsParams();

            if (data.hasOwnProperty('contact_id')) {
                obj['contact_id'] = ApiClient.convertToType(data['contact_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ContactRelationsTagsParams</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContactRelationsTagsParams</code>.
     */
    static validateJSON(data) {

        return true;
    }

/**
     * @return {Number}
     */
    getContactId() {
        return this.contact_id;
    }

    /**
     * @param {Number} contactId
     */
    setContactId(contactId) {
        this['contact_id'] = contactId;
    }

}



/**
 * @member {Number} contact_id
 */
ContactRelationsTagsParams.prototype['contact_id'] = undefined;






export default ContactRelationsTagsParams;

