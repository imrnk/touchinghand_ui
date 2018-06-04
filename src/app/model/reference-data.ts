export class ReferenceData {
    private _referenceTypeId: number;	
    private _referenceDataGroup: number;
    private _referenceDataType: string;	
    private _referenceKey: string;	
    private _referenceValue: string;
    
    constructor(
         referenceTypeId: number,	
         referenceDataGroup: number,	
         referenceDataType: string,	
         referenceKey: string,	
         referenceValue: string
    ) {
        this._referenceTypeId = referenceTypeId;	
        this._referenceDataGroup = referenceDataGroup;	
        this._referenceDataType = referenceDataType;	
        this._referenceKey = referenceKey;	
        this._referenceValue = referenceValue;
    }

    get referenceTypeId () { return this._referenceTypeId;}	
    get referenceDataGroup () { return this._referenceDataGroup;}	
    get referenceDataType () { return this._referenceDataType;}	
    get referenceKey () { return this._referenceKey;}	
    get referenceValue () { return this._referenceValue;}
}
