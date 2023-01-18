import { getResourse } from "../../services/services";
import homepageTableItem from "../classes/tableItem";

function homepageTable() {
    //get data from database
    getResourse('http://localhost:8000/clients')
    .then(data => {
        // randomize data
        function shuffle(data) {
            for (let i = data.length - 1; i > 0; i--) {
                const a = Math.floor(Math.random() * (i + 1));
                [data[i], data[a]] = [data[a], data[i]];
            }
        }
        shuffle(data);
        //create table item
        data.length = 8;
        data.forEach(({img1, name, profession, link}) => {
            new homepageTableItem(img1, name, profession, link, ".homepage__table__wrapper").render();
        });
    });
    
}

export default homepageTable;