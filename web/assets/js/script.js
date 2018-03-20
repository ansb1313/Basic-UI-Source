$(document).ready(function() {


    /**
     *  UI 스크립트 init
     */



    //project.init();

});




var project = {
    init : function () {

    },

    //spyScroll
    getToTarget: function () {
        var navLink = $('.ank'),
            flexible = -100;
        navLink.on('click', function () {
            var target = $(this.hash);
            moveScroll(target, flexible);

            function moveScroll(tg, flex) {
                var tgOft = $(tg).offset().top,
                    speed = 1000;
                $('html,body').stop().animate({scrollTop: tgOft + flex}, speed);
            }
        });
    },

    // 서비스 탭 컨텐츠
    serviceTap : function () {
        var navLi = $('section.our-service nav li');
        navLi.on('click', function () {
            var self = $(this),
                dataObj = self.data('obj');
            self.addClass('is-active').siblings().removeClass('is-active');
            $(dataObj).show().siblings().hide();

        });
        navLi.first().trigger('click')

    },

    // 검색바 토글
    navSearch : function () {
        var btnSearch = $('header .btn-search'),
            searchDrawer = $('#search-drawer'),
            searchInput = searchDrawer.find('input'),
            searching = searchDrawer.find('.searching'),
            searchReset = searchDrawer.find('.search-reset');

        btnSearch.on('click',function (){
            var self = $(this);
            self.toggleClass('is-open');
            searchDrawer.toggle().find('input').focus();
            searchReset.click(function () {
                searchInput.html('').focus();
            })
        });

    },

    // 스크롤에 따른 클래스 추가
    getScroll : function (point, el, classname) {
        $(window).scroll(function () {
            var sct = $(window).scrollTop();

            if( sct > point ){
                $(el).addClass(classname);
            } else {
                $(el).removeClass(classname);
            }
        })
    },

    // 사이드 메뉴 스크립트
    sideNav :  function () {
        var sidenavOpen = $('header#header .btn-sideNav');
        var btnClose = $('.sideNav .btn-close, .site-screen');

        sidenavOpen.click(function () {
            $('html').addClass('sideNav-open');
        })
        btnClose.click(function () {
            slide.sidenavReset();
        });

        var $html = $("html"),
            $gnb = $("#type-1 .gnb"),
            $gnbLst = $gnb.find(".nav-item"),
            $gnbLink = $gnbLst.find('.nav-link'),
            $dropdown = $('#type-1 .dropdown');

        $gnbLink.click(function(e){
            var self  = $(this);
            function dropMenu(){
                if (self.next($dropdown).hasClass('active')) {
                    self.removeClass("active").next($dropdown).stop().removeClass('active').slideUp(200);
                } else {
                    $gnblst.find($dropdown).removeClass('active').slideUp(200);
                    $gnbLink.removeClass("active");
                    self.addClass("active").next($dropdown).stop().addClass('active').slideDown(200);
                }
            }
            if(self.hasClass('hasDropMenu')){
                e.preventDefault();
                dropMenu();
            } else {
                dropMenu();
            }
        })
    },


    // modal item
    modalItem : function () {
        var popupShow = $('.modal-nav'),
            popupHide = $('.popup-screen, .btn-modal-cancel, .btn-modal-confirm');

        popupShow.on('click',function () {
            var self = $(this),
                modalData = self.data('modal'),
                obj = $('.popup-screen ,' + modalData);

            obj.show();
        });
        popupHide.on('click', function () {
            var obj = $('.popup-screen, .modal-item');

            obj.hide();
        });
    },


    evalGrade : function () {
        var obj = $('.eval-grade i');

        obj.on('click', function () {
            var self = $(this),
                gradeData = self.data('grade');

            $('.eval-grade > div').attr('class','').addClass(gradeData);
        })
    },


    // tabNav
    tabNav : function () {
        var tabNav = $('#tab-nav ul li');

        tabNav.on('click', function () {
            var self = $(this),
                dataNav = self.data('nav');

            self.addClass('is-active').siblings('li').removeClass('is-active')

            $('#' + dataNav).show().siblings('.content').hide();

        }).filter(':first').trigger('click');
    },


    // input text clear
    inputClear : function () {
        $('.input-group .btn-clear').on('click' ,function () {
            $(this).siblings('input').attr('value','').val('').focus();
            $(this).closest('.input-group').addClass('empty');
        });

        var obj = $('.btn-clear').siblings('input');
        obj.on('change, keyup input ',function () {
            var inputVal = $(this).val();

            if(inputVal == ''){
                $(this).closest('.input-group').addClass('empty')
            } else {
                $(this).closest('.input-group').removeClass('empty')
            }
        });
    },



};


var lib = {
    init : function () {
        lib.slider.init();
        lib.dotdotdot();
    },

    // 사이트 슬라이드
    slider : {
        init : function () {
            lib.slider.mainBanner();
        },

        mainBanner : function () {
            $('section.banner-main .slider').slick({
                arrows: false
            });
        }

    },
    dotdotdot : function () {
        $('.dotdotdot').dotdotdot();
    },

    handlePopup: function () {
        $('.btn-popup').on('click', function () {
            var self = $(this),
                popupContent = self.data('popup'),
                popupContent = self.attr('data-popup');


            $(popupContent).show();
        })
    }





};




