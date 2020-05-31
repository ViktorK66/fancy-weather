! function(e) {
  var wrapper = document.createElement('div');
  wrapper.id='wrapper';
  wrapper.classList.add('wrapper');
  document.body.append(wrapper);

  var content = document.createElement('div');
  content.id='content';
  content.classList.add('content');
  wrapper.appendChild(content);

  var t = {};

  function a(n) {
    if (t[n]) return t[n].exports;
    var s = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(s.exports, s, s.exports, a), s.l = !0, s.exports;
  }
  a.m = e, a.c = t, a.d = function(e, t, n) {
    a.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    })
  }, a.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, a.t = function(e, t) {
    if (1 & t && (e = a(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (a.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var s in e) a.d(n, s, function(t) {
        return e[t]
      }.bind(null, s));
    return n;
  }, a.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e;
    };
    return a.d(t, "a", t), t;
  }, a.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, a.p = "", a(a.s = 4)
}([function(e) {
  e.exports = JSON.parse('{"EN":"en","RU":"ru","BE":"be"}');
}, function(e) {
  e.exports = JSON.parse('{"January":["Январь","Студзень"],"February":["Февраль","Люты"],"March":["Март","Сакавiк"],"April":["Апрель","Красавiк"],"May":["Май","Май"],"June":["Июнь","Чэрвень"],"July":["Июль","Лiпень"],"August":["Август","Жнiвень"],"September":["Сентябрь","Верасень"],"October":["Октябрь","Кастрычник"],"November":["Ноябрь","Лiстапад"],"December":["Декабрь","Снежань"],"Jan":["Янв","Сту"],"Feb":["Фев","Лют"],"Mar":["Мар","Сак"],"Apr":["Апр","Кра"],"Jun":["Июн","Чэр"],"Jul":["Июл","Лiп"],"Aug":["Авг","Жнi"],"Sep":["Сен","Вер"],"Oct":["Окт","Кас"],"Nov":["Ноя","Лiс"],"Dec":["Дек","Сне"],"Sunday":["Воскресенье","Нядзеля"],"Monday":["Понедельник","Панядзелак"],"Tuesday":["Вторник","Аўторак"],"Wednesday":["Среда","Серада"],"Thursday":["Четверг","Чацвер"],"Friday":["Пятница","Пятніца"],"Saturday":["Суббота","Субота"],"Sun":["Вскр","Няд"],"Mon":["Пнд","Пан"],"Tue":["Втр","Аўт"],"Wed":["Срд","Сер"],"Thu":["Чтв","Чац"],"Fri":["Птн","Пят"],"Sat":["Суб","Суб"],"THUNDERSTORM":["ГРОЗА","НАВАЛЬНІЦА"],"thunderstorm":["гроза","навальніца"],"with":["и","і"],"WITH":["И","І"],"light":["небольшой","невялікі"],"LIGHT":["НЕБОЛЬШОЙ","НЕВЯЛІКІ"],"rain":["дождь","дождж"],"RAIN":["ДОЖДЬ","ДОЖДЖ"],"HEAVY":["СИЛЬНЫЙ","МОЦНЫ"],"heavy":["Сильный","моцны"],"moderate":["умеренный","умераны"],"MODERATE":["УМЕРЕННЫЙ","УМЕРАНЫ"],"intensity":["интенсивный","інтэнсіўны"],"INTENSITY":["ИНТЕНСИВНЫЙ","ІНТЭНСІЎНЫ"],"very":["очень","вельмі"],"VERY":["ОЧЕНЬ","ВЕЛЬМІ"],"extreme":["сильный","вельмі моцны"],"EXTREME":["СИЛЬНЫЙ","ВЕЛЬМІ МОЦНЫ"],"freezing":["холодный","халодны"],"FREEZING":["ХОЛОДНЫЙ","ХАЛОДНЫ"],"shower":["проливной","праліўны"],"SHOWER":["ПРОЛИВНОЙ","ПРАЛІУНЫ"],"ragged":["кратковременный","кароткачасовы"],"RAGGED":["КРАТКОВРЕМЕННЫЙ","КАРОТКАЧАСОВЫ"],"drizzle":["изморозь","шэрань"],"DRIZZLE":["ИЗМОРОЗЬ","ШЭРАНЬ"],"snow":["снег","снег"],"SNOW":["СНЕГ","СНЕГ"],"sleet":["мокрый снег","мокры снег"],"SLEET":["МОКРЫЙ СНЕГ","МОКРЫ СНЕГ"],"and":["и","і"],"AND":["И","І"],"MIST":["НЕБОЛЬШОЙ ТУМАН","НЕВЯЛІКІ ТУМАН"],"mist":["небольшой туман","невялікі туман"],"smoke":["небольшой туман","невялікі туман"],"SMOKE":["НЕБОЛЬШОЙ ТУМАН","НЕВЯЛІКІ ТУМАН"],"haze":["мгла","імгла"],"HAZE":["МГЛА","ІМГЛА"],"sand/":["песок/","пясок/"],"SAND":["ПЕСОК","ПЯСОК"],"SAND/":["ПЕСОК/","ПЯСОК/"],"sand":["песок","пясок"],"dust":["пыль","пыл"],"DUST":["ПЫЛЬ","ПЫЛ"],"whirls":["кружится","круціцца"],"WHIRLS":["КРУЖИТСЯ","КРУЦІЦЦА"],"fog":["туман","туман"],"FOG":["ТУМАН","ТУМАН"],"volcanic":["вулканический","вулканічны"],"VOLCANIC":["ВУЛКАНИЧЕСКИЙ","ВУЛКАНІЧНЫ"],"ash":["пепел","попел"],"ASH":["ПЕПЕЛ","ПОПЕЛ"],"squalls":["шквал","шквал"],"SQUALLS":["ШКВАЛ","ШКВАЛ"],"TORNADO":["ТОРНАДО","ТАРНАДА"],"tornado":["торнадо","тарнада"],"clear":["ясное","яснае"],"CLEAR":["ЯСНОЕ","ЯСНАЕ"],"sky":["небо","неба"],"SKY":["НЕБО","НЕБА"],"clouds":["облачность","воблачнасць"],"CLOUDS":["ОБЛАЧНОСТЬ","ВОБЛАЧНАСЦЬ"],"few":["небольшая","невялікая"],"FEW":["НЕБОЛЬШАЯ","НЕВЯЛІКАЯ"],"scattered":["сильная","моцная"],"SCATTERED":["СИЛЬНАЯ","МОЦНАЯ"],"broken":["переменная","пераменная"],"BROKEN":["ПЕРЕМЕННАЯ","ПЕРАМЕННАЯ"],"overcast":["сплошная","суцэльная"],"OVERCAST":["СПЛОШНАЯ","СУЦЭЛЬНАЯ"],"Feels":["Ощущаемая","Адчуваецца"],"Like":["температура:",":"],"mps":["м/с","м/с"],"Wind":["Ветер","Вецер"],"Humidity":["Влажность","Вільготнасць"],"Latitude":["Широта","Шырата"],"Longitude":["Долгота","Даўгата"],"Январь":["January","Студзень"],"Февраль":["February","Люты"],"Март":["March","Сакавiк"],"Апрель":["April","Красавiк"],"Май":["May","Май"],"Июнь":["June","Чэрвень"],"Июль":["July","Лiпень"],"Август":["August","Жнiвень"],"Сентябрь":["September","Верасень"],"Октябрь":["October","Кастрычник"],"Ноябрь":["November","Лiстапад"],"Декабрь":["December","Снежань"],"Янв":["Jan","Сту"],"Фев":["Feb","Лют"],"Мар":["Mar","Сак"],"Апр":["Apr","Кра"],"Июн":["Jun","Чэр"],"Июл":["Jul","Лiп"],"Авг":["Aug","Жнi"],"Сен":["Sep","Вер"],"Окт":["Oct","Кас"],"Ноя":["Nov","Лiс"],"Дек":["Dec","Сне"],"Воскресенье":["Sunday","Нядзеля"],"Понедельник":["Monday","Панядзелак"],"Вторник":["Tuesday","Аўторак"],"Среда":["Wednesday","Серада"],"Четверг":["Thursday","Чацвер"],"Пятница":["Friday","Пятніца"],"Суббота":["Saturday","Субота"],"Вскр":["Sun","Няд"],"Пнд":["Mon","Пан"],"Втр":["Tue","Аўт"],"Срд":["Wed","Сер"],"Чтв":["Thu","Чац"],"Птн":["Fri","Пят"],"Суб":["Sat","Суб"],"ГРОЗА":["THUNDERSTORM","НАВАЛЬНІЦА"],"гроза":["thunderstorm","навальніца"],"и":["and","і"],"И":["AND","І"],"небольшой":["light","невялікі"],"НЕБОЛЬШОЙ":["LIGHT","НЕВЯЛІКІ"],"дождь":["rain","дождж"],"ДОЖДЬ":["RAIN","ДОЖДЖ"],"СИЛЬНЫЙ":["HEAVY","МОЦНЫ"],"Сильный":["heavy","моцны"],"умеренный":["moderate","умераны"],"УМЕРЕННЫЙ":["MODERATE","УМЕРАНЫ"],"интенсивный":["intensity","інтэнсіўны"],"ИНТЕНСИВНЫЙ":["INTENSITY","ІНТЭНСІЎНЫ"],"очень":["very","вельмі"],"ОЧЕНЬ":["VERY","ВЕЛЬМІ"],"холодный":["freezing","халодны"],"ХОЛОДНЫЙ":["FREEZING","ХАЛОДНЫ"],"проливной":["shower","праліўны"],"ПРОЛИВНОЙ":["SHOWER","ПРАЛІУНЫ"],"кратковременный":["ragged","кароткачасовы"],"КРАТКОВРЕМЕННЫЙ":["RAGGED","КАРОТКАЧАСОВЫ"],"изморозь":["drizzle","шэрань"],"ИЗМОРОЗЬ":["DRIZZLE","ШЭРАНЬ"],"снег":["snow","снег"],"СНЕГ":["SNOW","СНЕГ"],"мокрый":["sleet","мокры"],"МОКРЫЙ":["SLEET","МОКРЫ"],"мгла":["haze","імгла"],"МГЛА":["HAZE","ІМГЛА"],"песок/":["sand/","пясок/"],"ПЕСОК":["SAND","ПЯСОК"],"песок":["sand","пясок"],"ПЕСОК/":["SAND/","ПЯСОК/"],"пыль":["dust","пыл"],"ПЫЛЬ":["DUST","ПЫЛ"],"кружится":["whirls","круціцца"],"КРУЖИТСЯ":["WHIRLS","КРУЦІЦЦА"],"туман":["fog","туман"],"ТУМАН":["FOG","ТУМАН"],"вулканический":["volcanic","вулканічны"],"ВУЛКАНИЧЕСКИЙ":["VOLCANIC","ВУЛКАНІЧНЫ"],"пепел":["ash","попел"],"ПЕПЕЛ":["ASH","ПОПЕЛ"],"шквал":["squalls","шквал"],"ШКВАЛ":["SQUALLS","ШКВАЛ"],"ТОРНАДО":["TORNADO","ТАРНАДА"],"торнадо":["tornado","тарнада"],"ясное":["clear","яснае"],"ЯСНОЕ":["CLEAR","ЯСНАЕ"],"небо":["sky","неба"],"НЕБО":["SKY","НЕБА"],"облачность":["clouds","воблачнасць"],"ОБЛАЧНОСТЬ":["CLOUDS","ВОБЛАЧНАСЦЬ"],"небольшая":["few","невялікая"],"НЕБОЛЬШАЯ":["FEW","НЕВЯЛІКАЯ"],"сильная":["Scattered","моцная"],"СИЛЬНАЯ":["SCATTERED","МОЦНАЯ"],"переменная":["broken","пераменная"],"ПЕРЕМЕННАЯ":["BROKEN","ПЕРАМЕННАЯ"],"сплошная":["overcast","суцэльная"],"СПЛОШНАЯ":["OVERCAST","СУЦЭЛЬНАЯ"],"Ощущаемая":["Feels","Адчуваецца"],"температура:":["Like",":"],"м/с":["mps","м/с"],"Ветер":["Wind","Вецер"],"Влажность":["Humidity","Вільготнасць"],"Широта":["Latitude","Шырата"],"Долгота":["Longitude","Даўгата"],"Студзень":["January",""],"Люты":["February",""],"Сакавiк":["March",""],"Красавiк":["April",""],"Чэрвень":["June",""],"Лiпень":["July",""],"Жнiвень":["August",""],"Верасень":["September",""],"Кастрычник":["October",""],"Лiстапад":["November",""],"Снежань":["December",""],"Сту":["Jan",""],"Лют":["Feb",""],"Сак":["Mar",""],"Кра":["Apr",""],"Чэр":["Jun",""],"Лiп":["Jul",""],"Жнi":["Aug",""],"Вер":["Sep",""],"Кас":["Oct",""],"Лiс":["Nov",""],"Сне":["Dec",""],"Нядзеля":["Sunday",""],"Панядзелак":["Monday",""],"Аўторак":["Tuesday",""],"Серада":["Wednesday",""],"Чацвер":["Thursday",""],"Пятніца":["Friday",""],"Субота":["Saturday",""],"Няд":["Sun",""],"Пан":["Mon",""],"Аўт":["Tue",""],"Сер":["Wed",""],"Чац":["Thu",""],"Пят":["Fri",""],"НАВАЛЬНІЦА":["THUNDERSTORM",""],"навальніца":["thunderstorm",""],"і":["and",""],"І":["AND",""],"невялікі":["light",""],"НЕВЯЛІКІ":["LIGHT",""],"дождж":["rain",""],"ДОЖДЖ":["RAIN",""],"МОЦНЫ":["HEAVY",""],"моцны":["heavy",""],"умераны":["moderate",""],"УМЕРАНЫ":["MODERATE",""],"інтэнсіўны":["intensity",""],"ІНТЭНСІЎНЫ":["INTENSITY",""],"вельмі":["very",""],"ВЕЛЬМІ":["VERY",""],"халодны":["freezing",""],"ХАЛОДНЫ":["FREEZING",""],"праліўны":["shower",""],"ПРАЛІУНЫ":["SHOWER",""],"кароткачасовы":["ragged",""],"КАРОТКАЧАСОВЫ":["RAGGED",""],"шэрань":["drizzle",""],"ШЭРАНЬ":["DRIZZLE",""],"мокры":["sleet",""],"МОКРЫ":["SLEET",""],"імгла":["haze",""],"ІМГЛА":["HAZE",""],"пясок/":["sand/",""],"ПЯСОК":["SAND",""],"пясок":["sand",""],"ПЯСОК/":["SAND/",""],"пыл":["dust",""],"ПЫЛ":["DUST",""],"круціцца":["whirls",""],"КРУЦІЦЦА":["WHIRLS",""],"вулканічны":["volcanic",""],"ВУЛКАНІЧНЫ":["VOLCANIC",""],"попел":["ash",""],"ПОПЕЛ":["ASH",""],"ТАРНАДА":["TORNADO",""],"тарнада":["tornado",""],"яснае":["clear",""],"ЯСНАЕ":["CLEAR",""],"неба":["sky",""],"НЕБА":["SKY",""],"воблачнасць":["clouds",""],"ВОБЛАЧНАСЦЬ":["CLOUDS",""],"невялікая":["few",""],"НЕВЯЛІКАЯ":["FEW",""],"моцная":["Scattered",""],"МОЦНАЯ":["SCATTERED",""],"пераменная":["broken",""],"ПЕРАМЕННАЯ":["BROKEN",""],"суцэльная":["overcast",""],"СУЦЭЛЬНАЯ":["OVERCAST",""],"Адчуваецца":["Feels",""],":":["Like",""],"Вецер":["Wind",""],"Вільготнасць":["Humidity",""],"Шырата":["Latitude",""],"Даўгата":["Longitude",""]}')
}, function(e) {
  e.exports = JSON.parse('{"01d":"src/images/weatherIcons/32.png","01n":"src/images/weatherIcons/31.png","02d":"src/images/weatherIcons/34.png","02n":"src/images/weatherIcons/33.png","03d":"src/images/weatherIcons/28.png","03n":"src/images/weatherIcons/27.png","04d":"src/images/weatherIcons/26.png","04n":"src/images/weatherIcons/26.png","09d":"src/images/weatherIcons/40.png","09n":"src/images/weatherIcons/40.png","10d":"src/images/weatherIcons/39.png","10n":"src/images/weatherIcons/45.png","11d":"src/images/weatherIcons/35.png","11n":"src/images/weatherIcons/35.png","13d":"src/images/weatherIcons/14.png","13n":"src/images/weatherIcons/14.png","50d":"src/images/weatherIcons/24.png","50n":"src/images/weatherIcons/24.png"}')
}, function(e) {
  e.exports = JSON.parse('{"winterNightClear":["src/images/backgrounds/winter-night-clear-1.jpg","src/images/backgrounds/winter-night-clear-3.jpg"],"winterDayClear":["src/images/backgrounds/winter-day-clear-1.jpg","src/images/backgrounds/winter-day-clear-2.jpg","src/images/backgrounds/winter-day-clear-3.jpg"],"winterDayRain":["src/images/backgrounds/winter-day-rain-1.jpg","src/images/backgrounds/winter-day-rain-2.jpg","src/images/backgrounds/winter-day-rain-3.jpg"],"winterNightRain":["src/images/backgrounds/winter-night-rain-1.jpg","src/images/backgrounds/winter-night-rain-2.jpg","src/images/backgrounds/winter-night-rain-3.jpg"],"winterDaySnow":["src/images/backgrounds/winter-day-snow-1.jpg","src/images/backgrounds/winter-day-snow-2.jpg","src/images/backgrounds/winter-day-snow-3.jpg"],"winterNightSnow":["src/images/backgrounds/winter-night-snow-1.jpg","src/images/backgrounds/winter-night-snow-2.jpg","src/images/backgrounds/winter-night-snow-3.jpg"],"winterDayClouds":["src/images/backgrounds/winter-day-clouds-1.jpg","src/images/backgrounds/winter-day-clouds-2.jpg","src/images/backgrounds/winter-day-clouds-3.jpg"],"winterNightClouds":["src/images/backgrounds/winter-night-clouds-1.jpg","src/images/backgrounds/winter-night-clouds-2.jpg","src/images/backgrounds/winter-night-clouds-3.jpg"],"winterDayFog":["src/images/backgrounds/winter-day-fog-1.jpg","src/images/backgrounds/winter-day-fog-2.jpg","src/images/backgrounds/winter-day-fog-3.jpg"],"winterNightFog":["src/images/backgrounds/winter-night-fog-1.jpg","src/images/backgrounds/winter-night-fog-2.jpg","src/images/backgrounds/winter-night-fog-3.jpg"],"summerNightClear":["src/images/backgrounds/summer-night-clear-1.jpeg","src/images/backgrounds/summer-night-clear-2.jpg","src/images/backgrounds/summer-night-clear-3.jpg"],"summerDayClear":["src/images/backgrounds/summer-day-clear-1.jpg","src/images/backgrounds/summer-day-clear-2.jpg","src/images/backgrounds/summer-day-clear-3.jpg"],"summerDayRain":["src/images/backgrounds/summer-day-rain-1.jpg","src/images/backgrounds/summer-day-rain-2.jpg","src/images/backgrounds/summer-day-rain-3.jpg"],"summerNightRain":["src/images/backgrounds/summer-night-rain-1.jpg","src/images/backgrounds/summer-night-rain-2.jpg","src/images/backgrounds/summer-night-rain-3.jpg"],"summerDaySnow":["src/images/backgrounds/winter-day-snow-1.jpg","src/images/backgrounds/winter-day-snow-2.jpg","src/images/backgrounds/winter-day-snow-3.jpg"],"summerNightSnow":["src/images/backgrounds/winter-night-snow-1.jpg","src/images/backgrounds/winter-night-snow-2.jpg","src/images/backgrounds/winter-night-snow-3.jpg"],"summerDayClouds":["src/images/backgrounds/summer-day-clouds-1.jpg","src/images/backgrounds/summer-day-clouds-2.jpg","src/images/backgrounds/summer-day-clouds-3.jpg"],"summerNightClouds":["src/images/backgrounds/summer-night-clouds-1.jpg","src/images/backgrounds/summer-night-clouds-2.jpg","src/images/backgrounds/summer-night-clouds-3.jpg"],"summerDayFog":["src/images/backgrounds/summer-day-fog-1.jpg","src/images/backgrounds/summer-day-fog-2.jpg","src/images/backgrounds/summer-day-fog-3.jpg"],"summerNightFog":["src/images/backgrounds/summer-night-clear-1.jpeg","src/images/backgrounds/summer-night-clear-2.jpg","src/images/backgrounds/summer-night-clear-3.jpg"]}')
}, function(e, t, a) {
  "use strict";
  a.r(t);
  a(5), a(9), a(11);
  var n = a(1),
    s = a(0);

  function i(e) {
    let t = e;
    if (localStorage.getItem("lang") || localStorage.setItem("lang", s.EN), "true" === localStorage.getItem("weatherFlag")) {
      const a = e.split(" ");
      a.forEach((e, t) => {
        let i = e,
          r = !1;
        switch ("," === i[i.length - 1] && (i = i.substr(0, i.length - 1), r = !0), localStorage.getItem("lang")) {
          case s.RU:
            if (n[i]) {
              i = n[i][0];
            }
            break;
          case s.BE:
            if (n[i]) {
              i = n[i][1];
            }
            break;
          case s.EN:
            if (n[i]) {
              i = n[i][0];
            }
        }
        r && (i += ","), a[t] = i
      }), t = a.join(" ");
    }
    if (localStorage.getItem("lang") !== s.EN && "false" === localStorage.getItem("weatherFlag")) {
      const a = e.split(" ");
      a.forEach((e, t) => {
        let i = e,
          r = !1;
        switch ("," === i[i.length - 1] && (i = i.substr(0, i.length - 1), r = !0), localStorage.getItem("lang")) {
          case s.RU:
            if (n[i]) {
              i = n[i][0];
            }
            break;
          case s.BE:
            if (n[i]) {
              i = n[i][1];
            }
        }
        r && (i += ","), a[t] = i
      }), t = a.join(" ");
    }
    return t
  }

  class r {
    constructor() {
      this.elem = document.createElement("div"), this.elemTempr = document.createElement("div"), this.elemTemprValue = document.createElement("p"), this.elemTemprWrapper = document.createElement("div"), this.elemTemprUnit = document.createElement("p"), this.elemTemprIcon = document.createElement("img"), this.elemIconWeather = document.createElement("img"), this.elemWeathStateWrap = document.createElement("div"), this.elemStatus = document.createElement("p"), this.elemApparentTempr = document.createElement("p"), this.elemStateWrapper = document.createElement("div"), this.elemWindName = document.createElement("p"), this.elemWindSpeed = document.createElement("p"), this.elemHumName = document.createElement("p"), this.elemHumidity = document.createElement("p"), this.elemWidthName = document.createElement("p"), this.elemWidth = document.createElement("p"), this.elemHeightName = document.createElement("p"), this.elemHeight = document.createElement("p"), this.elemTime = document.createElement("p"), this.elem.classList.add("today"), this.elemTempr.classList.add("today__tempr"), this.elemTemprValue.classList.add("today__tempr_value"), this.elemTemprWrapper.classList.add("today__tempr_wrapper"), this.elemTemprUnit.classList.add("unit"), this.elemStatus.classList.add("today__status"), this.elemApparentTempr.classList.add("today__apparent"), this.elemTemprIcon.classList.add("today__icon"), this.elemIconWeather.classList.add("today__weather-icon"), this.elemStateWrapper.classList.add("today__state"), this.elemWindName.classList.add("today__state_name"), this.elemWindSpeed.classList.add("today__state_value"), this.elemHumName.classList.add("today__state_name"), this.elemHumidity.classList.add("today__state_value"), this.elemWidthName.classList.add("today__state_name"), this.elemWidth.classList.add("today__state_value"), this.elemHeightName.classList.add("today__state_name"), this.elemHeight.classList.add("today__state_value"), this.elemTime.classList.add("today__time"), this.elemWindName.textContent = "Wind", this.elemHumName.textContent = "Humidity", this.elemWidthName.textContent = "Latitude", this.elemHeightName.textContent = "Longitude"
    }
    appendComponent(e) {
      e.appendChild(this.elem), this.elem.appendChild(this.elemTempr), this.elemTempr.appendChild(this.elemTemprValue), this.elemTempr.appendChild(this.elemTemprWrapper), this.elemTemprWrapper.appendChild(this.elemTemprUnit), this.elemTemprWrapper.appendChild(this.elemTemprIcon), this.elemTempr.appendChild(this.elemIconWeather), this.elem.appendChild(this.elemWeathStateWrap), this.elemWeathStateWrap.appendChild(this.elemStatus), this.elemWeathStateWrap.appendChild(this.elemApparentTempr), this.elem.appendChild(this.elemStateWrapper), this.elemStateWrapper.appendChild(this.elemWindName), this.elemStateWrapper.appendChild(this.elemHumName), this.elemStateWrapper.appendChild(this.elemWindSpeed), this.elemStateWrapper.appendChild(this.elemHumidity), this.elemStateWrapper.appendChild(this.elemWidthName), this.elemStateWrapper.appendChild(this.elemHeightName), this.elemStateWrapper.appendChild(this.elemWidth), this.elemStateWrapper.appendChild(this.elemHeight), this.elem.appendChild(this.elemTime)
    }
    setData(e, t, a, n, s, i, r) {
      this.elemTemprValue.textContent = e, this.elemTemprUnit.textContent = t, this.elemIconWeather.src = a, this.elemStatus.textContent = n, this.elemApparentTempr.textContent = s, this.elemWindSpeed.textContent = i, this.elemHumidity.textContent = r,
        function(e, t, a) {
          const n = a;
          "°C" === t ? (e > 10 && (n.src = "src/images/high-temp.png"), e <= 10 && e > 0 && (n.src = "src/images/middle-temp.png"), e <= 0 && (n.src = "src/images/low-temp.png")) : (e > 50 && (n.src = "src/images/high-temp.png"), e <= 50 && e > 32 && (n.src = "src/images/middle-temp.png"), e <= 32 && (n.src = "src/images/low-temp.png")), n.src
        }(e, t, this.elemTemprIcon)
    }
    setGeographicData(e, t) {
      this.elemWidth.textContent = e, this.elemHeight.textContent = t;
    }
    setTime(e) {
      this.elemTime.textContent = e;
    }
    changeTemp(e, t, a) {
      this.elemTemprValue.textContent = e, this.elemTemprUnit.textContent = a, "en" === localStorage.getItem("lang") ? this.elemApparentTempr.textContent = t : this.elemApparentTempr.textContent = i(t);
    }
    changeLanguage() {
      this.val = this.elemStatus.textContent, this.elemStatus.textContent = i(this.val), this.val = this.elemApparentTempr.textContent, this.elemApparentTempr.textContent = i(this.val), this.val = this.elemWindName.textContent, this.elemWindName.textContent = i(this.val), this.val = this.elemHumName.textContent, this.elemHumName.textContent = i(this.val), this.val = this.elemWindSpeed.textContent, this.elemWindSpeed.textContent = i(this.val), this.val = this.elemWidthName.textContent, this.elemWidthName.textContent = i(this.val), this.val = this.elemHeightName.textContent, this.elemHeightName.textContent = i(this.val);
    }
    setStaticInfo() {
      this.elemWindName.textContent = "Wind", this.elemHumName.textContent = "Humidity", this.elemWidthName.textContent = "Latitude", this.elemHeightName.textContent = "Longitude";
    }
  }
  a(13);
  class o {
    constructor() {
      this.elem = document.createElement("div"), this.elemTitle = document.createElement("h2"), this.elemIcon = document.createElement("img"), this.elemTempr = document.createElement("p"), this.elemState = document.createElement("p"), this.elemHumadity = document.createElement("div"), this.elemHumadityIcon = document.createElement("img"), this.elemHumadityValue = document.createElement("p"), this.elem.classList.add("nextday"), this.elemTitle.classList.add("nextday__title"), this.elemIcon.classList.add("nextday__icon"), this.elemTempr.classList.add("nextday__temperature"), this.elemState.classList.add("nextday__state"), this.elemHumadity.classList.add("nextday__humadity"), this.elemHumadityIcon.classList.add("nextday__humadity_icon"), this.elemHumadityValue.classList.add("nextday__humadity_value"), this.elemHumadityIcon.src = "src/images/drop.png", this.elemHumadityIcon.alt = "drop", this.elemIcon.alt = "weather";
    }
    appendComponent(e) {
      e.appendChild(this.elem), this.elem.appendChild(this.elemTitle), this.elem.appendChild(this.elemIcon), this.elem.appendChild(this.elemTempr), this.elem.appendChild(this.elemState), this.elem.appendChild(this.elemHumadity), this.elemHumadity.appendChild(this.elemHumadityIcon), this.elemHumadity.appendChild(this.elemHumadityValue);
    }
    setData(e, t, a, n, s) {
      this.elemTitle.textContent = e, this.elemTempr.textContent = t, this.elemState.textContent = a, this.elemHumadityValue.textContent = s, this.elemIcon.src = n;
    }
    changeTemp(e) {
      this.elemTempr.textContent = e;
    }
    changeLanguage() {
      this.val = this.elemTitle.textContent, this.elemTitle.textContent = i(this.val), this.val = this.elemState.textContent, this.elemState.textContent = i(this.val);
    }
  }
  var c = a(2),
    l = a(3);

  function m() {
    localStorage.getItem("imgCount") || localStorage.setItem("imgCount", 0);
    let e = +localStorage.getItem("imgCount");
    const t = JSON.parse(localStorage.getItem("imgWeather")),
      a = document.querySelector(".wrapper"),
      n = `${t.season}${t.dayTime}${t.weather}`,
      s = l[n];
    a.style.backgroundImage = `url(${s[e]})`, e += 1, e > 2 && (e = 0), localStorage.setItem("imgCount", e);
  }

  function h(e) {
    const t = {};
    let a = "";
    const n = e.dt_txt.substring(5, 7);
    switch (t.season = "12" === n || "01" === n || "02" === n ? "winter" : "summer", t.dayTime = "n" === e.sys.pod ? "Night" : "Day", a = e.weather[0].main, a) {
      case "Rain":
      case "Thunderstorm":
        a = "Rain";
        break;
      case "Clear":
        a = "Clear";
        break;
      case "Drizzle":
      case "Snow":
        a = "Snow";
        break;
      case "Clouds":
        a = "Clouds";
        break;
      default:
        a = "Fog";
    }
    return t.weather = a, localStorage.setItem("imgWeather", JSON.stringify(t)), t;
  }

  function d(e) {
    const t = new Date(e),
      a = Date.parse(t) + 864e5,
      n = Date.parse(t) + 1728e5,
      s = Date.parse(t) + 2592e5,
      i = Date.parse(t) + 3456e5,
      r = Date.parse(t) + 432e6,
      o = new Date(a),
      c = new Date(n),
      l = new Date(s),
      m = new Date(i),
      h = new Date(r),
      d = {
        month: "short",
        weekday: "long",
        day: "numeric"
      },
      u = {
        day: "numeric"
      };

    function g(e) {
      return 1 === e.length ? `0${e}` : e;
    }
    return {
      time: t,
      now: t.toLocaleString("en", {
        month: "long",
        weekday: "short",
        day: "numeric"
      }),
      day: [o.toLocaleString("en", d), c.toLocaleString("en", d), l.toLocaleString("en", d), m.toLocaleString("en", d), h.toLocaleString("en", d)],
      tomNumber: g(o.toLocaleString("en", u)),
      dayAftNumber: g(c.toLocaleString("en", u)),
      twoAftNumber: g(l.toLocaleString("en", u)),
      threeAftNumber: g(m.toLocaleString("en", u)),
      fourAftNumber: g(h.toLocaleString("en", u))
    }
  }
  a(15);
  class u {
    constructor() {
      this.elem = document.createElement("div"), this.elemTownName = document.createElement("h3"), this.elemForecastFrom = document.createElement("h1"), this.elem.classList.add("town"), this.elemTownName.classList.add("town__name"), this.elemForecastFrom.classList.add("town__from"), this.elemForecastFrom.textContent = "OPEN WEATHER MAP";
    }
    appendComponent(e) {
      e.appendChild(this.elem), this.elem.appendChild(this.elemTownName), this.elem.appendChild(this.elemForecastFrom);
    }
    setDate(e) {
      this.elemForecastFrom.textContent = e;
    }
    changeLanguage() {
      switch (localStorage.getItem("lang")) {
        case "en":
          this.elemTownName.textContent = n.en;
          break;
        case "ru":
          this.elemTownName.textContent = n.ru;
          break;
        case "be":
          this.elemTownName.textContent = n.be;
      }
      this.val = this.elemForecastFrom.textContent, this.elemForecastFrom.textContent = i(this.val);
    }
  }
  a(17);

  function g(e) {
    return Math.round(e.reduce((t, a) => t + a / e.length, 0));
  }

  function p(e) {
    const t = Array.from(e);
    return t.forEach((e, a) => {
      const n = 9 * t[a];
      t[a] = Math.round(n / 5 + 32)
    }), t;
  }

  function y(e, t, a, n) {
    const s = e;
    t.push(a.main.temp), 5 === t.length && (s.icon[n] = a.weather[0].icon, s.state[n] = a.weather[0].description, s.hum[n] = a.main.humidity);
  }

  function w(e) {
    const t = {
        tempC: {
          D: [],
          N: []
        },
        tempF: {},
        icon: [],
        state: [],
        hum: []
      },
      a = [],
      n = [],
      s = [],
      i = [],
      r = [],
      {
        temp: o
      } = e[0].main,
      c = e[0].wind.speed,
      {
        humidity: l
      } = e[0].main;
    let m = 0,
      h = 0,
      u = 0;
    const w = d(+localStorage.getItem("currentDate"));
    if (e.forEach(e => {
        switch (e.dt_txt.substring(8, 10)) {
          case w.tomNumber:
            y(t, a, e, 0);
            break;
          case w.dayAftNumber:
            y(t, n, e, 1);
            break;
          case w.twoAftNumber:
            y(t, s, e, 2);
            break;
          case w.threeAftNumber:
            y(t, i, e, 3);
            break;
          case w.fourAftNumber:
            y(t, r, e, 4);
        }
      }), !r[4]) {
      const e = t.icon[3];
      t.icon[4] = e;
      const a = t.state[3];
      t.state[4] = a;
      const n = t.hum[3];
      t.hum[4] = n
    }
    const b = a.splice(3, 4),
      f = n.splice(3, 4),
      S = s.splice(3, 4),
      C = i.splice(3, 4);
    return t.tempC.D[0] = g(b), t.tempC.D[1] = g(f), t.tempC.D[2] = g(S), t.tempC.D[3] = g(C), t.tempC.N[0] = g(a), t.tempC.N[1] = g(n), t.tempC.N[2] = g(s), t.tempC.N[3] = g(i), t.tempC.N[4] = r[0] ? Math.round(r[0]) : t.tempC.N[3], t.tempC.D[4] = r[4] ? Math.round(r[4]) : t.tempC.D[3], t.tempF.D = p(t.tempC.D), t.tempF.N = p(t.tempC.N), t.tempC.now = Math.round(o), t.tempF.now = p([t.tempC.now]), t.nowIcon = e[0].weather[0].icon, t.nowState = e[0].weather[0].description, t.nowWind = e[0].wind.speed, t.nowHumidity = e[0].main.humidity, m = 1 / (1.76 + 1.4 * c ** .75), h = .29 * o * (1 - l / 100), u = .68 - .0014 * l + m, t.nowFeelLike = Math.round(37 - (37 - o) / u - h), t.nowFeelLikeF = p([t.nowFeelLike]), t;
  }
  async function b(e) {
    let t = 0;
    return t = await fetch(e), 404 === t.status && (t = ""), await t.json();
  }

  function f(e) {
    let t = 0;
    return localStorage.getItem("temp") || (localStorage.setItem("temp", "C"), t = e.tempC), "C" === localStorage.getItem("temp") && (t = e.tempC), "F" === localStorage.getItem("temp") && (t = e.tempF), t;
  }

  function S(e) {
    const t = `https://api.opencagedata.com/geocode/v1/json?q=${e}&key=0c85df0749e640a9954ef097fcd98ead&language=ru&`,
      a = `https://api.opencagedata.com/geocode/v1/json?q=${e}&key=0c85df0749e640a9954ef097fcd98ead&language=be&`,
      i = `https://api.opencagedata.com/geocode/v1/json?q=${e}&key=0c85df0749e640a9954ef097fcd98ead&language=en&`;

    function r(e, t) {
      const a = e.results[0].components.city || e.results[0].components.state,
        {
          country: s
        } = e.results[0].components;
      return n[t] = `${a}, ${s}`, n[t];
    }
    return Promise.all([b(a).then(e => {
      r(e, s.BE);
    }), b(t).then(e => {
      r(e, s.RU);
    }), b(i).then(e => {
      r(e, s.EN);
    })]).catch(() => {});
  }

  function C(e, t) {
    const a = Array.from(t.results).map(e => e[0]).map(e => e.transcript).join("");
    e.push(a);
  }

  function L(e, t, a, n, s) {
    const i = a,
      r = n;
    void 0 === t[t.length - 1] ? i.value = "Country is not recognized" : (i.value = t[t.length - 1], s()), e.removeEventListener("result", C), e.removeEventListener("end", L), r.style.animation = "none", r.disabled = !1;
  }

  function I(e) {
    return e < 10 ? `0${e}` : e;
  }
  var E = {
    getCorrectDate: I,
    getForecast: function(e) {
      let t = 0;
      const a = e;
      return a.list.forEach((e, n) => {
        const s = new Date(+localStorage.getItem("currentDate") + t),
          i = 3 * Math.floor(s.getHours() / 3),
          r = `${s.getFullYear()}-${I(s.getMonth()+1)}-${I(s.getDate())} ${I(i)}:00:00`;
        a.list[n].dt_txt = r, t += 108e5
      }), a;
    }
  };
  let D = !1, T = !1;

  function N(e, t, a) {
    if (!e.value) return void alert("please, enter a city name");
    const n = `https://api.openweathermap.org/data/2.5/forecast?q=${e.value}&units=metric&APPID=59c4e48a6412cf32f060b008ceb454c3`,
      s = `https://api.opencagedata.com/geocode/v1/json?q=${e.value}&key=0c85df0749e640a9954ef097fcd98ead&language=en`;
      a.todayStatic(), localStorage.setItem("weatherFlag", !1), S(e.value),
      function(e, t) {
        if ("false" === localStorage.getItem("return")) {
          localStorage.setItem("return", !0);
          const e = t;
          e.style.visibility = "visible", e.style.opacity = "1";
        }
        if (e.value === localStorage.getItem("localCity")) {
          const e = t;
          e.style.visibility = "hidden", e.style.opacity = "0", localStorage.setItem("return", !1);
        }
      }(e, t), b(s).then(t => {
        e.classList.remove("red");
        const s = [t.results[0].geometry.lat, t.results[0].geometry.lng],
          i = t.results[0].annotations.DMS.lat.match(/.+?\s+.+?\s/),
          r = t.results[0].annotations.DMS.lng.match(/.+?\s+.+?\s/);
          localStorage.setItem("newDeltaDate", t.results[0].annotations.timezone.offset_sec), a.changeMapCoord(s), a.setDigitCoorgd(i, r),
          function() {
            const e = +localStorage.getItem("currentDate"),
              t = 1e3 * +localStorage.getItem("deltaDate"),
              a = 1e3 * +localStorage.getItem("newDeltaDate"),
              n = e - t + a;
            localStorage.setItem("currentDate", n), localStorage.setItem("deltaDate", a / 1e3);
          }(), a.townLang(), b(n).then(e => {
            E.getForecast(e);
            const t = w(e.list),
              n = f(t).now,
              s = `°${localStorage.getItem("temp")}`,
              i = c[t.nowIcon],
              r = `Feels Like ${t.nowFeelLike}°`,
              o = `${t.nowWind} mps`,
              l = `${t.nowHumidity}%`;
            a.todayMethod(n, s, i, t.nowState, r, o, l), a.todayLang();
            const u = d(+localStorage.getItem("currentDate"));
            a.setDate(u.now), a.townLang(), a.nextDayMethod.forEach((e, n) => {
              const s = u.day[n],
                i = `${f(t).D[n]}° / ${f(t).N[n]}°`,
                r = t.state[n],
                o = c[t.icon[n]],
                l = `${t.hum[n]}%`;
              a.nextDayMethod[n](s, i, r, o, l), a.nextDayLang[n]();
            }), localStorage.setItem("weather", JSON.stringify(t)), localStorage.setItem("weatherFlag", !0), h(e.list[0]), m();
          }).catch(() => {
            e.classList.add("red");
          })
      }).catch(() => {
        e.classList.add("red");
      })
  }

  function v(e) {
    const t = e;
    return t.style.opacity = "0", setTimeout(() => {
      t.style.visibility = "hidden";
    }, 500), T = !1, t;
  }
  var k = {
    search: function(e, t, a, n, s) {
      if (s instanceof MouseEvent) {
        const s = e,
          i = t,
          r = a;
        D ? N(e, a, n) : ("true" === localStorage.getItem("return") && (r.style.visibility = "visible", r.style.opacity = "1"), s.style.visibility = "visible", s.style.opacity = "1", i.style.visibility = "visible", i.style.opacity = "1", D = !0);
      };
      if (s instanceof KeyboardEvent) {
        if ("Enter" !== s.code) return;
        N(e, a, n);
      };
    },
    setDefault: function(e, t, a, n, s, i, r) {
      const o = e,
        c = t,
        l = s;
      r.target !== a && r.target !== t && r.target !== s && r.target !== e && r.target !== i && r.target !== n && (o.classList.remove("red"), o.style.opacity = "0", c.style.opacity = "0", l.style.opacity = "0", setTimeout(() => {
        o.value = "", o.style.visibility = "hidden", c.style.visibility = "hidden", l.style.visibility = "hidden";
      }, 500), T && v(i), D = !1);
    },
    degree: function(e, t) {
      const a = JSON.parse(localStorage.getItem("weather")),
        n = e;
      if ("C" === localStorage.getItem("temp")) {
        n.textContent = "°F", localStorage.setItem("temp", "F");
        const e = `Feels Like ${a.nowFeelLikeF}°`;
        t.tempMethod(f(a).now, e, "°F"), t.tempMethod1.forEach((e, n) => {
          const s = `${f(a).D[n]}° / ${f(a).N[n]}°`;
          t.tempMethod1[n](s);
        });
      } else {
        n.textContent = "°C", localStorage.setItem("temp", "C");
        const e = `Feels Like ${a.nowFeelLike}°`;
        t.tempMethod(f(a).now, e, "°C"), t.tempMethod1.forEach((e, n) => {
          const s = `${f(a).D[n]}° / ${f(a).N[n]}°`;
          t.tempMethod1[n](s);
        });
      }
    },
    showMap: function(e) {
      const t = e;
      return T ? v(e) : (t.style.visibility = "visible", t.style.opacity = "1", T = !0), t;
    },
    changeBackground: function() {
      m();
    },
    translate: function(e, t) {
      const a = e;

      function n(e) {
        localStorage.setItem("lang", e), t.townLang(), t.todayLang(), t.nextDayLang.forEach((e, a) => {
          t.nextDayLang[a]();
        }), a.textContent = e;
      };
      switch (localStorage.getItem("lang")) {
        case s.EN:
          n(s.RU);
          break;
        case s.RU:
          n(s.BE);
          break;
        case s.BE:
          n(s.EN);
      };
    },
    micActivation: function(e, t, a, n) {
      t.value = "",
        function(e, t, a) {
          const n = new(window.SpeechRecognition || window.webkitSpeechRecognition);
          n.interimResults = !0, n.lang = localStorage.getItem("lang", "en") ? "en-US" : "ru";
          const s = [], i = e;
          n.addEventListener("result", C.bind(n, s)), n.start(), n.addEventListener("end", L.bind(n, n, s, t, e, a)), i.style.animation = "microphone 1s linear 1.5s infinite", i.disabled = !0;
        }(e, t, N.bind(t, t, a, n));
    },
    returnLoc: function(e, t, a) {
      const n = t, s = e;
      n.value = localStorage.getItem("localCity"), N(t, e, a), n.value = "", s.style.opacity = "0", setTimeout(() => {
        s.style.visibility = "hidden";
      }, 500), localStorage.setItem("return", !1);
    },
    hideMap: v
  };
  function x(e) {
    mapboxgl.accessToken = "pk.eyJ1IjoidmxhZGltaXItZHJhY2h1ayIsImEiOiJjazNzcG9hbTYwN2RoM2dtY29nMGI0MHgwIn0.KD_9MsAOi0rBhtSDppliJw";
    const t = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/dark-v10",
        center: [e[1], e[0]],
        zoom: 3
      }),
      a = {
        width: 100,
        height: 100,
        data: new Uint8Array(4e4),
        onAdd() {
          const e = document.createElement("canvas");
          e.width = this.width, e.height = this.height, this.context = e.getContext("2d");
        },
        render() {
          const e = performance.now() % 1e3 / 1e3,
            a = 35 * e + 15,
            n = this.context;
          return n.clearRect(0, 0, this.width, this.height), n.beginPath(), n.arc(this.width / 2, this.height / 2, a, 0, 2 * Math.PI), n.fillStyle = `rgba(255, 200, 200,${1-e})`, n.fill(), n.beginPath(), n.arc(this.width / 2, this.height / 2, 15, 0, 2 * Math.PI), n.fillStyle = "rgba(255, 100, 100, 1)", n.strokeStyle = "white", n.lineWidth = 2 + 4 * (1 - e), n.fill(), n.stroke(), this.data = n.getImageData(0, 0, this.width, this.height).data, t.triggerRepaint(), !0;
        }
      };
    t.on("load", () => {
      t.addImage("pulsing-dot", a, {
        pixelRatio: 2
      }), t.addLayer({
        id: "points",
        type: "symbol",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [{
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [e[1], e[0]]
              }
            }]
          }
        },
        layout: {
          "icon-image": "pulsing-dot"
        }
      })
    })
  };
  class _ {
    constructor() {
      this.elem = document.createElement("div"), this.elemInputWrap = document.createElement("div"), this.input = document.createElement("input"), this.buttonMic = document.createElement("button"), this.buttonReturn = document.createElement("button"), this.buttonSearch = document.createElement("button"), this.buttonLang = document.createElement("button"), this.buttonTempr = document.createElement("button"), this.buttonMap = document.createElement("button"), this.buttonImage = document.createElement("button"), this.elemMapWrap = document.createElement("div"), this.elemShowMap = document.createElement("div"), this.elemMap = document.createElement("div"), this.map = x, this.elem.classList.add("button-panel"), this.elemInputWrap.classList.add("button-panel__input-wrapper"), this.buttonMic.classList.add("button-panel__input-wrapper_mic"), this.buttonReturn.classList.add("button-panel__input-wrapper_return"), this.buttonSearch.classList.add("button-panel__button"), this.buttonSearch.classList.add("button-panel__search"), this.buttonLang.classList.add("button-panel__button"), this.buttonLang.classList.add("button-panel__lang"), this.buttonTempr.classList.add("button-panel__button"), this.buttonTempr.classList.add("button-panel__temp"), this.buttonMap.classList.add("button-panel__button"), this.buttonMap.classList.add("button-panel__map"), this.buttonImage.classList.add("button-panel__button"), this.buttonImage.classList.add("button-panel__background"), this.elemMapWrap.classList.add("button-panel__map-wrapper"), this.elemShowMap.classList.add("button-panel__show-map"), this.elemMap.id = "map", this.buttonLang.textContent = localStorage.getItem("lang"), this.buttonTempr.textContent = ` °${localStorage.getItem("temp")}`;
    };
    initListeners(e) {
      this.buttonSearch.addEventListener("click", k.search.bind(this.buttonSearch, this.input, this.buttonMic, this.buttonReturn, e)), this.input.addEventListener("keydown", k.search.bind(this.buttonSearch, this.input, this.buttonMic, this.buttonReturn, e)), this.buttonMic.addEventListener("click", k.micActivation.bind(this.buttonMic, this.buttonMic, this.input, this.buttonReturn, e)), this.buttonReturn.addEventListener("click", k.returnLoc.bind(this.buttonReturn, this.buttonReturn, this.input, e)), this.buttonLang.addEventListener("click", k.translate.bind(this.buttonLang, this.buttonLang, e)), this.buttonTempr.addEventListener("click", k.degree.bind(this.buttonTempr, this.buttonTempr, e)), this.buttonMap.addEventListener("click", k.showMap.bind(this.buttonMap, this.elemShowMap)), this.buttonImage.addEventListener("click", k.changeBackground), window.addEventListener("click", k.setDefault.bind(window, this.input, this.buttonMic, this.buttonSearch, this.buttonMap, this.buttonReturn, this.elemShowMap));
    };
    appendComponent(e) {
      e.appendChild(this.elem), this.elem.appendChild(this.elemInputWrap), this.elemInputWrap.appendChild(this.buttonMic), this.elemInputWrap.appendChild(this.buttonReturn), this.elemInputWrap.appendChild(this.input), this.elemInputWrap.appendChild(this.buttonSearch), this.elem.appendChild(this.buttonLang), this.elem.appendChild(this.buttonTempr), this.elem.appendChild(this.elemMapWrap), this.elemMapWrap.appendChild(this.buttonMap), this.elemMapWrap.appendChild(this.elemShowMap), this.elemShowMap.appendChild(this.elemMap), this.elem.appendChild(this.buttonImage);
    };
  }

  function M() {
    let e = +localStorage.getItem("currentDate");
    const t = new Date(e);
    return e += 1e3, localStorage.setItem("currentDate", e), t.toLocaleString("ru", {
      hour: "numeric",
      minute: "numeric"
    });
  };
  const W = document.querySelector(".content"),
    j = new class {
      constructor() {
        this.urlInfo = "https://ipinfo.io/json?token=c88934ed8c465f", this.setObj = {}, this.setObj.nextDayMethod = [], this.setObj.tempMethod1 = [], this.setObj.nextDayLang = [], this.infoSideBar = document.createElement("div"), this.weatherForecast = document.createElement("div"), this.nextDayWrapper = document.createElement("div"), this.infoSideBar.classList.add("info-sidebar"), this.weatherForecast.classList.add("weather-forecast"), this.nextDayWrapper.classList.add("weather-forecast__nextday"), localStorage.setItem("weatherFlag", !1), localStorage.setItem("return", !1), localStorage.getItem("lang") || localStorage.setItem("lang", s.EN), localStorage.getItem("temp") || localStorage.setItem("temp", "C");
      }
      appendComponent(e) {
        this.town = new u, this.town.appendComponent(this.infoSideBar), this.setObj.setDate = this.town.setDate.bind(this.town), this.setObj.townLang = this.town.changeLanguage.bind(this.town), this.today = new r, this.today.appendComponent(this.weatherForecast), this.today.setGeographicData(), this.setObj.todayMethod = this.today.setData.bind(this.today), this.setObj.tempMethod = this.today.changeTemp.bind(this.today), this.setObj.setDigitCoorgd = this.today.setGeographicData.bind(this.today), this.setObj.todayLang = this.today.changeLanguage.bind(this.today), this.setObj.todayStatic = this.today.setStaticInfo.bind(this.today), this.nextDays = new Array(5), this.nextDays.fill(), this.nextDays.forEach((e, t) => {
          this.nextDays[t] = new o, this.nextDays[t].appendComponent(this.nextDayWrapper), this.setObj.nextDayMethod[t] = this.nextDays[t].setData.bind(this.nextDays[t]), this.setObj.tempMethod1[t] = this.nextDays[t].changeTemp.bind(this.nextDays[t]), this.setObj.nextDayLang[t] = this.nextDays[t].changeLanguage.bind(this.nextDays[t]);
        }), this.panel = new _, this.panel.appendComponent(this.infoSideBar), this.panel.initListeners(this.setObj), this.setObj.changeMapCoord = this.panel.map.bind(this.panel), this.loadMap = this.panel.map, b(this.urlInfo).then(e => {
          const t = `https://api.openweathermap.org/data/2.5/forecast?q=${e.city}&lang=en&units=metric&APPID=59c4e48a6412cf32f060b008ceb454c3`,
            a = `https://api.opencagedata.com/geocode/v1/json?q=${e.city}&key=0c85df0749e640a9954ef097fcd98ead&language=en&`;
          localStorage.setItem("localCity", e.city), S(e.city), b(a).then(e => {
            this.date = d(1e3 * e.timestamp.created_unix), localStorage.setItem("long", `[${e.results[0].geometry.lat},${e.results[0].geometry.lng}]`), localStorage.setItem("currentDate", 1e3 * e.timestamp.created_unix), localStorage.setItem("deltaDate", e.results[0].annotations.timezone.offset_sec);
            const a = e.results[0].annotations.DMS.lat.match(/.+?\s+.+?\s/),
              n = e.results[0].annotations.DMS.lng.match(/.+?\s+.+?\s/);
            setTimeout(() => {
              localStorage.getItem("lang") === s.EN ? (this.town.changeLanguage(), this.town.setDate(this.date.now)) : (this.town.setDate(this.date.now), this.town.changeLanguage());
            }, 300), this.today.setGeographicData(a, n), b(t).then(e => {
              const t = w(e.list),
                a = f(t).now,
                n = `°${localStorage.getItem("temp")}`,
                s = c[t.nowIcon],
                i = `Feels Like ${"C"===localStorage.getItem("temp")?t.nowFeelLike:t.nowFeelLikeF}°`,
                r = `${t.nowWind} mps`,
                o = `${t.nowHumidity}%`;
              this.today.setData(a, n, s, t.nowState, i, r, o), this.today.changeLanguage(), this.nextDays.forEach((e, a) => {
                const n = this.date.day[a],
                  s = `${f(t).D[a]}° / ${f(t).N[a]}°`,
                  i = t.state[a],
                  r = c[t.icon[a]],
                  o = `${t.hum[a]}%`;
                this.nextDays[a].setData(n, s, i, r, o), this.nextDays[a].changeLanguage();
              }), localStorage.setItem("weatherFlag", !0), localStorage.setItem("weather", JSON.stringify(t)), h(e.list[0]), m(), this.today.setTime(M()), setInterval(() => {
                this.today.setTime(M());
              }, 1e3);
            })
          });
        }), this.weatherForecast.appendChild(this.nextDayWrapper), e.appendChild(this.infoSideBar), e.appendChild(this.weatherForecast)
      };
    };
  j.appendComponent(W), j.loadMap(JSON.parse(localStorage.getItem("long")));
}, function(e, t) {}, , , , function(e, t) {}, , function(e, t) {}, , function(e, t) {}, , function(e, t) {}, , function(e, t) {}]);