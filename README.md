### CSS Essentials

This is a set of css components we wrote ourself while developing the best football app - https://www.onefootball.com .

We'll try to keep it up to date and continuously add cool new features.


### Usage

Package is available through bower


```
    bower install css-essentials

```

usage


```xml
    <link rel="stylesheet" href="bower_components/css-essentials/dist/css-essentials-min.css">

```

or through npm


```
    npm install css-essentials

```


### Basic

We have determent that we need more then usual 3-4 breakpoints to really adjust the design to all screen that are out there.
So we have defined following breakpoints:

```CSS

@of-xsm : 460px;
@of-sm: 606px;
@of-md: 800px;
@of-lg: 1164px;
@of-xlg: 1440px;
@of-xxlg: 1740px;

```

#### Browser support

We tend to support at least n-1, where n is the current version of any browser.

### Components

#### Grid

24 columns based grid, is created using flex.

Quick start:

```xml

<div class="of-row">
    <div class="xxsm-col-24 xsm-col-18 sm-col-12 md-col-6 lg-col-4 xlg-col-2 xxlg-col-1">
        Some content
    </div>
</div>

```

This will spread through full row on smallest screens and it will go up to 1 column on very big screens.

By default, row has 24px padding on the side (on xxsm screens is 0, on xsm screens is 12px) and each column has 12px padding in between.
Row padding can be omitted using


```CSS
    .of-row-no-padding
```