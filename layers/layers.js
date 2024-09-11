var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_postesExistentesLote2_1 = new ol.format.GeoJSON();
var features_postesExistentesLote2_1 = format_postesExistentesLote2_1.readFeatures(json_postesExistentesLote2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_postesExistentesLote2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_postesExistentesLote2_1.addFeatures(features_postesExistentesLote2_1);
var lyr_postesExistentesLote2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_postesExistentesLote2_1, 
                style: style_postesExistentesLote2_1,
                popuplayertitle: "postes Existentes Lote 2",
                interactive: true,
                title: '<img src="styles/legend/postesExistentesLote2_1.png" /> postes Existentes Lote 2'
            });
var format_postesagregadosmanualmente_2 = new ol.format.GeoJSON();
var features_postesagregadosmanualmente_2 = format_postesagregadosmanualmente_2.readFeatures(json_postesagregadosmanualmente_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_postesagregadosmanualmente_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_postesagregadosmanualmente_2.addFeatures(features_postesagregadosmanualmente_2);
var lyr_postesagregadosmanualmente_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_postesagregadosmanualmente_2, 
                style: style_postesagregadosmanualmente_2,
                popuplayertitle: "postes agregados manualmente",
                interactive: true,
                title: '<img src="styles/legend/postesagregadosmanualmente_2.png" /> postes agregados manualmente'
            });
var format_PostacinfichasL22808_3 = new ol.format.GeoJSON();
var features_PostacinfichasL22808_3 = format_PostacinfichasL22808_3.readFeatures(json_PostacinfichasL22808_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PostacinfichasL22808_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacinfichasL22808_3.addFeatures(features_PostacinfichasL22808_3);
var lyr_PostacinfichasL22808_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacinfichasL22808_3, 
                style: style_PostacinfichasL22808_3,
                popuplayertitle: "Postación fichas L2 28-08",
                interactive: true,
                title: '<img src="styles/legend/PostacinfichasL22808_3.png" /> Postación fichas L2 28-08'
            });
var format_PostacinL2AgostoySeptiembre_4 = new ol.format.GeoJSON();
var features_PostacinL2AgostoySeptiembre_4 = format_PostacinL2AgostoySeptiembre_4.readFeatures(json_PostacinL2AgostoySeptiembre_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PostacinL2AgostoySeptiembre_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacinL2AgostoySeptiembre_4.addFeatures(features_PostacinL2AgostoySeptiembre_4);
var lyr_PostacinL2AgostoySeptiembre_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacinL2AgostoySeptiembre_4, 
                style: style_PostacinL2AgostoySeptiembre_4,
                popuplayertitle: "Postación L2 Agosto y Septiembre",
                interactive: true,
                title: '<img src="styles/legend/PostacinL2AgostoySeptiembre_4.png" /> Postación L2 Agosto y Septiembre'
            });
var format_PDL2_5 = new ol.format.GeoJSON();
var features_PDL2_5 = format_PDL2_5.readFeatures(json_PDL2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PDL2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDL2_5.addFeatures(features_PDL2_5);
var lyr_PDL2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDL2_5, 
                style: style_PDL2_5,
                popuplayertitle: "PD.L2",
                interactive: true,
                title: '<img src="styles/legend/PDL2_5.png" /> PD.L2'
            });
var format_MT3x185L2_6 = new ol.format.GeoJSON();
var features_MT3x185L2_6 = format_MT3x185L2_6.readFeatures(json_MT3x185L2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MT3x185L2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x185L2_6.addFeatures(features_MT3x185L2_6);
var lyr_MT3x185L2_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x185L2_6, 
                style: style_MT3x185L2_6,
                popuplayertitle: "MT 3x185 L2",
                interactive: true,
                title: '<img src="styles/legend/MT3x185L2_6.png" /> MT 3x185 L2'
            });
var format_MT3x70L2_7 = new ol.format.GeoJSON();
var features_MT3x70L2_7 = format_MT3x70L2_7.readFeatures(json_MT3x70L2_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MT3x70L2_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x70L2_7.addFeatures(features_MT3x70L2_7);
var lyr_MT3x70L2_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x70L2_7, 
                style: style_MT3x70L2_7,
                popuplayertitle: "MT 3x70 L2",
                interactive: true,
                title: '<img src="styles/legend/MT3x70L2_7.png" /> MT 3x70 L2'
            });
