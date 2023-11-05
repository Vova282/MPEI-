let center = [55.75350727932817,37.71014604054786];
ymaps.ready(init);
        function init(){
            let myMap = new ymaps.Map("map-test", {
                center: center,
                zoom: 17
            });

            let myPlacemark = new ymaps.Placemark(center,{
                balloonContentBody: 'ИнЭИ'
            },{
                preset: 'islands#redIcon'
            });
            myMap.geoObjects.add(myPlacemark);
        }
        
        