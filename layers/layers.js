ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32721").setExtent([443077.737512, 7198903.138277, 446808.760171, 7200868.302989]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_postesExistentesLote2_2 = new ol.format.GeoJSON();
var features_postesExistentesLote2_2 = format_postesExistentesLote2_2.readFeatures(json_postesExistentesLote2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_postesExistentesLote2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_postesExistentesLote2_2.addFeatures(features_postesExistentesLote2_2);
var lyr_postesExistentesLote2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_postesExistentesLote2_2, 
                style: style_postesExistentesLote2_2,
                popuplayertitle: 'postes Existentes Lote 2',
                interactive: true,
                title: '<img src="styles/legend/postesExistentesLote2_2.png" /> postes Existentes Lote 2'
            });
var format_PostacinfichasL22808_3 = new ol.format.GeoJSON();
var features_PostacinfichasL22808_3 = format_PostacinfichasL22808_3.readFeatures(json_PostacinfichasL22808_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacinfichasL22808_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacinfichasL22808_3.addFeatures(features_PostacinfichasL22808_3);
var lyr_PostacinfichasL22808_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacinfichasL22808_3, 
                style: style_PostacinfichasL22808_3,
                popuplayertitle: 'Postación fichas L2 28-08',
                interactive: true,
                title: '<img src="styles/legend/PostacinfichasL22808_3.png" /> Postación fichas L2 28-08'
            });
var format_PostacionSistL2Exist26082025_4 = new ol.format.GeoJSON();
var features_PostacionSistL2Exist26082025_4 = format_PostacionSistL2Exist26082025_4.readFeatures(json_PostacionSistL2Exist26082025_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionSistL2Exist26082025_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionSistL2Exist26082025_4.addFeatures(features_PostacionSistL2Exist26082025_4);
var lyr_PostacionSistL2Exist26082025_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionSistL2Exist26082025_4, 
                style: style_PostacionSistL2Exist26082025_4,
                popuplayertitle: 'Postacion Sist L2 Exist 26-08-2025',
                interactive: true,
                title: '<img src="styles/legend/PostacionSistL2Exist26082025_4.png" /> Postacion Sist L2 Exist 26-08-2025'
            });
var format_PostacionSistL2Nuevo26082025_5 = new ol.format.GeoJSON();
var features_PostacionSistL2Nuevo26082025_5 = format_PostacionSistL2Nuevo26082025_5.readFeatures(json_PostacionSistL2Nuevo26082025_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionSistL2Nuevo26082025_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionSistL2Nuevo26082025_5.addFeatures(features_PostacionSistL2Nuevo26082025_5);
var lyr_PostacionSistL2Nuevo26082025_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionSistL2Nuevo26082025_5, 
                style: style_PostacionSistL2Nuevo26082025_5,
                popuplayertitle: 'Postacion Sist L2 Nuevo 26-08-2025',
                interactive: true,
                title: '<img src="styles/legend/PostacionSistL2Nuevo26082025_5.png" /> Postacion Sist L2 Nuevo 26-08-2025'
            });
var format_PostacionL2Exist02112025_6 = new ol.format.GeoJSON();
var features_PostacionL2Exist02112025_6 = format_PostacionL2Exist02112025_6.readFeatures(json_PostacionL2Exist02112025_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionL2Exist02112025_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionL2Exist02112025_6.addFeatures(features_PostacionL2Exist02112025_6);
var lyr_PostacionL2Exist02112025_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionL2Exist02112025_6, 
                style: style_PostacionL2Exist02112025_6,
                popuplayertitle: 'Postacion L2 Exist 02-11-2025',
                interactive: true,
                title: '<img src="styles/legend/PostacionL2Exist02112025_6.png" /> Postacion L2 Exist 02-11-2025'
            });