var format_MT3x35L2_8 = new ol.format.GeoJSON();
var features_MT3x35L2_8 = format_MT3x35L2_8.readFeatures(json_MT3x35L2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MT3x35L2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x35L2_8.addFeatures(features_MT3x35L2_8);
var lyr_MT3x35L2_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x35L2_8, 
                style: style_MT3x35L2_8,
                popuplayertitle: "MT 3x35 L2",
                interactive: true,
                title: '<img src="styles/legend/MT3x35L2_8.png" /> MT 3x35 L2'
            });
var format_BT3x701x501x25_9 = new ol.format.GeoJSON();
var features_BT3x701x501x25_9 = format_BT3x701x501x25_9.readFeatures(json_BT3x701x501x25_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BT3x701x501x25_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BT3x701x501x25_9.addFeatures(features_BT3x701x501x25_9);
var lyr_BT3x701x501x25_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BT3x701x501x25_9, 
                style: style_BT3x701x501x25_9,
                popuplayertitle: "BT 3x70+1x50+1x25",
                interactive: true,
                title: '<img src="styles/legend/BT3x701x501x25_9.png" /> BT 3x70+1x50+1x25'
            });
var format_MT240L2Subterrneo_10 = new ol.format.GeoJSON();
var features_MT240L2Subterrneo_10 = format_MT240L2Subterrneo_10.readFeatures(json_MT240L2Subterrneo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MT240L2Subterrneo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT240L2Subterrneo_10.addFeatures(features_MT240L2Subterrneo_10);
var lyr_MT240L2Subterrneo_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT240L2Subterrneo_10, 
                style: style_MT240L2Subterrneo_10,
                popuplayertitle: "MT 240 L2 Subterráneo",
                interactive: true,
                title: '<img src="styles/legend/MT240L2Subterrneo_10.png" /> MT 240 L2 Subterráneo'
            });
var group_LOTE1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 1"});
var group_LOTE2 = new ol.layer.Group({
                                layers: [lyr_postesExistentesLote2_1,lyr_postesagregadosmanualmente_2,lyr_PostacinfichasL22808_3,lyr_PostacinL2AgostoySeptiembre_4,],
                                fold: "open",
                                title: "LOTE 2"});
var group_LOTE3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 3"});
var group_LOTE4 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 4"});
var group_LOTE5 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 5"});
var group_LOTE6 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 6"});
var group_Lote1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 1"});
var group_Lote2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 2"});
var group_Lote3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 3"});
var group_Lote4 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 4"});
var group_Lote5 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 5"});
var group_Lote6 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 6"});
var group_OpenStreetMap = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "OpenStreetMap"});

