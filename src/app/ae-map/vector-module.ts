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
        "Assigned": "Ascorbic",
        "Coords": [[122, -967], [228, -967], [228, -1029], [122, -1029]]
    },
    {
        "Name": "P21",
        "Assigned": "Dunno",
        "Coords": [[487, -935], [609, -935], [609, -1088], [487, -1088]]
    },
    {
        "Name": "P22",
        "Assigned": "Tazinsky",
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
        "Assigned": "Timowicz",
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
        "Assigned": "Omuley",
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
        "Name": "P41",
        "Assigned": "Dunno",
        "Coords": [[928, -1241], [1005, -1241], [1005, -1409], [928, -1409]]
    },
    {
        "Name": "P42",
        "Assigned": "Dunno",
        "Coords": [[1050, -1241], [1127, -1241], [1127, -1333], [1050, -1333]]
    },
    {
        "Name": "P43",
        "Assigned": "Dunno",
        "Coords": [[121, -1394], [227, -1394], [227, -1547], [121, -1547]]
    },
    {
        "Name": "P44",
        "Assigned": "Dunno",
        "Coords": [[243, -1394], [334, -1394], [334, -1547], [243, -1547]]
    },
    {
        "Name": "P45",
        "Assigned": "Dunno",
        "Coords": [[349, -1439], [441, -1439], [441, -1547], [349, -1547]]
    },
    {
        "Name": "P46",
        "Assigned": "Dunno",
        "Coords": [[487, -1455], [593, -1455], [593, -1546], [487, -1546]]
    },
    {
        "Name": "P47",
        "Assigned": "Dunno",
        "Coords": [[609, -1455], [685, -1455], [685, -1546], [609, -1546]]
    },
    {
        "Name": "P48",
        "Assigned": "Dunno",
        "Coords": [[700, -1455], [806, -1455], [806, -1546], [700, -1546]]
    },
    {
        "Name": "P49",
        "Assigned": "Dunno",
        "Coords": [[898, -1455], [1005, -1455], [1005, -1546], [898, -1546]]
    },
    {
        "Name": "P50",
        "Assigned": "Dunno",
        "Coords": [[1050, -1439], [1156, -1439], [1156, -1546], [1050, -1546]]
    },
    {
        "Name": "P51",
        "Assigned": "Dunno",
        "Coords": [[91, -1593], [258, -1593], [258, -1715], [91, -1715]]
    },
    {
        "Name": "P52",
        "Assigned": "Dunno",
        "Coords": [[273, -1593], [442, -1593], [442, -1715], [273, -1715]]
    },
    {
        "Name": "P53",
        "Assigned": "Dunno",
        "Coords": [[487, -1593], [670, -1593], [670, -1715], [487, -1715]]
    },
    {
        "Name": "P54",
        "Assigned": "Dunno",
        "Coords": [[685, -1593], [807, -1593], [807, -1699], [685, -1699]]
    },
    {
        "Name": "P56",
        "Assigned": "Dunno",
        "Coords": [[867, -1699], [1005, -1699], [1005, -1837], [867, -1837]]
    },
    {
        "Name": "F1",
        "Assigned": "Farm 1",
        "Coords": [[1050, -798], [1156, -798], [1156, -904], [1050, -904]]
    },
    {
        "Name": "F2",
        "Assigned": "Farm 2",
        "Coords": [[1020, -920], [1156, -920], [1156, -1104], [1020, -1104]]
    },
    {
        "Name": "F3",
        "Assigned": "Farm 3",
        "Coords": [[243, -280], [425, -280], [425, -370], [243, -370]]
    },
    {
        "Name": "F4",
        "Assigned": "Farm 4",
        "Coords": [[258, -967], [426, -967], [426, -1104], [258, -1104]]
    },
    {
        "Name": "F5",
        "Assigned": "Farm 5\n(Off Deed)",
        "Coords": [[15, -1393], [89, -1393], [89, -1562], [15, -1562]]
    },
    {
        "Name": "F6",
        "Assigned": "Farm 6\n(Mostly Off Deed)",
        "Coords": [[30, -1883], [502, -1883], [502, -1974], [30, -1974]]
    },
    {
        "Name": "F7",
        "Assigned": "Farm 7",
        "Coords": [[867, -1607], [1005, -1607], [1005, -1683], [867, -1683]]
    },
    {
        "Name": "F8",
        "Assigned": "Farm 8",
        "Coords": [[1050, -1591], [1142, -1591], [1142, -1837], [1050, -1837]]
    },
    {
        "Name": "G1",
        "Assigned": "Rolf",
        "Coords": [[685, -570], [731, -570], [731, -646], [685, -646]]
    },
    {
        "Name": "G2",
        "Assigned": "Nahjo",
        "Coords": [[624, -570], [670, -570], [670, -646], [624, -646]]
    },
    {
        "Name": "G3",
        "Assigned": "Gary",
        "Coords": [[563, -570], [610, -570], [610, -646], [563, -646]]
    },
    {
        "Name": "G4",
        "Assigned": "Pae",
        "Coords": [[487, -585], [548, -585], [548, -646], [487, -646]]
    },
    {
        "Name": "G5",
        "Assigned": "Dunno",
        "Coords": [[121, -1073], [166, -1073], [166, -1134], [121, -1134]]
    },
    {
        "Name": "G6",
        "Assigned": "Dunno",
        "Coords": [[502, -1120], [563, -1120], [563, -1180], [502, -1180]]
    },
    {
        "Name": "G7",
        "Assigned": "Dunno",
        "Coords": [[502, -1195], [563, -1195], [563, -1256], [502, -1256]]
    },
    {
        "Name": "G8",
        "Assigned": "Gerry",
        "Coords": [[852, -1241], [913, -1241], [913, -1302], [852, -1302]]
    },
    {
        "Name": "G9",
        "Assigned": "Gerry",
        "Coords": [[852, -1318], [913, -1318], [913, -1394], [852, -1394]]
    },
    {
        "Name": "A1",
        "Assigned": "Village\nToken",
        "Coords": [[809, -707], [851, -707], [851, -751], [809, -751]]
    },
    {
        "Name": "A2",
        "Assigned": "Amish Inn",
        "Coords": [[441, -263], [488, -263], [488, -371], [441, -371]]
    },
    {
        "Name": "A3",
        "Assigned": "Chapel",
        "Coords": [[700, -753], [746, -753], [746, -829], [700, -829]]
    },
    {
        "Name": "A4",
        "Assigned": "Pottery Barn\n(Clay tile)",
        "Coords": [[929, -614], [989, -614], [989, -691], [929, -691]]
    },
    {
        "Name": "A5",
        "Assigned": "The Warehouse",
        "Coords": [[1004, -571], [1127, -571], [1127, -631], [1004, -631]]
    },
    {
        "Name": "A6",
        "Assigned": "The Workshop",
        "Coords": [[1020, -646], [1095, -646], [1095, -707], [1020, -707]]
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
            color = "rgba(0, 153, 51, 0.5)"

        if (type === "a")
            color = "rgba(255, 204, 102, 0.5)"

        if (type === "g")
            color = avail ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 153, 255, 0.4)";

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