(window["webpackJsonpselect-a11y-playground"]=window["webpackJsonpselect-a11y-playground"]||[]).push([[19],{501:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.messages=r.locale=r.areTranslationsLoaded=void 0;var t,n=a(24),o=a(507),l=(t=o)&&t.__esModule?t:{default:t};(0,n.addLocaleData)(l.default);r.areTranslationsLoaded=!0,r.locale="sv-SE",r.messages={"Terra.ajax.error":"Inneh\xe5llet l\xe4stes inte in.","Terra.form.field.optional":"(valfri)","Terra.form.select.add":'L\xe4gg till "{text}"',"Terra.form.select.ariaLabel":"S\xf6k","Terra.form.select.clearSelect":"Ta bort markering","Terra.form.select.defaultDisplay":"- V\xe4lj -","Terra.form.select.defaultUsageGuidance":"Anv\xe4nd upp- och nedpilarna f\xf6r att navigera mellan alternativen. Tryck p\xe5 Enter f\xf6r att v\xe4klja ett alternativ.","Terra.form.select.dimmed":"Inaktiverad.","Terra.form.select.disabled":"Inaktiverad.","Terra.form.select.listOfTotalOptions":"Lista med {total} alternativ.","Terra.form.select.maxSelectionHelp":"Begr\xe4nsa {text} antal poster.","Terra.form.select.maxSelectionOption":"Max antal poster {text} \xe4r valda","Terra.form.select.menu":"Meny","Terra.form.select.mobileButtonUsageGuidance":"Tryck f\xf6r att navigera till alternativen.","Terra.form.select.mobileUsageGuidance":"Bl\xe4ddra \xe5t h\xf6ger f\xf6r att navigera till alternativen.","Terra.form.select.multiSelectUsageGuidance":"Ange text eller anv\xe4nd upp- och nedpilarna f\xf6r att navigera genom alternativen. Tryck p\xe5 Enter f\xf6r att markera eller avmarkera ett alternativ.","Terra.form.select.noResults":'Inga matchande resultat f\xf6r "{text}"',"Terra.form.select.option":"Alternativ","Terra.form.select.searchUsageGuidance":"Ange text eller anv\xe4nd upp- och nedpilarna f\xf6r att navigera genom alternativen. Tryck p\xe5 Enter f\xf6r att v\xe4lja ett alternativ.","Terra.form.select.selectCleared":"V\xe4lj omarkerat v\xe4rde","Terra.form.select.selected":"Vald.","Terra.form.select.selectedText":"{text} vald.","Terra.form.select.unselected":"Omarkerad.","Terra.form.select.unselectedText":"{text} avmarkerad.","Terra.icon.IconConsultInstructionsForUse.title":"Ikon e-Bruksanvisning"}},507:function(e,r,a){e.exports=function(){"use strict";return[{locale:"sv",pluralRuleFunction:function(e,r){var a=String(e).split("."),t=!a[1],n=Number(a[0])==e,o=n&&a[0].slice(-1),l=n&&a[0].slice(-2);return r?1!=o&&2!=o||11==l||12==l?"other":"one":1==e&&t?"one":"other"},fields:{year:{displayName:"\xe5r",relative:{0:"i \xe5r",1:"n\xe4sta \xe5r","-1":"i fjol"},relativeTime:{future:{one:"om {0} \xe5r",other:"om {0} \xe5r"},past:{one:"f\xf6r {0} \xe5r sedan",other:"f\xf6r {0} \xe5r sedan"}}},"year-short":{displayName:"\xe5r",relative:{0:"i \xe5r",1:"n\xe4sta \xe5r","-1":"i fjol"},relativeTime:{future:{one:"om {0} \xe5r",other:"om {0} \xe5r"},past:{one:"f\xf6r {0} \xe5r sen",other:"f\xf6r {0} \xe5r sen"}}},month:{displayName:"m\xe5nad",relative:{0:"denna m\xe5nad",1:"n\xe4sta m\xe5nad","-1":"f\xf6rra m\xe5naden"},relativeTime:{future:{one:"om {0} m\xe5nad",other:"om {0} m\xe5nader"},past:{one:"f\xf6r {0} m\xe5nad sedan",other:"f\xf6r {0} m\xe5nader sedan"}}},"month-short":{displayName:"m",relative:{0:"denna m\xe5n.",1:"n\xe4sta m\xe5n.","-1":"f\xf6rra m\xe5n."},relativeTime:{future:{one:"om {0} m\xe5n.",other:"om {0} m\xe5n."},past:{one:"f\xf6r {0} m\xe5n. sen",other:"f\xf6r {0} m\xe5n. sen"}}},day:{displayName:"dag",relative:{0:"i dag",1:"i morgon",2:"i \xf6vermorgon","-2":"i f\xf6rrg\xe5r","-1":"i g\xe5r"},relativeTime:{future:{one:"om {0} dag",other:"om {0} dagar"},past:{one:"f\xf6r {0} dag sedan",other:"f\xf6r {0} dagar sedan"}}},"day-short":{displayName:"dag",relative:{0:"i dag",1:"i morgon",2:"i \xf6vermorgon","-2":"i f\xf6rrg\xe5r","-1":"i g\xe5r"},relativeTime:{future:{one:"om {0} d",other:"om {0} d"},past:{one:"f\xf6r {0} d sedan",other:"f\xf6r\xa0{0}\xa0d sedan"}}},hour:{displayName:"timme",relative:{0:"denna timme"},relativeTime:{future:{one:"om {0} timme",other:"om {0} timmar"},past:{one:"f\xf6r {0} timme sedan",other:"f\xf6r {0} timmar sedan"}}},"hour-short":{displayName:"tim",relative:{0:"denna timme"},relativeTime:{future:{one:"om {0} tim",other:"om {0} tim"},past:{one:"f\xf6r {0} tim sedan",other:"f\xf6r {0} tim sedan"}}},minute:{displayName:"minut",relative:{0:"denna minut"},relativeTime:{future:{one:"om {0} minut",other:"om {0} minuter"},past:{one:"f\xf6r {0} minut sedan",other:"f\xf6r {0} minuter sedan"}}},"minute-short":{displayName:"min",relative:{0:"denna minut"},relativeTime:{future:{one:"om\xa0{0} min",other:"om\xa0{0} min"},past:{one:"f\xf6r {0} min sen",other:"f\xf6r {0} min sen"}}},second:{displayName:"sekund",relative:{0:"nu"},relativeTime:{future:{one:"om {0} sekund",other:"om {0} sekunder"},past:{one:"f\xf6r {0} sekund sedan",other:"f\xf6r {0} sekunder sedan"}}},"second-short":{displayName:"sek",relative:{0:"nu"},relativeTime:{future:{one:"om\xa0{0} sek",other:"om {0} sek"},past:{one:"f\xf6r {0} s sen",other:"f\xf6r {0} s sen"}}}}},{locale:"sv-AX",parentLocale:"sv"},{locale:"sv-FI",parentLocale:"sv"}]}()}}]);
//# sourceMappingURL=sv-SE-translations.ae7d7672.chunk.js.map