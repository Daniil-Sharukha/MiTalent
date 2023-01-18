import { getResourse } from "../../services/services";
import homepageTableItem from "../classes/tableItem";
import homepageTable from "./homepageTable";



function sortingTableItems() {
    const sortingTabs = document.querySelectorAll('.table__tab');

    sortingTabs.forEach(tab =>
        tab.addEventListener('click', (event) => {
            const tableItem = document.querySelectorAll('.table__item');
            
            if(event.target.classList.contains('table__tab-active')) {
                sortingTabs.forEach(tab => tab.classList.remove('table__tab-active'));
                tableItem.forEach(item => {
                    item.remove();
                });
                homepageTable();
            } else {
                sortingTabs.forEach(tab => tab.classList.remove('table__tab-active'));
                event.target.classList.add('table__tab-active');

                tableItem.forEach(item => {
                    item.remove();
                });
    
                getResourse('http://localhost:8000/clients')
                .then(data => {
                    let arr = [];
                    data.forEach(obj => {
                        if (event.target.innerText == obj.key) {
                            arr.push(obj);
                        }
                    });
    
                    arr.forEach(({img1, name, key, profession, link}) => {
                        new homepageTableItem(img1, name, profession, link, ".table__wrapper", key).render();
                    });
                                    
                });
            }

            


        })
    );
}



export default sortingTableItems;