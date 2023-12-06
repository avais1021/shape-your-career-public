// -- -------whyUltratech js------------------------------------------------------------r-- 

const whyUlt_menu = document.querySelectorAll('.whyUlt_menu');


whyUlt_menu.forEach((menu)=>{
    menu.addEventListener('click' , ()=>{
        var menuDataName = menu.dataset.wumenu;
        console.log('data name',menuDataName); 
        var box = document.querySelector('#'+ menuDataName);
        // console.log('box' , box);

        const whAllmenu = document.querySelectorAll('.whyUlt_menu');
        whAllmenu.forEach((allmenu)=>{
            allmenu.classList.remove('whmenu_active')
        })

        const whyUltratech__box = document.querySelectorAll('.whyUltratech__box');
        whyUltratech__box.forEach((allbox)=>{
            allbox.style.display = 'none';
        })


        box.style.display= 'block';
        menu.classList.add('whmenu_active');
    })
})

document.querySelector('.whyUlt_menu').click();
