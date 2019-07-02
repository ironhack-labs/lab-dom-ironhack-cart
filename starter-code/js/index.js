var bubbleClick = 0;
var shirtClick = 0;
var axeClick = 0;
var cupClick = 0;
var stickerClick = 0;


Vue.component("item", {
  template: "#product-box",
  props: ["item_data", "buyitems"],
  methods: {
    addItem: function(item_data) {
      if (item_data.id == "bubble") {
        bubbleClick += 1;
        if (bubbleClick <= 1) {
          this.pushData();
        } else {
          var i = this.findIndex(this.$parent.buyitems, "id", "bubble");
          this.$parent.buyitems[i].qty += 1;
          this.$parent.buyitems[i].total =
            this.$parent.buyitems[i].qty * this.$parent.buyitems[i].price;
          console.log(i);
        }
      } else if (item_data.id == "shirt") {
        shirtClick += 1;
        if (shirtClick <= 1) {
          this.pushData();
        } else {
          var i = this.findIndex(this.$parent.buyitems, "id", "shirt");
          this.$parent.buyitems[i].qty += 1;
          this.$parent.buyitems[i].total =
            this.$parent.buyitems[i].qty * this.$parent.buyitems[i].price;
        }
      }
        else if (item_data.id == "axe") {
        axeClick += 1;
        if (axeClick <= 1) {
          this.pushData();
        } else {
          var i = this.findIndex(this.$parent.buyitems, "id", "axe");
          this.$parent.buyitems[i].qty += 1;
          this.$parent.buyitems[i].total =
            this.$parent.buyitems[i].qty * this.$parent.buyitems[i].price;
        }
      }else if (item_data.id == "cup") {
        cupClick += 1;
        if (cupClick <= 1) {
          this.pushData();
        } else {
          var i = this.findIndex(this.$parent.buyitems, "id", "cup");
          this.$parent.buyitems[i].qty += 1;
          this.$parent.buyitems[i].total =
            this.$parent.buyitems[i].qty * this.$parent.buyitems[i].price;
        }
      } else {
        stickerClick += 1;
        if (stickerClick <= 1) {
          this.pushData();
        } else {
          var i = this.findIndex(this.$parent.buyitems, "id", "sticker");
          this.$parent.buyitems[i].qty += 1;
          this.$parent.buyitems[i].total =
            this.$parent.buyitems[i].qty * this.$parent.buyitems[i].price;
        }
      }
      console.log(beerClick, ecoClick, paperClick);
    },
    pushData: function() {
      this.$parent.buyitems.push({
        img: this.item_data.img,
        title: this.item_data.title,
        price: this.item_data.price,
        qty: 1,
        total: this.item_data.price,
        id: this.item_data.id
      });
    },
    findIndex: function(array, attr, value) {
      for (var i = 0; i < array.length; i += 1) {
        if (array[i][attr] === value) {
          return i;
        }
      }
      return -1;
    }
  }
});
Vue.component("buyitem", {
  template: "#buy-box",
  props: ["buy_data", "buyitems"],
  methods: {
    removeItem: function(buy_data) {
      var index = this.$parent.buyitems.indexOf(buy_data);
      this.$parent.buyitems.splice(index, 1);
      if (buy_data.id == "bubble") {
        bubbleClick = 0;
      } else if (buy_data.id == "shirt") {
        shirtClick = 0;
      } else if (buy_data.id == "axe") {
        axeClick = 0;
      } else if (buy_data.id == "cup") {
        cupClick = 0;
      } else {
        stickerClick = 0;
      }
    },
    plusQty: function(buy_data) {
      buy_data.qty += 1;
      buy_data.total = buy_data.qty * buy_data.price;
    },
    minusQty: function(buy_data) {
      buy_data.qty -= 1;
      if (buy_data.qty < 0) {
        buy_data.qty = 0;
      }
      buy_data.total = buy_data.qty * buy_data.price;
    }
  }
});

var app = new Vue({
  el: "#app",
  data: {
    items: [
      {
        img:
          "https://http2.mlstatic.com/baymax-figura-de-coleccion-bobble-head-con-caja-D_NQ_NP_865979-MLM27161285446_042018-F.jpg",
        title: "IronBubble-head",
        price: "25",
        id: "bubble"
      },
      {
        img:
          "https://cdn-images-1.medium.com/max/1600/1*aVsUjp1zvlRb1799gDjbLA@2x.jpeg",
        title: "IronShirt",
        price: "15",
        id: "shirt"
      },
      {
        img:
          "https://ih1.redbubble.net/image.267966033.7868/mug,standard,220x200,center-bg,ffffff-pad,220x200,ffffff.u1.jpg",
        title: "IronCup",
        price: "10",
        id: "cup"
      },
      {
        img:
          "https://scontent-frx5-1.cdninstagram.com/vp/85d7337524143f232ccf06603185a73c/5D31E71A/t51.2885-15/e35/s240x240/55869113_2353082131594227_7285744901972045519_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&ig_cache_key=MjAxNjI2NzI3MDA0MTgyMDUxMA%3D%3D.2",
        title: "IronSticker",
        price: "1",
        id: "sticker"
      },
      {
        img: "https://chenyiya.com/codepen/product-3.jpg",
        title: "IronAxe",
        price: "100",
        id: "axe"
      }
    ],
    buyitems: []
  },
  methods: {
    total: function() {
      var sum = 0;
      this.buyitems.forEach(function(buyitem) {
        sum += parseInt(buyitem.total);
      });
      return sum;
    }
  }
});
