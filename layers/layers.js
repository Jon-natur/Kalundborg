var wms_layers = [];


    var projection_Ortofotoforrnyestetilgngelige_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_Ortofotoforrnyestetilgngelige_0 = projection_Ortofotoforrnyestetilgngelige_0.getExtent();
    var size_Ortofotoforrnyestetilgngelige_0 = ol.extent.getWidth(projectionExtent_Ortofotoforrnyestetilgngelige_0) / 256;
    var resolutions_Ortofotoforrnyestetilgngelige_0 = new Array(14);
    var matrixIds_Ortofotoforrnyestetilgngelige_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Ortofotoforrnyestetilgngelige_0[z] = size_Ortofotoforrnyestetilgngelige_0 / Math.pow(2, z);
        matrixIds_Ortofotoforrnyestetilgngelige_0[z] = z;
    }
    var lyr_Ortofotoforrnyestetilgngelige_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://services.datafordeler.dk/GeoDanmarkOrto/orto_foraar_wmts/1.0.0/wmts?username=STGGAEECCJ&password=een!oM8HJ7_!aCw6&SERVICE=WMTS&REQUEST=GetCapabilities",
                                attributions: ' ',
                                "layer": "orto_foraar_wmts",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_Ortofotoforrnyestetilgngelige_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Ortofotoforrnyestetilgngelige_0),
                resolutions: resolutions_Ortofotoforrnyestetilgngelige_0,
                matrixIds: matrixIds_Ortofotoforrnyestetilgngelige_0
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Ortofoto forår nyeste tilgængelige',
                            opacity: 1.0,
                            
                            
                          });

        var lyr_GoogleSatelithybrid_1 = new ol.layer.Tile({
            'title': 'Google Satelit hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_3ikkebesigitigetsidenmaj22_2 = new ol.format.GeoJSON();
var features_3ikkebesigitigetsidenmaj22_2 = format_3ikkebesigitigetsidenmaj22_2.readFeatures(json_3ikkebesigitigetsidenmaj22_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3ikkebesigitigetsidenmaj22_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3ikkebesigitigetsidenmaj22_2.addFeatures(features_3ikkebesigitigetsidenmaj22_2);
var lyr_3ikkebesigitigetsidenmaj22_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3ikkebesigitigetsidenmaj22_2, 
                style: style_3ikkebesigitigetsidenmaj22_2,
                popuplayertitle: '§3 ikke besigitiget siden maj 22',
                interactive: false,
                title: '<img src="styles/legend/3ikkebesigitigetsidenmaj22_2.png" /> §3 ikke besigitiget siden maj 22'
            });
var format_3ikkebesigitigetsidenmaj22_3 = new ol.format.GeoJSON();
var features_3ikkebesigitigetsidenmaj22_3 = format_3ikkebesigitigetsidenmaj22_3.readFeatures(json_3ikkebesigitigetsidenmaj22_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3ikkebesigitigetsidenmaj22_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3ikkebesigitigetsidenmaj22_3.addFeatures(features_3ikkebesigitigetsidenmaj22_3);
var lyr_3ikkebesigitigetsidenmaj22_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3ikkebesigitigetsidenmaj22_3, 
                style: style_3ikkebesigitigetsidenmaj22_3,
                popuplayertitle: '§3 ikke besigitiget siden maj 22',
                interactive: true,
                title: '<img src="styles/legend/3ikkebesigitigetsidenmaj22_3.png" /> §3 ikke besigitiget siden maj 22'
            });

