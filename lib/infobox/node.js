define(['sorttable', 'snabbdom', 'd3-interpolate', 'moment', 'helper', 'utils/node'],
  function (SortTable, V, d3Interpolate, moment, helper, nodef) {
    'use strict';
    V = V.default;

    function showStatImg(o, d) {
      var subst = {
        '{NODE_ID}': d.node_id,
        '{NODE_NAME}': d.hostname.replace(/[^a-z0-9\-]/ig, '_'),
        '{TIME}': d.lastseen.format('DDMMYYYYHmmss'),
        '{LOCALE}': _.locale()
      };
      return helper.showStat(V, o, subst);
    }

    return function (el, d, linkScale, nodeDict) {
      function nodeLink(node) {
        return V.h('a', {
          props: {
            className: node.is_online ? 'online' : 'offline',
            href: router.generateLink({ node: node.node_id })
          }, on: {
            click: function (e) {
              router.fullUrl({ node: node.node_id }, e);
            }
          }
        }, node.hostname);
      }

      function nodeIdLink(nodeId) {
        if (nodeDict[nodeId]) {
          return nodeLink(nodeDict[nodeId]);
        }
        return nodeId;
      }

      function showGateway(node) {
        var gatewayCols = [
          V.h('span', [
            nodeIdLink(node.gateway_nexthop),
            V.h('br'),
            _.t('node.nexthop')
          ]),
          V.h('span', { props: { className: 'ion-arrow-right-c' } }),
          V.h('span', [
            nodeIdLink(node.gateway),
            V.h('br'),
            'IPv4'
          ])
        ];

        if (node.gateway6 !== undefined) {
          gatewayCols.push(V.h('span', [
            nodeIdLink(node.gateway6),
            V.h('br'),
            'IPv6'
          ]));
        }

        return V.h('td', { props: { className: 'gateway' } }, gatewayCols);
      }

        if (config.nodeInfos) {
          var img = [];
          config.nodeInfos.forEach(function (nodeInfo) {
            img.push(V.h('h4', nodeInfo.name));
            img.push(showStatImg(nodeInfo, d));
          });
          images = V.patch(images, V.h('div', img));
        }
      };

      self.setData = function setData(data) {
        if (data.nodeDict[d.node_id]) {
          d = data.nodeDict[d.node_id];
        }
        self.render();
      };
      return self;
    };
  });
