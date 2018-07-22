import { ReferenceData } from './reference-data';
export class GroupedReferenceData {

    referenceDataType : string;
    refData : ReferenceData[];

    constructor(_rdType, _rData) {
        this.referenceDataType = _rdType;
        this.refData = _rData;
    }
    
}