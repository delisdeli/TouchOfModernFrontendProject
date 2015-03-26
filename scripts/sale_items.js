(function (globalObject) {

  function Sale () {
    var $handleBarsTemplateSource = $('#sale-item-template').html();

    this.handleBarsTemplate = Handlebars.compile($handleBarsTemplateSource);
    this.$spinner = $('.fa-spinner');
    this.$itemShowcase = $('.row');
    this.saleItems = globalObject.saleItems;
    this.lazyImageSelector = '.lazy';

    this._renderItems();
    this._loadImages();
    this._finishLoading();
  }

  Sale.prototype._renderItems = function () {
    var _this = this;
    var currentProduct;
    var templateContext;
    var $currentProduct;

    for (var i=0; i < _this.saleItems.length; i++) {
      currentProduct = _this.saleItems[i];
      templateContext = {
        img_url: currentProduct.photos.medium_half,
        name: currentProduct.name,
        tagline: currentProduct.tagline,
        url: currentProduct.url
      };

      $currentProduct = $(_this.handleBarsTemplate(templateContext))
      _this.$itemShowcase.append($currentProduct);
    }
  };

  Sale.prototype._loadImages = function () {
    this.$itemShowcase.find(this.lazyImageSelector).lazyload();
  };

  Sale.prototype._finishLoading = function () {
    this.$spinner.hide();
  };

  globalObject.sale = new Sale();

})(globalObject);