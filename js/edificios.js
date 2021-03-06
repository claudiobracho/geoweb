function addEdificiosCapa() {

    map.addSource("edificios_source", {
        "type": "vector",
        "url": "mapbox://claudioabe.8hrb0oce"  // Nuestor ID Tileset

    }); //fin map source


    map.addLayer({
    "id": "edificios",
    "type": "fill-extrusion",
    "source": "edificios_source",
    "source-layer": "claudioabe.8hrb0oce", // Nuestro nombre Tileset
    "maxzoom": 21,
    "minzoom": 15,
   // "filter": [">", "numberOfFloorsAboveGround", 0],
    "paint": {
        "fill-extrusion-color": [
            "interpolate", ["linear"], ["number", ["get", "numberOfFloorsAboveGround"]],
            0, "#FFFFFF",
            1, "#e6b03d",
            3, "#e6b03d",
            6, "#3de66d",
            9, "#3de6b1",
            12, "#22ecf0",
            15, "#14b1fd",
            20, "#3d73e6",
            40, "#123a8f",
            60, "#ce2f7e",
            106, "#ff4d4d"

        ],
        "fill-extrusion-height": [
            "interpolate",
            ["linear"],
            ["zoom"],
            8, 0,
            12.5, 0,
            14, ["*", 1, ["to-number", ["get", "numberOfFloorsAboveGround"]]],
            16, ["*", 1.5, ["to-number", ["get", "numberOfFloorsAboveGround"]]],
            20, ["*", 2, ["to-number", ["get", "numberOfFloorsAboveGround"]]]
        ],
        "fill-extrusion-opacity": 0.9
    }
});     // fin addLayer capa texto "water-name-lakeline-platja", "road-label"

}