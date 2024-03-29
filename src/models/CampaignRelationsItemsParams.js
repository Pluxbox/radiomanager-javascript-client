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
 * The CampaignRelationsItemsParams model module.
 * @module models/CampaignRelationsItemsParams
 * @version 2.0
 */
class CampaignRelationsItemsParams {
    /**
     * Constructs a new <code>CampaignRelationsItemsParams</code>.
     * @alias module:models/CampaignRelationsItemsParams
     */
    constructor() { 
        
        CampaignRelationsItemsParams.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CampaignRelationsItemsParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CampaignRelationsItemsParams} obj Optional instance to populate.
     * @return {module:models/CampaignRelationsItemsParams} The populated <code>CampaignRelationsItemsParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignRelationsItemsParams();

            if (data.hasOwnProperty('campaign_id')) {
                obj['campaign_id'] = ApiClient.convertToType(data['campaign_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CampaignRelationsItemsParams</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CampaignRelationsItemsParams</code>.
     */
    static validateJSON(data) {

        return true;
    }

/**
     * @return {Number}
     */
    getCampaignId() {
        return this.campaign_id;
    }

    /**
     * @param {Number} campaignId
     */
    setCampaignId(campaignId) {
        this['campaign_id'] = campaignId;
    }

}



/**
 * @member {Number} campaign_id
 */
CampaignRelationsItemsParams.prototype['campaign_id'] = undefined;






export default CampaignRelationsItemsParams;

