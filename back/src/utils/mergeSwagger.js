const fs = require("fs");

const dir = "../modules"

/**
 * 디렉토리 안 원하는 타입의 파일을 검색해 문자열로 리턴
 * @param {디렉토리 이름} dir 
 * @param {검색할 파일 형식} fileType 
 */
const fileList = (dir, fileType = "json") => {
    let result = []
    const files = fs.readdirSync(dir);
    files.forEach((v, i) => {
        const suffix = v.substr(v.length - 5, v.length);
        if (suffix === `.${fileType}`){
            result.push(v);
        }
    })

    return result;
}

/**
 * 분리된 스웨거 파일을 하나로 합친다.
 * @param {파일 이름 리스트} fileList 
 * @param {템플릿 파일 이름} tempFile 
 * @param {파일이 있는 디렉토리} dir
 */
const mergeSwagger = (fileList, dir, tempFile = "swagger_template", ) => {

    const merge = JSON.parse(fs.readFileSync(dir + '/' + tempFile, 'utf-8'));
    
    let path = new Set();
    let def = new Set();
    fileList.forEach((v, i) => {
        if (v !== tempFile) {
            const temp = JSON.parse(fs.readFileSync(dir + '/' + v, 'utf-8'));
            Object.entries(temp.paths).forEach((v, i) => {
                path.add(v)
            })
            
            Object.entries(temp.definitions).forEach((v, i) => {
                def.add(v)
            })

        }
    })

    path.forEach((r) => {
        console.log(r[0])
        merge.paths[r[0]] = r[1]
    })

    def.forEach((r) => {
        merge.definitions[r[0]] = r[1]
    })

    return merge
}

/**
 * 
 * @param {파일에 작성할 json 데이터} jsonData 
 * @param {경로} dir 
 * @param {저장될 파일 이름} name 
 */
const makeJsonFile = (jsonData, dir, name="swagger.json") => {
    const data = JSON.stringify(jsonData);
    
    fs.writeFileSync(`${dir}/${name}`, data);
}

makeJsonFile(mergeSwagger(fileList(dir), dir), dir);