lyr_Ortofotoforrnyestetilgngelige_0.setVisible(true);lyr_GoogleSatelithybrid_1.setVisible(true);lyr_3ikkebesigitigetsidenmaj22_2.setVisible(false);lyr_3ikkebesigitigetsidenmaj22_3.setVisible(true);
var layersList = [lyr_Ortofotoforrnyestetilgngelige_0,lyr_GoogleSatelithybrid_1,lyr_3ikkebesigitigetsidenmaj22_2,lyr_3ikkebesigitigetsidenmaj22_3];
lyr_3ikkebesigitigetsidenmaj22_2.set('fieldAliases', {'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Natyp_kode': 'Natyp_kode', 'Natyp_navn': 'Natyp_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Sagsbeh': 'Sagsbeh', 'Gl_sys_ref': 'Gl_sys_ref', 'Besig_dato': 'Besig_dato', 'Journalnr': 'Journalnr', 'Vedligehol': 'Vedligehol', 'Vedligeh_1': 'Vedligeh_1', 'GVD_renset': 'GVD_renset', 'GVD_rens_1': 'GVD_rens_1', 'GVD_dif_sc': 'GVD_dif_sc', 'GVD_dif__1': 'GVD_dif__1', 'Pheratic_r': 'Pheratic_r', 'Pheratic_1': 'Pheratic_1', 'layer': 'layer', 'path': 'path', 'RamID': 'RamID', });
lyr_3ikkebesigitigetsidenmaj22_3.set('fieldAliases', {'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Natyp_kode': 'Natyp_kode', 'Natyp_navn': 'Natyp_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Sagsbeh': 'Sagsbeh', 'Gl_sys_ref': 'Gl_sys_ref', 'Besig_dato': 'Besig_dato', 'Journalnr': 'Journalnr', 'Vedligehol': 'Vedligehol', 'Vedligeh_1': 'Vedligeh_1', 'GVD_renset': 'GVD_renset', 'GVD_rens_1': 'GVD_rens_1', 'GVD_dif_sc': 'GVD_dif_sc', 'GVD_dif__1': 'GVD_dif__1', 'Pheratic_r': 'Pheratic_r', 'Pheratic_1': 'Pheratic_1', 'layer': 'layer', 'path': 'path', 'RamID': 'RamID', });
lyr_3ikkebesigitigetsidenmaj22_2.set('fieldImages', {'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Natyp_kode': 'TextEdit', 'Natyp_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Sagsbeh': 'TextEdit', 'Gl_sys_ref': 'TextEdit', 'Besig_dato': 'TextEdit', 'Journalnr': 'TextEdit', 'Vedligehol': 'TextEdit', 'Vedligeh_1': 'TextEdit', 'GVD_renset': 'TextEdit', 'GVD_rens_1': 'TextEdit', 'GVD_dif_sc': 'TextEdit', 'GVD_dif__1': 'TextEdit', 'Pheratic_r': 'TextEdit', 'Pheratic_1': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'RamID': 'TextEdit', });
lyr_3ikkebesigitigetsidenmaj22_3.set('fieldImages', {'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Natyp_kode': 'TextEdit', 'Natyp_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Sagsbeh': 'TextEdit', 'Gl_sys_ref': 'TextEdit', 'Besig_dato': 'TextEdit', 'Journalnr': 'TextEdit', 'Vedligehol': 'TextEdit', 'Vedligeh_1': 'TextEdit', 'GVD_renset': 'TextEdit', 'GVD_rens_1': 'TextEdit', 'GVD_dif_sc': 'TextEdit', 'GVD_dif__1': 'TextEdit', 'Pheratic_r': 'TextEdit', 'Pheratic_1': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'RamID': 'TextEdit', });
lyr_3ikkebesigitigetsidenmaj22_2.set('fieldLabels', {'Temakode': 'hidden field', 'Temanavn': 'hidden field', 'Objekt_id': 'hidden field', 'Version_id': 'hidden field', 'Systid_fra': 'hidden field', 'Systid_til': 'hidden field', 'Oprettet': 'hidden field', 'Oprindkode': 'hidden field', 'Oprindelse': 'hidden field', 'Statuskode': 'hidden field', 'Status': 'hidden field', 'Off_kode': 'hidden field', 'Offentlig': 'hidden field', 'CVR_kode': 'hidden field', 'CVR_navn': 'hidden field', 'Bruger_id': 'hidden field', 'Link': 'hidden field', 'Shape_area': 'hidden field', 'Shape_leng': 'hidden field', 'Natyp_kode': 'hidden field', 'Natyp_navn': 'hidden field', 'Aendr_kode': 'hidden field', 'Aendrbegr': 'hidden field', 'Sagsbeh': 'hidden field', 'Gl_sys_ref': 'hidden field', 'Besig_dato': 'hidden field', 'Journalnr': 'hidden field', 'Vedligehol': 'hidden field', 'Vedligeh_1': 'hidden field', 'GVD_renset': 'hidden field', 'GVD_rens_1': 'hidden field', 'GVD_dif_sc': 'hidden field', 'GVD_dif__1': 'hidden field', 'Pheratic_r': 'hidden field', 'Pheratic_1': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'RamID': 'hidden field', });
lyr_3ikkebesigitigetsidenmaj22_3.set('fieldLabels', {'Temakode': 'hidden field', 'Temanavn': 'hidden field', 'Objekt_id': 'hidden field', 'Version_id': 'hidden field', 'Systid_fra': 'hidden field', 'Systid_til': 'hidden field', 'Oprettet': 'hidden field', 'Oprindkode': 'hidden field', 'Oprindelse': 'hidden field', 'Statuskode': 'hidden field', 'Status': 'hidden field', 'Off_kode': 'hidden field', 'Offentlig': 'hidden field', 'CVR_kode': 'hidden field', 'CVR_navn': 'hidden field', 'Bruger_id': 'hidden field', 'Link': 'hidden field', 'Shape_area': 'hidden field', 'Shape_leng': 'hidden field', 'Natyp_kode': 'hidden field', 'Natyp_navn': 'inline label - always visible', 'Aendr_kode': 'hidden field', 'Aendrbegr': 'hidden field', 'Sagsbeh': 'hidden field', 'Gl_sys_ref': 'hidden field', 'Besig_dato': 'hidden field', 'Journalnr': 'hidden field', 'Vedligehol': 'hidden field', 'Vedligeh_1': 'hidden field', 'GVD_renset': 'hidden field', 'GVD_rens_1': 'hidden field', 'GVD_dif_sc': 'hidden field', 'GVD_dif__1': 'hidden field', 'Pheratic_r': 'hidden field', 'Pheratic_1': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'RamID': 'inline label - always visible', });
lyr_3ikkebesigitigetsidenmaj22_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});