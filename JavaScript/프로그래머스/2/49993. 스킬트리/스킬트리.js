function solution(skill, skill_trees) {
    
    const skillSet = new Set(skill);
        
    return skill_trees
    .map(tree => [...tree].filter(char => skillSet.has(char)).join(""))
    .filter(filteredTree => skill.startsWith(filteredTree))
    .length;    
}