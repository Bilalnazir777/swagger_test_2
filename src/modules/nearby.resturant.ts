import { INearByResturantRequest } from "../types/request/resturant.request"

import { getDistance } from 'geolib';
export const nearby = function (body: INearByResturantRequest, savedresturant: any) {

    return savedresturant.filter((element: any, index: any, array: any) => {
        //console.log(body.location, element.resturant_location);
        return getDistance(body.location, element.resturant_location) <= body.radius
    })
}