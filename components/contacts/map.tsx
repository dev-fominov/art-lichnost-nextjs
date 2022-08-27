import {YMaps, Map, Placemark, GeoObject} from 'react-yandex-maps';

const mapState = { center: [59.920645, 30.371968], zoom: 16};

export const MyPlacemark = () => (
    <YMaps>
        <Map height={376} width={506} state={mapState}>
            <Placemark
                geometry={[59.920645, 30.371968]}
            />
            </Map>
    </YMaps>
);