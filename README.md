### CSS Essentials

This is a set of css components we wrote ourself while developing the best football app - https://www.onefootball.com .

We'll try to keep it up to date and continuously add cool new features.

### Demo

You can see the demo [here] (http://5minfork.com/onefootball/css-essentials), just navigate to demo folder.

### Issues and questions

Please open a github issue, if you have any issue or question

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


```xml
    .of-row-no-padding
```

#### Mixin

##### Loading spinner

Loading spinner can be used to indicate loading.

Quick start:

```xml
<div class="of-row">
    <div class="xxsm-col-24">
        <div id="loading-bar-spinner">
            <div class="spinner-icon">
            </div>
        </div>
    </div>
</div>
```

##### Truncate text

Truncate text is usefull, when you want to display text in one line and truncate it, if it exceeds the width of a line.

Quick start:

```xml
<div class="of-row">
    <div class="xxsm-col-12">
        <div class="truncate-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non elit eget turpis porttitor blandit non ac
            felis. In consequat, ligula eu condimentum commodo, mi sapien suscipit metus, ac laoreet lorem enim id
            nulla. Phasellus at tincidunt quam, ac auctor ex. Aenean sed gravida orci, vitae tristique ante. Suspendisse
            vestibulum eros orci, vitae bibendum mi ullamcorper et. Nullam ultrices elementum ipsum, quis congue est
            molestie vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Pellentesque sed elit lectus. Duis sodales urna pellentesque mi feugiat maximus. Quisque viverra libero eu
            convallis malesuada. Sed sodales varius iaculis. Phasellus cursus pulvinar magna, a elementum arcu blandit
            in. Vivamus ultrices velit vel felis laoreet, at cursus metus molestie. Maecenas dolor dui, commodo nec
            turpis eu, suscipit vehicula massa.
        </div>
    </div>
</div>
```

##### Push up animation

Push up animation is a nice effect for hovering on elements.

Quick start:

Just append

```xml
.of-push-up-animation
```
class to any of your elements.


### Customization

It is possible to edit the grid breakpoints by editing the values in the `src/base/breakpoints.less` file and then recompiling the project.

```shell

$ npm install && grunt release

```

#### Command Line Values

In addition to this, it is possible to pass in, to the grunt command, the desired values for the grid breakpoints:

```shell
$ npm install && grunt release --xsm='300px' --sm='400px' --md='500px' --lg='600px' --xlg='700px' --xxlg='800px'

```

This would generate a file in the dist folder with the given values.
The accepted variables are:

- --xsm
- --sm
- --md
- --lg
- --xlg
- --xxlg
