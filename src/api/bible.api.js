import axios from "axios";

export class BibleApi {
    static async fetchOneVerse (){
        return (await axios.post('https://api.ndml.fr/api/getverset', {source: 2})).data
    }

}