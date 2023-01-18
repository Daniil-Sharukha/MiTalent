import { getResourse } from "../../services/services";
import homepageTableItem from "../classes/tableItem";
import homepageTable from "./homepageTable";



function sortingTableItems() {
    const sortingTabs = document.querySelectorAll('.homepage__table__tab');

    sortingTabs.forEach(tab =>
        tab.addEventListener('click', (event) => {
            const tableItem = document.querySelectorAll('.homepage__table__item');
            
            if(event.target.classList.contains('homepage__table__tab-active')) {
                sortingTabs.forEach(tab => tab.classList.remove('homepage__table__tab-active'));
                tableItem.forEach(item => {
                    item.remove();
                });
                homepageTable();
            } else {
                sortingTabs.forEach(tab => tab.classList.remove('homepage__table__tab-active'));
                event.target.classList.add('homepage__table__tab-active');

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
                        new homepageTableItem(img1, name, profession, link, ".homepage__table__wrapper", key).render();
                    });
                                    
                });
            }

            


        })
    );
}



export default sortingTableItems;