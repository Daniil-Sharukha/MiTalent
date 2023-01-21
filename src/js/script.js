import offcanvasMenu from "./modules/elements/offcanvasMenu";
import homepageTable from "./modules/homepage/homepageTable";
import profileSlider from "./modules/homepage/profileSlider";
import sortingTableItems from './modules/homepage/sortingTableTabs';
import clientsSlider from "./modules/clients/clientsSlider";


// import animationDelay from "./modules/elements/animationDelay";
// import homepageTableItem from "./modules/classes/tableItem";



window.addEventListener('DOMContentLoaded', function() {
    offcanvasMenu();
    profileSlider();
    homepageTable();
    sortingTableItems();
    clientsSlider();
});