import {getResourse} from "../../services/services";
import homepageTableItem from "../classes/tableItem";
import animationDelay from "../elements/animationDelay";

function homepageTable() {
    if (document.querySelector('.table__wrapper')) {
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
                data.forEach(({
                    img1,
                    name,
                    profession,
                    link
                }) => {
                    new homepageTableItem(img1, name, profession, link, ".table__wrapper").render();
                    animationDelay('.table__item');
                });
            });
    }
}

export default homepageTable;