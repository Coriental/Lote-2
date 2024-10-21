ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32721").setExtent([437429.690520, 7197444.516771, 448731.857089, 7203072.767396]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 0.907000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_postesExistentesLote2_1 = new ol.format.GeoJSON();
var features_postesExistentesLote2_1 = format_postesExistentesLote2_1.readFeatures(json_postesExistentesLote2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
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
var format_PostacinfichasL22808_2 = new ol.format.GeoJSON();
var features_PostacinfichasL22808_2 = format_PostacinfichasL22808_2.readFeatures(json_PostacinfichasL22808_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacinfichasL22808_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacinfichasL22808_2.addFeatures(features_PostacinfichasL22808_2);
var lyr_PostacinfichasL22808_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacinfichasL22808_2, 
                style: style_PostacinfichasL22808_2,
                popuplayertitle: "Postación fichas L2 28-08",
                interactive: true,
                title: '<img src="styles/legend/PostacinfichasL22808_2.png" /> Postación fichas L2 28-08'
            });
var format_ESTAQUEON3_3 = new ol.format.GeoJSON();
var features_ESTAQUEON3_3 = format_ESTAQUEON3_3.readFeatures(json_ESTAQUEON3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_ESTAQUEON3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTAQUEON3_3.addFeatures(features_ESTAQUEON3_3);
var lyr_ESTAQUEON3_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTAQUEON3_3, 
                style: style_ESTAQUEON3_3,
                popuplayertitle: "ESTAQUEO  N3",
                interactive: true,
                title: '<img src="styles/legend/ESTAQUEON3_3.png" /> ESTAQUEO  N3'
            });
var format_ESTAQUEON2_4 = new ol.format.GeoJSON();
var features_ESTAQUEON2_4 = format_ESTAQUEON2_4.readFeatures(json_ESTAQUEON2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_ESTAQUEON2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTAQUEON2_4.addFeatures(features_ESTAQUEON2_4);
var lyr_ESTAQUEON2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTAQUEON2_4, 
                style: style_ESTAQUEON2_4,
                popuplayertitle: "ESTAQUEO N2",
                interactive: true,
                title: '<img src="styles/legend/ESTAQUEON2_4.png" /> ESTAQUEO N2'
            });
var format_ESTAQUEOVAU28_5 = new ol.format.GeoJSON();
var features_ESTAQUEOVAU28_5 = format_ESTAQUEOVAU28_5.readFeatures(json_ESTAQUEOVAU28_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_ESTAQUEOVAU28_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTAQUEOVAU28_5.addFeatures(features_ESTAQUEOVAU28_5);
var lyr_ESTAQUEOVAU28_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTAQUEOVAU28_5, 
                style: style_ESTAQUEOVAU28_5,
                popuplayertitle: "ESTAQUEO VAU28",
                interactive: true,
                title: '<img src="styles/legend/ESTAQUEOVAU28_5.png" /> ESTAQUEO VAU28'
            });
var format_ESTAQUEOVAU25_6 = new ol.format.GeoJSON();
var features_ESTAQUEOVAU25_6 = format_ESTAQUEOVAU25_6.readFeatures(json_ESTAQUEOVAU25_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_ESTAQUEOVAU25_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTAQUEOVAU25_6.addFeatures(features_ESTAQUEOVAU25_6);
var lyr_ESTAQUEOVAU25_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTAQUEOVAU25_6, 
                style: style_ESTAQUEOVAU25_6,
                popuplayertitle: "ESTAQUEO VAU25",
                interactive: true,
                title: '<img src="styles/legend/ESTAQUEOVAU25_6.png" /> ESTAQUEO VAU25'
            });
var format_ESTAQUEOVAU24TRAMO2_7 = new ol.format.GeoJSON();
var features_ESTAQUEOVAU24TRAMO2_7 = format_ESTAQUEOVAU24TRAMO2_7.readFeatures(json_ESTAQUEOVAU24TRAMO2_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_ESTAQUEOVAU24TRAMO2_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTAQUEOVAU24TRAMO2_7.addFeatures(features_ESTAQUEOVAU24TRAMO2_7);
var lyr_ESTAQUEOVAU24TRAMO2_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTAQUEOVAU24TRAMO2_7, 
                style: style_ESTAQUEOVAU24TRAMO2_7,
                popuplayertitle: "ESTAQUEO VAU24 TRAMO 2",
                interactive: true,
                title: '<img src="styles/legend/ESTAQUEOVAU24TRAMO2_7.png" /> ESTAQUEO VAU24 TRAMO 2'
            });
