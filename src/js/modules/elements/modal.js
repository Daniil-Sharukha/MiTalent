function toggleModal() {
    setTimeout(() => {
        const homepageNewsLinks = document.querySelectorAll('.homepage__news__item-link'),
              clientsNewsLinks = document.querySelectorAll('.news__preview-item'),
              newsLink = document.querySelectorAll('.news__item'),
              homepageBtn = document.querySelector('.homepage__promo__btn'),
              modal = document.querySelector('.modal');
        let profileLinks = document.querySelectorAll('.table__item-link');

        function modalOpen() {

            function addModalActive(link) {
                link.addEventListener('click', (event) => {
                    event.preventDefault();
                    modal.classList.add('modal-active');
                    document.body.style.overflow = 'hidden';
                });
            }

            document.addEventListener('click', function(e) {
                if (e.target.className == 'table__tab' || 'table__tab table__tab-active') {
                    setTimeout(() => {
                        profileLinks = document.querySelectorAll('.table__item-link');
                        profileLinks.forEach(link => {
                            addModalActive(link);
                        });
                    }, 1000);     
                }
            });

            profileLinks.forEach(link => {
                addModalActive(link);
            });

            homepageNewsLinks.forEach(link => {
                addModalActive(link);
            });

            clientsNewsLinks.forEach(link => {
                addModalActive(link);
            });

            newsLink.forEach(link => {
                addModalActive(link);
            });

            if(homepageBtn) {
                homepageBtn.addEventListener('click', (event) => {
                event.preventDefault();
                modal.classList.add('modal-active');
                document.body.style.overflow = 'hidden';
                });
            }
        }

        function modalClose() {
            const modalExit = document.querySelector('.modal__close'),
                  modalBtn = document.querySelector('.modal__btn');
                
            modalExit.addEventListener('click', () => {
                modal.classList.remove('modal-active');
                document.body.style.overflow = '';
            });
    
            modalBtn.addEventListener('click', () => {
                modal.classList.remove('modal-active');
                document.body.style.overflow = '';
            });

            document.addEventListener('keydown', (e) => {
                if(e.code === 'Escape') {
                    modal.classList.remove('modal-active');
                document.body.style.overflow = '';
                }
            });
        }

        modalOpen();
        modalClose();
    }, 1000);

    

    
}

export default toggleModal;