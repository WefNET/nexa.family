declare var ol: any;

var plots = [
    {
        "Name": "P1",
        "Assigned": "Open",
        "Coords": [[91, -296], [198, -296], [198, -370], [91, -370]],

    },
    {
        "Name": "P15",
        "Assigned": "Jackjones",
        "Coords": [[289, -554], [426, -554], [426, -921], [289, -921]]
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

        console.log("Reso", resolution);

        return [
            new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: assigned === "Open" ? "White" : "rgb(153, 0, 153)",
                    width: 3
                }),
                fill: new ol.style.Fill({
                    color: assigned === "Open" ? 'rgba(255, 255, 255, 0.5)' : 'rgba(153, 0, 153, 0.4)'
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