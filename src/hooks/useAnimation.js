export const useAnimation = () => {
    function handleAccordion() {
        const arrcordions = document.querySelectorAll('.my-collapse');
        arrcordions.forEach((accordion) => {
            accordion.addEventListener('click', function(e) {
                console.log('ass')
                const parent = e.target.closest('.my-collapse');
                if (parent) {
                    const content = parent.querySelector('.content-container');
                    if (parent.classList.contains('expanded')) { 
                        parent.classList.remove('expanded');
                        content.style.maxHeight = '0px';
                    } else {
                        arrcordions.forEach((collapse, i) => {
                            collapse.classList.remove('expanded');
                            collapse.querySelector('.content-container').style.maxHeight = '0px';
                        });
                        parent.classList.add('expanded');
                        content.style.maxHeight = content.scrollHeight + 'px';   
                    }
                }
            });
        });
    }
    return { handleAccordion };
}