var format_PostacionL2Nuevo02112025_7 = new ol.format.GeoJSON();
var features_PostacionL2Nuevo02112025_7 = format_PostacionL2Nuevo02112025_7.readFeatures(json_PostacionL2Nuevo02112025_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionL2Nuevo02112025_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionL2Nuevo02112025_7.addFeatures(features_PostacionL2Nuevo02112025_7);
var lyr_PostacionL2Nuevo02112025_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionL2Nuevo02112025_7, 
                style: style_PostacionL2Nuevo02112025_7,
                popuplayertitle: 'Postacion L2 Nuevo 02-11-2025',
                interactive: true,
                title: '<img src="styles/legend/PostacionL2Nuevo02112025_7.png" /> Postacion L2 Nuevo 02-11-2025'
            });
var format_MT240L2Subterrneo_8 = new ol.format.GeoJSON();
var features_MT240L2Subterrneo_8 = format_MT240L2Subterrneo_8.readFeatures(json_MT240L2Subterrneo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT240L2Subterrneo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT240L2Subterrneo_8.addFeatures(features_MT240L2Subterrneo_8);
var lyr_MT240L2Subterrneo_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT240L2Subterrneo_8, 
                style: style_MT240L2Subterrneo_8,
                popuplayertitle: 'MT 240 L2 Subterráneo',
                interactive: true,
                title: '<img src="styles/legend/MT240L2Subterrneo_8.png" /> MT 240 L2 Subterráneo'
            });
var format_BT3x701x501x25_9 = new ol.format.GeoJSON();
var features_BT3x701x501x25_9 = format_BT3x701x501x25_9.readFeatures(json_BT3x701x501x25_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_BT3x701x501x25_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BT3x701x501x25_9.addFeatures(features_BT3x701x501x25_9);
var lyr_BT3x701x501x25_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BT3x701x501x25_9, 
                style: style_BT3x701x501x25_9,
                popuplayertitle: 'BT 3x70+1x50+1x25',
                interactive: true,
                title: '<img src="styles/legend/BT3x701x501x25_9.png" /> BT 3x70+1x50+1x25'
            });
var format_MT3x35L2_10 = new ol.format.GeoJSON();
var features_MT3x35L2_10 = format_MT3x35L2_10.readFeatures(json_MT3x35L2_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x35L2_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x35L2_10.addFeatures(features_MT3x35L2_10);
var lyr_MT3x35L2_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x35L2_10, 
                style: style_MT3x35L2_10,
                popuplayertitle: 'MT 3x35 L2',
                interactive: true,
                title: '<img src="styles/legend/MT3x35L2_10.png" /> MT 3x35 L2'
            });
var format_MT3x70L2_11 = new ol.format.GeoJSON();
var features_MT3x70L2_11 = format_MT3x70L2_11.readFeatures(json_MT3x70L2_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x70L2_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x70L2_11.addFeatures(features_MT3x70L2_11);
var lyr_MT3x70L2_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x70L2_11, 
                style: style_MT3x70L2_11,
                popuplayertitle: 'MT 3x70 L2',
                interactive: true,
                title: '<img src="styles/legend/MT3x70L2_11.png" /> MT 3x70 L2'
            });
var format_MT3x185L2_12 = new ol.format.GeoJSON();
var features_MT3x185L2_12 = format_MT3x185L2_12.readFeatures(json_MT3x185L2_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x185L2_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x185L2_12.addFeatures(features_MT3x185L2_12);
var lyr_MT3x185L2_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x185L2_12, 
                style: style_MT3x185L2_12,
                popuplayertitle: 'MT 3x185 L2',
                interactive: true,
                title: '<img src="styles/legend/MT3x185L2_12.png" /> MT 3x185 L2'
            });
var format_PDL2_13 = new ol.format.GeoJSON();
var features_PDL2_13 = format_PDL2_13.readFeatures(json_PDL2_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PDL2_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDL2_13.addFeatures(features_PDL2_13);
var lyr_PDL2_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDL2_13, 
                style: style_PDL2_13,
                popuplayertitle: 'PD.L2',
                interactive: true,
                title: '<img src="styles/legend/PDL2_13.png" /> PD.L2'
            });
