export class ReferenceData {
    private referenceTypeId: number;	
    private referenceDataGroup: number;
    private referenceDataType: string;	
    private referenceKey: string;	
    private referenceValue: string;
    
    constructor(
         _referenceTypeId: number,	
         _referenceDataGroup: number,	
         _referenceDataType: string,	
         _referenceKey: string,	
         _referenceValue: string
    ) {
        this.referenceTypeId = _referenceTypeId;	
        this.referenceDataGroup = _referenceDataGroup;	
        this.referenceDataType = _referenceDataType;	
        this.referenceKey = _referenceKey;	
        this.referenceValue = _referenceValue;
    }

    get _referenceTypeId () { return this.referenceTypeId;}	
    get _referenceDataGroup () { return this.referenceDataGroup;}	
    get _referenceDataType () { return this.referenceDataType;}	
    get _referenceKey () { return this.referenceKey;}	
    get _referenceValue () { return this.referenceValue;}
}
