let brandList = document.querySelector('.show');
        let sectionMore = document.querySelector('.section__link');
        let buttonFirst = document.querySelector('.first');
        let buttonSecond = document.querySelector('.second');
        
        buttonFirst.addEventListener('click', function(){
            buttonFirst.classList.toggle('hidden'); 
            buttonSecond.classList.toggle('hidden'); 
            brandList.classList.toggle('show');                       
        });
        buttonSecond.addEventListener('click', function(){
            buttonFirst.classList.toggle('hidden'); 
            buttonSecond.classList.toggle('hidden');   
            brandList.classList.toggle('show');                     
        });

        