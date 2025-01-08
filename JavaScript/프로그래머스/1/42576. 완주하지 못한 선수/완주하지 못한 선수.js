function solution(participant, completion) {
    let participantMap = new Map();
    
    for (const person of participant) 
        participantMap.set(person, (participantMap.get(person) || 0 ) +1 )
    
    for (const person of completion)
        participantMap.set(person, (participantMap.get(person) || 0 ) -1)
    
    for (const [key, value] of participantMap)
        if(value > 0) 
            return key
}