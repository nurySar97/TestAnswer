$(function(){

    // Slider
    const innerBox1 = $('.about__inner--1')
    const innerBox2 = $('.about__inner--2')
    const innerBox3 = $('.about__inner--3')

    let key1 = true,key2 = true,key3 = true;

    $('.services__items--neurology').on('click',function(){
        $('.services__triangle--1').css('display','block')
        $('.services__triangle--2').css('display','none')
        $('.services__triangle--3').css('display','none')

        if(key1){
            key1 = false,key2 = true,key3 = true
            innerBox1.css({"display":"flex","opacity":1})
            innerBox2.css({"display":"none","opacity":0})
            innerBox3.css({"display":"none","opacity":0})

            let opacityValue = 0

            let interval = setInterval(()=>{
                innerBox1.css(`transform`, `scale(${opacityValue})`)
                opacityValue = opacityValue + 0.01

                if(Math.floor(opacityValue) === 1) {
                    clearInterval(interval)
                    opacityValue = 0
                }
            },5)
        }
    })

    $('.services__items--massage').on('click',function(){
        $('.services__triangle--1').css('display','none')
        $('.services__triangle--2').css('display','block')
        $('.services__triangle--3').css('display','none')
        
        if(key2) {
            innerBox1.css({"display":"none","opacity":0})
            innerBox2.css({"display":"flex","opacity":1})
            innerBox3.css({"display":"none","opacity":0})
    
            key2 = false,key1 = true,key3 = true
    
            let opacityValue = 0
    
            let interval = setInterval(()=>{
                innerBox2.css(`transform`, `scale(${opacityValue})`)
                opacityValue = opacityValue + 0.01
    
                if(Math.floor(opacityValue) === 1) {
                    clearInterval(interval)
                    opacityValue = 0
                }
            },5)
        }
    })

    $('.services__items--rheumatology').on('click',function(){
        $('.services__triangle--1').css('display','none')
        $('.services__triangle--2').css('display','none')
        $('.services__triangle--3').css('display','block')

        if(key3) {
            innerBox1.css({"display":"none","opacity":0})
            innerBox2.css({"display":"none","opacity":0})
            innerBox3.css({"display":"flex","opacity":1})

            key3 = false,key2 = true,key1 = true

            let opacityValue = 0

            let interval = setInterval(()=>{
                innerBox3.css(`transform`, `scale(${opacityValue})`)
                opacityValue = opacityValue + 0.01

                if(Math.floor(opacityValue) === 1) {
                    clearInterval(interval)
                    opacityValue = 0
                }
            },5)
        }
    })


    // Burger Menu

    $('.nav__burger').on('click',function(){
        $('.nav__burger-items').toggleClass('openHelp')
        $('.nav__burger-close').toggleClass('closeHelp')
        $('.header__nav').toggleClass('navHelp')
    })


    // let scrollOffset = $(window).scrollTop();

    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;
            
        $("#nav a").removeClass("active");
        $this.addClass("active");

        if(blockId == '#main'){
            $("html, body").animate({
                scrollTop:  0
            }, 1000);
        }else if(blockId == '#count') {
            $("html, body").animate({
                scrollTop: 200
            }, 1000);
        }else {
            $("html, body").animate({
                scrollTop:  blockOffset-90
            }, 1000);
        }
    });

})