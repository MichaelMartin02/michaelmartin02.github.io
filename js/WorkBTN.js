$(function () {//call function when doc is ready
    $(".galleryBTN").click(function () {//call function when workBTN is clicked

        $("#galleryPanel").animate({///animate in the gallery panel//
            right: "0",
            height: "95%"
        }, 300, () => {
            $(".galleryBTN").hide();
            $("body").css({ "overflow-y": "hidden" })///remove scrolling from main page, only scrollbar becomes gallery scrolling//
        })
    })


    $(".close").click(function () {
        $("#galleryPanel").animate({///animate out gallery
            right: "-100%",

        }, 300)
        $(".galleryBTN").show();///scrolling in main page again
        $("body").css({ "overflow-y": "scroll" })

    })

    $(".aboutBTN").click(function () {
        $("#aboutPanel").animate({
            right: "0",
            height: "95%"
        }, 300, () => {
            $(".aboutBTN").hide();
            $("body").css({ "overflow-y": "hidden" })///remove scrolling from main page, only scrollbar becomes gallery scrolling//
        })




    })
    $(".closeABT").click(function () {
        $("#aboutPanel").animate({
            right: "-100%",

        }, 300, () => {
            $(".aboutBTN").show();
            $("body").css({ "overflow-y": "scroll" })///remove scrolling from main page, only scrollbar becomes gallery scrolling//
        })

    })

    ///MobileNavBTNS///
    $(".BTNWrapper").click(function () {
        $(".line").toggleClass("lineon");//toggle the close icon//

        $(".mNavBody").toggleClass("on");

        if ($(".mNavOn")[0]) {
            $(".mNavOn").addClass("mobileNav");
            $(".mNavOn").removeClass("mNavOn");
            $(".mGalleryPanel").hide();
            $(".backWrapper").hide();
            $(".mAboutPanel").hide();
            $("body").css({"overflow-y":"scroll"});
            // Do something if class exists
        } else {
            $(".mobileNav").addClass("mNavOn");

            $(".mNavOn").removeClass("mobileNav");

            // Do something if class does not exist
        }
    });
    $(".GalleryMobileBTN").click(function () {///Click mobile nav gallery//
        $(".mGalleryPanel").show();
        $(".backWrapper").css({ "display": "block" });
        $("body").css({"overflow-y":"hidden"});
    });
    $(".AboutMobileBTN").click(function () {///Click mobile about//
        $(".mAboutPanel").show();
        $(".backWrapper").css({ "display": "block" });
    });
    $(".backWrapper").click(function () {
        $(".mGalleryPanel").css({ "display": "none" });
        $(".mAboutPanel").hide();
        $(".backWrapper").hide();
        $("body").css({"overflow-y":"scroll"});
    });



    ///Hover scripts for CS images///

    $(window).width(function () {///Hot Pockets
        if ($(this).width() >= 1025) {
            $(".PocketBKG").hover(function () {
                $(this).css("display", "none");
            }, function () {
                $(this).css("display", "block");
            });
            $(".PocketHover").hover(function () {
                $(".PocketBKG").css("display", "none");
            }, function () {
                $(".PocketBKG").css("display", "block");
            });
        }

    });


    $(window).resize(function () {//Pocket
        if ($(this).width() >= 1025) {
            $(".PocketBKG").hover(function () {
                $(this).css("display", "none");
            }, function () {
                $(this).css("display", "block");
            });
            $(".PocketHover").hover(function () {
                $(".PocketBKG").css("display", "none");
            }, function () {
                $(".PocketBKG").css("display", "block");
            });
        }

    });




    
    if ($(this).width() >= 1025) {//Elephant
        $(".ElephantBKG").hover(function () {
            $(this).css("display", "none");
        }, function () {
            $(this).css("display", "block");
        });
        $(".ElephantHover").hover(function () {
            $(".ElephantBKG").css("display", "none");
        }, function () {
            $(".ElephantBKG").css("display", "block");
        });
    }
    $(window).resize(function () {
    if ($(this).width() >= 1025) {
        $(".ElephantBKG").hover(function () {
            $(this).css("display", "none");
        }, function () {
            $(this).css("display", "block");
        });
        $(".ElephantHover").hover(function () {
            $(".ElephantBKG").css("display", "none");
        }, function () {
            $(".ElephantBKG").css("display", "block");
        });
    }
    });



        
    if ($(this).width() >= 1025) {//Qualia
        $(".QualiaBKG").hover(function () {
            $(this).css("display", "none");
        }, function () {
            $(this).css("display", "block");
        });
        $(".QualiaHover").hover(function () {
            $(".QualiaBKG").css("display", "none");
        }, function () {
            $(".QualiaBKG").css("display", "block");
        });
    }
    $(window).resize(function () {
    if ($(this).width() >= 1025) {
        $(".QualiaBKG").hover(function () {
            $(this).css("display", "none");
        }, function () {
            $(this).css("display", "block");
        });
        $(".QualiaHover").hover(function () {
            $(".QualiaBKG").css("display", "none");
        }, function () {
            $(".QualiaBKG").css("display", "block");
        });
    }
    });

    if ($(this).width() >= 1025) {//Classics
        $(".ClassBKG").hover(function () {
            $(this).css("display", "none");
        }, function () {
            $(this).css("display", "block");
        });
        $(".ClassHover").hover(function () {
            $(".ClassBKG").css("display", "none");
        }, function () {
            $(".ClassBKG").css("display", "block");
        });
    }
$(window).resize(function () {
    if ($(this).width() >= 1025) {
        $(".ClassBKG").hover(function () {
            $(this).css("display", "none");
        }, function () {
            $(this).css("display", "block");
        });
        $(".ClassHover").hover(function () {
            $(".ClassBKG").css("display", "none");
        }, function () {
            $(".ClassBKG").css("display", "block");
        });
    }
});





    if ($(this).width() >= 1025) {//WD40
        $(".WDBKG").hover(function () {
            $(this).css("display", "none");
        }, function () {
            $(this).css("display", "block");
        });
        $(".WDHover").hover(function () {
            $(".WDBKG").css("display", "none");
        }, function () {
            $(".WDBKG").css("display", "block");
        });
    }
$(window).resize(function () {
    if ($(this).width() >= 1025) {
        $(".WDBKG").hover(function () {
            $(this).css("display", "none");
        }, function () {
            $(this).css("display", "block");
        });
        $(".WDHover").hover(function () {
            $(".WDBKG").css("display", "none");
        }, function () {
            $(".WDBKG").css("display", "block");
        });
    }
});

if ($(this).width() >= 1025) {//Sonora
    $(".SonoraBKG").hover(function () {
        $(this).css("display", "none");
    }, function () {
        $(this).css("display", "block");
    });
    $(".SonoraHover").hover(function () {
        $(".SonoraBKG").css("display", "none");
    }, function () {
        $(".SonoraBKG").css("display", "block");
    });
}
$(window).resize(function () {
if ($(this).width() >= 1025) {
    $(".SonoraBKG").hover(function () {
        $(this).css("display", "none");
    }, function () {
        $(this).css("display", "block");
    });
    $(".SonoraHover").hover(function () {
        $(".SonoraBKG").css("display", "none");
    }, function () {
        $(".SonoraBKG").css("display", "block");
    });
}
});

if ($(this).width() >= 1025) {//Sonora
    $(".PostBKG").hover(function () {
        $(this).css("display", "none");
    }, function () {
        $(this).css("display", "block");
    });
    $(".PostHover").hover(function () {
        $(".PostBKG").css("display", "none");
    }, function () {
        $(".PostBKG").css("display", "block");
    });
}
$(window).resize(function () {
if ($(this).width() >= 1025) {
    $(".PostBKG").hover(function () {
        $(this).css("display", "none");
    }, function () {
        $(this).css("display", "block");
    });
    $(".PostHover").hover(function () {
        $(".PostBKG").css("display", "none");
    }, function () {
        $(".PostBKG").css("display", "block");
    });
}
});













if ($(this).width() >= 1025) {//met
    $(".MetBKG").hover(function () {
        $(this).css("display", "none");
    }, function () {
        $(this).css("display", "block");
    });
    $(".MetHover").hover(function () {
        $(".MetBKG").css("display", "none");
    }, function () {
        $(".MetBKG").css("display", "block");
    });
}
$(window).resize(function () {
if ($(this).width() >= 1025) {
    $(".MetBKG").hover(function () {
        $(this).css("display", "none");
    }, function () {
        $(this).css("display", "block");
    });
    $(".MetHover").hover(function () {
        $(".MetBKG").css("display", "none");
    }, function () {
        $(".MetBKG").css("display", "block");
    });
}
});



});