var format_FichaPDL2Sist02072025_14 = new ol.format.GeoJSON();
var features_FichaPDL2Sist02072025_14 = format_FichaPDL2Sist02072025_14.readFeatures(json_FichaPDL2Sist02072025_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_FichaPDL2Sist02072025_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FichaPDL2Sist02072025_14.addFeatures(features_FichaPDL2Sist02072025_14);
var lyr_FichaPDL2Sist02072025_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FichaPDL2Sist02072025_14, 
                style: style_FichaPDL2Sist02072025_14,
                popuplayertitle: 'Ficha PD L2 Sist 02-07-2025',
                interactive: true,
                title: '<img src="styles/legend/FichaPDL2Sist02072025_14.png" /> Ficha PD L2 Sist 02-07-2025'
            });
var format_PDL2sist2112025_15 = new ol.format.GeoJSON();
var features_PDL2sist2112025_15 = format_PDL2sist2112025_15.readFeatures(json_PDL2sist2112025_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PDL2sist2112025_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDL2sist2112025_15.addFeatures(features_PDL2sist2112025_15);
var lyr_PDL2sist2112025_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDL2sist2112025_15, 
                style: style_PDL2sist2112025_15,
                popuplayertitle: 'PD L2 sist 2-11-2025',
                interactive: true,
                title: '<img src="styles/legend/PDL2sist2112025_15.png" /> PD L2 sist 2-11-2025'
            });
var group_Lote1 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Lote 1'});
var group_Lote2 = new ol.layer.Group({
                                layers: [lyr_PDL2_13,lyr_FichaPDL2Sist02072025_14,lyr_PDL2sist2112025_15,],
                                fold: 'close',
                                title: 'Lote 2'});
var group_Lote3 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 3'});
var group_Lote4 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 4'});
var group_Lote5 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 5'});
var group_Lote6 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 6'});
var group_PRIORITARIO = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'PRIORITARIO'});
var group_Lote7 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 7'});
var group_Lote9 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 9'});
var group_Lote8 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 8'});
var group_Puntosdetrabajo = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Puntos de trabajo'});
var group_CIASANtraSradelaAsuncin = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'CIA S.A. - Ntra. Sra. de la Asunción'});
var group_Rutasazonasdetrabajo = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Rutas a zonas de trabajo'});
var group_LOTE1 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 1'});
var group_LOTE2 = new ol.layer.Group({
                                layers: [lyr_postesExistentesLote2_2,lyr_PostacinfichasL22808_3,lyr_PostacionSistL2Exist26082025_4,lyr_PostacionSistL2Nuevo26082025_5,lyr_PostacionL2Exist02112025_6,lyr_PostacionL2Nuevo02112025_7,],
                                fold: 'close',
                                title: 'LOTE 2'});
var group_FDM1 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'FDM1'});
var group_FDM2 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'FDM2'});
var group_FDM5 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'FDM5'});
var group_VAU1 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU1'});
var group_VAU2 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU2'});
var group_VAU3 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU3'});
var group_VAU5 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU5'});
var group_VAU9 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU9'});
var group_VAU11 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU11'});
var group_VAU12 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'VAU12'});
var group_VAU13 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU13'});
var group_VAU14 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU14'});
var group_VAU24 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU24'});
var group_VAU25 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'VAU25'});
var group_VAU28 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU28'});
var group_N2 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'N2'});
var group_N3 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'N3'});
var group_LOTE3 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 3'});
var group_LOTE4 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 4'});
var group_LOTE5 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 5'});
var group_Baslica = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Basílica'});
var group_LOTE6 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 6'});
var group_LOTE7 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 7'});
var group_LOTE8 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 8'});
var group_LOTE9 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 9'});
var group_Lote2 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote2'});
var group_lote5 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'lote 5'});
var group_OpenStreetMap = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'OpenStreetMap'});
var group_MPAADEUBICACN = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MPAA DE UBICACÓN'});

