
#nice-boot-sidebar
*Nice Bootstrap sidebar template*

## Nice what ?

The default bootstrap 3 style provides a default way to define horizontal navigation block.
It's normally done by setting a class names to an ul

```html
<ul class="nav nav-pills nav-stacked">
```

But I find it a bit HTML5 non compliant as we already have the `<nav>` tag available so we'd better leave the ul clean.

This template contains an alternative vertical navigation that address this issue, it is left positioned and fixed and it can be used for building beautiful backends.

## Usage

The complete template is built with [Stasis](https://stasis.me) using my base template for front-end prototyping [StasisTPL](https://github.com/FranckyU/StasisTPL.git) so you should have a valid Ruby environment to run it, I use RVM.

CSS are written with [SASS](http://sass-lang.com)
JS are written with [CoffeeScript](http://coffeescript.org)
HTML are written with [HAML](http://haml.info)

To run the example, just do

```bash
git clone https://github.com/FranckyU/nice-boot-sidebar.git
cd nice-boot-sidebar
bundle #assuming you already have a ruby environment
stasis -d 3000

# Now you should have it visible at http://127.0.0.1:3000
```

For non Ruby-Stasis users, just copy the compiled HTML structure in `index.html` along with JS, CSS and image files from `/public` folder into your project and that should be OK.