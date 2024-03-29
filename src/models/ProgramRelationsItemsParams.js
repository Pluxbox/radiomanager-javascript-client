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
 * The ProgramRelationsItemsParams model module.
 * @module models/ProgramRelationsItemsParams
 * @version 2.0
 */
class ProgramRelationsItemsParams {
    /**
     * Constructs a new <code>ProgramRelationsItemsParams</code>.
     * @alias module:models/ProgramRelationsItemsParams
     */
    constructor() { 
        
        ProgramRelationsItemsParams.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProgramRelationsItemsParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ProgramRelationsItemsParams} obj Optional instance to populate.
     * @return {module:models/ProgramRelationsItemsParams} The populated <code>ProgramRelationsItemsParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramRelationsItemsParams();

            if (data.hasOwnProperty('program_id')) {
                obj['program_id'] = ApiClient.convertToType(data['program_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProgramRelationsItemsParams</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProgramRelationsItemsParams</code>.
     */
    static validateJSON(data) {

        return true;
    }

/**
     * @return {Number}
     */
    getProgramId() {
        return this.program_id;
    }

    /**
     * @param {Number} programId
     */
    setProgramId(programId) {
        this['program_id'] = programId;
    }

}



/**
 * @member {Number} program_id
 */
ProgramRelationsItemsParams.prototype['program_id'] = undefined;






export default ProgramRelationsItemsParams;

