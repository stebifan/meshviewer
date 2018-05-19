module.exports = function () {
  return {
    // Variables are NODE_ID and NODE_NAME (only a-z0-9\- other chars are replaced with _)
    'nodeInfos': [
      {
        'name': 'Clientstatistik',
        'href': 'https://statistik.freifunk-troisdorf.de/render/d-solo/oUBqc1Wmk/nodes?orgId=1&var-hostname={NODE_NAME}&refresh=10s&panelId=2&theme=light&width=1000&height=500&tz=UTC%2B02%3A00',
        'image': 'https://statistik.freifunk-troisdorf.de/render/d-solo/oUBqc1Wmk/nodes?orgId=1&var-hostname={NODE_NAME}&refresh=10s&panelId=2&theme=light&width=1000&height=500&tz=UTC%2B02%3A00',
        'title': 'Knoten {NODE_ID} - weiteren Statistiken'
      },
      {
        'name': 'Traffic',
        'href': 'https://statistik.freifunk-troisdorf.de/render/d-solo/oUBqc1Wmk/nodes?orgId=1&var-hostname={NODE_NAME}&refresh=10s&panelId=3&theme=light&width=1000&height=500&tz=UTC%2B02%3A00',
        'image': 'https://statistik.freifunk-troisdorf.de/render/d-solo/oUBqc1Wmk/nodes?orgId=1&var-hostname={NODE_NAME}&refresh=10s&panelId=3&theme=light&width=1000&height=500&tz=UTC%2B02%3A00',
        'title': 'Knoten {NODE_ID} - weiteren Statistiken'
      }
    ],
    // Array of data provider are supported
    'dataPath': [
      'https://tst.hoffmann-hosting.de/data/'
    ],
    'siteName': 'TST Besucher Map',
    'mapLayers': [
      {
        'name': 'Freifunk Regensburg',
        // Please ask Freifunk Regensburg before using its tile server c- example with retina tiles
        'url': 'https://{s}.tiles.ffrgb.net/{z}/{x}/{y}{retina}.png',
        'config': {
          'maxZoom': 20,
          'subdomains': '1234',
          'attribution': '<a href="http://www.openmaptiles.org/" target="_blank">&copy; OpenMapTiles</a> <a href="http://www.openstreetmap.org/about/" target="_blank">&copy; OpenStreetMap contributors</a>',
          'start': 6
        }
      },
      {
        'name': 'Freifunk Regensburg Night',
        // Please ask Freifunk Regensburg before using its tile server - example with retina and dark tiles
        'url': 'https://{s}.tiles.ffrgb.net/n/{z}/{x}/{y}{retina}.png',
        'config': {
          'maxZoom': 20,
          'subdomains': '1234',
          'attribution': ' <a href="http://www.openmaptiles.org/" target="_blank">&copy; OpenMapTiles</a> <a href="http://www.openstreetmap.org/about/" target="_blank">&copy; OpenStreetMap contributors</a>',
          'mode': 'night',
          'start': 23,
          'end': 7
        }
      },
      {
        'name': 'OpenStreetMap.HOT',
        'url': 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        'config': {
          'maxZoom': 19,
          'attribution': '&copy; Openstreetmap France | &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }
      },
      {
        'name': 'HERE',
        // Please use your own API key - Free plan is on right side after the pay plans
        'url': 'https://{s}.base.maps.api.here.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png8?app_id=YOUR_KEY&app_code=YOUR_CODE&lg=deu',
        'config': {
          'attribution': 'Map &copy; 1987-2014 <a href="http://developer.here.com">HERE</a>',
          'subdomains': '1234',
          'maxZoom': 20
        }
      },
      {
        'name': 'Esri.WorldImagery',
        'url': '//server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        'config': {
          'maxZoom': 20,
          'attribution': 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        }
      },
      {
        'name': 'HERE.hybridDay',
        // Please use your own API key - Free plan is on right side after the pay plans
        'url': 'https://{s}.aerial.maps.api.here.com/maptile/2.1/maptile/newest/{variant}/{z}/{x}/{y}/256/png8?app_id=YOUR_KEY&app_code=YOUR_CODE&lg=deu',
        'config': {
          'attribution': 'Map &copy; 1987-2014 <a href="http://developer.here.com">HERE</a>',
          'subdomains': '1234',
          'variant': 'hybrid.day',
          'maxZoom': 20
        }
      }
    ],
    // Set a visible frame
    'fixedCenter': [
      // Northwest
      [
        50.8428,
        7.0367
      ],
      // Southeast
      [
        50.7768,
        7.1919
      ]
    ],
    'siteNames': [
      {
        'site': 'tdf',
        'name': 'Troisdorf All'
      },
      {
        'site': 'inn',
        'name': 'Innenstadt'
      },
      {
        'site': 'flu',
        'name': 'Soziale Einrichtungen'
      }
    ]
  };
};