var format_ESTAQUEOVAU24TRAMO1_8 = new ol.format.GeoJSON();
var features_ESTAQUEOVAU24TRAMO1_8 = format_ESTAQUEOVAU24TRAMO1_8.readFeatures(json_ESTAQUEOVAU24TRAMO1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_ESTAQUEOVAU24TRAMO1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTAQUEOVAU24TRAMO1_8.addFeatures(features_ESTAQUEOVAU24TRAMO1_8);
var lyr_ESTAQUEOVAU24TRAMO1_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTAQUEOVAU24TRAMO1_8, 
                style: style_ESTAQUEOVAU24TRAMO1_8,
                popuplayertitle: "ESTAQUEO VAU24 TRAMO1",
                interactive: true,
                title: '<img src="styles/legend/ESTAQUEOVAU24TRAMO1_8.png" /> ESTAQUEO VAU24 TRAMO1'
            });
var format_EstaqueoVAU14_9 = new ol.format.GeoJSON();
var features_EstaqueoVAU14_9 = format_EstaqueoVAU14_9.readFeatures(json_EstaqueoVAU14_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_EstaqueoVAU14_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstaqueoVAU14_9.addFeatures(features_EstaqueoVAU14_9);
var lyr_EstaqueoVAU14_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstaqueoVAU14_9, 
                style: style_EstaqueoVAU14_9,
                popuplayertitle: "Estaqueo VAU 14",
                interactive: true,
                title: '<img src="styles/legend/EstaqueoVAU14_9.png" /> Estaqueo VAU 14'
            });
var format_EstaqueoVAU12_10 = new ol.format.GeoJSON();
var features_EstaqueoVAU12_10 = format_EstaqueoVAU12_10.readFeatures(json_EstaqueoVAU12_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_EstaqueoVAU12_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstaqueoVAU12_10.addFeatures(features_EstaqueoVAU12_10);
var lyr_EstaqueoVAU12_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstaqueoVAU12_10, 
                style: style_EstaqueoVAU12_10,
                popuplayertitle: "Estaqueo VAU12",
                interactive: true,
                title: '<img src="styles/legend/EstaqueoVAU12_10.png" /> Estaqueo VAU12'
            });
var format_EstaqueoVAU11_11 = new ol.format.GeoJSON();
var features_EstaqueoVAU11_11 = format_EstaqueoVAU11_11.readFeatures(json_EstaqueoVAU11_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_EstaqueoVAU11_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstaqueoVAU11_11.addFeatures(features_EstaqueoVAU11_11);
var lyr_EstaqueoVAU11_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstaqueoVAU11_11, 
                style: style_EstaqueoVAU11_11,
                popuplayertitle: "Estaqueo VAU11",
                interactive: true,
                title: '<img src="styles/legend/EstaqueoVAU11_11.png" /> Estaqueo VAU11'
            });
var format_EstaqueoVAU5_12 = new ol.format.GeoJSON();
var features_EstaqueoVAU5_12 = format_EstaqueoVAU5_12.readFeatures(json_EstaqueoVAU5_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_EstaqueoVAU5_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstaqueoVAU5_12.addFeatures(features_EstaqueoVAU5_12);
var lyr_EstaqueoVAU5_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstaqueoVAU5_12, 
                style: style_EstaqueoVAU5_12,
                popuplayertitle: "Estaqueo VAU5",
                interactive: true,
                title: '<img src="styles/legend/EstaqueoVAU5_12.png" /> Estaqueo VAU5'
            });
var format_EstaqueadoVAU1_13 = new ol.format.GeoJSON();
var features_EstaqueadoVAU1_13 = format_EstaqueadoVAU1_13.readFeatures(json_EstaqueadoVAU1_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_EstaqueadoVAU1_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstaqueadoVAU1_13.addFeatures(features_EstaqueadoVAU1_13);
var lyr_EstaqueadoVAU1_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstaqueadoVAU1_13, 
                style: style_EstaqueadoVAU1_13,
                popuplayertitle: "Estaqueado VAU1",
                interactive: true,
                title: '<img src="styles/legend/EstaqueadoVAU1_13.png" /> Estaqueado VAU1'
            });
