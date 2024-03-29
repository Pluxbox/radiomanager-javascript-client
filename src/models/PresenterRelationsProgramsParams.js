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
 * The PresenterRelationsProgramsParams model module.
 * @module models/PresenterRelationsProgramsParams
 * @version 2.0
 */
class PresenterRelationsProgramsParams {
    /**
     * Constructs a new <code>PresenterRelationsProgramsParams</code>.
     * @alias module:models/PresenterRelationsProgramsParams
     */
    constructor() { 
        
        PresenterRelationsProgramsParams.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PresenterRelationsProgramsParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/PresenterRelationsProgramsParams} obj Optional instance to populate.
     * @return {module:models/PresenterRelationsProgramsParams} The populated <code>PresenterRelationsProgramsParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PresenterRelationsProgramsParams();

            if (data.hasOwnProperty('presenter_id')) {
                obj['presenter_id'] = ApiClient.convertToType(data['presenter_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PresenterRelationsProgramsParams</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PresenterRelationsProgramsParams</code>.
     */
    static validateJSON(data) {

        return true;
    }

/**
     * @return {Number}
     */
    getPresenterId() {
        return this.presenter_id;
    }

    /**
     * @param {Number} presenterId
     */
    setPresenterId(presenterId) {
        this['presenter_id'] = presenterId;
    }

}



/**
 * @member {Number} presenter_id
 */
PresenterRelationsProgramsParams.prototype['presenter_id'] = undefined;






export default PresenterRelationsProgramsParams;

