export class TreatmentData {

        treatmentId: number;
        sessionId: number;
        clientId: number;
        physicalComp: string;
        mentalComp: string;
        onsetDate: string;
        duration: string;
        degree: string;
        therapyApplied: string;
        casehistory: string;
        psyEvaluation: string;
        labTesting: string;
        diagnosis: string;
        diffDiagnosis: string;
        formulation: string;
        clientDocLink: string;

        constructor(
                _treatmentId: number,
                _sessionId: number,
                _clientId: number,
                _physicalComp: string,
                _mentalComp: string,
                _onsetDate: string,
                _duration: string,
                _degree: string,
                _therapyApplied: string,
                _casehistory: string,
                _psyEvaluation: string,
                _labTesting: string,
                _diagnosis: string,
                _diffDiagnosis: string,
                _formulation: string,
                _clientDocLink: string) {
                this.treatmentId = _treatmentId;
                this.sessionId = _sessionId;
                this.clientId = _clientId;
                this.physicalComp = _physicalComp;
                this.mentalComp = _mentalComp;
                this.onsetDate = _onsetDate;
                this.duration = _duration;
                this.degree = _degree;
                this.therapyApplied = _therapyApplied;
                this.casehistory = _casehistory;
                this.psyEvaluation = _psyEvaluation;
                this.labTesting = _labTesting;
                this.diagnosis = _diagnosis;
                this.diffDiagnosis = _diffDiagnosis;
                this.formulation = _formulation;
                this.clientDocLink = _clientDocLink;
        }

        get _treatmentId() { return this.treatmentId; }
        get _sessionId() { return this.sessionId; }
        get _clientId() { return this.clientId; }
        get _physicalComp() { return this.physicalComp; }
        get _mentalComp() { return this.mentalComp; }
        get _onsetDate() { return this.onsetDate; }
        get _duration() { return this.duration; }
        get _degree() { return this.degree; }
        get _therapyApplied() { return this.therapyApplied; }
        get _casehistory() { return this.casehistory; }
        get _psyEvaluation() { return this.psyEvaluation; }
        get _labTesting() { return this.labTesting; }
        get _diagnosis() { return this.diagnosis; }
        get _diffDiagnosis() { return this.diffDiagnosis; }
        get _formulation() { return this.formulation; }
        get _clientDocLink() { return this.clientDocLink; }
}