var format_estaqueadoFDM2_14 = new ol.format.GeoJSON();
var features_estaqueadoFDM2_14 = format_estaqueadoFDM2_14.readFeatures(json_estaqueadoFDM2_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_estaqueadoFDM2_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estaqueadoFDM2_14.addFeatures(features_estaqueadoFDM2_14);
var lyr_estaqueadoFDM2_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_estaqueadoFDM2_14, 
                style: style_estaqueadoFDM2_14,
                popuplayertitle: "estaqueado FDM2",
                interactive: true,
                title: '<img src="styles/legend/estaqueadoFDM2_14.png" /> estaqueado FDM2'
            });
var format_estaqueado_15 = new ol.format.GeoJSON();
var features_estaqueado_15 = format_estaqueado_15.readFeatures(json_estaqueado_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_estaqueado_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estaqueado_15.addFeatures(features_estaqueado_15);
var lyr_estaqueado_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_estaqueado_15, 
                style: style_estaqueado_15,
                popuplayertitle: "estaqueado",
                interactive: true,
                title: '<img src="styles/legend/estaqueado_15.png" /> estaqueado'
            });
var format_MT240L2Subterrneo_16 = new ol.format.GeoJSON();
var features_MT240L2Subterrneo_16 = format_MT240L2Subterrneo_16.readFeatures(json_MT240L2Subterrneo_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT240L2Subterrneo_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT240L2Subterrneo_16.addFeatures(features_MT240L2Subterrneo_16);
var lyr_MT240L2Subterrneo_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT240L2Subterrneo_16, 
                style: style_MT240L2Subterrneo_16,
                popuplayertitle: "MT 240 L2 Subterráneo",
                interactive: true,
                title: '<img src="styles/legend/MT240L2Subterrneo_16.png" /> MT 240 L2 Subterráneo'
            });
var format_BT3x701x501x25_17 = new ol.format.GeoJSON();
var features_BT3x701x501x25_17 = format_BT3x701x501x25_17.readFeatures(json_BT3x701x501x25_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_BT3x701x501x25_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BT3x701x501x25_17.addFeatures(features_BT3x701x501x25_17);
var lyr_BT3x701x501x25_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BT3x701x501x25_17, 
                style: style_BT3x701x501x25_17,
                popuplayertitle: "BT 3x70+1x50+1x25",
                interactive: true,
                title: '<img src="styles/legend/BT3x701x501x25_17.png" /> BT 3x70+1x50+1x25'
            });
var format_MT3x70L2_18 = new ol.format.GeoJSON();
var features_MT3x70L2_18 = format_MT3x70L2_18.readFeatures(json_MT3x70L2_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x70L2_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x70L2_18.addFeatures(features_MT3x70L2_18);
var lyr_MT3x70L2_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x70L2_18, 
                style: style_MT3x70L2_18,
                popuplayertitle: "MT 3x70 L2",
                interactive: true,
                title: '<img src="styles/legend/MT3x70L2_18.png" /> MT 3x70 L2'
            });
var format_MT3x185L2_19 = new ol.format.GeoJSON();
var features_MT3x185L2_19 = format_MT3x185L2_19.readFeatures(json_MT3x185L2_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x185L2_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x185L2_19.addFeatures(features_MT3x185L2_19);
var lyr_MT3x185L2_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x185L2_19, 
                style: style_MT3x185L2_19,
                popuplayertitle: "MT 3x185 L2",
                interactive: true,
                title: '<img src="styles/legend/MT3x185L2_19.png" /> MT 3x185 L2'
            });
var format_MT3x35L2_20 = new ol.format.GeoJSON();
var features_MT3x35L2_20 = format_MT3x35L2_20.readFeatures(json_MT3x35L2_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x35L2_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x35L2_20.addFeatures(features_MT3x35L2_20);
var lyr_MT3x35L2_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x35L2_20, 
                style: style_MT3x35L2_20,
                popuplayertitle: "MT 3x35 L2",
                interactive: true,
                title: '<img src="styles/legend/MT3x35L2_20.png" /> MT 3x35 L2'
            });
