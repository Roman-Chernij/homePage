/*
 * Custom scripts
 */
(function ($) {
    $('.header-slider').slick({
        infinite: false,
        dots: false,
    });
    $('.story__slider').slick({
        infinite: false,
        dots: true,
        arrows: false
    });
    $('.feedback__slider').slick({
        infinite: false,
        dots: true,
        arrows: false
    });
})(jQuery);


window.addEventListener( "DOMContentLoaded", function() {
    new MyScript();
});


function MyScript() {
    new MobiMenu();
    new HeaderSearch();
    new Skills();
    new Service();
    new Tabs();
    new Social();
    new InitMap();
}


function MobiMenu() {
    this.nav = document.querySelector('.nav');
    this.mobiBox =  this.nav.querySelector('.mobi__nav');
    this.mobiMenu = this.mobiBox.querySelector('.js-menu');
    this.mobiMenu.addEventListener("click", this.menuBlock.bind(this));
    this.mobiCancel = this.mobiBox.querySelector('.js-cancel');
    this.mobiCancel.addEventListener("click", this.menuNone.bind(this));
}

MobiMenu.prototype.menuBlock = function () {
    this.headerNav = this.nav.querySelector('.header-nav');
    this.mobiList =  this.mobiBox.querySelector('.mobi__list');
    this.mobiList.style.cssText += "transform: translateX(-32px);";
    this.headerNav.classList.add("header-nav_mod-visibility-block");
    this.headerNav.classList.remove("header-nav_mod-visibility-none");
};

MobiMenu.prototype.menuNone = function () {
    this.mobiList =  this.mobiBox.querySelector('.mobi__list');
    this.mobiList.style.cssText += "transform: translateX(0px);";
    this.headerNav = this.nav.querySelector('.header-nav');
    this.headerNav.classList.remove("header-nav_mod-visibility-block");
    this.headerNav.classList.add("header-nav_mod-visibility-none");
};


function HeaderSearch() {
    this.clickElemSearch = document.querySelector('.header-nav__elem_search-mod');
    this.clickElemSearch.addEventListener("click", this.visable.bind(this));
    this.searchBlockInput = document.querySelector('.search-block__input');
    this.searchBlockInput.addEventListener("blur", this.imputSubmit.bind(this));
}

HeaderSearch.prototype.visable = function () {
    this.HeaderSearchBlock = document.querySelector('.header-search');
    this.HeaderSearchBlock.classList.remove("header-search_display-none");
    this.HeaderSearchBlock.classList.add("header-search_true");
    this.headerSearchTrue = document.querySelector('.header-search_true');
    this.headerSearchTrue.addEventListener("animationend", this.animationTrue.bind(this));
};

HeaderSearch.prototype.animationTrue = function () {
    this.HeaderSearchBlock.classList.remove("header-search_display-none");
    this.HeaderSearchBlock.classList.remove("header-search_true");
    this.HeaderSearchBlock.classList.add("header-search_display-block");
};

HeaderSearch.prototype.imputSubmit = function () {
    this.HeaderSearchBlock.classList.remove("header-search_display-block");
    this.HeaderSearchBlock.classList.add("header-search_false");
    this.headerSearchFalse = document.querySelector('.header-search_false');
    this.headerSearchFalse.addEventListener("animationend", this.animationFalse.bind(this));
};

HeaderSearch.prototype.animationFalse = function () {
    this.HeaderSearchBlock.classList.remove("header-search_display-block");
    this.HeaderSearchBlock.classList.remove("header-search_false");
    this.HeaderSearchBlock.classList.add("header-search_display-none");
};


function Skills() {
    this.skillsBlock = document.querySelector('.skills');
    this.skillsElem = this.skillsBlock.querySelectorAll('.skills-list');
    this.lineProgress();
}

Skills.prototype.lineProgress = function () {

    for(var i = 0; i <  this.skillsElem.length; i++) {
        this.skillsName = this.skillsElem[i].querySelector('.skills-info__box__name').innerHTML;
        this.interest = this.skillsElem[i].querySelector('.skills-info_number-'+this.skillsName).innerHTML;
        this.number  = parseInt(this.interest);
        this.progressLine = this.skillsElem[i].querySelector('.progress-line-'+this.skillsName);
            if(this.number > '100') {
                this.progressLine.style.cssText += "width: 100%;";
            } else {
                this.progressLine.style.cssText += "width: "+this.number+"%;";
            }
    }
};


function Service() {
    this.serviceList = document.querySelector('.service-list');
    this.addEvent();
}

Service.prototype.addEvent = function () {
    this.listElem =  this.serviceList.querySelectorAll('.service-box');

    for(var i = 0; i<this.listElem.length; i++) {
        this.listElem[i].addEventListener("mouseenter", this.chenge.bind(this));
        this.listElem[i].addEventListener("mouseleave", this.chengeRemove.bind(this));
    }
};

Service.prototype.chenge = function (e) {
    this.target = e && e.target || e.srcElement;
    this.target.classList.remove("service-box-static");
    this.target.classList.add("service-box-hover");
    this.triangle =  this.target.querySelector('.triangle-hover');
    this.triangle.classList.remove("triangle_visability-none");
    this.triangle.classList.add("triangle_visability-block");
    this.name =  this.target.querySelector('.service-box__list__title');
    this.dataAttr = this.name.getAttribute('data-name');
    this.img =  this.target.querySelector('.service-box__image__item');
    this.img.classList.remove("service-box_"+this.dataAttr+"-static");
    this.img.classList.add("service-box_"+this.dataAttr+"-hover");
    this.imgBox =  this.target.querySelector('.service-box__image');
    this.imgBox.classList.remove("service-box__image-static");
    this.imgBox.classList.add("service-box__image-hover");
    this.title =  this.target.querySelector('.service-box__list__title');
    this.title.classList.remove("service-box_font-color-basis");
    this.title.classList.add("service-box_font-color-hover");
    this.text =  this.target.querySelector('.service-box__list__descrition');
    this.text.classList.remove("service-box_font-color-basis");
    this.text.classList.add("service-box_font-color-hover");
};

