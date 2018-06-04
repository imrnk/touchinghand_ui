export class ClientMse {
	private _clientMseId: number;
	private _clientId: number;
	private _appearance: string;
	private _otherAppearance: string;
	private _speech: string;
	private _otherSpeech: string;
	private _eyeContact: string;
	private _otherEyeContact: string;
	private _motorActivity: string;
	private _otherMotorActivity: string;
	private _affect: string;
	private _otherAffect: string;
	private _mood: string;
	private _otherMood: string;
	private _orientationImpairment: string;
	private _memoryImpairment: string;
	private _otherMemoryImpairment: string;
	private _attention: string;
	private _cognitionComments: string;
	private _hallucinations: string;
	private _otherPerceptions: string;
	private _perceptionComments: string;
	private _suicidality: string;
	private _homicidality: string;
	private _delusions: string;
	private _otherDelusions: string;
	private _thoughtComments: string;
	private _behavior: string;
	private _otherBehavior: string;
	private _behaviorComments: string;
	private _insight: string;
	private _otherInsight: string;
	private _judgement: string;
	private _otherJudgement: string;

	constructor(
		clientMseId: number,
		clientId: number,
		appearance: string,
		otherAppearance: string,
		speech: string,
		otherSpeech: string,
		eyeContact: string,
		otherEyeContact: string,
		motorActivity: string,
		otherMotorActivity: string,
		affect: string,
		otherAffect: string,
		mood: string,
		otherMood: string,
		orientationImpairment: string,
		memoryImpairment: string,
		otherMemoryImpairment: string,
		attention: string,
		cognitionComments: string,
		hallucinations: string,
		otherPerceptions: string,
		perceptionComments: string,
		suicidality: string,
		homicidality: string,
		delusions: string,
		otherDelusions: string,
		thoughtComments: string,
		behavior: string,
		otherBehavior: string,
		behaviorComments: string,
		insight: string,
		otherInsight: string,
		judgement: string,
		otherJudgement: string) {
		this._clientMseId = clientMseId;
		this._clientId = clientId;
		this._appearance = appearance;
		this._otherAppearance = otherAppearance;
		this._speech = speech;
		this._otherSpeech = otherSpeech;
		this._eyeContact = eyeContact;
		this._otherEyeContact = otherEyeContact;
		this._motorActivity = motorActivity;
		this._otherMotorActivity = otherMotorActivity;
		this._affect = affect;
		this._otherAffect = otherAffect;
		this._mood = mood;
		this._otherMood = otherMood;
		this._orientationImpairment = orientationImpairment;
		this._memoryImpairment = memoryImpairment;
		this._otherMemoryImpairment = otherMemoryImpairment;
		this._attention = attention;
		this._cognitionComments = cognitionComments;
		this._hallucinations = hallucinations;
		this._otherPerceptions = otherPerceptions;
		this._perceptionComments = perceptionComments;
		this._suicidality = suicidality;
		this._homicidality = homicidality;
		this._delusions = delusions;
		this._otherDelusions = otherDelusions;
		this._thoughtComments = thoughtComments;
		this._behavior = behavior;
		this._otherBehavior = otherBehavior;
		this._behaviorComments = behaviorComments;
		this._insight = insight;
		this._otherInsight = otherInsight;
		this._judgement = judgement;
		this._otherJudgement = otherJudgement;
	}

get clientMseId () { return this._clientMseId;}
get clientId () { return this._clientId;}
get appearance () { return this._appearance;}
get otherAppearance () { return this._otherAppearance;}
get speech () { return this._speech;}
get otherSpeech () { return this._otherSpeech;}
get eyeContact () { return this._eyeContact;}
get otherEyeContact () { return this._otherEyeContact;}
get motorActivity () { return this._motorActivity;}
get otherMotorActivity () { return this._otherMotorActivity;}
get affect () { return this._affect;}
get otherAffect () { return this._otherAffect;}
get mood () { return this._mood;}
get otherMood () { return this._otherMood;}
get orientationImpairment () { return this._orientationImpairment;}
get memoryImpairment () { return this._memoryImpairment;}
get otherMemoryImpairment () { return this._otherMemoryImpairment;}
get attention () { return this._attention;}
get cognitionComments () { return this._cognitionComments;}
get hallucinations () { return this._hallucinations;}
get otherPerceptions () { return this._otherPerceptions;}
get perceptionComments () { return this._perceptionComments;}
get suicidality () { return this._suicidality;}
get homicidality () { return this._homicidality;}
get delusions () { return this._delusions;}
get otherDelusions () { return this._otherDelusions;}
get thoughtComments () { return this._thoughtComments;}
get behavior () { return this._behavior;}
get otherBehavior () { return this._otherBehavior;}
get behaviorComments () { return this._behaviorComments;}
get insight () { return this._insight;}
get otherInsight () { return this._otherInsight;}
get judgement () { return this._judgement;}
get otherJudgement () { return this._otherJudgement;}

}
