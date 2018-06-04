import { Client } from './client';
export class PsySession {
    constructor(
    private sessionId: string,	
    private clientId: string,	 
    private client : Client,
    private sessionDate: string,	
    private followupDate: string,	
    private impression: string,	
    private feedback: string
    ) {}
}
