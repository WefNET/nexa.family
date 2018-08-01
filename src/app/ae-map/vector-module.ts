declare var ol: any;

var plots = [
    {
        "Name": "P1",
        "Assigned": "Open",
        "Coords": [[91, -296], [198, -296], [198, -370], [91, -370]],
    },
    {
        "Name": "P2",
        "Assigned": "Open",
        "Coords": [[106, -387], [258, -387], [258, -523], [106, -523]],
    },
    {
        "Name": "P3",
        "Assigned": "Open",
        "Coords": [[351, -402], [442, -402], [442, -508], [351, -508]],
    },
    {
        "Name": "P4",
        "Assigned": "Manager Storage",
        "Coords": [[518, -387], [731, -387], [731, -523], [518, -523]],
    },
    {
        "Name": "P5",
        "Assigned": "Open",
        "Coords": [[868, -387], [989, -387], [989, -523], [868, -523]],
    },
    {
        "Name": "P6",
        "Assigned": "Vito",
        "Coords": [[1050, -387], [1142, -387], [1142, -523], [1050, -523]],
    },
    {
        "Name": "P7",
        "Assigned": "Dunno",
        "Coords": [[92, -570], [243, -570], [243, -662], [92, -662]],
    },
    {
        "Name": "P14",
        "Assigned": "Dunno",
        "Coords": [[92, -676], [243, -676], [243, -768], [92, -768]],
    },
    {
        "Name": "P15",
        "Assigned": "Jackjones",
        "Coords": [[289, -554], [426, -554], [426, -921], [289, -921]]
    },
    {
        "Name": "P16",
        "Assigned": "Dunno",
        "Coords": [[487, -676], [655, -676], [655, -875], [487, -875]]
    },
    {
        "Name": "P19",
        "Assigned": "Dunno",
        "Coords": [[92, -814], [198, -814], [198, -906], [92, -906]]
    },
    {
        "Name": "P20",
        "Assigned": "Dunno",
        "Coords": [[122, -967], [228, -967], [228, -1029], [122, -1029]]
    },
    {
        "Name": "P21",
        "Assigned": "Dunno",
        "Coords": [[487, -935], [609, -935], [609, -1088], [487, -1088]]
    },
    {
        "Name": "P22",
        "Assigned": "Dunno",
        "Coords": [[640, -935], [776, -935], [776, -1088], [640, -1088]]
    },
    {
        "Name": "P23",
        "Assigned": "Dunno",
        "Coords": [[883, -935], [1004, -935], [1004, -1072], [883, -1072]]
    },
    {
        "Name": "P25",
        "Assigned": "Dunno",
        "Coords": [[167, -1075], [228, -1075], [228, -1241], [152, -1241], [152, -1136], [167, -1134]]
    },
    {
        "Name": "P26",
        "Assigned": "Dunno",
        "Coords": [[273, -1135], [441, -1135], [441, -1242], [273, -1242]]
    },
    {
        "Name": "P29",
        "Assigned": "Dunno",
        "Coords": [[624, -1135], [792, -1135], [792, -1241], [624, -1242]]
    },
    {
        "Name": "P30",
        "Assigned": "Dunno",
        "Coords": [[929, -1135], [1005, -1135], [1005, -1227], [929, -1227]]
    },
    {
        "Name": "P31",
        "Assigned": "Dunno",
        "Coords": [[1050, -1135], [1142, -1135], [1142, -1227], [1050, -1227]]
    },
    {
        "Name": "P32",
        "Assigned": "Dunno",
        "Coords": [[121, -1287], [182, -1287], [182, -1348], [121, -1348]]
    },
    {
        "Name": "P33",
        "Assigned": "Dunno",
        "Coords": [[198, -1287], [274, -1287], [274, -1348], [198, -1348]]
    },
    {
        "Name": "P34",
        "Assigned": "Dunno",
        "Coords": [[289, -1287], [365, -1287], [365, -1348], [289, -1348]]
    },
    {
        "Name": "P35",
        "Assigned": "Dunno",
        "Coords": [[380, -1287], [441, -1287], [441, -1393], [380, -1393]]
    },
    {
        "Name": "P36",
        "Assigned": "Dunno",
        "Coords": [[487, -1287], [608, -1287], [608, -1393], [487, -1393]]
    },
    {
        "Name": "P37",
        "Assigned": "Dunno",
        "Coords": [[624, -1287], [701, -1287], [701, -1393], [624, -1393]]
    },
    {
        "Name": "P38",
        "Assigned": "Dunno",
        "Coords": [[716, -1287], [807, -1287], [807, -1393], [716, -1393]]
    },
    {
        "Name": "G8",
        "Assigned": "Gerry",
        "Coords": [[852, -1241], [913, -1241], [913, -1302], [852, -1302]]
    },
    {
        "Name": "F3",
        "Assigned": "Farm 3",
        "Coords": [[243, -280], [425, -280], [425, -370], [243, -370]]
    },
];

export interface VectorLayerModule {
    generateSource(): any;
    styleFunction(feature, resolution): any[];
}

export class VectorLayer implements VectorLayerModule {
    generateSource() {

        var plotSource = new ol.source.Vector();

        console.log("Plots", plots);

        for (let plot of plots) {

            var startingTownFeature = new ol.Feature({
                geometry: new ol.geom.Polygon([plot.Coords]),
                name: plot.Name,
                assigned: plot.Assigned
            });

            plotSource.addFeature(startingTownFeature);
        }

        return plotSource
    }

    styleFunction(feature, resolution) {
        var name = feature.get('name');
        var assigned = feature.get('assigned');

        let type: string = name.charAt(0).toLowerCase();
        let avail: Boolean = assigned === "Open";
        let color: string;

        if (type === "p")
            color = avail ? "rgba(255, 255, 255, 0.5)" : "rgba(153, 0, 153, 0.4)";
        
        if (type === "f")
            color =  "rgba(0, 153, 51, 0.5)"

        if (type === "g")
            color =  avail ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 153, 255, 0.4)";

        return [
            new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: color,
                    width: 2
                }),
                fill: new ol.style.Fill({
                    color: color,
                }),
                text: new ol.style.Text({
                    font: '14px Calibri,sans-serif',
                    text: resolution <= 1 ? name + "\n" + assigned : name,
                    exceedLength: true,
                    textBaseline: 'middle',
                    textAlign: 'center',
                    fill: new ol.style.Fill({
                        color: '#FFF'
                    }),
                    stroke: new ol.style.Stroke({
                        color: '#000',
                        width: 1,
                        offsetY: 1,
                        offsetX: 2
                    })
                })
            })
        ]
    }
}