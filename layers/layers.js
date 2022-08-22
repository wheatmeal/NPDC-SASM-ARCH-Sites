ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2193").setExtent([1684118.860677, 5668920.398490, 1701510.540619, 5679143.723491]);
var wms_layers = [];


        var lyr_Base_0 = new ol.layer.Tile({
            'title': 'Base',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://basemaps.linz.govt.nz/v1/tiles/aerial/WebMercatorQuad/{z}/{x}/{y}.webp?api=c01g8wpr8xcnhy7ray2pctv8099'
            })
        });
var format_ArchaeologicalUnknownExtentBuffer200m_1 = new ol.format.GeoJSON();
var features_ArchaeologicalUnknownExtentBuffer200m_1 = format_ArchaeologicalUnknownExtentBuffer200m_1.readFeatures(json_ArchaeologicalUnknownExtentBuffer200m_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_ArchaeologicalUnknownExtentBuffer200m_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArchaeologicalUnknownExtentBuffer200m_1.addFeatures(features_ArchaeologicalUnknownExtentBuffer200m_1);
var lyr_ArchaeologicalUnknownExtentBuffer200m_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ArchaeologicalUnknownExtentBuffer200m_1,
maxResolution:12.730270223495241,
 
                style: style_ArchaeologicalUnknownExtentBuffer200m_1,
                interactive: true,
                title: '<img src="styles/legend/ArchaeologicalUnknownExtentBuffer200m_1.png" /> Archaeological Unknown Extent Buffer - 200m'
            });
var format_SASMUnknownExtentBuffer200m_2 = new ol.format.GeoJSON();
var features_SASMUnknownExtentBuffer200m_2 = format_SASMUnknownExtentBuffer200m_2.readFeatures(json_SASMUnknownExtentBuffer200m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_SASMUnknownExtentBuffer200m_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SASMUnknownExtentBuffer200m_2.addFeatures(features_SASMUnknownExtentBuffer200m_2);
var lyr_SASMUnknownExtentBuffer200m_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SASMUnknownExtentBuffer200m_2,
maxResolution:12.730270223495241,
 
                style: style_SASMUnknownExtentBuffer200m_2,
                interactive: true,
                title: '<img src="styles/legend/SASMUnknownExtentBuffer200m_2.png" /> SASM Unknown Extent Buffer - 200m'
            });
var format_50mBufferfromArchExtent_3 = new ol.format.GeoJSON();
var features_50mBufferfromArchExtent_3 = format_50mBufferfromArchExtent_3.readFeatures(json_50mBufferfromArchExtent_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_50mBufferfromArchExtent_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_50mBufferfromArchExtent_3.addFeatures(features_50mBufferfromArchExtent_3);
var lyr_50mBufferfromArchExtent_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_50mBufferfromArchExtent_3,
maxResolution:12.730270223495241,
 
                style: style_50mBufferfromArchExtent_3,
                interactive: true,
                title: '<img src="styles/legend/50mBufferfromArchExtent_3.png" /> 50m Buffer from Arch Extent'
            });
var format_50mBufferfromSASMExtent_4 = new ol.format.GeoJSON();
var features_50mBufferfromSASMExtent_4 = format_50mBufferfromSASMExtent_4.readFeatures(json_50mBufferfromSASMExtent_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_50mBufferfromSASMExtent_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_50mBufferfromSASMExtent_4.addFeatures(features_50mBufferfromSASMExtent_4);
var lyr_50mBufferfromSASMExtent_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_50mBufferfromSASMExtent_4,
maxResolution:12.730270223495241,
 
                style: style_50mBufferfromSASMExtent_4,
                interactive: true,
                title: '<img src="styles/legend/50mBufferfromSASMExtent_4.png" /> 50m Buffer from SASM Extent'
            });
var format_ArchaeologicalSiteExtent_5 = new ol.format.GeoJSON();
var features_ArchaeologicalSiteExtent_5 = format_ArchaeologicalSiteExtent_5.readFeatures(json_ArchaeologicalSiteExtent_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_ArchaeologicalSiteExtent_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArchaeologicalSiteExtent_5.addFeatures(features_ArchaeologicalSiteExtent_5);
var lyr_ArchaeologicalSiteExtent_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ArchaeologicalSiteExtent_5,
maxResolution:12.730270223495241,
 
                style: style_ArchaeologicalSiteExtent_5,
                interactive: true,
                title: '<img src="styles/legend/ArchaeologicalSiteExtent_5.png" /> Archaeological Site Extent'
            });
