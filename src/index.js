module.exports = function check(str, bracketsConfig) {
    if(str.length % 2 !== 0){
        return false;
    }
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < bracketsConfig.length; j++){
            if((str[i] === bracketsConfig[j][1]) && (str[i - 1] === bracketsConfig[j][0])){
                str = str.slice(0, i - 1) + str.slice(i + 1, str.length);
                i -= i;
            }
        }
    }
    return str.length === 0;
}