lyr_GoogleHybrid_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_postesExistentesLote2_2.setVisible(true);lyr_PostacinfichasL22808_3.setVisible(true);lyr_PostacionSistL2Exist26082025_4.setVisible(true);lyr_PostacionSistL2Nuevo26082025_5.setVisible(true);lyr_PostacionL2Exist02112025_6.setVisible(true);lyr_PostacionL2Nuevo02112025_7.setVisible(true);lyr_MT240L2Subterrneo_8.setVisible(true);lyr_BT3x701x501x25_9.setVisible(true);lyr_MT3x35L2_10.setVisible(true);lyr_MT3x70L2_11.setVisible(true);lyr_MT3x185L2_12.setVisible(true);lyr_PDL2_13.setVisible(true);lyr_FichaPDL2Sist02072025_14.setVisible(true);lyr_PDL2sist2112025_15.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OpenStreetMap_1,group_LOTE2,lyr_MT240L2Subterrneo_8,lyr_BT3x701x501x25_9,lyr_MT3x35L2_10,lyr_MT3x70L2_11,lyr_MT3x185L2_12,group_Lote2];
lyr_postesExistentesLote2_2.set('fieldAliases', {'Nro. De So': 'Nro. De So', 'Tipo de Po': 'Tipo de Po', 'Coord.X': 'Coord.X', 'Coord. Y': 'Coord. Y', 'X': 'X', 'y': 'y', 'xx': 'xx', 'yy': 'yy', });
lyr_PostacinfichasL22808_3.set('fieldAliases', {'Alimentado': 'Alimentado', 'Nro de Sos': 'Nro de Sos', 'tipo/poste': 'tipo/poste', 'Coord. X.': 'Coord. X.', 'Coord. Y': 'Coord. Y', 'X': 'X', 'Coord X': 'Coord X', 'Coord X.': 'Coord X.', 'Coord Y.': 'Coord Y.', 'Coor X': 'Coor X', 'Coor Y': 'Coor Y', });
lyr_PostacionSistL2Exist26082025_4.set('fieldAliases', {'#': '#', 'Alimentadores Lote 2': 'Alimentadores Lote 2', 'Numero de Sosten': 'Numero de Sosten', 'Tipo de Poste': 'Tipo de Poste', 'N�mero de F�brica del Poste': 'N�mero de F�brica del Poste', 'Longitud': 'Longitud', 'Latitud': 'Latitud', });
lyr_PostacionSistL2Nuevo26082025_5.set('fieldAliases', {'#': '#', 'Alimentadores Lote 2': 'Alimentadores Lote 2', 'Numero de Sosten': 'Numero de Sosten', 'Tipo de Poste': 'Tipo de Poste', 'N�mero de F�brica del Poste': 'N�mero de F�brica del Poste', 'Longitud': 'Longitud', 'Latitud': 'Latitud', });
lyr_PostacionL2Exist02112025_6.set('fieldAliases', {'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALIMENTADOR': 'ALIMENTADOR', 'NRO_SOSTEN': 'NRO_SOSTEN', 'TIPO_POSTE': 'TIPO_POSTE', });
lyr_PostacionL2Nuevo02112025_7.set('fieldAliases', {'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALIMENTADOR': 'ALIMENTADOR', 'NRO_SOSTEN': 'NRO_SOSTEN', 'TIPO_POSTE': 'TIPO_POSTE', });
lyr_MT240L2Subterrneo_8.set('fieldAliases', {'Fecha': 'Fecha', 'Inicio-Fin': 'Inicio-Fin', 'Longitud': 'Longitud', 'corte': 'corte', 'ítem': 'ítem', 'Alimentado': 'Alimentado', });
lyr_BT3x701x501x25_9.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'ALIMENT': 'ALIMENT', 'CORTE': 'CORTE', 'ÍTEM': 'ÍTEM', 'Inicio-F_1': 'Inicio-F_1', });
lyr_MT3x35L2_10.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'Alimentado': 'Alimentado', 'ítem': 'ítem', 'corte': 'corte', });
lyr_MT3x70L2_11.set('fieldAliases', {'INICIO-FIN': 'INICIO-FIN', 'FECHA': 'FECHA', 'LONGITUD': 'LONGITUD', 'Aliment.': 'Aliment.', 'ítem': 'ítem', 'corte': 'corte', });
lyr_MT3x185L2_12.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'Corte': 'Corte', 'ALIMEN': 'ALIMEN', 'ÍTEM': 'ÍTEM', });
lyr_PDL2_13.set('fieldAliases', {'Item': 'Item', 'Certificado': 'Certificado', 'ESTADO': 'ESTADO', 'Contratista': 'Contratista', 'Fecha de montaje': 'Fecha de montaje', 'CANTIDAD': 'CANTIDAD', 'Sigla PD': 'Sigla PD', 'OT N°': 'OT N°', 'Alimentador': 'Alimentador', 'Nro de Sosten': 'Nro de Sosten', 'Dirección': 'Dirección', 'Ciudad': 'Ciudad', 'Coordenada X': 'Coordenada X', 'Coordenada Y': 'Coordenada Y', 'N° Ande': 'N° Ande', 'N° Fabrica': 'N° Fabrica', 'Marca': 'Marca', 'Potencia': 'Potencia', 'Descargador': 'Descargador', 'Corriente Nominal': 'Corriente Nominal', 'Seccionador MT': 'Seccionador MT', 'Fusible Cartucho MT': 'Fusible Cartucho MT', 'Seccionador BT': 'Seccionador BT', 'Fusible NH': 'Fusible NH', 'SPAT (Ohm)': 'SPAT (Ohm)', 'Fecha en servicio': 'Fecha en servicio', 'Hora': 'Hora', });
lyr_FichaPDL2Sist02072025_14.set('fieldAliases', {'Tipo de Poste': 'Tipo de Poste', 'Numero de Sosten': 'Numero de Sosten', 'Alimentadores Lote 2': 'Alimentadores Lote 2', 'Nro de Fabrica del trafo': 'Nro de Fabrica del trafo', 'N�ANDE': 'N�ANDE', 'Longitud': 'Longitud', 'Latitud': 'Latitud', });
lyr_PDL2sist2112025_15.set('fieldAliases', {'Sigla PD': 'Sigla PD', 'OT N°': 'OT N°', 'Alimentador': 'Alimentador', 'Nro de Sosten': 'Nro de Sosten', 'LATITIUD': 'LATITIUD', 'Coordenada Y': 'Coordenada Y', 'N° Ande': 'N° Ande', });
lyr_postesExistentesLote2_2.set('fieldImages', {'Nro. De So': 'TextEdit', 'Tipo de Po': 'TextEdit', 'Coord.X': 'TextEdit', 'Coord. Y': 'TextEdit', 'X': 'TextEdit', 'y': 'TextEdit', 'xx': 'TextEdit', 'yy': 'TextEdit', });
lyr_PostacinfichasL22808_3.set('fieldImages', {'Alimentado': 'TextEdit', 'Nro de Sos': 'TextEdit', 'tipo/poste': 'TextEdit', 'Coord. X.': 'TextEdit', 'Coord. Y': 'TextEdit', 'X': 'TextEdit', 'Coord X': 'TextEdit', 'Coord X.': 'TextEdit', 'Coord Y.': 'TextEdit', 'Coor X': 'TextEdit', 'Coor Y': 'TextEdit', });
lyr_PostacionSistL2Exist26082025_4.set('fieldImages', {'#': 'Range', 'Alimentadores Lote 2': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'N�mero de F�brica del Poste': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', });
lyr_PostacionSistL2Nuevo26082025_5.set('fieldImages', {'#': 'Range', 'Alimentadores Lote 2': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'N�mero de F�brica del Poste': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', });
lyr_PostacionL2Exist02112025_6.set('fieldImages', {'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALIMENTADOR': 'TextEdit', 'NRO_SOSTEN': 'TextEdit', 'TIPO_POSTE': 'TextEdit', });
lyr_PostacionL2Nuevo02112025_7.set('fieldImages', {'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALIMENTADOR': 'TextEdit', 'NRO_SOSTEN': 'TextEdit', 'TIPO_POSTE': 'TextEdit', });
lyr_MT240L2Subterrneo_8.set('fieldImages', {'Fecha': 'TextEdit', 'Inicio-Fin': 'TextEdit', 'Longitud': 'TextEdit', 'corte': 'TextEdit', 'ítem': 'TextEdit', 'Alimentado': 'TextEdit', });
lyr_BT3x701x501x25_9.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALIMENT': 'TextEdit', 'CORTE': 'TextEdit', 'ÍTEM': 'TextEdit', 'Inicio-F_1': '', });
lyr_MT3x35L2_10.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Alimentado': 'TextEdit', 'ítem': 'TextEdit', 'corte': 'TextEdit', });
lyr_MT3x70L2_11.set('fieldImages', {'INICIO-FIN': 'TextEdit', 'FECHA': 'TextEdit', 'LONGITUD': 'TextEdit', 'Aliment.': 'TextEdit', 'ítem': 'TextEdit', 'corte': 'TextEdit', });
lyr_MT3x185L2_12.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Corte': 'TextEdit', 'ALIMEN': 'TextEdit', 'ÍTEM': 'TextEdit', });
lyr_PDL2_13.set('fieldImages', {'Item': 'TextEdit', 'Certificado': 'Range', 'ESTADO': 'TextEdit', 'Contratista': 'TextEdit', 'Fecha de montaje': 'TextEdit', 'CANTIDAD': 'CheckBox', 'Sigla PD': 'TextEdit', 'OT N°': 'TextEdit', 'Alimentador': 'TextEdit', 'Nro de Sosten': 'TextEdit', 'Dirección': 'TextEdit', 'Ciudad': 'TextEdit', 'Coordenada X': 'Range', 'Coordenada Y': 'Range', 'N° Ande': 'Range', 'N° Fabrica': 'Range', 'Marca': 'TextEdit', 'Potencia': 'Range', 'Descargador': 'TextEdit', 'Corriente Nominal': 'TextEdit', 'Seccionador MT': 'TextEdit', 'Fusible Cartucho MT': 'TextEdit', 'Seccionador BT': 'TextEdit', 'Fusible NH': 'TextEdit', 'SPAT (Ohm)': 'TextEdit', 'Fecha en servicio': 'TextEdit', 'Hora': 'DateTime', });
lyr_FichaPDL2Sist02072025_14.set('fieldImages', {'Tipo de Poste': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Alimentadores Lote 2': 'TextEdit', 'Nro de Fabrica del trafo': 'Range', 'N�ANDE': 'Range', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', });
lyr_PDL2sist2112025_15.set('fieldImages', {'Sigla PD': 'TextEdit', 'OT N°': 'TextEdit', 'Alimentador': 'TextEdit', 'Nro de Sosten': 'TextEdit', 'LATITIUD': 'TextEdit', 'Coordenada Y': 'TextEdit', 'N° Ande': 'Range', });
lyr_postesExistentesLote2_2.set('fieldLabels', {'Nro. De So': 'inline label - visible with data', 'Tipo de Po': 'inline label - visible with data', 'Coord.X': 'inline label - visible with data', 'Coord. Y': 'inline label - visible with data', 'X': 'inline label - visible with data', 'y': 'inline label - visible with data', 'xx': 'inline label - visible with data', 'yy': 'inline label - visible with data', });
lyr_PostacinfichasL22808_3.set('fieldLabels', {'Alimentado': 'inline label - visible with data', 'Nro de Sos': 'inline label - visible with data', 'tipo/poste': 'inline label - visible with data', 'Coord. X.': 'inline label - visible with data', 'Coord. Y': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Coord X': 'no label', 'Coord X.': 'no label', 'Coord Y.': 'no label', 'Coor X': 'no label', 'Coor Y': 'no label', });
lyr_PostacionSistL2Exist26082025_4.set('fieldLabels', {'#': 'no label', 'Alimentadores Lote 2': 'no label', 'Numero de Sosten': 'no label', 'Tipo de Poste': 'no label', 'N�mero de F�brica del Poste': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', });
lyr_PostacionSistL2Nuevo26082025_5.set('fieldLabels', {'#': 'no label', 'Alimentadores Lote 2': 'no label', 'Numero de Sosten': 'no label', 'Tipo de Poste': 'no label', 'N�mero de F�brica del Poste': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', });
lyr_PostacionL2Exist02112025_6.set('fieldLabels', {'LATITUD': 'no label', 'LONGITUD': 'no label', 'ALIMENTADOR': 'no label', 'NRO_SOSTEN': 'no label', 'TIPO_POSTE': 'no label', });
lyr_PostacionL2Nuevo02112025_7.set('fieldLabels', {'LATITUD': 'no label', 'LONGITUD': 'no label', 'ALIMENTADOR': 'no label', 'NRO_SOSTEN': 'no label', 'TIPO_POSTE': 'no label', });
lyr_MT240L2Subterrneo_8.set('fieldLabels', {'Fecha': 'inline label - visible with data', 'Inicio-Fin': 'inline label - visible with data', 'Longitud': 'inline label - visible with data', 'corte': 'inline label - visible with data', 'ítem': 'inline label - visible with data', 'Alimentado': 'inline label - visible with data', });
lyr_BT3x701x501x25_9.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'ALIMENT': 'inline label - visible with data', 'CORTE': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', 'Inicio-F_1': 'no label', });
lyr_MT3x35L2_10.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'Alimentado': 'inline label - visible with data', 'ítem': 'inline label - visible with data', 'corte': 'inline label - visible with data', });
lyr_MT3x70L2_11.set('fieldLabels', {'INICIO-FIN': 'inline label - visible with data', 'FECHA': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'Aliment.': 'inline label - visible with data', 'ítem': 'inline label - visible with data', 'corte': 'inline label - visible with data', });
lyr_MT3x185L2_12.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'Corte': 'inline label - visible with data', 'ALIMEN': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', });
lyr_PDL2_13.set('fieldLabels', {'Item': 'no label', 'Certificado': 'no label', 'ESTADO': 'no label', 'Contratista': 'no label', 'Fecha de montaje': 'no label', 'CANTIDAD': 'no label', 'Sigla PD': 'no label', 'OT N°': 'no label', 'Alimentador': 'no label', 'Nro de Sosten': 'no label', 'Dirección': 'no label', 'Ciudad': 'no label', 'Coordenada X': 'no label', 'Coordenada Y': 'no label', 'N° Ande': 'no label', 'N° Fabrica': 'no label', 'Marca': 'no label', 'Potencia': 'no label', 'Descargador': 'no label', 'Corriente Nominal': 'no label', 'Seccionador MT': 'no label', 'Fusible Cartucho MT': 'no label', 'Seccionador BT': 'no label', 'Fusible NH': 'no label', 'SPAT (Ohm)': 'no label', 'Fecha en servicio': 'no label', 'Hora': 'no label', });
lyr_FichaPDL2Sist02072025_14.set('fieldLabels', {'Tipo de Poste': 'no label', 'Numero de Sosten': 'no label', 'Alimentadores Lote 2': 'no label', 'Nro de Fabrica del trafo': 'no label', 'N�ANDE': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', });
lyr_PDL2sist2112025_15.set('fieldLabels', {'Sigla PD': 'no label', 'OT N°': 'no label', 'Alimentador': 'no label', 'Nro de Sosten': 'no label', 'LATITIUD': 'no label', 'Coordenada Y': 'no label', 'N° Ande': 'no label', });
lyr_PDL2sist2112025_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});