var group_LOTE1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 1"});
var group_LOTE2 = new ol.layer.Group({
                                layers: [lyr_postesExistentesLote2_1,lyr_PostacinfichasL22808_2,],
                                fold: "open",
                                title: "LOTE 2"});
var group_FDM1 = new ol.layer.Group({
                                layers: [lyr_estaqueado_15,],
                                fold: "open",
                                title: "FDM1"});
var group_FDM2 = new ol.layer.Group({
                                layers: [lyr_estaqueadoFDM2_14,],
                                fold: "open",
                                title: "FDM2"});
var group_VAU1 = new ol.layer.Group({
                                layers: [lyr_EstaqueadoVAU1_13,],
                                fold: "open",
                                title: "VAU1"});
var group_VAU2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU2"});
var group_VAU3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU3"});
var group_VAU5 = new ol.layer.Group({
                                layers: [lyr_EstaqueoVAU5_12,],
                                fold: "open",
                                title: "VAU5"});
var group_VAU9 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU9"});
var group_VAU11 = new ol.layer.Group({
                                layers: [lyr_EstaqueoVAU11_11,],
                                fold: "open",
                                title: "VAU11"});
var group_VAU12 = new ol.layer.Group({
                                layers: [lyr_EstaqueoVAU12_10,],
                                fold: "open",
                                title: "VAU12"});
var group_VAU13 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU13"});
var group_VAU14 = new ol.layer.Group({
                                layers: [lyr_EstaqueoVAU14_9,],
                                fold: "open",
                                title: "VAU14"});
var group_VAU24 = new ol.layer.Group({
                                layers: [lyr_ESTAQUEOVAU24TRAMO2_7,lyr_ESTAQUEOVAU24TRAMO1_8,],
                                fold: "open",
                                title: "VAU24"});
var group_VAU25 = new ol.layer.Group({
                                layers: [lyr_ESTAQUEOVAU25_6,],
                                fold: "open",
                                title: "VAU25"});
var group_VAU28 = new ol.layer.Group({
                                layers: [lyr_ESTAQUEOVAU28_5,],
                                fold: "open",
                                title: "VAU28"});
var group_N2 = new ol.layer.Group({
                                layers: [lyr_ESTAQUEON2_4,],
                                fold: "open",
                                title: "N2"});
var group_N3 = new ol.layer.Group({
                                layers: [lyr_ESTAQUEON3_3,],
                                fold: "open",
                                title: "N3"});
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
var group_Baslica = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Basílica"});
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
var group_Lote2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote2"});
var group_OpenStreetMap = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,],
                                fold: "open",
                                title: "OpenStreetMap"});
var group_MPAADEUBICACN = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "MPAA DE UBICACÓN"});

