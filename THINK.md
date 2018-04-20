// 日志：ssid 的连接记录
const log = `
  0b:67:6d:e7:ba:a0 中关村
  0b:67:6d:e7:ba:a5 朝阳
  0b:67:6d:c4:c0:76 通州
  0b:67:6d:e7:ba:a5 朝阳
  0b:67:6d:e7:ce:4b 石景山
  0b:67:6d:e7:ba:a5 朝阳
  0b:67:6d:e7:ba:a1 中关村
  0b:67:6d:e7:ba:a6 朝阳
  0b:67:6d:c4:c0:76 通州
  0b:67:6d:e7:ce:4b 石景山
  0b:67:6d:e7:ba:ba 东城
  0b:67:6d:e7:bb:22 望京
  0b:67:6d:c4:c0:75 通州
  0b:67:6d:e7:ba:b9 东城
  0b:67:6d:e7:ba:ba 东城
  0b:67:6d:e7:bb:23 望京
  0b:67:6d:c4:c0:76 通州
  0b:67:6d:e7:be:42 丰台
  0b:67:6d:c4:bb:2e 西城
  0b:67:6d:e7:be:42 丰台
  0b:67:6d:c4:bb:2d 西城
  0b:67:6d:c4:c0:76 通州
`;

// 结果：不同位置的ssid连接次数汇总
const ret = {
  "朝阳": {
    "0b:67:6d:e7:ba:a5": 3,
    "0b:67:6d:e7:ba:a6": 1
  },
  ...
};

// 排序：5g、2.4g汇总降序
const ret = [
  {
    "position": "朝阳",
    "wifi": [
      {
        "type": "5g",
        "ssid": "0b:67:6d:e7:ba:a5",
        "count": 3
      },
      {
        "type": "2.4g",
        "ssid": "0b:67:6d:e7:ba:a6",
        "count": 1
      }
    ]
  },
  ...
];
