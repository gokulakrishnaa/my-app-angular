import { Component, OnInit } from '@angular/core';

interface newArray {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  collections: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
}

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css'],
})
export class NewcompComponent implements OnInit {
  public newArray: newArray[] = [
    {
      id: 7273091,
      pageURL:
        'https://pixabay.com/photos/landscape-sea-surf-waves-darling-7273091/',
      type: 'photo',
      tags: 'landscape, sea, surf',
      previewURL:
        'https://cdn.pixabay.com/photo/2022/06/20/05/36/landscape-7273091_150.jpg',
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        'https://pixabay.com/get/g1fbbde5e733958a0f0b5bf3209b12cb24b7995e75f7e5f98ea575233db395e187e9569870f4f5cbcd1e6e33b88202d3fccc56576129999a800076384545ea28b_640.jpg',
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL:
        'https://pixabay.com/get/g672b9cddf0efa9dc0794e902d51db7ed55da893febd2d0fd437d7ceafa0de0235ef55d2af3823b1e6456c4063b0e7981ff82db531388bcdb8f9468f9dd61c3fa_1280.jpg',
      imageWidth: 5710,
      imageHeight: 3807,
      imageSize: 5735367,
      views: 8117,
      downloads: 7776,
      collections: 10,
      likes: 75,
      comments: 44,
      user_id: 3764790,
      user: 'ELG21',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/04/07/18-24-56-559_250x250.jpg',
    },
    {
      id: 7271089,
      pageURL:
        'https://pixabay.com/photos/orchids-flowers-pink-flowers-7271089/',
      type: 'photo',
      tags: 'orchids, flowers, pink flowers',
      previewURL:
        'https://cdn.pixabay.com/photo/2022/06/19/05/42/orchids-7271089_150.jpg',
      previewWidth: 150,
      previewHeight: 98,
      webformatURL:
        'https://pixabay.com/get/g0bf072ee783408a5cdf72b7c9e5ee8ccb5321d27bf8ea9c1eeaa35bd6145c4908b5f7245f641c1f87f8d20548edbd6f565209adc871a6c46951ef0ba76a5b296_640.jpg',
      webformatWidth: 640,
      webformatHeight: 418,
      largeImageURL:
        'https://pixabay.com/get/g667c8c24ec11210066a34b7bd96964af612b959cc33da8f8b4bdec964e85f0bf419f1ea5622d955ec959c689c385cbfec5c4faa9092973ca70b742f171b1d053_1280.jpg',
      imageWidth: 5469,
      imageHeight: 3573,
      imageSize: 2220084,
      views: 5331,
      downloads: 5152,
      collections: 4,
      likes: 59,
      comments: 43,
      user_id: 1767157,
      user: 'Ralphs_Fotos',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/06/05/16-26-54-337_250x250.jpg',
    },
    {
      id: 7274586,
      pageURL:
        'https://pixabay.com/photos/squirrel-cub-small-young-cute-7274586/',
      type: 'photo',
      tags: 'squirrel, cub, small',
      previewURL:
        'https://cdn.pixabay.com/photo/2022/06/20/20/48/squirrel-7274586_150.jpg',
      previewWidth: 150,
      previewHeight: 95,
      webformatURL:
        'https://pixabay.com/get/gdc1ca41ba11bdd56247b2cb34d7c121d4ce2384cc29065c7ddffaf8c7014769aa8bf1d315f3e15587a294cb469d63024051850cfb06a29be1c8c2b65982a9ca8_640.jpg',
      webformatWidth: 640,
      webformatHeight: 406,
      largeImageURL:
        'https://pixabay.com/get/gddafdc1b63c2e50baf3368345dc57b1d3ead36704956474d50183dd81388fd69db43b5ddfe53cb0f28ad53545a6b35bc96692970b0c01705b23fa824fb4e0d88_1280.jpg',
      imageWidth: 5834,
      imageHeight: 3703,
      imageSize: 2841722,
      views: 4041,
      downloads: 3950,
      collections: 4,
      likes: 54,
      comments: 7,
      user_id: 686414,
      user: 'Alexas_Fotos',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/05/25/17-50-48-465_250x250.jpg',
    },
    {
      id: 7264439,
      pageURL:
        'https://pixabay.com/photos/castle-fog-darling-clouds-storm-7264439/',
      type: 'photo',
      tags: 'castle, fog, darling',
      previewURL:
        'https://cdn.pixabay.com/photo/2022/06/15/18/38/castle-7264439_150.jpg',
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        'https://pixabay.com/get/g729c680657bc96cd71d03fbb28e6f0dc4a24f7612b378ad171b8b31cc666b8ffcfcfa402ac5f9465027989ae71850de931041172c615dfd76e3798f57957166a_640.jpg',
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL:
        'https://pixabay.com/get/g98c8133a607d8616928061ae24c6fea7eb01c8cf5f92b72acd674c36721250db5e4888f7f11fc8d099575596499cc2b13eb8541a402a4f4cc17c88ae58bee286_1280.jpg',
      imageWidth: 7087,
      imageHeight: 4724,
      imageSize: 5545767,
      views: 23765,
      downloads: 22627,
      collections: 21,
      likes: 112,
      comments: 58,
      user_id: 3764790,
      user: 'ELG21',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/04/07/18-24-56-559_250x250.jpg',
    },
    {
      id: 7274569,
      pageURL:
        'https://pixabay.com/photos/hedgehog-animal-spur-nature-mammal-7274569/',
      type: 'photo',
      tags: 'hedgehog, animal, spur',
      previewURL:
        'https://cdn.pixabay.com/photo/2022/06/20/20/32/hedgehog-7274569_150.jpg',
      previewWidth: 150,
      previewHeight: 104,
      webformatURL:
        'https://pixabay.com/get/g4182fe7bb47c21c7421688fc4b2f65415949c6b55becc11e8d1d8ffacab145b011a5d16b671531883671328d45376e329b691b6ca066ad1cb7579244db554a8b_640.jpg',
      webformatWidth: 640,
      webformatHeight: 443,
      largeImageURL:
        'https://pixabay.com/get/g138b0b9d47e01e239c3ff79787c9267ddc4b723d81c9e0511e441d69c8db8b6f6d5717594227f187ca92872988c5d1e696be26cc248116356b0178a92c22524d_1280.jpg',
      imageWidth: 5142,
      imageHeight: 3559,
      imageSize: 3119325,
      views: 3503,
      downloads: 3430,
      collections: 5,
      likes: 50,
      comments: 6,
      user_id: 686414,
      user: 'Alexas_Fotos',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/05/25/17-50-48-465_250x250.jpg',
    },
    {
      id: 7273411,
      pageURL: 'https://pixabay.com/photos/eastern-spinebill-7273411/',
      type: 'photo',
      tags: 'eastern spinebill, acanthorhynchus tenuirostris, bird',
      previewURL:
        'https://cdn.pixabay.com/photo/2022/06/20/09/41/eastern-spinebill-7273411_150.jpg',
      previewWidth: 150,
      previewHeight: 103,
      webformatURL:
        'https://pixabay.com/get/gf975a10870eeec34305490169ff49fd909d0b4d7b52ea6e7800703c855b1afaf713b694a4fd256632c4216ffe3f440727bb13b7414c535d004b54670814b3f97_640.jpg',
      webformatWidth: 640,
      webformatHeight: 438,
      largeImageURL:
        'https://pixabay.com/get/ge72ac6ad2819ed7f35cf427e03b6ab855e71a6ac61b1c14a904599ccbb18959b1c46e32840026b0ff90f91f9201a54fc0e6f3a642049b1ad022386e284879a9e_1280.jpg',
      imageWidth: 5100,
      imageHeight: 3493,
      imageSize: 2889348,
      views: 6301,
      downloads: 6198,
      collections: 7,
      likes: 54,
      comments: 44,
      user_id: 5526837,
      user: 'pen_ash',
      userImageURL:
        'https://cdn.pixabay.com/user/2021/09/12/08-36-27-427_250x250.jpg',
    },
    {
      id: 7273814,
      pageURL:
        'https://pixabay.com/photos/ladybug-flower-meadow-nature-flora-7273814/',
      type: 'photo',
      tags: 'ladybug, flower, meadow',
      previewURL:
        'https://cdn.pixabay.com/photo/2022/06/20/13/52/ladybug-7273814_150.jpg',
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        'https://pixabay.com/get/g5594c7b06549d053de15d6dcba6294801c10954a5fbd262820dc62516264cc913bac582c8d2253dd1ae987ec46b6bdfc21a2a8e1a21eeb9e6c23b52bc448bc4d_640.jpg',
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL:
        'https://pixabay.com/get/g92f62698625004e21f7fc253db23ce2dd635bf068c3f9311eea2679277d733a5640743e984437cf130efc2db9da128120437c6ed2823be37dec6117db846b06e_1280.jpg',
      imageWidth: 6000,
      imageHeight: 4000,
      imageSize: 2543122,
      views: 1728,
      downloads: 1644,
      collections: 3,
      likes: 52,
      comments: 9,
      user_id: 686414,
      user: 'Alexas_Fotos',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/05/25/17-50-48-465_250x250.jpg',
    },
    {
      id: 7271620,
      pageURL:
        'https://pixabay.com/photos/bird-heron-egret-river-great-egret-7271620/',
      type: 'photo',
      tags: 'bird, heron, egret',
      previewURL:
        'https://cdn.pixabay.com/photo/2022/06/19/11/07/bird-7271620_150.jpg',
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        'https://pixabay.com/get/g17f83973e0269b28d1dd6deb32d29e0fd3f5cf8ddf27a1f836c9dd5ed0bbb762a9918646acd61369e3a299e00013579736bd0c52abb3c530cd732203729f264c_640.jpg',
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL:
        'https://pixabay.com/get/g0e766f612e787c806b75cd448587918056baf6005d21abbf0bff636651f5e2862e83d601040a204781c46378dc5fb620932fb27cee2d0c8cf9104310c8a34562_1280.jpg',
      imageWidth: 5041,
      imageHeight: 3360,
      imageSize: 3615696,
      views: 2200,
      downloads: 2153,
      collections: 5,
      likes: 25,
      comments: 19,
      user_id: 21062476,
      user: 'Johnnys_pic',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/05/27/07-56-13-831_250x250.jpeg',
    },
    {
      id: 7272152,
      pageURL:
        'https://pixabay.com/photos/little-fox-butterfly-pollination-7272152/',
      type: 'photo',
      tags: 'little fox, butterfly, pollination',
      previewURL:
        'https://cdn.pixabay.com/photo/2022/06/19/15/25/little-fox-7272152_150.jpg',
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        'https://pixabay.com/get/g80148939675bea9b643fb8f0ac341c5917ed18f8e072429891926c6b7620e2a0dd985d35bfa94279d5bb50f474087755d6dba7bd86b466af85e426aa91fbaa89_640.jpg',
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL:
        'https://pixabay.com/get/gc4f9996879dacf261775eb4ac8154bf6356007e1ee0f3f5ab3869b3a682b129aeae041bbd1bebd08564cfeca3c03f6c428ae1adbbf6a7162bc5a8d083d510ca1_1280.jpg',
      imageWidth: 4730,
      imageHeight: 3153,
      imageSize: 2564924,
      views: 3014,
      downloads: 2924,
      collections: 3,
      likes: 46,
      comments: 32,
      user_id: 4055600,
      user: 'manfredrichter',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/05/21/17-08-11-90_250x250.jpg',
    },
    {
      id: 7267127,
      pageURL:
        'https://pixabay.com/photos/sparrow-bird-ornithology-songbird-7267127/',
      type: 'photo',
      tags: 'sparrow, bird, ornithology',
      previewURL:
        'https://cdn.pixabay.com/photo/2022/06/17/04/24/sparrow-7267127_150.jpg',
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        'https://pixabay.com/get/g91c5a8e0258196437d0e9acdee1203446ab36382cff426dc1b459eef2671077a51a7feea900cdceab092a6aa9d87547d614c574a13dd9a1e29222eb0f8cb82d2_640.jpg',
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL:
        'https://pixabay.com/get/g1c94d5c42ee68ccc2b570712fdac054babcf1b0eddd832bae062690cdbf32c93e2d8ee89dbb993c52165b31389daa52f7c733c7c29fe35a4c3986c71360a8c2c_1280.jpg',
      imageWidth: 6000,
      imageHeight: 4000,
      imageSize: 1957361,
      views: 13997,
      downloads: 13559,
      collections: 3,
      likes: 82,
      comments: 54,
      user_id: 1767157,
      user: 'Ralphs_Fotos',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/06/05/16-26-54-337_250x250.jpg',
    },
    {
      id: 7272712,
      pageURL:
        'https://pixabay.com/photos/grain-field-wheat-wheat-field-7272712/',
      type: 'photo',
      tags: 'grain, field, wheat',
      previewURL:
        'https://cdn.pixabay.com/photo/2022/06/19/21/21/grain-7272712_150.jpg',
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        'https://pixabay.com/get/g6d0c88074b0720428a9c7836cf4f2d8f2f36f0025e10906bd39bd2e272e5c5c1bad53266362e443066952923a7552e32550009c0666cd4af1d91eaf16e819d89_640.jpg',
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL:
        'https://pixabay.com/get/g557740e3474a257a70ebe271ff5e996712bf9a4dea2893c037b09b87e012f33c445e8cd33357126ade1c2c0beb2039970bd4cfa3ef11be05845884c1c07167b6_1280.jpg',
      imageWidth: 5633,
      imageHeight: 3755,
      imageSize: 4995441,
      views: 4450,
      downloads: 4369,
      collections: 5,
      likes: 42,
      comments: 4,
      user_id: 686414,
      user: 'Alexas_Fotos',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/05/25/17-50-48-465_250x250.jpg',
    },
    {
      id: 7265146,
      pageURL: 'https://pixabay.com/photos/water-lily-lotus-pond-7265146/',
      type: 'photo',
      tags: 'water lily, lotus, pond',
      previewURL:
        'https://cdn.pixabay.com/photo/2022/06/16/06/21/water-lily-7265146_150.jpg',
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        'https://pixabay.com/get/g6451e6d27cabc0fb3da9cb0c5323314a44f88725f71e435c072d7df11d396cdff46b6d249032cbcf00155259472c97971db6ad2d1e039248238781e6fe087288_640.jpg',
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL:
        'https://pixabay.com/get/g665e6e9d8bc6eb3cbbbbaa346c779d780d1f4afee155f2a63d1a8fce3a4a1f5ca2650f77c24c43c996d1dec4061c56eab5a1eb3311311b19671d89e21a047f5c_1280.jpg',
      imageWidth: 5779,
      imageHeight: 3853,
      imageSize: 6167884,
      views: 15513,
      downloads: 14934,
      collections: 7,
      likes: 104,
      comments: 0,
      user_id: 10327513,
      user: 'NickyPe',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/06/02/14-33-14-592_250x250.jpg',
    },
    {
      id: 7272015,
      pageURL:
        'https://pixabay.com/photos/flower-purple-flowers-blossom-bloom-7272015/',
      type: 'photo',
      tags: 'flower, purple flowers, blossom',
      previewURL:
        'https://cdn.pixabay.com/photo/2022/06/19/14/17/flower-7272015_150.jpg',
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        'https://pixabay.com/get/gdafbbae2d1a5e4e09793bbf5b7ce69ea8ea1e3f5920244a9841e1e3c26044a6305e78dc371b5c1950a965342e288fd80ea25534cd94964068ddb764018985ad6_640.jpg',
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL:
        'https://pixabay.com/get/g8ec7df8328e5010ffa93dd336909cb9ede67b164397ee5d1fb5850ff106726a72ac34a9087bd13ed94b2c882ca430c84c328bbb2c1e0645ac239d9a5b2d2da54_1280.jpg',
      imageWidth: 5568,
      imageHeight: 3712,
      imageSize: 2727928,
      views: 2224,
      downloads: 2146,
      collections: 3,
      likes: 45,
      comments: 36,
      user_id: 12752456,
      user: 'Mammiya',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/06/13/19-25-09-640_250x250.jpeg',
    },
    {
      id: 7272969,
      pageURL:
        'https://pixabay.com/photos/bird-wood-pigeon-dove-branch-7272969/',
      type: 'photo',
      tags: 'bird, wood pigeon, dove',
      previewURL:
        'https://cdn.pixabay.com/photo/2022/06/20/02/10/bird-7272969_150.jpg',
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        'https://pixabay.com/get/g3020d0564fa8d70ed31c270263893adccf73ecbe025340d60ee5728936196add0c6145ca358916fe231722a972bb8511b9e27ee6bdec24b46974a20287dd67bf_640.jpg',
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL:
        'https://pixabay.com/get/g7e6bec880ecffd51e30da6ae8575f3231e2c58931633cb458cd659af406135f78ccd0d4b9be05dfbd23f9ea4f33612a4f58a4b84c481e67b19a9a4a8c1b4942c_1280.jpg',
      imageWidth: 6000,
      imageHeight: 4000,
      imageSize: 3080739,
      views: 997,
      downloads: 938,
      collections: 1,
      likes: 42,
      comments: 28,
      user_id: 1767157,
      user: 'Ralphs_Fotos',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/06/05/16-26-54-337_250x250.jpg',
    },
    {
      id: 7274554,
      pageURL:
        'https://pixabay.com/photos/hedgehog-animal-spur-nature-mammal-7274554/',
      type: 'photo',
      tags: 'hedgehog, animal, spur',
      previewURL:
        'https://cdn.pixabay.com/photo/2022/06/20/20/22/hedgehog-7274554_150.jpg',
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        'https://pixabay.com/get/gdb7616eaa083ef5f14398ea31da6afa3dd2ef81aa6d7c72db78528dc70b93b51f91edd0f54a60dc6520f7d29433253e1168d1bc6d77d57066493e894861c4ad9_640.jpg',
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL:
        'https://pixabay.com/get/g351822dac052994e564766bc2bdd223c00df024121272376d6dcb1d3fd6aa1c9067590d4e2257cdbf361fd3ea5fb87d41d072ae6fcaebe1f1adc1e30a457b2bd_1280.jpg',
      imageWidth: 6000,
      imageHeight: 4000,
      imageSize: 4842155,
      views: 2135,
      downloads: 2112,
      collections: 1,
      likes: 41,
      comments: 1,
      user_id: 686414,
      user: 'Alexas_Fotos',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/05/25/17-50-48-465_250x250.jpg',
    },
    {
      id: 7271731,
      pageURL:
        'https://pixabay.com/photos/hd-wallpaper-nature-wallpaper-woman-7271731/',
      type: 'photo',
      tags: 'hd wallpaper, nature wallpaper, woman',
      previewURL:
        'https://cdn.pixabay.com/photo/2022/06/19/12/05/woman-7271731_150.jpg',
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        'https://pixabay.com/get/g89a434a9fd1cec6c552de9aa46f1f51733d5189d32a2085ae93adbb2b0eff5a2e5b20a4258d4a69440242b22fa69a6195ef759f45e5315550ad11406b5c1155a_640.jpg',
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL:
        'https://pixabay.com/get/g9c21770157ef773f016cec905a869f16d6faada06e53eefc7b223bfa1d1aff18dacfcd5876b09bea983a99654d514da91800e9e4bd9483707f47808e4f40ae90_1280.jpg',
      imageWidth: 6240,
      imageHeight: 4160,
      imageSize: 5955603,
      views: 2904,
      downloads: 2705,
      collections: 5,
      likes: 36,
      comments: 15,
      user_id: 6314823,
      user: 'Victoria_Art',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/06/19/12-10-31-548_250x250.jpg',
    },
    {
      id: 7271911,
      pageURL:
        'https://pixabay.com/photos/rose-blossom-roses-white-roses-7271911/',
      type: 'photo',
      tags: 'rose blossom, roses, white roses',
      previewURL:
        'https://cdn.pixabay.com/photo/2022/06/19/13/36/rose-blossom-7271911_150.jpg',
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        'https://pixabay.com/get/g78fad08dd37ba0120f9222baef3e70bcdc072635be8ecefeff8b684edab76ae4357d8953721afc9f0075d820d6217d11ec0389e7a8dd60778c440c6953d5b8f4_640.jpg',
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL:
        'https://pixabay.com/get/gc7c6610223270fd86b734cb62e28dfc0765c334c6ff52ba92f3f0b606bf72a52ffbab8fc06ddc1f65c37421845ca303070502956a85bb8905eca359a5f3c12e6_1280.jpg',
      imageWidth: 5631,
      imageHeight: 3754,
      imageSize: 2063256,
      views: 2800,
      downloads: 2725,
      collections: 5,
      likes: 45,
      comments: 28,
      user_id: 10084616,
      user: 'Nennieinszweidrei',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/03/12/15-57-22-761_250x250.jpg',
    },
    {
      id: 7276587,
      pageURL:
        'https://pixabay.com/photos/k%c3%b6nigssee-bartholom%c3%a4-st-boathouse-7276587/',
      type: 'photo',
      tags: 'königssee, bartholomä st, boathouse',
      previewURL:
        'https://cdn.pixabay.com/photo/2022/06/21/21/56/konigssee-7276587_150.jpg',
      previewWidth: 150,
      previewHeight: 60,
      webformatURL:
        'https://pixabay.com/get/g8cdc2446c91def1efc9628e77ed0d20e3c49fad3c3013a4919975fd030773c20a9fa45ab0145c27dc9fb8dd110bb32224734633c2e1276f12f840861aaa45a4a_640.jpg',
      webformatWidth: 640,
      webformatHeight: 256,
      largeImageURL:
        'https://pixabay.com/get/gf05f9d50ddb65a7b0d5f8194074309092375fa78ebe12ffdd52d95512c85cc924adea71d72f8cdff3140b88a55572ea2de52d92c6e3978936c6a20ce57673140_1280.jpg',
      imageWidth: 5927,
      imageHeight: 2371,
      imageSize: 5108750,
      views: 789,
      downloads: 710,
      collections: 6,
      likes: 42,
      comments: 33,
      user_id: 1425977,
      user: 'ChiemSeherin',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/04/18/19-05-31-793_250x250.jpeg',
    },
    {
      id: 7269433,
      pageURL:
        'https://pixabay.com/photos/sea-wave-foam-beach-water-white-7269433/',
      type: 'photo',
      tags: 'sea, wave, foam',
      previewURL:
        'https://cdn.pixabay.com/photo/2022/06/18/08/56/sea-7269433_150.jpg',
      previewWidth: 150,
      previewHeight: 46,
      webformatURL:
        'https://pixabay.com/get/g58ca3fbfc89d074c3bd361874742fd947faf8e5ad604b8a5b53eecaf8d21f4ec21fb2bcc497eddb9ee2ac66c944158703221cc653ee19d78068dfc4311198a84_640.jpg',
      webformatWidth: 640,
      webformatHeight: 198,
      largeImageURL:
        'https://pixabay.com/get/ga2593a8f63663bb3e07f8ea2cb37f4ddd4a8ea7d988546017ace8389b289cc26155f29b769ec0cb76b7cedbb971bc240f290f443aa318c2f3f81eb48a6ef0b2f_1280.jpg',
      imageWidth: 6000,
      imageHeight: 1858,
      imageSize: 4001840,
      views: 7613,
      downloads: 7430,
      collections: 3,
      likes: 64,
      comments: 44,
      user_id: 3764790,
      user: 'ELG21',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/04/07/18-24-56-559_250x250.jpg',
    },
    {
      id: 7270980,
      pageURL:
        'https://pixabay.com/photos/bird-goose-wildlife-ornithology-7270980/',
      type: 'photo',
      tags: 'bird, goose, wildlife',
      previewURL:
        'https://cdn.pixabay.com/photo/2022/06/19/03/56/bird-7270980_150.jpg',
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        'https://pixabay.com/get/g00a71882ab950abee2638433209e9f29da12130d9256087ab6676b44e807657e2c071fad15f324ec84e5f11908e990d0865eaf314a4ba7422533d9c3f7b6af00_640.jpg',
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL:
        'https://pixabay.com/get/g291292c745f7ded263f591c86147985d07f82b2e67fd7d8f9e2226726ef952aaf06fba8fee3cfefa1e9eede009980ee2451cc383e48154f1125f807747090442_1280.jpg',
      imageWidth: 6000,
      imageHeight: 4000,
      imageSize: 3896245,
      views: 2244,
      downloads: 2198,
      collections: 0,
      likes: 37,
      comments: 0,
      user_id: 17561499,
      user: 'Beto_MdP',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/02/04/00-22-52-402_250x250.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
