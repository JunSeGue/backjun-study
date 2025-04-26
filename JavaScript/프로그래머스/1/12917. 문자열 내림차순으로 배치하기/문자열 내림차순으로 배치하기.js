function solution(s) {
    return s.split('')
            .sort((a, b) => {
                const isUpperA = a.toUpperCase() === a;
                const isUpperB = b.toUpperCase() === b;

                if (isUpperA && !isUpperB) return 1; 
                if (!isUpperA && isUpperB) return -1;  
                return b.localeCompare(a); 
            })
            .join('');
}
