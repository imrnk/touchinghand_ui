export class TreatmentData {
   constructor( 
        private treatmentId: number,	
        private sessionId: string,	
        private clientId: string,		
        private physicalComp: string,	
        private mentalComp: string,	
        private onsetDate: string,	
        private duration: string,	
        private degree: string,	
        private therapyApplied: string,	
        private casehistory: string,	
        private psyEvaluation: string,	
        private labTesting: string,	
        private diagnosis: string,	
        private diffDiagnosis: string,	
        private formulation: string,	
        private clientDocLink: string) {}
}
