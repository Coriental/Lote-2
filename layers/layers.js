ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32721").setExtent([438817.127046, 7198489.081678, 449487.429320, 7204105.717203]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PDL2_2 = new ol.format.GeoJSON();
var features_PDL2_2 = format_PDL2_2.readFeatures(json_PDL2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PDL2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDL2_2.addFeatures(features_PDL2_2);
var lyr_PDL2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDL2_2, 
                style: style_PDL2_2,
                popuplayertitle: "PD.L2",
                interactive: true,
                title: '<img src="styles/legend/PDL2_2.png" /> PD.L2'
            });
var format_PDL2sist11022025_3 = new ol.format.GeoJSON();
var features_PDL2sist11022025_3 = format_PDL2sist11022025_3.readFeatures(json_PDL2sist11022025_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PDL2sist11022025_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDL2sist11022025_3.addFeatures(features_PDL2sist11022025_3);
var lyr_PDL2sist11022025_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDL2sist11022025_3, 
                style: style_PDL2sist11022025_3,
                popuplayertitle: "PD L2 sist 11-02-2025",
                interactive: true,
                title: '<img src="styles/legend/PDL2sist11022025_3.png" /> PD L2 sist 11-02-2025'
            });
var format_AP_4 = new ol.format.GeoJSON();
var features_AP_4 = format_AP_4.readFeatures(json_AP_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_AP_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AP_4.addFeatures(features_AP_4);
var lyr_AP_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AP_4, 
                style: style_AP_4,
                popuplayertitle: "AP",
                interactive: true,
                title: '<img src="styles/legend/AP_4.png" /> AP'
            });
var format_postesExistentesLote2_5 = new ol.format.GeoJSON();
var features_postesExistentesLote2_5 = format_postesExistentesLote2_5.readFeatures(json_postesExistentesLote2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_postesExistentesLote2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_postesExistentesLote2_5.addFeatures(features_postesExistentesLote2_5);
var lyr_postesExistentesLote2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_postesExistentesLote2_5, 
                style: style_postesExistentesLote2_5,
                popuplayertitle: "postes Existentes Lote 2",
                interactive: true,
                title: '<img src="styles/legend/postesExistentesLote2_5.png" /> postes Existentes Lote 2'
            });
var format_PostacinfichasL22808_6 = new ol.format.GeoJSON();
var features_PostacinfichasL22808_6 = format_PostacinfichasL22808_6.readFeatures(json_PostacinfichasL22808_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacinfichasL22808_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacinfichasL22808_6.addFeatures(features_PostacinfichasL22808_6);
var lyr_PostacinfichasL22808_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacinfichasL22808_6, 
                style: style_PostacinfichasL22808_6,
                popuplayertitle: "Postación fichas L2 28-08",
                interactive: true,
                title: '<img src="styles/legend/PostacinfichasL22808_6.png" /> Postación fichas L2 28-08'
            });
var format_PostacionL2Exist17122024_7 = new ol.format.GeoJSON();
var features_PostacionL2Exist17122024_7 = format_PostacionL2Exist17122024_7.readFeatures(json_PostacionL2Exist17122024_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionL2Exist17122024_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionL2Exist17122024_7.addFeatures(features_PostacionL2Exist17122024_7);
var lyr_PostacionL2Exist17122024_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionL2Exist17122024_7, 
                style: style_PostacionL2Exist17122024_7,
                popuplayertitle: "Postacion L2 Exist. 17-12-2024",
                interactive: true,
                title: '<img src="styles/legend/PostacionL2Exist17122024_7.png" /> Postacion L2 Exist. 17-12-2024'
            });
var format_PostacionSistL2Nuevo27012025_8 = new ol.format.GeoJSON();
var features_PostacionSistL2Nuevo27012025_8 = format_PostacionSistL2Nuevo27012025_8.readFeatures(json_PostacionSistL2Nuevo27012025_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionSistL2Nuevo27012025_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionSistL2Nuevo27012025_8.addFeatures(features_PostacionSistL2Nuevo27012025_8);
var lyr_PostacionSistL2Nuevo27012025_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionSistL2Nuevo27012025_8, 
                style: style_PostacionSistL2Nuevo27012025_8,
                popuplayertitle: "Postacion Sist L2 Nuevo 27-01-2025",
                interactive: true,
                title: '<img src="styles/legend/PostacionSistL2Nuevo27012025_8.png" /> Postacion Sist L2 Nuevo 27-01-2025'
            });
