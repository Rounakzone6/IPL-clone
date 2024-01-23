var slides_1=document.querySelectorAll('.slide_1');
        var btns_1=document.querySelectorAll('.btn_1')
        let currentSlide_1=1;
        var manualNav_1=function(manual_1){
            slides_1.forEach((slide_1)=>{
                slide_1.classList.remove('active_1');
                btns_1.forEach((btn_1)=>{
                    btn_1.classList.remove('active_1');
                });
            });
            slides_1[manual_1].classList.add(('active_1'));
            btns_1[manual_1].classList.add(('active_1'));
        }
        btns_1.forEach((btn_1,i)=>{
            btn_1.addEventListener("click",()=>{
                manualNav_1(i);
                currentSlide_1=i;
            });
        });

        var repeat_1=function(activeClass){
            let active_1=document.getElementsByClassName('active_1');
            let i=1;
            var repeater_1=()=>{
                setTimeout(function(){
                    [...active_1].forEach((activeSlide_1)=>{
                        activeSlide_1.classList.remove('active_1');
                    });
                    slides_1[i].classList.add('active_1');
                    btns_1[i].classList.add('active_1');
                    i++;
                    if(slides_1.length==i){
                        i=0;
                    }
                    if(i>=slides_1.length){
                        return;
                    }
                    repeater_1();
                },10000);
            }
            repeater_1();
        }
        repeat_1();
var slides_2=document.querySelectorAll('.slide_2');
        var btns_2=document.querySelectorAll('.btn_2')
        let currentSlide_2=1;
        var manualNav_2=function(manual_2){
            slides_2.forEach((slide_2)=>{
                slide_2.classList.remove('active_2');
                btns.forEach((btn_2)=>{
                    btn_2.classList.remove('active_2');
                });
            });
            slides_2[manual_2].classList.add(('active_2'));
            btns_2[manual_2].classList.add(('active_2'));
        }
        btns_2.forEach((btn_2,j)=>{
            btn_2.addEventListener("click",()=>{
                manualNav_2(j);
                currentSlide_2=j;
            });
        });

        var repeat_2=function(activeClass){
            let active_2=document.getElementsByClassName('active_2');
            let j=1;
            var repeater_2=()=>{
                setTimeout(function(){
                    [...active_2].forEach((activeSlide_2)=>{
                        activeSlide_2.classList.remove('active_2');
                    });
                    slides_2[j].classList.add('active_2');
                    btns_2[j].classList.add('active_2');
                    j++;
                    if(slides_2.length==j){
                        j=0;
                    }
                    if(j>=slides_2.length){
                        return;
                    }
                    repeater_2();
                },10000);
            }
            repeater_2();
        }
        repeat_2();

        var slides=document.querySelectorAll('.slide');
        var btns=document.querySelectorAll('.btn')
        let currentSlide=1;
        var manualNav=function(manual){
            slides.forEach((slide)=>{
                slide.classList.remove('active');
                btns.forEach((btn)=>{
                    btn.classList.remove('active');
                });
            });
            slides[manual].classList.add(('active'));
            btns[manual].classList.add(('active'));
        }
        btns.forEach((btn,i)=>{
            btn.addEventListener("click",()=>{
                manualNav(i);
                currentSlide=i;
            });
        });

        var repeat=function(activeClass){
            let active=document.getElementsByClassName('active');
            let i=1;
            var repeater=()=>{
                setTimeout(function(){
                    [...active].forEach((activeSlide)=>{
                        activeSlide.classList.remove('active');
                    });
                    slides[i].classList.add('active');
                    btns[i].classList.add('active');
                    i++;
                    if(slides.length==i){
                        i=0;
                    }
                    if(i>=slides.length){
                        return;
                    }
                    repeater();
                },10000);
            }
            repeater();
        }
        repeat();