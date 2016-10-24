#Reaction Plugin Customization

```ssh
reaction reset -n && reaction
```

### React Slick Installation (Better process for installing plugin deps?)

```bash
npm install react-slick
```

Also install slick-carousel for css and font

```bash
npm install slick-carousel
```

**Move files in public to your root public folder**
You should move some of the react slick static assets into public as well. Not sure of a practical solution to this yet. (See Wants list below)

### Some helpful things to be aware of:

**Update your project to get the latest from Reaction master:**
```bash
reaction pull
```


**Update your Reaction dependencies (like a ```meteor update```):**
```bash
reaction update
```

Do the ```reaction pull``` first to make sure there are no git merge conflicts. If you encounter an error then run:
```bash
git reset HEAD --hard
```

### More helpful things...

* I suggest using [RoboMongo](https://robomongo.org) 
* Connect with Roboongo and delete the <blank> document under the Shops Collection to see the aboutus.html static template. When you have more than one Document in the Shop Collection, Reaction will insert a shop name into the url path.
* Git submodules are most helpful when working with Heroku. Reaction Commerce will be your upstream and your instantiated Reaction project will be your origin master. Your plugin will be your submodule and should be editied in .gitmodules. For example:
```
[submodule "reaction-hydrotik-plugin"]
    path = imports/plugins/custom/reaction-hydrotik-plugin
    url = git://github.com/hydrotik/reaction-hydrotik-plugin.git
```
* Be sure to use the github url format in your submodule as there might be a known conflict with Heroku.
* Don't forget to commit changes to your Reaction instance after you commit your submodule changes before pushing to Heroku.


### Roadmap
- [x] CTA in Hero
- [ ] Hero only on INDEX
- [ ] Category Left Hand Nav
- [ ] Promo on all pages DEFAULT
- [ ] Reskin PDP
- [ ] Category Landing Pages
- [ ] Hero on Category Landing Pages

### Wants/Hopes from Reaction Commerce
- [ ] Process for installing NPM deps in plugin as well as static assets to root of Reaction project through Registry settings. (See my stab in register.js - settings)
- [ ] Membership
- [ ] Recently Viewed
- [ ] Product Ratings
- [ ] Product Reviews
- [ ] Faceted Search
- [ ] Group Orders
- [ ] Content Management System that maps to URL structure
- [ ] SASS
- [ ] Promo Manager
- [ ] Category Landing Pages