var format_MT240L2Subterrneo_9 = new ol.format.GeoJSON();
var features_MT240L2Subterrneo_9 = format_MT240L2Subterrneo_9.readFeatures(json_MT240L2Subterrneo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT240L2Subterrneo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT240L2Subterrneo_9.addFeatures(features_MT240L2Subterrneo_9);
var lyr_MT240L2Subterrneo_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT240L2Subterrneo_9, 
                style: style_MT240L2Subterrneo_9,
                popuplayertitle: "MT 240 L2 Subterráneo",
                interactive: true,
                title: '<img src="styles/legend/MT240L2Subterrneo_9.png" /> MT 240 L2 Subterráneo'
            });
var format_BT3x701x501x25_10 = new ol.format.GeoJSON();
var features_BT3x701x501x25_10 = format_BT3x701x501x25_10.readFeatures(json_BT3x701x501x25_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_BT3x701x501x25_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BT3x701x501x25_10.addFeatures(features_BT3x701x501x25_10);
var lyr_BT3x701x501x25_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BT3x701x501x25_10, 
                style: style_BT3x701x501x25_10,
                popuplayertitle: "BT 3x70+1x50+1x25",
                interactive: true,
                title: '<img src="styles/legend/BT3x701x501x25_10.png" /> BT 3x70+1x50+1x25'
            });
var format_MT3x35L2_11 = new ol.format.GeoJSON();
var features_MT3x35L2_11 = format_MT3x35L2_11.readFeatures(json_MT3x35L2_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x35L2_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x35L2_11.addFeatures(features_MT3x35L2_11);
var lyr_MT3x35L2_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x35L2_11, 
                style: style_MT3x35L2_11,
                popuplayertitle: "MT 3x35 L2",
                interactive: true,
                title: '<img src="styles/legend/MT3x35L2_11.png" /> MT 3x35 L2'
            });
var format_MT3x70L2_12 = new ol.format.GeoJSON();
var features_MT3x70L2_12 = format_MT3x70L2_12.readFeatures(json_MT3x70L2_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x70L2_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x70L2_12.addFeatures(features_MT3x70L2_12);
var lyr_MT3x70L2_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x70L2_12, 
                style: style_MT3x70L2_12,
                popuplayertitle: "MT 3x70 L2",
                interactive: true,
                title: '<img src="styles/legend/MT3x70L2_12.png" /> MT 3x70 L2'
            });
var format_MT3x185L2_13 = new ol.format.GeoJSON();
var features_MT3x185L2_13 = format_MT3x185L2_13.readFeatures(json_MT3x185L2_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x185L2_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x185L2_13.addFeatures(features_MT3x185L2_13);
var lyr_MT3x185L2_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x185L2_13, 
                style: style_MT3x185L2_13,
                popuplayertitle: "MT 3x185 L2",
                interactive: true,
                title: '<img src="styles/legend/MT3x185L2_13.png" /> MT 3x185 L2'
            });
var group_Lote1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 1"});
var group_Lote2 = new ol.layer.Group({
                                layers: [lyr_PDL2_2,lyr_PDL2sist11022025_3,],
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
var group_PRIORITARIO = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "PRIORITARIO"});
var group_LOTE1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 1"});
var group_LOTE2 = new ol.layer.Group({
                                layers: [lyr_postesExistentesLote2_5,lyr_PostacinfichasL22808_6,lyr_PostacionL2Exist17122024_7,lyr_PostacionSistL2Nuevo27012025_8,],
                                fold: "open",
                                title: "LOTE 2"});
var group_FDM1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "FDM1"});
var group_FDM2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "FDM2"});
var group_VAU1 = new ol.layer.Group({
                                layers: [],
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
                                layers: [],
                                fold: "open",
                                title: "VAU5"});
var group_VAU9 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU9"});
var group_VAU11 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU11"});
var group_VAU12 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU12"});
var group_VAU13 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU13"});
var group_VAU14 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU14"});
var group_VAU24 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU24"});
var group_VAU25 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU25"});
var group_VAU28 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU28"});
var group_N2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "N2"});
var group_N3 = new ol.layer.Group({
                                layers: [],
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
var group_Lote2 = new ol.layer.Group({
                                layers: [lyr_AP_4,],
                                fold: "open",
                                title: "Lote2"});
var group_lote5 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "lote 5"});
var group_OpenStreetMap = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "OpenStreetMap"});
var group_MPAADEUBICACN = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "MPAA DE UBICACÓN"});

