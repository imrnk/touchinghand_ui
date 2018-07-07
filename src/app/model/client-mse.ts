export class ClientMse {

	private clientMseId: number;
	private clientId: number;
	private appearance: string;
	private otherAppearance: string;
	private speech: string;
	private otherSpeech: string;
	private eyeContact: string;
	private otherEyeContact: string;
	private motorActivity: string;
	private otherMotorActivity: string;
	private affect: string;
	private otherAffect: string;
	private mood: string;
	private otherMood: string;
	private orientationImpairment: string;
	private memoryImpairment: string;
	private otherMemoryImpairment: string;
	private attention: string;
	private cognitionComments: string;
	private hallucinations: string;
	private otherPerceptions: string;
	private perceptionComments: string;
	private suicidality: string;
	private homicidality: string;
	private delusions: string;
	private otherDelusions: string;
	private thoughtComments: string;
	private behavior: string;
	private otherBehavior: string;
	private behaviorComments: string;
	private insight: string;
	private otherInsight: string;
	private judgement: string;
	private otherJudgement: string;

	constructor(
		_clientMseId: number,
		_clientId: number,
		_appearance: string,
		_otherAppearance: string,
		_speech: string,
		_otherSpeech: string,
		_eyeContact: string,
		_otherEyeContact: string,
		_motorActivity: string,
		_otherMotorActivity: string,
		_affect: string,
		_otherAffect: string,
		_mood: string,
		_otherMood: string,
		_orientationImpairment: string,
		_memoryImpairment: string,
		_otherMemoryImpairment: string,
		_attention: string,
		_cognitionComments: string,
		_hallucinations: string,
		_otherPerceptions: string,
		_perceptionComments: string,
		_suicidality: string,
		_homicidality: string,
		_delusions: string,
		_otherDelusions: string,
		_thoughtComments: string,
		_behavior: string,
		_otherBehavior: string,
		_behaviorComments: string,
		_insight: string,
		_otherInsight: string,
		_judgement: string,
		_otherJudgement: string) {
		this.clientMseId = _clientMseId;
		this.clientId = _clientId;
		this.appearance = _appearance;
		this.otherAppearance = _otherAppearance;
		this.speech = _speech;
		this.otherSpeech = _otherSpeech;
		this.eyeContact = _eyeContact;
		this.otherEyeContact = _otherEyeContact;
		this.motorActivity = _motorActivity;
		this.otherMotorActivity = _otherMotorActivity;
		this.affect = _affect;
		this.otherAffect = _otherAffect;
		this.mood = _mood;
		this.otherMood = _otherMood;
		this.orientationImpairment = _orientationImpairment;
		this.memoryImpairment = _memoryImpairment;
		this.otherMemoryImpairment = _otherMemoryImpairment;
		this.attention = _attention;
		this.cognitionComments = _cognitionComments;
		this.hallucinations = _hallucinations;
		this.otherPerceptions = _otherPerceptions;
		this.perceptionComments = _perceptionComments;
		this.suicidality = _suicidality;
		this.homicidality = _homicidality;
		this.delusions = _delusions;
		this.otherDelusions = _otherDelusions;
		this.thoughtComments = _thoughtComments;
		this.behavior = _behavior;
		this.otherBehavior = _otherBehavior;
		this.behaviorComments = _behaviorComments;
		this.insight = _insight;
		this.otherInsight = _otherInsight;
		this.judgement = _judgement;
		this.otherJudgement = _otherJudgement;
	}

	get _clientMseId() { return this.clientMseId; }
	get _clientId() { return this.clientId; }
	get _appearance() { return this.appearance; }
	get _otherAppearance() { return this.otherAppearance; }
	get _speech() { return this.speech; }
	get _otherSpeech() { return this.otherSpeech; }
	get _eyeContact() { return this.eyeContact; }
	get _otherEyeContact() { return this.otherEyeContact; }
	get _motorActivity() { return this.motorActivity; }
	get _otherMotorActivity() { return this.otherMotorActivity; }
	get _affect() { return this.affect; }
	get _otherAffect() { return this.otherAffect; }
	get _mood() { return this.mood; }
	get _otherMood() { return this.otherMood; }
	get _orientationImpairment() { return this.orientationImpairment; }
	get _memoryImpairment() { return this.memoryImpairment; }
	get _otherMemoryImpairment() { return this.otherMemoryImpairment; }
	get _attention() { return this.attention; }
	get _cognitionComments() { return this.cognitionComments; }
	get _hallucinations() { return this.hallucinations; }
	get _otherPerceptions() { return this.otherPerceptions; }
	get _perceptionComments() { return this.perceptionComments; }
	get _suicidality() { return this.suicidality; }
	get _homicidality() { return this.homicidality; }
	get _delusions() { return this.delusions; }
	get _otherDelusions() { return this.otherDelusions; }
	get _thoughtComments() { return this.thoughtComments; }
	get _behavior() { return this.behavior; }
	get _otherBehavior() { return this.otherBehavior; }
	get _behaviorComments() { return this.behaviorComments; }
	get _insight() { return this.insight; }
	get _otherInsight() { return this.otherInsight; }
	get _judgement() { return this.judgement; }
	get _otherJudgement() { return this.otherJudgement; }

}
