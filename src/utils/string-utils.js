/**
 * @class 
 * @description Contains all string utility functions
 */
class StringUtils {

    /**
     * @description Converts given string to sentence case string 
     * @param { string } str Strings to convert
     * @return { String } return sentencecase string ex: "sample string" -> "Sample string"
     */
    static sentenceCase= (str)=> {
        if(str)
            return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
        return str;
    }

    /**
     * @description Converts given string to capitilize case string 
     * @param { string } str Strings to convert
     * @return { String } return sentencecase string ex: "sample string" -> "Sample string"
     */
    static initCap = StringUtils.sentenceCase;

    /**
     * @description Converts given string to pascal case string
     * @param { string } str String to convert
     * @return { string } return pascal case string ex: "sample string" -> "SampleString"
     */
    static pascalCase= (str)=> {
        if(str){
            return str.split(" ")
                      .map(str=> StringUtils.initCap(str))
                      .join("");
        }   
        return str;       
    }

     /**
     * @description Converts given string to camel case string
     * @param { string } str String to convert
     * @return { string } return pascal case string ex: "sample string" -> "sampleString"
     */
    static camelCase= (str)=> {     
        if(str){       
            let firstSubStr = str.split(" ")[0];
            return  firstSubStr + StringUtils.pascalCase(str.replace(firstSubStr, ""));
        }
        return str;
    }
}

export default StringUtils;