lyr_GoogleHybrid_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_PDL2_2.setVisible(true);lyr_PDL2sist11022025_3.setVisible(true);lyr_AP_4.setVisible(true);lyr_postesExistentesLote2_5.setVisible(true);lyr_PostacinfichasL22808_6.setVisible(true);lyr_PostacionL2Exist17122024_7.setVisible(true);lyr_PostacionSistL2Nuevo27012025_8.setVisible(true);lyr_MT240L2Subterrneo_9.setVisible(true);lyr_BT3x701x501x25_10.setVisible(true);lyr_MT3x35L2_11.setVisible(true);lyr_MT3x70L2_12.setVisible(true);lyr_MT3x185L2_13.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OpenStreetMap_1,group_Lote2,group_LOTE2,lyr_MT240L2Subterrneo_9,lyr_BT3x701x501x25_10,lyr_MT3x35L2_11,lyr_MT3x70L2_12,lyr_MT3x185L2_13];
lyr_PDL2_2.set('fieldAliases', {'Item': 'Item', 'Certificado': 'Certificado', 'ESTADO': 'ESTADO', 'Contratista': 'Contratista', 'Fecha de montaje': 'Fecha de montaje', 'CANTIDAD': 'CANTIDAD', 'Sigla PD': 'Sigla PD', 'OT N°': 'OT N°', 'Alimentador': 'Alimentador', 'Nro de Sosten': 'Nro de Sosten', 'Dirección': 'Dirección', 'Ciudad': 'Ciudad', 'Coordenada X': 'Coordenada X', 'Coordenada Y': 'Coordenada Y', 'N° Ande': 'N° Ande', 'N° Fabrica': 'N° Fabrica', 'Marca': 'Marca', 'Potencia': 'Potencia', 'Descargador': 'Descargador', 'Corriente Nominal': 'Corriente Nominal', 'Seccionador MT': 'Seccionador MT', 'Fusible Cartucho MT': 'Fusible Cartucho MT', 'Seccionador BT': 'Seccionador BT', 'Fusible NH': 'Fusible NH', 'SPAT (Ohm)': 'SPAT (Ohm)', 'Fecha en servicio': 'Fecha en servicio', 'Hora': 'Hora', });
lyr_PDL2sist11022025_3.set('fieldAliases', {'Fecha de inicio': 'Fecha de inicio', 'Tipo de Poste': 'Tipo de Poste', 'Numero de Sosten': 'Numero de Sosten', 'Alimentadores Lote 2': 'Alimentadores Lote 2', 'Nro de Fabrica del trafo': 'Nro de Fabrica del trafo', 'N�ANDE': 'N�ANDE', 'Longitud': 'Longitud', 'Latitud': 'Latitud', });
lyr_AP_4.set('fieldAliases', {'Fecha': 'Fecha', 'alimentador': 'alimentador', 'Nro de sosten': 'Nro de sosten', 'contratista': 'contratista', 'x': 'x', 'y': 'y', });
lyr_postesExistentesLote2_5.set('fieldAliases', {'Nro. De So': 'Nro. De So', 'Tipo de Po': 'Tipo de Po', 'Coord.X': 'Coord.X', 'Coord. Y': 'Coord. Y', 'X': 'X', 'y': 'y', 'xx': 'xx', 'yy': 'yy', });
lyr_PostacinfichasL22808_6.set('fieldAliases', {'Alimentado': 'Alimentado', 'Nro de Sos': 'Nro de Sos', 'tipo/poste': 'tipo/poste', 'Coord. X.': 'Coord. X.', 'Coord. Y': 'Coord. Y', 'X': 'X', 'Coord X': 'Coord X', 'Coord X.': 'Coord X.', 'Coord Y.': 'Coord Y.', 'Coor X': 'Coor X', 'Coor Y': 'Coor Y', });
lyr_PostacionL2Exist17122024_7.set('fieldAliases', {'Numero de Sosten': 'Numero de Sosten', 'Alimentadores Lote 2': 'Alimentadores Lote 2', 'Poste': 'Poste', 'Tipo de Poste': 'Tipo de Poste', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_PostacionSistL2Nuevo27012025_8.set('fieldAliases', {'Fecha de Postaci�n': 'Fecha de Postaci�n', 'Alimentadores Lote 2': 'Alimentadores Lote 2', 'Numero de Sosten': 'Numero de Sosten', 'Tipo de Poste': 'Tipo de Poste', 'N�mero de F�brica del Poste': 'N�mero de F�brica del Poste', 'Longitud': 'Longitud', 'Latitud': 'Latitud', });
lyr_MT240L2Subterrneo_9.set('fieldAliases', {'Fecha': 'Fecha', 'Inicio-Fin': 'Inicio-Fin', 'Longitud': 'Longitud', 'corte': 'corte', 'ítem': 'ítem', 'Alimentado': 'Alimentado', });
lyr_BT3x701x501x25_10.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'ALIMENT': 'ALIMENT', 'CORTE': 'CORTE', 'ÍTEM': 'ÍTEM', 'Inicio-F_1': 'Inicio-F_1', });
lyr_MT3x35L2_11.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'Alimentado': 'Alimentado', 'ítem': 'ítem', 'corte': 'corte', });
lyr_MT3x70L2_12.set('fieldAliases', {'INICIO-FIN': 'INICIO-FIN', 'FECHA': 'FECHA', 'LONGITUD': 'LONGITUD', 'Aliment.': 'Aliment.', 'ítem': 'ítem', 'corte': 'corte', });
lyr_MT3x185L2_13.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'Corte': 'Corte', 'ALIMEN': 'ALIMEN', 'ÍTEM': 'ÍTEM', });
lyr_PDL2_2.set('fieldImages', {'Item': 'TextEdit', 'Certificado': 'Range', 'ESTADO': 'TextEdit', 'Contratista': 'TextEdit', 'Fecha de montaje': 'TextEdit', 'CANTIDAD': 'CheckBox', 'Sigla PD': 'TextEdit', 'OT N°': 'TextEdit', 'Alimentador': 'TextEdit', 'Nro de Sosten': 'TextEdit', 'Dirección': 'TextEdit', 'Ciudad': 'TextEdit', 'Coordenada X': 'Range', 'Coordenada Y': 'Range', 'N° Ande': 'Range', 'N° Fabrica': 'Range', 'Marca': 'TextEdit', 'Potencia': 'Range', 'Descargador': 'TextEdit', 'Corriente Nominal': 'TextEdit', 'Seccionador MT': 'TextEdit', 'Fusible Cartucho MT': 'TextEdit', 'Seccionador BT': 'TextEdit', 'Fusible NH': 'TextEdit', 'SPAT (Ohm)': 'TextEdit', 'Fecha en servicio': 'TextEdit', 'Hora': 'DateTime', });
lyr_PDL2sist11022025_3.set('fieldImages', {'Fecha de inicio': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Alimentadores Lote 2': 'TextEdit', 'Nro de Fabrica del trafo': 'Range', 'N�ANDE': 'Range', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', });
lyr_AP_4.set('fieldImages', {'Fecha': 'TextEdit', 'alimentador': 'TextEdit', 'Nro de sosten': 'Range', 'contratista': 'TextEdit', 'x': 'Range', 'y': 'Range', });
lyr_postesExistentesLote2_5.set('fieldImages', {'Nro. De So': 'TextEdit', 'Tipo de Po': 'TextEdit', 'Coord.X': 'TextEdit', 'Coord. Y': 'TextEdit', 'X': 'TextEdit', 'y': 'TextEdit', 'xx': 'TextEdit', 'yy': 'TextEdit', });
lyr_PostacinfichasL22808_6.set('fieldImages', {'Alimentado': 'TextEdit', 'Nro de Sos': 'TextEdit', 'tipo/poste': 'TextEdit', 'Coord. X.': 'TextEdit', 'Coord. Y': 'TextEdit', 'X': 'TextEdit', 'Coord X': 'TextEdit', 'Coord X.': 'TextEdit', 'Coord Y.': 'TextEdit', 'Coor X': 'TextEdit', 'Coor Y': 'TextEdit', });
lyr_PostacionL2Exist17122024_7.set('fieldImages', {'Numero de Sosten': 'TextEdit', 'Alimentadores Lote 2': 'TextEdit', 'Poste': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_PostacionSistL2Nuevo27012025_8.set('fieldImages', {'Fecha de Postaci�n': 'TextEdit', 'Alimentadores Lote 2': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'N�mero de F�brica del Poste': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', });
lyr_MT240L2Subterrneo_9.set('fieldImages', {'Fecha': 'TextEdit', 'Inicio-Fin': 'TextEdit', 'Longitud': 'TextEdit', 'corte': 'TextEdit', 'ítem': 'TextEdit', 'Alimentado': 'TextEdit', });
lyr_BT3x701x501x25_10.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALIMENT': 'TextEdit', 'CORTE': 'TextEdit', 'ÍTEM': 'TextEdit', 'Inicio-F_1': '', });
lyr_MT3x35L2_11.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Alimentado': 'TextEdit', 'ítem': 'TextEdit', 'corte': 'TextEdit', });
lyr_MT3x70L2_12.set('fieldImages', {'INICIO-FIN': 'TextEdit', 'FECHA': 'TextEdit', 'LONGITUD': 'TextEdit', 'Aliment.': 'TextEdit', 'ítem': 'TextEdit', 'corte': 'TextEdit', });
lyr_MT3x185L2_13.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'Corte': 'TextEdit', 'ALIMEN': 'TextEdit', 'ÍTEM': 'TextEdit', });
lyr_PDL2_2.set('fieldLabels', {'Item': 'no label', 'Certificado': 'no label', 'ESTADO': 'no label', 'Contratista': 'no label', 'Fecha de montaje': 'no label', 'CANTIDAD': 'no label', 'Sigla PD': 'no label', 'OT N°': 'no label', 'Alimentador': 'no label', 'Nro de Sosten': 'no label', 'Dirección': 'no label', 'Ciudad': 'no label', 'Coordenada X': 'no label', 'Coordenada Y': 'no label', 'N° Ande': 'no label', 'N° Fabrica': 'no label', 'Marca': 'no label', 'Potencia': 'no label', 'Descargador': 'no label', 'Corriente Nominal': 'no label', 'Seccionador MT': 'no label', 'Fusible Cartucho MT': 'no label', 'Seccionador BT': 'no label', 'Fusible NH': 'no label', 'SPAT (Ohm)': 'no label', 'Fecha en servicio': 'no label', 'Hora': 'no label', });
lyr_PDL2sist11022025_3.set('fieldLabels', {'Fecha de inicio': 'no label', 'Tipo de Poste': 'no label', 'Numero de Sosten': 'no label', 'Alimentadores Lote 2': 'no label', 'Nro de Fabrica del trafo': 'no label', 'N�ANDE': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', });
lyr_AP_4.set('fieldLabels', {'Fecha': 'inline label - visible with data', 'alimentador': 'inline label - visible with data', 'Nro de sosten': 'inline label - visible with data', 'contratista': 'inline label - visible with data', 'x': 'inline label - visible with data', 'y': 'inline label - visible with data', });
lyr_postesExistentesLote2_5.set('fieldLabels', {'Nro. De So': 'inline label - visible with data', 'Tipo de Po': 'inline label - visible with data', 'Coord.X': 'inline label - visible with data', 'Coord. Y': 'inline label - visible with data', 'X': 'inline label - visible with data', 'y': 'inline label - visible with data', 'xx': 'inline label - visible with data', 'yy': 'inline label - visible with data', });
lyr_PostacinfichasL22808_6.set('fieldLabels', {'Alimentado': 'inline label - visible with data', 'Nro de Sos': 'inline label - visible with data', 'tipo/poste': 'inline label - visible with data', 'Coord. X.': 'inline label - visible with data', 'Coord. Y': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Coord X': 'no label', 'Coord X.': 'no label', 'Coord Y.': 'no label', 'Coor X': 'no label', 'Coor Y': 'no label', });
lyr_PostacionL2Exist17122024_7.set('fieldLabels', {'Numero de Sosten': 'no label', 'Alimentadores Lote 2': 'no label', 'Poste': 'no label', 'Tipo de Poste': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', });
lyr_PostacionSistL2Nuevo27012025_8.set('fieldLabels', {'Fecha de Postaci�n': 'no label', 'Alimentadores Lote 2': 'no label', 'Numero de Sosten': 'no label', 'Tipo de Poste': 'no label', 'N�mero de F�brica del Poste': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', });
lyr_MT240L2Subterrneo_9.set('fieldLabels', {'Fecha': 'inline label - visible with data', 'Inicio-Fin': 'inline label - visible with data', 'Longitud': 'inline label - visible with data', 'corte': 'inline label - visible with data', 'ítem': 'inline label - visible with data', 'Alimentado': 'inline label - visible with data', });
lyr_BT3x701x501x25_10.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'ALIMENT': 'inline label - visible with data', 'CORTE': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', 'Inicio-F_1': 'no label', });
lyr_MT3x35L2_11.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'Alimentado': 'inline label - visible with data', 'ítem': 'inline label - visible with data', 'corte': 'inline label - visible with data', });
lyr_MT3x70L2_12.set('fieldLabels', {'INICIO-FIN': 'inline label - visible with data', 'FECHA': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'Aliment.': 'inline label - visible with data', 'ítem': 'inline label - visible with data', 'corte': 'inline label - visible with data', });
lyr_MT3x185L2_13.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'Corte': 'inline label - visible with data', 'ALIMEN': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', });
lyr_MT3x185L2_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});