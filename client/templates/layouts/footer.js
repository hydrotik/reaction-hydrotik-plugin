import { Reaction } from "/client/api";
import { Media, Shops, Packages } from "/lib/collections";
import { merge } from "lodash";

Template.layoutFooterHydrotik.onCreated(function () {
  this.settings = ReactiveVar();

  // Initialize settings value for footer
  this.autorun(() => {


    const shop = Shops.findOne(Reaction.getShopId());
    const addressBook = shop.addressBook[0];
    const email = shop.emails[0].address;

    console.log(shop);

    const footerSettings = {
        address1: addressBook.address1,
        address2: addressBook.address2,
        city: addressBook.city,
        country: addressBook.country,
        fullName: addressBook.fullName,
        phone: addressBook.phone,
        postal: addressBook.postal,
        region: addressBook.region,
        email: email,
        description: shop.description,
        name: shop.description,
        year: new Date().getFullYear()
    };
    console.log(footerSettings);

    this.settings.set(footerSettings);
  });
});

Template.layoutFooterHydrotik.helpers({
  settings: function () {
    //const template = Template.instance();
    //return template && template.socialSettings;

    
    return Template.instance().settings.get();
  },
  logo() {
    const shop = Shops.findOne(Reaction.getShopId());

    if (_.isArray(shop.brandAssets)) {
      const brandAsset = _.find(shop.brandAssets, (asset) => asset.type === "navbarBrandImage");
      return Media.findOne(brandAsset.mediaId);
    }

    return false;
  }
});