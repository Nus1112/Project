
//$(document).ready(function () {
//    Search();
//});
document.addEventListener("DOMContentLoaded", function () {
    var interval = 30 * 60 * 1000; // 30 นาที
    function reloadPage() {
        location.reload(); // โหลดหน้าเว็บใหม่
    }
    setInterval(reloadPage, interval);
});
document.addEventListener("DOMContentLoaded", function () {
    Logo();
    Logo1();
    Logo2();
   
    Search();
    parkingicon();
    parkingics();
    parkingunder();
    Template();

});
setInterval(function () { startdate(); Search(); parkingunder(); parkingicon(); parkingics(); qrparking();   }, 25000);
window.onload = function () {
    language();
};
function changlanguage(time) {
    var data = {

    };
    $.ajax({
        type: "POST",
        url: $("#Template").val(),
        headers: { "content-type": "application/json" },
        type: "POST",
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            //console.log(data);
            if (data[0].default_language === "th") {
                //changeLanguage(time)
                loopChangeLanguage(time)
            }
            if (data[0].default_language === "en") {
                loopChangeLanguageen(time)
                
            }
            if (data[0].default_language === "cn") {
                loopChangeLanguagechai(time)
            }

        },
        error: function (textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}
function loopChangeLanguageen(time) {
    changeLanguath(time)
    setTimeout(() => {
        changeLanguage();
        setTimeout(() => {
            changeLanguagechi();
            setTimeout(() => {
                loopChangeLanguageen(time); // วนกลับไปเรียก changeLanguage
            }, time * 1000);
        }, time * 1000);
    }, time * 1000);
}
function loopChangeLanguage(time) {
    changeLanguage(); // เรียก changeLanguage ก่อน
    setTimeout(() => {
        changeLanguath();
        setTimeout(() => {
            changeLanguagechi();
            setTimeout(() => {
                loopChangeLanguage(time); // วนกลับไปเรียก loopChangeLanguage อีกครั้ง
            }, time * 1000);
        }, time * 1000);
    }, time * 1000);
}
function loopChangeLanguagechai(time) {
    changeLanguagechi(time)
    setTimeout(() => {
        changeLanguage();
        setTimeout(() => {
            changeLanguath();
            setTimeout(() => {
                loopChangeLanguagechai(time); // วนกลับไปเรียก changeLanguage
            }, time * 1000);
        }, time * 1000);
    }, time * 1000);
}
function language() {
    var data = {

    };
    $.ajax({
        type: "POST",
        url: $("#language").val(),
        headers: { "content-type": "application/json" },
        type: "POST",
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            //console.log(data);
            if (data && data.length > 0) {
                document.getElementById("thaiboat").innerHTML = data[12].thai_language;
                document.getElementById("thaibts").innerHTML = data[14].thai_language;
                document.getElementById("thaitaxi").innerHTML = data[8].thai_language;
                document.getElementById("thaiboatex").innerHTML = data[13].thai_language;
                document.getElementById("thaibus").innerHTML = data[5].thai_language;
                document.getElementById("thaiparking").innerHTML = data[9].thai_language;

                document.getElementById("icon1-1").innerHTML = data[1].thai_language;
                document.getElementById("icon1-2").innerHTML = data[1].eng_language;
                document.getElementById("icon1-3").innerHTML = data[1].chinese_language;
                document.getElementById("icon2-1").innerHTML = data[2].thai_language;
                document.getElementById("icon2-2").innerHTML = data[2].eng_language;
                document.getElementById("icon2-3").innerHTML = data[2].chinese_language;

                document.getElementById("text_queueth").innerHTML = data[46].thai_language;
                document.getElementById("text_queueen").innerHTML = data[46].eng_language;
                document.getElementById("text_queuech").innerHTML = data[46].chinese_language;
                document.getElementById("text_taxith").innerHTML = data[47].thai_language;
                document.getElementById("text_taxien").innerHTML = data[47].eng_language;
                document.getElementById("text_taxich").innerHTML = data[47].chinese_language;

                document.getElementById("text_parkingth1").innerHTML = data[72].thai_language;
                document.getElementById("text_parkingen1").innerHTML = data[72].eng_language;
                document.getElementById("text_parkingch1").innerHTML = data[72].chinese_language;
                document.getElementById("text_parkingth2").innerHTML = data[49].thai_language;
                document.getElementById("text_parkingen2").innerHTML = data[49].eng_language;
                document.getElementById("text_parkingch2").innerHTML = data[49].chinese_language;

                document.getElementById("text_locationth1").innerHTML = data[54].thai_language;
                document.getElementById("text_locationen1").innerHTML = data[54].eng_language;
                document.getElementById("text_locationch1").innerHTML = data[54].chinese_language;
                document.getElementById("text_locationth2").innerHTML = data[55].thai_language;
                document.getElementById("text_locationen2").innerHTML = data[55].eng_language;
                document.getElementById("text_locationch2").innerHTML = data[55].chinese_language;
                document.getElementById("text_locationth3").innerHTML = data[54].thai_language;
                document.getElementById("text_locationen3").innerHTML = data[54].eng_language;
                document.getElementById("text_locationch3").innerHTML = data[54].chinese_language;
                document.getElementById("text_locationth4").innerHTML = data[55].thai_language;
                document.getElementById("text_locationen4").innerHTML = data[55].eng_language;
                document.getElementById("text_locationch4").innerHTML = data[55].chinese_language;

                document.getElementById("text_busth1").innerHTML = data[56].thai_language;
                document.getElementById("text_busen1").innerHTML = data[56].eng_language;
                document.getElementById("text_busch1").innerHTML = data[56].chinese_language;
                document.getElementById("text_busth2").innerHTML = data[56].thai_language;
                document.getElementById("text_busen2").innerHTML = data[56].eng_language;
                document.getElementById("text_busch2").innerHTML = data[56].chinese_language;
                document.getElementById("text_busth3").innerHTML = data[56].thai_language;
                document.getElementById("text_busen3").innerHTML = data[56].eng_language;
                document.getElementById("text_busch3").innerHTML = data[56].chinese_language;

                document.getElementById("text_boatth1").innerHTML = data[56].thai_language;
                document.getElementById("text_boaten1").innerHTML = data[56].eng_language;
                document.getElementById("text_boatch1").innerHTML = data[56].chinese_language;
                document.getElementById("text_boatexth1").innerHTML = data[56].thai_language;
                document.getElementById("text_boatexen1").innerHTML = data[56].eng_language;
                document.getElementById("text_boatexch1").innerHTML = data[56].chinese_language;
                //document.getElementById("text_boatexth1-1").innerHTML = data[56].thai_language;
                //document.getElementById("text_boatexen1-1").innerHTML = data[56].eng_language;
                //document.getElementById("text_boatexch1-1").innerHTML = data[56].chinese_language;

                document.getElementById("text_taxith1").innerHTML = data[42].thai_language;
                document.getElementById("text_taxien1").innerHTML = data[42].eng_language;
                document.getElementById("text_taxich1").innerHTML = data[42].chinese_language;
                document.getElementById("text_taxith2").innerHTML = data[44].thai_language;
                document.getElementById("text_taxien2").innerHTML = data[44].eng_language;
                document.getElementById("text_taxich2").innerHTML = data[44].chinese_language;
                document.getElementById("text_queueth1").innerHTML = data[43].thai_language;
                document.getElementById("text_queueen1").innerHTML = data[43].eng_language;
                document.getElementById("text_queuech1").innerHTML = data[43].chinese_language;
                document.getElementById("text_queueth2").innerHTML = data[45].thai_language;
                document.getElementById("text_queueen2").innerHTML = data[45].eng_language;
                document.getElementById("text_queuech2").innerHTML = data[45].chinese_language;

                document.getElementById("line_btsth1").innerHTML = data[50].thai_language;
                document.getElementById("line_btsen1").innerHTML = data[50].eng_language;
                document.getElementById("line_btsch1").innerHTML = data[50].chinese_language;
                document.getElementById("line_btsth2").innerHTML = data[53].thai_language;
                document.getElementById("line_btsen2").innerHTML = data[53].eng_language;
                document.getElementById("line_btsch2").innerHTML = data[53].chinese_language;
                document.getElementById("line_btsth3").innerHTML = data[52].thai_language;
                document.getElementById("line_btsen3").innerHTML = data[52].eng_language;
                document.getElementById("line_btsch3").innerHTML = data[52].chinese_language;
                document.getElementById("line_btsth4").innerHTML = data[51].thai_language;
                document.getElementById("line_btsen4").innerHTML = data[51].eng_language;
                document.getElementById("line_btsch4").innerHTML = data[51].chinese_language;

                document.getElementById("building1-1").innerHTML = data[16].thai_language;
                document.getElementById("building1-2").innerHTML = data[16].eng_language;
                document.getElementById("building1-3").innerHTML = data[16].chinese_language;
                document.getElementById("building2-1").innerHTML = data[15].thai_language;
                document.getElementById("building2-2").innerHTML = data[15].eng_language;
                document.getElementById("building2-3").innerHTML = data[15].chinese_language;
                document.getElementById("building3-1").innerHTML = data[16].thai_language;
                document.getElementById("building3-2").innerHTML = data[16].eng_language;
                document.getElementById("building3-3").innerHTML = data[16].chinese_language;
                document.getElementById("buildingcarth1").innerHTML = data[45].thai_language;
                document.getElementById("buildingcaren1").innerHTML = data[45].eng_language;
                document.getElementById("buildingcarch1").innerHTML = data[45].chinese_language;
                document.getElementById("buildingcarth2").innerHTML = data[45].thai_language;
                document.getElementById("buildingcaren2").innerHTML = data[45].eng_language;
                document.getElementById("buildingcarch2").innerHTML = data[45].chinese_language;
                document.getElementById("buildingcarth3").innerHTML = data[45].thai_language;
                document.getElementById("buildingcaren3").innerHTML = data[45].eng_language;
                document.getElementById("buildingcarch3").innerHTML = data[45].chinese_language;
                document.getElementById("buildingcarth1temp2").innerHTML = data[45].thai_language;
                document.getElementById("buildingcaren1temp2").innerHTML = data[45].eng_language;
                document.getElementById("buildingcarch1temp2").innerHTML = data[45].chinese_language;
                document.getElementById("buildingcarth2temp2").innerHTML = data[45].thai_language;
                document.getElementById("buildingcaren2temp2").innerHTML = data[45].eng_language;
                document.getElementById("buildingcarch2temp2").innerHTML = data[45].chinese_language;
                document.getElementById("buildingcarth3temp2").innerHTML = data[45].thai_language;
                document.getElementById("buildingcaren3temp2").innerHTML = data[45].eng_language;
                document.getElementById("buildingcarch3temp2").innerHTML = data[45].chinese_language;
                document.getElementById("buildingcarth1temp3").innerHTML = data[45].thai_language;
                document.getElementById("buildingcaren1temp3").innerHTML = data[45].eng_language;
                document.getElementById("buildingcarch1temp3").innerHTML = data[45].chinese_language;
                document.getElementById("buildingcarth2temp3").innerHTML = data[45].thai_language;
                document.getElementById("buildingcaren2temp3").innerHTML = data[45].eng_language;
                document.getElementById("buildingcarch2temp3").innerHTML = data[45].chinese_language;
                document.getElementById("buildingcarth3temp3").innerHTML = data[45].thai_language;
                document.getElementById("buildingcaren3temp3").innerHTML = data[45].eng_language;
                document.getElementById("buildingcarch3temp3").innerHTML = data[45].chinese_language;
                document.getElementById("buildingcarth1temp4").innerHTML = data[45].thai_language;
                document.getElementById("buildingcaren1temp4").innerHTML = data[45].eng_language;
                document.getElementById("buildingcarch1temp4").innerHTML = data[45].chinese_language;
                document.getElementById("buildingcarth2temp4").innerHTML = data[45].thai_language;
                document.getElementById("buildingcaren2temp4").innerHTML = data[45].eng_language;
                document.getElementById("buildingcarch2temp4").innerHTML = data[45].chinese_language;
                document.getElementById("buildingcarth3temp4").innerHTML = data[45].thai_language;
                document.getElementById("buildingcaren3temp4").innerHTML = data[45].eng_language;
                document.getElementById("buildingcarch3temp4").innerHTML = data[45].chinese_language;
                document.getElementById("buildingcarth1temp5").innerHTML = data[45].thai_language;
                document.getElementById("buildingcaren1temp5").innerHTML = data[45].eng_language;
                document.getElementById("buildingcarch1temp5").innerHTML = data[45].chinese_language;
                document.getElementById("buildingcarth2temp5").innerHTML = data[45].thai_language;
                document.getElementById("buildingcaren2temp5").innerHTML = data[45].eng_language;
                document.getElementById("buildingcarch2temp5").innerHTML = data[45].chinese_language;
                document.getElementById("buildingcarth3temp5").innerHTML = data[45].thai_language;
                document.getElementById("buildingcaren3temp5").innerHTML = data[45].eng_language;
                document.getElementById("buildingcarch3temp5").innerHTML = data[45].chinese_language;
                document.getElementById("buildingcarth1temp6").innerHTML = data[45].thai_language;
                document.getElementById("buildingcaren1temp6").innerHTML = data[45].eng_language;
                document.getElementById("buildingcarch1temp6").innerHTML = data[45].chinese_language;
                document.getElementById("buildingcarth2temp6").innerHTML = data[45].thai_language;
                document.getElementById("buildingcaren2temp6").innerHTML = data[45].eng_language;
                document.getElementById("buildingcarch2temp6").innerHTML = data[45].chinese_language;
                document.getElementById("buildingcarth3temp6").innerHTML = data[45].thai_language;
                document.getElementById("buildingcaren3temp6").innerHTML = data[45].eng_language;
                document.getElementById("buildingcarch3temp6").innerHTML = data[45].chinese_language;

                document.getElementById("englishboat").innerHTML = data[12].eng_language;
                document.getElementById("englishbts").innerHTML = data[14].eng_language;
                document.getElementById("englishtaxi").innerHTML = data[8].eng_language;
                document.getElementById("englishboatex").innerHTML = data[13].eng_language;
                document.getElementById("englishbus").innerHTML = data[5].eng_language;
                document.getElementById("englishparking").innerHTML = data[9].eng_language;

                document.getElementById("chineseboat").innerHTML = data[12].chinese_language;
                document.getElementById("chinesebts").innerHTML = data[14].chinese_language;
                document.getElementById("chinesetaxi").innerHTML = data[8].chinese_language;
                document.getElementById("chineseboatex").innerHTML = data[13].chinese_language;
                document.getElementById("chinesebus").innerHTML = data[5].chinese_language;
                document.getElementById("chineseparking").innerHTML = data[9].chinese_language;

                document.getElementById("informationth1").innerHTML = data[48].thai_language;
                document.getElementById("informationen1").innerHTML = data[48].eng_language;
                document.getElementById("informationch1").innerHTML = data[48].chinese_language;
                document.getElementById("informationth2").innerHTML = data[48].thai_language;
                document.getElementById("informationen2").innerHTML = data[48].eng_language;
                document.getElementById("informationch2").innerHTML = data[48].chinese_language;
                document.getElementById("informationth3").innerHTML = data[48].thai_language;
                document.getElementById("informationen3").innerHTML = data[48].eng_language;
                document.getElementById("informationch3").innerHTML = data[48].chinese_language;
                document.getElementById("informationth4").innerHTML = data[48].thai_language;
                document.getElementById("informationen4").innerHTML = data[48].eng_language;
                document.getElementById("informationch4").innerHTML = data[48].chinese_language;
                document.getElementById("informationth5").innerHTML = data[48].thai_language;
                document.getElementById("informationen5").innerHTML = data[48].eng_language;
                document.getElementById("informationch5").innerHTML = data[48].chinese_language;
                document.getElementById("informationth6").innerHTML = data[48].thai_language;
                document.getElementById("informationen6").innerHTML = data[48].eng_language;
                document.getElementById("informationch6").innerHTML = data[48].chinese_language;

                document.getElementById("informationth1temp2").innerHTML = data[48].thai_language;
                document.getElementById("informationen1temp2").innerHTML = data[48].eng_language;
                document.getElementById("informationch1temp2").innerHTML = data[48].chinese_language;
                document.getElementById("informationth2temp2").innerHTML = data[48].thai_language;
                document.getElementById("informationen2temp2").innerHTML = data[48].eng_language;
                document.getElementById("informationch2temp2").innerHTML = data[48].chinese_language;
                document.getElementById("informationth3temp2").innerHTML = data[48].thai_language;
                document.getElementById("informationen3temp2").innerHTML = data[48].eng_language;
                document.getElementById("informationch3temp2").innerHTML = data[48].chinese_language;
                document.getElementById("informationth4temp2").innerHTML = data[48].thai_language;
                document.getElementById("informationen4temp2").innerHTML = data[48].eng_language;
                document.getElementById("informationch4temp2").innerHTML = data[48].chinese_language;
                document.getElementById("informationth5temp2").innerHTML = data[48].thai_language;
                document.getElementById("informationen5temp2").innerHTML = data[48].eng_language;
                document.getElementById("informationch5temp2").innerHTML = data[48].chinese_language;
                document.getElementById("informationth6temp2").innerHTML = data[48].thai_language;
                document.getElementById("informationen6temp2").innerHTML = data[48].eng_language;
                document.getElementById("informationch6temp2").innerHTML = data[48].chinese_language;

                document.getElementById("informationth1temp3").innerHTML = data[48].thai_language;
                document.getElementById("informationen1temp3").innerHTML = data[48].eng_language;
                document.getElementById("informationch1temp3").innerHTML = data[48].chinese_language;
                document.getElementById("informationth2temp3").innerHTML = data[48].thai_language;
                document.getElementById("informationen2temp3").innerHTML = data[48].eng_language;
                document.getElementById("informationch2temp3").innerHTML = data[48].chinese_language;
                document.getElementById("informationth3temp3").innerHTML = data[48].thai_language;
                document.getElementById("informationen3temp3").innerHTML = data[48].eng_language;
                document.getElementById("informationch3temp3").innerHTML = data[48].chinese_language;
                document.getElementById("informationth4temp3").innerHTML = data[48].thai_language;
                document.getElementById("informationen4temp3").innerHTML = data[48].eng_language;
                document.getElementById("informationch4temp3").innerHTML = data[48].chinese_language;
                document.getElementById("informationth5temp3").innerHTML = data[48].thai_language;
                document.getElementById("informationen5temp3").innerHTML = data[48].eng_language;
                document.getElementById("informationch5temp3").innerHTML = data[48].chinese_language;
                document.getElementById("informationth6temp3").innerHTML = data[48].thai_language;
                document.getElementById("informationen6temp3").innerHTML = data[48].eng_language;
                document.getElementById("informationch6temp3").innerHTML = data[48].chinese_language;

                document.getElementById("informationth1temp4").innerHTML = data[48].thai_language;
                document.getElementById("informationen1temp4").innerHTML = data[48].eng_language;
                document.getElementById("informationch1temp4").innerHTML = data[48].chinese_language;
                document.getElementById("informationth2temp4").innerHTML = data[48].thai_language;
                document.getElementById("informationen2temp4").innerHTML = data[48].eng_language;
                document.getElementById("informationch2temp4").innerHTML = data[48].chinese_language;
                document.getElementById("informationth3temp4").innerHTML = data[48].thai_language;
                document.getElementById("informationen3temp4").innerHTML = data[48].eng_language;
                document.getElementById("informationch3temp4").innerHTML = data[48].chinese_language;
                document.getElementById("informationth4temp4").innerHTML = data[48].thai_language;
                document.getElementById("informationen4temp4").innerHTML = data[48].eng_language;
                document.getElementById("informationch4temp4").innerHTML = data[48].chinese_language;
                document.getElementById("informationth5temp4").innerHTML = data[48].thai_language;
                document.getElementById("informationen5temp4").innerHTML = data[48].eng_language;
                document.getElementById("informationch5temp4").innerHTML = data[48].chinese_language;
                document.getElementById("informationth6temp4").innerHTML = data[48].thai_language;
                document.getElementById("informationen6temp4").innerHTML = data[48].eng_language;
                document.getElementById("informationch6temp4").innerHTML = data[48].chinese_language;

                document.getElementById("informationth1temp5").innerHTML = data[48].thai_language;
                document.getElementById("informationen1temp5").innerHTML = data[48].eng_language;
                document.getElementById("informationch1temp5").innerHTML = data[48].chinese_language;
                document.getElementById("informationth2temp5").innerHTML = data[48].thai_language;
                document.getElementById("informationen2temp5").innerHTML = data[48].eng_language;
                document.getElementById("informationch2temp5").innerHTML = data[48].chinese_language;
                document.getElementById("informationth3temp5").innerHTML = data[48].thai_language;
                document.getElementById("informationen3temp5").innerHTML = data[48].eng_language;
                document.getElementById("informationch3temp5").innerHTML = data[48].chinese_language;
                document.getElementById("informationth4temp5").innerHTML = data[48].thai_language;
                document.getElementById("informationen4temp5").innerHTML = data[48].eng_language;
                document.getElementById("informationch4temp5").innerHTML = data[48].chinese_language;
                document.getElementById("informationth5temp5").innerHTML = data[48].thai_language;
                document.getElementById("informationen5temp5").innerHTML = data[48].eng_language;
                document.getElementById("informationch5temp5").innerHTML = data[48].chinese_language;
                document.getElementById("informationth6temp5").innerHTML = data[48].thai_language;
                document.getElementById("informationen6temp5").innerHTML = data[48].eng_language;
                document.getElementById("informationch6temp5").innerHTML = data[48].chinese_language;

                document.getElementById("informationth1temp6").innerHTML = data[48].thai_language;
                document.getElementById("informationen1temp6").innerHTML = data[48].eng_language;
                document.getElementById("informationch1temp6").innerHTML = data[48].chinese_language;
                document.getElementById("informationth2temp6").innerHTML = data[48].thai_language;
                document.getElementById("informationen2temp6").innerHTML = data[48].eng_language;
                document.getElementById("informationch2temp6").innerHTML = data[48].chinese_language;
                document.getElementById("informationth3temp6").innerHTML = data[48].thai_language;
                document.getElementById("informationen3temp6").innerHTML = data[48].eng_language;
                document.getElementById("informationch3temp6").innerHTML = data[48].chinese_language;
                document.getElementById("informationth4temp6").innerHTML = data[48].thai_language;
                document.getElementById("informationen4temp6").innerHTML = data[48].eng_language;
                document.getElementById("informationch4temp6").innerHTML = data[48].chinese_language;
                document.getElementById("informationth5temp6").innerHTML = data[48].thai_language;
                document.getElementById("informationen5temp6").innerHTML = data[48].eng_language;
                document.getElementById("informationch5temp6").innerHTML = data[48].chinese_language;
                document.getElementById("informationth6temp6").innerHTML = data[48].thai_language;
                document.getElementById("informationen6temp6").innerHTML = data[48].eng_language;
                document.getElementById("informationch6temp6").innerHTML = data[48].chinese_language;

                document.getElementById("datesth").innerHTML = data[57].thai_language;
                document.getElementById("datesen").innerHTML = data[57].eng_language;
                document.getElementById("datesch").innerHTML = data[57].chinese_language;
                //----------------------------------------------------------------------------------2------------------------------------------------------------------------------------------------------
                document.getElementById("thaiboattemp2").innerHTML = data[12].thai_language;
                document.getElementById("thaibtstemp2").innerHTML = data[14].thai_language;
                document.getElementById("thaitaxitemp2").innerHTML = data[8].thai_language;
                document.getElementById("thaiboatextemp2").innerHTML = data[13].thai_language;
                document.getElementById("thaibustemp2").innerHTML = data[5].thai_language;
                document.getElementById("thaiparkingtemp2").innerHTML = data[9].thai_language;

                document.getElementById("boat6-1temp2").innerHTML = data[19].thai_language;
                document.getElementById("boat6-2temp2").innerHTML = data[19].eng_language;
                document.getElementById("boat6-3temp2").innerHTML = data[19].chinese_language;
                document.getElementById("boat7-1temp2").innerHTML = data[20].thai_language;
                document.getElementById("boat7-2temp2").innerHTML = data[20].eng_language;
                document.getElementById("boat7-3temp2").innerHTML = data[20].chinese_language;
                document.getElementById("boat8-1temp2").innerHTML = data[22].thai_language;
                document.getElementById("boat8-2temp2").innerHTML = data[22].eng_language;
                document.getElementById("boat8-3temp2").innerHTML = data[22].chinese_language;
                document.getElementById("boat9-1temp2").innerHTML = data[21].thai_language;
                document.getElementById("boat9-2temp2").innerHTML = data[21].eng_language;
                document.getElementById("boat9-3temp2").innerHTML = data[21].chinese_language;

                document.getElementById("boat11-1temp2").innerHTML = data[71].thai_language;
                document.getElementById("boat11-2temp2").innerHTML = data[71].eng_language;
                document.getElementById("boat11-3temp2").innerHTML = data[71].chinese_language;

                document.getElementById("icon1-1temp2").innerHTML = data[1].thai_language;
                document.getElementById("icon1-2temp2").innerHTML = data[1].eng_language;
                document.getElementById("icon1-3temp2").innerHTML = data[1].chinese_language;
                document.getElementById("icon2-1temp2").innerHTML = data[2].thai_language;
                document.getElementById("icon2-2temp2").innerHTML = data[2].eng_language;
                document.getElementById("icon2-3temp2").innerHTML = data[2].chinese_language;

                document.getElementById("text_queuethtemp2").innerHTML = data[46].thai_language;
                document.getElementById("text_queueentemp2").innerHTML = data[46].eng_language;
                document.getElementById("text_queuechtemp2").innerHTML = data[46].chinese_language;
                document.getElementById("text_taxithtemp2").innerHTML = data[47].thai_language;
                document.getElementById("text_taxientemp2").innerHTML = data[47].eng_language;
                document.getElementById("text_taxichtemp2").innerHTML = data[47].chinese_language;

                document.getElementById("text_parkingth1temp2").innerHTML = data[72].thai_language;
                document.getElementById("text_parkingen1temp2").innerHTML = data[72].eng_language;
                document.getElementById("text_parkingch1temp2").innerHTML = data[72].chinese_language;
                document.getElementById("text_parkingth2temp2").innerHTML = data[49].thai_language;
                document.getElementById("text_parkingen2temp2").innerHTML = data[49].eng_language;
                document.getElementById("text_parkingch2temp2").innerHTML = data[49].chinese_language;

                document.getElementById("text_locationth1temp2").innerHTML = data[54].thai_language;
                document.getElementById("text_locationen1temp2").innerHTML = data[54].eng_language;
                document.getElementById("text_locationch1temp2").innerHTML = data[54].chinese_language;
                document.getElementById("text_locationth2temp2").innerHTML = data[55].thai_language;
                document.getElementById("text_locationen2temp2").innerHTML = data[55].eng_language;
                document.getElementById("text_locationch2temp2").innerHTML = data[55].chinese_language;
                document.getElementById("text_locationth3temp2").innerHTML = data[54].thai_language;
                document.getElementById("text_locationen3temp2").innerHTML = data[54].eng_language;
                document.getElementById("text_locationch3temp2").innerHTML = data[54].chinese_language;
                document.getElementById("text_locationth4temp2").innerHTML = data[55].thai_language;
                document.getElementById("text_locationen4temp2").innerHTML = data[55].eng_language;
                document.getElementById("text_locationch4temp2").innerHTML = data[55].chinese_language;

                document.getElementById("text_busth1temp2").innerHTML = data[56].thai_language;
                document.getElementById("text_busen1temp2").innerHTML = data[56].eng_language;
                document.getElementById("text_busch1temp2").innerHTML = data[56].chinese_language;
                document.getElementById("text_busth2temp2").innerHTML = data[56].thai_language;
                document.getElementById("text_busen2temp2").innerHTML = data[56].eng_language;
                document.getElementById("text_busch2temp2").innerHTML = data[56].chinese_language;
                document.getElementById("text_busth3temp2").innerHTML = data[56].thai_language;
                document.getElementById("text_busen3temp2").innerHTML = data[56].eng_language;
                document.getElementById("text_busch3temp2").innerHTML = data[56].chinese_language;
                document.getElementById("text_busth4temp2").innerHTML = data[56].thai_language;
                document.getElementById("text_busen4temp2").innerHTML = data[56].eng_language;
                document.getElementById("text_busch4temp2").innerHTML = data[56].chinese_language;

                document.getElementById("station_busth1temp2").innerHTML = data[73].thai_language;
                document.getElementById("station_busen1temp2").innerHTML = data[73].eng_language;
                document.getElementById("station_busch1temp2").innerHTML = data[73].chinese_language;
                document.getElementById("station_busth2temp2").innerHTML = data[73].thai_language;
                document.getElementById("station_busen2temp2").innerHTML = data[73].eng_language;
                document.getElementById("station_busch2temp2").innerHTML = data[73].chinese_language;
                document.getElementById("station_busth3temp2").innerHTML = data[73].thai_language;
                document.getElementById("station_busen3temp2").innerHTML = data[73].eng_language;
                document.getElementById("station_busch3temp2").innerHTML = data[73].chinese_language;
                document.getElementById("station_busth4temp2").innerHTML = data[73].thai_language;
                document.getElementById("station_busen4temp2").innerHTML = data[73].eng_language;
                document.getElementById("station_busch4temp2").innerHTML = data[73].chinese_language;

                document.getElementById("stationics_busth1temp2").innerHTML = data[74].thai_language;
                document.getElementById("stationics_busen1temp2").innerHTML = data[74].eng_language;
                document.getElementById("stationics_busch1temp2").innerHTML = data[74].chinese_language;
                document.getElementById("stationics_busth2temp2").innerHTML = data[74].thai_language;
                document.getElementById("stationics_busen2temp2").innerHTML = data[74].eng_language;
                document.getElementById("stationics_busch2temp2").innerHTML = data[74].chinese_language;
                document.getElementById("stationics_busth3temp2").innerHTML = data[74].thai_language;
                document.getElementById("stationics_busen3temp2").innerHTML = data[74].eng_language;
                document.getElementById("stationics_busch3temp2").innerHTML = data[74].chinese_language;
                document.getElementById("stationics_busth4temp2").innerHTML = data[74].thai_language;
                document.getElementById("stationics_busen4temp2").innerHTML = data[74].eng_language;
                document.getElementById("stationics_busch4temp2").innerHTML = data[74].chinese_language;

                document.getElementById("text_boatth1temp2").innerHTML = data[56].thai_language;
                document.getElementById("text_boaten1temp2").innerHTML = data[56].eng_language;
                document.getElementById("text_boatch1temp2").innerHTML = data[56].chinese_language;
                document.getElementById("text_boatexth1temp2").innerHTML = data[56].thai_language;
                document.getElementById("text_boatexen1temp2").innerHTML = data[56].eng_language;
                document.getElementById("text_boatexch1temp2").innerHTML = data[56].chinese_language;
                document.getElementById("text_boatexth1-1temp2").innerHTML = data[56].thai_language;
                document.getElementById("text_boatexen1-1temp2").innerHTML = data[56].eng_language;
                document.getElementById("text_boatexch1-1temp2").innerHTML = data[56].chinese_language;

                document.getElementById("text_taxith1temp2").innerHTML = data[42].thai_language;
                document.getElementById("text_taxien1temp2").innerHTML = data[42].eng_language;
                document.getElementById("text_taxich1temp2").innerHTML = data[42].chinese_language;
                document.getElementById("text_taxith2temp2").innerHTML = data[44].thai_language;
                document.getElementById("text_taxien2temp2").innerHTML = data[44].eng_language;
                document.getElementById("text_taxich2temp2").innerHTML = data[44].chinese_language;
                document.getElementById("text_queueth1temp2").innerHTML = data[43].thai_language;
                document.getElementById("text_queueen1temp2").innerHTML = data[43].eng_language;
                document.getElementById("text_queuech1temp2").innerHTML = data[43].chinese_language;
                document.getElementById("text_queueth2temp2").innerHTML = data[45].thai_language;
                document.getElementById("text_queueen2temp2").innerHTML = data[45].eng_language;
                document.getElementById("text_queuech2temp2").innerHTML = data[45].chinese_language;

                document.getElementById("line_btsth1temp2").innerHTML = data[50].thai_language;
                document.getElementById("line_btsen1temp2").innerHTML = data[50].eng_language;
                document.getElementById("line_btsch1temp2").innerHTML = data[50].chinese_language;
                document.getElementById("line_btsth2temp2").innerHTML = data[53].thai_language;
                document.getElementById("line_btsen2temp2").innerHTML = data[53].eng_language;
                document.getElementById("line_btsch2temp2").innerHTML = data[53].chinese_language;
                document.getElementById("line_btsth3temp2").innerHTML = data[52].thai_language;
                document.getElementById("line_btsen3temp2").innerHTML = data[52].eng_language;
                document.getElementById("line_btsch3temp2").innerHTML = data[52].chinese_language;
                document.getElementById("line_btsth4temp2").innerHTML = data[51].thai_language;
                document.getElementById("line_btsen4temp2").innerHTML = data[51].eng_language;
                document.getElementById("line_btsch4temp2").innerHTML = data[51].chinese_language;

                document.getElementById("building1-1temp2").innerHTML = data[16].thai_language;
                document.getElementById("building1-2temp2").innerHTML = data[16].eng_language;
                document.getElementById("building1-3temp2").innerHTML = data[16].chinese_language;
                document.getElementById("building2-1temp2").innerHTML = data[15].thai_language;
                document.getElementById("building2-2temp2").innerHTML = data[15].eng_language;
                document.getElementById("building2-3temp2").innerHTML = data[15].chinese_language;
                document.getElementById("building3-1temp2").innerHTML = data[16].thai_language;
                document.getElementById("building3-2temp2").innerHTML = data[16].eng_language;
                document.getElementById("building3-3temp2").innerHTML = data[16].chinese_language;

                document.getElementById("englishboattemp2").innerHTML = data[12].eng_language;
                document.getElementById("englishbtstemp2").innerHTML = data[14].eng_language;
                document.getElementById("englishtaxitemp2").innerHTML = data[8].eng_language;
                document.getElementById("englishboatextemp2").innerHTML = data[13].eng_language;
                document.getElementById("englishbustemp2").innerHTML = data[5].eng_language;
                document.getElementById("englishparkingtemp2").innerHTML = data[9].eng_language;

                document.getElementById("chineseboattemp2").innerHTML = data[12].chinese_language;
                document.getElementById("chinesebtstemp2").innerHTML = data[14].chinese_language;
                document.getElementById("chinesetaxitemp2").innerHTML = data[8].chinese_language;
                document.getElementById("chineseboatextemp2").innerHTML = data[13].chinese_language;
                document.getElementById("chinesebustemp2").innerHTML = data[5].chinese_language;
                document.getElementById("chineseparkingtemp2").innerHTML = data[9].chinese_language;


                //----------------------------------------------------------------------------------3------------------------------------------------------------------------------------------------------
                document.getElementById("thaiboattemp3").innerHTML = data[12].thai_language;
                document.getElementById("thaibtstemp3").innerHTML = data[14].thai_language;
                document.getElementById("thaitaxitemp3").innerHTML = data[8].thai_language;
                document.getElementById("thaiboatextemp3").innerHTML = data[13].thai_language;
                document.getElementById("thaibustemp3").innerHTML = data[5].thai_language;
                document.getElementById("thaiparkingtemp3").innerHTML = data[9].thai_language;

                document.getElementById("boat6-1temp3").innerHTML = data[19].thai_language;
                document.getElementById("boat6-2temp3").innerHTML = data[19].eng_language;
                document.getElementById("boat6-3temp3").innerHTML = data[19].chinese_language;
                document.getElementById("boat7-1temp3").innerHTML = data[20].thai_language;
                document.getElementById("boat7-2temp3").innerHTML = data[20].eng_language;
                document.getElementById("boat7-3temp3").innerHTML = data[20].chinese_language;
                document.getElementById("boat8-1temp3").innerHTML = data[22].thai_language;
                document.getElementById("boat8-2temp3").innerHTML = data[22].eng_language;
                document.getElementById("boat8-3temp3").innerHTML = data[22].chinese_language;
                document.getElementById("boat9-1temp3").innerHTML = data[21].thai_language;
                document.getElementById("boat9-2temp3").innerHTML = data[21].eng_language;
                document.getElementById("boat9-3temp3").innerHTML = data[21].chinese_language;

                document.getElementById("boat11-1temp3").innerHTML = data[71].thai_language;
                document.getElementById("boat11-2temp3").innerHTML = data[71].eng_language;
                document.getElementById("boat11-3temp3").innerHTML = data[71].chinese_language;

                document.getElementById("icon1-1temp3").innerHTML = data[1].thai_language;
                document.getElementById("icon1-2temp3").innerHTML = data[1].eng_language;
                document.getElementById("icon1-3temp3").innerHTML = data[1].chinese_language;
                document.getElementById("icon2-1temp3").innerHTML = data[2].thai_language;
                document.getElementById("icon2-2temp3").innerHTML = data[2].eng_language;
                document.getElementById("icon2-3temp3").innerHTML = data[2].chinese_language;

                document.getElementById("text_queuethtemp3").innerHTML = data[46].thai_language;
                document.getElementById("text_queueentemp3").innerHTML = data[46].eng_language;
                document.getElementById("text_queuechtemp3").innerHTML = data[46].chinese_language;
                document.getElementById("text_taxithtemp3").innerHTML = data[47].thai_language;
                document.getElementById("text_taxientemp3").innerHTML = data[47].eng_language;
                document.getElementById("text_taxichtemp3").innerHTML = data[47].chinese_language;

                document.getElementById("text_parkingth1temp3").innerHTML = data[72].thai_language;
                document.getElementById("text_parkingen1temp3").innerHTML = data[72].eng_language;
                document.getElementById("text_parkingch1temp3").innerHTML = data[72].chinese_language;
                document.getElementById("text_parkingth2temp3").innerHTML = data[49].thai_language;
                document.getElementById("text_parkingen2temp3").innerHTML = data[49].eng_language;
                document.getElementById("text_parkingch2temp3").innerHTML = data[49].chinese_language;

                document.getElementById("text_locationth1temp3").innerHTML = data[54].thai_language;
                document.getElementById("text_locationen1temp3").innerHTML = data[54].eng_language;
                document.getElementById("text_locationch1temp3").innerHTML = data[54].chinese_language;
                document.getElementById("text_locationth2temp3").innerHTML = data[55].thai_language;
                document.getElementById("text_locationen2temp3").innerHTML = data[55].eng_language;
                document.getElementById("text_locationch2temp3").innerHTML = data[55].chinese_language;
                document.getElementById("text_locationth3temp3").innerHTML = data[54].thai_language;
                document.getElementById("text_locationen3temp3").innerHTML = data[54].eng_language;
                document.getElementById("text_locationch3temp3").innerHTML = data[54].chinese_language;
                document.getElementById("text_locationth4temp3").innerHTML = data[55].thai_language;
                document.getElementById("text_locationen4temp3").innerHTML = data[55].eng_language;
                document.getElementById("text_locationch4temp3").innerHTML = data[55].chinese_language;

                document.getElementById("text_busth1temp3").innerHTML = data[56].thai_language;
                document.getElementById("text_busen1temp3").innerHTML = data[56].eng_language;
                document.getElementById("text_busch1temp3").innerHTML = data[56].chinese_language;
                document.getElementById("text_busth2temp3").innerHTML = data[56].thai_language;
                document.getElementById("text_busen2temp3").innerHTML = data[56].eng_language;
                document.getElementById("text_busch2temp3").innerHTML = data[56].chinese_language;
                document.getElementById("text_busth3temp3").innerHTML = data[56].thai_language;
                document.getElementById("text_busen3temp3").innerHTML = data[56].eng_language;
                document.getElementById("text_busch3temp3").innerHTML = data[56].chinese_language;

                document.getElementById("text_boatth1temp3").innerHTML = data[56].thai_language;
                document.getElementById("text_boaten1temp3").innerHTML = data[56].eng_language;
                document.getElementById("text_boatch1temp3").innerHTML = data[56].chinese_language;
                document.getElementById("text_boatexth1temp3").innerHTML = data[56].thai_language;
                document.getElementById("text_boatexen1temp3").innerHTML = data[56].eng_language;
                document.getElementById("text_boatexch1temp3").innerHTML = data[56].chinese_language;
                document.getElementById("text_boatexth1-1temp3").innerHTML = data[56].thai_language;
                document.getElementById("text_boatexen1-1temp3").innerHTML = data[56].eng_language;
                document.getElementById("text_boatexch1-1temp3").innerHTML = data[56].chinese_language;

                document.getElementById("text_taxith1temp3").innerHTML = data[42].thai_language;
                document.getElementById("text_taxien1temp3").innerHTML = data[42].eng_language;
                document.getElementById("text_taxich1temp3").innerHTML = data[42].chinese_language;
                document.getElementById("text_taxith2temp3").innerHTML = data[44].thai_language;
                document.getElementById("text_taxien2temp3").innerHTML = data[44].eng_language;
                document.getElementById("text_taxich2temp3").innerHTML = data[44].chinese_language;
                document.getElementById("text_queueth1temp3").innerHTML = data[43].thai_language;
                document.getElementById("text_queueen1temp3").innerHTML = data[43].eng_language;
                document.getElementById("text_queuech1temp3").innerHTML = data[43].chinese_language;
                document.getElementById("text_queueth2temp3").innerHTML = data[45].thai_language;
                document.getElementById("text_queueen2temp3").innerHTML = data[45].eng_language;
                document.getElementById("text_queuech2temp3").innerHTML = data[45].chinese_language;

                document.getElementById("line_btsth1temp3").innerHTML = data[50].thai_language;
                document.getElementById("line_btsen1temp3").innerHTML = data[50].eng_language;
                document.getElementById("line_btsch1temp3").innerHTML = data[50].chinese_language;
                document.getElementById("line_btsth2temp3").innerHTML = data[53].thai_language;
                document.getElementById("line_btsen2temp3").innerHTML = data[53].eng_language;
                document.getElementById("line_btsch2temp3").innerHTML = data[53].chinese_language;
                document.getElementById("line_btsth3temp3").innerHTML = data[52].thai_language;
                document.getElementById("line_btsen3temp3").innerHTML = data[52].eng_language;
                document.getElementById("line_btsch3temp3").innerHTML = data[52].chinese_language;
                document.getElementById("line_btsth4temp3").innerHTML = data[51].thai_language;
                document.getElementById("line_btsen4temp3").innerHTML = data[51].eng_language;
                document.getElementById("line_btsch4temp3").innerHTML = data[51].chinese_language;

                document.getElementById("building1-1temp3").innerHTML = data[16].thai_language;
                document.getElementById("building1-2temp3").innerHTML = data[16].eng_language;
                document.getElementById("building1-3temp3").innerHTML = data[16].chinese_language;
                document.getElementById("building2-1temp3").innerHTML = data[15].thai_language;
                document.getElementById("building2-2temp3").innerHTML = data[15].eng_language;
                document.getElementById("building2-3temp3").innerHTML = data[15].chinese_language;
                document.getElementById("building3-1temp3").innerHTML = data[16].thai_language;
                document.getElementById("building3-2temp3").innerHTML = data[16].eng_language;
                document.getElementById("building3-3temp3").innerHTML = data[16].chinese_language;

                document.getElementById("englishboattemp3").innerHTML = data[12].eng_language;
                document.getElementById("englishbtstemp3").innerHTML = data[14].eng_language;
                document.getElementById("englishtaxitemp3").innerHTML = data[8].eng_language;
                document.getElementById("englishboatextemp3").innerHTML = data[13].eng_language;
                document.getElementById("englishbustemp3").innerHTML = data[5].eng_language;
                document.getElementById("englishparkingtemp3").innerHTML = data[9].eng_language;

                document.getElementById("chineseboattemp3").innerHTML = data[12].chinese_language;
                document.getElementById("chinesebtstemp3").innerHTML = data[14].chinese_language;
                document.getElementById("chinesetaxitemp3").innerHTML = data[8].chinese_language;
                document.getElementById("chineseboatextemp3").innerHTML = data[13].chinese_language;
                document.getElementById("chinesebustemp3").innerHTML = data[5].chinese_language;
                document.getElementById("chineseparkingtemp3").innerHTML = data[9].chinese_language

                //----------------------------------------------------------------------------------4------------------------------------------------------------------------------------------------------
                document.getElementById("thaiboattemp4").innerHTML = data[12].thai_language;
                document.getElementById("thaibtstemp4").innerHTML = data[14].thai_language;
                document.getElementById("thaitaxitemp4").innerHTML = data[8].thai_language;
                document.getElementById("thaiboatextemp4").innerHTML = data[13].thai_language;
                document.getElementById("thaibustemp4").innerHTML = data[5].thai_language;
                document.getElementById("thaiparkingtemp4").innerHTML = data[9].thai_language;

                document.getElementById("boat6-1temp4").innerHTML = data[19].thai_language;
                document.getElementById("boat6-2temp4").innerHTML = data[19].eng_language;
                document.getElementById("boat6-3temp4").innerHTML = data[19].chinese_language;
                document.getElementById("boat7-1temp4").innerHTML = data[20].thai_language;
                document.getElementById("boat7-2temp4").innerHTML = data[20].eng_language;
                document.getElementById("boat7-3temp4").innerHTML = data[20].chinese_language;
                document.getElementById("boat8-1temp4").innerHTML = data[22].thai_language;
                document.getElementById("boat8-2temp4").innerHTML = data[22].eng_language;
                document.getElementById("boat8-3temp4").innerHTML = data[22].chinese_language;
                document.getElementById("boat9-1temp4").innerHTML = data[21].thai_language;
                document.getElementById("boat9-2temp4").innerHTML = data[21].eng_language;
                document.getElementById("boat9-3temp4").innerHTML = data[21].chinese_language;

                document.getElementById("boat11-1temp4").innerHTML = data[71].thai_language;
                document.getElementById("boat11-2temp4").innerHTML = data[71].eng_language;
                document.getElementById("boat11-3temp4").innerHTML = data[71].chinese_language;

                document.getElementById("icon1-1temp4").innerHTML = data[1].thai_language;
                document.getElementById("icon1-2temp4").innerHTML = data[1].eng_language;
                document.getElementById("icon1-3temp4").innerHTML = data[1].chinese_language;
                document.getElementById("icon2-1temp4").innerHTML = data[2].thai_language;
                document.getElementById("icon2-2temp4").innerHTML = data[2].eng_language;
                document.getElementById("icon2-3temp4").innerHTML = data[2].chinese_language;

                document.getElementById("text_queuethtemp4").innerHTML = data[46].thai_language;
                document.getElementById("text_queueentemp4").innerHTML = data[46].eng_language;
                document.getElementById("text_queuechtemp4").innerHTML = data[46].chinese_language;
                document.getElementById("text_taxithtemp4").innerHTML = data[47].thai_language;
                document.getElementById("text_taxientemp4").innerHTML = data[47].eng_language;
                document.getElementById("text_taxichtemp4").innerHTML = data[47].chinese_language;

                document.getElementById("text_parkingth1temp4").innerHTML = data[72].thai_language;
                document.getElementById("text_parkingen1temp4").innerHTML = data[72].eng_language;
                document.getElementById("text_parkingch1temp4").innerHTML = data[72].chinese_language;
                document.getElementById("text_parkingth2temp4").innerHTML = data[49].thai_language;
                document.getElementById("text_parkingen2temp4").innerHTML = data[49].eng_language;
                document.getElementById("text_parkingch2temp4").innerHTML = data[49].chinese_language;

                document.getElementById("text_locationth1temp4").innerHTML = data[54].thai_language;
                document.getElementById("text_locationen1temp4").innerHTML = data[54].eng_language;
                document.getElementById("text_locationch1temp4").innerHTML = data[54].chinese_language;
                document.getElementById("text_locationth2temp4").innerHTML = data[55].thai_language;
                document.getElementById("text_locationen2temp4").innerHTML = data[55].eng_language;
                document.getElementById("text_locationch2temp4").innerHTML = data[55].chinese_language;
                document.getElementById("text_locationth3temp4").innerHTML = data[54].thai_language;
                document.getElementById("text_locationen3temp4").innerHTML = data[54].eng_language;
                document.getElementById("text_locationch3temp4").innerHTML = data[54].chinese_language;
                document.getElementById("text_locationth4temp4").innerHTML = data[55].thai_language;
                document.getElementById("text_locationen4temp4").innerHTML = data[55].eng_language;
                document.getElementById("text_locationch4temp4").innerHTML = data[55].chinese_language;

                document.getElementById("text_busth1temp4").innerHTML = data[56].thai_language;
                document.getElementById("text_busen1temp4").innerHTML = data[56].eng_language;
                document.getElementById("text_busch1temp4").innerHTML = data[56].chinese_language;
                document.getElementById("text_busth2temp4").innerHTML = data[56].thai_language;
                document.getElementById("text_busen2temp4").innerHTML = data[56].eng_language;
                document.getElementById("text_busch2temp4").innerHTML = data[56].chinese_language;
                document.getElementById("text_busth3temp4").innerHTML = data[56].thai_language;
                document.getElementById("text_busen3temp4").innerHTML = data[56].eng_language;
                document.getElementById("text_busch3temp4").innerHTML = data[56].chinese_language;

                document.getElementById("text_boatth1temp4").innerHTML = data[56].thai_language;
                document.getElementById("text_boaten1temp4").innerHTML = data[56].eng_language;
                document.getElementById("text_boatch1temp4").innerHTML = data[56].chinese_language;
                document.getElementById("text_boatexth1temp4").innerHTML = data[56].thai_language;
                document.getElementById("text_boatexen1temp4").innerHTML = data[56].eng_language;
                document.getElementById("text_boatexch1temp4").innerHTML = data[56].chinese_language;
                document.getElementById("text_boatexth1-1temp4").innerHTML = data[56].thai_language;
                document.getElementById("text_boatexen1-1temp4").innerHTML = data[56].eng_language;
                document.getElementById("text_boatexch1-1temp4").innerHTML = data[56].chinese_language;

                document.getElementById("text_taxith1temp4").innerHTML = data[42].thai_language;
                document.getElementById("text_taxien1temp4").innerHTML = data[42].eng_language;
                document.getElementById("text_taxich1temp4").innerHTML = data[42].chinese_language;
                document.getElementById("text_taxith2temp4").innerHTML = data[44].thai_language;
                document.getElementById("text_taxien2temp4").innerHTML = data[44].eng_language;
                document.getElementById("text_taxich2temp4").innerHTML = data[44].chinese_language;
                document.getElementById("text_queueth1temp4").innerHTML = data[43].thai_language;
                document.getElementById("text_queueen1temp4").innerHTML = data[43].eng_language;
                document.getElementById("text_queuech1temp4").innerHTML = data[43].chinese_language;
                document.getElementById("text_queueth2temp4").innerHTML = data[45].thai_language;
                document.getElementById("text_queueen2temp4").innerHTML = data[45].eng_language;
                document.getElementById("text_queuech2temp4").innerHTML = data[45].chinese_language;

                document.getElementById("line_btsth1temp4").innerHTML = data[50].thai_language;
                document.getElementById("line_btsen1temp4").innerHTML = data[50].eng_language;
                document.getElementById("line_btsch1temp4").innerHTML = data[50].chinese_language;
                document.getElementById("line_btsth2temp4").innerHTML = data[53].thai_language;
                document.getElementById("line_btsen2temp4").innerHTML = data[53].eng_language;
                document.getElementById("line_btsch2temp4").innerHTML = data[53].chinese_language;
                document.getElementById("line_btsth3temp4").innerHTML = data[52].thai_language;
                document.getElementById("line_btsen3temp4").innerHTML = data[52].eng_language;
                document.getElementById("line_btsch3temp4").innerHTML = data[52].chinese_language;
                document.getElementById("line_btsth4temp4").innerHTML = data[51].thai_language;
                document.getElementById("line_btsen4temp4").innerHTML = data[51].eng_language;
                document.getElementById("line_btsch4temp4").innerHTML = data[51].chinese_language;

                document.getElementById("building1-1temp4").innerHTML = data[16].thai_language;
                document.getElementById("building1-2temp4").innerHTML = data[16].eng_language;
                document.getElementById("building1-3temp4").innerHTML = data[16].chinese_language;
                document.getElementById("building2-1temp4").innerHTML = data[15].thai_language;
                document.getElementById("building2-2temp4").innerHTML = data[15].eng_language;
                document.getElementById("building2-3temp4").innerHTML = data[15].chinese_language;
                document.getElementById("building3-1temp4").innerHTML = data[16].thai_language;
                document.getElementById("building3-2temp4").innerHTML = data[16].eng_language;
                document.getElementById("building3-3temp4").innerHTML = data[16].chinese_language;

                document.getElementById("englishboattemp4").innerHTML = data[12].eng_language;
                document.getElementById("englishbtstemp4").innerHTML = data[14].eng_language;
                document.getElementById("englishtaxitemp4").innerHTML = data[8].eng_language;
                document.getElementById("englishboatextemp4").innerHTML = data[13].eng_language;
                document.getElementById("englishbustemp4").innerHTML = data[5].eng_language;
                document.getElementById("englishparkingtemp4").innerHTML = data[9].eng_language;

                document.getElementById("chineseboattemp4").innerHTML = data[12].chinese_language;
                document.getElementById("chinesebtstemp4").innerHTML = data[14].chinese_language;
                document.getElementById("chinesetaxitemp4").innerHTML = data[8].chinese_language;
                document.getElementById("chineseboatextemp4").innerHTML = data[13].chinese_language;
                document.getElementById("chinesebustemp4").innerHTML = data[5].chinese_language;
                document.getElementById("chineseparkingtemp4").innerHTML = data[9].chinese_language;

                //----------------------------------------------------------------------------------5------------------------------------------------------------------------------------------------------
                document.getElementById("thaiboattemp5").innerHTML = data[12].thai_language;
                document.getElementById("thaibtstemp5").innerHTML = data[14].thai_language;
                document.getElementById("thaitaxitemp5").innerHTML = data[8].thai_language;
                document.getElementById("thaiboatextemp5").innerHTML = data[13].thai_language;
                document.getElementById("thaibustemp5").innerHTML = data[5].thai_language;
                document.getElementById("thaiparkingtemp5").innerHTML = data[9].thai_language;

                document.getElementById("boat6-1temp5").innerHTML = data[19].thai_language;
                document.getElementById("boat6-2temp5").innerHTML = data[19].eng_language;
                document.getElementById("boat6-3temp5").innerHTML = data[19].chinese_language;
                document.getElementById("boat7-1temp5").innerHTML = data[20].thai_language;
                document.getElementById("boat7-2temp5").innerHTML = data[20].eng_language;
                document.getElementById("boat7-3temp5").innerHTML = data[20].chinese_language;
                document.getElementById("boat8-1temp5").innerHTML = data[22].thai_language;
                document.getElementById("boat8-2temp5").innerHTML = data[22].eng_language;
                document.getElementById("boat8-3temp5").innerHTML = data[22].chinese_language;
                document.getElementById("boat9-1temp5").innerHTML = data[21].thai_language;
                document.getElementById("boat9-2temp5").innerHTML = data[21].eng_language;
                document.getElementById("boat9-3temp5").innerHTML = data[21].chinese_language;

                document.getElementById("boat11-1temp5").innerHTML = data[71].thai_language;
                document.getElementById("boat11-2temp5").innerHTML = data[71].eng_language;
                document.getElementById("boat11-3temp5").innerHTML = data[71].chinese_language;

                document.getElementById("icon1-1temp5").innerHTML = data[1].thai_language;
                document.getElementById("icon1-2temp5").innerHTML = data[1].eng_language;
                document.getElementById("icon1-3temp5").innerHTML = data[1].chinese_language;
                document.getElementById("icon2-1temp5").innerHTML = data[2].thai_language;
                document.getElementById("icon2-2temp5").innerHTML = data[2].eng_language;
                document.getElementById("icon2-3temp5").innerHTML = data[2].chinese_language;

                document.getElementById("text_queuethtemp5").innerHTML = data[46].thai_language;
                document.getElementById("text_queueentemp5").innerHTML = data[46].eng_language;
                document.getElementById("text_queuechtemp5").innerHTML = data[46].chinese_language;
                document.getElementById("text_taxithtemp5").innerHTML = data[47].thai_language;
                document.getElementById("text_taxientemp5").innerHTML = data[47].eng_language;
                document.getElementById("text_taxichtemp5").innerHTML = data[47].chinese_language;

                document.getElementById("text_parkingth1temp5").innerHTML = data[72].thai_language;
                document.getElementById("text_parkingen1temp5").innerHTML = data[72].eng_language;
                document.getElementById("text_parkingch1temp5").innerHTML = data[72].chinese_language;
                document.getElementById("text_parkingth2temp5").innerHTML = data[49].thai_language;
                document.getElementById("text_parkingen2temp5").innerHTML = data[49].eng_language;
                document.getElementById("text_parkingch2temp5").innerHTML = data[49].chinese_language;

                document.getElementById("text_locationth1temp5").innerHTML = data[54].thai_language;
                document.getElementById("text_locationen1temp5").innerHTML = data[54].eng_language;
                document.getElementById("text_locationch1temp5").innerHTML = data[54].chinese_language;
                document.getElementById("text_locationth2temp5").innerHTML = data[55].thai_language;
                document.getElementById("text_locationen2temp5").innerHTML = data[55].eng_language;
                document.getElementById("text_locationch2temp5").innerHTML = data[55].chinese_language;
                document.getElementById("text_locationth3temp5").innerHTML = data[54].thai_language;
                document.getElementById("text_locationen3temp5").innerHTML = data[54].eng_language;
                document.getElementById("text_locationch3temp5").innerHTML = data[54].chinese_language;
                document.getElementById("text_locationth4temp5").innerHTML = data[55].thai_language;
                document.getElementById("text_locationen4temp5").innerHTML = data[55].eng_language;
                document.getElementById("text_locationch4temp5").innerHTML = data[55].chinese_language;

                document.getElementById("text_busth1temp5").innerHTML = data[56].thai_language;
                document.getElementById("text_busen1temp5").innerHTML = data[56].eng_language;
                document.getElementById("text_busch1temp5").innerHTML = data[56].chinese_language;
                document.getElementById("text_busth2temp5").innerHTML = data[56].thai_language;
                document.getElementById("text_busen2temp5").innerHTML = data[56].eng_language;
                document.getElementById("text_busch2temp5").innerHTML = data[56].chinese_language;
                document.getElementById("text_busth3temp5").innerHTML = data[56].thai_language;
                document.getElementById("text_busen3temp5").innerHTML = data[56].eng_language;
                document.getElementById("text_busch3temp5").innerHTML = data[56].chinese_language;

                document.getElementById("text_boatth1temp5").innerHTML = data[56].thai_language;
                document.getElementById("text_boaten1temp5").innerHTML = data[56].eng_language;
                document.getElementById("text_boatch1temp5").innerHTML = data[56].chinese_language;
                document.getElementById("text_boatexth1temp5").innerHTML = data[56].thai_language;
                document.getElementById("text_boatexen1temp5").innerHTML = data[56].eng_language;
                document.getElementById("text_boatexch1temp5").innerHTML = data[56].chinese_language;
                document.getElementById("text_boatexth1-1temp5").innerHTML = data[56].thai_language;
                document.getElementById("text_boatexen1-1temp5").innerHTML = data[56].eng_language;
                document.getElementById("text_boatexch1-1temp5").innerHTML = data[56].chinese_language;

                document.getElementById("text_taxith1temp5").innerHTML = data[42].thai_language;
                document.getElementById("text_taxien1temp5").innerHTML = data[42].eng_language;
                document.getElementById("text_taxich1temp5").innerHTML = data[42].chinese_language;
                document.getElementById("text_taxith2temp5").innerHTML = data[44].thai_language;
                document.getElementById("text_taxien2temp5").innerHTML = data[44].eng_language;
                document.getElementById("text_taxich2temp5").innerHTML = data[44].chinese_language;
                document.getElementById("text_queueth1temp5").innerHTML = data[43].thai_language;
                document.getElementById("text_queueen1temp5").innerHTML = data[43].eng_language;
                document.getElementById("text_queuech1temp5").innerHTML = data[43].chinese_language;
                document.getElementById("text_queueth2temp5").innerHTML = data[45].thai_language;
                document.getElementById("text_queueen2temp5").innerHTML = data[45].eng_language;
                document.getElementById("text_queuech2temp5").innerHTML = data[45].chinese_language;

                document.getElementById("line_btsth1temp5").innerHTML = data[50].thai_language;
                document.getElementById("line_btsen1temp5").innerHTML = data[50].eng_language;
                document.getElementById("line_btsch1temp5").innerHTML = data[50].chinese_language;
                document.getElementById("line_btsth2temp5").innerHTML = data[53].thai_language;
                document.getElementById("line_btsen2temp5").innerHTML = data[53].eng_language;
                document.getElementById("line_btsch2temp5").innerHTML = data[53].chinese_language;
                document.getElementById("line_btsth3temp5").innerHTML = data[52].thai_language;
                document.getElementById("line_btsen3temp5").innerHTML = data[52].eng_language;
                document.getElementById("line_btsch3temp5").innerHTML = data[52].chinese_language;
                document.getElementById("line_btsth4temp5").innerHTML = data[51].thai_language;
                document.getElementById("line_btsen4temp5").innerHTML = data[51].eng_language;
                document.getElementById("line_btsch4temp5").innerHTML = data[51].chinese_language;

                document.getElementById("building1-1temp5").innerHTML = data[16].thai_language;
                document.getElementById("building1-2temp5").innerHTML = data[16].eng_language;
                document.getElementById("building1-3temp5").innerHTML = data[16].chinese_language;
                document.getElementById("building2-1temp5").innerHTML = data[15].thai_language;
                document.getElementById("building2-2temp5").innerHTML = data[15].eng_language;
                document.getElementById("building2-3temp5").innerHTML = data[15].chinese_language;
                document.getElementById("building3-1temp5").innerHTML = data[16].thai_language;
                document.getElementById("building3-2temp5").innerHTML = data[16].eng_language;
                document.getElementById("building3-3temp5").innerHTML = data[16].chinese_language;

                document.getElementById("englishboattemp5").innerHTML = data[12].eng_language;
                document.getElementById("englishbtstemp5").innerHTML = data[14].eng_language;
                document.getElementById("englishtaxitemp5").innerHTML = data[8].eng_language;
                document.getElementById("englishboatextemp5").innerHTML = data[13].eng_language;
                document.getElementById("englishbustemp5").innerHTML = data[5].eng_language;
                document.getElementById("englishparkingtemp5").innerHTML = data[9].eng_language;

                document.getElementById("chineseboattemp5").innerHTML = data[12].chinese_language;
                document.getElementById("chinesebtstemp5").innerHTML = data[14].chinese_language;
                document.getElementById("chinesetaxitemp5").innerHTML = data[8].chinese_language;
                document.getElementById("chineseboatextemp5").innerHTML = data[13].chinese_language;
                document.getElementById("chinesebustemp5").innerHTML = data[5].chinese_language;
                document.getElementById("chineseparkingtemp5").innerHTML = data[9].chinese_language;

                //----------------------------------------------------------------------------------5------------------------------------------------------------------------------------------------------
                document.getElementById("thaiboattemp6").innerHTML = data[12].thai_language;
                document.getElementById("thaibtstemp6").innerHTML = data[14].thai_language;
                document.getElementById("thaitaxitemp6").innerHTML = data[8].thai_language;
                document.getElementById("thaiboatextemp6").innerHTML = data[13].thai_language;
                document.getElementById("thaibustemp6").innerHTML = data[5].thai_language;
                document.getElementById("thaiparkingtemp6").innerHTML = data[9].thai_language;

                document.getElementById("boat6-1temp6").innerHTML = data[19].thai_language;
                document.getElementById("boat6-2temp6").innerHTML = data[19].eng_language;
                document.getElementById("boat6-3temp6").innerHTML = data[19].chinese_language;
                document.getElementById("boat7-1temp6").innerHTML = data[20].thai_language;
                document.getElementById("boat7-2temp6").innerHTML = data[20].eng_language;
                document.getElementById("boat7-3temp6").innerHTML = data[20].chinese_language;
                document.getElementById("boat8-1temp6").innerHTML = data[22].thai_language;
                document.getElementById("boat8-2temp6").innerHTML = data[22].eng_language;
                document.getElementById("boat8-3temp6").innerHTML = data[22].chinese_language;
                document.getElementById("boat9-1temp6").innerHTML = data[21].thai_language;
                document.getElementById("boat9-2temp6").innerHTML = data[21].eng_language;
                document.getElementById("boat9-3temp6").innerHTML = data[21].chinese_language;

                document.getElementById("boat11-1temp6").innerHTML = data[71].thai_language;
                document.getElementById("boat11-2temp6").innerHTML = data[71].eng_language;
                document.getElementById("boat11-3temp6").innerHTML = data[71].chinese_language;

                document.getElementById("icon1-1temp6").innerHTML = data[1].thai_language;
                document.getElementById("icon1-2temp6").innerHTML = data[1].eng_language;
                document.getElementById("icon1-3temp6").innerHTML = data[1].chinese_language;
                document.getElementById("icon2-1temp6").innerHTML = data[2].thai_language;
                document.getElementById("icon2-2temp6").innerHTML = data[2].eng_language;
                document.getElementById("icon2-3temp6").innerHTML = data[2].chinese_language;

                document.getElementById("text_queuethtemp6").innerHTML = data[46].thai_language;
                document.getElementById("text_queueentemp6").innerHTML = data[46].eng_language;
                document.getElementById("text_queuechtemp6").innerHTML = data[46].chinese_language;
                document.getElementById("text_taxithtemp6").innerHTML = data[47].thai_language;
                document.getElementById("text_taxientemp6").innerHTML = data[47].eng_language;
                document.getElementById("text_taxichtemp6").innerHTML = data[47].chinese_language;

                document.getElementById("text_parkingth1temp6").innerHTML = data[72].thai_language;
                document.getElementById("text_parkingen1temp6").innerHTML = data[72].eng_language;
                document.getElementById("text_parkingch1temp6").innerHTML = data[2].chinese_language;
                document.getElementById("text_parkingth2temp6").innerHTML = data[49].thai_language;
                document.getElementById("text_parkingen2temp6").innerHTML = data[49].eng_language;
                document.getElementById("text_parkingch2temp6").innerHTML = data[49].chinese_language;

                document.getElementById("text_locationth1temp6").innerHTML = data[54].thai_language;
                document.getElementById("text_locationen1temp6").innerHTML = data[54].eng_language;
                document.getElementById("text_locationch1temp6").innerHTML = data[54].chinese_language;
                document.getElementById("text_locationth2temp6").innerHTML = data[55].thai_language;
                document.getElementById("text_locationen2temp6").innerHTML = data[55].eng_language;
                document.getElementById("text_locationch2temp6").innerHTML = data[55].chinese_language;
                document.getElementById("text_locationth3temp6").innerHTML = data[54].thai_language;
                document.getElementById("text_locationen3temp6").innerHTML = data[54].eng_language;
                document.getElementById("text_locationch3temp6").innerHTML = data[54].chinese_language;
                document.getElementById("text_locationth4temp6").innerHTML = data[55].thai_language;
                document.getElementById("text_locationen4temp6").innerHTML = data[55].eng_language;
                document.getElementById("text_locationch4temp6").innerHTML = data[55].chinese_language;

                document.getElementById("text_busth1temp6").innerHTML = data[56].thai_language;
                document.getElementById("text_busen1temp6").innerHTML = data[56].eng_language;
                document.getElementById("text_busch1temp6").innerHTML = data[56].chinese_language;
                document.getElementById("text_busth2temp6").innerHTML = data[56].thai_language;
                document.getElementById("text_busen2temp6").innerHTML = data[56].eng_language;
                document.getElementById("text_busch2temp6").innerHTML = data[56].chinese_language;
                document.getElementById("text_busth3temp6").innerHTML = data[56].thai_language;
                document.getElementById("text_busen3temp6").innerHTML = data[56].eng_language;
                document.getElementById("text_busch3temp6").innerHTML = data[56].chinese_language;

                document.getElementById("text_boatth1temp6").innerHTML = data[56].thai_language;
                document.getElementById("text_boaten1temp6").innerHTML = data[56].eng_language;
                document.getElementById("text_boatch1temp6").innerHTML = data[56].chinese_language;
                document.getElementById("text_boatexth1temp6").innerHTML = data[56].thai_language;
                document.getElementById("text_boatexen1temp6").innerHTML = data[56].eng_language;
                document.getElementById("text_boatexch1temp6").innerHTML = data[56].chinese_language;
                document.getElementById("text_boatexth1-1temp6").innerHTML = data[56].thai_language;
                document.getElementById("text_boatexen1-1temp6").innerHTML = data[56].eng_language;
                document.getElementById("text_boatexch1-1temp6").innerHTML = data[56].chinese_language;

                document.getElementById("text_taxith1temp6").innerHTML = data[42].thai_language;
                document.getElementById("text_taxien1temp6").innerHTML = data[42].eng_language;
                document.getElementById("text_taxich1temp6").innerHTML = data[42].chinese_language;
                document.getElementById("text_taxith2temp6").innerHTML = data[44].thai_language;
                document.getElementById("text_taxien2temp6").innerHTML = data[44].eng_language;
                document.getElementById("text_taxich2temp6").innerHTML = data[44].chinese_language;
                document.getElementById("text_queueth1temp6").innerHTML = data[43].thai_language;
                document.getElementById("text_queueen1temp6").innerHTML = data[43].eng_language;
                document.getElementById("text_queuech1temp6").innerHTML = data[43].chinese_language;
                document.getElementById("text_queueth2temp6").innerHTML = data[45].thai_language;
                document.getElementById("text_queueen2temp6").innerHTML = data[45].eng_language;
                document.getElementById("text_queuech2temp6").innerHTML = data[45].chinese_language;

                document.getElementById("line_btsth1temp6").innerHTML = data[50].thai_language;
                document.getElementById("line_btsen1temp6").innerHTML = data[50].eng_language;
                document.getElementById("line_btsch1temp6").innerHTML = data[50].chinese_language;
                document.getElementById("line_btsth2temp6").innerHTML = data[53].thai_language;
                document.getElementById("line_btsen2temp6").innerHTML = data[53].eng_language;
                document.getElementById("line_btsch2temp6").innerHTML = data[53].chinese_language;
                document.getElementById("line_btsth3temp6").innerHTML = data[52].thai_language;
                document.getElementById("line_btsen3temp6").innerHTML = data[52].eng_language;
                document.getElementById("line_btsch3temp6").innerHTML = data[52].chinese_language;
                document.getElementById("line_btsth4temp6").innerHTML = data[51].thai_language;
                document.getElementById("line_btsen4temp6").innerHTML = data[51].eng_language;
                document.getElementById("line_btsch4temp6").innerHTML = data[51].chinese_language;

                document.getElementById("building1-1temp6").innerHTML = data[16].thai_language;
                document.getElementById("building1-2temp6").innerHTML = data[16].eng_language;
                document.getElementById("building1-3temp6").innerHTML = data[16].chinese_language;
                document.getElementById("building2-1temp6").innerHTML = data[15].thai_language;
                document.getElementById("building2-2temp6").innerHTML = data[15].eng_language;
                document.getElementById("building2-3temp6").innerHTML = data[15].chinese_language;
                document.getElementById("building3-1temp6").innerHTML = data[16].thai_language;
                document.getElementById("building3-2temp6").innerHTML = data[16].eng_language;
                document.getElementById("building3-3temp6").innerHTML = data[16].chinese_language;

                document.getElementById("englishboattemp6").innerHTML = data[12].eng_language;
                document.getElementById("englishbtstemp6").innerHTML = data[14].eng_language;
                document.getElementById("englishtaxitemp6").innerHTML = data[8].eng_language;
                document.getElementById("englishboatextemp6").innerHTML = data[13].eng_language;
                document.getElementById("englishbustemp6").innerHTML = data[5].eng_language;
                document.getElementById("englishparkingtemp6").innerHTML = data[9].eng_language;

                document.getElementById("chineseboattemp6").innerHTML = data[12].chinese_language;
                document.getElementById("chinesebtstemp6").innerHTML = data[14].chinese_language;
                document.getElementById("chinesetaxitemp6").innerHTML = data[8].chinese_language;
                document.getElementById("chineseboatextemp6").innerHTML = data[13].chinese_language;
                document.getElementById("chinesebustemp6").innerHTML = data[5].chinese_language;
                document.getElementById("chineseparkingtemp6").innerHTML = data[9].chinese_language;

                //changeLanguath();
                //languageth();
                Timelanguage();

            } else {
                console.log("No data received");
            }

        },
        error: function (textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}
function Timelanguage() {
    var data = {

    };
    $.ajax({
        type: "POST",
        url: $("#startdate").val(),
        headers: { "content-type": "application/json" },
        type: "POST",
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            console.log(data);
            if (data != '') {
                var time = data[0].time_language;
                //var time = 50;
            }
            changlanguage(time);
        },
        error: function (textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}

function changeLanguage(time) {
    document.getElementById("thaiboat").style.display = "block";
    document.getElementById("thaibts").style.display = "block";
    document.getElementById("thaitaxi").style.display = "block";
    document.getElementById("thaiboatex").style.display = "block";
    document.getElementById("thaibus").style.display = "block";
    document.getElementById("thaiparking").style.display = "block";
    document.getElementById("boat1-1").style.display = "block";
    document.getElementById("boat2-1").style.display = "block";
    document.getElementById("boat3-1").style.display = "block";
    document.getElementById("boat4-1").style.display = "block";
    document.getElementById("boat5-1").style.display = "block";
    document.getElementById("building1-1").style.display = "block";
    document.getElementById("building2-1").style.display = "block";
    document.getElementById("building3-1").style.display = "block";
    document.getElementById("icon1-1").style.display = "block";
    document.getElementById("icon2-1").style.display = "block";
    document.getElementById("bts_th1").style.display = "block";
    document.getElementById("bts_th").style.display = "block";
    document.getElementById("popupth").style.display = "block";
    document.getElementById("boatth3").style.display = "block";
    document.getElementById("boatth4").style.display = "block";
    document.getElementById("boatth5").style.display = "block";
    document.getElementById("boatth6").style.display = "block";
    document.getElementById("text_queueth").style.display = "block";
    document.getElementById("text_taxith").style.display = "block";
    document.getElementById("text_parkingth1").style.display = "block";
    document.getElementById("text_parkingth2").style.display = "block";
    document.getElementById("text_locationth1").style.display = "block";
    document.getElementById("text_locationth2").style.display = "block";
    document.getElementById("text_locationth3").style.display = "block";
    document.getElementById("text_locationth4").style.display = "block";
    document.getElementById("text_busth1").style.display = "block";
    document.getElementById("text_busth2").style.display = "block";
    document.getElementById("text_busth3").style.display = "block";
    document.getElementById("line_btsth1").style.display = "block";
    document.getElementById("line_btsth2").style.display = "block";
    document.getElementById("line_btsth3").style.display = "block";
    document.getElementById("line_btsth4").style.display = "block";
    document.getElementById("text_boatexth1").style.display = "block";
    document.getElementById("text_boatexth1-1").style.display = "block";
    document.getElementById("text_boatth1").style.display = "block";
    document.getElementById("text_taxith1").style.display = "block";
    document.getElementById("text_taxith2").style.display = "block";
    document.getElementById("text_queueth1").style.display = "block";
    document.getElementById("text_queueth2").style.display = "block";
    document.getElementById("text_boatth4").style.display = "block";
    document.getElementById("text_boatth2").style.display = "block";
    document.getElementById("text_boatth3").style.display = "block";
    document.getElementById("boatth1").style.display = "block";
    document.getElementById("boatth2").style.display = "block";
    document.getElementById("boatexth1").style.display = "block";
    document.getElementById("boatexth2").style.display = "block";
    document.getElementById("boatexth3").style.display = "block";
    document.getElementById("boatexth4").style.display = "block";
    document.getElementById("boatexth5").style.display = "block";
    document.getElementById("boatexth6").style.display = "block";
    document.getElementById("boatexth7").style.display = "block";
    document.getElementById("boatexth8").style.display = "block";
    document.getElementById("boatexth9").style.display = "block";
    document.getElementById("boatexth10").style.display = "block";
    document.getElementById("boatexth13").style.display = "block";
    document.getElementById("boatexth14").style.display = "block";
    document.getElementById("boatexth15").style.display = "block";
    document.getElementById("boatexth16").style.display = "block";
    document.getElementById("boatexth17").style.display = "block";
    document.getElementById("boatexth18").style.display = "block";
    document.getElementById("informationth1").style.display = "block";
    document.getElementById("informationth1temp2").style.display = "block";
    document.getElementById("informationth1temp3").style.display = "block";
    document.getElementById("informationth1temp4").style.display = "block";
    document.getElementById("informationth1temp5").style.display = "block";
    document.getElementById("informationth1temp6").style.display = "block";
    document.getElementById("informationth2").style.display = "block";
    document.getElementById("informationth2temp2").style.display = "block";
    document.getElementById("informationth2temp3").style.display = "block";
    document.getElementById("informationth2temp4").style.display = "block";
    document.getElementById("informationth2temp5").style.display = "block";
    document.getElementById("informationth2temp6").style.display = "block";
    document.getElementById("informationth3").style.display = "block";
    document.getElementById("informationth3temp2").style.display = "block";
    document.getElementById("informationth3temp3").style.display = "block";
    document.getElementById("informationth3temp4").style.display = "block";
    document.getElementById("informationth3temp5").style.display = "block";
    document.getElementById("informationth3temp6").style.display = "block";
    document.getElementById("informationth4").style.display = "block";
    document.getElementById("informationth4temp2").style.display = "block";
    document.getElementById("informationth4temp3").style.display = "block";
    document.getElementById("informationth4temp4").style.display = "block";
    document.getElementById("informationth4temp5").style.display = "block";
    document.getElementById("informationth4temp6").style.display = "block";
    document.getElementById("informationth5").style.display = "block";
    document.getElementById("informationth5temp2").style.display = "block";
    document.getElementById("informationth5temp3").style.display = "block";
    document.getElementById("informationth5temp4").style.display = "block";
    document.getElementById("informationth5temp5").style.display = "block";
    document.getElementById("informationth5temp6").style.display = "block";
    document.getElementById("informationth6").style.display = "block";
    document.getElementById("informationth6temp2").style.display = "block";
    document.getElementById("informationth6temp3").style.display = "block";
    document.getElementById("informationth6temp4").style.display = "block";
    document.getElementById("informationth6temp5").style.display = "block";
    document.getElementById("informationth6temp6").style.display = "block";
    document.getElementById("datesth").style.display = "block";
    document.getElementById("buildingcarth1").style.display = "block";
    document.getElementById("buildingcarth2").style.display = "block";
    document.getElementById("buildingcarth3").style.display = "block";
    document.getElementById("buildingcarth1temp2").style.display = "block";
    document.getElementById("buildingcarth2temp2").style.display = "block";
    document.getElementById("buildingcarth3temp2").style.display = "block";
    document.getElementById("buildingcarth1temp3").style.display = "block";
    document.getElementById("buildingcarth2temp3").style.display = "block";
    document.getElementById("buildingcarth3temp3").style.display = "block";
    document.getElementById("buildingcarth1temp4").style.display = "block";
    document.getElementById("buildingcarth2temp4").style.display = "block";
    document.getElementById("buildingcarth3temp4").style.display = "block";
    document.getElementById("buildingcarth1temp5").style.display = "block";
    document.getElementById("buildingcarth2temp5").style.display = "block";
    document.getElementById("buildingcarth3temp5").style.display = "block";
    document.getElementById("buildingcarth1temp6").style.display = "block";
    document.getElementById("buildingcarth2temp6").style.display = "block";
    document.getElementById("buildingcarth3temp6").style.display = "block";
    document.getElementById("station_busth1temp2").style.display = "block";
    document.getElementById("station_busth2temp2").style.display = "block";
    document.getElementById("station_busth3temp2").style.display = "block";
    document.getElementById("station_busth4temp2").style.display = "block";
    document.getElementById("stationics_busth1temp2").style.display = "block";
    document.getElementById("stationics_busth2temp2").style.display = "block";
    document.getElementById("stationics_busth3temp2").style.display = "block";
    document.getElementById("stationics_busth4temp2").style.display = "block";

    document.getElementById("englishboat").style.display = "none";
    document.getElementById("englishbts").style.display = "none";
    document.getElementById("englishtaxi").style.display = "none";
    document.getElementById("englishboatex").style.display = "none";
    document.getElementById("englishbus").style.display = "none";
    document.getElementById("englishparking").style.display = "none";
    document.getElementById("boat3-2").style.display = "none";
    document.getElementById("boat6-2").style.display = "none";
    document.getElementById("boat7-2").style.display = "none";
    document.getElementById("boat8-2").style.display = "none";
    document.getElementById("boat9-2").style.display = "none";
    document.getElementById("boat11-2").style.display = "none";
    document.getElementById("building1-2").style.display = "none";
    document.getElementById("building2-2").style.display = "none";
    document.getElementById("building3-2").style.display = "none";
    document.getElementById("icon1-2").style.display = "none";
    document.getElementById("icon2-2").style.display = "none";
    document.getElementById("popupen").style.display = "none";
    document.getElementById("boaten3").style.display = "none";
    document.getElementById("boaten4").style.display = "none";
    document.getElementById("boaten5").style.display = "none";
    document.getElementById("boaten6").style.display = "none";
    document.getElementById("text_queueen").style.display = "none";
    document.getElementById("text_taxien").style.display = "none";
    document.getElementById("text_parkingen1").style.display = "none";
    document.getElementById("text_parkingen2").style.display = "none";
    document.getElementById("text_locationen1").style.display = "none";
    document.getElementById("text_locationen2").style.display = "none";
    document.getElementById("text_locationen3").style.display = "none";
    document.getElementById("text_locationen4").style.display = "none";
    document.getElementById("text_busen1").style.display = "none";
    document.getElementById("text_busen2").style.display = "none";
    document.getElementById("text_busen3").style.display = "none";
    document.getElementById("line_btsen1").style.display = "none";
    document.getElementById("line_btsen2").style.display = "none";
    document.getElementById("line_btsen3").style.display = "none";
    document.getElementById("line_btsen4").style.display = "none";
    document.getElementById("text_boatexen1").style.display = "none";
    document.getElementById("text_boatexen1-1").style.display = "none";
    document.getElementById("text_boaten1").style.display = "none";
    document.getElementById("text_taxien1").style.display = "none";
    document.getElementById("text_taxien2").style.display = "none";
    document.getElementById("text_queueen1").style.display = "none";
    document.getElementById("text_queueen2").style.display = "none";
    document.getElementById("boaten1").style.display = "none";
    document.getElementById("boaten2").style.display = "none";
    document.getElementById("boatexen13").style.display = "none";
    document.getElementById("boatexen14").style.display = "none";
    document.getElementById("boatexen15").style.display = "none";
    document.getElementById("boatexen16").style.display = "none";
    document.getElementById("boatexen17").style.display = "none";
    document.getElementById("boatexen18").style.display = "none";
    document.getElementById("informationen1").style.display = "none";
    document.getElementById("informationen1temp2").style.display = "none";
    document.getElementById("informationen1temp3").style.display = "none";
    document.getElementById("informationen1temp4").style.display = "none";
    document.getElementById("informationen1temp5").style.display = "none";
    document.getElementById("informationen1temp6").style.display = "none";
    document.getElementById("informationen2").style.display = "none";
    document.getElementById("informationen2temp2").style.display = "none";
    document.getElementById("informationen2temp3").style.display = "none";
    document.getElementById("informationen2temp4").style.display = "none";
    document.getElementById("informationen2temp5").style.display = "none";
    document.getElementById("informationen2temp6").style.display = "none";
    document.getElementById("informationen3").style.display = "none";
    document.getElementById("informationen3temp2").style.display = "none";
    document.getElementById("informationen3temp3").style.display = "none";
    document.getElementById("informationen3temp4").style.display = "none";
    document.getElementById("informationen3temp5").style.display = "none";
    document.getElementById("informationen3temp6").style.display = "none";
    document.getElementById("informationen4").style.display = "none";
    document.getElementById("informationen4temp2").style.display = "none";
    document.getElementById("informationen4temp3").style.display = "none";
    document.getElementById("informationen4temp4").style.display = "none";
    document.getElementById("informationen4temp5").style.display = "none";
    document.getElementById("informationen4temp6").style.display = "none";
    document.getElementById("informationen5").style.display = "none";
    document.getElementById("informationen5temp2").style.display = "none";
    document.getElementById("informationen5temp3").style.display = "none";
    document.getElementById("informationen5temp4").style.display = "none";
    document.getElementById("informationen5temp5").style.display = "none";
    document.getElementById("informationen5temp6").style.display = "none";
    document.getElementById("informationen6").style.display = "none";
    document.getElementById("informationen6temp2").style.display = "none";
    document.getElementById("informationen6temp3").style.display = "none";
    document.getElementById("informationen6temp4").style.display = "none";
    document.getElementById("informationen6temp5").style.display = "none";
    document.getElementById("informationen6temp6").style.display = "none";
    document.getElementById("datesen").style.display = "none";
    document.getElementById("buildingcaren1").style.display = "none";
    document.getElementById("buildingcaren2").style.display = "none";
    document.getElementById("buildingcaren3").style.display = "none";
    document.getElementById("buildingcaren1temp2").style.display = "none";
    document.getElementById("buildingcaren2temp2").style.display = "none";
    document.getElementById("buildingcaren3temp2").style.display = "none";
    document.getElementById("buildingcaren1temp3").style.display = "none";
    document.getElementById("buildingcaren2temp3").style.display = "none";
    document.getElementById("buildingcaren3temp3").style.display = "none";
    document.getElementById("buildingcaren1temp4").style.display = "none";
    document.getElementById("buildingcaren2temp4").style.display = "none";
    document.getElementById("buildingcaren3temp4").style.display = "none";
    document.getElementById("buildingcaren1temp5").style.display = "none";
    document.getElementById("buildingcaren2temp5").style.display = "none";
    document.getElementById("buildingcaren3temp5").style.display = "none";
    document.getElementById("buildingcaren1temp6").style.display = "none";
    document.getElementById("buildingcaren2temp6").style.display = "none";
    document.getElementById("buildingcaren3temp6").style.display = "none";
    document.getElementById("station_busen1temp2").style.display = "none";
    document.getElementById("station_busen2temp2").style.display = "none";
    document.getElementById("station_busen3temp2").style.display = "none";
    document.getElementById("station_busen4temp2").style.display = "none";
    document.getElementById("stationics_busen1temp2").style.display = "none";
    document.getElementById("stationics_busen2temp2").style.display = "none";
    document.getElementById("stationics_busen3temp2").style.display = "none";
    document.getElementById("stationics_busen4temp2").style.display = "none";

    document.getElementById("chineseboat").style.display = "none";
    document.getElementById("chinesebts").style.display = "none";
    document.getElementById("chinesetaxi").style.display = "none";
    document.getElementById("chineseboatex").style.display = "none";
    document.getElementById("chinesebus").style.display = "none";
    document.getElementById("chineseparking").style.display = "none";
    document.getElementById("boat3-3").style.display = "none";
    document.getElementById("boat6-3").style.display = "none";
    document.getElementById("boat7-3").style.display = "none";
    document.getElementById("boat8-3").style.display = "none";
    document.getElementById("boat9-3").style.display = "none";
    document.getElementById("boat11-3").style.display = "none";
    document.getElementById("building1-3").style.display = "none";
    document.getElementById("building2-3").style.display = "none";
    document.getElementById("building3-3").style.display = "none";
    document.getElementById("icon1-3").style.display = "none";
    document.getElementById("icon2-3").style.display = "none";
    document.getElementById("popupchi").style.display = "none";
    document.getElementById("boatch3").style.display = "none";
    document.getElementById("boatch4").style.display = "none";
    document.getElementById("boatch5").style.display = "none";
    document.getElementById("boatch6").style.display = "none";
    document.getElementById("text_queuech").style.display = "none";
    document.getElementById("text_taxich").style.display = "none";
    document.getElementById("text_parkingch1").style.display = "none";
    document.getElementById("text_parkingch2").style.display = "none";
    document.getElementById("text_locationch1").style.display = "none";
    document.getElementById("text_locationch2").style.display = "none";
    document.getElementById("text_locationch3").style.display = "none";
    document.getElementById("text_locationch4").style.display = "none";
    document.getElementById("text_busch1").style.display = "none";
    document.getElementById("text_busch2").style.display = "none";
    document.getElementById("text_busch3").style.display = "none";
    document.getElementById("line_btsch1").style.display = "none";
    document.getElementById("line_btsch2").style.display = "none";
    document.getElementById("line_btsch3").style.display = "none";
    document.getElementById("line_btsch4").style.display = "none";
    document.getElementById("text_boatexch1").style.display = "none";
    document.getElementById("text_boatexch1-1").style.display = "none";
    document.getElementById("text_boatch1").style.display = "none";
    document.getElementById("text_taxich1").style.display = "none";
    document.getElementById("text_taxich2").style.display = "none";
    document.getElementById("text_queuech1").style.display = "none";
    document.getElementById("text_queuech2").style.display = "none";
    document.getElementById("text_boatch4").style.display = "none";
    document.getElementById("boatexch13").style.display = "none";
    document.getElementById("boatexch14").style.display = "none";
    document.getElementById("boatexch15").style.display = "none";
    document.getElementById("boatexch16").style.display = "none";
    document.getElementById("boatexch17").style.display = "none";
    document.getElementById("boatexch18").style.display = "none";
    document.getElementById("informationch1").style.display = "none";
    document.getElementById("informationch1temp2").style.display = "none";
    document.getElementById("informationch1temp3").style.display = "none";
    document.getElementById("informationch1temp4").style.display = "none";
    document.getElementById("informationch1temp5").style.display = "none";
    document.getElementById("informationch1temp6").style.display = "none";
    document.getElementById("informationch2").style.display = "none";
    document.getElementById("informationch2temp2").style.display = "none";
    document.getElementById("informationch2temp3").style.display = "none";
    document.getElementById("informationch2temp4").style.display = "none";
    document.getElementById("informationch2temp5").style.display = "none";
    document.getElementById("informationch2temp6").style.display = "none";
    document.getElementById("informationch3").style.display = "none";
    document.getElementById("informationch3temp2").style.display = "none";
    document.getElementById("informationch3temp3").style.display = "none";
    document.getElementById("informationch3temp4").style.display = "none";
    document.getElementById("informationch3temp5").style.display = "none";
    document.getElementById("informationch3temp6").style.display = "none";
    document.getElementById("informationch4").style.display = "none";
    document.getElementById("informationch4temp2").style.display = "none";
    document.getElementById("informationch4temp3").style.display = "none";
    document.getElementById("informationch4temp4").style.display = "none";
    document.getElementById("informationch4temp5").style.display = "none";
    document.getElementById("informationch4temp6").style.display = "none";
    document.getElementById("informationch5").style.display = "none";
    document.getElementById("informationch5temp2").style.display = "none";
    document.getElementById("informationch5temp3").style.display = "none";
    document.getElementById("informationch5temp4").style.display = "none";
    document.getElementById("informationch5temp5").style.display = "none";
    document.getElementById("informationch5temp6").style.display = "none";
    document.getElementById("informationch6").style.display = "none";
    document.getElementById("informationch6temp2").style.display = "none";
    document.getElementById("informationch6temp3").style.display = "none";
    document.getElementById("informationch6temp4").style.display = "none";
    document.getElementById("informationch6temp5").style.display = "none";
    document.getElementById("informationch6temp6").style.display = "none";
    document.getElementById("datesch").style.display = "none";
    document.getElementById("buildingcarch1").style.display = "none";
    document.getElementById("buildingcarch2").style.display = "none";
    document.getElementById("buildingcarch3").style.display = "none";
    document.getElementById("buildingcarch1temp2").style.display = "none";
    document.getElementById("buildingcarch2temp2").style.display = "none";
    document.getElementById("buildingcarch3temp2").style.display = "none";
    document.getElementById("buildingcarch1temp3").style.display = "none";
    document.getElementById("buildingcarch2temp3").style.display = "none";
    document.getElementById("buildingcarch3temp3").style.display = "none";
    document.getElementById("buildingcarch1temp4").style.display = "none";
    document.getElementById("buildingcarch2temp4").style.display = "none";
    document.getElementById("buildingcarch3temp4").style.display = "none";
    document.getElementById("buildingcarch1temp5").style.display = "none";
    document.getElementById("buildingcarch2temp5").style.display = "none";
    document.getElementById("buildingcarch3temp5").style.display = "none";
    document.getElementById("buildingcarch1temp6").style.display = "none";
    document.getElementById("buildingcarch2temp6").style.display = "none";
    document.getElementById("buildingcarch3temp6").style.display = "none";
    document.getElementById("station_busch1temp2").style.display = "none";
    document.getElementById("station_busch2temp2").style.display = "none";
    document.getElementById("station_busch3temp2").style.display = "none";
    document.getElementById("station_busch4temp2").style.display = "none";
    document.getElementById("stationics_busch1temp2").style.display = "none";
    document.getElementById("stationics_busch2temp2").style.display = "none";
    document.getElementById("stationics_busch3temp2").style.display = "none";
    document.getElementById("stationics_busch4temp2").style.display = "none";
    //-------------------------------------------------------------------------------------------------2---------------------------------------------------------------------------------------
    document.getElementById("thaiboattemp2").style.display = "block";
    document.getElementById("thaibtstemp2").style.display = "block";
    document.getElementById("thaitaxitemp2").style.display = "block";
    document.getElementById("thaiboatextemp2").style.display = "block";
    document.getElementById("thaibustemp2").style.display = "block";
    document.getElementById("thaiparkingtemp2").style.display = "block";
   
    document.getElementById("building1-1temp2").style.display = "block";
    document.getElementById("building2-1temp2").style.display = "block";
    document.getElementById("building3-1temp2").style.display = "block";
    document.getElementById("icon1-1temp2").style.display = "block";
    document.getElementById("icon2-1temp2").style.display = "block";

    //document.getElementById("popupthtemp2").style.display = "block";
    document.getElementById("boatth3temp2").style.display = "block";
    document.getElementById("boatth4temp2").style.display = "block";
    document.getElementById("boatth5temp2").style.display = "block";
    document.getElementById("boatth6temp2").style.display = "block";
    document.getElementById("text_queuethtemp2").style.display = "block";
    document.getElementById("text_taxithtemp2").style.display = "block";
    document.getElementById("text_parkingth1temp2").style.display = "block";
    document.getElementById("text_parkingth2temp2").style.display = "block";
    document.getElementById("text_locationth1temp2").style.display = "block";
    document.getElementById("text_locationth2temp2").style.display = "block";
    document.getElementById("text_locationth3temp2").style.display = "block";
    document.getElementById("text_locationth4temp2").style.display = "block";
    document.getElementById("text_busth1temp2").style.display = "block";
    document.getElementById("text_busth2temp2").style.display = "block";
    document.getElementById("text_busth3temp2").style.display = "block";
    document.getElementById("text_busth4temp2").style.display = "block";
    document.getElementById("line_btsth1temp2").style.display = "block";
    document.getElementById("line_btsth2temp2").style.display = "block";
    document.getElementById("line_btsth3temp2").style.display = "block";
    document.getElementById("line_btsth4temp2").style.display = "block";
    document.getElementById("text_boatexth1temp2").style.display = "block";
    document.getElementById("text_boatexth1-1temp2").style.display = "block";
    document.getElementById("text_boatth1temp2").style.display = "block";
    document.getElementById("text_taxith1temp2").style.display = "block";
    document.getElementById("text_taxith2temp2").style.display = "block";
    document.getElementById("text_queueth1temp2").style.display = "block";
    document.getElementById("text_queueth2temp2").style.display = "block";
    document.getElementById("text_boatth4temp2").style.display = "block";
    document.getElementById("text_boatth2temp2").style.display = "block";
    document.getElementById("text_boatth3temp2").style.display = "block";
    document.getElementById("boatth1temp2").style.display = "block";
    document.getElementById("boatth2temp2").style.display = "block";
  
   

    document.getElementById("englishboattemp2").style.display = "none";
    document.getElementById("englishbtstemp2").style.display = "none";
    document.getElementById("englishtaxitemp2").style.display = "none";
    document.getElementById("englishboatextemp2").style.display = "none";
    document.getElementById("englishbustemp2").style.display = "none";
    document.getElementById("englishparkingtemp2").style.display = "none";
    document.getElementById("boat3-2temp2").style.display = "none";
    document.getElementById("boat6-2temp2").style.display = "none";
    document.getElementById("boat7-2temp2").style.display = "none";
    document.getElementById("boat8-2temp2").style.display = "none";
    document.getElementById("boat9-2temp2").style.display = "none";
    document.getElementById("boat11-2temp2").style.display = "none";
    document.getElementById("building1-2temp2").style.display = "none";
    document.getElementById("building2-2temp2").style.display = "none";
    document.getElementById("building3-2temp2").style.display = "none";
    document.getElementById("icon1-2temp2").style.display = "none";
    document.getElementById("icon2-2temp2").style.display = "none";

    //document.getElementById("popupentemp2").style.display = "none";
    document.getElementById("boaten3temp2").style.display = "none";
    document.getElementById("boaten4temp2").style.display = "none";
    document.getElementById("boaten5temp2").style.display = "none";
    document.getElementById("boaten6temp2").style.display = "none";
    document.getElementById("text_queueentemp2").style.display = "none";
    document.getElementById("text_taxientemp2").style.display = "none";
    document.getElementById("text_parkingen1temp2").style.display = "none";
    document.getElementById("text_parkingen2temp2").style.display = "none";
    document.getElementById("text_locationen1temp2").style.display = "none";
    document.getElementById("text_locationen2temp2").style.display = "none";
    document.getElementById("text_locationen3temp2").style.display = "none";
    document.getElementById("text_locationen4temp2").style.display = "none";
    document.getElementById("text_busen1temp2").style.display = "none";
    document.getElementById("text_busen2temp2").style.display = "none";
    document.getElementById("text_busen3temp2").style.display = "none";
    document.getElementById("text_busen4temp2").style.display = "none";
    document.getElementById("line_btsen1temp2").style.display = "none";
    document.getElementById("line_btsen2temp2").style.display = "none";
    document.getElementById("line_btsen3temp2").style.display = "none";
    document.getElementById("line_btsen4temp2").style.display = "none";
    document.getElementById("text_boatexen1temp2").style.display = "none";
    document.getElementById("text_boatexen1-1temp2").style.display = "none";
    document.getElementById("text_boaten1temp2").style.display = "none";
    document.getElementById("text_taxien1temp2").style.display = "none";
    document.getElementById("text_taxien2temp2").style.display = "none";
    document.getElementById("text_queueen1temp2").style.display = "none";
    document.getElementById("text_queueen2temp2").style.display = "none";
    document.getElementById("boaten1temp2").style.display = "none";
    document.getElementById("boaten2temp2").style.display = "none";
    document.getElementById("boatexen13temp2").style.display = "none";
    document.getElementById("boatexen14temp2").style.display = "none";
    document.getElementById("boatexen15temp2").style.display = "none";
    document.getElementById("boatexen16temp2").style.display = "none";
    document.getElementById("boatexen17temp2").style.display = "none";
    document.getElementById("boatexen18temp2").style.display = "none";

    document.getElementById("chineseboattemp2").style.display = "none";
    document.getElementById("chinesebtstemp2").style.display = "none";
    document.getElementById("chinesetaxitemp2").style.display = "none";
    document.getElementById("chineseboatextemp2").style.display = "none";
    document.getElementById("chinesebustemp2").style.display = "none";
    document.getElementById("chineseparkingtemp2").style.display = "none";
    document.getElementById("boat3-3temp2").style.display = "none";
    document.getElementById("boat6-3temp2").style.display = "none";
    document.getElementById("boat7-3temp2").style.display = "none";
    document.getElementById("boat8-3temp2").style.display = "none";
    document.getElementById("boat9-3temp2").style.display = "none";
    document.getElementById("boat11-3temp2").style.display = "none";
    document.getElementById("building1-3temp2").style.display = "none";
    document.getElementById("building2-3temp2").style.display = "none";
    document.getElementById("building3-3temp2").style.display = "none";
    document.getElementById("icon1-3temp2").style.display = "none";
    document.getElementById("icon2-3temp2").style.display = "none";

    //document.getElementById("popupchitemp2").style.display = "none";
    document.getElementById("boatch3temp2").style.display = "none";
    document.getElementById("boatch4temp2").style.display = "none";
    document.getElementById("boatch5temp2").style.display = "none";
    document.getElementById("boatch6temp2").style.display = "none";
    document.getElementById("text_queuechtemp2").style.display = "none";
    document.getElementById("text_taxichtemp2").style.display = "none";
    document.getElementById("text_parkingch1temp2").style.display = "none";
    document.getElementById("text_parkingch2temp2").style.display = "none";
    document.getElementById("text_locationch1temp2").style.display = "none";
    document.getElementById("text_locationch2temp2").style.display = "none";
    document.getElementById("text_locationch3temp2").style.display = "none";
    document.getElementById("text_locationch4temp2").style.display = "none";
    document.getElementById("text_busch1temp2").style.display = "none";
    document.getElementById("text_busch2temp2").style.display = "none";
    document.getElementById("text_busch3temp2").style.display = "none";
    document.getElementById("text_busch4temp2").style.display = "none";
    document.getElementById("line_btsch1temp2").style.display = "none";
    document.getElementById("line_btsch2temp2").style.display = "none";
    document.getElementById("line_btsch3temp2").style.display = "none";
    document.getElementById("line_btsch4temp2").style.display = "none";
    document.getElementById("text_boatexch1temp2").style.display = "none";
    document.getElementById("text_boatexch1-1temp2").style.display = "none";
    document.getElementById("text_boatch1temp2").style.display = "none";
    document.getElementById("text_taxich1temp2").style.display = "none";
    document.getElementById("text_taxich2temp2").style.display = "none";
    document.getElementById("text_queuech1temp2").style.display = "none";
    document.getElementById("text_queuech2temp2").style.display = "none";
    document.getElementById("text_boatch4temp2").style.display = "none";
    document.getElementById("boatexch13temp2").style.display = "none";
    document.getElementById("boatexch14temp2").style.display = "none";
    document.getElementById("boatexch15temp2").style.display = "none";
    document.getElementById("boatexch16temp2").style.display = "none";
    document.getElementById("boatexch17temp2").style.display = "none";
    document.getElementById("boatexch18temp2").style.display = "none";
    //-------------------------------------------------------------------------------------------------3---------------------------------------------------------------------------------------
    document.getElementById("thaiboattemp3").style.display = "block";
    document.getElementById("thaibtstemp3").style.display = "block";
    document.getElementById("thaitaxitemp3").style.display = "block";
    document.getElementById("thaiboatextemp3").style.display = "block";
    document.getElementById("thaibustemp3").style.display = "block";
    document.getElementById("thaiparkingtemp3").style.display = "block";
   
    document.getElementById("boat1-1temp3").style.display = "block";
    document.getElementById("boat2-1temp3").style.display = "block";
    document.getElementById("boat3-1temp3").style.display = "block";
    document.getElementById("boat4-1temp3").style.display = "block";
    document.getElementById("boat5-1temp3").style.display = "block";
    document.getElementById("boat6-1temp3").style.display = "block";
    document.getElementById("boat7-1temp3").style.display = "block";
    document.getElementById("boat8-1temp3").style.display = "block";
    document.getElementById("boat9-1temp3").style.display = "block";
    document.getElementById("boat10-1temp3").style.display = "block";
    document.getElementById("boat11-1temp3").style.display = "block";
    document.getElementById("building1-1temp3").style.display = "block";
    document.getElementById("building2-1temp3").style.display = "block";
    document.getElementById("building3-1temp3").style.display = "block";
    document.getElementById("icon1-1temp3").style.display = "block";
    document.getElementById("icon2-1temp3").style.display = "block";

    //document.getElementById("popupthtemp2").style.display = "none";
    
    document.getElementById("text_queuethtemp3").style.display = "block";
    document.getElementById("text_taxithtemp3").style.display = "block";
    document.getElementById("text_parkingth1temp3").style.display = "block";
    document.getElementById("text_parkingth2temp3").style.display = "block";
    document.getElementById("text_locationth1temp3").style.display = "block";
    document.getElementById("text_locationth2temp3").style.display = "block";
    document.getElementById("text_locationth3temp3").style.display = "block";
    document.getElementById("text_locationth4temp3").style.display = "block";
    document.getElementById("text_busth1temp3").style.display = "block";
    document.getElementById("text_busth2temp3").style.display = "block";
    document.getElementById("text_busth3temp3").style.display = "block";
    document.getElementById("line_btsth1temp3").style.display = "block";
    document.getElementById("line_btsth2temp3").style.display = "block";
    document.getElementById("line_btsth3temp3").style.display = "block";
    document.getElementById("line_btsth4temp3").style.display = "block";
    document.getElementById("text_boatexth1temp3").style.display = "block";
    document.getElementById("text_boatexth1-1temp3").style.display = "block";
    document.getElementById("text_boatth1temp3").style.display = "block";
    document.getElementById("text_taxith1temp3").style.display = "block";
    document.getElementById("text_taxith2temp3").style.display = "block";
    document.getElementById("text_queueth1temp3").style.display = "block";
    document.getElementById("text_queueth2temp3").style.display = "block";
 
    document.getElementById("boatexth1temp3").style.display = "block";
    document.getElementById("boatexth2temp3").style.display = "block";
    document.getElementById("boatexth3temp3").style.display = "block";
    document.getElementById("boatexth4temp3").style.display = "block";
    document.getElementById("boatexth5temp3").style.display = "block";
    document.getElementById("boatexth6temp3").style.display = "block";
    document.getElementById("boatexth7temp3").style.display = "block";
    document.getElementById("boatexth8temp3").style.display = "block";
    

    document.getElementById("englishboattemp3").style.display = "none";
    document.getElementById("englishbtstemp3").style.display = "none";
    document.getElementById("englishtaxitemp3").style.display = "none";
    document.getElementById("englishboatextemp3").style.display = "none";
    document.getElementById("englishbustemp3").style.display = "none";
    document.getElementById("englishparkingtemp3").style.display = "none";
    document.getElementById("boat3-2temp3").style.display = "none";
    document.getElementById("boat6-2temp3").style.display = "none";
    document.getElementById("boat7-2temp3").style.display = "none";
    document.getElementById("boat8-2temp3").style.display = "none";
    document.getElementById("boat9-2temp3").style.display = "none";
    document.getElementById("boat11-2temp3").style.display = "none";
    document.getElementById("building1-2temp3").style.display = "none";
    document.getElementById("building2-2temp3").style.display = "none";
    document.getElementById("building3-2temp3").style.display = "none";
    document.getElementById("icon1-2temp3").style.display = "none";
    document.getElementById("icon2-2temp3").style.display = "none";

    //document.getElementById("popupentemp2").style.display = "block";
    
    document.getElementById("text_queueentemp3").style.display = "none";
    document.getElementById("text_taxientemp3").style.display = "none";
    document.getElementById("text_parkingen1temp3").style.display = "none";
    document.getElementById("text_parkingen2temp3").style.display = "none";
    document.getElementById("text_locationen1temp3").style.display = "none";
    document.getElementById("text_locationen2temp3").style.display = "none";
    document.getElementById("text_locationen3temp3").style.display = "none";
    document.getElementById("text_locationen4temp3").style.display = "none";
    document.getElementById("text_busen1temp3").style.display = "none";
    document.getElementById("text_busen2temp3").style.display = "none";
    document.getElementById("text_busen3temp3").style.display = "none";
    document.getElementById("line_btsen1temp3").style.display = "none";
    document.getElementById("line_btsen2temp3").style.display = "none";
    document.getElementById("line_btsen3temp3").style.display = "none";
    document.getElementById("line_btsen4temp3").style.display = "none";
    document.getElementById("text_boatexen1temp3").style.display = "none";
    document.getElementById("text_boatexen1-1temp3").style.display = "none";
    document.getElementById("text_boaten1temp3").style.display = "none";
    document.getElementById("text_taxien1temp3").style.display = "none";
    document.getElementById("text_taxien2temp3").style.display = "none";
    document.getElementById("text_queueen1temp3").style.display = "none";
    document.getElementById("text_queueen2temp3").style.display = "none";
    document.getElementById("boaten1temp3").style.display = "none";
    document.getElementById("boaten2temp3").style.display = "none";
    document.getElementById("boatexen13temp3").style.display = "none";
    document.getElementById("boatexen14temp3").style.display = "none";
    document.getElementById("boatexen15temp3").style.display = "none";
    document.getElementById("boatexen16temp3").style.display = "none";
    document.getElementById("boatexen17temp3").style.display = "none";
    document.getElementById("boatexen18temp3").style.display = "none";

    document.getElementById("chineseboattemp3").style.display = "none";
    document.getElementById("chinesebtstemp3").style.display = "none";
    document.getElementById("chinesetaxitemp3").style.display = "none";
    document.getElementById("chineseboatextemp3").style.display = "none";
    document.getElementById("chinesebustemp3").style.display = "none";
    document.getElementById("chineseparkingtemp3").style.display = "none";
    
    document.getElementById("boat3-3temp3").style.display = "none";
    document.getElementById("boat6-3temp3").style.display = "none";
    document.getElementById("boat7-3temp3").style.display = "none";
    document.getElementById("boat8-3temp3").style.display = "none";
    document.getElementById("boat9-3temp3").style.display = "none";
    document.getElementById("boat11-3temp3").style.display = "none";
    document.getElementById("building1-3temp3").style.display = "none";
    document.getElementById("building2-3temp3").style.display = "none";
    document.getElementById("building3-3temp3").style.display = "none";
    document.getElementById("icon1-3temp3").style.display = "none";
    document.getElementById("icon2-3temp3").style.display = "none";

    //document.getElementById("popupchitemp2").style.display = "none";
    
    document.getElementById("text_queuechtemp3").style.display = "none";
    document.getElementById("text_taxichtemp3").style.display = "none";
    document.getElementById("text_parkingch1temp3").style.display = "none";
    document.getElementById("text_parkingch2temp3").style.display = "none";
    document.getElementById("text_locationch1temp3").style.display = "none";
    document.getElementById("text_locationch2temp3").style.display = "none";
    document.getElementById("text_locationch3temp3").style.display = "none";
    document.getElementById("text_locationch4temp3").style.display = "none";
    document.getElementById("text_busch1temp3").style.display = "none";
    document.getElementById("text_busch2temp3").style.display = "none";
    document.getElementById("text_busch3temp3").style.display = "none";
    document.getElementById("line_btsch1temp3").style.display = "none";
    document.getElementById("line_btsch2temp3").style.display = "none";
    document.getElementById("line_btsch3temp3").style.display = "none";
    document.getElementById("line_btsch4temp3").style.display = "none";
    document.getElementById("text_boatexch1temp3").style.display = "none";
    document.getElementById("text_boatexch1-1temp3").style.display = "none";
    document.getElementById("text_boatch1temp3").style.display = "none";
    document.getElementById("text_taxich1temp3").style.display = "none";
    document.getElementById("text_taxich2temp3").style.display = "none";
    document.getElementById("text_queuech1temp3").style.display = "none";
    document.getElementById("text_queuech2temp3").style.display = "none";
    document.getElementById("text_boatch4temp3").style.display = "none";
    document.getElementById("boatexch13temp3").style.display = "none";
    document.getElementById("boatexch14temp3").style.display = "none";
    document.getElementById("boatexch15temp3").style.display = "none";
    document.getElementById("boatexch16temp3").style.display = "none";
    document.getElementById("boatexch17temp3").style.display = "none";
    document.getElementById("boatexch18temp3").style.display = "none";
    //-------------------------------------------------------------------------------------------------4---------------------------------------------------------------------------------------
    document.getElementById("thaiboattemp4").style.display = "block";
    document.getElementById("thaibtstemp4").style.display = "block";
    document.getElementById("thaitaxitemp4").style.display = "block";
    document.getElementById("thaiboatextemp4").style.display = "block";
    document.getElementById("thaibustemp4").style.display = "block";
    document.getElementById("thaiparkingtemp4").style.display = "block";
   
    document.getElementById("boat1-1temp4").style.display = "block";
    document.getElementById("boat2-1temp4").style.display = "block";
    document.getElementById("boat3-1temp4").style.display = "block";
    document.getElementById("boat4-1temp4").style.display = "block";
    document.getElementById("boat5-1temp4").style.display = "block";
    document.getElementById("boat6-1temp4").style.display = "block";
    document.getElementById("boat7-1temp4").style.display = "block";
    document.getElementById("boat8-1temp4").style.display = "block";
    document.getElementById("boat9-1temp4").style.display = "block";
    document.getElementById("boat10-1temp4").style.display = "block";
    document.getElementById("boat11-1temp4").style.display = "block";
    document.getElementById("building1-1temp4").style.display = "block";
    document.getElementById("building2-1temp4").style.display = "block";
    document.getElementById("building3-1temp4").style.display = "block";
    document.getElementById("icon1-1temp4").style.display = "block";
    document.getElementById("icon2-1temp4").style.display = "block";

    //document.getElementById("popupthtemp2").style.display = "none";
    document.getElementById("boatth3temp4").style.display = "block";
    document.getElementById("boatth4temp4").style.display = "block";
    document.getElementById("boatth5temp4").style.display = "block";
    document.getElementById("boatth6temp4").style.display = "block";
    document.getElementById("text_queuethtemp4").style.display = "block";
    document.getElementById("text_taxithtemp4").style.display = "block";
    document.getElementById("text_parkingth1temp4").style.display = "block";
    document.getElementById("text_parkingth2temp4").style.display = "block";
    document.getElementById("text_locationth1temp4").style.display = "block";
    document.getElementById("text_locationth2temp4").style.display = "block";
    document.getElementById("text_locationth3temp4").style.display = "block";
    document.getElementById("text_locationth4temp4").style.display = "block";
    document.getElementById("text_busth1temp4").style.display = "block";
    document.getElementById("text_busth2temp4").style.display = "block";
    document.getElementById("text_busth3temp4").style.display = "block";
    document.getElementById("line_btsth1temp4").style.display = "block";
    document.getElementById("line_btsth2temp4").style.display = "block";
    document.getElementById("line_btsth3temp4").style.display = "block";
    document.getElementById("line_btsth4temp4").style.display = "block";
    document.getElementById("text_boatexth1temp4").style.display = "block";
    document.getElementById("text_boatexth1-1temp4").style.display = "block";
    document.getElementById("text_boatth1temp4").style.display = "block";
    document.getElementById("text_taxith1temp4").style.display = "block";
    document.getElementById("text_taxith2temp4").style.display = "block";
    document.getElementById("text_queueth1temp4").style.display = "block";
    document.getElementById("text_queueth2temp4").style.display = "block";
    document.getElementById("text_boatth4temp4").style.display = "block";
    document.getElementById("text_boatth2temp4").style.display = "block";
    document.getElementById("text_boatth3temp4").style.display = "block";
    document.getElementById("boatth1temp4").style.display = "block";
    document.getElementById("boatth2temp4").style.display = "block";
    document.getElementById("boatexth1temp4").style.display = "block";
    document.getElementById("boatexth2temp4").style.display = "block";
    document.getElementById("boatexth3temp4").style.display = "block";
    document.getElementById("boatexth4temp4").style.display = "block";
    document.getElementById("boatexth5temp4").style.display = "block";
    document.getElementById("boatexth6temp4").style.display = "block";
    document.getElementById("boatexth7temp4").style.display = "block";
    document.getElementById("boatexth8temp4").style.display = "block";
    
    document.getElementById("englishboattemp4").style.display = "none";
    document.getElementById("englishbtstemp4").style.display = "none";
    document.getElementById("englishtaxitemp4").style.display = "none";
    document.getElementById("englishboatextemp4").style.display = "none";
    document.getElementById("englishbustemp4").style.display = "none";
    document.getElementById("englishparkingtemp4").style.display = "none";
    document.getElementById("boat3-2temp4").style.display = "none";
    document.getElementById("boat6-2temp4").style.display = "none";
    document.getElementById("boat7-2temp4").style.display = "none";
    document.getElementById("boat8-2temp4").style.display = "none";
    document.getElementById("boat9-2temp4").style.display = "none";
    document.getElementById("boat11-2temp4").style.display = "none";
    document.getElementById("building1-2temp4").style.display = "none";
    document.getElementById("building2-2temp4").style.display = "none";
    document.getElementById("building3-2temp4").style.display = "none";
    document.getElementById("icon1-2temp4").style.display = "none";
    document.getElementById("icon2-2temp4").style.display = "none";

    //document.getElementById("popupentemp2").style.display = "block";
    document.getElementById("boaten3temp4").style.display = "none";
    document.getElementById("boaten4temp4").style.display = "none";
    document.getElementById("boaten5temp4").style.display = "none";
    document.getElementById("boaten6temp4").style.display = "none";
    document.getElementById("text_queueentemp4").style.display = "none";
    document.getElementById("text_taxientemp4").style.display = "none";
    document.getElementById("text_parkingen1temp4").style.display = "none";
    document.getElementById("text_parkingen2temp4").style.display = "none";
    document.getElementById("text_locationen1temp4").style.display = "none";
    document.getElementById("text_locationen2temp4").style.display = "none";
    document.getElementById("text_locationen3temp4").style.display = "none";
    document.getElementById("text_locationen4temp4").style.display = "none";
    document.getElementById("text_busen1temp4").style.display = "none";
    document.getElementById("text_busen2temp4").style.display = "none";
    document.getElementById("text_busen3temp4").style.display = "none";
    document.getElementById("line_btsen1temp4").style.display = "none";
    document.getElementById("line_btsen2temp4").style.display = "none";
    document.getElementById("line_btsen3temp4").style.display = "none";
    document.getElementById("line_btsen4temp4").style.display = "none";
    document.getElementById("text_boatexen1temp4").style.display = "none";
    document.getElementById("text_boatexen1-1temp4").style.display = "none";
    document.getElementById("text_boaten1temp4").style.display = "none";
    document.getElementById("text_taxien1temp4").style.display = "none";
    document.getElementById("text_taxien2temp4").style.display = "none";
    document.getElementById("text_queueen1temp4").style.display = "none";
    document.getElementById("text_queueen2temp4").style.display = "none";
    document.getElementById("boaten1temp4").style.display = "none";
    document.getElementById("boaten2temp4").style.display = "none";
    document.getElementById("boatexen13temp4").style.display = "none";
    document.getElementById("boatexen14temp4").style.display = "none";
    document.getElementById("boatexen15temp4").style.display = "none";
    document.getElementById("boatexen16temp4").style.display = "none";
    document.getElementById("boatexen17temp4").style.display = "none";
    document.getElementById("boatexen18temp4").style.display = "none";

    document.getElementById("chineseboattemp4").style.display = "none";
    document.getElementById("chinesebtstemp4").style.display = "none";
    document.getElementById("chinesetaxitemp4").style.display = "none";
    document.getElementById("chineseboatextemp4").style.display = "none";
    document.getElementById("chinesebustemp4").style.display = "none";
    document.getElementById("chineseparkingtemp4").style.display = "none";
   
    document.getElementById("boat3-3temp4").style.display = "none";
    document.getElementById("boat6-3temp4").style.display = "none";
    document.getElementById("boat7-3temp4").style.display = "none";
    document.getElementById("boat8-3temp4").style.display = "none";
    document.getElementById("boat9-3temp4").style.display = "none";
    document.getElementById("boat11-3temp4").style.display = "none";
    document.getElementById("building1-3temp4").style.display = "none";
    document.getElementById("building2-3temp4").style.display = "none";
    document.getElementById("building3-3temp4").style.display = "none";
    document.getElementById("icon1-3temp4").style.display = "none";
    document.getElementById("icon2-3temp4").style.display = "none";
    
    //document.getElementById("popupchitemp2").style.display = "none";
    document.getElementById("boatch3temp4").style.display = "none";
    document.getElementById("boatch4temp4").style.display = "none";
    document.getElementById("boatch5temp4").style.display = "none";
    document.getElementById("boatch6temp4").style.display = "none";
    document.getElementById("text_queuechtemp4").style.display = "none";
    document.getElementById("text_taxichtemp4").style.display = "none";
    document.getElementById("text_parkingch1temp4").style.display = "none";
    document.getElementById("text_parkingch2temp4").style.display = "none";
    document.getElementById("text_locationch1temp4").style.display = "none";
    document.getElementById("text_locationch2temp4").style.display = "none";
    document.getElementById("text_locationch3temp4").style.display = "none";
    document.getElementById("text_locationch4temp4").style.display = "none";
    document.getElementById("text_busch1temp4").style.display = "none";
    document.getElementById("text_busch2temp4").style.display = "none";
    document.getElementById("text_busch3temp4").style.display = "none";
    document.getElementById("line_btsch1temp4").style.display = "none";
    document.getElementById("line_btsch2temp4").style.display = "none";
    document.getElementById("line_btsch3temp4").style.display = "none";
    document.getElementById("line_btsch4temp4").style.display = "none";
    document.getElementById("text_boatexch1temp4").style.display = "none";
    document.getElementById("text_boatexch1-1temp4").style.display = "none";
    document.getElementById("text_boatch1temp4").style.display = "none";
    document.getElementById("text_taxich1temp4").style.display = "none";
    document.getElementById("text_taxich2temp4").style.display = "none";
    document.getElementById("text_queuech1temp4").style.display = "none";
    document.getElementById("text_queuech2temp4").style.display = "none";
    document.getElementById("text_boatch4temp4").style.display = "none";
    document.getElementById("boatexch13temp4").style.display = "none";
    document.getElementById("boatexch14temp4").style.display = "none";
    document.getElementById("boatexch15temp4").style.display = "none";
    document.getElementById("boatexch16temp4").style.display = "none";
    document.getElementById("boatexch17temp4").style.display = "none";
    document.getElementById("boatexch18temp4").style.display = "none";
    //-------------------------------------------------------------------------------------------------5---------------------------------------------------------------------------------------
    document.getElementById("thaiboattemp5").style.display = "block";
    document.getElementById("thaibtstemp5").style.display = "block";
    document.getElementById("thaitaxitemp5").style.display = "block";
    document.getElementById("thaiboatextemp5").style.display = "block";
    document.getElementById("thaibustemp5").style.display = "block";
    document.getElementById("thaiparkingtemp5").style.display = "block";
   
    document.getElementById("boat1-1temp5").style.display = "block";
    document.getElementById("boat2-1temp5").style.display = "block";
    document.getElementById("boat3-1temp5").style.display = "block";
    document.getElementById("boat4-1temp5").style.display = "block";
    document.getElementById("boat5-1temp5").style.display = "block";
    document.getElementById("boat6-1temp5").style.display = "block";
    document.getElementById("boat7-1temp5").style.display = "block";
    document.getElementById("boat8-1temp5").style.display = "block";
    document.getElementById("boat9-1temp5").style.display = "block";
    document.getElementById("boat10-1temp5").style.display = "block";
    document.getElementById("boat11-1temp5").style.display = "block";
    document.getElementById("building1-1temp5").style.display = "block";
    document.getElementById("building2-1temp5").style.display = "block";
    document.getElementById("building3-1temp5").style.display = "block";
    document.getElementById("icon1-1temp5").style.display = "block";
    document.getElementById("icon2-1temp5").style.display = "block";

    //document.getElementById("popupthtemp2").style.display = "none";
    document.getElementById("boatth3temp5").style.display = "block";
    document.getElementById("boatth4temp5").style.display = "block";
    document.getElementById("boatth5temp5").style.display = "block";
    document.getElementById("boatth6temp5").style.display = "block";
    document.getElementById("text_queuethtemp5").style.display = "block";
    document.getElementById("text_taxithtemp5").style.display = "block";
    document.getElementById("text_parkingth1temp5").style.display = "block";
    document.getElementById("text_parkingth2temp5").style.display = "block";
    document.getElementById("text_locationth1temp5").style.display = "block";
    document.getElementById("text_locationth2temp5").style.display = "block";
    document.getElementById("text_locationth3temp5").style.display = "block";
    document.getElementById("text_locationth4temp5").style.display = "block";
    document.getElementById("text_busth1temp5").style.display = "block";
    document.getElementById("text_busth2temp5").style.display = "block";
    document.getElementById("text_busth3temp5").style.display = "block";
    document.getElementById("line_btsth1temp5").style.display = "block";
    document.getElementById("line_btsth2temp5").style.display = "block";
    document.getElementById("line_btsth3temp5").style.display = "block";
    document.getElementById("line_btsth4temp5").style.display = "block";
    document.getElementById("text_boatexth1temp5").style.display = "block";
    document.getElementById("text_boatexth1-1temp5").style.display = "block";
    document.getElementById("text_boatth1temp5").style.display = "block";
    document.getElementById("text_taxith1temp5").style.display = "block";
    document.getElementById("text_taxith2temp5").style.display = "block";
    document.getElementById("text_queueth1temp5").style.display = "block";
    document.getElementById("text_queueth2temp5").style.display = "block";
    document.getElementById("text_boatth4temp5").style.display = "block";
    document.getElementById("text_boatth2temp5").style.display = "block";
    document.getElementById("text_boatth3temp5").style.display = "block";
    document.getElementById("boatth1temp5").style.display = "block";
    document.getElementById("boatth2temp5").style.display = "block";
    document.getElementById("boatexth1temp5").style.display = "block";
    document.getElementById("boatexth2temp5").style.display = "block";
    document.getElementById("boatexth3temp5").style.display = "block";
    document.getElementById("boatexth4temp5").style.display = "block";
    document.getElementById("boatexth5temp5").style.display = "block";
    document.getElementById("boatexth6temp5").style.display = "block";
    document.getElementById("boatexth7temp5").style.display = "block";
    document.getElementById("boatexth8temp5").style.display = "block";
    

    document.getElementById("englishboattemp5").style.display = "none";
    document.getElementById("englishbtstemp5").style.display = "none";
    document.getElementById("englishtaxitemp5").style.display = "none";
    document.getElementById("englishboatextemp5").style.display = "none";
    document.getElementById("englishbustemp5").style.display = "none";
    document.getElementById("englishparkingtemp5").style.display = "none";
    document.getElementById("boat3-2temp5").style.display = "none";
    document.getElementById("boat6-2temp5").style.display = "none";
    document.getElementById("boat7-2temp5").style.display = "none";
    document.getElementById("boat8-2temp5").style.display = "none";
    document.getElementById("boat9-2temp5").style.display = "none";
    document.getElementById("boat11-2temp5").style.display = "none";
    document.getElementById("building1-2temp5").style.display = "none";
    document.getElementById("building2-2temp5").style.display = "none";
    document.getElementById("building3-2temp5").style.display = "none";
    document.getElementById("icon1-2temp5").style.display = "none";
    document.getElementById("icon2-2temp5").style.display = "none";

    //document.getElementById("popupentemp2").style.display = "block";
    document.getElementById("boaten3temp5").style.display = "none";
    document.getElementById("boaten4temp5").style.display = "none";
    document.getElementById("boaten5temp5").style.display = "none";
    document.getElementById("boaten6temp5").style.display = "none";
    document.getElementById("text_queueentemp5").style.display = "none";
    document.getElementById("text_taxientemp5").style.display = "none";
    document.getElementById("text_parkingen1temp5").style.display = "none";
    document.getElementById("text_parkingen2temp5").style.display = "none";
    document.getElementById("text_locationen1temp5").style.display = "none";
    document.getElementById("text_locationen2temp5").style.display = "none";
    document.getElementById("text_locationen3temp5").style.display = "none";
    document.getElementById("text_locationen4temp5").style.display = "none";
    document.getElementById("text_busen1temp5").style.display = "none";
    document.getElementById("text_busen2temp5").style.display = "none";
    document.getElementById("text_busen3temp5").style.display = "none";
    document.getElementById("line_btsen1temp5").style.display = "none";
    document.getElementById("line_btsen2temp5").style.display = "none";
    document.getElementById("line_btsen3temp5").style.display = "none";
    document.getElementById("line_btsen4temp5").style.display = "none";
    document.getElementById("text_boatexen1temp5").style.display = "none";
    document.getElementById("text_boatexen1-1temp5").style.display = "none";
    document.getElementById("text_boaten1temp5").style.display = "none";
    document.getElementById("text_taxien1temp5").style.display = "none";
    document.getElementById("text_taxien2temp5").style.display = "none";
    document.getElementById("text_queueen1temp5").style.display = "none";
    document.getElementById("text_queueen2temp5").style.display = "none";
    document.getElementById("boaten1temp5").style.display = "none";
    document.getElementById("boaten2temp5").style.display = "none";
    document.getElementById("boatexen13temp5").style.display = "none";
    document.getElementById("boatexen14temp5").style.display = "none";
    document.getElementById("boatexen15temp5").style.display = "none";
    document.getElementById("boatexen16temp5").style.display = "none";
    document.getElementById("boatexen17temp5").style.display = "none";
    document.getElementById("boatexen18temp5").style.display = "none";

    document.getElementById("chineseboattemp5").style.display = "none";
    document.getElementById("chinesebtstemp5").style.display = "none";
    document.getElementById("chinesetaxitemp5").style.display = "none";
    document.getElementById("chineseboatextemp5").style.display = "none";
    document.getElementById("chinesebustemp5").style.display = "none";
    document.getElementById("chineseparkingtemp5").style.display = "none";
   
    document.getElementById("boat3-3temp5").style.display = "none";
    document.getElementById("boat6-3temp5").style.display = "none";
    document.getElementById("boat7-3temp5").style.display = "none";
    document.getElementById("boat8-3temp5").style.display = "none";
    document.getElementById("boat9-3temp5").style.display = "none";
    document.getElementById("boat11-3temp5").style.display = "none";
    document.getElementById("building1-3temp5").style.display = "none";
    document.getElementById("building2-3temp5").style.display = "none";
    document.getElementById("building3-3temp5").style.display = "none";
    document.getElementById("icon1-3temp5").style.display = "none";
    document.getElementById("icon2-3temp5").style.display = "none";

    //document.getElementById("popupchitemp2").style.display = "none";
    document.getElementById("boatch3temp5").style.display = "none";
    document.getElementById("boatch4temp5").style.display = "none";
    document.getElementById("boatch5temp5").style.display = "none";
    document.getElementById("boatch6temp5").style.display = "none";
    document.getElementById("text_queuechtemp5").style.display = "none";
    document.getElementById("text_taxichtemp5").style.display = "none";
    document.getElementById("text_parkingch1temp5").style.display = "none";
    document.getElementById("text_parkingch2temp5").style.display = "none";
    document.getElementById("text_locationch1temp5").style.display = "none";
    document.getElementById("text_locationch2temp5").style.display = "none";
    document.getElementById("text_locationch3temp5").style.display = "none";
    document.getElementById("text_locationch4temp5").style.display = "none";
    document.getElementById("text_busch1temp5").style.display = "none";
    document.getElementById("text_busch2temp5").style.display = "none";
    document.getElementById("text_busch3temp5").style.display = "none";
    document.getElementById("line_btsch1temp5").style.display = "none";
    document.getElementById("line_btsch2temp5").style.display = "none";
    document.getElementById("line_btsch3temp5").style.display = "none";
    document.getElementById("line_btsch4temp5").style.display = "none";
    document.getElementById("text_boatexch1temp5").style.display = "none";
    document.getElementById("text_boatexch1-1temp5").style.display = "none";
    document.getElementById("text_boatch1temp5").style.display = "none";
    document.getElementById("text_taxich1temp5").style.display = "none";
    document.getElementById("text_taxich2temp5").style.display = "none";
    document.getElementById("text_queuech1temp5").style.display = "none";
    document.getElementById("text_queuech2temp5").style.display = "none";
    document.getElementById("text_boatch4temp5").style.display = "none";
    document.getElementById("boatexch13temp5").style.display = "none";
    document.getElementById("boatexch14temp5").style.display = "none";
    document.getElementById("boatexch15temp5").style.display = "none";
    document.getElementById("boatexch16temp5").style.display = "none";
    document.getElementById("boatexch17temp5").style.display = "none";
    document.getElementById("boatexch18temp5").style.display = "none";
    //-------------------------------------------------------------------------------------------------6---------------------------------------------------------------------------------------
    document.getElementById("thaiboattemp6").style.display = "block";
    document.getElementById("thaibtstemp6").style.display = "block";
    document.getElementById("thaitaxitemp6").style.display = "block";
    document.getElementById("thaiboatextemp6").style.display = "block";
    document.getElementById("thaibustemp6").style.display = "block";
    document.getElementById("thaiparkingtemp6").style.display = "block";
    
    document.getElementById("building1-1temp6").style.display = "block";
    document.getElementById("building2-1temp6").style.display = "block";
    document.getElementById("building3-1temp6").style.display = "block";
    document.getElementById("icon1-1temp6").style.display = "block";
    document.getElementById("icon2-1temp6").style.display = "block";

    //document.getElementById("popupthtemp2").style.display = "none";
    document.getElementById("boatth3temp6").style.display = "block";
    document.getElementById("boatth4temp6").style.display = "block";
    document.getElementById("boatth5temp6").style.display = "block";
    document.getElementById("boatth6temp6").style.display = "block";
    document.getElementById("text_queuethtemp6").style.display = "block";
    document.getElementById("text_taxithtemp6").style.display = "block";
    document.getElementById("text_parkingth1temp6").style.display = "block";
    document.getElementById("text_parkingth2temp6").style.display = "block";
    document.getElementById("text_locationth1temp6").style.display = "block";
    document.getElementById("text_locationth2temp6").style.display = "block";
    document.getElementById("text_locationth3temp6").style.display = "block";
    document.getElementById("text_locationth4temp6").style.display = "block";
    document.getElementById("text_busth1temp6").style.display = "block";
    document.getElementById("text_busth2temp6").style.display = "block";
    document.getElementById("text_busth3temp6").style.display = "block";
    document.getElementById("line_btsth1temp6").style.display = "block";
    document.getElementById("line_btsth2temp6").style.display = "block";
    document.getElementById("line_btsth3temp6").style.display = "block";
    document.getElementById("line_btsth4temp6").style.display = "block";
    document.getElementById("text_boatexth1temp6").style.display = "block";
    document.getElementById("text_boatexth1-1temp6").style.display = "block";
    document.getElementById("text_boatth1temp6").style.display = "block";
    document.getElementById("text_taxith1temp6").style.display = "block";
    document.getElementById("text_taxith2temp6").style.display = "block";
    document.getElementById("text_queueth1temp6").style.display = "block";
    document.getElementById("text_queueth2temp6").style.display = "block";
    document.getElementById("text_boatth4temp6").style.display = "block";
    document.getElementById("text_boatth2temp6").style.display = "block";
    document.getElementById("text_boatth3temp6").style.display = "block";
    document.getElementById("boatth1temp6").style.display = "block";
    document.getElementById("boatth2temp6").style.display = "block";
   
    

    document.getElementById("englishboattemp6").style.display = "none";
    document.getElementById("englishbtstemp6").style.display = "none";
    document.getElementById("englishtaxitemp6").style.display = "none";
    document.getElementById("englishboatextemp6").style.display = "none";
    document.getElementById("englishbustemp6").style.display = "none";
    document.getElementById("englishparkingtemp6").style.display = "none";
    document.getElementById("boat3-2temp6").style.display = "none";
    document.getElementById("boat6-2temp6").style.display = "none";
    document.getElementById("boat7-2temp6").style.display = "none";
    document.getElementById("boat8-2temp6").style.display = "none";
    document.getElementById("boat9-2temp6").style.display = "none";
    document.getElementById("boat11-2temp6").style.display = "none";
    document.getElementById("building1-2temp6").style.display = "none";
    document.getElementById("building2-2temp6").style.display = "none";
    document.getElementById("building3-2temp6").style.display = "none";
    document.getElementById("icon1-2temp6").style.display = "none";
    document.getElementById("icon2-2temp6").style.display = "none";

    //document.getElementById("popupentemp2").style.display = "block";
    document.getElementById("boaten3temp6").style.display = "none";
    document.getElementById("boaten4temp6").style.display = "none";
    document.getElementById("boaten5temp6").style.display = "none";
    document.getElementById("boaten6temp6").style.display = "none";
    document.getElementById("text_queueentemp6").style.display = "none";
    document.getElementById("text_taxientemp6").style.display = "none";
    document.getElementById("text_parkingen1temp6").style.display = "none";
    document.getElementById("text_parkingen2temp6").style.display = "none";
    document.getElementById("text_locationen1temp6").style.display = "none";
    document.getElementById("text_locationen2temp6").style.display = "none";
    document.getElementById("text_locationen3temp6").style.display = "none";
    document.getElementById("text_locationen4temp6").style.display = "none";
    document.getElementById("text_busen1temp6").style.display = "none";
    document.getElementById("text_busen2temp6").style.display = "none";
    document.getElementById("text_busen3temp6").style.display = "none";
    document.getElementById("line_btsen1temp6").style.display = "none";
    document.getElementById("line_btsen2temp6").style.display = "none";
    document.getElementById("line_btsen3temp6").style.display = "none";
    document.getElementById("line_btsen4temp6").style.display = "none";
    document.getElementById("text_boatexen1temp6").style.display = "none";
    document.getElementById("text_boatexen1-1temp6").style.display = "none";
    document.getElementById("text_boaten1temp6").style.display = "none";
    document.getElementById("text_taxien1temp6").style.display = "none";
    document.getElementById("text_taxien2temp6").style.display = "none";
    document.getElementById("text_queueen1temp6").style.display = "none";
    document.getElementById("text_queueen2temp6").style.display = "none";
    document.getElementById("boaten1temp6").style.display = "none";
    document.getElementById("boaten2temp6").style.display = "none";
    document.getElementById("boatexen13temp6").style.display = "none";
    document.getElementById("boatexen14temp6").style.display = "none";
    document.getElementById("boatexen15temp6").style.display = "none";
    document.getElementById("boatexen16temp6").style.display = "none";
    document.getElementById("boatexen17temp6").style.display = "none";
    document.getElementById("boatexen18temp6").style.display = "none";
    document.getElementById("chineseboattemp6").style.display = "none";
    document.getElementById("chinesebtstemp6").style.display = "none";
    document.getElementById("chinesetaxitemp6").style.display = "none";
    document.getElementById("chineseboatextemp6").style.display = "none";
    document.getElementById("chinesebustemp6").style.display = "none";
    document.getElementById("chineseparkingtemp6").style.display = "none";
    document.getElementById("boat3-3temp6").style.display = "none";
    document.getElementById("boat6-3temp6").style.display = "none";
    document.getElementById("boat7-3temp6").style.display = "none";
    document.getElementById("boat8-3temp6").style.display = "none";
    document.getElementById("boat9-3temp6").style.display = "none";
    document.getElementById("boat11-3temp6").style.display = "none";
    document.getElementById("building1-3temp6").style.display = "none";
    document.getElementById("building2-3temp6").style.display = "none";
    document.getElementById("building3-3temp6").style.display = "none";
    document.getElementById("icon1-3temp6").style.display = "none";
    document.getElementById("icon2-3temp6").style.display = "none";

    //document.getElementById("popupchitemp2").style.display = "none";
    document.getElementById("boatch3temp6").style.display = "none";
    document.getElementById("boatch4temp6").style.display = "none";
    document.getElementById("boatch5temp6").style.display = "none";
    document.getElementById("boatch6temp6").style.display = "none";
    document.getElementById("text_queuechtemp6").style.display = "none";
    document.getElementById("text_taxichtemp6").style.display = "none";
    document.getElementById("text_parkingch1temp6").style.display = "none";
    document.getElementById("text_parkingch2temp6").style.display = "none";
    document.getElementById("text_locationch1temp6").style.display = "none";
    document.getElementById("text_locationch2temp6").style.display = "none";
    document.getElementById("text_locationch3temp6").style.display = "none";
    document.getElementById("text_locationch4temp6").style.display = "none";
    document.getElementById("text_busch1temp6").style.display = "none";
    document.getElementById("text_busch2temp6").style.display = "none";
    document.getElementById("text_busch3temp6").style.display = "none";
    document.getElementById("line_btsch1temp6").style.display = "none";
    document.getElementById("line_btsch2temp6").style.display = "none";
    document.getElementById("line_btsch3temp6").style.display = "none";
    document.getElementById("line_btsch4temp6").style.display = "none";
    document.getElementById("text_boatexch1temp6").style.display = "none";
    document.getElementById("text_boatexch1-1temp6").style.display = "none";
    document.getElementById("text_boatch1temp6").style.display = "none";
    document.getElementById("text_taxich1temp6").style.display = "none";
    document.getElementById("text_taxich2temp6").style.display = "none";
    document.getElementById("text_queuech1temp6").style.display = "none";
    document.getElementById("text_queuech2temp6").style.display = "none";
    document.getElementById("text_boatch4temp6").style.display = "none";
    document.getElementById("boatexch13temp6").style.display = "none";
    document.getElementById("boatexch14temp6").style.display = "none";
    document.getElementById("boatexch15temp6").style.display = "none";
    document.getElementById("boatexch16temp6").style.display = "none";
    document.getElementById("boatexch17temp6").style.display = "none";
    document.getElementById("boatexch18temp6").style.display = "none";

    langs = "thai"
    Boat(langs);
    Boatex(langs);
    Bus(langs);
    BTS(langs);
    //setInterval(function () {
    //    changeLanguagechi(time);
    //}, time  * 1000);
}

// ฟังก์ชันเปลี่ยนเป็นภาษาอังกฤษ
function changeLanguath(time) {
    document.getElementById("thaiboat").style.display = "none";
    document.getElementById("thaibts").style.display = "none";
    document.getElementById("thaitaxi").style.display = "none";
    document.getElementById("thaiboatex").style.display = "none";
    document.getElementById("thaibus").style.display = "none";
    document.getElementById("thaiparking").style.display = "none";
    document.getElementById("boat1-1").style.display = "none";
    document.getElementById("boat2-1").style.display = "none";
    document.getElementById("boat3-1").style.display = "none";
    document.getElementById("boat4-1").style.display = "none";
    document.getElementById("boat5-1").style.display = "none";
    document.getElementById("building1-1").style.display = "none";
    document.getElementById("building2-1").style.display = "none";
    document.getElementById("building3-1").style.display = "none";
    document.getElementById("icon1-1").style.display = "none";
    document.getElementById("icon2-1").style.display = "none";
    document.getElementById("popupth").style.display = "none";
    document.getElementById("boatth3").style.display = "none";
    document.getElementById("boatth4").style.display = "none";
    document.getElementById("boatth5").style.display = "none";
    document.getElementById("boatth6").style.display = "none";
    document.getElementById("text_queueth").style.display = "none";
    document.getElementById("text_taxith").style.display = "none";
    document.getElementById("text_parkingth1").style.display = "none";
    document.getElementById("text_parkingth2").style.display = "none";
    document.getElementById("text_locationth1").style.display = "none";
    document.getElementById("text_locationth2").style.display = "none";
    document.getElementById("text_locationth3").style.display = "none";
    document.getElementById("text_locationth4").style.display = "none";
    document.getElementById("text_busth1").style.display = "none";
    document.getElementById("text_busth2").style.display = "none";
    document.getElementById("text_busth3").style.display = "none";
    document.getElementById("line_btsth1").style.display = "none";
    document.getElementById("line_btsth2").style.display = "none";
    document.getElementById("line_btsth3").style.display = "none";
    document.getElementById("line_btsth4").style.display = "none";
    document.getElementById("text_boatexth1").style.display = "none";
    document.getElementById("text_boatth1").style.display = "none";
    document.getElementById("text_taxith1").style.display = "none";
    document.getElementById("text_taxith2").style.display = "none";
    document.getElementById("text_queueth1").style.display = "none";
    document.getElementById("text_queueth2").style.display = "none";
    document.getElementById("text_boatth4").style.display = "none";
    document.getElementById("text_boatth2").style.display = "none";
    document.getElementById("text_boatth3").style.display = "none";
    document.getElementById("boatth1").style.display = "none";
    document.getElementById("boatth2").style.display = "none";
    document.getElementById("boatexth1").style.display = "none";
    document.getElementById("boatexth2").style.display = "none";
    document.getElementById("boatexth3").style.display = "none";
    document.getElementById("boatexth4").style.display = "none";
    document.getElementById("boatexth5").style.display = "none";
    document.getElementById("boatexth6").style.display = "none";
    document.getElementById("boatexth7").style.display = "none";
    document.getElementById("boatexth8").style.display = "none";
    document.getElementById("informationth1").style.display = "none";
    document.getElementById("informationth1temp2").style.display = "none";
    document.getElementById("informationth1temp3").style.display = "none";
    document.getElementById("informationth1temp4").style.display = "none";
    document.getElementById("informationth1temp5").style.display = "none";
    document.getElementById("informationth1temp6").style.display = "none";
    document.getElementById("informationth2").style.display = "none";
    document.getElementById("informationth2temp2").style.display = "none";
    document.getElementById("informationth2temp3").style.display = "none";
    document.getElementById("informationth2temp4").style.display = "none";
    document.getElementById("informationth2temp5").style.display = "none";
    document.getElementById("informationth2temp6").style.display = "none";
    document.getElementById("informationth3").style.display = "none";
    document.getElementById("informationth3temp2").style.display = "none";
    document.getElementById("informationth3temp3").style.display = "none";
    document.getElementById("informationth3temp4").style.display = "none";
    document.getElementById("informationth3temp5").style.display = "none";
    document.getElementById("informationth3temp6").style.display = "none";
    document.getElementById("informationth4").style.display = "none";
    document.getElementById("informationth4temp2").style.display = "none";
    document.getElementById("informationth4temp3").style.display = "none";
    document.getElementById("informationth4temp4").style.display = "none";
    document.getElementById("informationth4temp5").style.display = "none";
    document.getElementById("informationth4temp6").style.display = "none";
    document.getElementById("informationth5").style.display = "none";
    document.getElementById("informationth5temp2").style.display = "none";
    document.getElementById("informationth5temp3").style.display = "none";
    document.getElementById("informationth5temp4").style.display = "none";
    document.getElementById("informationth5temp5").style.display = "none";
    document.getElementById("informationth5temp6").style.display = "none";
    document.getElementById("informationth6").style.display = "none";
    document.getElementById("informationth6temp2").style.display = "none";
    document.getElementById("informationth6temp3").style.display = "none";
    document.getElementById("informationth6temp4").style.display = "none";
    document.getElementById("informationth6temp5").style.display = "none";
    document.getElementById("informationth6temp6").style.display = "none";
    document.getElementById("datesth").style.display = "none";
    document.getElementById("buildingcarth1").style.display = "none";
    document.getElementById("buildingcarth2").style.display = "none";
    document.getElementById("buildingcarth3").style.display = "none";
    document.getElementById("buildingcarth1temp2").style.display = "none";
    document.getElementById("buildingcarth2temp2").style.display = "none";
    document.getElementById("buildingcarth3temp2").style.display = "none";
    document.getElementById("buildingcarth1temp3").style.display = "none";
    document.getElementById("buildingcarth2temp3").style.display = "none";
    document.getElementById("buildingcarth3temp3").style.display = "none";
    document.getElementById("buildingcarth1temp4").style.display = "none";
    document.getElementById("buildingcarth2temp4").style.display = "none";
    document.getElementById("buildingcarth3temp4").style.display = "none";
    document.getElementById("buildingcarth1temp5").style.display = "none";
    document.getElementById("buildingcarth2temp5").style.display = "none";
    document.getElementById("buildingcarth3temp5").style.display = "none";
    document.getElementById("buildingcarth1temp6").style.display = "none";
    document.getElementById("buildingcarth2temp6").style.display = "none";
    document.getElementById("buildingcarth3temp6").style.display = "none";
    document.getElementById("station_busth1temp2").style.display = "none";
    document.getElementById("station_busth2temp2").style.display = "none";
    document.getElementById("station_busth3temp2").style.display = "none";
    document.getElementById("station_busth4temp2").style.display = "none";
    document.getElementById("stationics_busth1temp2").style.display = "none";
    document.getElementById("stationics_busth2temp2").style.display = "none";
    document.getElementById("stationics_busth3temp2").style.display = "none";
    document.getElementById("stationics_busth4temp2").style.display = "none";

    document.getElementById("englishboat").style.display = "block";
    document.getElementById("englishbts").style.display = "block";
    document.getElementById("englishtaxi").style.display = "block";
    document.getElementById("englishboatex").style.display = "block";
    document.getElementById("englishbus").style.display = "block";
    document.getElementById("englishparking").style.display = "block";
    document.getElementById("boat3-2").style.display = "block";
    document.getElementById("building1-2").style.display = "block";
    document.getElementById("building2-2").style.display = "block";
    document.getElementById("building3-2").style.display = "block";
    document.getElementById("icon1-2").style.display = "block";
    document.getElementById("icon2-2").style.display = "block";
    document.getElementById("popupen").style.display = "block";
    document.getElementById("text_queueen").style.display = "block";
    document.getElementById("text_taxien").style.display = "block";
    document.getElementById("text_parkingen1").style.display = "block";
    document.getElementById("text_parkingen2").style.display = "block";
    document.getElementById("text_locationen1").style.display = "block";
    document.getElementById("text_locationen2").style.display = "block";
    document.getElementById("text_locationen3").style.display = "block";
    document.getElementById("text_locationen4").style.display = "block";
    document.getElementById("text_busen1").style.display = "block";
    document.getElementById("text_busen2").style.display = "block";
    document.getElementById("text_busen3").style.display = "block";
    document.getElementById("line_btsen1").style.display = "block";
    document.getElementById("line_btsen2").style.display = "block";
    document.getElementById("line_btsen3").style.display = "block";
    document.getElementById("line_btsen4").style.display = "block";
    document.getElementById("text_boatexen1").style.display = "block";
    document.getElementById("text_boaten1").style.display = "block";
    document.getElementById("text_taxien1").style.display = "block";
    document.getElementById("text_taxien2").style.display = "block";
    document.getElementById("text_queueen1").style.display = "block";
    document.getElementById("text_queueen2").style.display = "block";
    document.getElementById("informationen1").style.display = "block";
    document.getElementById("informationen1temp2").style.display = "block";
    document.getElementById("informationen1temp3").style.display = "block";
    document.getElementById("informationen1temp4").style.display = "block";
    document.getElementById("informationen1temp5").style.display = "block";
    document.getElementById("informationen1temp6").style.display = "block";
    document.getElementById("informationen2").style.display = "block";
    document.getElementById("informationen2temp2").style.display = "block";
    document.getElementById("informationen2temp3").style.display = "block";
    document.getElementById("informationen2temp4").style.display = "block";
    document.getElementById("informationen2temp5").style.display = "block";
    document.getElementById("informationen2temp6").style.display = "block";
    document.getElementById("informationen3").style.display = "block";
    document.getElementById("informationen3temp2").style.display = "block";
    document.getElementById("informationen3temp3").style.display = "block";
    document.getElementById("informationen3temp4").style.display = "block";
    document.getElementById("informationen3temp5").style.display = "block";
    document.getElementById("informationen3temp6").style.display = "block";
    document.getElementById("informationen4").style.display = "block";
    document.getElementById("informationen4temp2").style.display = "block";
    document.getElementById("informationen4temp3").style.display = "block";
    document.getElementById("informationen4temp4").style.display = "block";
    document.getElementById("informationen4temp5").style.display = "block";
    document.getElementById("informationen4temp6").style.display = "block";
    document.getElementById("informationen5").style.display = "block";
    document.getElementById("informationen5temp2").style.display = "block";
    document.getElementById("informationen5temp3").style.display = "block";
    document.getElementById("informationen5temp4").style.display = "block";
    document.getElementById("informationen5temp5").style.display = "block";
    document.getElementById("informationen5temp6").style.display = "block";
    document.getElementById("informationen6").style.display = "block";
    document.getElementById("informationen6temp2").style.display = "block";
    document.getElementById("informationen6temp3").style.display = "block";
    document.getElementById("informationen6temp4").style.display = "block";
    document.getElementById("informationen6temp5").style.display = "block";
    document.getElementById("informationen6temp6").style.display = "block";
    document.getElementById("datesen").style.display = "block";
    document.getElementById("buildingcaren1").style.display = "block";
    document.getElementById("buildingcaren2").style.display = "block";
    document.getElementById("buildingcaren3").style.display = "block";
    document.getElementById("buildingcaren1temp2").style.display = "block";
    document.getElementById("buildingcaren2temp2").style.display = "block";
    document.getElementById("buildingcaren3temp2").style.display = "block";
    document.getElementById("buildingcaren1temp3").style.display = "block";
    document.getElementById("buildingcaren2temp3").style.display = "block";
    document.getElementById("buildingcaren3temp3").style.display = "block";
    document.getElementById("buildingcaren1temp4").style.display = "block";
    document.getElementById("buildingcaren2temp4").style.display = "block";
    document.getElementById("buildingcaren3temp4").style.display = "block";
    document.getElementById("buildingcaren1temp5").style.display = "block";
    document.getElementById("buildingcaren2temp5").style.display = "block";
    document.getElementById("buildingcaren3temp5").style.display = "block";
    document.getElementById("buildingcaren1temp6").style.display = "block";
    document.getElementById("buildingcaren2temp6").style.display = "block";
    document.getElementById("buildingcaren3temp6").style.display = "block";
    document.getElementById("station_busen1temp2").style.display = "block";
    document.getElementById("station_busen2temp2").style.display = "block";
    document.getElementById("station_busen3temp2").style.display = "block";
    document.getElementById("station_busen4temp2").style.display = "block";
    document.getElementById("stationics_busen1temp2").style.display = "block";
    document.getElementById("stationics_busen2temp2").style.display = "block";
    document.getElementById("stationics_busen3temp2").style.display = "block";
    document.getElementById("stationics_busen4temp2").style.display = "block";

    document.getElementById("chineseboat").style.display = "none";
    document.getElementById("chinesebts").style.display = "none";
    document.getElementById("chinesetaxi").style.display = "none";
    document.getElementById("chineseboatex").style.display = "none";
    document.getElementById("chinesebus").style.display = "none";
    document.getElementById("chineseparking").style.display = "none";
    document.getElementById("boat3-3").style.display = "none";
    document.getElementById("building1-3").style.display = "none";
    document.getElementById("building2-3").style.display = "none";
    document.getElementById("building3-3").style.display = "none";
    document.getElementById("icon1-3").style.display = "none";
    document.getElementById("icon2-3").style.display = "none";
    document.getElementById("popupchi").style.display = "none";
    document.getElementById("text_queuech").style.display = "none";
    document.getElementById("text_taxich").style.display = "none";
    document.getElementById("text_parkingch1").style.display = "none";
    document.getElementById("text_parkingch2").style.display = "none";
    document.getElementById("text_locationch1").style.display = "none";
    document.getElementById("text_locationch2").style.display = "none";
    document.getElementById("text_locationch3").style.display = "none";
    document.getElementById("text_locationch4").style.display = "none";
    document.getElementById("text_busch1").style.display = "none";
    document.getElementById("text_busch2").style.display = "none";
    document.getElementById("text_busch3").style.display = "none";
    document.getElementById("line_btsch1").style.display = "none";
    document.getElementById("line_btsch2").style.display = "none";
    document.getElementById("line_btsch3").style.display = "none";
    document.getElementById("line_btsch4").style.display = "none";
    document.getElementById("text_boatexch1").style.display = "none";
    document.getElementById("text_boatch1").style.display = "none";
    document.getElementById("text_taxich1").style.display = "none";
    document.getElementById("text_taxich2").style.display = "none";
    document.getElementById("text_queuech1").style.display = "none";
    document.getElementById("text_queuech2").style.display = "none";
    document.getElementById("informationch1").style.display = "none";
    document.getElementById("informationch1temp2").style.display = "none";
    document.getElementById("informationch1temp3").style.display = "none";
    document.getElementById("informationch1temp4").style.display = "none";
    document.getElementById("informationch1temp5").style.display = "none";
    document.getElementById("informationch1temp6").style.display = "none";
    document.getElementById("informationch2").style.display = "none";
    document.getElementById("informationch2temp2").style.display = "none";
    document.getElementById("informationch2temp3").style.display = "none";
    document.getElementById("informationch2temp4").style.display = "none";
    document.getElementById("informationch2temp5").style.display = "none";
    document.getElementById("informationch2temp6").style.display = "none";
    document.getElementById("informationch3").style.display = "none";
    document.getElementById("informationch3temp2").style.display = "none";
    document.getElementById("informationch3temp3").style.display = "none";
    document.getElementById("informationch3temp4").style.display = "none";
    document.getElementById("informationch3temp5").style.display = "none";
    document.getElementById("informationch3temp6").style.display = "none";
    document.getElementById("informationch4").style.display = "none";
    document.getElementById("informationch4temp2").style.display = "none";
    document.getElementById("informationch4temp3").style.display = "none";
    document.getElementById("informationch4temp4").style.display = "none";
    document.getElementById("informationch4temp5").style.display = "none";
    document.getElementById("informationch4temp6").style.display = "none";
    document.getElementById("informationch5").style.display = "none";
    document.getElementById("informationch5temp2").style.display = "none";
    document.getElementById("informationch5temp3").style.display = "none";
    document.getElementById("informationch5temp4").style.display = "none";
    document.getElementById("informationch5temp5").style.display = "none";
    document.getElementById("informationch5temp6").style.display = "none";
    document.getElementById("informationch6").style.display = "none";
    document.getElementById("informationch6temp2").style.display = "none";
    document.getElementById("informationch6temp3").style.display = "none";
    document.getElementById("informationch6temp4").style.display = "none";
    document.getElementById("informationch6temp5").style.display = "none";
    document.getElementById("informationch6temp6").style.display = "none";
    document.getElementById("datesch").style.display = "none";
    document.getElementById("buildingcarch1").style.display = "none";
    document.getElementById("buildingcarch2").style.display = "none";
    document.getElementById("buildingcarch3").style.display = "none";
    document.getElementById("buildingcarch1temp2").style.display = "none";
    document.getElementById("buildingcarch2temp2").style.display = "none";
    document.getElementById("buildingcarch3temp2").style.display = "none";
    document.getElementById("buildingcarch1temp3").style.display = "none";
    document.getElementById("buildingcarch2temp3").style.display = "none";
    document.getElementById("buildingcarch3temp3").style.display = "none";
    document.getElementById("buildingcarch1temp4").style.display = "none";
    document.getElementById("buildingcarch2temp4").style.display = "none";
    document.getElementById("buildingcarch3temp4").style.display = "none";
    document.getElementById("buildingcarch1temp5").style.display = "none";
    document.getElementById("buildingcarch2temp5").style.display = "none";
    document.getElementById("buildingcarch3temp5").style.display = "none";
    document.getElementById("buildingcarch1temp6").style.display = "none";
    document.getElementById("buildingcarch2temp6").style.display = "none";
    document.getElementById("buildingcarch3temp6").style.display = "none";
    document.getElementById("station_busch1temp2").style.display = "none";
    document.getElementById("station_busch2temp2").style.display = "none";
    document.getElementById("station_busch3temp2").style.display = "none";
    document.getElementById("station_busch4temp2").style.display = "none";
    document.getElementById("stationics_busch1temp2").style.display = "none";
    document.getElementById("stationics_busch2temp2").style.display = "none";
    document.getElementById("stationics_busch3temp2").style.display = "none";
    document.getElementById("stationics_busch4temp2").style.display = "none";
    //-------------------------------------------------------------------------------------------------2---------------------------------------------------------------------------------------
    document.getElementById("thaiboattemp2").style.display = "none";
    document.getElementById("thaibtstemp2").style.display = "none";
    document.getElementById("thaitaxitemp2").style.display = "none";
    document.getElementById("thaiboatextemp2").style.display = "none";
    document.getElementById("thaibustemp2").style.display = "none";
    document.getElementById("thaiparkingtemp2").style.display = "none";
    document.getElementById("building1-1temp2").style.display = "none";
    document.getElementById("building2-1temp2").style.display = "none";
    document.getElementById("building3-1temp2").style.display = "none";
    document.getElementById("icon1-1temp2").style.display = "none";
    document.getElementById("icon2-1temp2").style.display = "none";

    //document.getElementById("popupthtemp2").style.display = "none";
    document.getElementById("boatth3temp2").style.display = "none";
    document.getElementById("boatth4temp2").style.display = "none";
    document.getElementById("boatth5temp2").style.display = "none";
    document.getElementById("boatth6temp2").style.display = "none";
    document.getElementById("text_queuethtemp2").style.display = "none";
    document.getElementById("text_taxithtemp2").style.display = "none";
    document.getElementById("text_parkingth1temp2").style.display = "none";
    document.getElementById("text_parkingth2temp2").style.display = "none";
    document.getElementById("text_locationth1temp2").style.display = "none";
    document.getElementById("text_locationth2temp2").style.display = "none";
    document.getElementById("text_locationth3temp2").style.display = "none";
    document.getElementById("text_locationth4temp2").style.display = "none";
    document.getElementById("text_busth1temp2").style.display = "none";
    document.getElementById("text_busth2temp2").style.display = "none";
    document.getElementById("text_busth3temp2").style.display = "none";
    document.getElementById("text_busth4temp2").style.display = "none";
    document.getElementById("line_btsth1temp2").style.display = "none";
    document.getElementById("line_btsth2temp2").style.display = "none";
    document.getElementById("line_btsth3temp2").style.display = "none";
    document.getElementById("line_btsth4temp2").style.display = "none";
    document.getElementById("text_boatexth1temp2").style.display = "none";
    document.getElementById("text_boatexth1-1temp2").style.display = "none";
    document.getElementById("text_boatth1temp2").style.display = "none";
    document.getElementById("text_taxith1temp2").style.display = "none";
    document.getElementById("text_taxith2temp2").style.display = "none";
    document.getElementById("text_queueth1temp2").style.display = "none";
    document.getElementById("text_queueth2temp2").style.display = "none";
    document.getElementById("text_boatth4temp2").style.display = "none";
    document.getElementById("text_boatth2temp2").style.display = "none";
    document.getElementById("text_boatth3temp2").style.display = "none";
    document.getElementById("boatth1temp2").style.display = "none";
    document.getElementById("boatth2temp2").style.display = "none";
   
   

    document.getElementById("englishboattemp2").style.display = "block";
    document.getElementById("englishbtstemp2").style.display = "block";
    document.getElementById("englishtaxitemp2").style.display = "block";
    document.getElementById("englishboatextemp2").style.display = "block";
    document.getElementById("englishbustemp2").style.display = "block";
    document.getElementById("englishparkingtemp2").style.display = "block";
    document.getElementById("boat3-2temp2").style.display = "block";
    document.getElementById("boat6-2temp2").style.display = "block";
    document.getElementById("boat7-2temp2").style.display = "block";
    document.getElementById("boat8-2temp2").style.display = "block";
    document.getElementById("boat9-2temp2").style.display = "block";
    document.getElementById("boat11-2temp2").style.display = "block";
    document.getElementById("building1-2temp2").style.display = "block";
    document.getElementById("building2-2temp2").style.display = "block";
    document.getElementById("building3-2temp2").style.display = "block";
    document.getElementById("icon1-2temp2").style.display = "block";
    document.getElementById("icon2-2temp2").style.display = "block";

    //document.getElementById("popupentemp2").style.display = "block";
    document.getElementById("boaten3temp2").style.display = "block";
    document.getElementById("boaten4temp2").style.display = "block";
    document.getElementById("boaten5temp2").style.display = "block";
    document.getElementById("boaten6temp2").style.display = "block";
    document.getElementById("text_queueentemp2").style.display = "block";
    document.getElementById("text_taxientemp2").style.display = "block";
    document.getElementById("text_parkingen1temp2").style.display = "block";
    document.getElementById("text_parkingen2temp2").style.display = "block";
    document.getElementById("text_locationen1temp2").style.display = "block";
    document.getElementById("text_locationen2temp2").style.display = "block";
    document.getElementById("text_locationen3temp2").style.display = "block";
    document.getElementById("text_locationen4temp2").style.display = "block";
    document.getElementById("text_busen1temp2").style.display = "block";
    document.getElementById("text_busen2temp2").style.display = "block";
    document.getElementById("text_busen3temp2").style.display = "block";
    document.getElementById("text_busen4temp2").style.display = "block";
    document.getElementById("line_btsen1temp2").style.display = "block";
    document.getElementById("line_btsen2temp2").style.display = "block";
    document.getElementById("line_btsen3temp2").style.display = "block";
    document.getElementById("line_btsen4temp2").style.display = "block";
    document.getElementById("text_boatexen1temp2").style.display = "block";
    document.getElementById("text_boatexen1-1temp2").style.display = "block";
    document.getElementById("text_boaten1temp2").style.display = "block";
    document.getElementById("text_taxien1temp2").style.display = "block";
    document.getElementById("text_taxien2temp2").style.display = "block";
    document.getElementById("text_queueen1temp2").style.display = "block";
    document.getElementById("text_queueen2temp2").style.display = "block";
    document.getElementById("boaten1temp2").style.display = "block";
    document.getElementById("boaten2temp2").style.display = "block";
    document.getElementById("boatexen13temp2").style.display = "block";
    document.getElementById("boatexen14temp2").style.display = "block";
    document.getElementById("boatexen15temp2").style.display = "block";
    document.getElementById("boatexen16temp2").style.display = "block";
    document.getElementById("boatexen17temp2").style.display = "block";
    document.getElementById("boatexen18temp2").style.display = "block";

    document.getElementById("chineseboattemp2").style.display = "none";
    document.getElementById("chinesebtstemp2").style.display = "none";
    document.getElementById("chinesetaxitemp2").style.display = "none";
    document.getElementById("chineseboatextemp2").style.display = "none";
    document.getElementById("chinesebustemp2").style.display = "none";
    document.getElementById("chineseparkingtemp2").style.display = "none";
    document.getElementById("boat3-3temp2").style.display = "none";
    document.getElementById("boat6-3temp2").style.display = "none";
    document.getElementById("boat7-3temp2").style.display = "none";
    document.getElementById("boat8-3temp2").style.display = "none";
    document.getElementById("boat9-3temp2").style.display = "none";
    document.getElementById("boat11-3temp2").style.display = "none";
    document.getElementById("building1-3temp2").style.display = "none";
    document.getElementById("building2-3temp2").style.display = "none";
    document.getElementById("building3-3temp2").style.display = "none";
    document.getElementById("icon1-3temp2").style.display = "none";
    document.getElementById("icon2-3temp2").style.display = "none";

    //document.getElementById("popupchitemp2").style.display = "none";
    document.getElementById("boatch3temp2").style.display = "none";
    document.getElementById("boatch4temp2").style.display = "none";
    document.getElementById("boatch5temp2").style.display = "none";
    document.getElementById("boatch6temp2").style.display = "none";
    document.getElementById("text_queuechtemp2").style.display = "none";
    document.getElementById("text_taxichtemp2").style.display = "none";
    document.getElementById("text_parkingch1temp2").style.display = "none";
    document.getElementById("text_parkingch2temp2").style.display = "none";
    document.getElementById("text_locationch1temp2").style.display = "none";
    document.getElementById("text_locationch2temp2").style.display = "none";
    document.getElementById("text_locationch3temp2").style.display = "none";
    document.getElementById("text_locationch4temp2").style.display = "none";
    document.getElementById("text_busch1temp2").style.display = "none";
    document.getElementById("text_busch2temp2").style.display = "none";
    document.getElementById("text_busch3temp2").style.display = "none";
    document.getElementById("text_busch4temp2").style.display = "none";
    document.getElementById("line_btsch1temp2").style.display = "none";
    document.getElementById("line_btsch2temp2").style.display = "none";
    document.getElementById("line_btsch3temp2").style.display = "none";
    document.getElementById("line_btsch4temp2").style.display = "none";
    document.getElementById("text_boatexch1temp2").style.display = "none";
    document.getElementById("text_boatexch1-1temp2").style.display = "none";
    document.getElementById("text_boatch1temp2").style.display = "none";
    document.getElementById("text_taxich1temp2").style.display = "none";
    document.getElementById("text_taxich2temp2").style.display = "none";
    document.getElementById("text_queuech1temp2").style.display = "none";
    document.getElementById("text_queuech2temp2").style.display = "none";
    document.getElementById("text_boatch4temp2").style.display = "none";
    document.getElementById("boatexch13temp2").style.display = "none";
    document.getElementById("boatexch14temp2").style.display = "none";
    document.getElementById("boatexch15temp2").style.display = "none";
    document.getElementById("boatexch16temp2").style.display = "none";
    document.getElementById("boatexch17temp2").style.display = "none";
    document.getElementById("boatexch18temp2").style.display = "none";
    //-------------------------------------------------------------------------------------------------3---------------------------------------------------------------------------------------
    document.getElementById("thaiboattemp3").style.display = "none";
    document.getElementById("thaibtstemp3").style.display = "none";
    document.getElementById("thaitaxitemp3").style.display = "none";
    document.getElementById("thaiboatextemp3").style.display = "none";
    document.getElementById("thaibustemp3").style.display = "none";
    document.getElementById("thaiparkingtemp3").style.display = "none";
   
    document.getElementById("boat1-1temp3").style.display = "none";
    document.getElementById("boat2-1temp3").style.display = "none";
    document.getElementById("boat3-1temp3").style.display = "none";
    document.getElementById("boat4-1temp3").style.display = "none";
    document.getElementById("boat5-1temp3").style.display = "none";
    document.getElementById("boat6-1temp3").style.display = "none";
    document.getElementById("boat7-1temp3").style.display = "none";
    document.getElementById("boat8-1temp3").style.display = "none";
    document.getElementById("boat9-1temp3").style.display = "none";
    document.getElementById("boat10-1temp3").style.display = "none";
    document.getElementById("boat11-1temp3").style.display = "none";
    document.getElementById("building1-1temp3").style.display = "none";
    document.getElementById("building2-1temp3").style.display = "none";
    document.getElementById("building3-1temp3").style.display = "none";
    document.getElementById("icon1-1temp3").style.display = "none";
    document.getElementById("icon2-1temp3").style.display = "none";

    //document.getElementById("popupthtemp2").style.display = "none";
   
    document.getElementById("text_queuethtemp3").style.display = "none";
    document.getElementById("text_taxithtemp3").style.display = "none";
    document.getElementById("text_parkingth1temp3").style.display = "none";
    document.getElementById("text_parkingth2temp3").style.display = "none";
    document.getElementById("text_locationth1temp3").style.display = "none";
    document.getElementById("text_locationth2temp3").style.display = "none";
    document.getElementById("text_locationth3temp3").style.display = "none";
    document.getElementById("text_locationth4temp3").style.display = "none";
    document.getElementById("text_busth1temp3").style.display = "none";
    document.getElementById("text_busth2temp3").style.display = "none";
    document.getElementById("text_busth3temp3").style.display = "none";
    document.getElementById("line_btsth1temp3").style.display = "none";
    document.getElementById("line_btsth2temp3").style.display = "none";
    document.getElementById("line_btsth3temp3").style.display = "none";
    document.getElementById("line_btsth4temp3").style.display = "none";
    document.getElementById("text_boatexth1temp3").style.display = "none";
    document.getElementById("text_boatexth1-1temp3").style.display = "none";
    document.getElementById("text_boatth1temp3").style.display = "none";
    document.getElementById("text_taxith1temp3").style.display = "none";
    document.getElementById("text_taxith2temp3").style.display = "none";
    document.getElementById("text_queueth1temp3").style.display = "none";
    document.getElementById("text_queueth2temp3").style.display = "none";

    document.getElementById("boatexth1temp3").style.display = "none";
    document.getElementById("boatexth2temp3").style.display = "none";
    document.getElementById("boatexth3temp3").style.display = "none";
    document.getElementById("boatexth4temp3").style.display = "none";
    document.getElementById("boatexth5temp3").style.display = "none";
    document.getElementById("boatexth6temp3").style.display = "none";
    document.getElementById("boatexth7temp3").style.display = "none";
    document.getElementById("boatexth8temp3").style.display = "none";
   

    document.getElementById("englishboattemp3").style.display = "block";
    document.getElementById("englishbtstemp3").style.display = "block";
    document.getElementById("englishtaxitemp3").style.display = "block";
    document.getElementById("englishboatextemp3").style.display = "block";
    document.getElementById("englishbustemp3").style.display = "block";
    document.getElementById("englishparkingtemp3").style.display = "block";
    document.getElementById("boat3-2temp3").style.display = "block";
    document.getElementById("boat6-2temp3").style.display = "block";
    document.getElementById("boat7-2temp3").style.display = "block";
    document.getElementById("boat8-2temp3").style.display = "block";
    document.getElementById("boat9-2temp3").style.display = "block";
    document.getElementById("boat11-2temp3").style.display = "block";
    document.getElementById("building1-2temp3").style.display = "block";
    document.getElementById("building2-2temp3").style.display = "block";
    document.getElementById("building3-2temp3").style.display = "block";
    document.getElementById("icon1-2temp3").style.display = "block";
    document.getElementById("icon2-2temp3").style.display = "block";

    //document.getElementById("popupentemp2").style.display = "block";
   
    document.getElementById("text_queueentemp3").style.display = "block";
    document.getElementById("text_taxientemp3").style.display = "block";
    document.getElementById("text_parkingen1temp3").style.display = "block";
    document.getElementById("text_parkingen2temp3").style.display = "block";
    document.getElementById("text_locationen1temp3").style.display = "block";
    document.getElementById("text_locationen2temp3").style.display = "block";
    document.getElementById("text_locationen3temp3").style.display = "block";
    document.getElementById("text_locationen4temp3").style.display = "block";
    document.getElementById("text_busen1temp3").style.display = "block";
    document.getElementById("text_busen2temp3").style.display = "block";
    document.getElementById("text_busen3temp3").style.display = "block";
    document.getElementById("line_btsen1temp3").style.display = "block";
    document.getElementById("line_btsen2temp3").style.display = "block";
    document.getElementById("line_btsen3temp3").style.display = "block";
    document.getElementById("line_btsen4temp3").style.display = "block";
    document.getElementById("text_boatexen1temp3").style.display = "block";
    document.getElementById("text_boatexen1-1temp3").style.display = "block";
    document.getElementById("text_boaten1temp3").style.display = "block";
    document.getElementById("text_taxien1temp3").style.display = "block";
    document.getElementById("text_taxien2temp3").style.display = "block";
    document.getElementById("text_queueen1temp3").style.display = "block";
    document.getElementById("text_queueen2temp3").style.display = "block";
   

    document.getElementById("chineseboattemp3").style.display = "none";
    document.getElementById("chinesebtstemp3").style.display = "none";
    document.getElementById("chinesetaxitemp3").style.display = "none";
    document.getElementById("chineseboatextemp3").style.display = "none";
    document.getElementById("chinesebustemp3").style.display = "none";
    document.getElementById("chineseparkingtemp3").style.display = "none";
    
    document.getElementById("boat3-3temp3").style.display = "none";
    document.getElementById("boat6-3temp3").style.display = "none";
    document.getElementById("boat7-3temp3").style.display = "none";
    document.getElementById("boat8-3temp3").style.display = "none";
    document.getElementById("boat9-3temp3").style.display = "none";
    document.getElementById("boat11-3temp3").style.display = "none";
    document.getElementById("building1-3temp3").style.display = "none";
    document.getElementById("building2-3temp3").style.display = "none";
    document.getElementById("building3-3temp3").style.display = "none";
    document.getElementById("icon1-3temp3").style.display = "none";
    document.getElementById("icon2-3temp3").style.display = "none";

    //document.getElementById("popupchitemp2").style.display = "none";
    
    document.getElementById("text_queuechtemp3").style.display = "none";
    document.getElementById("text_taxichtemp3").style.display = "none";
    document.getElementById("text_parkingch1temp3").style.display = "none";
    document.getElementById("text_parkingch2temp3").style.display = "none";
    document.getElementById("text_locationch1temp3").style.display = "none";
    document.getElementById("text_locationch2temp3").style.display = "none";
    document.getElementById("text_locationch3temp3").style.display = "none";
    document.getElementById("text_locationch4temp3").style.display = "none";
    document.getElementById("text_busch1temp3").style.display = "none";
    document.getElementById("text_busch2temp3").style.display = "none";
    document.getElementById("text_busch3temp3").style.display = "none";
    document.getElementById("line_btsch1temp3").style.display = "none";
    document.getElementById("line_btsch2temp3").style.display = "none";
    document.getElementById("line_btsch3temp3").style.display = "none";
    document.getElementById("line_btsch4temp3").style.display = "none";
    document.getElementById("text_boatexch1temp3").style.display = "none";
    document.getElementById("text_boatexch1-1temp3").style.display = "none";
    document.getElementById("text_boatch1temp3").style.display = "none";
    document.getElementById("text_taxich1temp3").style.display = "none";
    document.getElementById("text_taxich2temp3").style.display = "none";
    document.getElementById("text_queuech1temp3").style.display = "none";
    document.getElementById("text_queuech2temp3").style.display = "none";
    document.getElementById("text_boatch4temp3").style.display = "none";
    document.getElementById("boatexch13temp3").style.display = "none";
    document.getElementById("boatexch14temp3").style.display = "none";
    document.getElementById("boatexch15temp3").style.display = "none";
    document.getElementById("boatexch16temp3").style.display = "none";
    document.getElementById("boatexch17temp3").style.display = "none";
    document.getElementById("boatexch18temp3").style.display = "none";
    //-------------------------------------------------------------------------------------------------4---------------------------------------------------------------------------------------
    document.getElementById("thaiboattemp4").style.display = "none";
    document.getElementById("thaibtstemp4").style.display = "none";
    document.getElementById("thaitaxitemp4").style.display = "none";
    document.getElementById("thaiboatextemp4").style.display = "none";
    document.getElementById("thaibustemp4").style.display = "none";
    document.getElementById("thaiparkingtemp4").style.display = "none";
   
    document.getElementById("boat1-1temp4").style.display = "none";
    document.getElementById("boat2-1temp4").style.display = "none";
    document.getElementById("boat3-1temp4").style.display = "none";
    document.getElementById("boat4-1temp4").style.display = "none";
    document.getElementById("boat5-1temp4").style.display = "none";
    document.getElementById("boat6-1temp4").style.display = "none";
    document.getElementById("boat7-1temp4").style.display = "none";
    document.getElementById("boat8-1temp4").style.display = "none";
    document.getElementById("boat9-1temp4").style.display = "none";
    document.getElementById("boat10-1temp4").style.display = "none";
    document.getElementById("boat11-1temp4").style.display = "none";
    document.getElementById("building1-1temp4").style.display = "none";
    document.getElementById("building2-1temp4").style.display = "none";
    document.getElementById("building3-1temp4").style.display = "none";
    document.getElementById("icon1-1temp4").style.display = "none";
    document.getElementById("icon2-1temp4").style.display = "none";

    //document.getElementById("popupthtemp2").style.display = "none";
    document.getElementById("boatth3temp4").style.display = "none";
    document.getElementById("boatth4temp4").style.display = "none";
    document.getElementById("boatth5temp4").style.display = "none";
    document.getElementById("boatth6temp4").style.display = "none";
    document.getElementById("text_queuethtemp4").style.display = "none";
    document.getElementById("text_taxithtemp4").style.display = "none";
    document.getElementById("text_parkingth1temp4").style.display = "none";
    document.getElementById("text_parkingth2temp4").style.display = "none";
    document.getElementById("text_locationth1temp4").style.display = "none";
    document.getElementById("text_locationth2temp4").style.display = "none";
    document.getElementById("text_locationth3temp4").style.display = "none";
    document.getElementById("text_locationth4temp4").style.display = "none";
    document.getElementById("text_busth1temp4").style.display = "none";
    document.getElementById("text_busth2temp4").style.display = "none";
    document.getElementById("text_busth3temp4").style.display = "none";
    document.getElementById("line_btsth1temp4").style.display = "none";
    document.getElementById("line_btsth2temp4").style.display = "none";
    document.getElementById("line_btsth3temp4").style.display = "none";
    document.getElementById("line_btsth4temp4").style.display = "none";
    document.getElementById("text_boatexth1temp4").style.display = "none";
    document.getElementById("text_boatexth1-1temp4").style.display = "none";
    document.getElementById("text_boatth1temp4").style.display = "none";
    document.getElementById("text_taxith1temp4").style.display = "none";
    document.getElementById("text_taxith2temp4").style.display = "none";
    document.getElementById("text_queueth1temp4").style.display = "none";
    document.getElementById("text_queueth2temp4").style.display = "none";
    document.getElementById("text_boatth4temp4").style.display = "none";
    document.getElementById("text_boatth2temp4").style.display = "none";
    document.getElementById("text_boatth3temp4").style.display = "none";
    document.getElementById("boatth1temp4").style.display = "none";
    document.getElementById("boatth2temp4").style.display = "none";
    document.getElementById("boatexth1temp4").style.display = "none";
    document.getElementById("boatexth2temp4").style.display = "none";
    document.getElementById("boatexth3temp4").style.display = "none";
    document.getElementById("boatexth4temp4").style.display = "none";
    document.getElementById("boatexth5temp4").style.display = "none";
    document.getElementById("boatexth6temp4").style.display = "none";
    document.getElementById("boatexth7temp4").style.display = "none";
    document.getElementById("boatexth8temp4").style.display = "none";
   

    document.getElementById("englishboattemp4").style.display = "block";
    document.getElementById("englishbtstemp4").style.display = "block";
    document.getElementById("englishtaxitemp4").style.display = "block";
    document.getElementById("englishboatextemp4").style.display = "block";
    document.getElementById("englishbustemp4").style.display = "block";
    document.getElementById("englishparkingtemp4").style.display = "block";
    document.getElementById("boat3-2temp4").style.display = "block";
    document.getElementById("boat6-2temp4").style.display = "block";
    document.getElementById("boat7-2temp4").style.display = "block";
    document.getElementById("boat8-2temp4").style.display = "block";
    document.getElementById("boat9-2temp4").style.display = "block";
    document.getElementById("boat11-2temp4").style.display = "block";
    document.getElementById("building1-2temp4").style.display = "block";
    document.getElementById("building2-2temp4").style.display = "block";
    document.getElementById("building3-2temp4").style.display = "block";
    document.getElementById("icon1-2temp4").style.display = "block";
    document.getElementById("icon2-2temp4").style.display = "block";

    //document.getElementById("popupentemp2").style.display = "block";
    document.getElementById("boaten3temp4").style.display = "block";
    document.getElementById("boaten4temp4").style.display = "block";
    document.getElementById("boaten5temp4").style.display = "block";
    document.getElementById("boaten6temp4").style.display = "block";
    document.getElementById("text_queueentemp4").style.display = "block";
    document.getElementById("text_taxientemp4").style.display = "block";
    document.getElementById("text_parkingen1temp4").style.display = "block";
    document.getElementById("text_parkingen2temp4").style.display = "block";
    document.getElementById("text_locationen1temp4").style.display = "block";
    document.getElementById("text_locationen2temp4").style.display = "block";
    document.getElementById("text_locationen3temp4").style.display = "block";
    document.getElementById("text_locationen4temp4").style.display = "block";
    document.getElementById("text_busen1temp4").style.display = "block";
    document.getElementById("text_busen2temp4").style.display = "block";
    document.getElementById("text_busen3temp4").style.display = "block";
    document.getElementById("line_btsen1temp4").style.display = "block";
    document.getElementById("line_btsen2temp4").style.display = "block";
    document.getElementById("line_btsen3temp4").style.display = "block";
    document.getElementById("line_btsen4temp4").style.display = "block";
    document.getElementById("text_boatexen1temp4").style.display = "block";
    document.getElementById("text_boatexen1-1temp4").style.display = "block";
    document.getElementById("text_boaten1temp4").style.display = "block";
    document.getElementById("text_taxien1temp4").style.display = "block";
    document.getElementById("text_taxien2temp4").style.display = "block";
    document.getElementById("text_queueen1temp4").style.display = "block";
    document.getElementById("text_queueen2temp4").style.display = "block";
    document.getElementById("boaten1temp4").style.display = "block";
    document.getElementById("boaten2temp4").style.display = "block";
    document.getElementById("boatexen13temp4").style.display = "block";
    document.getElementById("boatexen14temp4").style.display = "block";
    document.getElementById("boatexen15temp4").style.display = "block";
    document.getElementById("boatexen16temp4").style.display = "block";
    document.getElementById("boatexen17temp4").style.display = "block";
    document.getElementById("boatexen18temp4").style.display = "block";

    document.getElementById("chineseboattemp4").style.display = "none";
    document.getElementById("chinesebtstemp4").style.display = "none";
    document.getElementById("chinesetaxitemp4").style.display = "none";
    document.getElementById("chineseboatextemp4").style.display = "none";
    document.getElementById("chinesebustemp4").style.display = "none";
    document.getElementById("chineseparkingtemp4").style.display = "none";
   
    document.getElementById("boat3-3temp4").style.display = "none";
    document.getElementById("boat6-3temp4").style.display = "none";
    document.getElementById("boat7-3temp4").style.display = "none";
    document.getElementById("boat8-3temp4").style.display = "none";
    document.getElementById("boat9-3temp4").style.display = "none";
    document.getElementById("boat11-3temp4").style.display = "none";
    document.getElementById("building1-3temp4").style.display = "none";
    document.getElementById("building2-3temp4").style.display = "none";
    document.getElementById("building3-3temp4").style.display = "none";
    document.getElementById("icon1-3temp4").style.display = "none";
    document.getElementById("icon2-3temp4").style.display = "none";

    //document.getElementById("popupchitemp2").style.display = "none";
    document.getElementById("boatch3temp4").style.display = "none";
    document.getElementById("boatch4temp4").style.display = "none";
    document.getElementById("boatch5temp4").style.display = "none";
    document.getElementById("boatch6temp4").style.display = "none";
    document.getElementById("text_queuechtemp4").style.display = "none";
    document.getElementById("text_taxichtemp4").style.display = "none";
    document.getElementById("text_parkingch1temp4").style.display = "none";
    document.getElementById("text_parkingch2temp4").style.display = "none";
    document.getElementById("text_locationch1temp4").style.display = "none";
    document.getElementById("text_locationch2temp4").style.display = "none";
    document.getElementById("text_locationch3temp4").style.display = "none";
    document.getElementById("text_locationch4temp4").style.display = "none";
    document.getElementById("text_busch1temp4").style.display = "none";
    document.getElementById("text_busch2temp4").style.display = "none";
    document.getElementById("text_busch3temp4").style.display = "none";
    document.getElementById("line_btsch1temp4").style.display = "none";
    document.getElementById("line_btsch2temp4").style.display = "none";
    document.getElementById("line_btsch3temp4").style.display = "none";
    document.getElementById("line_btsch4temp4").style.display = "none";
    document.getElementById("text_boatexch1temp4").style.display = "none";
    document.getElementById("text_boatexch1-1temp4").style.display = "none";
    document.getElementById("text_boatch1temp4").style.display = "none";
    document.getElementById("text_taxich1temp4").style.display = "none";
    document.getElementById("text_taxich2temp4").style.display = "none";
    document.getElementById("text_queuech1temp4").style.display = "none";
    document.getElementById("text_queuech2temp4").style.display = "none";
    document.getElementById("text_boatch4temp4").style.display = "none";
    document.getElementById("boatexch13temp4").style.display = "none";
    document.getElementById("boatexch14temp4").style.display = "none";
    document.getElementById("boatexch15temp4").style.display = "none";
    document.getElementById("boatexch16temp4").style.display = "none";
    document.getElementById("boatexch17temp4").style.display = "none";
    document.getElementById("boatexch18temp4").style.display = "none";
    //-------------------------------------------------------------------------------------------------5---------------------------------------------------------------------------------------
    document.getElementById("thaiboattemp5").style.display = "none";
    document.getElementById("thaibtstemp5").style.display = "none";
    document.getElementById("thaitaxitemp5").style.display = "none";
    document.getElementById("thaiboatextemp5").style.display = "none";
    document.getElementById("thaibustemp5").style.display = "none";
    document.getElementById("thaiparkingtemp5").style.display = "none";
   
    document.getElementById("boat1-1temp5").style.display = "none";
    document.getElementById("boat2-1temp5").style.display = "none";
    document.getElementById("boat3-1temp5").style.display = "none";
    document.getElementById("boat4-1temp5").style.display = "none";
    document.getElementById("boat5-1temp5").style.display = "none";
    document.getElementById("boat6-1temp5").style.display = "none";
    document.getElementById("boat7-1temp5").style.display = "none";
    document.getElementById("boat8-1temp5").style.display = "none";
    document.getElementById("boat9-1temp5").style.display = "none";
    document.getElementById("boat10-1temp5").style.display = "none";
    document.getElementById("boat11-1temp5").style.display = "none";
    document.getElementById("building1-1temp5").style.display = "none";
    document.getElementById("building2-1temp5").style.display = "none";
    document.getElementById("building3-1temp5").style.display = "none";
    document.getElementById("icon1-1temp5").style.display = "none";
    document.getElementById("icon2-1temp5").style.display = "none";

    //document.getElementById("popupthtemp2").style.display = "none";
    document.getElementById("boatth3temp5").style.display = "none";
    document.getElementById("boatth4temp5").style.display = "none";
    document.getElementById("boatth5temp5").style.display = "none";
    document.getElementById("boatth6temp5").style.display = "none";
    document.getElementById("text_queuethtemp5").style.display = "none";
    document.getElementById("text_taxithtemp5").style.display = "none";
    document.getElementById("text_parkingth1temp5").style.display = "none";
    document.getElementById("text_parkingth2temp5").style.display = "none";
    document.getElementById("text_locationth1temp5").style.display = "none";
    document.getElementById("text_locationth2temp5").style.display = "none";
    document.getElementById("text_locationth3temp5").style.display = "none";
    document.getElementById("text_locationth4temp5").style.display = "none";
    document.getElementById("text_busth1temp5").style.display = "none";
    document.getElementById("text_busth2temp5").style.display = "none";
    document.getElementById("text_busth3temp5").style.display = "none";
    document.getElementById("line_btsth1temp5").style.display = "none";
    document.getElementById("line_btsth2temp5").style.display = "none";
    document.getElementById("line_btsth3temp5").style.display = "none";
    document.getElementById("line_btsth4temp5").style.display = "none";
    document.getElementById("text_boatexth1temp5").style.display = "none";
    document.getElementById("text_boatexth1-1temp5").style.display = "none";
    document.getElementById("text_boatth1temp5").style.display = "none";
    document.getElementById("text_taxith1temp5").style.display = "none";
    document.getElementById("text_taxith2temp5").style.display = "none";
    document.getElementById("text_queueth1temp5").style.display = "none";
    document.getElementById("text_queueth2temp5").style.display = "none";
    document.getElementById("text_boatth4temp5").style.display = "none";
    document.getElementById("text_boatth2temp5").style.display = "none";
    document.getElementById("text_boatth3temp5").style.display = "none";
    document.getElementById("boatth1temp5").style.display = "none";
    document.getElementById("boatth2temp5").style.display = "none";
    document.getElementById("boatexth1temp5").style.display = "none";
    document.getElementById("boatexth2temp5").style.display = "none";
    document.getElementById("boatexth3temp5").style.display = "none";
    document.getElementById("boatexth4temp5").style.display = "none";
    document.getElementById("boatexth5temp5").style.display = "none";
    document.getElementById("boatexth6temp5").style.display = "none";
    document.getElementById("boatexth7temp5").style.display = "none";
    document.getElementById("boatexth8temp5").style.display = "none";
    

    document.getElementById("englishboattemp5").style.display = "block";
    document.getElementById("englishbtstemp5").style.display = "block";
    document.getElementById("englishtaxitemp5").style.display = "block";
    document.getElementById("englishboatextemp5").style.display = "block";
    document.getElementById("englishbustemp5").style.display = "block";
    document.getElementById("englishparkingtemp5").style.display = "block";
    document.getElementById("boat3-2temp5").style.display = "block";
    document.getElementById("boat6-2temp5").style.display = "block";
    document.getElementById("boat7-2temp5").style.display = "block";
    document.getElementById("boat8-2temp5").style.display = "block";
    document.getElementById("boat9-2temp5").style.display = "block";
    document.getElementById("boat11-2temp5").style.display = "block";
    document.getElementById("building1-2temp5").style.display = "block";
    document.getElementById("building2-2temp5").style.display = "block";
    document.getElementById("building3-2temp5").style.display = "block";
    document.getElementById("icon1-2temp5").style.display = "block";
    document.getElementById("icon2-2temp5").style.display = "block";
  
    //document.getElementById("popupentemp2").style.display = "block";
    document.getElementById("boaten3temp5").style.display = "block";
    document.getElementById("boaten4temp5").style.display = "block";
    document.getElementById("boaten5temp5").style.display = "block";
    document.getElementById("boaten6temp5").style.display = "block";
    document.getElementById("text_queueentemp5").style.display = "block";
    document.getElementById("text_taxientemp5").style.display = "block";
    document.getElementById("text_parkingen1temp5").style.display = "block";
    document.getElementById("text_parkingen2temp5").style.display = "block";
    document.getElementById("text_locationen1temp5").style.display = "block";
    document.getElementById("text_locationen2temp5").style.display = "block";
    document.getElementById("text_locationen3temp5").style.display = "block";
    document.getElementById("text_locationen4temp5").style.display = "block";
    document.getElementById("text_busen1temp5").style.display = "block";
    document.getElementById("text_busen2temp5").style.display = "block";
    document.getElementById("text_busen3temp5").style.display = "block";
    document.getElementById("line_btsen1temp5").style.display = "block";
    document.getElementById("line_btsen2temp5").style.display = "block";
    document.getElementById("line_btsen3temp5").style.display = "block";
    document.getElementById("line_btsen4temp5").style.display = "block";
    document.getElementById("text_boatexen1temp5").style.display = "block";
    document.getElementById("text_boatexen1-1temp5").style.display = "block";
    document.getElementById("text_boaten1temp5").style.display = "block";
    document.getElementById("text_taxien1temp5").style.display = "block";
    document.getElementById("text_taxien2temp5").style.display = "block";
    document.getElementById("text_queueen1temp5").style.display = "block";
    document.getElementById("text_queueen2temp5").style.display = "block";
    document.getElementById("boaten1temp5").style.display = "block";
    document.getElementById("boaten2temp5").style.display = "block";
    document.getElementById("boatexen13temp5").style.display = "block";
    document.getElementById("boatexen14temp5").style.display = "block";
    document.getElementById("boatexen15temp5").style.display = "block";
    document.getElementById("boatexen16temp5").style.display = "block";
    document.getElementById("boatexen17temp5").style.display = "block";
    document.getElementById("boatexen18temp5").style.display = "block";

    document.getElementById("chineseboattemp5").style.display = "none";
    document.getElementById("chinesebtstemp5").style.display = "none";
    document.getElementById("chinesetaxitemp5").style.display = "none";
    document.getElementById("chineseboatextemp5").style.display = "none";
    document.getElementById("chinesebustemp5").style.display = "none";
    document.getElementById("chineseparkingtemp5").style.display = "none";
   
    document.getElementById("boat3-3temp5").style.display = "none";
    document.getElementById("boat6-3temp5").style.display = "none";
    document.getElementById("boat7-3temp5").style.display = "none";
    document.getElementById("boat8-3temp5").style.display = "none";
    document.getElementById("boat9-3temp5").style.display = "none";
    document.getElementById("boat11-3temp5").style.display = "none";
    document.getElementById("building1-3temp5").style.display = "none";
    document.getElementById("building2-3temp5").style.display = "none";
    document.getElementById("building3-3temp5").style.display = "none";
    document.getElementById("icon1-3temp5").style.display = "none";
    document.getElementById("icon2-3temp5").style.display = "none";

    //document.getElementById("popupchitemp2").style.display = "none";
    document.getElementById("boatch3temp5").style.display = "none";
    document.getElementById("boatch4temp5").style.display = "none";
    document.getElementById("boatch5temp5").style.display = "none";
    document.getElementById("boatch6temp5").style.display = "none";
    document.getElementById("text_queuechtemp5").style.display = "none";
    document.getElementById("text_taxichtemp5").style.display = "none";
    document.getElementById("text_parkingch1temp5").style.display = "none";
    document.getElementById("text_parkingch2temp5").style.display = "none";
    document.getElementById("text_locationch1temp5").style.display = "none";
    document.getElementById("text_locationch2temp5").style.display = "none";
    document.getElementById("text_locationch3temp5").style.display = "none";
    document.getElementById("text_locationch4temp5").style.display = "none";
    document.getElementById("text_busch1temp5").style.display = "none";
    document.getElementById("text_busch2temp5").style.display = "none";
    document.getElementById("text_busch3temp5").style.display = "none";
    document.getElementById("line_btsch1temp5").style.display = "none";
    document.getElementById("line_btsch2temp5").style.display = "none";
    document.getElementById("line_btsch3temp5").style.display = "none";
    document.getElementById("line_btsch4temp5").style.display = "none";
    document.getElementById("text_boatexch1temp5").style.display = "none";
    document.getElementById("text_boatexch1-1temp5").style.display = "none";
    document.getElementById("text_boatch1temp5").style.display = "none";
    document.getElementById("text_taxich1temp5").style.display = "none";
    document.getElementById("text_taxich2temp5").style.display = "none";
    document.getElementById("text_queuech1temp5").style.display = "none";
    document.getElementById("text_queuech2temp5").style.display = "none";
    document.getElementById("text_boatch4temp5").style.display = "none";
    document.getElementById("boatexch13temp5").style.display = "none";
    document.getElementById("boatexch14temp5").style.display = "none";
    document.getElementById("boatexch15temp5").style.display = "none";
    document.getElementById("boatexch16temp5").style.display = "none";
    document.getElementById("boatexch17temp5").style.display = "none";
    document.getElementById("boatexch18temp5").style.display = "none";
    //-------------------------------------------------------------------------------------------------6---------------------------------------------------------------------------------------
    document.getElementById("thaiboattemp6").style.display = "none";
    document.getElementById("thaibtstemp6").style.display = "none";
    document.getElementById("thaitaxitemp6").style.display = "none";
    document.getElementById("thaiboatextemp6").style.display = "none";
    document.getElementById("thaibustemp6").style.display = "none";
    document.getElementById("thaiparkingtemp6").style.display = "none";
    
    document.getElementById("building1-1temp6").style.display = "none";
    document.getElementById("building2-1temp6").style.display = "none";
    document.getElementById("building3-1temp6").style.display = "none";
    document.getElementById("icon1-1temp6").style.display = "none";
    document.getElementById("icon2-1temp6").style.display = "none";

    //document.getElementById("popupthtemp2").style.display = "none";
    document.getElementById("boatth3temp6").style.display = "none";
    document.getElementById("boatth4temp6").style.display = "none";
    document.getElementById("boatth5temp6").style.display = "none";
    document.getElementById("boatth6temp6").style.display = "none";
    document.getElementById("text_queuethtemp6").style.display = "none";
    document.getElementById("text_taxithtemp6").style.display = "none";
    document.getElementById("text_parkingth1temp6").style.display = "none";
    document.getElementById("text_parkingth2temp6").style.display = "none";
    document.getElementById("text_locationth1temp6").style.display = "none";
    document.getElementById("text_locationth2temp6").style.display = "none";
    document.getElementById("text_locationth3temp6").style.display = "none";
    document.getElementById("text_locationth4temp6").style.display = "none";
    document.getElementById("text_busth1temp6").style.display = "none";
    document.getElementById("text_busth2temp6").style.display = "none";
    document.getElementById("text_busth3temp6").style.display = "none";
    document.getElementById("line_btsth1temp6").style.display = "none";
    document.getElementById("line_btsth2temp6").style.display = "none";
    document.getElementById("line_btsth3temp6").style.display = "none";
    document.getElementById("line_btsth4temp6").style.display = "none";
    document.getElementById("text_boatexth1temp6").style.display = "none";
    document.getElementById("text_boatexth1-1temp6").style.display = "none";
    document.getElementById("text_boatth1temp6").style.display = "none";
    document.getElementById("text_taxith1temp6").style.display = "none";
    document.getElementById("text_taxith2temp6").style.display = "none";
    document.getElementById("text_queueth1temp6").style.display = "none";
    document.getElementById("text_queueth2temp6").style.display = "none";
    document.getElementById("text_boatth4temp6").style.display = "none";
    document.getElementById("text_boatth2temp6").style.display = "none";
    document.getElementById("text_boatth3temp6").style.display = "none";
    document.getElementById("boatth1temp6").style.display = "none";
    document.getElementById("boatth2temp6").style.display = "none";
   
   

    document.getElementById("englishboattemp6").style.display = "block";
    document.getElementById("englishbtstemp6").style.display = "block";
    document.getElementById("englishtaxitemp6").style.display = "block";
    document.getElementById("englishboatextemp6").style.display = "block";
    document.getElementById("englishbustemp6").style.display = "block";
    document.getElementById("englishparkingtemp6").style.display = "block";
    document.getElementById("boat3-2temp6").style.display = "block";
    document.getElementById("boat6-2temp6").style.display = "block";
    document.getElementById("boat7-2temp6").style.display = "block";
    document.getElementById("boat8-2temp6").style.display = "block";
    document.getElementById("boat9-2temp6").style.display = "block";
    document.getElementById("boat11-2temp6").style.display = "block";
    document.getElementById("building1-2temp6").style.display = "block";
    document.getElementById("building2-2temp6").style.display = "block";
    document.getElementById("building3-2temp6").style.display = "block";
    document.getElementById("icon1-2temp6").style.display = "block";
    document.getElementById("icon2-2temp6").style.display = "block";

    //document.getElementById("popupentemp2").style.display = "block";
    document.getElementById("boaten3temp6").style.display = "block";
    document.getElementById("boaten4temp6").style.display = "block";
    document.getElementById("boaten5temp6").style.display = "block";
    document.getElementById("boaten6temp6").style.display = "block";
    document.getElementById("text_queueentemp6").style.display = "block";
    document.getElementById("text_taxientemp6").style.display = "block";
    document.getElementById("text_parkingen1temp6").style.display = "block";
    document.getElementById("text_parkingen2temp6").style.display = "block";
    document.getElementById("text_locationen1temp6").style.display = "block";
    document.getElementById("text_locationen2temp6").style.display = "block";
    document.getElementById("text_locationen3temp6").style.display = "block";
    document.getElementById("text_locationen4temp6").style.display = "block";
    document.getElementById("text_busen1temp6").style.display = "block";
    document.getElementById("text_busen2temp6").style.display = "block";
    document.getElementById("text_busen3temp6").style.display = "block";
    document.getElementById("line_btsen1temp6").style.display = "block";
    document.getElementById("line_btsen2temp6").style.display = "block";
    document.getElementById("line_btsen3temp6").style.display = "block";
    document.getElementById("line_btsen4temp6").style.display = "block";
    document.getElementById("text_boatexen1temp6").style.display = "block";
    document.getElementById("text_boatexen1-1temp6").style.display = "block";
    document.getElementById("text_boaten1temp6").style.display = "block";
    document.getElementById("text_taxien1temp6").style.display = "block";
    document.getElementById("text_taxien2temp6").style.display = "block";
    document.getElementById("text_queueen1temp6").style.display = "block";
    document.getElementById("text_queueen2temp6").style.display = "block";
    document.getElementById("boatexen13temp6").style.display = "block";
    document.getElementById("boatexen14temp6").style.display = "block";
    document.getElementById("boatexen15temp6").style.display = "block";
    document.getElementById("boatexen16temp6").style.display = "block";
    document.getElementById("boatexen17temp6").style.display = "block";
    document.getElementById("boatexen18temp6").style.display = "block";

    document.getElementById("chineseboattemp6").style.display = "none";
    document.getElementById("chinesebtstemp6").style.display = "none";
    document.getElementById("chinesetaxitemp6").style.display = "none";
    document.getElementById("chineseboatextemp6").style.display = "none";
    document.getElementById("chinesebustemp6").style.display = "none";
    document.getElementById("chineseparkingtemp6").style.display = "none";
  
    document.getElementById("boat3-3temp6").style.display = "none";
    document.getElementById("boat6-3temp6").style.display = "none";
    document.getElementById("boat7-3temp6").style.display = "none";
    document.getElementById("boat8-3temp6").style.display = "none";
    document.getElementById("boat9-3temp6").style.display = "none";
    document.getElementById("boat11-3temp6").style.display = "none";
    document.getElementById("building1-3temp6").style.display = "none";
    document.getElementById("building2-3temp6").style.display = "none";
    document.getElementById("building3-3temp6").style.display = "none";
    document.getElementById("icon1-3temp6").style.display = "none";
    document.getElementById("icon2-3temp6").style.display = "none";

    //document.getElementById("popupchitemp2").style.display = "none";
    document.getElementById("boatch3temp6").style.display = "none";
    document.getElementById("boatch4temp6").style.display = "none";
    document.getElementById("boatch5temp6").style.display = "none";
    document.getElementById("boatch6temp6").style.display = "none";
    document.getElementById("text_queuechtemp6").style.display = "none";
    document.getElementById("text_taxichtemp6").style.display = "none";
    document.getElementById("text_parkingch1temp6").style.display = "none";
    document.getElementById("text_parkingch2temp6").style.display = "none";
    document.getElementById("text_locationch1temp6").style.display = "none";
    document.getElementById("text_locationch2temp6").style.display = "none";
    document.getElementById("text_locationch3temp6").style.display = "none";
    document.getElementById("text_locationch4temp6").style.display = "none";
    document.getElementById("text_busch1temp6").style.display = "none";
    document.getElementById("text_busch2temp6").style.display = "none";
    document.getElementById("text_busch3temp6").style.display = "none";
    document.getElementById("line_btsch1temp6").style.display = "none";
    document.getElementById("line_btsch2temp6").style.display = "none";
    document.getElementById("line_btsch3temp6").style.display = "none";
    document.getElementById("line_btsch4temp6").style.display = "none";
    document.getElementById("text_boatexch1temp6").style.display = "none";
    document.getElementById("text_boatexch1-1temp6").style.display = "none";
    document.getElementById("text_boatch1temp6").style.display = "none";
    document.getElementById("text_taxich1temp6").style.display = "none";
    document.getElementById("text_taxich2temp6").style.display = "none";
    document.getElementById("text_queuech1temp6").style.display = "none";
    document.getElementById("text_queuech2temp6").style.display = "none";
    document.getElementById("text_boatch4temp6").style.display = "none";
    document.getElementById("boatexch13temp6").style.display = "none";
    document.getElementById("boatexch14temp6").style.display = "none";
    document.getElementById("boatexch15temp6").style.display = "none";
    document.getElementById("boatexch16temp6").style.display = "none";
    document.getElementById("boatexch17temp6").style.display = "none";
    document.getElementById("boatexch18temp6").style.display = "none";

    langs = "eng"
    Boat(langs);
    Boatex(langs);
    Bus(langs);
    BTS(langs);
    //setInterval(function () {
    //    changeLanguagechi();
    //}, 10000);
    //setInterval(function () {
    //    changeLanguage(time);
    //}, time  * 1000);
}

// ฟังก์ชันเปลี่ยนเป็นภาษาจีน
function changeLanguagechi(time) {
    document.getElementById("thaiboat").style.display = "none";
    document.getElementById("thaibts").style.display = "none";
    document.getElementById("thaitaxi").style.display = "none";
    document.getElementById("thaiboatex").style.display = "none";
    document.getElementById("thaibus").style.display = "none";
    document.getElementById("thaiparking").style.display = "none";
    document.getElementById("boat1-1").style.display = "none";
    document.getElementById("boat2-1").style.display = "none";
    document.getElementById("boat3-1").style.display = "none";
    document.getElementById("boat4-1").style.display = "none";
    document.getElementById("boat5-1").style.display = "none";
    document.getElementById("boat6-1").style.display = "none";
    document.getElementById("boat7-1").style.display = "none";
    document.getElementById("boat8-1").style.display = "none";
    document.getElementById("boat9-1").style.display = "none";
    document.getElementById("boat10-1").style.display = "none";
    document.getElementById("boat11-1").style.display = "none";
    document.getElementById("building1-1").style.display = "none";
    document.getElementById("building2-1").style.display = "none";
    document.getElementById("building3-1").style.display = "none";
    document.getElementById("icon1-1").style.display = "none";
    document.getElementById("icon2-1").style.display = "none";
    document.getElementById("popupth").style.display = "none";
    document.getElementById("boatth3").style.display = "none";
    document.getElementById("boatth4").style.display = "none";
    document.getElementById("boatth5").style.display = "none";
    document.getElementById("boatth6").style.display = "none";
    document.getElementById("text_queueth").style.display = "none";
    document.getElementById("text_taxith").style.display = "none";
    document.getElementById("text_parkingth1").style.display = "none";
    document.getElementById("text_parkingth2").style.display = "none";
    document.getElementById("text_locationth1").style.display = "none";
    document.getElementById("text_locationth2").style.display = "none";
    document.getElementById("text_locationth3").style.display = "none";
    document.getElementById("text_locationth4").style.display = "none";
    document.getElementById("text_busth1").style.display = "none";
    document.getElementById("text_busth2").style.display = "none";
    document.getElementById("text_busth3").style.display = "none";
    document.getElementById("line_btsth1").style.display = "none";
    document.getElementById("line_btsth2").style.display = "none";
    document.getElementById("line_btsth3").style.display = "none";
    document.getElementById("line_btsth4").style.display = "none";
    document.getElementById("text_boatexth1").style.display = "none";
    document.getElementById("text_boatexth1-1").style.display = "none";
    document.getElementById("text_boatth1").style.display = "none";
    document.getElementById("text_taxith1").style.display = "none";
    document.getElementById("text_taxith2").style.display = "none";
    document.getElementById("text_queueth1").style.display = "none";
    document.getElementById("text_queueth2").style.display = "none";
    document.getElementById("text_boatth4").style.display = "none";
    document.getElementById("text_boatth2").style.display = "none";
    document.getElementById("text_boatth3").style.display = "none";
    document.getElementById("boatth1").style.display = "none";
    document.getElementById("boatth2").style.display = "none";
    document.getElementById("boatexth1").style.display = "none";
    document.getElementById("boatexth2").style.display = "none";
    document.getElementById("boatexth3").style.display = "none";
    document.getElementById("boatexth4").style.display = "none";
    document.getElementById("boatexth5").style.display = "none";
    document.getElementById("boatexth6").style.display = "none";
    document.getElementById("boatexth7").style.display = "none";
    document.getElementById("boatexth8").style.display = "none";
    document.getElementById("informationth1").style.display = "none";
    document.getElementById("informationth1temp2").style.display = "none";
    document.getElementById("informationth1temp3").style.display = "none";
    document.getElementById("informationth1temp4").style.display = "none";
    document.getElementById("informationth1temp5").style.display = "none";
    document.getElementById("informationth1temp6").style.display = "none";
    document.getElementById("informationth2").style.display = "none";
    document.getElementById("informationth2temp2").style.display = "none";
    document.getElementById("informationth2temp3").style.display = "none";
    document.getElementById("informationth2temp4").style.display = "none";
    document.getElementById("informationth2temp5").style.display = "none";
    document.getElementById("informationth2temp6").style.display = "none";
    document.getElementById("informationth3").style.display = "none";
    document.getElementById("informationth3temp2").style.display = "none";
    document.getElementById("informationth3temp3").style.display = "none";
    document.getElementById("informationth3temp4").style.display = "none";
    document.getElementById("informationth3temp5").style.display = "none";
    document.getElementById("informationth3temp6").style.display = "none";
    document.getElementById("informationth4").style.display = "none";
    document.getElementById("informationth4temp2").style.display = "none";
    document.getElementById("informationth4temp3").style.display = "none";
    document.getElementById("informationth4temp4").style.display = "none";
    document.getElementById("informationth4temp5").style.display = "none";
    document.getElementById("informationth4temp6").style.display = "none";
    document.getElementById("informationth5").style.display = "none";
    document.getElementById("informationth5temp2").style.display = "none";
    document.getElementById("informationth5temp3").style.display = "none";
    document.getElementById("informationth5temp4").style.display = "none";
    document.getElementById("informationth5temp5").style.display = "none";
    document.getElementById("informationth5temp6").style.display = "none";
    document.getElementById("informationth6").style.display = "none";
    document.getElementById("informationth6temp2").style.display = "none";
    document.getElementById("informationth6temp3").style.display = "none";
    document.getElementById("informationth6temp4").style.display = "none";
    document.getElementById("informationth6temp5").style.display = "none";
    document.getElementById("informationth6temp6").style.display = "none";
    document.getElementById("datesth").style.display = "none";
    document.getElementById("buildingcarth1").style.display = "none";
    document.getElementById("buildingcarth2").style.display = "none";
    document.getElementById("buildingcarth3").style.display = "none";
    document.getElementById("buildingcarth1temp2").style.display = "none";
    document.getElementById("buildingcarth2temp2").style.display = "none";
    document.getElementById("buildingcarth3temp2").style.display = "none";
    document.getElementById("buildingcarth1temp3").style.display = "none";
    document.getElementById("buildingcarth2temp3").style.display = "none";
    document.getElementById("buildingcarth3temp3").style.display = "none";
    document.getElementById("buildingcarth1temp4").style.display = "none";
    document.getElementById("buildingcarth2temp4").style.display = "none";
    document.getElementById("buildingcarth3temp4").style.display = "none";
    document.getElementById("buildingcarth1temp5").style.display = "none";
    document.getElementById("buildingcarth2temp5").style.display = "none";
    document.getElementById("buildingcarth3temp5").style.display = "none";
    document.getElementById("buildingcarth1temp6").style.display = "none";
    document.getElementById("buildingcarth2temp6").style.display = "none";
    document.getElementById("buildingcarth3temp6").style.display = "none";
    document.getElementById("station_busth1temp2").style.display = "none";
    document.getElementById("station_busth2temp2").style.display = "none";
    document.getElementById("station_busth3temp2").style.display = "none";
    document.getElementById("station_busth4temp2").style.display = "none";
    document.getElementById("stationics_busth1temp2").style.display = "none";
    document.getElementById("stationics_busth2temp2").style.display = "none";
    document.getElementById("stationics_busth3temp2").style.display = "none";
    document.getElementById("stationics_busth4temp2").style.display = "none";

    document.getElementById("englishboat").style.display = "none";
    document.getElementById("englishbts").style.display = "none";
    document.getElementById("englishtaxi").style.display = "none";
    document.getElementById("englishboatex").style.display = "none";
    document.getElementById("englishbus").style.display = "none";
    document.getElementById("englishparking").style.display = "none";
    document.getElementById("boat3-2").style.display = "none";
    document.getElementById("boat6-2").style.display = "none";
    document.getElementById("boat7-2").style.display = "none";
    document.getElementById("boat8-2").style.display = "none";
    document.getElementById("boat9-2").style.display = "none";
    document.getElementById("boat11-2").style.display = "none";
    document.getElementById("building1-2").style.display = "none";
    document.getElementById("building2-2").style.display = "none";
    document.getElementById("building3-2").style.display = "none";
    document.getElementById("icon1-2").style.display = "none";
    document.getElementById("icon2-2").style.display = "none";
    document.getElementById("popupen").style.display = "none";
    document.getElementById("boaten3").style.display = "none";
    document.getElementById("boaten4").style.display = "none";
    document.getElementById("boaten5").style.display = "none";
    document.getElementById("boaten6").style.display = "none";
    document.getElementById("text_queueen").style.display = "none";
    document.getElementById("text_taxien").style.display = "none";
    document.getElementById("text_parkingen1").style.display = "none";
    document.getElementById("text_parkingen2").style.display = "none";
    document.getElementById("text_locationen1").style.display = "none";
    document.getElementById("text_locationen2").style.display = "none";
    document.getElementById("text_locationen3").style.display = "none";
    document.getElementById("text_locationen4").style.display = "none";
    document.getElementById("text_busen1").style.display = "none";
    document.getElementById("text_busen2").style.display = "none";
    document.getElementById("text_busen3").style.display = "none";
    document.getElementById("line_btsen1").style.display = "none";
    document.getElementById("line_btsen2").style.display = "none";
    document.getElementById("line_btsen3").style.display = "none";
    document.getElementById("line_btsen4").style.display = "none";
    document.getElementById("text_boatexen1").style.display = "none";
    document.getElementById("text_boatexen1-1").style.display = "none";
    document.getElementById("text_boaten1").style.display = "none";
    document.getElementById("text_taxien1").style.display = "none";
    document.getElementById("text_taxien2").style.display = "none";
    document.getElementById("text_queueen1").style.display = "none";
    document.getElementById("text_queueen2").style.display = "none";
    document.getElementById("boatexen13").style.display = "none";
    document.getElementById("boatexen14").style.display = "none";
    document.getElementById("boatexen15").style.display = "none";
    document.getElementById("boatexen16").style.display = "none";
    document.getElementById("boatexen17").style.display = "none";
    document.getElementById("boatexen18").style.display = "none";
    document.getElementById("informationen1").style.display = "none";
    document.getElementById("informationen1temp2").style.display = "none";
    document.getElementById("informationen1temp3").style.display = "none";
    document.getElementById("informationen1temp4").style.display = "none";
    document.getElementById("informationen1temp5").style.display = "none";
    document.getElementById("informationen1temp6").style.display = "none";
    document.getElementById("informationen2").style.display = "none";
    document.getElementById("informationen2temp2").style.display = "none";
    document.getElementById("informationen2temp3").style.display = "none";
    document.getElementById("informationen2temp4").style.display = "none";
    document.getElementById("informationen2temp5").style.display = "none";
    document.getElementById("informationen2temp6").style.display = "none";
    document.getElementById("informationen3").style.display = "none";
    document.getElementById("informationen3temp2").style.display = "none";
    document.getElementById("informationen3temp3").style.display = "none";
    document.getElementById("informationen3temp4").style.display = "none";
    document.getElementById("informationen3temp5").style.display = "none";
    document.getElementById("informationen3temp6").style.display = "none";
    document.getElementById("informationen4").style.display = "none";
    document.getElementById("informationen4temp2").style.display = "none";
    document.getElementById("informationen4temp3").style.display = "none";
    document.getElementById("informationen4temp4").style.display = "none";
    document.getElementById("informationen4temp5").style.display = "none";
    document.getElementById("informationen4temp6").style.display = "none";
    document.getElementById("informationen5").style.display = "none";
    document.getElementById("informationen5temp2").style.display = "none";
    document.getElementById("informationen5temp3").style.display = "none";
    document.getElementById("informationen5temp4").style.display = "none";
    document.getElementById("informationen5temp5").style.display = "none";
    document.getElementById("informationen5temp6").style.display = "none";
    document.getElementById("informationen6").style.display = "none";
    document.getElementById("informationen6temp2").style.display = "none";
    document.getElementById("informationen6temp3").style.display = "none";
    document.getElementById("informationen6temp4").style.display = "none";
    document.getElementById("informationen6temp5").style.display = "none";
    document.getElementById("informationen6temp6").style.display = "none";
    document.getElementById("datesen").style.display = "none";
    document.getElementById("buildingcaren1").style.display = "none";
    document.getElementById("buildingcaren2").style.display = "none";
    document.getElementById("buildingcaren3").style.display = "none";
    document.getElementById("buildingcaren1temp2").style.display = "none";
    document.getElementById("buildingcaren2temp2").style.display = "none";
    document.getElementById("buildingcaren3temp2").style.display = "none";
    document.getElementById("buildingcaren1temp3").style.display = "none";
    document.getElementById("buildingcaren2temp3").style.display = "none";
    document.getElementById("buildingcaren3temp3").style.display = "none";
    document.getElementById("buildingcaren1temp4").style.display = "none";
    document.getElementById("buildingcaren2temp4").style.display = "none";
    document.getElementById("buildingcaren3temp4").style.display = "none";
    document.getElementById("buildingcaren1temp5").style.display = "none";
    document.getElementById("buildingcaren2temp5").style.display = "none";
    document.getElementById("buildingcaren3temp5").style.display = "none";
    document.getElementById("buildingcaren1temp6").style.display = "none";
    document.getElementById("buildingcaren2temp6").style.display = "none";
    document.getElementById("buildingcaren3temp6").style.display = "none";
    document.getElementById("station_busen1temp2").style.display = "none";
    document.getElementById("station_busen2temp2").style.display = "none";
    document.getElementById("station_busen3temp2").style.display = "none";
    document.getElementById("station_busen4temp2").style.display = "none";
    document.getElementById("stationics_busen1temp2").style.display = "none";
    document.getElementById("stationics_busen2temp2").style.display = "none";
    document.getElementById("stationics_busen3temp2").style.display = "none";
    document.getElementById("stationics_busen4temp2").style.display = "none";

    document.getElementById("chineseboat").style.display = "block";
    document.getElementById("chinesebts").style.display = "block";
    document.getElementById("chinesetaxi").style.display = "block";
    document.getElementById("chineseboatex").style.display = "block";
    document.getElementById("chinesebus").style.display = "block";
    document.getElementById("chineseparking").style.display = "block";
    document.getElementById("boat3-3").style.display = "block";
    document.getElementById("boat6-3").style.display = "block";
    document.getElementById("boat7-3").style.display = "block";
    document.getElementById("boat8-3").style.display = "block";
    document.getElementById("boat9-3").style.display = "block";
    document.getElementById("boat11-3").style.display = "block";
    document.getElementById("building1-3").style.display = "block";
    document.getElementById("building2-3").style.display = "block";
    document.getElementById("building3-3").style.display = "block";
    document.getElementById("icon1-3").style.display = "block";
    document.getElementById("icon2-3").style.display = "block";
    document.getElementById("popupchi").style.display = "block";
    document.getElementById("boatch3").style.display = "block";
    document.getElementById("boatch4").style.display = "block";
    document.getElementById("boatch5").style.display = "block";
    document.getElementById("boatch6").style.display = "block";
    document.getElementById("text_queuech").style.display = "block";
    document.getElementById("text_taxich").style.display = "block";
    document.getElementById("text_parkingch1").style.display = "block";
    document.getElementById("text_parkingch2").style.display = "block";
    document.getElementById("text_locationch1").style.display = "block";
    document.getElementById("text_locationch2").style.display = "block";
    document.getElementById("text_locationch3").style.display = "block";
    document.getElementById("text_locationch4").style.display = "block";
    document.getElementById("text_busch1").style.display = "block";
    document.getElementById("text_busch2").style.display = "block";
    document.getElementById("text_busch3").style.display = "block";
    document.getElementById("line_btsch1").style.display = "block";
    document.getElementById("line_btsch2").style.display = "block";
    document.getElementById("line_btsch3").style.display = "block";
    document.getElementById("line_btsch4").style.display = "block";
    document.getElementById("text_boatexch1").style.display = "block";
    document.getElementById("text_boatexch1-1").style.display = "block";
    document.getElementById("text_boatch1").style.display = "block";
    document.getElementById("text_taxich1").style.display = "block";
    document.getElementById("text_taxich2").style.display = "block";
    document.getElementById("text_queuech1").style.display = "block";
    document.getElementById("text_queuech2").style.display = "block";
    document.getElementById("text_boatch4").style.display = "block";
    document.getElementById("boatexch13").style.display = "block";
    document.getElementById("boatexch14").style.display = "block";
    document.getElementById("boatexch15").style.display = "block";
    document.getElementById("boatexch16").style.display = "block";
    document.getElementById("boatexch17").style.display = "block";
    document.getElementById("boatexch18").style.display = "block";
    document.getElementById("informationch1").style.display = "block";
    document.getElementById("informationch1temp2").style.display = "block";
    document.getElementById("informationch1temp3").style.display = "block";
    document.getElementById("informationch1temp4").style.display = "block";
    document.getElementById("informationch1temp5").style.display = "block";
    document.getElementById("informationch1temp6").style.display = "block";
    document.getElementById("informationch2").style.display = "block";
    document.getElementById("informationch2temp2").style.display = "block";
    document.getElementById("informationch2temp3").style.display = "block";
    document.getElementById("informationch2temp4").style.display = "block";
    document.getElementById("informationch2temp5").style.display = "block";
    document.getElementById("informationch2temp6").style.display = "block";
    document.getElementById("informationch3").style.display = "block";
    document.getElementById("informationch3temp2").style.display = "block";
    document.getElementById("informationch3temp3").style.display = "block";
    document.getElementById("informationch3temp4").style.display = "block";
    document.getElementById("informationch3temp5").style.display = "block";
    document.getElementById("informationch3temp6").style.display = "block";
    document.getElementById("informationch4").style.display = "block";
    document.getElementById("informationch4temp2").style.display = "block";
    document.getElementById("informationch4temp3").style.display = "block";
    document.getElementById("informationch4temp4").style.display = "block";
    document.getElementById("informationch4temp5").style.display = "block";
    document.getElementById("informationch4temp6").style.display = "block";
    document.getElementById("informationch5").style.display = "block";
    document.getElementById("informationch5temp2").style.display = "block";
    document.getElementById("informationch5temp3").style.display = "block";
    document.getElementById("informationch5temp4").style.display = "block";
    document.getElementById("informationch5temp5").style.display = "block";
    document.getElementById("informationch5temp6").style.display = "block";
    document.getElementById("informationch6").style.display = "block";
    document.getElementById("informationch6temp2").style.display = "block";
    document.getElementById("informationch6temp3").style.display = "block";
    document.getElementById("informationch6temp4").style.display = "block";
    document.getElementById("informationch6temp5").style.display = "block";
    document.getElementById("informationch6temp6").style.display = "block";
    document.getElementById("datesch").style.display = "block";
    document.getElementById("buildingcarch1").style.display = "block";
    document.getElementById("buildingcarch2").style.display = "block";
    document.getElementById("buildingcarch3").style.display = "block";
    document.getElementById("buildingcarch1temp2").style.display = "block";
    document.getElementById("buildingcarch2temp2").style.display = "block";
    document.getElementById("buildingcarch3temp2").style.display = "block";
    document.getElementById("buildingcarch1temp3").style.display = "block";
    document.getElementById("buildingcarch2temp3").style.display = "block";
    document.getElementById("buildingcarch3temp3").style.display = "block";
    document.getElementById("buildingcarch1temp4").style.display = "block";
    document.getElementById("buildingcarch2temp4").style.display = "block";
    document.getElementById("buildingcarch3temp4").style.display = "block";
    document.getElementById("buildingcarch1temp5").style.display = "block";
    document.getElementById("buildingcarch2temp5").style.display = "block";
    document.getElementById("buildingcarch3temp5").style.display = "block";
    document.getElementById("buildingcarch1temp6").style.display = "block";
    document.getElementById("buildingcarch2temp6").style.display = "block";
    document.getElementById("buildingcarch3temp6").style.display = "block";
    document.getElementById("station_busch1temp2").style.display = "block";
    document.getElementById("station_busch2temp2").style.display = "block";
    document.getElementById("station_busch3temp2").style.display = "block";
    document.getElementById("station_busch4temp2").style.display = "block";
    document.getElementById("stationics_busch1temp2").style.display = "block";
    document.getElementById("stationics_busch2temp2").style.display = "block";
    document.getElementById("stationics_busch3temp2").style.display = "block";
    document.getElementById("stationics_busch4temp2").style.display = "block";
    //-------------------------------------------------------------------------------------------------2---------------------------------------------------------------------------------------
    document.getElementById("thaiboattemp2").style.display = "none";
    document.getElementById("thaibtstemp2").style.display = "none";
    document.getElementById("thaitaxitemp2").style.display = "none";
    document.getElementById("thaiboatextemp2").style.display = "none";
    document.getElementById("thaibustemp2").style.display = "none";
    document.getElementById("thaiparkingtemp2").style.display = "none";
    
    document.getElementById("building1-1temp2").style.display = "none";
    document.getElementById("building2-1temp2").style.display = "none";
    document.getElementById("building3-1temp2").style.display = "none";
    document.getElementById("icon1-1temp2").style.display = "none";
    document.getElementById("icon2-1temp2").style.display = "none";

    //document.getElementById("popupthtemp2").style.display = "none";
    document.getElementById("boatth3temp2").style.display = "none";
    document.getElementById("boatth4temp2").style.display = "none";
    document.getElementById("boatth5temp2").style.display = "none";
    document.getElementById("boatth6temp2").style.display = "none";
    document.getElementById("text_queuethtemp2").style.display = "none";
    document.getElementById("text_taxithtemp2").style.display = "none";
    document.getElementById("text_parkingth1temp2").style.display = "none";
    document.getElementById("text_parkingth2temp2").style.display = "none";
    document.getElementById("text_locationth1temp2").style.display = "none";
    document.getElementById("text_locationth2temp2").style.display = "none";
    document.getElementById("text_locationth3temp2").style.display = "none";
    document.getElementById("text_locationth4temp2").style.display = "none";
    document.getElementById("text_busth1temp2").style.display = "none";
    document.getElementById("text_busth2temp2").style.display = "none";
    document.getElementById("text_busth3temp2").style.display = "none";
    document.getElementById("text_busth4temp2").style.display = "none";
    document.getElementById("line_btsth1temp2").style.display = "none";
    document.getElementById("line_btsth2temp2").style.display = "none";
    document.getElementById("line_btsth3temp2").style.display = "none";
    document.getElementById("line_btsth4temp2").style.display = "none";
    document.getElementById("text_boatexth1temp2").style.display = "none";
    document.getElementById("text_boatexth1-1temp2").style.display = "none";
    document.getElementById("text_boatth1temp2").style.display = "none";
    document.getElementById("text_taxith1temp2").style.display = "none";
    document.getElementById("text_taxith2temp2").style.display = "none";
    document.getElementById("text_queueth1temp2").style.display = "none";
    document.getElementById("text_queueth2temp2").style.display = "none";
    document.getElementById("text_boatth4temp2").style.display = "none";
    document.getElementById("text_boatth2temp2").style.display = "none";
    document.getElementById("text_boatth3temp2").style.display = "none";
    document.getElementById("boatth1temp2").style.display = "none";
    document.getElementById("boatth2temp2").style.display = "none";
   
    document.getElementById("englishboattemp2").style.display = "none";
    document.getElementById("englishbtstemp2").style.display = "none";
    document.getElementById("englishtaxitemp2").style.display = "none";
    document.getElementById("englishboatextemp2").style.display = "none";
    document.getElementById("englishbustemp2").style.display = "none";
    document.getElementById("englishparkingtemp2").style.display = "none";
    document.getElementById("boat3-2temp2").style.display = "none";
    document.getElementById("boat6-2temp2").style.display = "none";
    document.getElementById("boat7-2temp2").style.display = "none";
    document.getElementById("boat8-2temp2").style.display = "none";
    document.getElementById("boat9-2temp2").style.display = "none";
    document.getElementById("boat11-2temp2").style.display = "none";
    document.getElementById("building1-2temp2").style.display = "none";
    document.getElementById("building2-2temp2").style.display = "none";
    document.getElementById("building3-2temp2").style.display = "none";
    document.getElementById("icon1-2temp2").style.display = "none";
    document.getElementById("icon2-2temp2").style.display = "none";

    //document.getElementById("popupentemp2").style.display = "none";
    document.getElementById("boaten3temp2").style.display = "none";
    document.getElementById("boaten4temp2").style.display = "none";
    document.getElementById("boaten5temp2").style.display = "none";
    document.getElementById("boaten6temp2").style.display = "none";
    document.getElementById("text_queueentemp2").style.display = "none";
    document.getElementById("text_taxientemp2").style.display = "none";
    document.getElementById("text_parkingen1temp2").style.display = "none";
    document.getElementById("text_parkingen2temp2").style.display = "none";
    document.getElementById("text_locationen1temp2").style.display = "none";
    document.getElementById("text_locationen2temp2").style.display = "none";
    document.getElementById("text_locationen3temp2").style.display = "none";
    document.getElementById("text_locationen4temp2").style.display = "none";
    document.getElementById("text_busen1temp2").style.display = "none";
    document.getElementById("text_busen2temp2").style.display = "none";
    document.getElementById("text_busen3temp2").style.display = "none";
    document.getElementById("text_busen4temp2").style.display = "none";
    document.getElementById("text_busen4temp2").style.display = "none";
    document.getElementById("line_btsen1temp2").style.display = "none";
    document.getElementById("line_btsen2temp2").style.display = "none";
    document.getElementById("line_btsen3temp2").style.display = "none";
    document.getElementById("line_btsen4temp2").style.display = "none";
    document.getElementById("text_boatexen1temp2").style.display = "none";
    document.getElementById("text_boatexen1-1temp2").style.display = "none";
    document.getElementById("text_boaten1temp2").style.display = "none";
    document.getElementById("text_taxien1temp2").style.display = "none";
    document.getElementById("text_taxien2temp2").style.display = "none";
    document.getElementById("text_queueen1temp2").style.display = "none";
    document.getElementById("text_queueen2temp2").style.display = "none";
    document.getElementById("boatexen13temp2").style.display = "none";
    document.getElementById("boatexen14temp2").style.display = "none";
    document.getElementById("boatexen15temp2").style.display = "none";
    document.getElementById("boatexen16temp2").style.display = "none";
    document.getElementById("boatexen17temp2").style.display = "none";
    document.getElementById("boatexen18temp2").style.display = "none";

    document.getElementById("chineseboattemp2").style.display = "block";
    document.getElementById("chinesebtstemp2").style.display = "block";
    document.getElementById("chinesetaxitemp2").style.display = "block";
    document.getElementById("chineseboatextemp2").style.display = "block";
    document.getElementById("chinesebustemp2").style.display = "block";
    document.getElementById("chineseparkingtemp2").style.display = "block";
    document.getElementById("boat3-3temp2").style.display = "block";
    document.getElementById("boat6-3temp2").style.display = "block";
    document.getElementById("boat7-3temp2").style.display = "block";
    document.getElementById("boat8-3temp2").style.display = "block";
    document.getElementById("boat9-3temp2").style.display = "block";
    document.getElementById("boat11-3temp2").style.display = "block";
    document.getElementById("building1-3temp2").style.display = "block";
    document.getElementById("building2-3temp2").style.display = "block";
    document.getElementById("building3-3temp2").style.display = "block";
    document.getElementById("icon1-3temp2").style.display = "block";
    document.getElementById("icon2-3temp2").style.display = "block";

    //document.getElementById("popupchitemp2").style.display = "block";
    document.getElementById("boatch3temp2").style.display = "block";
    document.getElementById("boatch4temp2").style.display = "block";
    document.getElementById("boatch5temp2").style.display = "block";
    document.getElementById("boatch6temp2").style.display = "block";
    document.getElementById("text_queuechtemp2").style.display = "block";
    document.getElementById("text_taxichtemp2").style.display = "block";
    document.getElementById("text_parkingch1temp2").style.display = "block";
    document.getElementById("text_parkingch2temp2").style.display = "block";
    document.getElementById("text_locationch1temp2").style.display = "block";
    document.getElementById("text_locationch2temp2").style.display = "block";
    document.getElementById("text_locationch3temp2").style.display = "block";
    document.getElementById("text_locationch4temp2").style.display = "block";
    document.getElementById("text_busch1temp2").style.display = "block";
    document.getElementById("text_busch2temp2").style.display = "block";
    document.getElementById("text_busch3temp2").style.display = "block";
    document.getElementById("text_busch4temp2").style.display = "block";
    document.getElementById("line_btsch1temp2").style.display = "block";
    document.getElementById("line_btsch2temp2").style.display = "block";
    document.getElementById("line_btsch3temp2").style.display = "block";
    document.getElementById("line_btsch4temp2").style.display = "block";
    document.getElementById("text_boatexch1temp2").style.display = "block";
    document.getElementById("text_boatexch1-1temp2").style.display = "block";
    document.getElementById("text_boatch1temp2").style.display = "block";
    document.getElementById("text_taxich1temp2").style.display = "block";
    document.getElementById("text_taxich2temp2").style.display = "block";
    document.getElementById("text_queuech1temp2").style.display = "block";
    document.getElementById("text_queuech2temp2").style.display = "block";
    document.getElementById("text_boatch4temp2").style.display = "block";
    document.getElementById("boatexch13temp2").style.display = "block";
    document.getElementById("boatexch14temp2").style.display = "block";
    document.getElementById("boatexch15temp2").style.display = "block";
    document.getElementById("boatexch16temp2").style.display = "block";
    document.getElementById("boatexch17temp2").style.display = "block";
    document.getElementById("boatexch18temp2").style.display = "block";
    //-------------------------------------------------------------------------------------------------3---------------------------------------------------------------------------------------
    document.getElementById("thaiboattemp3").style.display = "none";
    document.getElementById("thaibtstemp3").style.display = "none";
    document.getElementById("thaitaxitemp3").style.display = "none";
    document.getElementById("thaiboatextemp3").style.display = "none";
    document.getElementById("thaibustemp3").style.display = "none";
    document.getElementById("thaiparkingtemp3").style.display = "none";
   
    document.getElementById("boat1-1temp3").style.display = "none";
    document.getElementById("boat2-1temp3").style.display = "none";
    document.getElementById("boat3-1temp3").style.display = "none";
    document.getElementById("boat4-1temp3").style.display = "none";
    document.getElementById("boat5-1temp3").style.display = "none";
    document.getElementById("boat6-1temp3").style.display = "none";
    document.getElementById("boat7-1temp3").style.display = "none";
    document.getElementById("boat8-1temp3").style.display = "none";
    document.getElementById("boat9-1temp3").style.display = "none";
    document.getElementById("boat10-1temp3").style.display = "none";
    document.getElementById("boat11-1temp3").style.display = "none";
    document.getElementById("building1-1temp3").style.display = "none";
    document.getElementById("building2-1temp3").style.display = "none";
    document.getElementById("building3-1temp3").style.display = "none";
    document.getElementById("icon1-1temp3").style.display = "none";
    document.getElementById("icon2-1temp3").style.display = "none";

    //document.getElementById("popupthtemp2").style.display = "none";
    
    document.getElementById("text_queuethtemp3").style.display = "none";
    document.getElementById("text_taxithtemp3").style.display = "none";
    document.getElementById("text_parkingth1temp3").style.display = "none";
    document.getElementById("text_parkingth2temp3").style.display = "none";
    document.getElementById("text_locationth1temp3").style.display = "none";
    document.getElementById("text_locationth2temp3").style.display = "none";
    document.getElementById("text_locationth3temp3").style.display = "none";
    document.getElementById("text_locationth4temp3").style.display = "none";
    document.getElementById("text_busth1temp3").style.display = "none";
    document.getElementById("text_busth2temp3").style.display = "none";
    document.getElementById("text_busth3temp3").style.display = "none";
    document.getElementById("line_btsth1temp3").style.display = "none";
    document.getElementById("line_btsth2temp3").style.display = "none";
    document.getElementById("line_btsth3temp3").style.display = "none";
    document.getElementById("line_btsth4temp3").style.display = "none";
    document.getElementById("text_boatexth1temp3").style.display = "none";
    document.getElementById("text_boatexth1-1temp3").style.display = "none";
    document.getElementById("text_boatth1temp3").style.display = "none";
    document.getElementById("text_taxith1temp3").style.display = "none";
    document.getElementById("text_taxith2temp3").style.display = "none";
    document.getElementById("text_queueth1temp3").style.display = "none";
    document.getElementById("text_queueth2temp3").style.display = "none";

    document.getElementById("boatexth1temp3").style.display = "none";
    document.getElementById("boatexth2temp3").style.display = "none";
    document.getElementById("boatexth3temp3").style.display = "none";
    document.getElementById("boatexth4temp3").style.display = "none";
    document.getElementById("boatexth5temp3").style.display = "none";
    document.getElementById("boatexth6temp3").style.display = "none";
    document.getElementById("boatexth7temp3").style.display = "none";
    document.getElementById("boatexth8temp3").style.display = "none";

    document.getElementById("englishboattemp3").style.display = "none";
    document.getElementById("englishbtstemp3").style.display = "none";
    document.getElementById("englishtaxitemp3").style.display = "none";
    document.getElementById("englishboatextemp3").style.display = "none";
    document.getElementById("englishbustemp3").style.display = "none";
    document.getElementById("englishparkingtemp3").style.display = "none";
    document.getElementById("boat3-2temp3").style.display = "none";
    document.getElementById("boat6-2temp3").style.display = "none";
    document.getElementById("boat7-2temp3").style.display = "none";
    document.getElementById("boat8-2temp3").style.display = "none";
    document.getElementById("boat9-2temp3").style.display = "none";
    document.getElementById("boat11-2temp3").style.display = "none";
    document.getElementById("building1-2temp3").style.display = "none";
    document.getElementById("building2-2temp3").style.display = "none";
    document.getElementById("building3-2temp3").style.display = "none";
    document.getElementById("icon1-2temp3").style.display = "none";
    document.getElementById("icon2-2temp3").style.display = "none";

    //document.getElementById("popupentemp2").style.display = "none";
    
    document.getElementById("text_queueentemp3").style.display = "none";
    document.getElementById("text_taxientemp3").style.display = "none";
    document.getElementById("text_parkingen1temp3").style.display = "none";
    document.getElementById("text_parkingen2temp3").style.display = "none";
    document.getElementById("text_locationen1temp3").style.display = "none";
    document.getElementById("text_locationen2temp3").style.display = "none";
    document.getElementById("text_locationen3temp3").style.display = "none";
    document.getElementById("text_locationen4temp3").style.display = "none";
    document.getElementById("text_busen1temp3").style.display = "none";
    document.getElementById("text_busen2temp3").style.display = "none";
    document.getElementById("text_busen3temp3").style.display = "none";
    document.getElementById("line_btsen1temp3").style.display = "none";
    document.getElementById("line_btsen2temp3").style.display = "none";
    document.getElementById("line_btsen3temp3").style.display = "none";
    document.getElementById("line_btsen4temp3").style.display = "none";
    document.getElementById("text_boatexen1temp3").style.display = "none";
    document.getElementById("text_boatexen1-1temp3").style.display = "none";
    document.getElementById("text_boaten1temp3").style.display = "none";
    document.getElementById("text_taxien1temp3").style.display = "none";
    document.getElementById("text_taxien2temp3").style.display = "none";
    document.getElementById("text_queueen1temp3").style.display = "none";
    document.getElementById("text_queueen2temp3").style.display = "none";
    document.getElementById("boatexen13temp3").style.display = "none";
    document.getElementById("boatexen14temp3").style.display = "none";
    document.getElementById("boatexen15temp3").style.display = "none";
    document.getElementById("boatexen16temp3").style.display = "none";
    document.getElementById("boatexen17temp3").style.display = "none";
    document.getElementById("boatexen18temp3").style.display = "none";

    document.getElementById("chineseboattemp3").style.display = "block";
    document.getElementById("chinesebtstemp3").style.display = "block";
    document.getElementById("chinesetaxitemp3").style.display = "block";
    document.getElementById("chineseboatextemp3").style.display = "block";
    document.getElementById("chinesebustemp3").style.display = "block";
    document.getElementById("chineseparkingtemp3").style.display = "block";
    
    document.getElementById("boat3-3temp3").style.display = "block";
    document.getElementById("boat6-3temp3").style.display = "block";
    document.getElementById("boat7-3temp3").style.display = "block";
    document.getElementById("boat8-3temp3").style.display = "block";
    document.getElementById("boat9-3temp3").style.display = "block";
    document.getElementById("boat11-3temp3").style.display = "block";
    document.getElementById("building1-3temp3").style.display = "block";
    document.getElementById("building2-3temp3").style.display = "block";
    document.getElementById("building3-3temp3").style.display = "block";
    document.getElementById("icon1-3temp3").style.display = "block";
    document.getElementById("icon2-3temp3").style.display = "block";

    //document.getElementById("popupchitemp2").style.display = "block";
  
    document.getElementById("text_queuechtemp3").style.display = "block";
    document.getElementById("text_taxichtemp3").style.display = "block";
    document.getElementById("text_parkingch1temp3").style.display = "block";
    document.getElementById("text_parkingch2temp3").style.display = "block";
    document.getElementById("text_locationch1temp3").style.display = "block";
    document.getElementById("text_locationch2temp3").style.display = "block";
    document.getElementById("text_locationch3temp3").style.display = "block";
    document.getElementById("text_locationch4temp3").style.display = "block";
    document.getElementById("text_busch1temp3").style.display = "block";
    document.getElementById("text_busch2temp3").style.display = "block";
    document.getElementById("text_busch3temp3").style.display = "block";
    document.getElementById("line_btsch1temp3").style.display = "block";
    document.getElementById("line_btsch2temp3").style.display = "block";
    document.getElementById("line_btsch3temp3").style.display = "block";
    document.getElementById("line_btsch4temp3").style.display = "block";
    document.getElementById("text_boatexch1temp3").style.display = "block";
    document.getElementById("text_boatexch1-1temp3").style.display = "block";
    document.getElementById("text_boatch1temp3").style.display = "block";
    document.getElementById("text_taxich1temp3").style.display = "block";
    document.getElementById("text_taxich2temp3").style.display = "block";
    document.getElementById("text_queuech1temp3").style.display = "block";
    document.getElementById("text_queuech2temp3").style.display = "block";
    document.getElementById("boatexch13temp3").style.display = "block";
    document.getElementById("boatexch14temp3").style.display = "block";
    document.getElementById("boatexch15temp3").style.display = "block";
    document.getElementById("boatexch16temp3").style.display = "block";
    document.getElementById("boatexch17temp3").style.display = "block";
    document.getElementById("boatexch18temp3").style.display = "block";
    //-------------------------------------------------------------------------------------------------4---------------------------------------------------------------------------------------
    document.getElementById("thaiboattemp4").style.display = "none";
    document.getElementById("thaibtstemp4").style.display = "none";
    document.getElementById("thaitaxitemp4").style.display = "none";
    document.getElementById("thaiboatextemp4").style.display = "none";
    document.getElementById("thaibustemp4").style.display = "none";
    document.getElementById("thaiparkingtemp4").style.display = "none";
    
    document.getElementById("boat1-1temp4").style.display = "none";
    document.getElementById("boat2-1temp4").style.display = "none";
    document.getElementById("boat3-1temp4").style.display = "none";
    document.getElementById("boat4-1temp4").style.display = "none";
    document.getElementById("boat5-1temp4").style.display = "none";
    document.getElementById("boat6-1temp4").style.display = "none";
    document.getElementById("boat7-1temp4").style.display = "none";
    document.getElementById("boat8-1temp4").style.display = "none";
    document.getElementById("boat9-1temp4").style.display = "none";
    document.getElementById("boat10-1temp4").style.display = "none";
    document.getElementById("boat11-1temp4").style.display = "none";
    document.getElementById("building1-1temp4").style.display = "none";
    document.getElementById("building2-1temp4").style.display = "none";
    document.getElementById("building3-1temp4").style.display = "none";
    document.getElementById("icon1-1temp4").style.display = "none";
    document.getElementById("icon2-1temp4").style.display = "none";

    //document.getElementById("popupthtemp2").style.display = "none";
    document.getElementById("boatth3temp4").style.display = "none";
    document.getElementById("boatth4temp4").style.display = "none";
    document.getElementById("boatth5temp4").style.display = "none";
    document.getElementById("boatth6temp4").style.display = "none";
    document.getElementById("text_queuethtemp4").style.display = "none";
    document.getElementById("text_taxithtemp4").style.display = "none";
    document.getElementById("text_parkingth1temp4").style.display = "none";
    document.getElementById("text_parkingth2temp4").style.display = "none";
    document.getElementById("text_locationth1temp4").style.display = "none";
    document.getElementById("text_locationth2temp4").style.display = "none";
    document.getElementById("text_locationth3temp4").style.display = "none";
    document.getElementById("text_locationth4temp4").style.display = "none";
    document.getElementById("text_busth1temp4").style.display = "none";
    document.getElementById("text_busth2temp4").style.display = "none";
    document.getElementById("text_busth3temp4").style.display = "none";
    document.getElementById("line_btsth1temp4").style.display = "none";
    document.getElementById("line_btsth2temp4").style.display = "none";
    document.getElementById("line_btsth3temp4").style.display = "none";
    document.getElementById("line_btsth4temp4").style.display = "none";
    document.getElementById("text_boatexth1temp4").style.display = "none";
    document.getElementById("text_boatexth1-1temp4").style.display = "none";
    document.getElementById("text_boatth1temp4").style.display = "none";
    document.getElementById("text_taxith1temp4").style.display = "none";
    document.getElementById("text_taxith2temp4").style.display = "none";
    document.getElementById("text_queueth1temp4").style.display = "none";
    document.getElementById("text_queueth2temp4").style.display = "none";
    document.getElementById("text_boatth4temp4").style.display = "none";
    document.getElementById("text_boatth2temp4").style.display = "none";
    document.getElementById("text_boatth3temp4").style.display = "none";
    document.getElementById("boatth1temp4").style.display = "none";
    document.getElementById("boatth2temp4").style.display = "none";
    document.getElementById("boatexth1temp4").style.display = "none";
    document.getElementById("boatexth2temp4").style.display = "none";
    document.getElementById("boatexth3temp4").style.display = "none";
    document.getElementById("boatexth4temp4").style.display = "none";
    document.getElementById("boatexth5temp4").style.display = "none";
    document.getElementById("boatexth6temp4").style.display = "none";
    document.getElementById("boatexth7temp4").style.display = "none";
    document.getElementById("boatexth8temp4").style.display = "none";

    document.getElementById("englishboattemp4").style.display = "none";
    document.getElementById("englishbtstemp4").style.display = "none";
    document.getElementById("englishtaxitemp4").style.display = "none";
    document.getElementById("englishboatextemp4").style.display = "none";
    document.getElementById("englishbustemp4").style.display = "none";
    document.getElementById("englishparkingtemp4").style.display = "none";
    document.getElementById("boat3-2temp4").style.display = "none";
    document.getElementById("boat6-2temp4").style.display = "none";
    document.getElementById("boat7-2temp4").style.display = "none";
    document.getElementById("boat8-2temp4").style.display = "none";
    document.getElementById("boat9-2temp4").style.display = "none";
    document.getElementById("boat11-2temp4").style.display = "none";
    document.getElementById("building1-2temp4").style.display = "none";
    document.getElementById("building2-2temp4").style.display = "none";
    document.getElementById("building3-2temp4").style.display = "none";
    document.getElementById("icon1-2temp4").style.display = "none";
    document.getElementById("icon2-2temp4").style.display = "none";

    //document.getElementById("popupentemp2").style.display = "none";
    document.getElementById("boaten3temp4").style.display = "none";
    document.getElementById("boaten4temp4").style.display = "none";
    document.getElementById("boaten5temp4").style.display = "none";
    document.getElementById("boaten6temp4").style.display = "none";
    document.getElementById("text_queueentemp4").style.display = "none";
    document.getElementById("text_taxientemp4").style.display = "none";
    document.getElementById("text_parkingen1temp4").style.display = "none";
    document.getElementById("text_parkingen2temp4").style.display = "none";
    document.getElementById("text_locationen1temp4").style.display = "none";
    document.getElementById("text_locationen2temp4").style.display = "none";
    document.getElementById("text_locationen3temp4").style.display = "none";
    document.getElementById("text_locationen4temp4").style.display = "none";
    document.getElementById("text_busen1temp4").style.display = "none";
    document.getElementById("text_busen2temp4").style.display = "none";
    document.getElementById("text_busen3temp4").style.display = "none";
    document.getElementById("line_btsen1temp4").style.display = "none";
    document.getElementById("line_btsen2temp4").style.display = "none";
    document.getElementById("line_btsen3temp4").style.display = "none";
    document.getElementById("line_btsen4temp4").style.display = "none";
    document.getElementById("text_boatexen1temp4").style.display = "none";
    document.getElementById("text_boatexen1-1temp4").style.display = "none";
    document.getElementById("text_boaten1temp4").style.display = "none";
    document.getElementById("text_taxien1temp4").style.display = "none";
    document.getElementById("text_taxien2temp4").style.display = "none";
    document.getElementById("text_queueen1temp4").style.display = "none";
    document.getElementById("text_queueen2temp4").style.display = "none";
    document.getElementById("boatexen10temp4").style.display = "none";
    document.getElementById("boatexen13temp4").style.display = "none";
    document.getElementById("boatexen14temp4").style.display = "none";
    document.getElementById("boatexen15temp4").style.display = "none";
    document.getElementById("boatexen16temp4").style.display = "none";
    document.getElementById("boatexen17temp4").style.display = "none";
    document.getElementById("boatexen18temp4").style.display = "none";

    document.getElementById("chineseboattemp4").style.display = "block";
    document.getElementById("chinesebtstemp4").style.display = "block";
    document.getElementById("chinesetaxitemp4").style.display = "block";
    document.getElementById("chineseboatextemp4").style.display = "block";
    document.getElementById("chinesebustemp4").style.display = "block";
    document.getElementById("chineseparkingtemp4").style.display = "block";
    
    document.getElementById("boat3-3temp4").style.display = "block";
    document.getElementById("boat6-3temp4").style.display = "block";
    document.getElementById("boat7-3temp4").style.display = "block";
    document.getElementById("boat8-3temp4").style.display = "block";
    document.getElementById("boat9-3temp4").style.display = "block";
    document.getElementById("boat11-3temp4").style.display = "block";
    document.getElementById("building1-3temp4").style.display = "block";
    document.getElementById("building2-3temp4").style.display = "block";
    document.getElementById("building3-3temp4").style.display = "block";
    document.getElementById("icon1-3temp4").style.display = "block";
    document.getElementById("icon2-3temp4").style.display = "block";

    //document.getElementById("popupchitemp2").style.display = "block";
    document.getElementById("boatch3temp4").style.display = "block";
    document.getElementById("boatch4temp4").style.display = "block";
    document.getElementById("boatch5temp4").style.display = "block";
    document.getElementById("boatch6temp4").style.display = "block";
    document.getElementById("text_queuechtemp4").style.display = "block";
    document.getElementById("text_taxichtemp4").style.display = "block";
    document.getElementById("text_parkingch1temp4").style.display = "block";
    document.getElementById("text_parkingch2temp4").style.display = "block";
    document.getElementById("text_locationch1temp4").style.display = "block";
    document.getElementById("text_locationch2temp4").style.display = "block";
    document.getElementById("text_locationch3temp4").style.display = "block";
    document.getElementById("text_locationch4temp4").style.display = "block";
    document.getElementById("text_busch1temp4").style.display = "block";
    document.getElementById("text_busch2temp4").style.display = "block";
    document.getElementById("text_busch3temp4").style.display = "block";
    document.getElementById("line_btsch1temp4").style.display = "block";
    document.getElementById("line_btsch2temp4").style.display = "block";
    document.getElementById("line_btsch3temp4").style.display = "block";
    document.getElementById("line_btsch4temp4").style.display = "block";
    document.getElementById("text_boatexch1temp4").style.display = "block";
    document.getElementById("text_boatexch1-1temp4").style.display = "block";
    document.getElementById("text_boatch1temp4").style.display = "block";
    document.getElementById("text_taxich1temp4").style.display = "block";
    document.getElementById("text_taxich2temp4").style.display = "block";
    document.getElementById("text_queuech1temp4").style.display = "block";
    document.getElementById("text_queuech2temp4").style.display = "block";
    document.getElementById("text_boatch4temp4").style.display = "block";
    document.getElementById("boatexch13temp4").style.display = "block";
    document.getElementById("boatexch14temp4").style.display = "block";
    document.getElementById("boatexch15temp4").style.display = "block";
    document.getElementById("boatexch16temp4").style.display = "block";
    document.getElementById("boatexch17temp4").style.display = "block";
    document.getElementById("boatexch18temp4").style.display = "block";
    //-------------------------------------------------------------------------------------------------5---------------------------------------------------------------------------------------
    document.getElementById("thaiboattemp5").style.display = "none";
    document.getElementById("thaibtstemp5").style.display = "none";
    document.getElementById("thaitaxitemp5").style.display = "none";
    document.getElementById("thaiboatextemp5").style.display = "none";
    document.getElementById("thaibustemp5").style.display = "none";
    document.getElementById("thaiparkingtemp5").style.display = "none";
   
    document.getElementById("boat1-1temp5").style.display = "none";
    document.getElementById("boat2-1temp5").style.display = "none";
    document.getElementById("boat3-1temp5").style.display = "none";
    document.getElementById("boat4-1temp5").style.display = "none";
    document.getElementById("boat5-1temp5").style.display = "none";
    document.getElementById("boat6-1temp5").style.display = "none";
    document.getElementById("boat7-1temp5").style.display = "none";
    document.getElementById("boat8-1temp5").style.display = "none";
    document.getElementById("boat9-1temp5").style.display = "none";
    document.getElementById("boat10-1temp5").style.display = "none";
    document.getElementById("boat11-1temp5").style.display = "none";
    document.getElementById("building1-1temp5").style.display = "none";
    document.getElementById("building2-1temp5").style.display = "none";
    document.getElementById("building3-1temp5").style.display = "none";
    document.getElementById("icon1-1temp5").style.display = "none";
    document.getElementById("icon2-1temp5").style.display = "none";

    //document.getElementById("popupthtemp2").style.display = "none";
    document.getElementById("boatth3temp5").style.display = "none";
    document.getElementById("boatth4temp5").style.display = "none";
    document.getElementById("boatth5temp5").style.display = "none";
    document.getElementById("boatth6temp5").style.display = "none";
    document.getElementById("text_queuethtemp5").style.display = "none";
    document.getElementById("text_taxithtemp5").style.display = "none";
    document.getElementById("text_parkingth1temp5").style.display = "none";
    document.getElementById("text_parkingth2temp5").style.display = "none";
    document.getElementById("text_locationth1temp5").style.display = "none";
    document.getElementById("text_locationth2temp5").style.display = "none";
    document.getElementById("text_locationth3temp5").style.display = "none";
    document.getElementById("text_locationth4temp5").style.display = "none";
    document.getElementById("text_busth1temp5").style.display = "none";
    document.getElementById("text_busth2temp5").style.display = "none";
    document.getElementById("text_busth3temp5").style.display = "none";
    document.getElementById("line_btsth1temp5").style.display = "none";
    document.getElementById("line_btsth2temp5").style.display = "none";
    document.getElementById("line_btsth3temp5").style.display = "none";
    document.getElementById("line_btsth4temp5").style.display = "none";
    document.getElementById("text_boatexth1temp5").style.display = "none";
    document.getElementById("text_boatexth1-1temp5").style.display = "none";
    document.getElementById("text_boatth1temp5").style.display = "none";
    document.getElementById("text_taxith1temp5").style.display = "none";
    document.getElementById("text_taxith2temp5").style.display = "none";
    document.getElementById("text_queueth1temp5").style.display = "none";
    document.getElementById("text_queueth2temp5").style.display = "none";
    document.getElementById("text_boatth4temp5").style.display = "none";
    document.getElementById("text_boatth2temp5").style.display = "none";
    document.getElementById("text_boatth3temp5").style.display = "none";
    document.getElementById("boatth1temp5").style.display = "none";
    document.getElementById("boatth2temp5").style.display = "none";
    document.getElementById("boatexth1temp5").style.display = "none";
    document.getElementById("boatexth2temp5").style.display = "none";
    document.getElementById("boatexth3temp5").style.display = "none";
    document.getElementById("boatexth4temp5").style.display = "none";
    document.getElementById("boatexth5temp5").style.display = "none";
    document.getElementById("boatexth6temp5").style.display = "none";
    document.getElementById("boatexth7temp5").style.display = "none";
    document.getElementById("boatexth8temp5").style.display = "none";
    
    document.getElementById("englishboattemp5").style.display = "none";
    document.getElementById("englishbtstemp5").style.display = "none";
    document.getElementById("englishtaxitemp5").style.display = "none";
    document.getElementById("englishboatextemp5").style.display = "none";
    document.getElementById("englishbustemp5").style.display = "none";
    document.getElementById("englishparkingtemp5").style.display = "none";
    document.getElementById("boat3-2temp5").style.display = "none";
    document.getElementById("boat6-2temp5").style.display = "none";
    document.getElementById("boat7-2temp5").style.display = "none";
    document.getElementById("boat8-2temp5").style.display = "none";
    document.getElementById("boat9-2temp5").style.display = "none";
    document.getElementById("boat11-2temp5").style.display = "none";
    document.getElementById("building1-2temp5").style.display = "none";
    document.getElementById("building2-2temp5").style.display = "none";
    document.getElementById("building3-2temp5").style.display = "none";
    document.getElementById("icon1-2temp5").style.display = "none";
    document.getElementById("icon2-2temp5").style.display = "none";

    //document.getElementById("popupentemp2").style.display = "none";
    document.getElementById("boaten3temp5").style.display = "none";
    document.getElementById("boaten4temp5").style.display = "none";
    document.getElementById("boaten5temp5").style.display = "none";
    document.getElementById("boaten6temp5").style.display = "none";
    document.getElementById("text_queueentemp5").style.display = "none";
    document.getElementById("text_taxientemp5").style.display = "none";
    document.getElementById("text_parkingen1temp5").style.display = "none";
    document.getElementById("text_parkingen2temp5").style.display = "none";
    document.getElementById("text_locationen1temp5").style.display = "none";
    document.getElementById("text_locationen2temp5").style.display = "none";
    document.getElementById("text_locationen3temp5").style.display = "none";
    document.getElementById("text_locationen4temp5").style.display = "none";
    document.getElementById("text_busen1temp5").style.display = "none";
    document.getElementById("text_busen2temp5").style.display = "none";
    document.getElementById("text_busen3temp5").style.display = "none";
    document.getElementById("line_btsen1temp5").style.display = "none";
    document.getElementById("line_btsen2temp5").style.display = "none";
    document.getElementById("line_btsen3temp5").style.display = "none";
    document.getElementById("line_btsen4temp5").style.display = "none";
    document.getElementById("text_boatexen1temp5").style.display = "none";
    document.getElementById("text_boatexen1-1temp5").style.display = "none";
    document.getElementById("text_boaten1temp5").style.display = "none";
    document.getElementById("text_taxien1temp5").style.display = "none";
    document.getElementById("text_taxien2temp5").style.display = "none";
    document.getElementById("text_queueen1temp5").style.display = "none";
    document.getElementById("text_queueen2temp5").style.display = "none";
    document.getElementById("boatexen13temp5").style.display = "none";
    document.getElementById("boatexen14temp5").style.display = "none";
    document.getElementById("boatexen15temp5").style.display = "none";
    document.getElementById("boatexen16temp5").style.display = "none";
    document.getElementById("boatexen17temp5").style.display = "none";
    document.getElementById("boatexen18temp5").style.display = "none";

    document.getElementById("chineseboattemp5").style.display = "block";
    document.getElementById("chinesebtstemp5").style.display = "block";
    document.getElementById("chinesetaxitemp5").style.display = "block";
    document.getElementById("chineseboatextemp5").style.display = "block";
    document.getElementById("chinesebustemp5").style.display = "block";
    document.getElementById("chineseparkingtemp5").style.display = "block";
   
    document.getElementById("boat3-3temp5").style.display = "block";
    document.getElementById("boat6-3temp5").style.display = "block";
    document.getElementById("boat7-3temp5").style.display = "block";
    document.getElementById("boat8-3temp5").style.display = "block";
    document.getElementById("boat9-3temp5").style.display = "block";
    document.getElementById("boat11-3temp5").style.display = "block";
    document.getElementById("building1-3temp5").style.display = "block";
    document.getElementById("building2-3temp5").style.display = "block";
    document.getElementById("building3-3temp5").style.display = "block";
    document.getElementById("icon1-3temp5").style.display = "block";
    document.getElementById("icon2-3temp5").style.display = "block";
 
    //document.getElementById("popupchitemp2").style.display = "block";
    document.getElementById("boatch3temp5").style.display = "block";
    document.getElementById("boatch4temp5").style.display = "block";
    document.getElementById("boatch5temp5").style.display = "block";
    document.getElementById("boatch6temp5").style.display = "block";
    document.getElementById("text_queuechtemp5").style.display = "block";
    document.getElementById("text_taxichtemp5").style.display = "block";
    document.getElementById("text_parkingch1temp5").style.display = "block";
    document.getElementById("text_parkingch2temp5").style.display = "block";
    document.getElementById("text_locationch1temp5").style.display = "block";
    document.getElementById("text_locationch2temp5").style.display = "block";
    document.getElementById("text_locationch3temp5").style.display = "block";
    document.getElementById("text_locationch4temp5").style.display = "block";
    document.getElementById("text_busch1temp5").style.display = "block";
    document.getElementById("text_busch2temp5").style.display = "block";
    document.getElementById("text_busch3temp5").style.display = "block";
    document.getElementById("line_btsch1temp5").style.display = "block";
    document.getElementById("line_btsch2temp5").style.display = "block";
    document.getElementById("line_btsch3temp5").style.display = "block";
    document.getElementById("line_btsch4temp5").style.display = "block";
    document.getElementById("text_boatexch1temp5").style.display = "block";
    document.getElementById("text_boatexch1-1temp5").style.display = "block";
    document.getElementById("text_boatch1temp5").style.display = "block";
    document.getElementById("text_taxich1temp5").style.display = "block";
    document.getElementById("text_taxich2temp5").style.display = "block";
    document.getElementById("text_queuech1temp5").style.display = "block";
    document.getElementById("text_queuech2temp5").style.display = "block";
    document.getElementById("text_boatch4temp5").style.display = "block";
    document.getElementById("boatexch13temp5").style.display = "block";
    document.getElementById("boatexch14temp5").style.display = "block";
    document.getElementById("boatexch15temp5").style.display = "block";
    document.getElementById("boatexch16temp5").style.display = "block";
    document.getElementById("boatexch17temp5").style.display = "block";
    document.getElementById("boatexch18temp5").style.display = "block";
    //-------------------------------------------------------------------------------------------------6---------------------------------------------------------------------------------------
    document.getElementById("thaiboattemp6").style.display = "none";
    document.getElementById("thaibtstemp6").style.display = "none";
    document.getElementById("thaitaxitemp6").style.display = "none";
    document.getElementById("thaiboatextemp6").style.display = "none";
    document.getElementById("thaibustemp6").style.display = "none";
    document.getElementById("thaiparkingtemp6").style.display = "none";
   
    document.getElementById("building1-1temp6").style.display = "none";
    document.getElementById("building2-1temp6").style.display = "none";
    document.getElementById("building3-1temp6").style.display = "none";
    document.getElementById("icon1-1temp6").style.display = "none";
    document.getElementById("icon2-1temp6").style.display = "none";

    //document.getElementById("popupthtemp2").style.display = "none";
    document.getElementById("boatth3temp6").style.display = "none";
    document.getElementById("boatth4temp6").style.display = "none";
    document.getElementById("boatth5temp6").style.display = "none";
    document.getElementById("boatth6temp6").style.display = "none";
    document.getElementById("text_queuethtemp6").style.display = "none";
    document.getElementById("text_taxithtemp6").style.display = "none";
    document.getElementById("text_parkingth1temp6").style.display = "none";
    document.getElementById("text_parkingth2temp6").style.display = "none";
    document.getElementById("text_locationth1temp6").style.display = "none";
    document.getElementById("text_locationth2temp6").style.display = "none";
    document.getElementById("text_locationth3temp6").style.display = "none";
    document.getElementById("text_locationth4temp6").style.display = "none";
    document.getElementById("text_busth1temp6").style.display = "none";
    document.getElementById("text_busth2temp6").style.display = "none";
    document.getElementById("text_busth3temp6").style.display = "none";
    document.getElementById("line_btsth1temp6").style.display = "none";
    document.getElementById("line_btsth2temp6").style.display = "none";
    document.getElementById("line_btsth3temp6").style.display = "none";
    document.getElementById("line_btsth4temp6").style.display = "none";
    document.getElementById("text_boatexth1temp6").style.display = "none";
    document.getElementById("text_boatexth1-1temp6").style.display = "none";
    document.getElementById("text_boatth1temp6").style.display = "none";
    document.getElementById("text_taxith1temp6").style.display = "none";
    document.getElementById("text_taxith2temp6").style.display = "none";
    document.getElementById("text_queueth1temp6").style.display = "none";
    document.getElementById("text_queueth2temp6").style.display = "none";
    document.getElementById("text_boatth4temp6").style.display = "none";
    document.getElementById("text_boatth2temp6").style.display = "none";
    document.getElementById("text_boatth3temp6").style.display = "none";
    document.getElementById("boatth1temp6").style.display = "none";
    document.getElementById("boatth2temp6").style.display = "none";
   
   

    document.getElementById("englishboattemp6").style.display = "none";
    document.getElementById("englishbtstemp6").style.display = "none";
    document.getElementById("englishtaxitemp6").style.display = "none";
    document.getElementById("englishboatextemp6").style.display = "none";
    document.getElementById("englishbustemp6").style.display = "none";
    document.getElementById("englishparkingtemp6").style.display = "none";
    document.getElementById("boat3-2temp6").style.display = "none";
    document.getElementById("boat6-2temp6").style.display = "none";
    document.getElementById("boat7-2temp6").style.display = "none";
    document.getElementById("boat8-2temp6").style.display = "none";
    document.getElementById("boat9-2temp6").style.display = "none";
    document.getElementById("boat11-2temp6").style.display = "none";
    document.getElementById("building1-2temp6").style.display = "none";
    document.getElementById("building2-2temp6").style.display = "none";
    document.getElementById("building3-2temp6").style.display = "none";
    document.getElementById("icon1-2temp6").style.display = "none";
    document.getElementById("icon2-2temp6").style.display = "none";

    document.getElementById("boaten3temp6").style.display = "none";
    document.getElementById("boaten4temp6").style.display = "none";
    document.getElementById("boaten5temp6").style.display = "none";
    document.getElementById("boaten6temp6").style.display = "none";
    document.getElementById("text_queueentemp6").style.display = "none";
    document.getElementById("text_taxientemp6").style.display = "none";
    document.getElementById("text_parkingen1temp6").style.display = "none";
    document.getElementById("text_parkingen2temp6").style.display = "none";
    document.getElementById("text_locationen1temp6").style.display = "none";
    document.getElementById("text_locationen2temp6").style.display = "none";
    document.getElementById("text_locationen3temp6").style.display = "none";
    document.getElementById("text_locationen4temp6").style.display = "none";
    document.getElementById("text_busen1temp6").style.display = "none";
    document.getElementById("text_busen2temp6").style.display = "none";
    document.getElementById("text_busen3temp6").style.display = "none";
    document.getElementById("line_btsen1temp6").style.display = "none";
    document.getElementById("line_btsen2temp6").style.display = "none";
    document.getElementById("line_btsen3temp6").style.display = "none";
    document.getElementById("line_btsen4temp6").style.display = "none";
    document.getElementById("text_boatexen1temp6").style.display = "none";
    document.getElementById("text_boatexen1-1temp6").style.display = "none";
    document.getElementById("text_boaten1temp6").style.display = "none";
    document.getElementById("text_taxien1temp6").style.display = "none";
    document.getElementById("text_taxien2temp6").style.display = "none";
    document.getElementById("text_queueen1temp6").style.display = "none";
    document.getElementById("text_queueen2temp6").style.display = "none";
    document.getElementById("boatexen13temp6").style.display = "none";
    document.getElementById("boatexen14temp6").style.display = "none";
    document.getElementById("boatexen15temp6").style.display = "none";
    document.getElementById("boatexen16temp6").style.display = "none";
    document.getElementById("boatexen17temp6").style.display = "none";
    document.getElementById("boatexen18temp6").style.display = "none";

    document.getElementById("chineseboattemp6").style.display = "block";
    document.getElementById("chinesebtstemp6").style.display = "block";
    document.getElementById("chinesetaxitemp6").style.display = "block";
    document.getElementById("chineseboatextemp6").style.display = "block";
    document.getElementById("chinesebustemp6").style.display = "block";
    document.getElementById("chineseparkingtemp6").style.display = "block";
    
    document.getElementById("boat3-3temp6").style.display = "block";
    document.getElementById("boat6-3temp6").style.display = "block";
    document.getElementById("boat7-3temp6").style.display = "block";
    document.getElementById("boat8-3temp6").style.display = "block";
    document.getElementById("boat9-3temp6").style.display = "block";
    document.getElementById("boat11-3temp6").style.display = "block";
    document.getElementById("building1-3temp6").style.display = "block";
    document.getElementById("building2-3temp6").style.display = "block";
    document.getElementById("building3-3temp6").style.display = "block";
    document.getElementById("icon1-3temp6").style.display = "block";
    document.getElementById("icon2-3temp6").style.display = "block";

    document.getElementById("boatch3temp6").style.display = "block";
    document.getElementById("boatch4temp6").style.display = "block";
    document.getElementById("boatch5temp6").style.display = "block";
    document.getElementById("boatch6temp6").style.display = "block";
    document.getElementById("text_queuechtemp6").style.display = "block";
    document.getElementById("text_taxichtemp6").style.display = "block";
    document.getElementById("text_parkingch1temp6").style.display = "block";
    document.getElementById("text_parkingch2temp6").style.display = "block";
    document.getElementById("text_locationch1temp6").style.display = "block";
    document.getElementById("text_locationch2temp6").style.display = "block";
    document.getElementById("text_locationch3temp6").style.display = "block";
    document.getElementById("text_locationch4temp6").style.display = "block";
    document.getElementById("text_busch1temp6").style.display = "block";
    document.getElementById("text_busch2temp6").style.display = "block";
    document.getElementById("text_busch3temp6").style.display = "block";
    document.getElementById("line_btsch1temp6").style.display = "block";
    document.getElementById("line_btsch2temp6").style.display = "block";
    document.getElementById("line_btsch3temp6").style.display = "block";
    document.getElementById("line_btsch4temp6").style.display = "block";
    document.getElementById("text_boatexch1temp6").style.display = "block";
    document.getElementById("text_boatexch1-1temp6").style.display = "block";
    document.getElementById("text_boatch1temp6").style.display = "block";
    document.getElementById("text_taxich1temp6").style.display = "block";
    document.getElementById("text_taxich2temp6").style.display = "block";
    document.getElementById("text_queuech1temp6").style.display = "block";
    document.getElementById("text_queuech2temp6").style.display = "block";
    document.getElementById("text_boatch4temp6").style.display = "block";
    document.getElementById("boatexch13temp6").style.display = "block";
    document.getElementById("boatexch14temp6").style.display = "block";
    document.getElementById("boatexch15temp6").style.display = "block";
    document.getElementById("boatexch16temp6").style.display = "block";
    document.getElementById("boatexch17temp6").style.display = "block";
    document.getElementById("boatexch18temp6").style.display = "block";

    langs = "chai"
    Boat(langs);
    Boatex(langs);
    Bus(langs);
    BTS(langs);
    //setInterval(function () {
    //    changeLanguath(time);
        
    //}, time  * 1000);
}
function getFormattedDateTime() {
    // สร้าง Object Date จากวันและเวลาปัจจุบัน
    var currentDate = new Date();

    // ดึงข้อมูลวันที่
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // เพิ่ม 1 เนื่องจาก getMonth() จะเริ่มที่ 0
    var year = currentDate.getFullYear();

    // ดึงข้อมูลเวลา
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();

    // ตั้งค่าเพิ่ม 0 นำหน้าหากมีเลขน้อยกว่า 10
    day = (day < 10) ? '0' + day : day;
    month = (month < 10) ? '0' + month : month;
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;

    // สร้างข้อความตามรูปแบบที่ต้องการ
    var formattedDateTime = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;

    // คืนค่าข้อความที่จัดรูปแบบแล้ว
    return formattedDateTime;
}
function startdate() {
    var data = {

    };
    $.ajax({
        type: "POST",
        url: $("#startdate").val(),
        headers: { "content-type": "application/json" },
        type: "POST",
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            //console.log(data);
            if (data != '') {
                //var startdate = data[0].start_date;
                //var enddate = data[0].end_date;

                var startdate = new Date(data[0].start_date_moved0);
                var enddate = new Date(data[0].end_date_moved0);

                // เพิ่ม 7 ชั่วโมงให้กับ startdate และ enddate
                startdate.setHours(startdate.getHours() + 7);
                enddate.setHours(enddate.getHours() + 7);

                var currentTime = new Date();
                var currentHours = currentTime.getHours();

                if (currentHours >= startdate.getHours() && currentHours <= enddate.getHours()) {
                    //document.getElementById("popup").style.display = "block";
                    //document.getElementById("popupth").innerHTML = data[0].thai_language;
                    //document.getElementById("popupen").innerHTML = data[0].eng_language;
                    //document.getElementById("popupchi").innerHTML = data[0].chinese_language;
                } else {
                    document.getElementById("popup").style.display = "block";
                    document.getElementById("popupth").innerHTML = data[0].thai_language;
                    document.getElementById("popupen").innerHTML = data[0].eng_language;
                    document.getElementById("popupchi").innerHTML = data[0].chinese_language;
                }

            }

        },
        error: function (textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}
function addZero(num) {
    return (num < 10 ? '0' : '') + num;
}

// ฟังก์ชันเพื่อเปลี่ยนรูปแบบของวันที่และเวลา
function formatDateTime(dateTime) {
    var day = addZero(dateTime.getDate());
    var month = addZero(dateTime.getMonth() + 1);
    var year = dateTime.getFullYear();
    var hours = addZero(dateTime.getHours());
    var minutes = addZero(dateTime.getMinutes());
    var seconds = addZero(dateTime.getSeconds());

    return day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds;
}
function Search() {
    var data = {

    };
    $.ajax({
        type: "POST",
        url: $("#search").val(),
        headers: { "content-type": "application/json" },
        type: "POST",
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            //console.log(data);

            if (data != "") {
                var date = getFormattedDateTime();
                document.getElementById("taxi_datetime").innerHTML = date;
                document.getElementById("queue_no").innerHTML = data[0].queue_no;
                document.getElementById("taxi_no").innerHTML = data[0].taxi_no;

                var date = getFormattedDateTime();
                document.getElementById("taxi_datetimetemp2").innerHTML = date;
                document.getElementById("queue_notemp2").innerHTML = data[0].queue_no;
                document.getElementById("taxi_notemp2").innerHTML = data[0].taxi_no;

                var date = getFormattedDateTime();
                document.getElementById("taxi_datetimetemp3").innerHTML = date;
                document.getElementById("queue_notemp3").innerHTML = data[0].queue_no;
                document.getElementById("taxi_notemp3").innerHTML = data[0].taxi_no;

                var date = getFormattedDateTime();
                document.getElementById("taxi_datetimetemp4").innerHTML = date;
                document.getElementById("queue_notemp4").innerHTML = data[0].queue_no;
                document.getElementById("taxi_notemp4").innerHTML = data[0].taxi_no;

                var date = getFormattedDateTime();
                document.getElementById("taxi_datetimetemp5").innerHTML = date;
                document.getElementById("queue_notemp5").innerHTML = data[0].queue_no;
                document.getElementById("taxi_notemp5").innerHTML = data[0].taxi_no;

                var date = getFormattedDateTime();
                document.getElementById("taxi_datetimetemp6").innerHTML = date;
                document.getElementById("queue_notemp6").innerHTML = data[0].queue_no;
                document.getElementById("taxi_notemp6").innerHTML = data[0].taxi_no;
            }
            else {

            }
            Taxi()
            Timeout(date)
        },
        error: function (textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}
function Taxi() {
    var data = {

    };
    $.ajax({
        type: "POST",
        url: $("#Taxi").val(),
        headers: { "content-type": "application/json" },
        type: "POST",
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            console.log(data);


            //if (data[0].check_active === true) {
            //    document.getElementById("3").style.display = "block"
            //} else {
            //    document.getElementById("3").style.display = "none"
            //}
        },
        error: function (textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}

function Logo() {
    var data = {

    };
    $.ajax({
        type: "POST",
        url: $("#timeout1").val(),
        headers: { "content-type": "application/json" },
        type: "POST",
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            console.log(data);
            if (data != '') {
                var base64Data = data[1].image_base64;
                icon1.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon1temp2.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon1temp3.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon1temp4.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon1temp5.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon1temp6.setAttribute('src', "data:image/jpg;base64," + base64Data);
                var base64Data = data[3].image_base64;
                icon2.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon2temp2.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon2temp3.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon2temp4.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon2temp5.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon2temp6.setAttribute('src', "data:image/jpg;base64," + base64Data);
                var base64Data = data[2].image_base64;
                icon4.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon4temp2.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon4temp3.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon4temp4.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon4temp5.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon4temp6.setAttribute('src', "data:image/jpg;base64," + base64Data);
                var base64Data = data[0].image_base64;
                icon5.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon5temp2.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon5temp3.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon5temp4.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon5temp5.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon5temp6.setAttribute('src', "data:image/jpg;base64," + base64Data);

               

            }
        },
        error: function (textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}
function Logo1() {
    var data = {

    };
    $.ajax({
        type: "POST",
        url: $("#timeout").val(),
        headers: { "content-type": "application/json" },
        type: "POST",
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            console.log(data);
            if (data != '') {
                var base64Data = data[0].image_base64;
                icon3.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon3temp2.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon3temp3.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon3temp4.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon3temp5.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon3temp6.setAttribute('src', "data:image/jpg;base64," + base64Data);
                

            }
        },
        error: function (textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}
function Logo2() {
    var data = {

    };
    $.ajax({
        type: "POST",
        url: $("#timeout2").val(),
        headers: { "content-type": "application/json" },
        type: "POST",
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            console.log(data);
            if (data != '') {
                var base64Data = data[0].image_base64;
                icon6.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon6temp2.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon6temp3.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon6temp4.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon6temp5.setAttribute('src', "data:image/jpg;base64," + base64Data);
                icon6temp6.setAttribute('src', "data:image/jpg;base64," + base64Data);
                

            }
        },
        error: function (textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}
function Timeout(date) {
    var data = {

    };
    $.ajax({
        type: "POST",
        url: $("#timeout").val(),
        headers: { "content-type": "application/json" },
        type: "POST",
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            console.log(data);
            if (data != '') {
                var dateString1 = date;
                var dateParts1 = dateString1.split(" "); // แยกส่วนของวันที่และเวลาออกจากกัน
                var date1 = new Date(dateParts1[0]); // แปลงส่วนของวันที่เป็นวัตถุของวันที่และเวลา
                var time1 = dateParts1[1].split(":"); // แยกส่วนของเวลาออกเป็นชั่วโมง นาที

                var dateString2 = getFormattedDateTime();
                var dateParts2 = dateString2.split(" "); // แยกส่วนของวันที่และเวลาออกจากกัน
                var date2 = new Date(dateParts2[0]); // แปลงส่วนของวันที่เป็นวัตถุของวันที่และเวลา
                var time2 = dateParts2[1].split(":"); // แยกส่วนของเวลาออกเป็นชั่วโมง นาที

                // คำนวณเวลาที่ต้องการลบ (เวลาใน date1 - เวลาใน date2) และแปลงเป็นมิลลิวินาที
                var endtime = time1[1] - time2[1];
                var time = data[0].timeout * 60;
                if (endtime > time) {
                    document.getElementById("popuptemp3").style.display = "block";
                    document.getElementById("popupthtemp3").innerHTML = data[0].thai_language;
                    document.getElementById("popupentemp3").innerHTML = data[0].eng_language;
                    document.getElementById("popupchitemp3").innerHTML = data[0].chinese_language;
                } else {
                    document.getElementById("popuptemp3").style.display = "none";
                    //document.getElementById("popupthtemp3").innerHTML = data[0].thai_language;
                    //document.getElementById("popupentemp3").innerHTML = data[0].eng_language;
                    //document.getElementById("popupchitemp3").innerHTML = data[0].chinese_language;
                }

            }
        },
        error: function (textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}
function Timeout1(date) {
    var data = {

    };
    $.ajax({
        type: "POST",
        url: $("#timeout1").val(),
        headers: { "content-type": "application/json" },
        type: "POST",
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            console.log(data);
            if (data != '') {
                var dateString1 = date;
                var dateParts1 = dateString1.split(" "); // แยกส่วนของวันที่และเวลาออกจากกัน
                var date1 = new Date(dateParts1[0]); // แปลงส่วนของวันที่เป็นวัตถุของวันที่และเวลา
                var time1 = dateParts1[1].split(":"); // แยกส่วนของเวลาออกเป็นชั่วโมง นาที

                var dateString2 = getFormattedDateTime();
                var dateParts2 = dateString2.split(" "); // แยกส่วนของวันที่และเวลาออกจากกัน
                var date2 = new Date(dateParts2[0]); // แปลงส่วนของวันที่เป็นวัตถุของวันที่และเวลา
                var time2 = dateParts2[1].split(":"); // แยกส่วนของเวลาออกเป็นชั่วโมง นาที

                // คำนวณเวลาที่ต้องการลบ (เวลาใน date1 - เวลาใน date2) และแปลงเป็นมิลลิวินาที
                var endtime = time1[1] - time2[1];
                var time = data[0].timeout * 60 ;

                if (endtime > time) {
                    document.getElementById("popuptemp1").style.display = "block";
                    document.getElementById("popupthtemp1").innerHTML = data[0].thai_language;
                    document.getElementById("popupentemp1").innerHTML = data[0].eng_language;
                    document.getElementById("popupchitemp1").innerHTML = data[0].chinese_language;

                    document.getElementById("popuptemp2").style.display = "block";
                    document.getElementById("popupthtemp2").innerHTML = data[0].thai_language;
                    document.getElementById("popupentemp2").innerHTML = data[0].eng_language;
                    document.getElementById("popupchitemp2").innerHTML = data[0].chinese_language;

                    document.getElementById("popuptemp4").style.display = "block";
                    document.getElementById("popupthtemp4").innerHTML = data[0].thai_language;
                    document.getElementById("popupentemp4").innerHTML = data[0].eng_language;
                    document.getElementById("popupchitemp4").innerHTML = data[0].chinese_language;

                    document.getElementById("popuptemp5").style.display = "block";
                    document.getElementById("popupthtemp5").innerHTML = data[0].thai_language;
                    document.getElementById("popupentemp5").innerHTML = data[0].eng_language;
                    document.getElementById("popupchitemp5").innerHTML = data[0].chinese_language;
                } else {

                    document.getElementById("popuptemp1").style.display = "none";
                    //document.getElementById("popupthtemp1").innerHTML = data[0].thai_language;
                    //document.getElementById("popupentemp1").innerHTML = data[0].eng_language;
                    //document.getElementById("popupchitemp1").innerHTML = data[0].chinese_language;

                    document.getElementById("popuptemp2").style.display = "none";
                    //document.getElementById("popupthtemp2").innerHTML = data[0].thai_language;
                    //document.getElementById("popupentemp2").innerHTML = data[0].eng_language;
                    //document.getElementById("popupchitemp2").innerHTML = data[0].chinese_language;

                    document.getElementById("popuptemp4").style.display = "none";
                    //document.getElementById("popupthtemp3").innerHTML = data[0].thai_language;
                    //document.getElementById("popupentemp3").innerHTML = data[0].eng_language;
                    //document.getElementById("popupchitemp3").innerHTML = data[0].chinese_language;

                    document.getElementById("popuptemp5").style.display = "none";
                    //document.getElementById("popupthtemp4").innerHTML = data[0].thai_language;
                    //document.getElementById("popupentemp4").innerHTML = data[0].eng_language;
                    //document.getElementById("popupchitemp4").innerHTML = data[0].chinese_language;

                    //document.getElementById("popuptemp5").style.display = "block";
                    //document.getElementById("popupthtemp5").innerHTML = data[0].thai_language;
                    //document.getElementById("popupentemp5").innerHTML = data[0].eng_language;
                    //document.getElementById("popupchitemp5").innerHTML = data[0].chinese_language;

                    //document.getElementById("popuptemp6").style.display = "block";
                    //document.getElementById("popupthtemp6").innerHTML = data[0].thai_language;
                    //document.getElementById("popupentemp6").innerHTML = data[0].eng_language;
                    //document.getElementById("popupchitemp6").innerHTML = data[0].chinese_language;
                }

            }
        },
        error: function (textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}
function Timeout2(date) {
    var data = {

    };
    $.ajax({
        type: "POST",
        url: $("#timeout2").val(),
        headers: { "content-type": "application/json" },
        type: "POST",
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            console.log(data);
            if (data != '') {
                var dateString1 = date;
                var dateParts1 = dateString1.split(" "); // แยกส่วนของวันที่และเวลาออกจากกัน
                var date1 = new Date(dateParts1[0]); // แปลงส่วนของวันที่เป็นวัตถุของวันที่และเวลา
                var time1 = dateParts1[1].split(":"); // แยกส่วนของเวลาออกเป็นชั่วโมง นาที

                var dateString2 = getFormattedDateTime();
                var dateParts2 = dateString2.split(" "); // แยกส่วนของวันที่และเวลาออกจากกัน
                var date2 = new Date(dateParts2[0]); // แปลงส่วนของวันที่เป็นวัตถุของวันที่และเวลา
                var time2 = dateParts2[1].split(":"); // แยกส่วนของเวลาออกเป็นชั่วโมง นาที

                // คำนวณเวลาที่ต้องการลบ (เวลาใน date1 - เวลาใน date2) และแปลงเป็นมิลลิวินาที
                var endtime = time1[1] - time2[1];
                var time = data[0].timeout * 60;
                if (endtime > time) {
                    document.getElementById("popuptemp6").style.display = "block";
                    document.getElementById("popupthtemp6").innerHTML = data[0].thai_language;
                    document.getElementById("popupentemp6").innerHTML = data[0].eng_language;
                    document.getElementById("popupchitemp6").innerHTML = data[0].chinese_language;
                }
                else {

                    document.getElementById("popuptemp6").style.display = "none";
                    //document.getElementById("popupthtemp5").innerHTML = data[0].thai_language;
                    //document.getElementById("popupentemp5").innerHTML = data[0].eng_language;
                    //document.getElementById("popupchitemp5").innerHTML = data[0].chinese_language;


                }

            }
        },
        error: function (textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}
function ActiveAll() {
    var data = {

    };
    $.ajax({
        type: "POST",
        url: $("#ActiveAll").val(),
        headers: { "content-type": "application/json" },
        type: "POST",
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            //console.log(data);


            //if (data[1].check_active === true) {
            //    document.getElementById("1-1").style.display = "none"
            //    document.getElementById("1").style.display = "block"
            //} else {
            //    document.getElementById("1-1").style.display = "block"
            //    document.getElementById("1").style.display = "none"
            //}
            //if (data[3].check_active === true) {
            //    document.getElementById("2").style.display = "block"
            //} else {
            //    document.getElementById("2").style.display = "none"
            //}
            //if (data[2].check_active === true) {
            //    document.getElementById("4-1").style.display = "none"
            //    document.getElementById("4").style.display = "block"
            //} else {
            //    document.getElementById("4-1").style.display = "block"
            //    document.getElementById("4").style.display = "none"
            //}
            //if (data[0].check_active === true) {
            //    document.getElementById("5").style.display = "block"
            //} else {
            //    document.getElementById("5").style.display = "none"
            //}
        },
        error: function (textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}
function parkingunder() {
    var data = {

    };
    $.ajax({
        type: "POST",
        url: $("#Parking").val(),
        headers: { "content-type": "application/json" },
        type: "POST",
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            //console.log(data);

            if (data != "") {
                //document.getElementById("parking1").innerHTML = data[0].parking_slots;
                //document.getElementById("parking2").innerHTML = data[0].parking_slots;
                document.getElementById("parking2").innerHTML = data[0].parking_slots;
                document.getElementById("parking2temp2").innerHTML = data[0].parking_slots;
                document.getElementById("parking2temp3").innerHTML = data[0].parking_slots;
                document.getElementById("parking2temp4").innerHTML = data[0].parking_slots;
                document.getElementById("parking2temp5").innerHTML = data[0].parking_slots;
                document.getElementById("parking2temp6").innerHTML = data[0].parking_slots;
            }
            else {

            }
        },
        error: function (textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}
function parkingicon() {
    var data = {

    };
    $.ajax({
        type: "POST",
        url: $("#Parkingicon").val(),
        headers: { "content-type": "application/json" },
        type: "POST",
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            //console.log(data);

            if (data != "") {
                var date = getFormattedDateTime();
                document.getElementById("parking_datetime").innerHTML = date;
                document.getElementById("parking1").innerHTML = data[0].parking_slots;

                var date = getFormattedDateTime();
                document.getElementById("parking_datetimetemp2").innerHTML = date;
                document.getElementById("parking1temp2").innerHTML = data[0].parking_slots;

                var date = getFormattedDateTime();
                document.getElementById("parking_datetimetemp3").innerHTML = date;
                document.getElementById("parking1temp3").innerHTML = data[0].parking_slots;

                var date = getFormattedDateTime();
                document.getElementById("parking_datetimetemp4").innerHTML = date;
                document.getElementById("parking1temp4").innerHTML = data[0].parking_slots;

                var date = getFormattedDateTime();
                document.getElementById("parking_datetimetemp5").innerHTML = date;
                document.getElementById("parking1temp5").innerHTML = data[0].parking_slots;

                var date = getFormattedDateTime();
                document.getElementById("parking_datetimetemp6").innerHTML = date;
                document.getElementById("parking1temp6").innerHTML = data[0].parking_slots;
                //document.getElementById("parking2").innerHTML = data[0].parking_slots;
                /*document.getElementById("parking3").innerHTML = data[0].parking_slots;*/
            }
            else {

            }
            Timeout2(date)
        },
        error: function (textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}
function parkingics() {
    var data = {

    };
    $.ajax({
        type: "POST",
        url: $("#Parkingics").val(),
        headers: { "content-type": "application/json" },
        type: "POST",
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            //console.log(data);

            if (data != "") {
                //document.getElementById("parking1").innerHTML = data[0].parking_slots;
                //document.getElementById("parking2").innerHTML = data[0].parking_slots;
                document.getElementById("parking3").innerHTML = data[0].parking_slots;
                document.getElementById("parking3temp2").innerHTML = data[0].parking_slots;
                document.getElementById("parking3temp3").innerHTML = data[0].parking_slots;
                document.getElementById("parking3temp4").innerHTML = data[0].parking_slots;
                document.getElementById("parking3temp5").innerHTML = data[0].parking_slots;
                document.getElementById("parking3temp6").innerHTML = data[0].parking_slots;
            }
            else {

            }
        },
        error: function (textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}
function animate() {
    // Code for animations or DOM manipulation

    requestAnimationFrame(animate);
}

animate();

function Bus(langs) {
    var data = {

    };
    $.ajax({
        type: "POST",
        url: $("#bus").val(),
        headers: { "content-type": "application/json" },
        type: "POST",
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            //console.log(data);
            if (data && data.length > 0) {
                var date = getFormattedDateTime();
                document.getElementById("bus_datetime").innerHTML = date;
                if (langs === "thai") {
                    for (var i = 0; i < data.length; i++) {
                        var num = i + 1;
                        if (data[0].source && data[0].destination != '') {
                            document.getElementById("route_id" + num).innerHTML = data[i].thai_language2;
                          
                            if (data[0].round_trip === 'G') {
                                document.getElementById("source" + num).innerHTML = data[i].thai_language;
                      
                                //document.getElementById("destination" + num).innerHTML = data[i].thai_language1;
                          
                            } else {
                                document.getElementById("source" + num).innerHTML = data[i].thai_language1;

                                //document.getElementById("destination" + num).innerHTML = data[i].thai_language;
                            }
                            var datetimeString = data[i].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num).innerHTML = formattedTime;
                        } else {
                            document.getElementById("route_id" + num).innerHTML = data[i].thai_language2;
                            document.getElementById("source" + num).innerHTML = '-';
                            //document.getElementById("destination" + num).innerHTML = '-';
                            var datetimeString = data[0].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num).innerHTML = formattedTime;
                        }
                    }
                    
                }
                if (langs === "eng") {
                    for (var i = 0; i < data.length; i++) {
                        var num = i + 1;
                        if (data[0].source && data[0].destination != '') {
                            document.getElementById("route_id" + num).innerHTML = data[i].eng_language;

                            if (data[0].round_trip === 'G') {
                                document.getElementById("source" + num).innerHTML = data[i].eng_language1;

                                //document.getElementById("destination" + num).innerHTML = data[i].eng_language2;

                            } else {
                                document.getElementById("source" + num).innerHTML = data[i].eng_language2;

                                //document.getElementById("destination" + num).innerHTML = data[i].eng_language1;
                            }
                            var datetimeString = data[i].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num).innerHTML = formattedTime;
                        } else {
                            document.getElementById("route_id" + num).innerHTML = data[i].eng_language;
                            document.getElementById("source" + num).innerHTML = '-';
                            //document.getElementById("destination" + num).innerHTML = '-';
                            var datetimeString = data[0].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num).innerHTML = formattedTime;
                        }
                    }

                }
                if (langs === "chai") {
                    for (var i = 0; i < data.length; i++) {
                        var num = i + 1;
                        if (data[0].source && data[0].destination != '') {
                            document.getElementById("route_id" + num).innerHTML = data[i].chinese_language;

                            if (data[0].round_trip === 'G') {
                                document.getElementById("source" + num).innerHTML = data[i].chinese_language1;

                                //document.getElementById("destination" + num).innerHTML = data[i].chinese_language2;

                            } else {
                                document.getElementById("source" + num).innerHTML = data[i].chinese_language2;

                                //document.getElementById("destination" + num).innerHTML = data[i].chinese_language1;
                            }
                            var datetimeString = data[i].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num).innerHTML = formattedTime;
                        } else {
                            document.getElementById("route_id" + num).innerHTML = data[i].chinese_language;
                            document.getElementById("source" + num).innerHTML = '-';
                            //document.getElementById("destination" + num).innerHTML = '-';
                            var datetimeString = data[0].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num).innerHTML = formattedTime;
                        }
                    }

                }
                
                    //-------------------------------------------------------------------------------------------------------2----------------------------------------------------------------------------------
                    var date = getFormattedDateTime();
                    document.getElementById("bus_datetimetemp2").innerHTML = date;
                if (langs === "thai") {
                    for (var i = 0; i < data.length; i++) {
                        var num = i + 1;
                        if (data[0].source && data[0].destination != '') {
                            document.getElementById("route_id" + num + "temp2").innerHTML = data[i].thai_language2;
                            document.getElementById("route_idics" + num + "temp2").innerHTML = data[i].thai_language2;
                            if (data[0].round_trip === 'G') {
                                document.getElementById("source" + num + "temp2").innerHTML = data[i].thai_language;

                                document.getElementById("destination" + num + "temp2").innerHTML = data[i].thai_language1;

                            } else {
                                document.getElementById("source" + num + "temp2").innerHTML = data[i].thai_language1;

                                document.getElementById("destination" + num + "temp2").innerHTML = data[i].thai_language;
                            }
                            var datetimeString = data[i].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp2").innerHTML = formattedTime;
                            document.getElementById("timeics" + num + "temp2").innerHTML = formattedTime;
                        } else {
                            document.getElementById("route_id" + num + "temp2").innerHTML = data[i].thai_language2;
                            document.getElementById("source" + num + "temp2").innerHTML = '-';
                            //document.getElementById("destination" + num + "temp2").innerHTML = '-';
                            var datetimeString = data[0].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp2").innerHTML = formattedTime;
                            document.getElementById("timeics" + num + "temp2").innerHTML = formattedTime;
                        }
                    }

                }
                if (langs === "eng") {
                    for (var i = 0; i < data.length; i++) {
                        var num = i + 1;
                        if (data[0].source && data[0].destination != '') {
                            document.getElementById("route_id" + num + "temp2").innerHTML = data[i].eng_language;
                            document.getElementById("route_idics" + num + "temp2").innerHTML = data[i].eng_language;
                            if (data[0].round_trip === 'G') {
                                document.getElementById("source" + num + "temp2").innerHTML = data[i].eng_language1;

                                document.getElementById("destination" + num + "temp2").innerHTML = data[i].eng_language2;

                            } else {
                                document.getElementById("source" + num + "temp2").innerHTML = data[i].eng_language2;

                                document.getElementById("destination" + num + "temp2").innerHTML = data[i].eng_language1;
                            }
                            var datetimeString = data[i].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp2").innerHTML = formattedTime;
                            document.getElementById("timeics" + num + "temp2").innerHTML = formattedTime;
                        } else {
                            document.getElementById("route_id" + num + "temp2").innerHTML = data[i].eng_language;
                            document.getElementById("source" + num + "temp2").innerHTML = '-';
                            //document.getElementById("destination" + num + "temp2").innerHTML = '-';
                            var datetimeString = data[0].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp2").innerHTML = formattedTime;
                            document.getElementById("timeics" + num + "temp2").innerHTML = formattedTime;
                        }
                    }

                }
                if (langs === "chai") {
                    for (var i = 0; i < data.length; i++) {
                        var num = i + 1;
                        if (data[0].source && data[0].destination != '') {
                            document.getElementById("route_id" + num + "temp2").innerHTML = data[i].chinese_language;
                            document.getElementById("route_idics" + num + "temp2").innerHTML = data[i].chinese_language;
                            if (data[0].round_trip === 'G') {
                                document.getElementById("source" + num + "temp2").innerHTML = data[i].chinese_language1;

                                document.getElementById("destination" + num + "temp2").innerHTML = data[i].chinese_language2;

                            } else {
                                document.getElementById("source" + num + "temp2").innerHTML = data[i].chinese_language2;

                                document.getElementById("destination" + num + "temp2").innerHTML = data[i].chinese_language1;
                            }
                            var datetimeString = data[i].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp2").innerHTML = formattedTime;
                            document.getElementById("timeics" + num + "temp2").innerHTML = formattedTime;
                        } else {
                            document.getElementById("route_id" + num + "temp2").innerHTML = data[i].chinese_language;
                            document.getElementById("source" + num + "temp2").innerHTML = '-';
                            //document.getElementById("destination" + num + "temp2").innerHTML = '-';
                            var datetimeString = data[0].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp2").innerHTML = formattedTime;
                            document.getElementById("timeics" + num + "temp2").innerHTML = formattedTime;
                        }
                    }

                }
                    
                    //-------------------------------------------------------------------------------------------------------3----------------------------------------------------------------------------------
                    var date = getFormattedDateTime();
                    document.getElementById("bus_datetimetemp3").innerHTML = date;
                if (langs === "thai") {
                    for (var i = 0; i < data.length; i++) {
                        var num = i + 1;
                        if (data[0].source && data[0].destination != '') {
                            document.getElementById("route_id" + num + "temp3").innerHTML = data[i].thai_language2;

                            if (data[0].round_trip === 'G') {
                                document.getElementById("source" + num + "temp3").innerHTML = data[i].thai_language;

                                //document.getElementById("destination" + num + "temp3").innerHTML = data[i].thai_language1;

                            } else {
                                document.getElementById("source" + num + "temp3").innerHTML = data[i].thai_language1;

                                //document.getElementById("destination" + num + "temp3").innerHTML = data[i].thai_language;
                            }
                            var datetimeString = data[i].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp3").innerHTML = formattedTime;
                        } else {
                            document.getElementById("route_id" + num + "temp3").innerHTML = data[i].thai_language2;
                            document.getElementById("source" + num + "temp3").innerHTML = '-';
                            //document.getElementById("destination" + num + "temp3").innerHTML = '-';
                            var datetimeString = data[0].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp3").innerHTML = formattedTime;
                        }
                    }

                }
                if (langs === "eng") {
                    for (var i = 0; i < data.length; i++) {
                        var num = i + 1;
                        if (data[0].source && data[0].destination != '') {
                            document.getElementById("route_id" + num + "temp3").innerHTML = data[i].eng_language;

                            if (data[0].round_trip === 'G') {
                                document.getElementById("source" + num + "temp3").innerHTML = data[i].eng_language1;

                                //document.getElementById("destination" + num + "temp3").innerHTML = data[i].eng_language2;

                            } else {
                                document.getElementById("source" + num + "temp3").innerHTML = data[i].eng_language2;

                                //document.getElementById("destination" + num + "temp3").innerHTML = data[i].eng_language1;
                            }
                            var datetimeString = data[i].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp3").innerHTML = formattedTime;
                        } else {
                            document.getElementById("route_id" + num + "temp3").innerHTML = data[i].eng_language;
                            document.getElementById("source" + num + "temp3").innerHTML = '-';
                            //document.getElementById("destination" + num + "temp3").innerHTML = '-';
                            var datetimeString = data[0].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp3").innerHTML = formattedTime;
                        }
                    }

                }
                if (langs === "chai") {
                    for (var i = 0; i < data.length; i++) {
                        var num = i + 1;
                        if (data[0].source && data[0].destination != '') {
                            document.getElementById("route_id" + num + "temp3").innerHTML = data[i].chinese_language;

                            if (data[0].round_trip === 'G') {
                                document.getElementById("source" + num + "temp3").innerHTML = data[i].chinese_language1;

                                //document.getElementById("destination" + num + "temp3").innerHTML = data[i].chinese_language2;

                            } else {
                                document.getElementById("source" + num + "temp3").innerHTML = data[i].chinese_language2;

                                //document.getElementById("destination" + num + "temp3").innerHTML = data[i].chinese_language1;
                            }
                            var datetimeString = data[i].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp3").innerHTML = formattedTime;
                        } else {
                            document.getElementById("route_id" + num + "temp3").innerHTML = data[i].chinese_language;
                            document.getElementById("source" + num + "temp3").innerHTML = '-';
                            //document.getElementById("destination" + num + "temp3").innerHTML = '-';
                            var datetimeString = data[0].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp3").innerHTML = formattedTime;
                        }
                    }

                }
                   
                    //-------------------------------------------------------------------------------------------------------4----------------------------------------------------------------------------------
                    var date = getFormattedDateTime();
                    document.getElementById("bus_datetimetemp4").innerHTML = date;
                if (langs === "thai") {
                    for (var i = 0; i < data.length; i++) {
                        var num = i + 1;
                        if (data[0].source && data[0].destination != '') {
                            document.getElementById("route_id" + num + "temp4").innerHTML = data[i].thai_language2;

                            if (data[0].round_trip === 'G') {
                                document.getElementById("source" + num + "temp4").innerHTML = data[i].thai_language;

                                //document.getElementById("destination" + num + "temp4").innerHTML = data[i].thai_language1;

                            } else {
                                document.getElementById("source" + num + "temp4").innerHTML = data[i].thai_language1;

                                //document.getElementById("destination" + num + "temp4").innerHTML = data[i].thai_language;
                            }
                            var datetimeString = data[i].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp4").innerHTML = formattedTime;
                        } else {
                            document.getElementById("route_id" + num + "temp4").innerHTML = data[i].thai_language2;
                            document.getElementById("source" + num + "temp4").innerHTML = '-';
                            //document.getElementById("destination" + num + "temp4").innerHTML = '-';
                            var datetimeString = data[0].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp4").innerHTML = formattedTime;
                        }
                    }

                }
                if (langs === "eng") {
                    for (var i = 0; i < data.length; i++) {
                        var num = i + 1;
                        if (data[0].source && data[0].destination != '') {
                            document.getElementById("route_id" + num + "temp4").innerHTML = data[i].eng_language;

                            if (data[0].round_trip === 'G') {
                                document.getElementById("source" + num + "temp4").innerHTML = data[i].eng_language1;

                                //document.getElementById("destination" + num + "temp4").innerHTML = data[i].eng_language2;

                            } else {
                                document.getElementById("source" + num + "temp4").innerHTML = data[i].eng_language2;

                                //document.getElementById("destination" + num + "temp4").innerHTML = data[i].eng_language1;
                            }
                            var datetimeString = data[i].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp4").innerHTML = formattedTime;
                        } else {
                            document.getElementById("route_id" + num + "temp4").innerHTML = data[i].eng_language;
                            document.getElementById("source" + num + "temp4").innerHTML = '-';
                            //document.getElementById("destination" + num + "temp4").innerHTML = '-';
                            var datetimeString = data[0].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp4").innerHTML = formattedTime;
                        }
                    }

                }
                if (langs === "chai") {
                    for (var i = 0; i < data.length; i++) {
                        var num = i + 1;
                        if (data[0].source && data[0].destination != '') {
                            document.getElementById("route_id" + num + "temp4").innerHTML = data[i].chinese_language;

                            if (data[0].round_trip === 'G') {
                                document.getElementById("source" + num + "temp4").innerHTML = data[i].chinese_language1;

                                //document.getElementById("destination" + num + "temp4").innerHTML = data[i].chinese_language2;

                            } else {
                                document.getElementById("source" + num + "temp4").innerHTML = data[i].chinese_language2;

                                //document.getElementById("destination" + num + "temp4").innerHTML = data[i].chinese_language1;
                            }
                            var datetimeString = data[i].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp4").innerHTML = formattedTime;
                        } else {
                            document.getElementById("route_id" + num + "temp4").innerHTML = data[i].chinese_language;
                            document.getElementById("source" + num + "temp4").innerHTML = '-';
                            document.getElementById("destination" + num + "temp4").innerHTML = '-';
                            var datetimeString = data[0].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp4").innerHTML = formattedTime;
                        }
                    }

                }
                    
                    //-------------------------------------------------------------------------------------------------------5----------------------------------------------------------------------------------
                    var date = getFormattedDateTime();
                    document.getElementById("bus_datetimetemp5").innerHTML = date;
                if (langs === "thai") {
                    for (var i = 0; i < data.length; i++) {
                        var num = i + 1;
                        if (data[0].source && data[0].destination != '') {
                            document.getElementById("route_id" + num + "temp5").innerHTML = data[i].thai_language2;

                            if (data[0].round_trip === 'G') {
                                document.getElementById("source" + num + "temp5").innerHTML = data[i].thai_language;

                                //document.getElementById("destination" + num + "temp5").innerHTML = data[i].thai_language1;

                            } else {
                                document.getElementById("source" + num + "temp5").innerHTML = data[i].thai_language1;

                                //document.getElementById("destination" + num + "temp5").innerHTML = data[i].thai_language;
                            }
                            var datetimeString = data[i].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp5").innerHTML = formattedTime;
                        } else {
                            document.getElementById("route_id" + num + "temp5").innerHTML = data[i].thai_language2;
                            document.getElementById("source" + num + "temp5").innerHTML = '-';
                            //document.getElementById("destination" + num + "temp5").innerHTML = '-';
                            var datetimeString = data[0].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp5").innerHTML = formattedTime;
                        }
                    }

                }
                if (langs === "eng") {
                    for (var i = 0; i < data.length; i++) {
                        var num = i + 1;
                        if (data[0].source && data[0].destination != '') {
                            document.getElementById("route_id" + num + "temp5").innerHTML = data[i].eng_language;

                            if (data[0].round_trip === 'G') {
                                document.getElementById("source" + num + "temp5").innerHTML = data[i].eng_language1;

                                //document.getElementById("destination" + num + "temp5").innerHTML = data[i].eng_language2;

                            } else {
                                document.getElementById("source" + num + "temp5").innerHTML = data[i].eng_language2;

                                //document.getElementById("destination" + num + "temp5").innerHTML = data[i].eng_language1;
                            }
                            var datetimeString = data[i].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp5").innerHTML = formattedTime;
                        } else {
                            document.getElementById("route_id" + num + "temp5").innerHTML = data[i].eng_language;
                            document.getElementById("source" + num + "temp5").innerHTML = '-';
                            //document.getElementById("destination" + num + "temp5").innerHTML = '-';
                            var datetimeString = data[0].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp5").innerHTML = formattedTime;
                        }
                    }

                }
                if (langs === "chai") {
                    for (var i = 0; i < data.length; i++) {
                        var num = i + 1;
                        if (data[0].source && data[0].destination != '') {
                            document.getElementById("route_id" + num + "temp5").innerHTML = data[i].chinese_language;

                            if (data[0].round_trip === 'G') {
                                document.getElementById("source" + num + "temp5").innerHTML = data[i].chinese_language1;

                                //document.getElementById("destination" + num + "temp5").innerHTML = data[i].chinese_language2;

                            } else {
                                document.getElementById("source" + num + "temp5").innerHTML = data[i].chinese_language2;

                                //document.getElementById("destination" + num + "temp5").innerHTML = data[i].chinese_language1;
                            }
                            var datetimeString = data[i].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp5").innerHTML = formattedTime;
                        } else {
                            document.getElementById("route_id" + num + "temp5").innerHTML = data[i].chinese_language;
                            document.getElementById("source" + num + "temp5").innerHTML = '-';
                            //document.getElementById("destination" + num + "temp5").innerHTML = '-';
                            var datetimeString = data[0].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp5").innerHTML = formattedTime;
                        }
                    }

                }
                   
                    //-------------------------------------------------------------------------------------------------------6----------------------------------------------------------------------------------
                    var date = getFormattedDateTime();
                    document.getElementById("bus_datetimetemp6").innerHTML = date;
                if (langs === "thai") {
                    for (var i = 0; i < data.length; i++) {
                        var num = i + 1;
                        if (data[0].source && data[0].destination != '') {
                            document.getElementById("route_id" + num + "temp6").innerHTML = data[i].thai_language2;

                            if (data[0].round_trip === 'G') {
                                document.getElementById("source" + num + "temp6").innerHTML = data[i].thai_language;

                                //document.getElementById("destination" + num + "temp6").innerHTML = data[i].thai_language1;

                            } else {
                                document.getElementById("source" + num + "temp6").innerHTML = data[i].thai_language1;

                                //document.getElementById("destination" + num + "temp6").innerHTML = data[i].thai_language;
                            }
                            var datetimeString = data[i].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp6").innerHTML = formattedTime;
                        } else {
                            document.getElementById("route_id" + num + "temp6").innerHTML = data[i].thai_language2;
                            document.getElementById("source" + num + "temp6").innerHTML = '-';
                            //document.getElementById("destination" + num + "temp6").innerHTML = '-';
                            var datetimeString = data[0].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp6").innerHTML = formattedTime;
                        }
                    }

                }
                if (langs === "eng") {
                    for (var i = 0; i < data.length; i++) {
                        var num = i + 1;
                        if (data[0].source && data[0].destination != '') {
                            document.getElementById("route_id" + num + "temp6").innerHTML = data[i].eng_language;

                            if (data[0].round_trip === 'G') {
                                document.getElementById("source" + num + "temp6").innerHTML = data[i].eng_language1;

                                //document.getElementById("destination" + num + "temp6").innerHTML = data[i].eng_language2;

                            } else {
                                document.getElementById("source" + num + "temp6").innerHTML = data[i].eng_language2;

                                //document.getElementById("destination" + num + "temp6").innerHTML = data[i].eng_language1;
                            }
                            var datetimeString = data[i].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp6").innerHTML = formattedTime;
                        } else {
                            document.getElementById("route_id" + num + "temp6").innerHTML = data[i].eng_language;
                            document.getElementById("source" + num + "temp6").innerHTML = '-';
                            //document.getElementById("destination" + num + "temp6").innerHTML = '-';
                            var datetimeString = data[0].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp6").innerHTML = formattedTime;
                        }
                    }

                }
                if (langs === "chai") {
                    for (var i = 0; i < data.length; i++) {
                        var num = i + 1;
                        if (data[0].source && data[0].destination != '') {
                            document.getElementById("route_id" + num + "temp6").innerHTML = data[i].chinese_language;

                            if (data[0].round_trip === 'G') {
                                document.getElementById("source" + num + "temp6").innerHTML = data[i].chinese_language1;

                                //document.getElementById("destination" + num + "temp6").innerHTML = data[i].chinese_language2;

                            } else {
                                document.getElementById("source" + num + "temp6").innerHTML = data[i].chinese_language2;

                                //document.getElementById("destination" + num + "temp6").innerHTML = data[i].chinese_language1;
                            }
                            var datetimeString = data[i].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp6").innerHTML = formattedTime;
                        } else {
                            document.getElementById("route_id" + num + "temp6").innerHTML = data[i].chinese_language;
                            document.getElementById("source" + num + "temp6").innerHTML = '-';
                            //document.getElementById("destination" + num + "temp6").innerHTML = '-';
                            var datetimeString = data[0].destination_time;
                            var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                            var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                            time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                            var hour = time.getHours(); // ดึงชั่วโมง
                            var minute = time.getMinutes(); // ดึงนาที
                            var second = time.getSeconds(); // ดึงวินาที
                            var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                            document.getElementById("time" + num + "temp6").innerHTML = formattedTime;
                        }
                    }

                }
                    
                Timeout1(date);
                loopChangeBus();
                //settime_bus();
                //settime_bus1();
                //settime_bus2();
            } else {
                console.log("No data received");
            }

        },
        error: function (textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
            location.reload();
        }
    });
}
function loopChangeBus() {
    time = 10;
    changpagebus1(time)
    setTimeout(() => {
        changpagebus2();
        setTimeout(() => {
            changpagebus3();
            setTimeout(() => {
                changpagebus4();
                setTimeout(() => {
                    loopChangeBus(time); // วนกลับไปเรียก changeLanguage
                }, time * 1000);
            }, time * 1000);
        }, time * 1000);
    }, time * 1000);
}
function changpagebus1() {
    document.getElementById("busnone1").style.display = "block";
    document.getElementById("busnone2").style.display = "none";
    document.getElementById("busnone3").style.display = "none";
    document.getElementById("busnone1temp2").style.display = "block";
    document.getElementById("busnone2temp2").style.display = "none";
    document.getElementById("busnone3temp2").style.display = "none";
    document.getElementById("busnone4temp2").style.display = "none";
    document.getElementById("busnone1temp3").style.display = "block";
    document.getElementById("busnone2temp3").style.display = "none";
    document.getElementById("busnone3temp3").style.display = "none";
    document.getElementById("busnone1temp4").style.display = "block";
    document.getElementById("busnone2temp4").style.display = "none";
    document.getElementById("busnone3temp4").style.display = "none";
    document.getElementById("busnone1temp5").style.display = "block";
    document.getElementById("busnone2temp5").style.display = "none";
    document.getElementById("busnone3temp5").style.display = "none";
    document.getElementById("busnone1temp6").style.display = "block";
    document.getElementById("busnone2temp6").style.display = "none";
    document.getElementById("busnone3temp6").style.display = "none";
}
function changpagebus2() {
    document.getElementById("busnone1").style.display = "none";
    document.getElementById("busnone2").style.display = "block";
    document.getElementById("busnone3").style.display = "none";
    document.getElementById("busnone1temp2").style.display = "none";
    document.getElementById("busnone2temp2").style.display = "block";
    document.getElementById("busnone3temp2").style.display = "none";
    document.getElementById("busnone4temp2").style.display = "none";
    document.getElementById("busnone1temp3").style.display = "none";
    document.getElementById("busnone2temp3").style.display = "block";
    document.getElementById("busnone3temp3").style.display = "none";
    document.getElementById("busnone1temp4").style.display = "none";
    document.getElementById("busnone2temp4").style.display = "block";
    document.getElementById("busnone3temp4").style.display = "none";
    document.getElementById("busnone1temp5").style.display = "none";
    document.getElementById("busnone2temp5").style.display = "block";
    document.getElementById("busnone3temp5").style.display = "none";
    document.getElementById("busnone1temp6").style.display = "none";
    document.getElementById("busnone2temp6").style.display = "block";
    document.getElementById("busnone3temp6").style.display = "none";
}
function changpagebus3() {
    document.getElementById("busnone1").style.display = "none";
    document.getElementById("busnone2").style.display = "none";
    document.getElementById("busnone3").style.display = "block";
    document.getElementById("busnone1temp2").style.display = "none";
    document.getElementById("busnone2temp2").style.display = "none";
    document.getElementById("busnone3temp2").style.display = "block";
    document.getElementById("busnone4temp2").style.display = "none";
    document.getElementById("busnone1temp3").style.display = "none";
    document.getElementById("busnone2temp3").style.display = "none";
    document.getElementById("busnone3temp3").style.display = "block";
    document.getElementById("busnone1temp4").style.display = "none";
    document.getElementById("busnone2temp4").style.display = "none";
    document.getElementById("busnone3temp4").style.display = "block";
    document.getElementById("busnone1temp5").style.display = "none";
    document.getElementById("busnone2temp5").style.display = "none";
    document.getElementById("busnone3temp5").style.display = "block";
    document.getElementById("busnone1temp6").style.display = "none";
    document.getElementById("busnone2temp6").style.display = "none";
    document.getElementById("busnone3temp6").style.display = "block";
}
function changpagebus4() {
    //document.getElementById("busnone1").style.display = "none";
    //document.getElementById("busnone2").style.display = "none";
    //document.getElementById("busnone3").style.display = "none";
    //document.getElementById("busnone4").style.display = "block";
    document.getElementById("busnone1temp2").style.display = "none";
    document.getElementById("busnone2temp2").style.display = "none";
    document.getElementById("busnone3temp2").style.display = "none";
    document.getElementById("busnone4temp2").style.display = "block";
    //document.getElementById("busnone1temp3").style.display = "none";
    //document.getElementById("busnone2temp3").style.display = "none";
    //document.getElementById("busnone3temp3").style.display = "none";
    //document.getElementById("busnone4temp3").style.display = "block";
    //document.getElementById("busnone1temp4").style.display = "none";
    //document.getElementById("busnone2temp4").style.display = "none";
    //document.getElementById("busnone3temp4").style.display = "none";
    //document.getElementById("busnone4temp4").style.display = "block";
    //document.getElementById("busnone1temp5").style.display = "none";
    //document.getElementById("busnone2temp5").style.display = "none";
    //document.getElementById("busnone3temp5").style.display = "none";
    //document.getElementById("busnone4temp5").style.display = "block";
    //document.getElementById("busnone1temp6").style.display = "none";
    //document.getElementById("busnone2temp6").style.display = "none";
    //document.getElementById("busnone3temp6").style.display = "none";
    //document.getElementById("busnone4temp6").style.display = "block";
}
function settime_bus() {
    var interval = 30000; // 30 seconds
    function changpage() {
        document.getElementById("busnone1").style.display = "block";
        document.getElementById("busnone2").style.display = "none";
        document.getElementById("busnone3").style.display = "none";
        document.getElementById("busnone1temp2").style.display = "block";
        document.getElementById("busnone2temp2").style.display = "none";
        document.getElementById("busnone3temp2").style.display = "none";
        document.getElementById("busnone1temp3").style.display = "block";
        document.getElementById("busnone2temp3").style.display = "none";
        document.getElementById("busnone3temp3").style.display = "none";
        document.getElementById("busnone1temp4").style.display = "block";
        document.getElementById("busnone2temp4").style.display = "none";
        document.getElementById("busnone3temp4").style.display = "none";
        document.getElementById("busnone1temp5").style.display = "block";
        document.getElementById("busnone2temp5").style.display = "none";
        document.getElementById("busnone3temp5").style.display = "none";
        document.getElementById("busnone1temp6").style.display = "block";
        document.getElementById("busnone2temp6").style.display = "none";
        document.getElementById("busnone3temp6").style.display = "none";
    }

    setInterval(changpage, interval);
}

function settime_bus1() {
    var interval = 30000; // 30 seconds
    function changpage1() {
        document.getElementById("busnone1").style.display = "none";
        document.getElementById("busnone2").style.display = "block";
        document.getElementById("busnone3").style.display = "none";
        document.getElementById("busnone1temp2").style.display = "none";
        document.getElementById("busnone2temp2").style.display = "block";
        document.getElementById("busnone3temp2").style.display = "none";
        document.getElementById("busnone1temp3").style.display = "none";
        document.getElementById("busnone2temp3").style.display = "block";
        document.getElementById("busnone3temp3").style.display = "none";
        document.getElementById("busnone1temp4").style.display = "none";
        document.getElementById("busnone2temp4").style.display = "block";
        document.getElementById("busnone3temp4").style.display = "none";
        document.getElementById("busnone1temp5").style.display = "none";
        document.getElementById("busnone2temp5").style.display = "block";
        document.getElementById("busnone3temp5").style.display = "none";
        document.getElementById("busnone1temp6").style.display = "none";
        document.getElementById("busnone2temp6").style.display = "block";
        document.getElementById("busnone3temp6").style.display = "none";
    }
    setTimeout(function () {
        setInterval(changpage1, interval);
    }, interval / 3); // Start this interval after 10 seconds
}

function settime_bus2() {
    var interval = 30000; // 30 seconds
    function changpage2() {
        document.getElementById("busnone1").style.display = "none";
        document.getElementById("busnone2").style.display = "none";
        document.getElementById("busnone3").style.display = "block";
        document.getElementById("busnone1temp2").style.display = "none";
        document.getElementById("busnone2temp2").style.display = "none";
        document.getElementById("busnone3temp2").style.display = "block";
        document.getElementById("busnone1temp3").style.display = "none";
        document.getElementById("busnone2temp3").style.display = "none";
        document.getElementById("busnone3temp3").style.display = "block";
        document.getElementById("busnone1temp4").style.display = "none";
        document.getElementById("busnone2temp4").style.display = "none";
        document.getElementById("busnone3temp4").style.display = "block";
        document.getElementById("busnone1temp5").style.display = "none";
        document.getElementById("busnone2temp5").style.display = "none";
        document.getElementById("busnone3temp5").style.display = "block";
        document.getElementById("busnone1temp6").style.display = "none";
        document.getElementById("busnone2temp6").style.display = "none";
        document.getElementById("busnone3temp6").style.display = "block";
    }
    setTimeout(function () {
        setInterval(changpage2, interval);
    }, 2 * interval / 3); // Start this interval after 20 seconds
}

function qrparking() {
    var data = {

    };
    $.ajax({
        type: "POST",
        url: $("#qrparking").val(),
        headers: { "content-type": "application/json" },
        type: "POST",
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            //console.log(data);

            if (data != "") {
                var guidance_image_base64 = data[0].image_base64; // Base64 string ของภาพ
                var qrparking = document.getElementById("qrparking");
                qrparking.setAttribute('src', 'data:image/png;base64,' + guidance_image_base64);


            }
            else {

            }
            //if (data[0].check_active === true) {
            //    document.getElementById("6").style.display = "block"
            //} else {
            //    document.getElementById("6").style.display = "none"
            //}
        },
        error: function (textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}
function BTS(langs) {
    var data = {

    };
    $.ajax({
        type: "POST",
        url: $("#BTS").val(),
        headers: { "content-type": "application/json" },
        type: "POST",
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            //console.log(data);

            if (data != "") {
                var date = getFormattedDateTime();
                document.getElementById("bts_datetime").innerHTML = date;
                if (langs === "thai") {
                    document.getElementById("bts_th1").innerHTML = data[3].thai_language;
                    document.getElementById("bts_th").innerHTML = data[0].thai_language;
                }
                if (langs === "eng") {
                    document.getElementById("bts_th1").innerHTML = data[3].eng_language;
                    document.getElementById("bts_th").innerHTML = data[0].eng_language;
                }
                if (langs === "chai") {
                    document.getElementById("bts_th1").innerHTML = data[3].chinese_language;
                    document.getElementById("bts_th").innerHTML = data[0].chinese_language;
                }
                document.getElementById("befortime1").innerHTML = data[2].time_list;
                document.getElementById("aftertime1").innerHTML = data[3].time_list;
                document.getElementById("bts_destination2").innerHTML = data[0].initials_destination;
                
                document.getElementById("befortime2").innerHTML = data[0].time_list;
                document.getElementById("aftertime2").innerHTML = data[1].time_list;
                document.getElementById("bts_destination1").innerHTML = data[3].initials_destination;

                //-----------------------------------------------------------------------------------------2-------------------------------------------------------------------------------------
                var date = getFormattedDateTime();
                document.getElementById("bts_datetimetemp2").innerHTML = date;
                if (langs === "thai") {
                    document.getElementById("bts_th1temp2").innerHTML = data[3].thai_language;
                    document.getElementById("bts_thtemp2").innerHTML = data[0].thai_language;
                }
                if (langs === "eng") {
                    document.getElementById("bts_th1temp2").innerHTML = data[3].eng_language;
                    document.getElementById("bts_thtemp2").innerHTML = data[0].eng_language;
                }
                if (langs === "chai") {
                    document.getElementById("bts_th1temp2").innerHTML = data[3].chinese_language;
                    document.getElementById("bts_thtemp2").innerHTML = data[0].chinese_language;
                }
                
                document.getElementById("befortime1temp2").innerHTML = data[2].time_list;
                document.getElementById("aftertime1temp2").innerHTML = data[3].time_list;
                document.getElementById("bts_destination2temp2").innerHTML = data[0].initials_destination;

                document.getElementById("befortime2temp2").innerHTML = data[0].time_list;
                document.getElementById("aftertime2temp2").innerHTML = data[1].time_list;
                document.getElementById("bts_destination1temp2").innerHTML = data[3].initials_destination;
                //-----------------------------------------------------------------------------------------3-------------------------------------------------------------------------------------
                var date = getFormattedDateTime();
                document.getElementById("bts_datetimetemp3").innerHTML = date;
                if (langs === "thai") {
                    document.getElementById("bts_th1temp3").innerHTML = data[3].thai_language;
                    document.getElementById("bts_thtemp3").innerHTML = data[0].thai_language;
                }
                if (langs === "eng") {
                    document.getElementById("bts_th1temp3").innerHTML = data[3].eng_language;
                    document.getElementById("bts_thtemp3").innerHTML = data[0].eng_language;
                }
                if (langs === "chai") {
                    document.getElementById("bts_th1temp3").innerHTML = data[3].chinese_language;
                    document.getElementById("bts_thtemp3").innerHTML = data[0].chinese_language;
                }
               
                document.getElementById("befortime1temp3").innerHTML = data[2].time_list;
                document.getElementById("aftertime1temp3").innerHTML = data[3].time_list;
                document.getElementById("bts_destination2temp3").innerHTML = data[0].initials_destination;

                document.getElementById("befortime2temp3").innerHTML = data[0].time_list;
                document.getElementById("aftertime2temp3").innerHTML = data[1].time_list;
                document.getElementById("bts_destination1temp3").innerHTML = data[3].initials_destination;
                //-----------------------------------------------------------------------------------------4-------------------------------------------------------------------------------------
                var date = getFormattedDateTime();
                document.getElementById("bts_datetimetemp4").innerHTML = date;
                if (langs === "thai") {
                    document.getElementById("bts_th1temp4").innerHTML = data[3].thai_language;
                    document.getElementById("bts_thtemp4").innerHTML = data[0].thai_language;
                }
                if (langs === "eng") {
                    document.getElementById("bts_th1temp4").innerHTML = data[3].eng_language;
                    document.getElementById("bts_thtemp4").innerHTML = data[0].eng_language;
                }
                if (langs === "chai") {
                    document.getElementById("bts_th1temp4").innerHTML = data[3].chinese_language;
                    document.getElementById("bts_thtemp4").innerHTML = data[0].chinese_language;
                }
                
                document.getElementById("befortime1temp4").innerHTML = data[2].time_list;
                document.getElementById("aftertime1temp4").innerHTML = data[3].time_list;
                document.getElementById("bts_destination2temp4").innerHTML = data[0].initials_destination;

                document.getElementById("befortime2temp4").innerHTML = data[0].time_list;
                document.getElementById("aftertime2temp4").innerHTML = data[1].time_list;
                document.getElementById("bts_destination1temp4").innerHTML = data[3].initials_destination;
                //-----------------------------------------------------------------------------------------5-------------------------------------------------------------------------------------
                var date = getFormattedDateTime();
                document.getElementById("bts_datetimetemp5").innerHTML = date;
                if (langs === "thai") {
                    document.getElementById("bts_th1temp5").innerHTML = data[3].thai_language;
                    document.getElementById("bts_thtemp5").innerHTML = data[0].thai_language;
                }
                if (langs === "eng") {
                    document.getElementById("bts_th1temp5").innerHTML = data[3].eng_language;
                    document.getElementById("bts_thtemp5").innerHTML = data[0].eng_language;
                }
                if (langs === "chai") {
                    document.getElementById("bts_th1temp5").innerHTML = data[3].chinese_language;
                    document.getElementById("bts_thtemp5").innerHTML = data[0].chinese_language;
                }
                
                document.getElementById("befortime1temp5").innerHTML = data[2].time_list;
                document.getElementById("aftertime1temp5").innerHTML = data[3].time_list;
                document.getElementById("bts_destination2temp5").innerHTML = data[0].initials_destination;

                document.getElementById("befortime2temp5").innerHTML = data[0].time_list;
                document.getElementById("aftertime2temp5").innerHTML = data[1].time_list;
                document.getElementById("bts_destination1temp5").innerHTML = data[3].initials_destination;
                //-----------------------------------------------------------------------------------------6-------------------------------------------------------------------------------------
                var date = getFormattedDateTime();
                document.getElementById("bts_datetimetemp6").innerHTML = date;
                if (langs === "thai") {
                    document.getElementById("bts_th1temp6").innerHTML = data[3].thai_language;
                    document.getElementById("bts_thtemp6").innerHTML = data[0].thai_language;
                }
                if (langs === "eng") {
                    document.getElementById("bts_th1temp6").innerHTML = data[3].eng_language;
                    document.getElementById("bts_thtemp6").innerHTML = data[0].eng_language;
                }
                if (langs === "chai") {
                    document.getElementById("bts_th1temp6").innerHTML = data[3].chinese_language;
                    document.getElementById("bts_thtemp6").innerHTML = data[0].chinese_language;
                }
                
                document.getElementById("befortime1temp6").innerHTML = data[2].time_list;
                document.getElementById("aftertime1temp6").innerHTML = data[3].time_list;
                document.getElementById("bts_destination2temp6").innerHTML = data[0].initials_destination;

                document.getElementById("befortime2temp6").innerHTML = data[0].time_list;
                document.getElementById("aftertime2temp6").innerHTML = data[1].time_list;
                document.getElementById("bts_destination1temp6").innerHTML = data[3].initials_destination;
            }
            else {

            }
            Timeout1(date);
        },
        error: function (textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}

function Template() {
    var data = {

    };
    $.ajax({
        type: "POST",
        url: $("#Template1").val(),
        headers: { "content-type": "application/json" },
        type: "POST",
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            console.log(data);

            if (data != "") {
                if (data[0].number_list_id_1 === 1) {
                    document.getElementById("1").style.display = 'block';
                    document.getElementById("2").style.display = 'none';
                    document.getElementById("3").style.display = 'none';
                    document.getElementById("4").style.display = 'none';
                    document.getElementById("5").style.display = 'none';
                    document.getElementById("6").style.display = 'none';
                }
                if (data[0].number_list_id_1 === 2) {
                    document.getElementById("1").style.display = 'none';
                    document.getElementById("2").style.display = 'block';
                    document.getElementById("3").style.display = 'none';
                    document.getElementById("4").style.display = 'none';
                    document.getElementById("5").style.display = 'none';
                    document.getElementById("6").style.display = 'none';
                }
                if (data[0].number_list_id_1 === 3) {
                    document.getElementById("1").style.display = 'none';
                    document.getElementById("2").style.display = 'none';
                    document.getElementById("3").style.display = 'block';
                    document.getElementById("4").style.display = 'none';
                    document.getElementById("5").style.display = 'none';
                    document.getElementById("6").style.display = 'none';
                }
                if (data[0].number_list_id_1 === 4) {
                    document.getElementById("1").style.display = 'none';
                    document.getElementById("2").style.display = 'none';
                    document.getElementById("3").style.display = 'none';
                    document.getElementById("4").style.display = 'block';
                    document.getElementById("5").style.display = 'none';
                    document.getElementById("6").style.display = 'none';
                }
                if (data[0].number_list_id_1 === 5) {
                    document.getElementById("1").style.display = 'none';
                    document.getElementById("2").style.display = 'none';
                    document.getElementById("3").style.display = 'none';
                    document.getElementById("4").style.display = 'none';
                    document.getElementById("5").style.display = 'block';
                    document.getElementById("6").style.display = 'none';
                }
                if (data[0].number_list_id_1 === 6) {
                    document.getElementById("1").style.display = 'none';
                    document.getElementById("2").style.display = 'none';
                    document.getElementById("3").style.display = 'none';
                    document.getElementById("4").style.display = 'none';
                    document.getElementById("5").style.display = 'none';
                    document.getElementById("6").style.display = 'block';
                }
                if (data[0].number_list_id_2 === 1) {
                    document.getElementById("1temp2").style.display = 'block';
                    document.getElementById("2temp2").style.display = 'none';
                    document.getElementById("3temp2").style.display = 'none';
                    document.getElementById("4temp2").style.display = 'none';
                    document.getElementById("5temp2").style.display = 'none';
                    document.getElementById("6temp2").style.display = 'none';
                }
                if (data[0].number_list_id_2 === 2) {
                    document.getElementById("1temp2").style.display = 'none';
                    document.getElementById("2temp2").style.display = 'block';
                    document.getElementById("3temp2").style.display = 'none';
                    document.getElementById("4temp2").style.display = 'none';
                    document.getElementById("5temp2").style.display = 'none';
                    document.getElementById("6temp2").style.display = 'none';
                }
                if (data[0].number_list_id_2 === 3) {
                    document.getElementById("1temp2").style.display = 'none';
                    document.getElementById("2temp2").style.display = 'none';
                    document.getElementById("3temp2").style.display = 'block';
                    document.getElementById("4temp2").style.display = 'none';
                    document.getElementById("5temp2").style.display = 'none';
                    document.getElementById("6temp2").style.display = 'none';
                }
                if (data[0].number_list_id_2 === 4) {
                    document.getElementById("1temp2").style.display = 'none';
                    document.getElementById("2temp2").style.display = 'none';
                    document.getElementById("3temp2").style.display = 'none';
                    document.getElementById("4temp2").style.display = 'block';
                    document.getElementById("5temp2").style.display = 'none';
                    document.getElementById("6temp2").style.display = 'none';
                }
                if (data[0].number_list_id_2 === 5) {
                    document.getElementById("1temp2").style.display = 'none';
                    document.getElementById("2temp2").style.display = 'none';
                    document.getElementById("3temp2").style.display = 'none';
                    document.getElementById("4temp2").style.display = 'none';
                    document.getElementById("5temp2").style.display = 'block';
                    document.getElementById("6temp2").style.display = 'none';
                }
                if (data[0].number_list_id_2 === 6) {
                    document.getElementById("1temp2").style.display = 'none';
                    document.getElementById("2temp2").style.display = 'none';
                    document.getElementById("3temp2").style.display = 'none';
                    document.getElementById("4temp2").style.display = 'none';
                    document.getElementById("5temp2").style.display = 'none';
                    document.getElementById("6temp2").style.display = 'block';
                }
                if (data[0].number_list_id_3 === 1) {
                    document.getElementById("1temp3").style.display = 'block';
                    document.getElementById("2temp3").style.display = 'none';
                    document.getElementById("3temp3").style.display = 'none';
                    document.getElementById("4temp3").style.display = 'none';
                    document.getElementById("5temp3").style.display = 'none';
                    document.getElementById("6temp3").style.display = 'none';
                }
                if (data[0].number_list_id_3 === 2) {
                    document.getElementById("1temp3").style.display = 'none';
                    document.getElementById("2temp3").style.display = 'block';
                    document.getElementById("3temp3").style.display = 'none';
                    document.getElementById("4temp3").style.display = 'none';
                    document.getElementById("5temp3").style.display = 'none';
                    document.getElementById("6temp3").style.display = 'none';
                }
                if (data[0].number_list_id_3 === 3) {
                    document.getElementById("1temp3").style.display = 'none';
                    document.getElementById("2temp3").style.display = 'none';
                    document.getElementById("3temp3").style.display = 'block';
                    document.getElementById("4temp3").style.display = 'none';
                    document.getElementById("5temp3").style.display = 'none';
                    document.getElementById("6temp3").style.display = 'none';
                }
                if (data[0].number_list_id_3 === 4) {
                    document.getElementById("1temp3").style.display = 'none';
                    document.getElementById("2temp3").style.display = 'none';
                    document.getElementById("3temp3").style.display = 'none';
                    document.getElementById("4temp3").style.display = 'block';
                    document.getElementById("5temp3").style.display = 'none';
                    document.getElementById("6temp3").style.display = 'none';
                }
                if (data[0].number_list_id_3 === 5) {
                    document.getElementById("1temp3").style.display = 'none';
                    document.getElementById("2temp3").style.display = 'none';
                    document.getElementById("3temp3").style.display = 'none';
                    document.getElementById("4temp3").style.display = 'none';
                    document.getElementById("5temp3").style.display = 'block';
                    document.getElementById("6temp3").style.display = 'none';
                }
                if (data[0].number_list_id_3 === 6) {
                    document.getElementById("1temp3").style.display = 'none';
                    document.getElementById("2temp3").style.display = 'none';
                    document.getElementById("3temp3").style.display = 'none';
                    document.getElementById("4temp3").style.display = 'none';
                    document.getElementById("5temp3").style.display = 'none';
                    document.getElementById("6temp3").style.display = 'block';
                }
                if (data[0].number_list_id_4 === 1) {
                    document.getElementById("1temp4").style.display = 'block';
                    document.getElementById("2temp4").style.display = 'none';
                    document.getElementById("3temp4").style.display = 'none';
                    document.getElementById("4temp4").style.display = 'none';
                    document.getElementById("5temp4").style.display = 'none';
                    document.getElementById("6temp4").style.display = 'none';
                }
                if (data[0].number_list_id_4 === 2) {
                    document.getElementById("1temp4").style.display = 'none';
                    document.getElementById("2temp4").style.display = 'block';
                    document.getElementById("3temp4").style.display = 'none';
                    document.getElementById("4temp4").style.display = 'none';
                    document.getElementById("5temp4").style.display = 'none';
                    document.getElementById("6temp4").style.display = 'none';
                }
                if (data[0].number_list_id_4 === 3) {
                    document.getElementById("1temp4").style.display = 'none';
                    document.getElementById("2temp4").style.display = 'none';
                    document.getElementById("3temp4").style.display = 'block';
                    document.getElementById("4temp4").style.display = 'none';
                    document.getElementById("5temp4").style.display = 'none';
                    document.getElementById("6temp4").style.display = 'none';
                }
                if (data[0].number_list_id_4 === 4) {
                    document.getElementById("1temp4").style.display = 'none';
                    document.getElementById("2temp4").style.display = 'none';
                    document.getElementById("3temp4").style.display = 'none';
                    document.getElementById("4temp4").style.display = 'block';
                    document.getElementById("5temp4").style.display = 'none';
                    document.getElementById("6temp4").style.display = 'none';
                }
                if (data[0].number_list_id_4 === 5) {
                    document.getElementById("1temp4").style.display = 'none';
                    document.getElementById("2temp4").style.display = 'none';
                    document.getElementById("3temp4").style.display = 'none';
                    document.getElementById("4temp4").style.display = 'none';
                    document.getElementById("5temp4").style.display = 'block';
                    document.getElementById("6temp4").style.display = 'none';
                }
                if (data[0].number_list_id_4 === 6) {
                    document.getElementById("1temp4").style.display = 'none';
                    document.getElementById("2temp4").style.display = 'none';
                    document.getElementById("3temp4").style.display = 'none';
                    document.getElementById("4temp4").style.display = 'none';
                    document.getElementById("5temp4").style.display = 'none';
                    document.getElementById("6temp4").style.display = 'block';
                }
                if (data[0].number_list_id_5 === 1) {
                    document.getElementById("1temp5").style.display = 'block';
                    document.getElementById("2temp5").style.display = 'none';
                    document.getElementById("3temp5").style.display = 'none';
                    document.getElementById("4temp5").style.display = 'none';
                    document.getElementById("5temp5").style.display = 'none';
                    document.getElementById("6temp5").style.display = 'none';
                }
                if (data[0].number_list_id_5 === 2) {
                    document.getElementById("1temp5").style.display = 'none';
                    document.getElementById("2temp5").style.display = 'block';
                    document.getElementById("3temp5").style.display = 'none';
                    document.getElementById("4temp5").style.display = 'none';
                    document.getElementById("5temp5").style.display = 'none';
                    document.getElementById("6temp5").style.display = 'none';
                }
                if (data[0].number_list_id_5 === 3) {
                    document.getElementById("1temp5").style.display = 'none';
                    document.getElementById("2temp5").style.display = 'none';
                    document.getElementById("3temp5").style.display = 'block';
                    document.getElementById("4temp5").style.display = 'none';
                    document.getElementById("5temp5").style.display = 'none';
                    document.getElementById("6temp5").style.display = 'none';
                }
                if (data[0].number_list_id_5 === 4) {
                    document.getElementById("1temp5").style.display = 'none';
                    document.getElementById("2temp5").style.display = 'none';
                    document.getElementById("3temp5").style.display = 'none';
                    document.getElementById("4temp5").style.display = 'block';
                    document.getElementById("5temp5").style.display = 'none';
                    document.getElementById("6temp5").style.display = 'none';
                }
                if (data[0].number_list_id_5 === 5) {
                    document.getElementById("1temp5").style.display = 'none';
                    document.getElementById("2temp5").style.display = 'none';
                    document.getElementById("3temp5").style.display = 'none';
                    document.getElementById("4temp5").style.display = 'none';
                    document.getElementById("5temp5").style.display = 'block';
                    document.getElementById("6temp5").style.display = 'none';
                }
                if (data[0].number_list_id_5 === 6) {
                    document.getElementById("1temp5").style.display = 'none';
                    document.getElementById("2temp5").style.display = 'none';
                    document.getElementById("3temp5").style.display = 'none';
                    document.getElementById("4temp5").style.display = 'none';
                    document.getElementById("5temp5").style.display = 'none';
                    document.getElementById("6temp5").style.display = 'block';
                }
                if (data[0].number_list_id_6 === 1) {
                    document.getElementById("1temp6").style.display = 'block';
                    document.getElementById("2temp6").style.display = 'none';
                    document.getElementById("3temp6").style.display = 'none';
                    document.getElementById("4temp6").style.display = 'none';
                    document.getElementById("5temp6").style.display = 'none';
                    document.getElementById("6temp6").style.display = 'none';
                }
                if (data[0].number_list_id_6 === 2) {
                    document.getElementById("1temp6").style.display = 'none';
                    document.getElementById("2temp6").style.display = 'block';
                    document.getElementById("3temp6").style.display = 'none';
                    document.getElementById("4temp6").style.display = 'none';
                    document.getElementById("5temp6").style.display = 'none';
                    document.getElementById("6temp6").style.display = 'none';
                }
                if (data[0].number_list_id_6 === 3) {
                    document.getElementById("1temp6").style.display = 'none';
                    document.getElementById("2temp6").style.display = 'none';
                    document.getElementById("3temp6").style.display = 'block';
                    document.getElementById("4temp6").style.display = 'none';
                    document.getElementById("5temp6").style.display = 'none';
                    document.getElementById("6temp6").style.display = 'none';
                }
                if (data[0].number_list_id_6 === 4) {
                    document.getElementById("1temp6").style.display = 'none';
                    document.getElementById("2temp6").style.display = 'none';
                    document.getElementById("3temp6").style.display = 'none';
                    document.getElementById("4temp6").style.display = 'block';
                    document.getElementById("5temp6").style.display = 'none';
                    document.getElementById("6temp6").style.display = 'none';
                }
                if (data[0].number_list_id_6 === 5) {
                    document.getElementById("1temp6").style.display = 'none';
                    document.getElementById("2temp6").style.display = 'none';
                    document.getElementById("3temp6").style.display = 'none';
                    document.getElementById("4temp6").style.display = 'none';
                    document.getElementById("5temp6").style.display = 'block';
                    document.getElementById("6temp6").style.display = 'none';
                }
                if (data[0].number_list_id_6 === 6) {
                    document.getElementById("1temp6").style.display = 'none';
                    document.getElementById("2temp6").style.display = 'none';
                    document.getElementById("3temp6").style.display = 'none';
                    document.getElementById("4temp6").style.display = 'none';
                    document.getElementById("5temp6").style.display = 'none';
                    document.getElementById("6temp6").style.display = 'block';
                }


            }
            else {

            }
        },
        error: function (textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}

function Boat(langs) {
    var data = {

    };
    $.ajax({
        type: "POST",
        url: $("#Boat").val(),
        headers: { "content-type": "application/json" },
        type: "POST",
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            console.log(data);

            if (data != "") {
                var date = getFormattedDateTime();
                document.getElementById("boat_datetime").innerHTML = date;
                    if (langs === "thai") {
                        if (data[0].round_trip === 'G' | data[0].round_trip === '') {
                            document.getElementById("boatth1").innerHTML = data[0].thai_language;
                            document.getElementById("boatth2").innerHTML = data[0].thai_language1;
                            document.getElementById("boatth3").innerHTML = data[1].thai_language;
                            document.getElementById("boatth4").innerHTML = data[1].thai_language1;
                            document.getElementById("boatth5").innerHTML = data[2].thai_language;
                            document.getElementById("boatth6").innerHTML = data[2].thai_language1;
                            document.getElementById("text_boatth4").innerHTML = data[0].thai_language2;
                            document.getElementById("text_boatth2").innerHTML = data[1].thai_language2;
                            document.getElementById("text_boatth3").innerHTML = data[2].thai_language2;
                        } else {
                            document.getElementById("boatth1").innerHTML = data[0].thai_language1;
                            document.getElementById("boatth2").innerHTML = data[0].thai_language;
                            document.getElementById("boatth3").innerHTML = data[1].thai_language1;
                            document.getElementById("boatth4").innerHTML = data[1].thai_language;
                            document.getElementById("boatth5").innerHTML = data[2].thai_language1;
                            document.getElementById("boatth6").innerHTML = data[2].thai_language;
                            document.getElementById("text_boatth4").innerHTML = data[0].thai_language2;
                            document.getElementById("text_boatth2").innerHTML = data[1].thai_language2;
                            document.getElementById("text_boatth3").innerHTML = data[2].thai_language2;
                        }
                    }

                if (langs === "eng") {
                    if (data[1].round_trip === 'G' | data[1].round_trip === '') {
                        document.getElementById("boatth1").innerHTML = data[0].eng_language;
                        document.getElementById("boatth2").innerHTML = data[0].eng_language1;
                        document.getElementById("boatth3").innerHTML = data[1].eng_language;
                        document.getElementById("boatth4").innerHTML = data[1].eng_language1;
                        document.getElementById("boatth5").innerHTML = data[2].eng_language;
                        document.getElementById("boatth6").innerHTML = data[2].eng_language1;
                        document.getElementById("text_boatth4").innerHTML = data[0].eng_language2;
                        document.getElementById("text_boatth2").innerHTML = data[1].eng_language2;
                        document.getElementById("text_boatth3").innerHTML = data[2].eng_language2;
                    } else {
                        document.getElementById("boatth1").innerHTML = data[0].eng_language1;
                        document.getElementById("boatth2").innerHTML = data[0].eng_language;
                        document.getElementById("boatth3").innerHTML = data[1].eng_language1;
                        document.getElementById("boatth4").innerHTML = data[1].eng_language;
                        document.getElementById("boatth5").innerHTML = data[2].eng_language1;
                        document.getElementById("boatth6").innerHTML = data[2].eng_language;
                        document.getElementById("text_boatth4").innerHTML = data[0].eng_language2;
                        document.getElementById("text_boatth2").innerHTML = data[1].eng_language2;
                        document.getElementById("text_boatth3").innerHTML = data[2].eng_language2;
                    }
                }
                if (langs === "chai") {
                    if (data[2].round_trip === 'G' | data[2].round_trip === '') {
                        document.getElementById("boatth1").innerHTML = data[0].chinese_language;
                        document.getElementById("boatth2").innerHTML = data[0].chinese_language1;
                        document.getElementById("boatth3").innerHTML = data[1].chinese_language;
                        document.getElementById("boatth4").innerHTML = data[1].chinese_language1;
                        document.getElementById("boatth5").innerHTML = data[2].chinese_language;
                        document.getElementById("boatth6").innerHTML = data[2].chinese_language1;
                        document.getElementById("text_boatth4").innerHTML = data[0].chinese_language2;
                        document.getElementById("text_boatth2").innerHTML = data[1].chinese_language2;
                        document.getElementById("text_boatth3").innerHTML = data[2].chinese_language2;
                    } else {
                        document.getElementById("boatth1").innerHTML = data[0].chinese_language1;
                        document.getElementById("boatth2").innerHTML = data[0].chinese_language;
                        document.getElementById("boatth3").innerHTML = data[1].chinese_language1;
                        document.getElementById("boatth4").innerHTML = data[1].chinese_language;
                        document.getElementById("boatth5").innerHTML = data[2].chinese_language1;
                        document.getElementById("boatth6").innerHTML = data[2].chinese_language;
                        document.getElementById("text_boatth4").innerHTML = data[0].chinese_language2;
                        document.getElementById("text_boatth2").innerHTML = data[1].chinese_language2;
                        document.getElementById("text_boatth3").innerHTML = data[2].chinese_language2;
                    }
                }
                var datetimeString = data[0].destination_time;
                var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                var hour = time.getHours(); // ดึงชั่วโมง
                var minute = time.getMinutes(); // ดึงนาที
                var second = time.getSeconds(); // ดึงวินาที
                var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                document.getElementById("boat_time1").innerHTML = formattedTime;

                var datetimeString = data[1].destination_time;
                var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                var hour = time.getHours(); // ดึงชั่วโมง
                var minute = time.getMinutes(); // ดึงนาที
                var second = time.getSeconds(); // ดึงวินาที
                var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                document.getElementById("boat_time2").innerHTML = formattedTime;
                
                var datetimeString = data[2].destination_time;
                var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                var hour = time.getHours(); // ดึงชั่วโมง
                var minute = time.getMinutes(); // ดึงนาที
                var second = time.getSeconds(); // ดึงวินาที
                var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                document.getElementById("boat_time3").innerHTML = formattedTime;

                //----------------------------------------------------------------------------------------------------2------------------------------------------------------------------------------------
                var date = getFormattedDateTime();
                document.getElementById("boat_datetimetemp2").innerHTML = date;
                if (langs === "thai") {
                    if (data[0].round_trip === 'G' | data[0].round_trip === '') {
                        document.getElementById("boatth1temp2").innerHTML = data[0].thai_language;
                        document.getElementById("boatth2temp2").innerHTML = data[0].thai_language1;
                        document.getElementById("boatth3temp2").innerHTML = data[1].thai_language;
                        document.getElementById("boatth4temp2").innerHTML = data[1].thai_language1;
                        document.getElementById("boatth5temp2").innerHTML = data[2].thai_language;
                        document.getElementById("boatth6temp2").innerHTML = data[2].thai_language1;
                        document.getElementById("text_boatth4temp2").innerHTML = data[0].thai_language2;
                        document.getElementById("text_boatth2temp2").innerHTML = data[1].thai_language2;
                        document.getElementById("text_boatth3temp2").innerHTML = data[2].thai_language2;
                    } else {
                        document.getElementById("boatth1temp2").innerHTML = data[0].thai_language1;
                        document.getElementById("boatth2temp2").innerHTML = data[0].thai_language;
                        document.getElementById("boatth3temp2").innerHTML = data[1].thai_language1;
                        document.getElementById("boatth4temp2").innerHTML = data[1].thai_language;
                        document.getElementById("boatth5temp2").innerHTML = data[2].thai_language1;
                        document.getElementById("boatth6temp2").innerHTML = data[2].thai_language;
                        document.getElementById("text_boatth4temp2").innerHTML = data[0].thai_language2;
                        document.getElementById("text_boatth2temp2").innerHTML = data[1].thai_language2;
                        document.getElementById("text_boatth3temp2").innerHTML = data[2].thai_language2;
                    }
                }

                if (langs === "eng") {
                    if (data[1].round_trip === 'G' | data[1].round_trip === '') {
                        document.getElementById("boatth1temp2").innerHTML = data[0].eng_language;
                        document.getElementById("boatth2temp2").innerHTML = data[0].eng_language1;
                        document.getElementById("boatth3temp2").innerHTML = data[1].eng_language;
                        document.getElementById("boatth4temp2").innerHTML = data[1].eng_language1;
                        document.getElementById("boatth5temp2").innerHTML = data[2].eng_language;
                        document.getElementById("boatth6temp2").innerHTML = data[2].eng_language1;
                        document.getElementById("text_boatth4temp2").innerHTML = data[0].eng_language2;
                        document.getElementById("text_boatth2temp2").innerHTML = data[1].eng_language2;
                        document.getElementById("text_boatth3temp2").innerHTML = data[2].eng_language2;
                    } else {
                        document.getElementById("boatth1temp2").innerHTML = data[0].eng_language1;
                        document.getElementById("boatth2temp2").innerHTML = data[0].eng_language;
                        document.getElementById("boatth3temp2").innerHTML = data[1].eng_language1;
                        document.getElementById("boatth4temp2").innerHTML = data[1].eng_language;
                        document.getElementById("boatth5temp2").innerHTML = data[2].eng_language1;
                        document.getElementById("boatth6temp2").innerHTML = data[2].eng_language;
                        document.getElementById("text_boatth4temp2").innerHTML = data[0].eng_language2;
                        document.getElementById("text_boatth2temp2").innerHTML = data[1].eng_language2;
                        document.getElementById("text_boatth3temp2").innerHTML = data[2].eng_language2;
                    }
                }
                if (langs === "chai") {
                    if (data[2].round_trip === 'G' | data[2].round_trip === '') {
                        document.getElementById("boatth1temp2").innerHTML = data[0].chinese_language;
                        document.getElementById("boatth2temp2").innerHTML = data[0].chinese_language1;
                        document.getElementById("boatth3temp2").innerHTML = data[1].chinese_language;
                        document.getElementById("boatth4temp2").innerHTML = data[1].chinese_language1;
                        document.getElementById("boatth5temp2").innerHTML = data[2].chinese_language;
                        document.getElementById("boatth6temp2").innerHTML = data[2].chinese_language1;
                        document.getElementById("text_boatth4temp2").innerHTML = data[0].chinese_language2;
                        document.getElementById("text_boatth2temp2").innerHTML = data[1].chinese_language2;
                        document.getElementById("text_boatth3temp2").innerHTML = data[2].chinese_language2;
                    } else {
                        document.getElementById("boatth1temp2").innerHTML = data[0].chinese_language1;
                        document.getElementById("boatth2temp2").innerHTML = data[0].chinese_language;
                        document.getElementById("boatth3temp2").innerHTML = data[1].chinese_language1;
                        document.getElementById("boatth4temp2").innerHTML = data[1].chinese_language;
                        document.getElementById("boatth5temp2").innerHTML = data[2].chinese_language1;
                        document.getElementById("boatth6temp2").innerHTML = data[2].chinese_language;
                        document.getElementById("text_boatth4temp2").innerHTML = data[0].chinese_language2;
                        document.getElementById("text_boatth2temp2").innerHTML = data[1].chinese_language2;
                        document.getElementById("text_boatth3temp2").innerHTML = data[2].chinese_language2;
                    }
                }

                var datetimeString = data[0].destination_time;
                var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                var hour = time.getHours(); // ดึงชั่วโมง
                var minute = time.getMinutes(); // ดึงนาที
                var second = time.getSeconds(); // ดึงวินาที
                var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                document.getElementById("boat_time1temp2").innerHTML = formattedTime;

                var datetimeString = data[1].destination_time;
                var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                var hour = time.getHours(); // ดึงชั่วโมง
                var minute = time.getMinutes(); // ดึงนาที
                var second = time.getSeconds(); // ดึงวินาที
                var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                document.getElementById("boat_time2temp2").innerHTML = formattedTime;

                var datetimeString = data[2].destination_time;
                var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                var hour = time.getHours(); // ดึงชั่วโมง
                var minute = time.getMinutes(); // ดึงนาที
                var second = time.getSeconds(); // ดึงวินาที
                var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                document.getElementById("boat_time3temp2").innerHTML = formattedTime;

                //----------------------------------------------------------------------------------------------------3------------------------------------------------------------------------------------
                var date = getFormattedDateTime();
                document.getElementById("boat_datetimetemp3").innerHTML = date;
                if (langs === "thai") {
                    if (data[0].round_trip === 'G' | data[0].round_trip === '') {
                        document.getElementById("boatth1temp3").innerHTML = data[0].thai_language;
                        document.getElementById("boatth2temp3").innerHTML = data[0].thai_language1;
                        document.getElementById("boatth3temp3").innerHTML = data[1].thai_language;
                        document.getElementById("boatth4temp3").innerHTML = data[1].thai_language1;
                        document.getElementById("boatth5temp3").innerHTML = data[2].thai_language;
                        document.getElementById("boatth6temp3").innerHTML = data[2].thai_language1;
                        document.getElementById("text_boatth4temp3").innerHTML = data[0].thai_language2;
                        document.getElementById("text_boatth2temp3").innerHTML = data[1].thai_language2;
                        document.getElementById("text_boatth3temp3").innerHTML = data[2].thai_language2;
                    } else {
                        document.getElementById("boatth1temp3").innerHTML = data[0].thai_language1;
                        document.getElementById("boatth2temp3").innerHTML = data[0].thai_language;
                        document.getElementById("boatth3temp3").innerHTML = data[1].thai_language1;
                        document.getElementById("boatth4temp3").innerHTML = data[1].thai_language;
                        document.getElementById("boatth5temp3").innerHTML = data[2].thai_language1;
                        document.getElementById("boatth6temp3").innerHTML = data[2].thai_language;
                        document.getElementById("text_boatth4temp3").innerHTML = data[0].thai_language2;
                        document.getElementById("text_boatth2temp3").innerHTML = data[1].thai_language2;
                        document.getElementById("text_boatth3temp3").innerHTML = data[2].thai_language2;
                    }
                }

                if (langs === "eng") {
                    if (data[1].round_trip === 'G' | data[1].round_trip === '') {
                        document.getElementById("boatth1temp3").innerHTML = data[0].eng_language;
                        document.getElementById("boatth2temp3").innerHTML = data[0].eng_language1;
                        document.getElementById("boatth3temp3").innerHTML = data[1].eng_language;
                        document.getElementById("boatth4temp3").innerHTML = data[1].eng_language1;
                        document.getElementById("boatth5temp3").innerHTML = data[2].eng_language;
                        document.getElementById("boatth6temp3").innerHTML = data[2].eng_language1;
                        document.getElementById("text_boatth4temp3").innerHTML = data[0].eng_language2;
                        document.getElementById("text_boatth2temp3").innerHTML = data[1].eng_language2;
                        document.getElementById("text_boatth3temp3").innerHTML = data[2].eng_language2;
                    } else {
                        document.getElementById("boatth1temp3").innerHTML = data[0].eng_language1;
                        document.getElementById("boatth2temp3").innerHTML = data[0].eng_language;
                        document.getElementById("boatth3temp3").innerHTML = data[1].eng_language1;
                        document.getElementById("boatth4temp3").innerHTML = data[1].eng_language;
                        document.getElementById("boatth5temp3").innerHTML = data[2].eng_language1;
                        document.getElementById("boatth6temp3").innerHTML = data[2].eng_language;
                        document.getElementById("text_boatth4temp3").innerHTML = data[0].eng_language2;
                        document.getElementById("text_boatth2temp3").innerHTML = data[1].eng_language2;
                        document.getElementById("text_boatth3temp3").innerHTML = data[2].eng_language2;
                    }
                }
                if (langs === "chai") {
                    if (data[2].round_trip === 'G' | data[2].round_trip === '') {
                        document.getElementById("boatth1temp3").innerHTML = data[0].chinese_language;
                        document.getElementById("boatth2temp3").innerHTML = data[0].chinese_language1;
                        document.getElementById("boatth3temp3").innerHTML = data[1].chinese_language;
                        document.getElementById("boatth4temp3").innerHTML = data[1].chinese_language1;
                        document.getElementById("boatth5temp3").innerHTML = data[2].chinese_language;
                        document.getElementById("boatth6temp3").innerHTML = data[2].chinese_language1;
                        document.getElementById("text_boatth4temp3").innerHTML = data[0].chinese_language2;
                        document.getElementById("text_boatth2temp3").innerHTML = data[1].chinese_language2;
                        document.getElementById("text_boatth3temp3").innerHTML = data[2].chinese_language2;
                    } else {
                        document.getElementById("boatth1temp3").innerHTML = data[0].chinese_language1;
                        document.getElementById("boatth2temp3").innerHTML = data[0].chinese_language;
                        document.getElementById("boatth3temp3").innerHTML = data[1].chinese_language1;
                        document.getElementById("boatth4temp3").innerHTML = data[1].chinese_language;
                        document.getElementById("boatth5temp3").innerHTML = data[2].chinese_language1;
                        document.getElementById("boatth6temp3").innerHTML = data[2].chinese_language;
                        document.getElementById("text_boatth4temp3").innerHTML = data[0].chinese_language2;
                        document.getElementById("text_boatth2temp3").innerHTML = data[1].chinese_language2;
                        document.getElementById("text_boatth3temp3").innerHTML = data[2].chinese_language2;
                    }
                }

                var datetimeString = data[0].destination_time;
                var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                var hour = time.getHours(); // ดึงชั่วโมง
                var minute = time.getMinutes(); // ดึงนาที
                var second = time.getSeconds(); // ดึงวินาที
                var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                document.getElementById("boat_time1temp3").innerHTML = formattedTime;

                var datetimeString = data[1].destination_time;
                var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                var hour = time.getHours(); // ดึงชั่วโมง
                var minute = time.getMinutes(); // ดึงนาที
                var second = time.getSeconds(); // ดึงวินาที
                var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                document.getElementById("boat_time2temp3").innerHTML = formattedTime;

                var datetimeString = data[2].destination_time;
                var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                var hour = time.getHours(); // ดึงชั่วโมง
                var minute = time.getMinutes(); // ดึงนาที
                var second = time.getSeconds(); // ดึงวินาที
                var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                document.getElementById("boat_time3temp3").innerHTML = formattedTime;


                //----------------------------------------------------------------------------------------------------4------------------------------------------------------------------------------------
                var date = getFormattedDateTime();
                document.getElementById("boat_datetimetemp4").innerHTML = date;
                if (langs === "thai") {
                    if (data[0].round_trip === 'G' | data[0].round_trip === '') {
                        document.getElementById("boatth1temp4").innerHTML = data[0].thai_language;
                        document.getElementById("boatth2temp4").innerHTML = data[0].thai_language1;
                        document.getElementById("boatth3temp4").innerHTML = data[1].thai_language;
                        document.getElementById("boatth4temp4").innerHTML = data[1].thai_language1;
                        document.getElementById("boatth5temp4").innerHTML = data[2].thai_language;
                        document.getElementById("boatth6temp4").innerHTML = data[2].thai_language1;
                        document.getElementById("text_boatth4temp4").innerHTML = data[0].thai_language2;
                        document.getElementById("text_boatth2temp4").innerHTML = data[1].thai_language2;
                        document.getElementById("text_boatth3temp4").innerHTML = data[2].thai_language2;
                    } else {
                        document.getElementById("boatth1temp4").innerHTML = data[0].thai_language1;
                        document.getElementById("boatth2temp4").innerHTML = data[0].thai_language;
                        document.getElementById("boatth3temp4").innerHTML = data[1].thai_language1;
                        document.getElementById("boatth4temp4").innerHTML = data[1].thai_language;
                        document.getElementById("boatth5temp4").innerHTML = data[2].thai_language1;
                        document.getElementById("boatth6temp4").innerHTML = data[2].thai_language;
                        document.getElementById("text_boatth4temp4").innerHTML = data[0].thai_language2;
                        document.getElementById("text_boatth2temp4").innerHTML = data[1].thai_language2;
                        document.getElementById("text_boatth3temp4").innerHTML = data[2].thai_language2;
                    }
                }

                if (langs === "eng") {
                    if (data[1].round_trip === 'G' | data[1].round_trip === '') {
                        document.getElementById("boatth1temp4").innerHTML = data[0].eng_language;
                        document.getElementById("boatth2temp4").innerHTML = data[0].eng_language1;
                        document.getElementById("boatth3temp4").innerHTML = data[1].eng_language;
                        document.getElementById("boatth4temp4").innerHTML = data[1].eng_language1;
                        document.getElementById("boatth5temp4").innerHTML = data[2].eng_language;
                        document.getElementById("boatth6temp4").innerHTML = data[2].eng_language1;
                        document.getElementById("text_boatth4temp4").innerHTML = data[0].eng_language2;
                        document.getElementById("text_boatth2temp4").innerHTML = data[1].eng_language2;
                        document.getElementById("text_boatth3temp4").innerHTML = data[2].eng_language2;
                    } else {
                        document.getElementById("boatth1temp4").innerHTML = data[0].eng_language1;
                        document.getElementById("boatth2temp4").innerHTML = data[0].eng_language;
                        document.getElementById("boatth3temp4").innerHTML = data[1].eng_language1;
                        document.getElementById("boatth4temp4").innerHTML = data[1].eng_language;
                        document.getElementById("boatth5temp4").innerHTML = data[2].eng_language1;
                        document.getElementById("boatth6temp4").innerHTML = data[2].eng_language;
                        document.getElementById("text_boatth4temp4").innerHTML = data[0].eng_language2;
                        document.getElementById("text_boatth2temp4").innerHTML = data[1].eng_language2;
                        document.getElementById("text_boatth3temp4").innerHTML = data[2].eng_language2;
                    }
                }
                if (langs === "chai") {
                    if (data[2].round_trip === 'G' | data[2].round_trip === '') {
                        document.getElementById("boatth1temp4").innerHTML = data[0].chinese_language;
                        document.getElementById("boatth2temp4").innerHTML = data[0].chinese_language1;
                        document.getElementById("boatth3temp4").innerHTML = data[1].chinese_language;
                        document.getElementById("boatth4temp4").innerHTML = data[1].chinese_language1;
                        document.getElementById("boatth5temp4").innerHTML = data[2].chinese_language;
                        document.getElementById("boatth6temp4").innerHTML = data[2].chinese_language1;
                        document.getElementById("text_boatth4temp4").innerHTML = data[0].chinese_language2;
                        document.getElementById("text_boatth2temp4").innerHTML = data[1].chinese_language2;
                        document.getElementById("text_boatth3temp4").innerHTML = data[2].chinese_language2;
                    } else {
                        document.getElementById("boatth1temp4").innerHTML = data[0].chinese_language1;
                        document.getElementById("boatth2temp4").innerHTML = data[0].chinese_language;
                        document.getElementById("boatth3temp4").innerHTML = data[1].chinese_language1;
                        document.getElementById("boatth4temp4").innerHTML = data[1].chinese_language;
                        document.getElementById("boatth5temp4").innerHTML = data[2].chinese_language1;
                        document.getElementById("boatth6temp4").innerHTML = data[2].chinese_language;
                        document.getElementById("text_boatth4temp4").innerHTML = data[0].chinese_language2;
                        document.getElementById("text_boatth2temp4").innerHTML = data[1].chinese_language2;
                        document.getElementById("text_boatth3temp4").innerHTML = data[2].chinese_language2;
                    }
                }
               
                var datetimeString = data[0].destination_time;
                var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                var hour = time.getHours(); // ดึงชั่วโมง
                var minute = time.getMinutes(); // ดึงนาที
                var second = time.getSeconds(); // ดึงวินาที
                var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                document.getElementById("boat_time1temp4").innerHTML = formattedTime;

                var datetimeString = data[1].destination_time;
                var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                var hour = time.getHours(); // ดึงชั่วโมง
                var minute = time.getMinutes(); // ดึงนาที
                var second = time.getSeconds(); // ดึงวินาที
                var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                document.getElementById("boat_time2temp4").innerHTML = formattedTime;

                var datetimeString = data[2].destination_time;
                var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                var hour = time.getHours(); // ดึงชั่วโมง
                var minute = time.getMinutes(); // ดึงนาที
                var second = time.getSeconds(); // ดึงวินาที
                var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                document.getElementById("boat_time3temp4").innerHTML = formattedTime;

                //----------------------------------------------------------------------------------------------------5------------------------------------------------------------------------------------
                var date = getFormattedDateTime();
                document.getElementById("boat_datetimetemp5").innerHTML = date;
                if (langs === "thai") {
                    if (data[0].round_trip === 'G' | data[0].round_trip === '') {
                        document.getElementById("boatth1temp5").innerHTML = data[0].thai_language;
                        document.getElementById("boatth2temp5").innerHTML = data[0].thai_language1;
                        document.getElementById("boatth3temp5").innerHTML = data[1].thai_language;
                        document.getElementById("boatth4temp5").innerHTML = data[1].thai_language1;
                        document.getElementById("boatth5temp5").innerHTML = data[2].thai_language;
                        document.getElementById("boatth6temp5").innerHTML = data[2].thai_language1;
                        document.getElementById("text_boatth4temp5").innerHTML = data[0].thai_language2;
                        document.getElementById("text_boatth2temp5").innerHTML = data[1].thai_language2;
                        document.getElementById("text_boatth3temp5").innerHTML = data[2].thai_language2;
                    } else {
                        document.getElementById("boatth1temp5").innerHTML = data[0].thai_language1;
                        document.getElementById("boatth2temp5").innerHTML = data[0].thai_language;
                        document.getElementById("boatth3temp5").innerHTML = data[1].thai_language1;
                        document.getElementById("boatth4temp5").innerHTML = data[1].thai_language;
                        document.getElementById("boatth5temp5").innerHTML = data[2].thai_language1;
                        document.getElementById("boatth6temp5").innerHTML = data[2].thai_language;
                        document.getElementById("text_boatth4temp5").innerHTML = data[0].thai_language2;
                        document.getElementById("text_boatth2temp5").innerHTML = data[1].thai_language2;
                        document.getElementById("text_boatth3temp5").innerHTML = data[2].thai_language2;
                    }
                }

                if (langs === "eng") {
                    if (data[1].round_trip === 'G' | data[1].round_trip === '') {
                        document.getElementById("boatth1temp5").innerHTML = data[0].eng_language;
                        document.getElementById("boatth2temp5").innerHTML = data[0].eng_language1;
                        document.getElementById("boatth3temp5").innerHTML = data[1].eng_language;
                        document.getElementById("boatth4temp5").innerHTML = data[1].eng_language1;
                        document.getElementById("boatth5temp5").innerHTML = data[2].eng_language;
                        document.getElementById("boatth6temp5").innerHTML = data[2].eng_language1;
                        document.getElementById("text_boatth4temp5").innerHTML = data[0].eng_language2;
                        document.getElementById("text_boatth2temp5").innerHTML = data[1].eng_language2;
                        document.getElementById("text_boatth3temp5").innerHTML = data[2].eng_language2;
                    } else {
                        document.getElementById("boatth1temp5").innerHTML = data[0].eng_language1;
                        document.getElementById("boatth2temp5").innerHTML = data[0].eng_language;
                        document.getElementById("boatth3temp5").innerHTML = data[1].eng_language1;
                        document.getElementById("boatth4temp5").innerHTML = data[1].eng_language;
                        document.getElementById("boatth5temp5").innerHTML = data[2].eng_language1;
                        document.getElementById("boatth6temp5").innerHTML = data[2].eng_language;
                        document.getElementById("text_boatth4temp5").innerHTML = data[0].eng_language2;
                        document.getElementById("text_boatth2temp5").innerHTML = data[1].eng_language2;
                        document.getElementById("text_boatth3temp5").innerHTML = data[2].eng_language2;
                    }
                }
                if (langs === "chai") {
                    if (data[2].round_trip === 'G' | data[2].round_trip === '') {
                        document.getElementById("boatth1temp5").innerHTML = data[0].chinese_language;
                        document.getElementById("boatth2temp5").innerHTML = data[0].chinese_language1;
                        document.getElementById("boatth3temp5").innerHTML = data[1].chinese_language;
                        document.getElementById("boatth4temp5").innerHTML = data[1].chinese_language1;
                        document.getElementById("boatth5temp5").innerHTML = data[2].chinese_language;
                        document.getElementById("boatth6temp5").innerHTML = data[2].chinese_language1;
                        document.getElementById("text_boatth4temp5").innerHTML = data[0].chinese_language2;
                        document.getElementById("text_boatth2temp5").innerHTML = data[1].chinese_language2;
                        document.getElementById("text_boatth3temp5").innerHTML = data[2].chinese_language2;
                    } else {
                        document.getElementById("boatth1temp5").innerHTML = data[0].chinese_language1;
                        document.getElementById("boatth2temp5").innerHTML = data[0].chinese_language;
                        document.getElementById("boatth3temp5").innerHTML = data[1].chinese_language1;
                        document.getElementById("boatth4temp5").innerHTML = data[1].chinese_language;
                        document.getElementById("boatth5temp5").innerHTML = data[2].chinese_language1;
                        document.getElementById("boatth6temp5").innerHTML = data[2].chinese_language;
                        document.getElementById("text_boatth4temp5").innerHTML = data[0].chinese_language2;
                        document.getElementById("text_boatth2temp5").innerHTML = data[1].chinese_language2;
                        document.getElementById("text_boatth3temp5").innerHTML = data[2].chinese_language2;
                    }
                }
                
                var datetimeString = data[0].destination_time;
                var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                var hour = time.getHours(); // ดึงชั่วโมง
                var minute = time.getMinutes(); // ดึงนาที
                var second = time.getSeconds(); // ดึงวินาที
                var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                document.getElementById("boat_time1temp5").innerHTML = formattedTime;

                var datetimeString = data[1].destination_time;
                var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                var hour = time.getHours(); // ดึงชั่วโมง
                var minute = time.getMinutes(); // ดึงนาที
                var second = time.getSeconds(); // ดึงวินาที
                var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                document.getElementById("boat_time2temp5").innerHTML = formattedTime;

                var datetimeString = data[2].destination_time;
                var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                var hour = time.getHours(); // ดึงชั่วโมง
                var minute = time.getMinutes(); // ดึงนาที
                var second = time.getSeconds(); // ดึงวินาที
                var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                document.getElementById("boat_time3temp5").innerHTML = formattedTime;

                //----------------------------------------------------------------------------------------------------6------------------------------------------------------------------------------------
                var date = getFormattedDateTime();
                document.getElementById("boat_datetimetemp6").innerHTML = date;
                if (langs === "thai") {
                    if (data[0].round_trip === 'G' | data[0].round_trip === '') {
                        document.getElementById("boatth1temp6").innerHTML = data[0].thai_language;
                        document.getElementById("boatth2temp6").innerHTML = data[0].thai_language1;
                        document.getElementById("boatth3temp6").innerHTML = data[1].thai_language;
                        document.getElementById("boatth4temp6").innerHTML = data[1].thai_language1;
                        document.getElementById("boatth5temp6").innerHTML = data[2].thai_language;
                        document.getElementById("boatth6temp6").innerHTML = data[2].thai_language1;
                        document.getElementById("text_boatth4temp6").innerHTML = data[0].thai_language2;
                        document.getElementById("text_boatth2temp6").innerHTML = data[1].thai_language2;
                        document.getElementById("text_boatth3temp6").innerHTML = data[2].thai_language2;
                    } else {
                        document.getElementById("boatth1temp6").innerHTML = data[0].thai_language1;
                        document.getElementById("boatth2temp6").innerHTML = data[0].thai_language;
                        document.getElementById("boatth3temp6").innerHTML = data[1].thai_language1;
                        document.getElementById("boatth4temp6").innerHTML = data[1].thai_language;
                        document.getElementById("boatth5temp6").innerHTML = data[2].thai_language1;
                        document.getElementById("boatth6temp6").innerHTML = data[2].thai_language;
                        document.getElementById("text_boatth4temp6").innerHTML = data[0].thai_language2;
                        document.getElementById("text_boatth2temp6").innerHTML = data[1].thai_language2;
                        document.getElementById("text_boatth3temp6").innerHTML = data[2].thai_language2;
                    }
                }

                if (langs === "eng") {
                    if (data[1].round_trip === 'G' | data[1].round_trip === '') {
                        document.getElementById("boatth1temp6").innerHTML = data[0].eng_language;
                        document.getElementById("boatth2temp6").innerHTML = data[0].eng_language1;
                        document.getElementById("boatth3temp6").innerHTML = data[1].eng_language;
                        document.getElementById("boatth4temp6").innerHTML = data[1].eng_language1;
                        document.getElementById("boatth5temp6").innerHTML = data[2].eng_language;
                        document.getElementById("boatth6temp6").innerHTML = data[2].eng_language1;
                        document.getElementById("text_boatth4temp6").innerHTML = data[0].eng_language2;
                        document.getElementById("text_boatth2temp6").innerHTML = data[1].eng_language2;
                        document.getElementById("text_boatth3temp6").innerHTML = data[2].eng_language2;
                    } else {
                        document.getElementById("boatth1temp6").innerHTML = data[0].eng_language1;
                        document.getElementById("boatth2temp6").innerHTML = data[0].eng_language;
                        document.getElementById("boatth3temp6").innerHTML = data[1].eng_language1;
                        document.getElementById("boatth4temp6").innerHTML = data[1].eng_language;
                        document.getElementById("boatth5temp6").innerHTML = data[2].eng_language1;
                        document.getElementById("boatth6temp6").innerHTML = data[2].eng_language;
                        document.getElementById("text_boatth4temp6").innerHTML = data[0].eng_language2;
                        document.getElementById("text_boatth2temp6").innerHTML = data[1].eng_language2;
                        document.getElementById("text_boatth3temp6").innerHTML = data[2].eng_language2;
                    }
                }
                if (langs === "chai") {
                    if (data[2].round_trip === 'G' | data[2].round_trip === '') {
                        document.getElementById("boatth1temp6").innerHTML = data[0].chinese_language;
                        document.getElementById("boatth2temp6").innerHTML = data[0].chinese_language1;
                        document.getElementById("boatth3temp6").innerHTML = data[1].chinese_language;
                        document.getElementById("boatth4temp6").innerHTML = data[1].chinese_language1;
                        document.getElementById("boatth5temp6").innerHTML = data[2].chinese_language;
                        document.getElementById("boatth6temp6").innerHTML = data[2].chinese_language1;
                        document.getElementById("text_boatth4temp6").innerHTML = data[0].chinese_language2;
                        document.getElementById("text_boatth2temp6").innerHTML = data[1].chinese_language2;
                        document.getElementById("text_boatth3temp6").innerHTML = data[2].chinese_language2;
                    } else {
                        document.getElementById("boatth1temp6").innerHTML = data[0].chinese_language1;
                        document.getElementById("boatth2temp6").innerHTML = data[0].chinese_language;
                        document.getElementById("boatth3temp6").innerHTML = data[1].chinese_language1;
                        document.getElementById("boatth4temp6").innerHTML = data[1].chinese_language;
                        document.getElementById("boatth5temp6").innerHTML = data[2].chinese_language1;
                        document.getElementById("boatth6temp6").innerHTML = data[2].chinese_language;
                        document.getElementById("text_boatth4temp6").innerHTML = data[0].chinese_language2;
                        document.getElementById("text_boatth2temp6").innerHTML = data[1].chinese_language2;
                        document.getElementById("text_boatth3temp6").innerHTML = data[2].chinese_language2;
                    }
                }
                var datetimeString = data[0].destination_time;
                var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                var hour = time.getHours(); // ดึงชั่วโมง
                var minute = time.getMinutes(); // ดึงนาที
                var second = time.getSeconds(); // ดึงวินาที
                var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                document.getElementById("boat_time1temp6").innerHTML = formattedTime;

                var datetimeString = data[1].destination_time;
                var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                var hour = time.getHours(); // ดึงชั่วโมง
                var minute = time.getMinutes(); // ดึงนาที
                var second = time.getSeconds(); // ดึงวินาที
                var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                document.getElementById("boat_time2temp6").innerHTML = formattedTime;

                var datetimeString = data[2].destination_time;
                var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                var hour = time.getHours(); // ดึงชั่วโมง
                var minute = time.getMinutes(); // ดึงนาที
                var second = time.getSeconds(); // ดึงวินาที
                var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                document.getElementById("boat_time3temp6").innerHTML = formattedTime;
            }


            else {

            }
            Timeout1(date);
            ActiveAll()
        },
        error: function (textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
            location.reload();
        }
    });
}
function updateClock() {
    var data = {

    };
    $.ajax({
        type: "POST",
        url: $("#Boat").val(),
        headers: { "content-type": "application/json" },
        type: "POST",
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            //console.log(data);

            if (data != "") {

                document.getElementById("boatth3").innerHTML = data[1].thai_language1;
                document.getElementById("boaten3").innerHTML = data[1].eng_language1;
                document.getElementById("boatch3").innerHTML = data[1].chinese_language1;

                document.getElementById("boatth4").innerHTML = data[1].thai_language;
                document.getElementById("boaten4").innerHTML = data[1].eng_language;
                document.getElementById("boatch4").innerHTML = data[1].chinese_language;

                var datetimeString = data[1].destination_time;
                var timeString = datetimeString.split('T')[1]; // แยกส่วนของเวลาออกมา
                var time = new Date('2024-04-09T' + timeString); // สร้างวัตถุ Date จากเวลา
                time.setHours(time.getHours() + 7); // เพิ่ม 7 ชั่วโมงในเวลา
                var hour = time.getHours(); // ดึงชั่วโมง
                var minute = time.getMinutes(); // ดึงนาที
                var second = time.getSeconds(); // ดึงวินาที
                var formattedTime = hour + ':' + (minute < 10 ? '0' : '') + minute;
                document.getElementById("boat_time2").innerHTML = formattedTime;

            }


            else {

            }
        },
        error: function (textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
            location.reload();
        }
    });
}
function Boatex(langs) {
    var data = {

    };
    $.ajax({
        type: "POST",
        url: $("#Boatex").val(),
        headers: { "content-type": "application/json" },
        type: "POST",
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            console.log(data);

            if (data != "") {
                var date = getFormattedDateTime();
                document.getElementById("boatex_datetime").innerHTML = date;
                if (langs === "thai") {
                    if (data[0].round_trip === 'G') {
                        document.getElementById("boat10-1").innerHTML = data[0].thai_language2;
                        document.getElementById("boat1-1").innerHTML = data[1].thai_language2;
                        document.getElementById("boat2-1").innerHTML = data[2].thai_language2;
                        document.getElementById("boat4-1").innerHTML = data[3].thai_language2;
                        document.getElementById("boat5-1").innerHTML = data[3].thai_language2;
                        document.getElementById("boatexth1").innerHTML = data[0].thai_language;
                        document.getElementById("boatexth2").innerHTML = data[0].thai_language1;
                        document.getElementById("boatexth3").innerHTML = data[1].thai_language;
                        document.getElementById("boatexth4").innerHTML = data[1].thai_language1;
                        document.getElementById("boatexth5").innerHTML = data[2].thai_language;
                        document.getElementById("boatexth6").innerHTML = data[2].thai_language1;
                        document.getElementById("boatexth7").innerHTML = data[3].thai_language;
                        document.getElementById("boatexth8").innerHTML = data[3].thai_language1;
                        

                    } else {
                        document.getElementById("boat10-1").innerHTML = data[0].thai_language2;
                        document.getElementById("boat1-1").innerHTML = data[1].thai_language2;
                        document.getElementById("boat2-1").innerHTML = data[2].thai_language2;
                        document.getElementById("boat4-1").innerHTML = data[3].thai_language2;
                        document.getElementById("boat5-1").innerHTML = data[3].thai_language2;
                        document.getElementById("boatexth1").innerHTML = data[0].thai_language1;
                        document.getElementById("boatexth2").innerHTML = data[0].thai_language;
                        document.getElementById("boatexth3").innerHTML = data[1].thai_language1;
                        document.getElementById("boatexth4").innerHTML = data[1].thai_language;
                        document.getElementById("boatexth5").innerHTML = data[2].thai_language1;
                        document.getElementById("boatexth6").innerHTML = data[2].thai_language;
                        document.getElementById("boatexth7").innerHTML = data[3].thai_language1;
                        document.getElementById("boatexth8").innerHTML = data[3].thai_language;
                        
                    }
                }
                if (langs === "eng") {
                    if (data[0].round_trip === 'G') {
                        document.getElementById("boat10-1").innerHTML = data[0].eng_language;
                        document.getElementById("boat1-1").innerHTML = data[1].eng_language;
                        document.getElementById("boat2-1").innerHTML = data[2].eng_language;
                        document.getElementById("boat4-1").innerHTML = data[3].eng_language;
                        document.getElementById("boat5-1").innerHTML = data[3].eng_language;
                        document.getElementById("boatexth1").innerHTML = data[0].eng_language1;
                        document.getElementById("boatexth2").innerHTML = data[0].eng_language2;
                        document.getElementById("boatexth3").innerHTML = data[1].eng_language1;
                        document.getElementById("boatexth4").innerHTML = data[1].eng_language2;
                        document.getElementById("boatexth5").innerHTML = data[2].eng_language1;
                        document.getElementById("boatexth6").innerHTML = data[2].eng_language2;
                        document.getElementById("boatexth7").innerHTML = data[3].eng_language1;
                        document.getElementById("boatexth8").innerHTML = data[3].eng_language2;
                        

                    } else {
                        document.getElementById("boat10-1").innerHTML = data[0].eng_language;
                        document.getElementById("boat1-1").innerHTML = data[1].eng_language;
                        document.getElementById("boat2-1").innerHTML = data[2].eng_language;
                        document.getElementById("boat4-1").innerHTML = data[3].eng_language;
                        document.getElementById("boat5-1").innerHTML = data[3].eng_language;
                        document.getElementById("boatexth1").innerHTML = data[0].eng_language2;
                        document.getElementById("boatexth2").innerHTML = data[0].eng_language1;
                        document.getElementById("boatexth3").innerHTML = data[1].eng_language2;
                        document.getElementById("boatexth4").innerHTML = data[1].eng_language1;
                        document.getElementById("boatexth5").innerHTML = data[2].eng_language2;
                        document.getElementById("boatexth6").innerHTML = data[2].eng_language1;
                        document.getElementById("boatexth7").innerHTML = data[3].eng_language2;
                        document.getElementById("boatexth8").innerHTML = data[3].eng_language1;
                       

                    }
                }
                if (langs === "chai") {
                    if (data[0].round_trip === 'G') {
                        document.getElementById("boat10-1").innerHTML = data[0].chinese_language;
                        document.getElementById("boat1-1").innerHTML = data[1].chinese_language;
                        document.getElementById("boat2-1").innerHTML = data[2].chinese_language;
                        document.getElementById("boat4-1").innerHTML = data[3].chinese_language;
                        document.getElementById("boat5-1").innerHTML = data[3].chinese_language;
                        document.getElementById("boatexth1").innerHTML = data[0].chinese_language;
                        document.getElementById("boatexth2").innerHTML = data[0].chinese_language1;
                        document.getElementById("boatexth3").innerHTML = data[1].chinese_language;
                        document.getElementById("boatexth4").innerHTML = data[1].chinese_language1;
                        document.getElementById("boatexth5").innerHTML = data[2].chinese_language;
                        document.getElementById("boatexth6").innerHTML = data[2].chinese_language1;
                        document.getElementById("boatexth7").innerHTML = data[3].chinese_language;
                        document.getElementById("boatexth8").innerHTML = data[3].chinese_language1;
                        

                    } else {
                        document.getElementById("boat10-1").innerHTML = data[0].chinese_language;
                        document.getElementById("boat1-1").innerHTML = data[1].chinese_language;
                        document.getElementById("boat2-1").innerHTML = data[2].chinese_language;
                        document.getElementById("boat4-1").innerHTML = data[3].chinese_language;
                        document.getElementById("boat5-1").innerHTML = data[3].chinese_language;
                        document.getElementById("boatexth1").innerHTML = data[0].chinese_language1;
                        document.getElementById("boatexth2").innerHTML = data[0].chinese_language;
                        document.getElementById("boatexth3").innerHTML = data[1].chinese_language1;
                        document.getElementById("boatexth4").innerHTML = data[1].chinese_language;
                        document.getElementById("boatexth5").innerHTML = data[2].chinese_language1;
                        document.getElementById("boatexth6").innerHTML = data[2].chinese_language;
                        document.getElementById("boatexth7").innerHTML = data[3].chinese_language1;
                        document.getElementById("boatexth8").innerHTML = data[3].chinese_language;
                        

                    }
                }
                
                var time = data[0].destination_time;
                var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time1").innerHTML = formattedTime;
                var time = data[1].destination_time;
                var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time2").innerHTML = formattedTime;
                var time = data[2].destination_time;
                var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time3").innerHTML = formattedTime;
                var time = data[3].destination_time;
                var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time4").innerHTML = formattedTime;
                var time = data[3].destination_time;
                var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time5").innerHTML = formattedTime;


                //------------------------------------------------------------------------------------------------------------------------2-------------------------------------------------------------------------------------------------------
                var date = getFormattedDateTime();
                document.getElementById("boatex_datetimetemp2").innerHTML = date;
                if (langs === "thai") {
                    if (data[0].round_trip === 'G') {
                        document.getElementById("boat10-1temp2").innerHTML = data[0].thai_language2;
                        document.getElementById("boat1-1temp2").innerHTML = data[1].thai_language2;
                        document.getElementById("boat2-1temp2").innerHTML = data[2].thai_language2;
                        document.getElementById("boat4-1temp2").innerHTML = data[3].thai_language2;
                        document.getElementById("boat5-1temp2").innerHTML = data[3].thai_language2;
                        document.getElementById("boatexth1temp2").innerHTML = data[0].thai_language;
                        document.getElementById("boatexth2temp2").innerHTML = data[0].thai_language1;
                        document.getElementById("boatexth3temp2").innerHTML = data[1].thai_language;
                        document.getElementById("boatexth4temp2").innerHTML = data[1].thai_language1;
                        document.getElementById("boatexth5temp2").innerHTML = data[2].thai_language;
                        document.getElementById("boatexth6temp2").innerHTML = data[2].thai_language1;
                        document.getElementById("boatexth7temp2").innerHTML = data[3].thai_language;
                        document.getElementById("boatexth8temp2").innerHTML = data[3].thai_language1;
                        

                    } else {
                        document.getElementById("boat10-1temp2").innerHTML = data[0].thai_language2;
                        document.getElementById("boat1-1temp2").innerHTML = data[1].thai_language2;
                        document.getElementById("boat2-1temp2").innerHTML = data[2].thai_language2;
                        document.getElementById("boat4-1temp2").innerHTML = data[3].thai_language2;
                        document.getElementById("boat5-1temp2").innerHTML = data[3].thai_language2;
                        document.getElementById("boatexth1temp2").innerHTML = data[0].thai_language1;
                        document.getElementById("boatexth2temp2").innerHTML = data[0].thai_language;
                        document.getElementById("boatexth3temp2").innerHTML = data[1].thai_language1;
                        document.getElementById("boatexth4temp2").innerHTML = data[1].thai_language;
                        document.getElementById("boatexth5temp2").innerHTML = data[2].thai_language1;
                        document.getElementById("boatexth6temp2").innerHTML = data[2].thai_language;
                        document.getElementById("boatexth7temp2").innerHTML = data[3].thai_language1;
                        document.getElementById("boatexth8temp2").innerHTML = data[3].thai_language;
                        

                    }
                }
                if (langs === "eng") {
                    if (data[0].round_trip === 'G') {
                        document.getElementById("boat10-1temp2").innerHTML = data[0].eng_language;
                        document.getElementById("boat1-1temp2").innerHTML = data[1].eng_language;
                        document.getElementById("boat2-1temp2").innerHTML = data[2].eng_language;
                        document.getElementById("boat4-1temp2").innerHTML = data[3].eng_language;
                        document.getElementById("boat5-1temp2").innerHTML = data[3].eng_language;
                        document.getElementById("boatexth1temp2").innerHTML = data[0].eng_language1;
                        document.getElementById("boatexth2temp2").innerHTML = data[0].eng_language2;
                        document.getElementById("boatexth3temp2").innerHTML = data[1].eng_language1;
                        document.getElementById("boatexth4temp2").innerHTML = data[1].eng_language2;
                        document.getElementById("boatexth5temp2").innerHTML = data[2].eng_language1;
                        document.getElementById("boatexth6temp2").innerHTML = data[2].eng_language2;
                        document.getElementById("boatexth7temp2").innerHTML = data[3].eng_language1;
                        document.getElementById("boatexth8temp2").innerHTML = data[3].eng_language2;
                        

                    } else {
                        document.getElementById("boat10-1temp2").innerHTML = data[0].eng_language;
                        document.getElementById("boat1-1temp2").innerHTML = data[1].eng_language;
                        document.getElementById("boat2-1temp2").innerHTML = data[2].eng_language;
                        document.getElementById("boat4-1temp2").innerHTML = data[3].eng_language;
                        document.getElementById("boat5-1temp2").innerHTML = data[3].eng_language;
                        document.getElementById("boatexth1temp2").innerHTML = data[0].eng_language2;
                        document.getElementById("boatexth2temp2").innerHTML = data[0].eng_language1;
                        document.getElementById("boatexth3temp2").innerHTML = data[1].eng_language2;
                        document.getElementById("boatexth4temp2").innerHTML = data[1].eng_language1;
                        document.getElementById("boatexth5temp2").innerHTML = data[2].eng_language2;
                        document.getElementById("boatexth6temp2").innerHTML = data[2].eng_language1;
                        document.getElementById("boatexth7temp2").innerHTML = data[3].eng_language2;
                        document.getElementById("boatexth8temp2").innerHTML = data[3].eng_language1;
                        

                    }
                }
                if (langs === "chai") {
                    if (data[0].round_trip === 'G') {
                        document.getElementById("boat10-1temp2").innerHTML = data[0].chinese_language;
                        document.getElementById("boat1-1temp2").innerHTML = data[1].chinese_language;
                        document.getElementById("boat2-1temp2").innerHTML = data[2].chinese_language;
                        document.getElementById("boat4-1temp2").innerHTML = data[3].chinese_language;
                        document.getElementById("boat5-1temp2").innerHTML = data[3].chinese_language;
                        document.getElementById("boatexth1temp2").innerHTML = data[0].chinese_language;
                        document.getElementById("boatexth2temp2").innerHTML = data[0].chinese_language1;
                        document.getElementById("boatexth3temp2").innerHTML = data[1].chinese_language;
                        document.getElementById("boatexth4temp2").innerHTML = data[1].chinese_language1;
                        document.getElementById("boatexth5temp2").innerHTML = data[2].chinese_language;
                        document.getElementById("boatexth6temp2").innerHTML = data[2].chinese_language1;
                        document.getElementById("boatexth7temp2").innerHTML = data[3].chinese_language;
                        document.getElementById("boatexth8temp2").innerHTML = data[3].chinese_language1;
                       

                    } else {
                        document.getElementById("boat10-1temp2").innerHTML = data[0].chinese_language;
                        document.getElementById("boat1-1temp2").innerHTML = data[1].chinese_language;
                        document.getElementById("boat2-1temp2").innerHTML = data[2].chinese_language;
                        document.getElementById("boat4-1temp2").innerHTML = data[3].chinese_language;
                        document.getElementById("boat5-1temp2").innerHTML = data[3].chinese_language;
                        document.getElementById("boatexth1temp2").innerHTML = data[0].chinese_language1;
                        document.getElementById("boatexth2temp2").innerHTML = data[0].chinese_language;
                        document.getElementById("boatexth3temp2").innerHTML = data[1].chinese_language1;
                        document.getElementById("boatexth4temp2").innerHTML = data[1].chinese_language;
                        document.getElementById("boatexth5temp2").innerHTML = data[2].chinese_language1;
                        document.getElementById("boatexth6temp2").innerHTML = data[2].chinese_language;
                        document.getElementById("boatexth7temp2").innerHTML = data[3].chinese_language1;
                        document.getElementById("boatexth8temp2").innerHTML = data[3].chinese_language;
                       

                    }
                }
                var time = data[0].destination_time;
                var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time1temp2").innerHTML = formattedTime;
                var time = data[1].destination_time;
                var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time2temp2").innerHTML = formattedTime;
                var time = data[2].destination_time;
                var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time3temp2").innerHTML = formattedTime;
                var time = data[3].destination_time;
                var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time4temp2").innerHTML = formattedTime;
                var time = data[3].destination_time;
                var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time5temp2").innerHTML = formattedTime;

                //------------------------------------------------------------------------------------------------------------------------3-------------------------------------------------------------------------------------------------------
                var date = getFormattedDateTime();
                document.getElementById("boatex_datetimetemp3").innerHTML = date;
                if (langs === "thai") {
                    if (data[0].round_trip === 'G') {
                        document.getElementById("boat10-1temp3").innerHTML = data[0].thai_language2;
                        document.getElementById("boat1-1temp3").innerHTML = data[1].thai_language2;
                        document.getElementById("boat2-1temp3").innerHTML = data[2].thai_language2;
                        document.getElementById("boat4-1temp3").innerHTML = data[3].thai_language2;
                        document.getElementById("boat5-1temp3").innerHTML = data[3].thai_language2;
                        document.getElementById("boatexth1temp3").innerHTML = data[0].thai_language;
                        document.getElementById("boatexth2temp3").innerHTML = data[0].thai_language1;
                        document.getElementById("boatexth3temp3").innerHTML = data[1].thai_language;
                        document.getElementById("boatexth4temp3").innerHTML = data[1].thai_language1;
                        document.getElementById("boatexth5temp3").innerHTML = data[2].thai_language;
                        document.getElementById("boatexth6temp3").innerHTML = data[2].thai_language1;
                        document.getElementById("boatexth7temp3").innerHTML = data[3].thai_language;
                        document.getElementById("boatexth8temp3").innerHTML = data[3].thai_language1;
                        

                    } else {
                        document.getElementById("boat10-1temp3").innerHTML = data[0].thai_language2;
                        document.getElementById("boat1-1temp3").innerHTML = data[1].thai_language2;
                        document.getElementById("boat2-1temp3").innerHTML = data[2].thai_language2;
                        document.getElementById("boat4-1temp3").innerHTML = data[3].thai_language2;
                        document.getElementById("boat5-1temp3").innerHTML = data[3].thai_language2;
                        document.getElementById("boatexth1temp3").innerHTML = data[0].thai_language1;
                        document.getElementById("boatexth2temp3").innerHTML = data[0].thai_language;
                        document.getElementById("boatexth3temp3").innerHTML = data[1].thai_language1;
                        document.getElementById("boatexth4temp3").innerHTML = data[1].thai_language;
                        document.getElementById("boatexth5temp3").innerHTML = data[2].thai_language1;
                        document.getElementById("boatexth6temp3").innerHTML = data[2].thai_language;
                        document.getElementById("boatexth7temp3").innerHTML = data[3].thai_language1;
                        document.getElementById("boatexth8temp3").innerHTML = data[3].thai_language;
                        

                    }
                }
                if (langs === "eng") {
                    if (data[0].round_trip === 'G') {
                        document.getElementById("boat10-1temp3").innerHTML = data[0].eng_language;
                        document.getElementById("boat1-1temp3").innerHTML = data[1].eng_language;
                        document.getElementById("boat2-1temp3").innerHTML = data[2].eng_language;
                        document.getElementById("boat4-1temp3").innerHTML = data[3].eng_language;
                        document.getElementById("boat5-1temp3").innerHTML = data[3].eng_language;
                        document.getElementById("boatexth1temp3").innerHTML = data[0].eng_language1;
                        document.getElementById("boatexth2temp3").innerHTML = data[0].eng_language2;
                        document.getElementById("boatexth3temp3").innerHTML = data[1].eng_language1;
                        document.getElementById("boatexth4temp3").innerHTML = data[1].eng_language2;
                        document.getElementById("boatexth5temp3").innerHTML = data[2].eng_language1;
                        document.getElementById("boatexth6temp3").innerHTML = data[2].eng_language2;
                        document.getElementById("boatexth7temp3").innerHTML = data[3].eng_language1;
                        document.getElementById("boatexth8temp3").innerHTML = data[3].eng_language2;
                       

                    } else {
                        document.getElementById("boat10-1temp3").innerHTML = data[0].eng_language;
                        document.getElementById("boat1-1temp3").innerHTML = data[1].eng_language;
                        document.getElementById("boat2-1temp3").innerHTML = data[2].eng_language;
                        document.getElementById("boat4-1temp3").innerHTML = data[3].eng_language;
                        document.getElementById("boat5-1temp3").innerHTML = data[3].eng_language;
                        document.getElementById("boatexth1temp3").innerHTML = data[0].eng_language2;
                        document.getElementById("boatexth2temp3").innerHTML = data[0].eng_language1;
                        document.getElementById("boatexth3temp3").innerHTML = data[1].eng_language2;
                        document.getElementById("boatexth4temp3").innerHTML = data[1].eng_language1;
                        document.getElementById("boatexth5temp3").innerHTML = data[2].eng_language2;
                        document.getElementById("boatexth6temp3").innerHTML = data[2].eng_language1;
                        document.getElementById("boatexth7temp3").innerHTML = data[3].eng_language2;
                        document.getElementById("boatexth8temp3").innerHTML = data[3].eng_language1;
                        

                    }
                }
                if (langs === "chai") {
                    if (data[0].round_trip === 'G') {
                        document.getElementById("boat10-1temp3").innerHTML = data[0].chinese_language;
                        document.getElementById("boat1-1temp3").innerHTML = data[1].chinese_language;
                        document.getElementById("boat2-1temp3").innerHTML = data[2].chinese_language;
                        document.getElementById("boat4-1temp3").innerHTML = data[3].chinese_language;
                        document.getElementById("boat5-1temp3").innerHTML = data[3].chinese_language;
                        document.getElementById("boatexth1temp3").innerHTML = data[0].chinese_language;
                        document.getElementById("boatexth2temp3").innerHTML = data[0].chinese_language1;
                        document.getElementById("boatexth3temp3").innerHTML = data[1].chinese_language;
                        document.getElementById("boatexth4temp3").innerHTML = data[1].chinese_language1;
                        document.getElementById("boatexth5temp3").innerHTML = data[2].chinese_language;
                        document.getElementById("boatexth6temp3").innerHTML = data[2].chinese_language1;
                        document.getElementById("boatexth7temp3").innerHTML = data[3].chinese_language;
                        document.getElementById("boatexth8temp3").innerHTML = data[3].chinese_language1;
                        

                    } else {
                        document.getElementById("boat10-1temp3").innerHTML = data[0].chinese_language;
                        document.getElementById("boat1-1temp3").innerHTML = data[1].chinese_language;
                        document.getElementById("boat2-1temp3").innerHTML = data[2].chinese_language;
                        document.getElementById("boat4-1temp3").innerHTML = data[3].chinese_language;
                        document.getElementById("boat5-1temp3").innerHTML = data[3].chinese_language;
                        document.getElementById("boatexth1temp3").innerHTML = data[0].chinese_language1;
                        document.getElementById("boatexth2temp3").innerHTML = data[0].chinese_language;
                        document.getElementById("boatexth3temp3").innerHTML = data[1].chinese_language1;
                        document.getElementById("boatexth4temp3").innerHTML = data[1].chinese_language;
                        document.getElementById("boatexth5temp3").innerHTML = data[2].chinese_language1;
                        document.getElementById("boatexth6temp3").innerHTML = data[2].chinese_language;
                        document.getElementById("boatexth7temp3").innerHTML = data[3].chinese_language1;
                        document.getElementById("boatexth8temp3").innerHTML = data[3].chinese_language;
                        

                    }
                }
                var time = data[0].destination_time;
                var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time1temp3").innerHTML = formattedTime;
                var time = data[1].destination_time;
                var formattedTime = addMinutesToCurrentTime(time); var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time2temp3").innerHTML = formattedTime;
                var time = data[2].destination_time;
                var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time3temp3").innerHTML = formattedTime;
                var time = data[3].destination_time;
                var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time4temp3").innerHTML = formattedTime;
                var time = data[3].destination_time;
                var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time5temp3").innerHTML = formattedTime;

                //------------------------------------------------------------------------------------------------------------------------4-------------------------------------------------------------------------------------------------------
                var date = getFormattedDateTime();
                document.getElementById("boatex_datetimetemp4").innerHTML = date;
                if (langs === "thai") {
                    if (data[0].round_trip === 'G') {
                        document.getElementById("boat10-1temp4").innerHTML = data[0].thai_language2;
                        document.getElementById("boat1-1temp4").innerHTML = data[1].thai_language2;
                        document.getElementById("boat2-1temp4").innerHTML = data[2].thai_language2;
                        document.getElementById("boat4-1temp4").innerHTML = data[3].thai_language2;
                        document.getElementById("boat5-1temp4").innerHTML = data[3].thai_language2;
                        document.getElementById("boatexth1temp4").innerHTML = data[0].thai_language;
                        document.getElementById("boatexth2temp4").innerHTML = data[0].thai_language1;
                        document.getElementById("boatexth3temp4").innerHTML = data[1].thai_language;
                        document.getElementById("boatexth4temp4").innerHTML = data[1].thai_language1;
                        document.getElementById("boatexth5temp4").innerHTML = data[2].thai_language;
                        document.getElementById("boatexth6temp4").innerHTML = data[2].thai_language1;
                        document.getElementById("boatexth7temp4").innerHTML = data[3].thai_language;
                        document.getElementById("boatexth8temp4").innerHTML = data[3].thai_language1;
                        

                    } else {
                        document.getElementById("boat10-1temp4").innerHTML = data[0].thai_language2;
                        document.getElementById("boat1-1temp4").innerHTML = data[1].thai_language2;
                        document.getElementById("boat2-1temp4").innerHTML = data[2].thai_language2;
                        document.getElementById("boat4-1temp4").innerHTML = data[3].thai_language2;
                        document.getElementById("boat5-1temp4").innerHTML = data[3].thai_language2;
                        document.getElementById("boatexth1temp4").innerHTML = data[0].thai_language1;
                        document.getElementById("boatexth2temp4").innerHTML = data[0].thai_language;
                        document.getElementById("boatexth3temp4").innerHTML = data[1].thai_language1;
                        document.getElementById("boatexth4temp4").innerHTML = data[1].thai_language;
                        document.getElementById("boatexth5temp4").innerHTML = data[2].thai_language1;
                        document.getElementById("boatexth6temp4").innerHTML = data[2].thai_language;
                        document.getElementById("boatexth7temp4").innerHTML = data[3].thai_language1;
                        document.getElementById("boatexth8temp4").innerHTML = data[3].thai_language;
                        

                    }
                }
                if (langs === "eng") {
                    if (data[0].round_trip === 'G') {
                        document.getElementById("boat10-1temp4").innerHTML = data[0].eng_language;
                        document.getElementById("boat1-1temp4").innerHTML = data[1].eng_language;
                        document.getElementById("boat2-1temp4").innerHTML = data[2].eng_language;
                        document.getElementById("boat4-1temp4").innerHTML = data[3].eng_language;
                        document.getElementById("boat5-1temp4").innerHTML = data[3].eng_language;
                        document.getElementById("boatexth1temp4").innerHTML = data[0].eng_language1;
                        document.getElementById("boatexth2temp4").innerHTML = data[0].eng_language2;
                        document.getElementById("boatexth3temp4").innerHTML = data[1].eng_language1;
                        document.getElementById("boatexth4temp4").innerHTML = data[1].eng_language2;
                        document.getElementById("boatexth5temp4").innerHTML = data[2].eng_language1;
                        document.getElementById("boatexth6temp4").innerHTML = data[2].eng_language2;
                        document.getElementById("boatexth7temp4").innerHTML = data[3].eng_language1;
                        document.getElementById("boatexth8temp4").innerHTML = data[3].eng_language2;
                        

                    } else {
                        document.getElementById("boat10-1temp4").innerHTML = data[0].eng_language;
                        document.getElementById("boat1-1temp4").innerHTML = data[1].eng_language;
                        document.getElementById("boat2-1temp4").innerHTML = data[2].eng_language;
                        document.getElementById("boat4-1temp4").innerHTML = data[3].eng_language;
                        document.getElementById("boat5-1temp4").innerHTML = data[3].eng_language;
                        document.getElementById("boatexth1temp4").innerHTML = data[0].eng_language2;
                        document.getElementById("boatexth2temp4").innerHTML = data[0].eng_language1;
                        document.getElementById("boatexth3temp4").innerHTML = data[1].eng_language2;
                        document.getElementById("boatexth4temp4").innerHTML = data[1].eng_language1;
                        document.getElementById("boatexth5temp4").innerHTML = data[2].eng_language2;
                        document.getElementById("boatexth6temp4").innerHTML = data[2].eng_language1;
                        document.getElementById("boatexth7temp4").innerHTML = data[3].eng_language2;
                        document.getElementById("boatexth8temp4").innerHTML = data[3].eng_language1;
                        

                    }
                }
                if (langs === "chai") {
                    if (data[0].round_trip === 'G') {
                        document.getElementById("boat10-1temp4").innerHTML = data[0].chinese_language;
                        document.getElementById("boat1-1temp4").innerHTML = data[1].chinese_language;
                        document.getElementById("boat2-1temp4").innerHTML = data[2].chinese_language;
                        document.getElementById("boat4-1temp4").innerHTML = data[3].chinese_language;
                        document.getElementById("boat5-1temp4").innerHTML = data[3].chinese_language;
                        document.getElementById("boatexth1temp4").innerHTML = data[0].chinese_language;
                        document.getElementById("boatexth2temp4").innerHTML = data[0].chinese_language1;
                        document.getElementById("boatexth3temp4").innerHTML = data[1].chinese_language;
                        document.getElementById("boatexth4temp4").innerHTML = data[1].chinese_language1;
                        document.getElementById("boatexth5temp4").innerHTML = data[2].chinese_language;
                        document.getElementById("boatexth6temp4").innerHTML = data[2].chinese_language1;
                        document.getElementById("boatexth7temp4").innerHTML = data[3].chinese_language;
                        document.getElementById("boatexth8temp4").innerHTML = data[3].chinese_language1;
                       

                    } else {
                        document.getElementById("boat10-1temp4").innerHTML = data[0].chinese_language;
                        document.getElementById("boat1-1temp4").innerHTML = data[1].chinese_language;
                        document.getElementById("boat2-1temp4").innerHTML = data[2].chinese_language;
                        document.getElementById("boat4-1temp4").innerHTML = data[3].chinese_language;
                        document.getElementById("boat5-1temp4").innerHTML = data[3].chinese_language;
                        document.getElementById("boatexth1temp4").innerHTML = data[0].chinese_language1;
                        document.getElementById("boatexth2temp4").innerHTML = data[0].chinese_language;
                        document.getElementById("boatexth3temp4").innerHTML = data[1].chinese_language1;
                        document.getElementById("boatexth4temp4").innerHTML = data[1].chinese_language;
                        document.getElementById("boatexth5temp4").innerHTML = data[2].chinese_language1;
                        document.getElementById("boatexth6temp4").innerHTML = data[2].chinese_language;
                        document.getElementById("boatexth7temp4").innerHTML = data[3].chinese_language1;
                        document.getElementById("boatexth8temp4").innerHTML = data[3].chinese_language;
                        

                    }
                }
                var time = data[0].destination_time;
                var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time1temp4").innerHTML = formattedTime;
                var time = data[1].destination_time;
                var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time2temp4").innerHTML = formattedTime;
                var time = data[2].destination_time;
                var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time3temp4").innerHTML = formattedTime;
                var time = data[3].destination_time;
                var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time4temp4").innerHTML = formattedTime;
                var time = data[3].destination_time;
                var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time5temp4").innerHTML = formattedTime;

                //------------------------------------------------------------------------------------------------------------------------5-------------------------------------------------------------------------------------------------------
                var date = getFormattedDateTime();
                document.getElementById("boatex_datetimetemp5").innerHTML = date;
                if (langs === "thai") {
                    if (data[0].round_trip === 'G') {
                        document.getElementById("boat10-1temp5").innerHTML = data[0].thai_language2;
                        document.getElementById("boat1-1temp5").innerHTML = data[1].thai_language2;
                        document.getElementById("boat2-1temp5").innerHTML = data[2].thai_language2;
                        document.getElementById("boat4-1temp5").innerHTML = data[3].thai_language2;
                        document.getElementById("boat5-1temp5").innerHTML = data[3].thai_language2;
                        document.getElementById("boatexth1temp5").innerHTML = data[0].thai_language;
                        document.getElementById("boatexth2temp5").innerHTML = data[0].thai_language1;
                        document.getElementById("boatexth3temp5").innerHTML = data[1].thai_language;
                        document.getElementById("boatexth4temp5").innerHTML = data[1].thai_language1;
                        document.getElementById("boatexth5temp5").innerHTML = data[2].thai_language;
                        document.getElementById("boatexth6temp5").innerHTML = data[2].thai_language1;
                        document.getElementById("boatexth7temp5").innerHTML = data[3].thai_language;
                        document.getElementById("boatexth8temp5").innerHTML = data[3].thai_language1;
                        

                    } else {
                        document.getElementById("boat10-1temp5").innerHTML = data[0].thai_language2;
                        document.getElementById("boat1-1temp5").innerHTML = data[1].thai_language2;
                        document.getElementById("boat2-1temp5").innerHTML = data[2].thai_language2;
                        document.getElementById("boat4-1temp5").innerHTML = data[3].thai_language2;
                        document.getElementById("boatexth1temp5").innerHTML = data[0].thai_language1;
                        document.getElementById("boatexth2temp5").innerHTML = data[0].thai_language;
                        document.getElementById("boatexth3temp5").innerHTML = data[1].thai_language1;
                        document.getElementById("boatexth4temp5").innerHTML = data[1].thai_language;
                        document.getElementById("boatexth5temp5").innerHTML = data[2].thai_language1;
                        document.getElementById("boatexth6temp5").innerHTML = data[2].thai_language;
                        document.getElementById("boatexth7temp5").innerHTML = data[3].thai_language1;
                        document.getElementById("boatexth8temp5").innerHTML = data[3].thai_language;
                        

                    }
                }
                if (langs === "eng") {
                    if (data[0].round_trip === 'G') {
                        document.getElementById("boat10-1temp5").innerHTML = data[0].eng_language;
                        document.getElementById("boat1-1temp5").innerHTML = data[1].eng_language;
                        document.getElementById("boat2-1temp5").innerHTML = data[2].eng_language;
                        document.getElementById("boat4-1temp5").innerHTML = data[3].eng_language;
                        document.getElementById("boat5-1temp5").innerHTML = data[3].eng_language;
                        document.getElementById("boatexth1temp5").innerHTML = data[0].eng_language1;
                        document.getElementById("boatexth2temp5").innerHTML = data[0].eng_language2;
                        document.getElementById("boatexth3temp5").innerHTML = data[1].eng_language1;
                        document.getElementById("boatexth4temp5").innerHTML = data[1].eng_language2;
                        document.getElementById("boatexth5temp5").innerHTML = data[2].eng_language1;
                        document.getElementById("boatexth6temp5").innerHTML = data[2].eng_language2;
                        document.getElementById("boatexth7temp5").innerHTML = data[3].eng_language1;
                        document.getElementById("boatexth8temp5").innerHTML = data[3].eng_language2;
                        

                    } else {
                        document.getElementById("boat10-1temp5").innerHTML = data[0].eng_language;
                        document.getElementById("boat1-1temp5").innerHTML = data[1].eng_language;
                        document.getElementById("boat2-1temp5").innerHTML = data[2].eng_language;
                        document.getElementById("boat4-1temp5").innerHTML = data[3].eng_language;
                        document.getElementById("boat5-1temp5").innerHTML = data[3].eng_language;
                        document.getElementById("boatexth1temp5").innerHTML = data[0].eng_language2;
                        document.getElementById("boatexth2temp5").innerHTML = data[0].eng_language1;
                        document.getElementById("boatexth3temp5").innerHTML = data[1].eng_language2;
                        document.getElementById("boatexth4temp5").innerHTML = data[1].eng_language1;
                        document.getElementById("boatexth5temp5").innerHTML = data[2].eng_language2;
                        document.getElementById("boatexth6temp5").innerHTML = data[2].eng_language1;
                        document.getElementById("boatexth7temp5").innerHTML = data[3].eng_language2;
                        document.getElementById("boatexth8temp5").innerHTML = data[3].eng_language1;
                        

                    }
                }
                if (langs === "chai") {
                    if (data[0].round_trip === 'G') {
                        document.getElementById("boat10-1temp5").innerHTML = data[0].chinese_language;
                        document.getElementById("boat1-1temp5").innerHTML = data[1].chinese_language;
                        document.getElementById("boat2-1temp5").innerHTML = data[2].chinese_language;
                        document.getElementById("boat4-1temp5").innerHTML = data[3].chinese_language;
                        document.getElementById("boat5-1temp5").innerHTML = data[3].chinese_language;
                        document.getElementById("boatexth1temp5").innerHTML = data[0].chinese_language;
                        document.getElementById("boatexth2temp5").innerHTML = data[0].chinese_language1;
                        document.getElementById("boatexth3temp5").innerHTML = data[1].chinese_language;
                        document.getElementById("boatexth4temp5").innerHTML = data[1].chinese_language1;
                        document.getElementById("boatexth5temp5").innerHTML = data[2].chinese_language;
                        document.getElementById("boatexth6temp5").innerHTML = data[2].chinese_language1;
                        document.getElementById("boatexth7temp5").innerHTML = data[3].chinese_language;
                        document.getElementById("boatexth8temp5").innerHTML = data[3].chinese_language1;
                        

                    } else {
                        document.getElementById("boat10-1temp5").innerHTML = data[0].chinese_language;
                        document.getElementById("boat1-1temp5").innerHTML = data[1].chinese_language;
                        document.getElementById("boat2-1temp5").innerHTML = data[2].chinese_language;
                        document.getElementById("boat4-1temp5").innerHTML = data[3].chinese_language;
                        document.getElementById("boat5-1temp5").innerHTML = data[3].chinese_language;
                        document.getElementById("boatexth1temp5").innerHTML = data[0].chinese_language1;
                        document.getElementById("boatexth2temp5").innerHTML = data[0].chinese_language;
                        document.getElementById("boatexth3temp5").innerHTML = data[1].chinese_language1;
                        document.getElementById("boatexth4temp5").innerHTML = data[1].chinese_language;
                        document.getElementById("boatexth5temp5").innerHTML = data[2].chinese_language1;
                        document.getElementById("boatexth6temp5").innerHTML = data[2].chinese_language;
                        document.getElementById("boatexth7temp5").innerHTML = data[3].chinese_language1;
                        document.getElementById("boatexth8temp5").innerHTML = data[3].chinese_language;
                        

                    }
                }
                var time = data[0].destination_time;
                var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time1temp5").innerHTML = formattedTime;
                var time = data[1].destination_time;
                var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time2temp5").innerHTML = formattedTime;
                var time = data[2].destination_time;
                var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time3temp5").innerHTML = formattedTime;
                var time = data[3].destination_time;
                var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time4temp5").innerHTML = formattedTime;
                var time = data[3].destination_time;
                var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time5temp5").innerHTML = formattedTime;

                //------------------------------------------------------------------------------------------------------------------------6-------------------------------------------------------------------------------------------------------
                var date = getFormattedDateTime();
                document.getElementById("boatex_datetimetemp6").innerHTML = date;
                if (langs === "thai") {
                    if (data[0].round_trip === 'G') {
                        document.getElementById("boat10-1temp6").innerHTML = data[0].thai_language2;
                        document.getElementById("boat1-1temp6").innerHTML = data[1].thai_language2;
                        document.getElementById("boat2-1temp6").innerHTML = data[2].thai_language2;
                        document.getElementById("boat4-1temp6").innerHTML = data[3].thai_language2;
                        document.getElementById("boat5-1temp6").innerHTML = data[3].thai_language2;
                        document.getElementById("boatexth1temp6").innerHTML = data[0].thai_language;
                        document.getElementById("boatexth2temp6").innerHTML = data[0].thai_language1;
                        document.getElementById("boatexth3temp6").innerHTML = data[1].thai_language;
                        document.getElementById("boatexth4temp6").innerHTML = data[1].thai_language1;
                        document.getElementById("boatexth5temp6").innerHTML = data[2].thai_language;
                        document.getElementById("boatexth6temp6").innerHTML = data[2].thai_language1;
                        document.getElementById("boatexth7temp6").innerHTML = data[3].thai_language;
                        document.getElementById("boatexth8temp6").innerHTML = data[3].thai_language1;
                        

                    } else {
                        document.getElementById("boat10-1temp6").innerHTML = data[0].thai_language2;
                        document.getElementById("boat1-1temp6").innerHTML = data[1].thai_language2;
                        document.getElementById("boat2-1temp6").innerHTML = data[2].thai_language2;
                        document.getElementById("boat4-1temp6").innerHTML = data[3].thai_language2;
                        document.getElementById("boatexth1temp6").innerHTML = data[0].thai_language1;
                        document.getElementById("boatexth2temp6").innerHTML = data[0].thai_language;
                        document.getElementById("boatexth3temp6").innerHTML = data[1].thai_language1;
                        document.getElementById("boatexth4temp6").innerHTML = data[1].thai_language;
                        document.getElementById("boatexth5temp6").innerHTML = data[2].thai_language1;
                        document.getElementById("boatexth6temp6").innerHTML = data[2].thai_language;
                        document.getElementById("boatexth7temp6").innerHTML = data[3].thai_language1;
                        document.getElementById("boatexth8temp6").innerHTML = data[3].thai_language;
                        

                    }
                }
                if (langs === "eng") {
                    if (data[0].round_trip === 'G') {
                        document.getElementById("boat10-1temp6").innerHTML = data[0].eng_language;
                        document.getElementById("boat1-1temp6").innerHTML = data[1].eng_language;
                        document.getElementById("boat2-1temp6").innerHTML = data[2].eng_language;
                        document.getElementById("boat4-1temp6").innerHTML = data[3].eng_language;
                        document.getElementById("boat5-1temp6").innerHTML = data[3].eng_language;
                        document.getElementById("boatexth1temp6").innerHTML = data[0].eng_language1;
                        document.getElementById("boatexth2temp6").innerHTML = data[0].eng_language2;
                        document.getElementById("boatexth3temp6").innerHTML = data[1].eng_language1;
                        document.getElementById("boatexth4temp6").innerHTML = data[1].eng_language2;
                        document.getElementById("boatexth5temp6").innerHTML = data[2].eng_language1;
                        document.getElementById("boatexth6temp6").innerHTML = data[2].eng_language2;
                        document.getElementById("boatexth7temp6").innerHTML = data[3].eng_language1;
                        document.getElementById("boatexth8temp6").innerHTML = data[3].eng_language2;
                        

                    } else {
                        document.getElementById("boat10-1temp6").innerHTML = data[0].eng_language;
                        document.getElementById("boat1-1temp6").innerHTML = data[1].eng_language;
                        document.getElementById("boat2-1temp6").innerHTML = data[2].eng_language;
                        document.getElementById("boat4-1temp6").innerHTML = data[3].eng_language;
                        document.getElementById("boat5-1temp6").innerHTML = data[3].eng_language;
                        document.getElementById("boatexth1temp6").innerHTML = data[0].eng_language2;
                        document.getElementById("boatexth2temp6").innerHTML = data[0].eng_language1;
                        document.getElementById("boatexth3temp6").innerHTML = data[1].eng_language2;
                        document.getElementById("boatexth4temp6").innerHTML = data[1].eng_language1;
                        document.getElementById("boatexth5temp6").innerHTML = data[2].eng_language2;
                        document.getElementById("boatexth6temp6").innerHTML = data[2].eng_language1;
                        document.getElementById("boatexth7temp6").innerHTML = data[3].eng_language2;
                        document.getElementById("boatexth8temp6").innerHTML = data[3].eng_language1;
                        

                    }
                }
                if (langs === "chai") {
                    if (data[0].round_trip === 'G') {
                        document.getElementById("boat10-1temp6").innerHTML = data[0].chinese_language;
                        document.getElementById("boat1-1temp6").innerHTML = data[1].chinese_language;
                        document.getElementById("boat2-1temp6").innerHTML = data[2].chinese_language;
                        document.getElementById("boat4-1temp6").innerHTML = data[3].chinese_language;
                        document.getElementById("boat5-1temp6").innerHTML = data[3].chinese_language;
                        document.getElementById("boatexth1temp6").innerHTML = data[0].chinese_language;
                        document.getElementById("boatexth2temp6").innerHTML = data[0].chinese_language1;
                        document.getElementById("boatexth3temp6").innerHTML = data[1].chinese_language;
                        document.getElementById("boatexth4temp6").innerHTML = data[1].chinese_language1;
                        document.getElementById("boatexth5temp6").innerHTML = data[2].chinese_language;
                        document.getElementById("boatexth6temp6").innerHTML = data[2].chinese_language1;
                        document.getElementById("boatexth7temp6").innerHTML = data[3].chinese_language;
                        document.getElementById("boatexth8temp6").innerHTML = data[3].chinese_language1;
                        

                    } else {
                        document.getElementById("boat10-1temp6").innerHTML = data[0].chinese_language;
                        document.getElementById("boat1-1temp6").innerHTML = data[1].chinese_language;
                        document.getElementById("boat2-1temp6").innerHTML = data[2].chinese_language;
                        document.getElementById("boat4-1temp6").innerHTML = data[3].chinese_language;
                        document.getElementById("boat5-1temp6").innerHTML = data[3].chinese_language;
                        document.getElementById("boatexth1temp6").innerHTML = data[0].chinese_language1;
                        document.getElementById("boatexth2temp6").innerHTML = data[0].chinese_language;
                        document.getElementById("boatexth3temp6").innerHTML = data[1].chinese_language1;
                        document.getElementById("boatexth4temp6").innerHTML = data[1].chinese_language;
                        document.getElementById("boatexth5temp6").innerHTML = data[2].chinese_language1;
                        document.getElementById("boatexth6temp6").innerHTML = data[2].chinese_language;
                        document.getElementById("boatexth7temp6").innerHTML = data[3].chinese_language1;
                        document.getElementById("boatexth8temp6").innerHTML = data[3].chinese_language;
                        

                    }
                }
                var time = data[0].destination_time;
                var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time1temp6").innerHTML = formattedTime;
                var time = data[1].destination_time;
                var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time2temp6").innerHTML = formattedTime;
                var time = data[2].destination_time;
                var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time3temp6").innerHTML = formattedTime;
                var time = data[3].destination_time;
                var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time4temp6").innerHTML = formattedTime;
                var time = data[3].destination_time;
                var date = new Date(time);
                date.setHours(date.getHours() + 7); // เพิ่ม 7 ชั่วโมง
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var formattedTime = hours.toString() + ':' + minutes.toString().padStart(2, '0');
                document.getElementById("boatex_time5temp6").innerHTML = formattedTime;
            }
            else {

            }
            Timeout1(date);

        },
        error: function (textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}

function addMinutesToCurrentTime(minutes) {
    var now = new Date();

    // Add minutes to current time
    now.setMinutes(now.getMinutes() + minutes);

    // Format the time as HH:mm
    var hours = now.getHours();
    var minutes = now.getMinutes();

    // Add leading zeros if necessary
    /*var hoursStr = hours < 10 ? '0' + hours : hours.toString();*/
    var hoursStr = hours.toString();
    var minutesStr = minutes < 10 ? '0' + minutes : minutes.toString();

    return hoursStr + ':' + minutesStr;
}
