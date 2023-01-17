import { getResourse } from "../../services/services";

function sortingTableItems() {
    const sortingTabs = document.querySelectorAll('.homepage__table__tab');
    sortingTabs.forEach(tab =>
        tab.addEventListener('click', (event) => {
            if(event.target.classList.contains('homepage__table__tab-active')) {
                sortingTabs.forEach(tab => tab.classList.remove('homepage__table__tab-active'));
            } else {
                sortingTabs.forEach(tab => tab.classList.remove('homepage__table__tab-active'));
                event.target.classList.add('homepage__table__tab-active');
            }

            /////////////////////// 

            class homepageTableItem{
                constructor(img1, name, profession, key, link, parentSelector, ...classes) {
                    this.img = img1;
                    this.alt = name;
                    this.name = name;
                    this.profession = profession;
                    this.link = link;
        
                    this.key = key;
                    this.classes = classes;
                    this.parent = document.querySelector(parentSelector);
                }
        
                render() {
                    const element = document.createElement('div');
        
                    if (this.classes.length === 0) {
                        this.classes = "homepage__table__item";
                        element.classList.add(this.classes);
                    } else {
                        this.classes.forEach(className => element.classList.add(className));
                    }
        
                    element.innerHTML = `
                        <a href=${this.link} class="homepage__table__item-link">
                            <img src=${this.img} alt=${this.alt}>
                            <div class="homepage__table__item-profile">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
                            </div>
                            <div class="homepage__table__item-name">${this.name}</div>
                            <div class="homepage__table__item-job">${this.profession}</div>
                        </a>
                    `;
                    this.parent.append(element);
                }
            }

            const tableItem = document.querySelectorAll('.homepage__table__item');
            
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
                    new homepageTableItem(img1, name, key, profession, link, ".homepage__table__wrapper").render();
                });
                                
            });







        })
    );

    

   
    
    
    
    // addEventListener('click', () => {
    //     sortingTabs[i].classList.toggle('homepage__table__tab-active');
    // });
}



export default sortingTableItems;