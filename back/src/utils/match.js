//todo 칵테일 재료 디비에서 가져오기
const fs = require("fs");
const data = fs.readFileSync("cocktail_ingre_category.json", { encoding: "utf8", flag: "r" });

const t = JSON.parse(data);
// console.log(t);

const intersection = (a, b) => {
    return new Set([...a].filter(x => b.has(x)));
}

const matchCocktail = (choice) => {
    try {
        if (!Array.isArray(choice)) {
            throw new Error("값은 반드시 문자열로 전달하셔야 합니다.");
        }
        
        let setArray = []
        for(let i = 0; i < choice.length; i++) {
            const temp = new Set(t[choice[i]]);
            setArray.push(temp);
        }

        let result = [...setArray[0]];
        
        for(let j = 1; j < setArray.length; j++) {
            result = intersection(result, setArray[j]);
        }
        
        return [...result];        

    } catch (e) {
        return e.errorMessage;
    }
    
}

console.log(matchCocktail(["gin", "lemon juice"]));