lyr_OSMStandard_0.setVisible(true);lyr_postesExistentesLote2_1.setVisible(true);lyr_PostacinfichasL22808_2.setVisible(true);lyr_ESTAQUEON3_3.setVisible(true);lyr_ESTAQUEON2_4.setVisible(true);lyr_ESTAQUEOVAU28_5.setVisible(true);lyr_ESTAQUEOVAU25_6.setVisible(true);lyr_ESTAQUEOVAU24TRAMO2_7.setVisible(true);lyr_ESTAQUEOVAU24TRAMO1_8.setVisible(true);lyr_EstaqueoVAU14_9.setVisible(true);lyr_EstaqueoVAU12_10.setVisible(true);lyr_EstaqueoVAU11_11.setVisible(true);lyr_EstaqueoVAU5_12.setVisible(true);lyr_EstaqueadoVAU1_13.setVisible(true);lyr_estaqueadoFDM2_14.setVisible(true);lyr_estaqueado_15.setVisible(true);lyr_MT240L2Subterrneo_16.setVisible(true);lyr_BT3x701x501x25_17.setVisible(true);lyr_MT3x70L2_18.setVisible(true);lyr_MT3x185L2_19.setVisible(true);lyr_MT3x35L2_20.setVisible(true);
var layersList = [group_OpenStreetMap,group_LOTE2,group_N3,group_N2,group_VAU28,group_VAU25,group_VAU24,group_VAU14,group_VAU12,group_VAU11,group_VAU5,group_VAU1,group_FDM2,group_FDM1,lyr_MT240L2Subterrneo_16,lyr_BT3x701x501x25_17,lyr_MT3x70L2_18,lyr_MT3x185L2_19,lyr_MT3x35L2_20];
lyr_postesExistentesLote2_1.set('fieldAliases', {'Nro. De So': 'Nro. De So', 'Tipo de Po': 'Tipo de Po', 'Coord.X': 'Coord.X', 'Coord. Y': 'Coord. Y', 'X': 'X', 'y': 'y', 'xx': 'xx', 'yy': 'yy', });
lyr_PostacinfichasL22808_2.set('fieldAliases', {'Alimentado': 'Alimentado', 'Nro de Sos': 'Nro de Sos', 'tipo/poste': 'tipo/poste', 'Coord. X.': 'Coord. X.', 'Coord. Y': 'Coord. Y', 'X': 'X', });
lyr_ESTAQUEON3_3.set('fieldAliases', {'id': 'id', });
lyr_ESTAQUEON2_4.set('fieldAliases', {'id': 'id', });
lyr_ESTAQUEOVAU28_5.set('fieldAliases', {'id': 'id', });
lyr_ESTAQUEOVAU25_6.set('fieldAliases', {'id': 'id', });
lyr_ESTAQUEOVAU24TRAMO2_7.set('fieldAliases', {'id': 'id', });
lyr_ESTAQUEOVAU24TRAMO1_8.set('fieldAliases', {'id': 'id', });
lyr_EstaqueoVAU14_9.set('fieldAliases', {'id': 'id', });
lyr_EstaqueoVAU12_10.set('fieldAliases', {'id': 'id', });
lyr_EstaqueoVAU11_11.set('fieldAliases', {'id': 'id', });
lyr_EstaqueoVAU5_12.set('fieldAliases', {'id': 'id', });
lyr_EstaqueadoVAU1_13.set('fieldAliases', {'id': 'id', });
lyr_estaqueadoFDM2_14.set('fieldAliases', {'id': 'id', });
lyr_estaqueado_15.set('fieldAliases', {'TRAMO': 'TRAMO', });
lyr_MT240L2Subterrneo_16.set('fieldAliases', {'Fecha': 'Fecha', 'Inicio-Fin': 'Inicio-Fin', 'Longitud': 'Longitud', 'corte': 'corte', 'ítem': 'ítem', 'Alimentado': 'Alimentado', });
lyr_BT3x701x501x25_17.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'ALIMENT': 'ALIMENT', 'CORTE': 'CORTE', 'ÍTEM': 'ÍTEM', });
lyr_MT3x70L2_18.set('fieldAliases', {'INICIO-FIN': 'INICIO-FIN', 'FECHA': 'FECHA', 'LONGITUD': 'LONGITUD', 'Aliment.': 'Aliment.', 'ítem': 'ítem', 'corte': 'corte', });
lyr_MT3x185L2_19.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'Corte': 'Corte', 'ALIMEN': 'ALIMEN', 'ÍTEM': 'ÍTEM', });
lyr_MT3x35L2_20.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'Alimentado': 'Alimentado', 'ítem': 'ítem', 'corte': 'corte', });
lyr_postesExistentesLote2_1.set('fieldImages', {'Nro. De So': 'TextEdit', 'Tipo de Po': 'TextEdit', 'Coord.X': 'TextEdit', 'Coord. Y': 'TextEdit', 'X': 'TextEdit', 'y': 'TextEdit', 'xx': 'TextEdit', 'yy': 'TextEdit', });
lyr_PostacinfichasL22808_2.set('fieldImages', {'Alimentado': 'TextEdit', 'Nro de Sos': 'TextEdit', 'tipo/poste': 'TextEdit', 'Coord. X.': 'TextEdit', 'Coord. Y': 'TextEdit', 'X': 'TextEdit', });
lyr_ESTAQUEON3_3.set('fieldImages', {'id': 'TextEdit', });
lyr_ESTAQUEON2_4.set('fieldImages', {'id': 'TextEdit', });
lyr_ESTAQUEOVAU28_5.set('fieldImages', {'id': 'TextEdit', });
lyr_ESTAQUEOVAU25_6.set('fieldImages', {'id': 'TextEdit', });
lyr_ESTAQUEOVAU24TRAMO2_7.set('fieldImages', {'id': 'TextEdit', });
lyr_ESTAQUEOVAU24TRAMO1_8.set('fieldImages', {'id': 'TextEdit', });
lyr_EstaqueoVAU14_9.set('fieldImages', {'id': 'TextEdit', });
lyr_EstaqueoVAU12_10.set('fieldImages', {'id': 'TextEdit', });
lyr_EstaqueoVAU11_11.set('fieldImages', {'id': 'TextEdit', });
lyr_EstaqueoVAU5_12.set('fieldImages', {'id': 'TextEdit', });
lyr_EstaqueadoVAU1_13.set('fieldImages', {'id': 'TextEdit', });
lyr_estaqueadoFDM2_14.set('fieldImages', {'id': 'TextEdit', });
lyr_estaqueado_15.set('fieldImages', {'TRAMO': 'TextEdit', });
lyr_MT240L2Subterrneo_16.set('fieldImages', {'Fecha': 'TextEdit', 'Inicio-Fin': 'TextEdit', 'Longitud': 'TextEdit', 'corte': '', 'ítem': '', 'Alimentado': '', });
lyr_BT3x701x501x25_17.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALIMENT': 'TextEdit', 'CORTE': 'TextEdit', 'ÍTEM': 'TextEdit', });
lyr_MT3x70L2_18.set('fieldImages', {'INICIO-FIN': 'TextEdit', 'FECHA': 'TextEdit', 'LONGITUD': 'TextEdit', 'Aliment.': '', 'ítem': '', 'corte': '', });
lyr_MT3x185L2_19.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Corte': 'TextEdit', 'ALIMEN': 'TextEdit', 'ÍTEM': 'TextEdit', });
lyr_MT3x35L2_20.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Alimentado': 'TextEdit', 'ítem': 'TextEdit', 'corte': 'TextEdit', });
lyr_postesExistentesLote2_1.set('fieldLabels', {'Nro. De So': 'inline label - visible with data', 'Tipo de Po': 'inline label - visible with data', 'Coord.X': 'inline label - visible with data', 'Coord. Y': 'inline label - visible with data', 'X': 'inline label - visible with data', 'y': 'inline label - visible with data', 'xx': 'inline label - visible with data', 'yy': 'inline label - visible with data', });
lyr_PostacinfichasL22808_2.set('fieldLabels', {'Alimentado': 'inline label - visible with data', 'Nro de Sos': 'inline label - visible with data', 'tipo/poste': 'inline label - visible with data', 'Coord. X.': 'inline label - visible with data', 'Coord. Y': 'inline label - visible with data', 'X': 'inline label - visible with data', });
lyr_ESTAQUEON3_3.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_ESTAQUEON2_4.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_ESTAQUEOVAU28_5.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_ESTAQUEOVAU25_6.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_ESTAQUEOVAU24TRAMO2_7.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_ESTAQUEOVAU24TRAMO1_8.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_EstaqueoVAU14_9.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_EstaqueoVAU12_10.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_EstaqueoVAU11_11.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_EstaqueoVAU5_12.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_EstaqueadoVAU1_13.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_estaqueadoFDM2_14.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_estaqueado_15.set('fieldLabels', {'TRAMO': 'inline label - always visible', });
lyr_MT240L2Subterrneo_16.set('fieldLabels', {'Fecha': 'inline label - visible with data', 'Inicio-Fin': 'inline label - visible with data', 'Longitud': 'inline label - visible with data', 'corte': 'inline label - visible with data', 'ítem': 'inline label - visible with data', 'Alimentado': 'inline label - visible with data', });
lyr_BT3x701x501x25_17.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'ALIMENT': 'inline label - visible with data', 'CORTE': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', });
lyr_MT3x70L2_18.set('fieldLabels', {'INICIO-FIN': 'inline label - visible with data', 'FECHA': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'Aliment.': 'inline label - visible with data', 'ítem': 'inline label - visible with data', 'corte': 'inline label - visible with data', });
lyr_MT3x185L2_19.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'Corte': 'inline label - visible with data', 'ALIMEN': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', });
lyr_MT3x35L2_20.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'Alimentado': 'inline label - visible with data', 'ítem': 'inline label - visible with data', 'corte': 'inline label - visible with data', });
lyr_MT3x35L2_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});