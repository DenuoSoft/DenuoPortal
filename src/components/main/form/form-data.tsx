import { title } from "process"

export const label = [
    {id: 1, name: 'Partner'},
    {id: 2, name: 'Fee earner with conduct'},
    {id: 3, name: 'Client'}
]
export const currency = ['USD', 'EUR', 'RUR', 'AED']
export const dnentity = ['Moscow', 'St. Petersburg', 'Dubai', 'Tbilisi', 'Tashkent']

export const Data = {
    label: label,
    currency: currency,
    dnentity: dnentity,
    
}
export const textData = [
    {
        id: 1,
        title: 'Non-financial client intake criteria',
        questions: {
            one: 'Does this client place any restrictions on work the firm may perform for other clients (eg, restricting work, or certain type of work, for specified competitors, any other restrictions)?',
            two: 'Is this client or its beneficiary a politically exposed person?'
        }
        
    },
    {
        id: 2,
        title: 'Matter intake criteria',
        questions: {
            one: 'Is the client or its beneficiary included in any Russian, US, EU, UK or other sanction lists?',
            two: 'Are you aware of any legal conflict which would result from taking on this new client or matter?',
            three: 'Do any of the “unfriendly countries” or their nationals (persons or entities) have any involvement with the client or matter?',
            four: 'Is the client or matter likely to generate significant adverse publicity for the firm?',
            five: 'Is the client or matter likely to generate significant adverse publicity for the solicitors?',
            six: 'Does this matter involve acting for a potential bidder or financing party in a competitive situation, such as an auction or tender process where there may be more than one party bidding for the same asset or objective?'
        } 
    },
    ] 

    
    
    






















