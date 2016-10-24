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
You should move some of the react slick static assets into public as well. Not sure of a practical solution to this yet.

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
* Connect ith Roboongo and delete the <blank> document under the Shops Collection to see the aboutus.html static template
* Git submodules are most helpful when working with Heroku. Reaction Commerce will be upstream and your Reaction project will be origin master and your plugin will be your submodule.






### Roadmap
- [x] CTA in Hero
- [ ] Hero only on INDEX
- [ ] Category Left Hand Nav
- [ ] Promo on all pages DEFAULT
- [ ] Reskin PDP
- [ ] Category Landing Pages
- [ ] Hero on Category Landing Pages

### Wants from Reaction Commerce
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