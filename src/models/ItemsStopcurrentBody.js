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
 * The ItemsStopcurrentBody model module.
 * @module models/ItemsStopcurrentBody
 * @version 2.0
 */
class ItemsStopcurrentBody {
    /**
     * Constructs a new <code>ItemsStopcurrentBody</code>.
     * @alias module:models/ItemsStopcurrentBody
     */
    constructor() { 
        
        ItemsStopcurrentBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemsStopcurrentBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ItemsStopcurrentBody} obj Optional instance to populate.
     * @return {module:models/ItemsStopcurrentBody} The populated <code>ItemsStopcurrentBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemsStopcurrentBody();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ItemsStopcurrentBody</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ItemsStopcurrentBody</code>.
     */
    static validateJSON(data) {

        return true;
    }

/**
     * Returns ID of Item to be stopped **(Required)**
     * @return {Number}
     */
    getId() {
        return this.id;
    }

    /**
     * Sets ID of Item to be stopped **(Required)**
     * @param {Number} id ID of Item to be stopped **(Required)**
     */
    setId(id) {
        this['id'] = id;
    }

}



/**
 * ID of Item to be stopped **(Required)**
 * @member {Number} id
 */
ItemsStopcurrentBody.prototype['id'] = undefined;






export default ItemsStopcurrentBody;
