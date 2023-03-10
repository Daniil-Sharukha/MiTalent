class homepageTableItem{
    constructor(img1, name, profession, link, parentSelector, key, ...classes) {
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
            this.classes = "table__item";
            element.classList.add(this.classes);
        } else {
            this.classes.forEach(className => element.classList.add(className));
        }

        element.innerHTML = `
            <a href=${this.link} class="table__item-link">
                <img src=${this.img} alt=${this.alt}>
                <div class="table__item-profile">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
                </div>
                <div class="table__item-name">${this.name}</div>
                <div class="table__item-job">${this.profession}</div>
            </a>
        `;
        this.parent.append(element);
    }
}

export default homepageTableItem;