lyr_OpenStreetMap_0.setVisible(true);lyr_postesExistentesLote2_1.setVisible(true);lyr_postesagregadosmanualmente_2.setVisible(true);lyr_PostacinfichasL22808_3.setVisible(true);lyr_PostacinL2AgostoySeptiembre_4.setVisible(true);lyr_PDL2_5.setVisible(true);lyr_MT3x185L2_6.setVisible(true);lyr_MT3x70L2_7.setVisible(true);lyr_MT3x35L2_8.setVisible(true);lyr_BT3x701x501x25_9.setVisible(true);lyr_MT240L2Subterrneo_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_LOTE2,lyr_PDL2_5,lyr_MT3x185L2_6,lyr_MT3x70L2_7,lyr_MT3x35L2_8,lyr_BT3x701x501x25_9,lyr_MT240L2Subterrneo_10];
lyr_postesExistentesLote2_1.set('fieldAliases', {'Nro. De So': 'Nro. De So', 'Tipo de Po': 'Tipo de Po', 'Coord.X': 'Coord.X', 'Coord. Y': 'Coord. Y', 'X': 'X', 'y': 'y', 'xx': 'xx', 'yy': 'yy', });
lyr_postesagregadosmanualmente_2.set('fieldAliases', {'sosten': 'sosten', 'tipo': 'tipo', 'x': 'x', 'y': 'y', });
lyr_PostacinfichasL22808_3.set('fieldAliases', {'Alimentado': 'Alimentado', 'Nro de Sos': 'Nro de Sos', 'tipo/poste': 'tipo/poste', 'Coord. X.': 'Coord. X.', 'Coord. Y': 'Coord. Y', 'X': 'X', });
lyr_PostacinL2AgostoySeptiembre_4.set('fieldAliases', {'#': '#', 'Tipo': 'Tipo', 'Autor': 'Autor', 'Fecha de inicio': 'Fecha de inicio', 'Fecha fin': 'Fecha fin', 'Cuadrilla 2': 'Cuadrilla 2', 'Alimentadores Lote 2': 'Alimentadores Lote 2', 'Numero de Sosten': 'Numero de Sosten', 'Tipo de Poste': 'Tipo de Poste', 'Creado': 'Creado', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_PDL2_5.set('fieldAliases', {'fecha de montaje': 'fecha de montaje', 'Alimentador': 'Alimentador', 'Coordenada X': 'Coordenada X', 'Coordenada Y': 'Coordenada Y', 'N° Ande': 'N° Ande', 'N° Fabrica': 'N° Fabrica', 'Marca': 'Marca', });
lyr_MT3x185L2_6.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', });
lyr_MT3x70L2_7.set('fieldAliases', {'INICIO-FIN': 'INICIO-FIN', 'FECHA': 'FECHA', 'LONGITUD': 'LONGITUD', });
lyr_MT3x35L2_8.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', });
lyr_BT3x701x501x25_9.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', });
lyr_MT240L2Subterrneo_10.set('fieldAliases', {'Fecha': 'Fecha', 'Inicio-Fin': 'Inicio-Fin', 'Longitud': 'Longitud', });
lyr_postesExistentesLote2_1.set('fieldImages', {'Nro. De So': 'TextEdit', 'Tipo de Po': 'TextEdit', 'Coord.X': 'TextEdit', 'Coord. Y': 'TextEdit', 'X': 'TextEdit', 'y': 'TextEdit', 'xx': 'TextEdit', 'yy': 'TextEdit', });
lyr_postesagregadosmanualmente_2.set('fieldImages', {'sosten': 'TextEdit', 'tipo': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_PostacinfichasL22808_3.set('fieldImages', {'Alimentado': 'TextEdit', 'Nro de Sos': 'TextEdit', 'tipo/poste': 'TextEdit', 'Coord. X.': 'TextEdit', 'Coord. Y': 'TextEdit', 'X': 'TextEdit', });
lyr_PostacinL2AgostoySeptiembre_4.set('fieldImages', {'#': 'Range', 'Tipo': 'TextEdit', 'Autor': 'TextEdit', 'Fecha de inicio': 'TextEdit', 'Fecha fin': 'TextEdit', 'Cuadrilla 2': 'TextEdit', 'Alimentadores Lote 2': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'Creado': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_PDL2_5.set('fieldImages', {'fecha de montaje': 'TextEdit', 'Alimentador': 'TextEdit', 'Coordenada X': 'Range', 'Coordenada Y': 'Range', 'N° Ande': 'Range', 'N° Fabrica': 'Range', 'Marca': 'TextEdit', });
lyr_MT3x185L2_6.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_MT3x70L2_7.set('fieldImages', {'INICIO-FIN': 'TextEdit', 'FECHA': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_MT3x35L2_8.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_BT3x701x501x25_9.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_MT240L2Subterrneo_10.set('fieldImages', {'Fecha': 'TextEdit', 'Inicio-Fin': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_postesExistentesLote2_1.set('fieldLabels', {'Nro. De So': 'no label', 'Tipo de Po': 'no label', 'Coord.X': 'no label', 'Coord. Y': 'no label', 'X': 'no label', 'y': 'no label', 'xx': 'no label', 'yy': 'no label', });
lyr_postesagregadosmanualmente_2.set('fieldLabels', {'sosten': 'no label', 'tipo': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_PostacinfichasL22808_3.set('fieldLabels', {'Alimentado': 'no label', 'Nro de Sos': 'no label', 'tipo/poste': 'no label', 'Coord. X.': 'no label', 'Coord. Y': 'no label', 'X': 'no label', });
lyr_PostacinL2AgostoySeptiembre_4.set('fieldLabels', {'#': 'no label', 'Tipo': 'no label', 'Autor': 'no label', 'Fecha de inicio': 'no label', 'Fecha fin': 'no label', 'Cuadrilla 2': 'no label', 'Alimentadores Lote 2': 'no label', 'Numero de Sosten': 'no label', 'Tipo de Poste': 'no label', 'Creado': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', });
lyr_PDL2_5.set('fieldLabels', {'fecha de montaje': 'no label', 'Alimentador': 'no label', 'Coordenada X': 'no label', 'Coordenada Y': 'no label', 'N° Ande': 'no label', 'N° Fabrica': 'no label', 'Marca': 'no label', });
lyr_MT3x185L2_6.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', });
lyr_MT3x70L2_7.set('fieldLabels', {'INICIO-FIN': 'no label', 'FECHA': 'no label', 'LONGITUD': 'no label', });
lyr_MT3x35L2_8.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', });
lyr_BT3x701x501x25_9.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', });
lyr_MT240L2Subterrneo_10.set('fieldLabels', {'Fecha': 'no label', 'Inicio-Fin': 'no label', 'Longitud': 'no label', });
lyr_MT240L2Subterrneo_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});