var format_SiteOfSignificanceToMaoriExtent_6 = new ol.format.GeoJSON();
var features_SiteOfSignificanceToMaoriExtent_6 = format_SiteOfSignificanceToMaoriExtent_6.readFeatures(json_SiteOfSignificanceToMaoriExtent_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_SiteOfSignificanceToMaoriExtent_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SiteOfSignificanceToMaoriExtent_6.addFeatures(features_SiteOfSignificanceToMaoriExtent_6);
var lyr_SiteOfSignificanceToMaoriExtent_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SiteOfSignificanceToMaoriExtent_6,
maxResolution:12.730270223495241,
 
                style: style_SiteOfSignificanceToMaoriExtent_6,
                interactive: true,
                title: '<img src="styles/legend/SiteOfSignificanceToMaoriExtent_6.png" /> Site Of Significance To Maori Extent'
            });
var format_ArchaeologicalSite_7 = new ol.format.GeoJSON();
var features_ArchaeologicalSite_7 = format_ArchaeologicalSite_7.readFeatures(json_ArchaeologicalSite_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_ArchaeologicalSite_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArchaeologicalSite_7.addFeatures(features_ArchaeologicalSite_7);
var lyr_ArchaeologicalSite_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ArchaeologicalSite_7,
maxResolution:12.730270223495241,
 
                style: style_ArchaeologicalSite_7,
                interactive: true,
                title: '<img src="styles/legend/ArchaeologicalSite_7.png" /> Archaeological Site'
            });
var format_SiteOfSignificanceToMaori_8 = new ol.format.GeoJSON();
var features_SiteOfSignificanceToMaori_8 = format_SiteOfSignificanceToMaori_8.readFeatures(json_SiteOfSignificanceToMaori_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_SiteOfSignificanceToMaori_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SiteOfSignificanceToMaori_8.addFeatures(features_SiteOfSignificanceToMaori_8);
var lyr_SiteOfSignificanceToMaori_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SiteOfSignificanceToMaori_8,
maxResolution:12.730270223495241,
 
                style: style_SiteOfSignificanceToMaori_8,
                interactive: true,
    title: 'Site Of Significance To Maori<br />\
    <img src="styles/legend/SiteOfSignificanceToMaori_8_0.png" /> Site of Significance to Maori<br />\
    <img src="styles/legend/SiteOfSignificanceToMaori_8_1.png" /> Site of Significance to Maori (Silent File)<br />'
        });