Service.prototype.chengeRemove = function () {
    this.target.classList.remove("service-box-hover");
    this.target.classList.add("service-box-static");
    this.triangle.classList.add("triangle_visability-none");
    this.triangle.classList.remove("triangle_visability-block");
    this.img.classList.add("service-box_"+this.dataAttr+"-static");
    this.img.classList.remove("service-box_"+this.dataAttr+"-hover");
    this.imgBox.classList.add("service-box__image-static");
    this.imgBox.classList.remove("service-box__image-hover");
    this.title.classList.add("service-box_font-color-basis");
    this.title.classList.remove("service-box_font-color-hover");
    this.text.classList.add("service-box_font-color-basis");
    this.text.classList.remove("service-box_font-color-hover");
};


/*---------- Tabs ------------*/


function Tabs() {
    this.link =  document.querySelectorAll('.tabs-elem__link');
    this.tabsNav =  document.querySelector('.work__tabs-nav');
    this.tabsNav.addEventListener("click", this.addEventClick.bind(this));
    this.getLinkHref();
}

Tabs.prototype.getLinkHref= function () {
    for(var q=0;q<this.link.length;q++) {
        this.link[q].addEventListener("click", function (e) {
            event.preventDefault();
        });
        this.attr = this.link[q].getAttribute("href");
        this.tabs =  document.querySelector('.tabs');
        this.elemTabs =  this.tabs.querySelector(this.attr);
        this.elemTabs.style.cssText += "display: none;";
    }
    this.tabsLinkActive =  document.querySelector('.tabs-link_active');
    this.linkActiveAttr =  this.tabsLinkActive.getAttribute("href");
    this.elemTabsActive =  document.querySelector(this.linkActiveAttr);
    this.elemTabsActive.style.cssText += "display: block;";
    this.addEventHover();
};


Tabs.prototype.addEventClick = function (e) {
    this.targetLInk = e && e.target || e.srcElement;

    if(this.targetLInk.tagName != 'A') return;

    for(var r=0;r<this.link.length;r++) {
        this.link[r].classList.remove("tabs-link_active");
    }
   this.targetLInk.classList.add("tabs-link_active");
    this.getLinkHref();
};

Tabs.prototype.addEventHover = function () {
    this.tabsBoxElem = this.elemTabsActive.querySelectorAll('.tabs-box__elem');
    for(var i=0;i<this.tabsBoxElem.length;i++) {
        this.tabsBoxElem[i].addEventListener("mouseenter", this.animationRun.bind(this));
        this.tabsBoxElem[i].addEventListener("mouseleave", this.animationRunRevers.bind(this));
        this.tabsBoxElem[i].addEventListener("animationend", this.animationEnd.bind(this));
    }
};

Tabs.prototype.animationRun =  function (e) {
    this.targetElem = e && e.target || e.srcElement;
    this.tabsBoxHover =  this.targetElem.querySelector('.tabs-box__hover');
    this.tabsBoxSearch =  this.targetElem.querySelector('.tabs-box__search');
    this.tabsBoxHidden = this.targetElem.querySelector('.tabs-box__hidden');
    this.tabsBoxHover.classList.add("tabs-hover-run");
    this.tabsBoxSearch.classList.add("searchRun");
    this.tabsBoxHidden.classList.add("tabs-hidden-run");
};

Tabs.prototype.animationRunRevers =  function () {
    this.tabsBoxHover.classList.add("tabs-hover-run_revers");
    this.tabsBoxHover.classList.remove("tabs-hover-run");
    this.tabsBoxSearch.classList.add("searchRunRevers");
    this.tabsBoxSearch.classList.remove("searchRun");
    this.tabsBoxHidden.classList.add("tabs-hidden-run_revers");
    this.tabsBoxHidden.classList.remove("tabs-hidden-run");

};

Tabs.prototype.animationEnd = function () {
    this.tabsBoxHover.classList.remove("tabs-hover-run_revers");
    this.tabsBoxHidden.classList.remove("tabs-hidden-run_revers");
    this.tabsBoxSearch.classList.remove("searchRunRevers");
};

function Social() {
    this.linkFooter =  document.querySelector('.footer__social');

    this.linkFooter.addEventListener("click", this.addActive.bind(this));
}



Social.prototype.addActive = function (e) {
    this.linkItem = this.linkFooter.querySelectorAll('.footer-elem__link');
    this.targetLinkFooter = e && e.target || e.srcElement;

    if(this.targetLinkFooter.tagName != 'A') return;

    for(var z=0;z<this.linkItem.length;z++) {
        this.linkItem[z].classList.remove("footer__link_active");
    }

    this.targetLinkFooter.classList.add("footer__link_active");
};


function InitMap() {
    var centerLatLng = new google.maps.LatLng(37.782105, -122.400752);

    var mapOptions = {
        center: centerLatLng,
        zoom: 18,
        scrollwheel: false,
        styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":60}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"lightness":30}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ef8c25"},{"lightness":40}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#b6c54c"},{"lightness":40},{"saturation":-40}]},{}]
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);


    var marker = new google.maps.Marker({
        position: centerLatLng,
        map: map

    });

    google.maps.event.addListener(map, "click", function() {
        infoWindow.close();
    });
}