lyr_Base_0.setVisible(true);lyr_ArchaeologicalUnknownExtentBuffer200m_1.setVisible(true);lyr_SASMUnknownExtentBuffer200m_2.setVisible(true);lyr_50mBufferfromArchExtent_3.setVisible(true);lyr_50mBufferfromSASMExtent_4.setVisible(true);lyr_ArchaeologicalSiteExtent_5.setVisible(true);lyr_SiteOfSignificanceToMaoriExtent_6.setVisible(true);lyr_ArchaeologicalSite_7.setVisible(true);lyr_SiteOfSignificanceToMaori_8.setVisible(true);
var layersList = [lyr_Base_0,lyr_ArchaeologicalUnknownExtentBuffer200m_1,lyr_SASMUnknownExtentBuffer200m_2,lyr_50mBufferfromArchExtent_3,lyr_50mBufferfromSASMExtent_4,lyr_ArchaeologicalSiteExtent_5,lyr_SiteOfSignificanceToMaoriExtent_6,lyr_ArchaeologicalSite_7,lyr_SiteOfSignificanceToMaori_8];
lyr_ArchaeologicalUnknownExtentBuffer200m_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SiteID': 'SiteID', 'silent_file': 'silent_file', 'site_name': 'site_name', 'description': 'description', 'nz_archaeological_assoc_ref': 'nz_archaeological_assoc_ref', 'heritage_nz_reference': 'heritage_nz_reference', 'mana_whenua': 'mana_whenua', 'verified': 'verified', 'site_type': 'site_type', });
lyr_SASMUnknownExtentBuffer200m_2.set('fieldAliases', {});
lyr_50mBufferfromArchExtent_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SiteID': 'SiteID', 'silent_file': 'silent_file', 'site_name': 'site_name', 'description': 'description', 'nz_archaeological_assoc_ref': 'nz_archaeological_assoc_ref', 'heritage_nz_reference': 'heritage_nz_reference', 'mana_whenua': 'mana_whenua', 'verified': 'verified', 'site_type': 'site_type', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_50mBufferfromSASMExtent_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SiteID': 'SiteID', 'silent_file': 'silent_file', 'site_name': 'site_name', 'description': 'description', 'nz_archaeological_assoc_ref': 'nz_archaeological_assoc_ref', 'heritage_nz_reference': 'heritage_nz_reference', 'mana_whenua': 'mana_whenua', 'verified': 'verified', 'site_type': 'site_type', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_ArchaeologicalSiteExtent_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SiteID': 'Site ID', 'silent_file': 'Silent File', 'site_name': 'Site Name', 'description': 'Public Description', 'nz_archaeological_assoc_ref': 'NZ AA Reference', 'heritage_nz_reference': 'Heritage NZ Reference', 'mana_whenua': 'Mana Whenua', 'verified': 'Verified', 'site_type': 'Site Description', 'Shape__Area': 'Geometric Area', 'Shape__Length': 'Geometric Length', });
lyr_SiteOfSignificanceToMaoriExtent_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SiteID': 'Site ID', 'silent_file': 'Silent File', 'site_name': 'Site Name', 'description': 'Public Description', 'nz_archaeological_assoc_ref': 'NZ AA Reference', 'heritage_nz_reference': 'Heritage NZ Reference', 'mana_whenua': 'Mana Whenua', 'verified': 'Verified', 'site_type': 'Site Description', 'Shape__Area': 'Geometric Area', 'Shape__Length': 'Geometric Length', });
lyr_ArchaeologicalSite_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SiteID': 'Site ID', 'silent_file': 'Silent File', 'site_name': 'Site Name', 'description': 'Public Description', 'nz_archaeological_assoc_ref': 'NZ AA Reference', 'heritage_nz_reference': 'Heritage NZ Reference', 'mana_whenua': 'Mana Whenua', 'verified': 'Verified', 'site_type': 'Site Description', });
lyr_SiteOfSignificanceToMaori_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SiteID': 'Site ID', 'silent_file': 'Silent File', 'site_name': 'Site Name', 'description': 'Public Description', 'nz_archaeological_assoc_ref': 'NZAA Reference', 'heritage_nz_reference': 'Heritage NZ Reference', 'mana_whenua': 'Mana Whenua', 'verified': 'Verified', 'site_type': 'Site Description', });
lyr_ArchaeologicalUnknownExtentBuffer200m_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SiteID': 'Range', 'silent_file': 'TextEdit', 'site_name': 'TextEdit', 'description': 'TextEdit', 'nz_archaeological_assoc_ref': 'TextEdit', 'heritage_nz_reference': 'TextEdit', 'mana_whenua': 'TextEdit', 'verified': 'TextEdit', 'site_type': 'TextEdit', });
lyr_SASMUnknownExtentBuffer200m_2.set('fieldImages', {});
lyr_50mBufferfromArchExtent_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SiteID': 'Range', 'silent_file': 'TextEdit', 'site_name': 'TextEdit', 'description': 'TextEdit', 'nz_archaeological_assoc_ref': 'TextEdit', 'heritage_nz_reference': 'TextEdit', 'mana_whenua': 'TextEdit', 'verified': 'TextEdit', 'site_type': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_50mBufferfromSASMExtent_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'SiteID': 'Range', 'silent_file': 'TextEdit', 'site_name': 'TextEdit', 'description': 'TextEdit', 'nz_archaeological_assoc_ref': 'TextEdit', 'heritage_nz_reference': 'TextEdit', 'mana_whenua': 'TextEdit', 'verified': 'TextEdit', 'site_type': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_ArchaeologicalSiteExtent_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'SiteID': 'Range', 'silent_file': 'TextEdit', 'site_name': 'TextEdit', 'description': 'TextEdit', 'nz_archaeological_assoc_ref': 'TextEdit', 'heritage_nz_reference': 'TextEdit', 'mana_whenua': 'TextEdit', 'verified': 'TextEdit', 'site_type': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_SiteOfSignificanceToMaoriExtent_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'SiteID': 'Range', 'silent_file': 'TextEdit', 'site_name': 'TextEdit', 'description': 'TextEdit', 'nz_archaeological_assoc_ref': 'TextEdit', 'heritage_nz_reference': 'TextEdit', 'mana_whenua': 'TextEdit', 'verified': 'TextEdit', 'site_type': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_ArchaeologicalSite_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'SiteID': 'Range', 'silent_file': 'TextEdit', 'site_name': 'TextEdit', 'description': 'TextEdit', 'nz_archaeological_assoc_ref': 'TextEdit', 'heritage_nz_reference': 'TextEdit', 'mana_whenua': 'TextEdit', 'verified': 'TextEdit', 'site_type': 'TextEdit', });
lyr_SiteOfSignificanceToMaori_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'SiteID': 'Range', 'silent_file': 'TextEdit', 'site_name': 'TextEdit', 'description': 'TextEdit', 'nz_archaeological_assoc_ref': 'TextEdit', 'heritage_nz_reference': 'TextEdit', 'mana_whenua': 'TextEdit', 'verified': 'TextEdit', 'site_type': 'TextEdit', });
lyr_ArchaeologicalUnknownExtentBuffer200m_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'SiteID': 'no label', 'silent_file': 'no label', 'site_name': 'no label', 'description': 'no label', 'nz_archaeological_assoc_ref': 'no label', 'heritage_nz_reference': 'no label', 'mana_whenua': 'no label', 'verified': 'no label', 'site_type': 'no label', });
lyr_SASMUnknownExtentBuffer200m_2.set('fieldLabels', {});
lyr_50mBufferfromArchExtent_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'SiteID': 'no label', 'silent_file': 'no label', 'site_name': 'no label', 'description': 'no label', 'nz_archaeological_assoc_ref': 'no label', 'heritage_nz_reference': 'no label', 'mana_whenua': 'no label', 'verified': 'no label', 'site_type': 'no label', 'Shape__Area': 'no label', 'Shape__Length': 'no label', });
lyr_50mBufferfromSASMExtent_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'SiteID': 'no label', 'silent_file': 'no label', 'site_name': 'no label', 'description': 'no label', 'nz_archaeological_assoc_ref': 'no label', 'heritage_nz_reference': 'no label', 'mana_whenua': 'no label', 'verified': 'no label', 'site_type': 'no label', 'Shape__Area': 'no label', 'Shape__Length': 'no label', });
lyr_ArchaeologicalSiteExtent_5.set('fieldLabels', {'OBJECTID': 'inline label', 'SiteID': 'inline label', 'silent_file': 'inline label', 'site_name': 'inline label', 'description': 'inline label', 'nz_archaeological_assoc_ref': 'inline label', 'heritage_nz_reference': 'inline label', 'mana_whenua': 'inline label', 'verified': 'inline label', 'site_type': 'inline label', 'Shape__Area': 'inline label', 'Shape__Length': 'inline label', });
lyr_SiteOfSignificanceToMaoriExtent_6.set('fieldLabels', {'OBJECTID': 'inline label', 'SiteID': 'inline label', 'silent_file': 'inline label', 'site_name': 'inline label', 'description': 'inline label', 'nz_archaeological_assoc_ref': 'inline label', 'heritage_nz_reference': 'inline label', 'mana_whenua': 'inline label', 'verified': 'inline label', 'site_type': 'inline label', 'Shape__Area': 'inline label', 'Shape__Length': 'inline label', });
lyr_ArchaeologicalSite_7.set('fieldLabels', {'OBJECTID': 'inline label', 'SiteID': 'inline label', 'silent_file': 'inline label', 'site_name': 'inline label', 'description': 'inline label', 'nz_archaeological_assoc_ref': 'inline label', 'heritage_nz_reference': 'inline label', 'mana_whenua': 'inline label', 'verified': 'inline label', 'site_type': 'inline label', });
lyr_SiteOfSignificanceToMaori_8.set('fieldLabels', {'OBJECTID': 'inline label', 'SiteID': 'inline label', 'silent_file': 'inline label', 'site_name': 'inline label', 'description': 'inline label', 'nz_archaeological_assoc_ref': 'inline label', 'heritage_nz_reference': 'inline label', 'mana_whenua': 'inline label', 'verified': 'inline label', 'site_type': 'inline label', });
lyr_SiteOfSignificanceToMaori_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});