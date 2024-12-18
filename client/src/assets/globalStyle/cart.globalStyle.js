import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/*********************************************************************8/ 

//style.sheet.css 


/* LATO */
@font-face {
    font-family: 'Lato';
    src: url('Lato-Bold.woff2') format('woff2'), url('Lato-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Lato Hairline';
    src: url('Lato-Hairline.woff2') format('woff2'), url('Lato-Hairline.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Lato';
    src: url('Lato-Black.woff2') format('woff2'), url('Lato-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Lato';
    src: url('Lato-Heavy.woff2') format('woff2'), url('Lato-Heavy.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Lato';
    src: url('Lato-Regular.woff2') format('woff2'), url('Lato-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Lato';
    src: url('Lato-Medium.woff2') format('woff2'), url('Lato-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Lato';
    src: url('Lato-Italic.woff2') format('woff2'), url('Lato-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Lato';
    src: url('Lato-Light.woff2') format('woff2'), url('Lato-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Lato';
    src: url('Lato-Thin.woff2') format('woff2'), url('Lato-Thin.woff') format('woff');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
}

/*****************************************************************/


/*****************************************************************/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

*,
::before,
::after {
  box-sizing: border-box;
}

* {
  -webkit-tap-highlight-color: transparent;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  font-family: Lato, sans-serif;
  color: var(--text-color);
  background: var(--body-bg);
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  border: none;
  outline: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
}

a,
img,
button,
input,
label,
textarea,
select {
  padding: 0;
  font-family: inherit;
  color: inherit;
  outline: none;
  border: none;
}

input,
textarea {
  background: transparent;
}

input:-webkit-autofill,
input:-webkit-autofill:focus,
input:-webkit-autofill:active,
input:-webkit-autofill:hover {
  transition: background-color 1s 9999s;
  -webkit-text-fill-color: var(--text-color);
  caret-color: var(--text-color);
}

.icon {
  filter: var(--icon-color);
}

@media (max-width: 575.98px) {
  .container {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
}

i,
em {
  font-style: italic;
}

b,
strong {
  font-weight: 600;
}

.separate {
  margin: var(--margin) 0;
  height: 1px;
  background: var(--separate-color);
}

.row > *, .container-fluid, .container {
  padding-left: calc(var(--grid-gutter-x) * 0.5);
  padding-right: calc(var(--grid-gutter-x) * 0.5);
}

.container-fluid, .container {
  --grid-gutter-x: 30px;
  --grid-gutter-y: 0;
  width: 1370px;
  margin-left: auto;
  margin-right: auto;
}

.container {
  width: 1370px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--grid-gutter-y) * -1);
  margin-left: calc(var(--grid-gutter-x) * 0.5 * -1);
  margin-right: calc(var(--grid-gutter-x) * 0.5 * -1);
}
.row > * {
  margin-top: var(--grid-gutter-y);
}

.col {
  flex: 1 0;
}

.row-cols-1 > * {
  flex: 0 0 auto;
  width: 100%;
}

.row-cols-2 > * {
  flex: 0 0 auto;
  width: 50%;
}

.row-cols-3 > * {
  flex: 0 0 auto;
  width: 33.3333333333%;
}

.row-cols-4 > * {
  flex: 0 0 auto;
  width: 25%;
}

.row-cols-5 > * {
  flex: 0 0 auto;
  width: 20%;
}

.row-cols-6 > * {
  flex: 0 0 auto;
  width: 16.6666666667%;
}

.col-1 {
  flex: 0 0 auto;
  width: 8.3333333333%;
}

.col-2 {
  flex: 0 0 auto;
  width: 16.6666666667%;
}

.col-3 {
  flex: 0 0 auto;
  width: 25%;
}

.col-4 {
  flex: 0 0 auto;
  width: 33.3333333333%;
}

.col-5 {
  flex: 0 0 auto;
  width: 41.6666666667%;
}

.col-6 {
  flex: 0 0 auto;
  width: 50%;
}

.col-7 {
  flex: 0 0 auto;
  width: 58.3333333333%;
}

.col-8 {
  flex: 0 0 auto;
  width: 66.6666666667%;
}

.col-9 {
  flex: 0 0 auto;
  width: 75%;
}

.col-10 {
  flex: 0 0 auto;
  width: 83.3333333333%;
}

.col-11 {
  flex: 0 0 auto;
  width: 91.6666666667%;
}

.col-12 {
  flex: 0 0 auto;
  width: 100%;
}

.offset-0 {
  margin-left: 0;
}

.offset-1 {
  margin-left: 8.3333333333%;
}

.offset-2 {
  margin-left: 16.6666666667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.3333333333%;
}

.offset-5 {
  margin-left: 41.6666666667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.3333333333%;
}

.offset-8 {
  margin-left: 66.6666666667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.3333333333%;
}

.offset-11 {
  margin-left: 91.6666666667%;
}

.g-0,
.gx-0 {
  --grid-gutter-x: 0px;
}

.g-0,
.gy-0 {
  --grid-gutter-y: 0px;
}

.g-1,
.gx-1 {
  --grid-gutter-x: 7.5px;
}

.g-1,
.gy-1 {
  --grid-gutter-y: 7.5px;
}

.g-2,
.gx-2 {
  --grid-gutter-x: 15px;
}

.g-2,
.gy-2 {
  --grid-gutter-y: 15px;
}

.g-3,
.gx-3 {
  --grid-gutter-x: 30px;
}

.g-3,
.gy-3 {
  --grid-gutter-y: 30px;
}

.g-4,
.gx-4 {
  --grid-gutter-x: 45px;
}

.g-4,
.gy-4 {
  --grid-gutter-y: 45px;
}

.g-5,
.gx-5 {
  --grid-gutter-x: 90px;
}

.g-5,
.gy-5 {
  --grid-gutter-y: 90px;
}

@media (max-width: 1399.98px) {
  .container {
    max-width: 1140px;
  }
  .row-cols-xxl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-xxl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-xxl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-xxl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-xxl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-xxl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-xxl-1 {
    flex: 0 0 auto;
    width: 8.3333333333%;
  }
  .col-xxl-2 {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-xxl-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-xxl-4 {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .col-xxl-5 {
    flex: 0 0 auto;
    width: 41.6666666667%;
  }
  .col-xxl-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-xxl-7 {
    flex: 0 0 auto;
    width: 58.3333333333%;
  }
  .col-xxl-8 {
    flex: 0 0 auto;
    width: 66.6666666667%;
  }
  .col-xxl-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-xxl-10 {
    flex: 0 0 auto;
    width: 83.3333333333%;
  }
  .col-xxl-11 {
    flex: 0 0 auto;
    width: 91.6666666667%;
  }
  .col-xxl-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-xxl-0 {
    margin-left: 0;
  }
  .offset-xxl-1 {
    margin-left: 8.3333333333%;
  }
  .offset-xxl-2 {
    margin-left: 16.6666666667%;
  }
  .offset-xxl-3 {
    margin-left: 25%;
  }
  .offset-xxl-4 {
    margin-left: 33.3333333333%;
  }
  .offset-xxl-5 {
    margin-left: 41.6666666667%;
  }
  .offset-xxl-6 {
    margin-left: 50%;
  }
  .offset-xxl-7 {
    margin-left: 58.3333333333%;
  }
  .offset-xxl-8 {
    margin-left: 66.6666666667%;
  }
  .offset-xxl-9 {
    margin-left: 75%;
  }
  .offset-xxl-10 {
    margin-left: 83.3333333333%;
  }
  .offset-xxl-11 {
    margin-left: 91.6666666667%;
  }
  .g-xxl-0,
  .gx-xxl-0 {
    --grid-gutter-x: 0px;
  }
  .g-xxl-0,
  .gy-xxl-0 {
    --grid-gutter-y: 0px;
  }
  .g-xxl-1,
  .gx-xxl-1 {
    --grid-gutter-x: 7.5px;
  }
  .g-xxl-1,
  .gy-xxl-1 {
    --grid-gutter-y: 7.5px;
  }
  .g-xxl-2,
  .gx-xxl-2 {
    --grid-gutter-x: 15px;
  }
  .g-xxl-2,
  .gy-xxl-2 {
    --grid-gutter-y: 15px;
  }
  .g-xxl-3,
  .gx-xxl-3 {
    --grid-gutter-x: 30px;
  }
  .g-xxl-3,
  .gy-xxl-3 {
    --grid-gutter-y: 30px;
  }
  .g-xxl-4,
  .gx-xxl-4 {
    --grid-gutter-x: 45px;
  }
  .g-xxl-4,
  .gy-xxl-4 {
    --grid-gutter-y: 45px;
  }
  .g-xxl-5,
  .gx-xxl-5 {
    --grid-gutter-x: 90px;
  }
  .g-xxl-5,
  .gy-xxl-5 {
    --grid-gutter-y: 90px;
  }
}
@media (max-width: 1199.98px) {
  .container {
    max-width: 960px;
  }
  .row-cols-xl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-xl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-xl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-xl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-xl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-xl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-xl-1 {
    flex: 0 0 auto;
    width: 8.3333333333%;
  }
  .col-xl-2 {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-xl-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-xl-4 {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .col-xl-5 {
    flex: 0 0 auto;
    width: 41.6666666667%;
  }
  .col-xl-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-xl-7 {
    flex: 0 0 auto;
    width: 58.3333333333%;
  }
  .col-xl-8 {
    flex: 0 0 auto;
    width: 66.6666666667%;
  }
  .col-xl-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-xl-10 {
    flex: 0 0 auto;
    width: 83.3333333333%;
  }
  .col-xl-11 {
    flex: 0 0 auto;
    width: 91.6666666667%;
  }
  .col-xl-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-xl-0 {
    margin-left: 0;
  }
  .offset-xl-1 {
    margin-left: 8.3333333333%;
  }
  .offset-xl-2 {
    margin-left: 16.6666666667%;
  }
  .offset-xl-3 {
    margin-left: 25%;
  }
  .offset-xl-4 {
    margin-left: 33.3333333333%;
  }
  .offset-xl-5 {
    margin-left: 41.6666666667%;
  }
  .offset-xl-6 {
    margin-left: 50%;
  }
  .offset-xl-7 {
    margin-left: 58.3333333333%;
  }
  .offset-xl-8 {
    margin-left: 66.6666666667%;
  }
  .offset-xl-9 {
    margin-left: 75%;
  }
  .offset-xl-10 {
    margin-left: 83.3333333333%;
  }
  .offset-xl-11 {
    margin-left: 91.6666666667%;
  }
  .g-xl-0,
  .gx-xl-0 {
    --grid-gutter-x: 0px;
  }
  .g-xl-0,
  .gy-xl-0 {
    --grid-gutter-y: 0px;
  }
  .g-xl-1,
  .gx-xl-1 {
    --grid-gutter-x: 7.5px;
  }
  .g-xl-1,
  .gy-xl-1 {
    --grid-gutter-y: 7.5px;
  }
  .g-xl-2,
  .gx-xl-2 {
    --grid-gutter-x: 15px;
  }
  .g-xl-2,
  .gy-xl-2 {
    --grid-gutter-y: 15px;
  }
  .g-xl-3,
  .gx-xl-3 {
    --grid-gutter-x: 30px;
  }
  .g-xl-3,
  .gy-xl-3 {
    --grid-gutter-y: 30px;
  }
  .g-xl-4,
  .gx-xl-4 {
    --grid-gutter-x: 45px;
  }
  .g-xl-4,
  .gy-xl-4 {
    --grid-gutter-y: 45px;
  }
  .g-xl-5,
  .gx-xl-5 {
    --grid-gutter-x: 90px;
  }
  .g-xl-5,
  .gy-xl-5 {
    --grid-gutter-y: 90px;
  }
}
@media (max-width: 991.98px) {
  .container {
    max-width: 720px;
  }
  .row-cols-lg-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-lg-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-lg-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-lg-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-lg-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-lg-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-lg-1 {
    flex: 0 0 auto;
    width: 8.3333333333%;
  }
  .col-lg-2 {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-lg-4 {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .col-lg-5 {
    flex: 0 0 auto;
    width: 41.6666666667%;
  }
  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-lg-7 {
    flex: 0 0 auto;
    width: 58.3333333333%;
  }
  .col-lg-8 {
    flex: 0 0 auto;
    width: 66.6666666667%;
  }
  .col-lg-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-lg-10 {
    flex: 0 0 auto;
    width: 83.3333333333%;
  }
  .col-lg-11 {
    flex: 0 0 auto;
    width: 91.6666666667%;
  }
  .col-lg-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-lg-0 {
    margin-left: 0;
  }
  .offset-lg-1 {
    margin-left: 8.3333333333%;
  }
  .offset-lg-2 {
    margin-left: 16.6666666667%;
  }
  .offset-lg-3 {
    margin-left: 25%;
  }
  .offset-lg-4 {
    margin-left: 33.3333333333%;
  }
  .offset-lg-5 {
    margin-left: 41.6666666667%;
  }
  .offset-lg-6 {
    margin-left: 50%;
  }
  .offset-lg-7 {
    margin-left: 58.3333333333%;
  }
  .offset-lg-8 {
    margin-left: 66.6666666667%;
  }
  .offset-lg-9 {
    margin-left: 75%;
  }
  .offset-lg-10 {
    margin-left: 83.3333333333%;
  }
  .offset-lg-11 {
    margin-left: 91.6666666667%;
  }
  .g-lg-0,
  .gx-lg-0 {
    --grid-gutter-x: 0px;
  }
  .g-lg-0,
  .gy-lg-0 {
    --grid-gutter-y: 0px;
  }
  .g-lg-1,
  .gx-lg-1 {
    --grid-gutter-x: 7.5px;
  }
  .g-lg-1,
  .gy-lg-1 {
    --grid-gutter-y: 7.5px;
  }
  .g-lg-2,
  .gx-lg-2 {
    --grid-gutter-x: 15px;
  }
  .g-lg-2,
  .gy-lg-2 {
    --grid-gutter-y: 15px;
  }
  .g-lg-3,
  .gx-lg-3 {
    --grid-gutter-x: 30px;
  }
  .g-lg-3,
  .gy-lg-3 {
    --grid-gutter-y: 30px;
  }
  .g-lg-4,
  .gx-lg-4 {
    --grid-gutter-x: 45px;
  }
  .g-lg-4,
  .gy-lg-4 {
    --grid-gutter-y: 45px;
  }
  .g-lg-5,
  .gx-lg-5 {
    --grid-gutter-x: 90px;
  }
  .g-lg-5,
  .gy-lg-5 {
    --grid-gutter-y: 90px;
  }
}
@media (max-width: 767.98px) {
  .container {
    max-width: 540px;
  }
  .row-cols-md-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-md-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-md-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-md-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-md-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-md-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-md-1 {
    flex: 0 0 auto;
    width: 8.3333333333%;
  }
  .col-md-2 {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-md-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-md-4 {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .col-md-5 {
    flex: 0 0 auto;
    width: 41.6666666667%;
  }
  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-md-7 {
    flex: 0 0 auto;
    width: 58.3333333333%;
  }
  .col-md-8 {
    flex: 0 0 auto;
    width: 66.6666666667%;
  }
  .col-md-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-md-10 {
    flex: 0 0 auto;
    width: 83.3333333333%;
  }
  .col-md-11 {
    flex: 0 0 auto;
    width: 91.6666666667%;
  }
  .col-md-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-md-0 {
    margin-left: 0;
  }
  .offset-md-1 {
    margin-left: 8.3333333333%;
  }
  .offset-md-2 {
    margin-left: 16.6666666667%;
  }
  .offset-md-3 {
    margin-left: 25%;
  }
  .offset-md-4 {
    margin-left: 33.3333333333%;
  }
  .offset-md-5 {
    margin-left: 41.6666666667%;
  }
  .offset-md-6 {
    margin-left: 50%;
  }
  .offset-md-7 {
    margin-left: 58.3333333333%;
  }
  .offset-md-8 {
    margin-left: 66.6666666667%;
  }
  .offset-md-9 {
    margin-left: 75%;
  }
  .offset-md-10 {
    margin-left: 83.3333333333%;
  }
  .offset-md-11 {
    margin-left: 91.6666666667%;
  }
  .g-md-0,
  .gx-md-0 {
    --grid-gutter-x: 0px;
  }
  .g-md-0,
  .gy-md-0 {
    --grid-gutter-y: 0px;
  }
  .g-md-1,
  .gx-md-1 {
    --grid-gutter-x: 7.5px;
  }
  .g-md-1,
  .gy-md-1 {
    --grid-gutter-y: 7.5px;
  }
  .g-md-2,
  .gx-md-2 {
    --grid-gutter-x: 15px;
  }
  .g-md-2,
  .gy-md-2 {
    --grid-gutter-y: 15px;
  }
  .g-md-3,
  .gx-md-3 {
    --grid-gutter-x: 30px;
  }
  .g-md-3,
  .gy-md-3 {
    --grid-gutter-y: 30px;
  }
  .g-md-4,
  .gx-md-4 {
    --grid-gutter-x: 45px;
  }
  .g-md-4,
  .gy-md-4 {
    --grid-gutter-y: 45px;
  }
  .g-md-5,
  .gx-md-5 {
    --grid-gutter-x: 90px;
  }
  .g-md-5,
  .gy-md-5 {
    --grid-gutter-y: 90px;
  }
}
@media (max-width: 575.98px) {
  .container {
    max-width: 100%;
  }
  .row-cols-sm-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-sm-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-sm-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-sm-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-sm-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-sm-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-sm-1 {
    flex: 0 0 auto;
    width: 8.3333333333%;
  }
  .col-sm-2 {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-sm-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-sm-4 {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .col-sm-5 {
    flex: 0 0 auto;
    width: 41.6666666667%;
  }
  .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-sm-7 {
    flex: 0 0 auto;
    width: 58.3333333333%;
  }
  .col-sm-8 {
    flex: 0 0 auto;
    width: 66.6666666667%;
  }
  .col-sm-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-sm-10 {
    flex: 0 0 auto;
    width: 83.3333333333%;
  }
  .col-sm-11 {
    flex: 0 0 auto;
    width: 91.6666666667%;
  }
  .col-sm-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-sm-0 {
    margin-left: 0;
  }
  .offset-sm-1 {
    margin-left: 8.3333333333%;
  }
  .offset-sm-2 {
    margin-left: 16.6666666667%;
  }
  .offset-sm-3 {
    margin-left: 25%;
  }
  .offset-sm-4 {
    margin-left: 33.3333333333%;
  }
  .offset-sm-5 {
    margin-left: 41.6666666667%;
  }
  .offset-sm-6 {
    margin-left: 50%;
  }
  .offset-sm-7 {
    margin-left: 58.3333333333%;
  }
  .offset-sm-8 {
    margin-left: 66.6666666667%;
  }
  .offset-sm-9 {
    margin-left: 75%;
  }
  .offset-sm-10 {
    margin-left: 83.3333333333%;
  }
  .offset-sm-11 {
    margin-left: 91.6666666667%;
  }
  .g-sm-0,
  .gx-sm-0 {
    --grid-gutter-x: 0px;
  }
  .g-sm-0,
  .gy-sm-0 {
    --grid-gutter-y: 0px;
  }
  .g-sm-1,
  .gx-sm-1 {
    --grid-gutter-x: 7.5px;
  }
  .g-sm-1,
  .gy-sm-1 {
    --grid-gutter-y: 7.5px;
  }
  .g-sm-2,
  .gx-sm-2 {
    --grid-gutter-x: 15px;
  }
  .g-sm-2,
  .gy-sm-2 {
    --grid-gutter-y: 15px;
  }
  .g-sm-3,
  .gx-sm-3 {
    --grid-gutter-x: 30px;
  }
  .g-sm-3,
  .gy-sm-3 {
    --grid-gutter-y: 30px;
  }
  .g-sm-4,
  .gx-sm-4 {
    --grid-gutter-x: 45px;
  }
  .g-sm-4,
  .gy-sm-4 {
    --grid-gutter-y: 45px;
  }
  .g-sm-5,
  .gx-sm-5 {
    --grid-gutter-x: 90px;
  }
  .g-sm-5,
  .gy-sm-5 {
    --grid-gutter-y: 90px;
  }
}
.d-block {
  display: block !important;
}

.d-flex {
  display: flex !important;
}

.d-grid {
  display: grid !important;
}

.d-none {
  display: none !important;
}

@media (max-width: 1399.98px) {
  .d-xxl-block {
    display: block !important;
  }
  .d-xxl-flex {
    display: flex !important;
  }
  .d-xxl-grid {
    display: grid !important;
  }
  .d-xxl-none {
    display: none !important;
  }
}
@media (max-width: 1199.98px) {
  .d-xl-block {
    display: block !important;
  }
  .d-xl-flex {
    display: flex !important;
  }
  .d-xl-grid {
    display: grid !important;
  }
  .d-xl-none {
    display: none !important;
  }
}
@media (max-width: 991.98px) {
  .d-lg-block {
    display: block !important;
  }
  .d-lg-flex {
    display: flex !important;
  }
  .d-lg-grid {
    display: grid !important;
  }
  .d-lg-none {
    display: none !important;
  }
}
@media (max-width: 767.98px) {
  .d-md-block {
    display: block !important;
  }
  .d-md-flex {
    display: flex !important;
  }
  .d-md-grid {
    display: grid !important;
  }
  .d-md-none {
    display: none !important;
  }
}
@media (max-width: 575.98px) {
  .d-sm-block {
    display: block !important;
  }
  .d-sm-flex {
    display: flex !important;
  }
  .d-sm-grid {
    display: grid !important;
  }
  .d-sm-none {
    display: none !important;
  }
}
@keyframes shake {
  0%, 100% {
    translate: 0;
  }
  25%, 75% {
    translate: 4px;
  }
  50% {
    translate: -4px;
  }
}
html.dark {
  --text-color: #fff;
  --icon-color: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7482%) hue-rotate(72deg) brightness(99%)
      contrast(99%);
  --body-bg: #292e39;
  --header-bg-color: #171c28;
  --footer-bg-color: var(--header-bg-color);
  --footer-text-color: #9e9da6;
  --top-act-group-bg-color: #292e39;
  --top-act-group-shadow: rgba(0, 0, 0, 0.2);
  --top-act-group-separate: #545458;
  --header-act-dropdown-bg: #2f3441;
  --header-act-dropdown-shadow: rgba(23, 28, 40, 0.4);
  --header-act-dropdown-border-color: #171c28;
  --dropdown-bg-color: #2f3441;
  --dropdown-shadow-color: rgba(23, 28, 40, 0.4);
  --dropdown-arrow-color: brightness(0) saturate(100%) invert(17%) sepia(27%) saturate(487%) hue-rotate(185deg)
      brightness(89%) contrast(88%);
  --top-menu-border-color: #171c28;
  --menu-column-icon-color: brightness(0) saturate(100%) invert(95%) sepia(6%) saturate(527%) hue-rotate(180deg)
      brightness(107%) contrast(96%);
  --sidebar-bg: #292e39;
  --sidebar-shadow: rgba(23, 28, 40, 0.4);
  --cate-item-bg: #171c28;
  --cate-item-thumb-bg: #292e39;
  --cate-item-title-color: #fff;
  --filter-btn-color: #fff;
  --filter-btn-bg: #171c28;
  --product-card-bg: #171c28;
  --product-card-shadow: rgba(0, 0, 0, 0.2);
  --filter-form-bg: var(--dropdown-bg-color);
  --filter-form-shadow: rgba(0, 0, 0, 0.4);
  --form-tag-bg: #171c28;
  --filter-form-arrow: var(--dropdown-arrow-color);
  --auth-content-bg: #292e39;
  --auth-intro-bg: #171c28;
  --auth-intro-text-color: #b9babe;
  --auth-heading-color: #b9babe;
  --form-placeholder-color: #b9babe;
  --form-select-dialog-shadow: rgba($color: #fff, $alpha: 0.15);
  --form-select-dialog-bg: #2f3441;
  --form-option-hover-bg: #292e39;
  --product-detail-bg: #292e39;
  --product-detail-info-bg: #171c28;
  --product-detail-info-content-bg: transparent;
  --product-detail-tag-bg: #292e39;
  --breadcrumbs-bg: #171c28;
  --breadcrumbs-shadow: rgba(23, 28, 40, 0.2);
  --search-bar-bg: #171c28;
  --review-card-bg: #171c28;
  --text-content-hr-bg: #3e4043;
  --checkout-breadcrumbs-bg: #171c28;
  --checkout-cart-info-bg: #171c28;
  --checkout-cart-info-shadow: rgba(23, 28, 40, 0.2);
  --checkout-border-color: #292e39;
  --checkout-gift-shadow: rgba(23, 28, 40, 0.2);
  --checkout-payment-item-bg: #292e39;
  --dialog-bg: #2f3441;
  --dialog-shadow: rgba(23, 28, 40, 0.4);
  --profile-sidebar-bg: #171c28;
  --profile-sidebar-shadow: rgba(23, 28, 40, 0.2);
  --profile-sidebar-link-hover: #2f3441;
  --account-info-bg: #292e39;
  --account-info-icon-bg: #171c28;
  --separate-color: #292e39;
}
@media (max-width: 991.98px) {
  html.dark {
    --header-shadow-color: rgba(0, 0, 0, 0.2);
  }
}
@media (max-width: 767.98px) {
  html.dark {
    --product-detail-bg: #292e39;
    --product-detail-info-bg: transparent;
    --product-detail-info-content-bg: #171c28;
  }
}
@media (max-width: 767.98px) {
  html.dark {
    --breadcrumbs-bg: #171c28;
  }
}

html {
  --text-color: #1a162e;
  --icon-color: brightness(0) saturate(100%) invert(8%) sepia(10%) saturate(4042%) hue-rotate(212deg) brightness(90%)
      contrast(95%);
  --body-bg: #f6f6f6;
  --header-bg-color: #eee;
  --footer-bg-color: var(--header-bg-color);
  --top-act-group-bg-color: #fff;
  --top-act-group-shadow: rgba(237, 237, 246, 0.2);
  --top-act-group-separate: #ededf6;
  --header-act-dropdown-bg: #fff;
  --header-act-dropdown-shadow: rgba(200, 200, 200, 0.4);
  --header-act-dropdown-border-color: #d2d1d6;
  --dropdown-bg-color: #fff;
  --dropdown-shadow-color: rgba(200, 200, 200, 0.4);
  --top-menu-border-color: #d2d1d6;
  --sidebar-bg: #fff;
  --sidebar-shadow: rgba(200, 200, 200, 0.4);
  --cate-item-bg: #eee;
  --cate-item-thumb-bg: #fff;
  --cate-item-title-color: #000;
  --filter-btn-color: #6c6c72;
  --filter-btn-bg: #fff;
  --product-card-bg: #fff;
  --product-card-shadow: rgba(237, 237, 246, 0.2);
  --filter-form-bg: #fff;
  --filter-form-shadow: rgba(200, 200, 200, 0.4);
  --form-tag-bg: #f8f8fb;
  --auth-content-bg: #fff;
  --form-placeholder-color: #d2d1d6;
  --form-select-dialog-shadow: rgba($color: #000000, $alpha: 0.15);
  --form-select-dialog-bg: #fff;
  --form-option-hover-bg: #ebebeb;
  --product-detail-bg: #fff;
  --product-detail-info-bg: #f6f6f6;
  --product-detail-info-content-bg: #fff;
  --product-detail-tag-bg: #ededf6;
  --breadcrumbs-bg: #f6f6f6;
  --breadcrumbs-shadow: rgba(237, 237, 246, 0.2);
  --search-bar-bg: #fff;
  --review-card-bg: #fafafd;
  --text-content-hr-bg: #ebebeb;
  --checkout-breadcrumbs-bg: #fff;
  --checkout-cart-info-bg: #fff;
  --checkout-cart-info-shadow: rgba(237, 237, 246, 0.2);
  --checkout-border-color: #d2d1d6;
  --checkout-gift-shadow: rgba(237, 237, 246, 0.2);
  --checkout-payment-item-bg: #f6f6f6;
  --dialog-bg: #fff;
  --dialog-shadow: rgba(237, 237, 246, 0.2);
  --profile-sidebar-bg: #fff;
  --profile-sidebar-shadow: rgba(237, 237, 246, 0.2);
  --profile-sidebar-link-hover: #ebebeb;
  --account-info-bg: #f6f6f6;
  --account-info-icon-bg: #fff;
  --separate-color: #d2d1d6;
}
@media (max-width: 991.98px) {
  html {
    --header-bg-color: #fff;
    --header-shadow-color: rgba(237, 237, 246, 0.2);
  }
}
@media (max-width: 767.98px) {
  html {
    --cate-item-bg: #fff;
  }
}
@media (max-width: 767.98px) {
  html {
    --auth-intro-bg: #fff;
  }
}
@media (max-width: 767.98px) {
  html {
    --product-detail-bg: #fafafd;
    --product-detail-info-bg: #fff;
  }
}
@media (max-width: 767.98px) {
  html {
    --breadcrumbs-bg: #fff;
  }
}
@media (max-width: 767.98px) {
  html {
    --review-card-bg: #fff;
  }
}

.top-act__btn, .top-act__group, .top-act, .navbar__link, .navbar__list, .top-bar {
  display: flex;
  align-items: center;
}

.header {
  position: relative;
  z-index: 2;
  background: var(--header-bg-color);
}
@media (max-width: 991.98px) {
  .header {
    box-shadow: 0px 20px 60px 10px var(--header-shadow-color);
  }
}

.top-bar {
  position: relative;
  z-index: 1;
  padding: 20px 0;
}
@media (max-width: 991.98px) {
  .top-bar {
    padding: 20px 0;
  }
}
@media (max-width: 767.98px) {
  .top-bar {
    justify-content: space-between;
    padding: 16px 0;
  }
}
@media (max-width: 991.98px) {
  .top-bar__logo {
    gap: 10px !important;
    margin-left: 40px;
  }
  .top-bar__logo-title {
    font-size: 1.8rem !important;
  }
  .top-bar__logo-img {
    width: 24px;
  }
}
@media (max-width: 767.98px) {
  .top-bar__logo {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    margin-left: 0;
  }
}

.navbar {
  margin-left: 129px;
}
@media (max-width: 1199.98px) {
  .navbar {
    margin-left: 28px;
  }
}
@media (max-width: 991.98px) {
  .navbar {
    position: fixed;
    inset: 0 50% 0 0;
    z-index: 9;
    margin-left: 0;
    padding: 20px 0;
    border-radius: 0px 20px 20px 0px;
    background: var(--sidebar-bg);
    translate: -100%;
    transition: translate 0.5s;
  }
  .navbar.show {
    translate: 0;
    box-shadow: 0px 40px 90px 20px var(--sidebar-shadow);
  }
  .navbar.show ~ .navbar__overlay {
    visibility: visible;
    opacity: 1;
  }
}
@media (max-width: 575.98px) {
  .navbar {
    inset: 0 20% 0 0;
  }
}
.navbar__close-btn {
  display: none;
}
@media (max-width: 991.98px) {
  .navbar__close-btn {
    display: block;
    padding: 10px 40px;
  }
}
@media (max-width: 575.98px) {
  .navbar__close-btn {
    padding: 0 20px 10px;
  }
}
.navbar__overlay {
  visibility: hidden;
  opacity: 0;
}
@media (max-width: 991.98px) {
  .navbar__overlay {
    position: fixed;
    inset: 0;
    z-index: 8;
    transition: opacity, visibility;
    transition-duration: 0.5s;
    background: rgba(0, 0, 0, 0.4);
  }
}
@media (max-width: 991.98px) {
  .navbar__list {
    flex-direction: column;
    align-items: flex-start;
    overflow-y: auto;
    overscroll-behavior: contain;
    height: calc(100% - 40px);
  }
}
@media (max-width: 767.98px) {
  .navbar__list {
    height: calc(100% - 140px);
  }
}
@media (max-width: 575.98px) {
  .navbar__list {
    height: calc(100% - 124px);
  }
}
.navbar__item:hover .dropdown {
  display: block;
}
@media (max-width: 991.98px) {
  .navbar__item {
    width: 100%;
  }
  .navbar__item:hover .dropdown {
    display: none;
  }
  .navbar__item--active .dropdown {
    display: block !important;
  }
}
.navbar__link {
  gap: 6px;
  height: 50px;
  padding: 0 15px;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 146.667%;
}
@media (max-width: 991.98px) {
  .navbar__link {
    justify-content: space-between;
    padding: 0 40px;
    font-size: 1.6rem;
    line-height: 150%;
  }
}
@media (max-width: 575.98px) {
  .navbar__link {
    height: 44px;
    padding: 0 20px;
  }
}
.navbar__arrow {
  margin-top: 3px;
}
@media (max-width: 991.98px) {
  .navbar__arrow {
    rotate: -90deg;
    transition: rotate 0.3s;
  }
}
.navbar__item--active .navbar__arrow {
  rotate: 0deg;
}

.top-act {
  gap: 20px;
  margin-left: auto;
}
@media (max-width: 767.98px) {
  .top-act {
    margin-left: 0;
  }
  .top-act__sign-up {
    height: 40px !important;
    padding: 0 8px !important;
    font-size: 1.5rem !important;
  }
}
.top-act__group {
  min-width: 50px;
  height: 50px;
  border-radius: 8px;
  background: var(--top-act-group-bg-color);
  box-shadow: 0px 20px 60px 10px var(--top-act-group-shadow);
}
@media (max-width: 991.98px) {
  .top-act__group--single {
    display: none;
  }
}
.top-act__group--single .top-act__btn {
  padding: 13px;
}
.top-act__btn-wrap {
  position: relative;
}
.top-act__btn-wrap:hover .act-dropdown {
  display: block;
}
.top-act__btn {
  gap: 10px;
  padding: 13px 20px;
  cursor: pointer;
}
.top-act__title {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 146.667%;
}
.top-act__separate {
  width: 1px;
  height: 30px;
  background: var(--top-act-group-separate);
}
.top-act__user {
  position: relative;
}
.top-act__user:hover .act-dropdown {
  display: block;
}
.top-act__avatar {
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  cursor: pointer;
}
.top-act__dropdown {
  right: -15px !important;
  width: min(300px, 100vw) !important;
}
.top-act__dropdown-arrow {
  right: 15px !important;
}

.nav-btn {
  height: 50px;
  align-items: center;
  padding: 0 40px;
}
@media (max-width: 575.98px) {
  .nav-btn {
    height: 44px;
    padding: 0 20px;
  }
}
.nav-btn__title, .nav-btn__qnt {
  margin-left: 16px;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 146.667%;
}
.nav-btn__qnt {
  margin-left: auto;
}

.act-dropdown {
  position: absolute;
  top: 48px;
  right: -60px;
  width: min(500px, 100vw);
  padding-top: 28px;
  display: none;
}
.act-dropdown__inner {
  position: relative;
  padding: 30px;
  border-radius: 20px;
  background: var(--header-act-dropdown-bg);
  box-shadow: 0px 40px 90px 20px var(--header-act-dropdown-shadow);
}
.act-dropdown__arrow {
  position: absolute;
  top: -17px;
  right: 90px;
  height: 20.5px;
  filter: var(--dropdown-arrow-color);
}
.act-dropdown__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.act-dropdown__title {
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 145.455%;
}
.act-dropdown__view-all {
  color: #0071dc;
  font-size: 1.8rem;
  line-height: 145.455%;
}
.act-dropdown__bottom {
  margin: 20px 0;
  padding: 20px 0;
  border-width: 1px 0;
  border-color: var(--header-act-dropdown-border-color);
  border-style: solid;
}
.act-dropdown__separate {
  margin: 20px 0;
  height: 1px;
  background: var(--header-act-dropdown-border-color);
}
.act-dropdown__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.act-dropdown__row--bold {
  font-weight: 500;
}
.act-dropdown__list {
  padding-bottom: 10px;
  flex-wrap: nowrap;
  overflow-x: auto;
}
.act-dropdown__row + .act-dropdown__row {
  margin-top: 10px;
}
.act-dropdown__label, .act-dropdown__value {
  font-size: 1.8rem;
  line-height: 145.455%;
}
.act-dropdown__checkout {
  display: flex;
  justify-content: flex-end;
}
.act-dropdown__checkout-btn {
  min-width: 278px;
}

.cart-preview-item {
  text-align: left;
}
.cart-preview-item__img-wrap {
  position: relative;
  padding-top: 100%;
  border: 1px solid var(--header-act-dropdown-border-color);
  border-radius: 10px;
}
.cart-preview-item__thumb {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.cart-preview-item__title {
  margin-top: 14px;
  font-size: 1.4rem;
  line-height: 142.857%;
}
.cart-preview-item__price {
  margin-top: 6px;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 146.667%;
}

.user-menu__top {
  display: flex;
  align-items: center;
  gap: 20px;
}
.user-menu__avatar {
  width: 60px;
  height: 60px;
  border-radius: 10px;
  object-fit: cover;
}
.user-menu__name {
  margin-bottom: 8px;
  font-size: 1.8rem;
  font-weight: 600;
}
.user-menu__list {
  margin-top: 30px;
}
.user-menu__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 14px 0;
}
.user-menu__separate {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid var(--separate-color);
}

.footer {
  padding: 50px 0;
  font-size: 1.4rem;
  background: var(--footer-bg-color);
}
.footer__row {
  display: grid;
  grid-template-columns: 2fr 1.3fr 1fr 1fr 1.5fr;
  gap: 60px;
}
@media (max-width: 991.98px) {
  .footer__row {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 991.98px) {
  .footer__logo.logo {
    margin-left: 0;
  }
}
.footer__desc {
  margin-top: 30px;
  line-height: 1.5;
}
@media (max-width: 991.98px) {
  .footer__desc {
    width: min(400px, 100%);
  }
}
.footer__help-text {
  margin-top: 40px;
  line-height: 1.4;
}
.footer__heading {
  text-transform: uppercase;
  font-weight: 900;
  font-size: 1.8rem;
}
.footer__list {
  margin-top: 18px;
}
.footer__link, .footer__text {
  padding: 8px 0;
  line-height: 1.4;
}
.footer__link {
  display: inline-block;
}
.footer__link:hover {
  color: #0071dc;
}
.footer__text, .footer__copyright {
  color: var(--footer-text-color);
}
@media (max-width: 991.98px) {
  .footer__text {
    width: min(400px, 100%);
  }
}
.footer__label {
  margin-top: 20px;
  font-weight: 500;
}
.footer__form {
  display: flex;
  gap: 10px;
  padding: 16px 0;
}
@media (max-width: 1199.98px) {
  .footer__form {
    flex-direction: column;
  }
}
@media (max-width: 991.98px) {
  .footer__form {
    flex-direction: row;
  }
}
.footer__input {
  width: 100%;
  padding: 8px 12px;
  border-radius: 6px;
  border: 2px solid #d2d1d6;
  font-size: 1.5rem;
  font-weight: 500;
}
.footer__input::placeholder {
  font-weight: 400;
}
@media (max-width: 991.98px) {
  .footer__input {
    width: 40%;
  }
}
@media (max-width: 767.98px) {
  .footer__input {
    width: 50%;
    font-size: 1.6rem;
  }
}
@media (max-width: 575.98px) {
  .footer__input {
    flex: 1;
  }
}
.footer__bottom {
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media (max-width: 767.98px) {
  .footer__bottom {
    flex-direction: column-reverse;
    gap: 50px;
  }
}
.footer__socials {
  display: flex;
  align-items: center;
  gap: 20px;
}
.footer__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  filter: grayscale(50%);
  transition: translate, filter;
  transition-duration: 0.3s;
}
@media (max-width: 575.98px) {
  .footer__social-link {
    width: 42px;
    height: 42px;
  }
}
.footer__social-link--facebook {
  background: #4863a9;
}
.footer__social-link--youtube {
  background: #f00;
}
.footer__social-link--tiktok {
  background: #000;
}
.footer__social-link--twitter {
  background: #4999e6;
}
.footer__social-link--linkedin {
  background: #2f71ab;
}
.footer__social-link:hover {
  filter: grayscale(0);
  translate: 0 -3px;
}
.footer__social-icon {
  width: 14px;
  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7482%) hue-rotate(72deg) brightness(99%) contrast(99%);
}
@media (max-width: 575.98px) {
  .footer__social-icon {
    width: 18px;
  }
}

.logo {
  display: flex;
  align-items: center;
  gap: 14px;
}
.logo__title {
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 145.455%;
}

.dropdown {
  position: absolute;
  left: 0;
  width: min(1240px, 100%);
  padding-top: 54px;
  display: none;
}
@media (max-width: 991.98px) {
  .dropdown {
    position: initial;
    padding-top: 0;
  }
}
.dropdown__inner {
  --inner-padding: 30px;
  position: relative;
  padding: var(--inner-padding);
  border-radius: 20px;
  background: var(--dropdown-bg-color);
  box-shadow: 0px 40px 90px 20px var(--dropdown-shadow-color);
}
.dropdown__inner::before {
  content: url("../icons/dropdown-arrow.svg");
  position: absolute;
  top: -13px;
  left: var(--arrow-left-pos);
  translate: -50%;
  filter: var(--dropdown-arrow-color);
}
@media (max-width: 991.98px) {
  .dropdown__inner {
    padding: 0 40px;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
  }
  .dropdown__inner::before {
    content: none;
  }
}
@media (max-width: 575.98px) {
  .dropdown__inner {
    padding: 0 20px;
  }
}

.top-menu {
  --main-column-width: 292px;
  --max-inner-height: calc(min(582px, 100vh - 158px) - var(--inner-padding) * 2);
  position: relative;
}
.top-menu__main {
  width: var(--main-column-width);
  height: var(--max-inner-height);
  border-right: 1px solid var(--top-menu-border-color);
  overflow-y: auto;
}
@media (max-width: 991.98px) {
  .top-menu__main {
    width: 100%;
    height: auto;
    border-right: none;
  }
}

.menu-column {
  display: flex;
  gap: 14px;
}
.menu-column + .menu-column {
  margin-top: 22px;
}
@media (max-width: 991.98px) {
  .menu-column {
    margin-top: 10px;
  }
}
.menu-column__icon {
  position: relative;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
}
@media (max-width: 1199.98px) {
  .menu-column__icon {
    display: none;
  }
}
@media (max-width: 991.98px) {
  .menu-column__icon {
    display: block;
  }
}
.menu-column__content {
  flex: 1;
}
.menu-column__icon-1 {
  width: 30px;
  height: 30px;
  object-fit: contain;
}
.menu-column__icon-2 {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 24px;
  height: 24px;
  object-fit: contain;
  filter: var(--menu-column-icon-color);
}
.menu-column__heading {
  margin-top: 4px;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 150%;
}
@media (max-width: 991.98px) {
  .menu-column__heading {
    margin-bottom: 26px;
  }
}
.menu-column__list {
  margin-top: 19px;
}
@media (max-width: 991.98px) {
  .menu-column__list {
    margin-top: 0;
  }
}
.menu-column__item--active .sub-menu {
  display: grid;
}
.menu-column__item--active > .menu-column__link, .menu-column__item:hover > .menu-column__link {
  color: #0071dc;
  font-weight: 500;
}
.menu-column__link {
  display: block;
  padding: 7px 0;
  font-size: 1.4rem;
  line-height: 142.857%;
}

.sub-menu {
  position: absolute;
  inset: 0 0 0 var(--main-column-width);
  display: none;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--inner-padding);
  padding-left: var(--inner-padding);
  overflow-y: auto;
}
@media (max-width: 991.98px) {
  .sub-menu {
    position: initial;
    grid-template-columns: 1fr;
    padding-left: 0;
  }
}
.sub-menu--not-main {
  position: initial;
  inset: initial;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: var(--max-inner-height);
  padding-left: 0;
}
@media (max-width: 991.98px) {
  .sub-menu--not-main {
    grid-template-columns: 1fr;
    height: auto;
  }
}

.slideshow {
  position: relative;
}
.slideshow__inner {
  display: flex;
  overflow: hidden;
}
.slideshow__item {
  position: relative;
  flex-shrink: 0;
  width: 100%;
  padding-top: 26%;
}
@media (max-width: 767.98px) {
  .slideshow__item {
    padding-top: 50%;
  }
}
.slideshow__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}
.slideshow__page {
  --color: #fff;
  position: absolute;
  bottom: 15%;
  left: 5.2%;
  width: 12.8%;
  display: flex;
  align-items: center;
  column-gap: 24px;
}
.slideshow__num {
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 144.444%;
  color: var(--color);
}
@media (max-width: 767.98px) {
  .slideshow__num {
    font-size: 1.4rem;
    line-height: 142.857%;
  }
}
.slideshow__slider {
  position: relative;
  width: 100%;
  height: 4px;
  flex-shrink: 0;
  background: var(--color);
}
.slideshow__slider::before, .slideshow__slider::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 14px;
  height: 14px;
  border: 4px solid var(--color);
  border-radius: 50%;
}
@media (max-width: 767.98px) {
  .slideshow__slider::before, .slideshow__slider::after {
    border-width: 3px;
  }
}
.slideshow__slider::before {
  left: 0;
  translate: -90% -50%;
}
.slideshow__slider::after {
  right: 0;
  translate: 90% -50%;
}

.cate-item {
  display: flex;
  gap: 20px;
  height: 100%;
  padding: 20px;
  border-radius: 16px;
  background: var(--cate-item-bg);
}
@media (max-width: 1199.98px) {
  .cate-item {
    flex-direction: column;
  }
}
@media (max-width: 767.98px) {
  .cate-item {
    flex-direction: row;
  }
}
.cate-item__thumb {
  display: block;
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 8px;
  background: var(--cate-item-thumb-bg);
}
@media (max-width: 1199.98px) {
  .cate-item__thumb {
    width: 100%;
    height: 150px;
    margin: 0 auto;
  }
}
@media (max-width: 767.98px) {
  .cate-item__thumb {
    width: 88px;
    height: 88px;
    margin: 0;
  }
}
.cate-item__info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 30px;
}
@media (max-width: 1399.98px) {
  .cate-item__info {
    padding-right: 0;
  }
}
.cate-item__title {
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 145.455%;
  color: var(--cate-item-title-color);
}
@media (max-width: 767.98px) {
  .cate-item__title {
    font-size: 1.8rem;
  }
}
.cate-item__desc {
  margin-top: 6px;
  font-size: 1.6rem;
  line-height: 150%;
}
@media (max-width: 767.98px) {
  .cate-item__desc {
    font-size: 1.4rem;
  }
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: 14px;
  height: 36px;
  padding: 0 14px;
  border-radius: 6px;
  color: var(--filter-btn-color);
  background: var(--filter-btn-bg);
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 142.857%;
}

.like-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0px 20px 60px rgba(124, 124, 124, 0.2);
}
.like-btn:not(.like-btn--liked) .like-btn__icon--liked {
  display: none;
}
.like-btn--liked .like-btn__icon {
  display: none;
}
.like-btn__icon--liked {
  margin-top: 6px;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 46px;
  padding: 0 20px;
  border-radius: 6px;
  background: #f8f8fb;
  font-size: 1.8rem;
  font-weight: 500;
  white-space: nowrap;
  user-select: none;
}
.btn--small {
  height: 40px;
}
.btn + .btn:not(.btn--no-margin) {
  margin-left: 20px;
}
.btn--text {
  background: transparent;
  font-weight: 400;
}
.btn--primary {
  color: #171c28;
  background: #ffb700;
}
.btn--outline {
  background: transparent;
  border: 1px solid #d2d1d6;
}
.btn--rounded {
  border-radius: 99px;
}
.btn--danger {
  color: #fff;
  background: #ed4337;
}
.btn[disabled], .btn--disabled {
  opacity: 0.5;
  pointer-events: none;
}
.btn:hover {
  opacity: 0.9;
}

.product-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px;
  border-radius: 20px;
  background: var(--product-card-bg);
  box-shadow: 0px 20px 60px 10px var(--product-card-shadow);
}
.product-card__img-wrap {
  position: relative;
  padding-top: 100%;
}
.product-card__thumb {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.product-card__like-btn {
  position: absolute;
  right: 0;
  bottom: 0;
}
.product-card__title {
  margin-top: 16px;
}
.product-card__title, .product-card__price, .product-card__score {
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 150%;
}
.product-card__brand {
  margin: 16px 0;
  color: #9e9da8;
  font-size: 1.5rem;
  line-height: 146.667%;
}
.product-card__row {
  display: flex;
  align-items: center;
  margin-top: auto;
}
.product-card__star {
  margin: 0 6px 0 auto;
}

.filter-wrap {
  position: relative;
  z-index: 1;
}

.filter {
  position: absolute;
  right: 0;
  top: 55px;
  padding: 30px 0;
  border-radius: 20px;
  background: var(--filter-form-bg);
  filter: drop-shadow(0px 40px 90px var(--filter-form-shadow));
  transition: opacity, visibility;
  transition-duration: 0.2s;
}
@media (max-width: 575.98px) {
  .filter {
    width: 100vw;
    height: 100vh;
    position: fixed;
    inset: 0;
    border-radius: 0;
  }
}
.filter.hide {
  opacity: 0;
  visibility: hidden;
}
.filter__arrow {
  position: absolute;
  top: -15px;
  right: 24px;
  height: 20.5px;
  filter: var(--filter-form-arrow);
}
.filter__heading {
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 145.455%;
}
.filter__form {
  margin-top: 30px;
}
.filter__form-group {
  margin-top: 20px;
}
.filter__form-group--inline {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}
.filter__form-slider {
  position: relative;
  width: 100%;
  height: 2px;
  background: #d2d1d6;
}
.filter__form-slider::before, .filter__form-slider::after {
  content: "";
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 6px solid #ffb700;
  background: var(--filter-form-bg);
}
.filter__form-slider::before {
  left: var(--min-value);
}
.filter__form-slider::after {
  left: var(--max-value);
}
.filter__form-text-input {
  border-radius: 6px;
  border: 1px solid #d2d1d6;
}
.filter__form-text-input {
  display: flex;
  align-items: center;
  width: 334px;
  height: 44px;
  padding: 0 16px;
  overflow: hidden;
}
.filter__form-text-input--small {
  width: 121px;
  height: 36px;
  padding: 0 12px;
}
@media (max-width: 1199.98px) {
  .filter__form-text-input--small {
    width: 100%;
  }
}
@media (max-width: 575.98px) {
  .filter__form-text-input {
    width: 100%;
  }
}
.filter__form-text-input--small .filter__form-input {
  font-size: 1.4rem;
}
.filter__form-input {
  width: 100%;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 146.667%;
}
.filter__form-input::placeholder {
  color: #9e9da8;
  font-weight: 400;
}
@media (max-width: 575.98px) {
  .filter__form-input {
    font-size: 1.6rem !important;
  }
}
.filter__form-input-icon {
  margin-left: 12px;
}
.filter__row {
  display: flex;
}
.filter__separate {
  width: 1px;
  margin: 0 30px;
  background: #eee;
}
@media (max-width: 1199.98px) {
  .filter__separate {
    width: 100%;
    height: 1px;
    margin: 30px 0;
  }
}
.filter__footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 32px;
}
@media (max-width: 575.98px) {
  .filter__footer {
    position: sticky;
    bottom: 30px;
    background: var(--filter-form-bg);
  }
}
.filter__cancel, .filter__submit {
  height: 38px;
  padding: 0 10px;
}
@media (max-width: 575.98px) {
  .filter__cancel, .filter__submit {
    flex: 1;
    height: 42px;
  }
}
.filter__cancel {
  font-size: 1.5rem;
}
.filter__submit {
  font-size: 1.4rem;
}
.filter__heading, .filter__content, .filter__footer {
  padding: 0 30px;
}
.filter__content {
  max-height: calc(100vh - 350px);
  overflow-y: auto;
  overscroll-behavior: contain;
}
@media (max-width: 1199.98px) {
  .filter__content {
    flex-direction: column;
  }
}
@media (max-width: 575.98px) {
  .filter__content {
    max-height: calc(100vh - 230px);
    padding-bottom: 60px;
  }
}

.form:has(:invalid) .form__submit-btn {
  opacity: 0.5;
  pointer-events: none;
}
.form__row {
  display: flex;
  gap: 30px;
}
@media (max-width: 767.98px) {
  .form__row {
    gap: 20px;
  }
}
@media (max-width: 575.98px) {
  .form__row {
    flex-direction: column;
    gap: 0;
  }
}
.form__row > * {
  flex: 1;
}
.form__group {
  margin-top: 30px;
}
@media (max-width: 767.98px) {
  .form__group {
    margin-top: 20px;
  }
}
.form__group--inline {
  display: flex;
  align-items: center;
}
.form__group:has(:invalid):has(.form__input:not(:placeholder-shown)) .form__text-input {
  border-color: #ed4337;
  background: rgba(237, 67, 55, 0.1);
}
.form__group:has(:invalid):has(.form__input:not(:placeholder-shown)) .form__error,
.form__group:has(:invalid):has(.form__input:not(:placeholder-shown)) .form__input-icon-error {
  display: block;
}
.form__group:has(:invalid):has(.form__input:not(:placeholder-shown)) .form__input-icon {
  display: none;
}
.form__text-area, .form__text-input {
  display: flex;
  align-items: center;
  padding: 0 12px;
  border-radius: 10px;
  border: 1px solid #d2d1d6;
}
.form__text-area:focus-within, .form__text-input:focus-within {
  border-color: #77dae6;
}
.form__text-area {
  height: 100px;
  padding: 12px;
}
.form__text-area-input {
  resize: none;
}
.form__text-input {
  position: relative;
  height: 48px;
}
.form__text-input--small {
  height: 42px;
}
@media (max-width: 767.98px) {
  .form__text-input {
    height: 48px;
  }
}
.form__input, .form__text-area-input {
  flex: 1;
  width: 100%;
  height: 100%;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 144.444%;
}
.form__input::placeholder, .form__text-area-input::placeholder {
  color: var(--form-placeholder-color);
}
@media (max-width: 767.98px) {
  .form__input, .form__text-area-input {
    font-size: 1.6rem;
  }
}
.form__input-icon {
  margin-left: 12px;
}
.form__select-dialog {
  position: absolute;
  bottom: 44px;
  left: 10px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  opacity: 0;
  visibility: hidden;
  translate: 0 8px;
  transition: opacity, visibility, translate;
  transition-duration: 0.2s;
  min-width: 230px;
  max-height: 310px;
  padding-bottom: 10px;
  border: 1px solid #d2d1d6;
  border-radius: 10px;
  box-shadow: 0 0 5px var(--form-select-dialog-shadow);
  background: var(--form-select-dialog-bg);
}
.form__select-dialog.show {
  opacity: 1;
  visibility: visible;
  translate: 0;
}
@media (max-width: 575.98px) {
  .form__select-dialog {
    position: fixed;
    max-width: initial;
    max-height: initial;
    inset: 0;
    border-radius: 0;
  }
}
.form__dialog-heading {
  padding: 20px;
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
}
.form__close-dialog {
  font-size: 3rem;
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 18px;
  opacity: 0.8;
}
.form__search {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 38px;
  padding: 0 20px;
  border-bottom: 1px solid #d2d1d6;
}
.form__search-input {
  flex: 1;
  height: 100%;
  font-size: 1.6rem;
}
.form__search-icon {
  width: 16px;
  margin-left: 10px;
}
@media (max-width: 991.98px) {
  .form__search {
    height: 48px;
  }
  .form__search-icon {
    width: 20px;
  }
}
@media (max-width: 575.98px) {
  .form__search {
    padding: 0 14px;
    border: 1px solid #d2d1d6;
    margin: 10px 30px 0;
    border-radius: 10px;
  }
}
.form__options-list {
  flex: 1;
  margin-top: 10px;
  overflow-y: auto;
  overscroll-behavior: contain;
}
@supports (-webkit-touch-callout: none) {
  .form__options-list {
    padding-bottom: 300px;
  }
}
.form__option {
  padding: 8px 20px;
  font-size: 1.4rem;
}
.form__option--current {
  font-weight: 500;
  background: rgba(255, 183, 0, 0.6);
}
.form__option:not(.form__option--current):hover {
  background: var(--form-option-hover-bg);
  cursor: pointer;
}
@media (max-width: 991.98px) {
  .form__option {
    padding: 18px 30px;
    font-size: 1.6rem;
  }
}
.form__error {
  text-align: left;
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 10px;
  color: #ed4337;
  display: none;
}
.form__input-icon-error {
  display: none;
  margin-left: 12px;
  animation: shake 0.5s;
}
.form__pull-right {
  margin-left: auto;
}
.form__checkbox {
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
}
.form__checkbox-label {
  margin-left: 29px;
  color: #9e9da8;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 146.667%;
}
@media (max-width: 767.98px) {
  .form__checkbox-label {
    font-size: 1.4rem;
  }
}
.form__checkbox::before, .form__checkbox::after {
  content: "";
  position: absolute;
}
.form__checkbox::before {
  width: 19px;
  height: 19px;
  border-radius: 5px;
  border: 1px solid #9e9da8;
}
.form__checkbox:has(:checked)::before {
  border-color: #ffb700;
  background: #ffb700;
}
.form__checkbox:has(:checked)::after {
  width: 15px;
  height: 8px;
  border: 3px solid;
  border-color: transparent transparent #fff #fff;
  rotate: -45deg;
  left: 2px;
  top: 4px;
}
.form__label {
  display: block;
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 145.455%;
}
.form__label--medium {
  margin-bottom: 20px;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 144.444%;
}
.form__label--small {
  margin-bottom: 10px;
  font-size: 1.4rem;
  line-height: 142.857%;
}
.form__select-wrap {
  display: flex;
  align-items: center;
  height: 45px;
  border-radius: 6px;
  border: 1px solid #d2d1d6;
}
.form__select {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
  min-width: var(--width, 108px);
  height: calc(100% - 10px);
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 142.857%;
  cursor: pointer;
}
@media (max-width: 1199.98px) {
  .form__select {
    flex: 1;
  }
}
.form__select + .form__select {
  border-left: 1px solid #d2d1d6;
}
.form__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
}
@media (max-width: 575.98px) {
  .form__tags {
    gap: 10px;
  }
}
.form__tag {
  padding: 6px 12px;
  border-radius: 6px;
  color: #9e9da8;
  background: var(--form-tag-bg);
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 142.857%;
  transition: color 0.2s;
}
.form__tag:hover {
  color: var(--text-color);
}

.message {
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: left;
}
.message--success {
  border: 1px solid #5bc45f;
  background: rgba(39, 243, 117, 0.2);
}

.breadcrumbs {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  min-height: 64px;
  padding: 20px;
  border-radius: 10px;
  background: var(--breadcrumbs-bg);
  box-shadow: 0px 20px 60px 10px var(--breadcrumbs-shadow);
}
@media (max-width: 767.98px) {
  .breadcrumbs {
    gap: 16px;
    border-radius: 20px;
  }
}
.breadcrumbs__link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #9e9da8;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 150%;
  white-space: nowrap;
}
@media (max-width: 767.98px) {
  .breadcrumbs__link {
    font-size: 1.4rem;
  }
}
.breadcrumbs__link--current {
  color: inherit;
}

.search-bar {
  align-items: center;
  height: 50px;
  border-radius: 20px;
  background: var(--search-bar-bg);
}
.search-bar__input {
  flex: 1;
  height: 100%;
  padding-left: 15px;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 142.857%;
}
.search-bar__input::placeholder {
  color: #9e9da8;
  font-weight: 400;
}
.search-bar__submit {
  height: 100%;
  padding: 0 15px;
}

.review-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 30px;
  border-radius: 16px;
  background: var(--review-card-bg);
}
.review-card__content {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}
@media (max-width: 1199.98px) {
  .review-card__content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
@media (max-width: 767.98px) {
  .review-card__content {
    flex-direction: row;
    align-items: initial;
    text-align: initial;
  }
}
.review-card__avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}
.review-card__title {
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 145.455%;
}
.review-card__desc {
  margin-top: 10px;
  font-size: 1.6rem;
  line-height: 150%;
}
.review-card__rating {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
}
@media (max-width: 1199.98px) {
  .review-card__rating {
    flex-direction: column;
  }
}
@media (max-width: 767.98px) {
  .review-card__rating {
    flex-direction: row;
  }
}
.review-card__rating-title {
  margin-left: 12px;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 144.444%;
}
.review-card__star-list {
  display: flex;
  gap: 8px;
}

.text-content {
  font-size: 1.6rem;
  line-height: 1.6;
}
.text-content h1,
.text-content h2,
.text-content h3,
.text-content h4,
.text-content h5,
.text-content h6 {
  font-weight: 600;
}
.text-content h1 {
  font-size: 2.6rem;
}
.text-content h2 {
  font-size: 2.2rem;
}
.text-content h3 {
  font-size: 1.8rem;
}
.text-content h4 {
  font-size: 1.6rem;
}
.text-content h5 {
  font-size: 1.4rem;
}
.text-content h6 {
  font-size: 1.2rem;
}
.text-content h1,
.text-content h2,
.text-content h3,
.text-content h4,
.text-content h5,
.text-content h6,
.text-content p,
.text-content blockquote,
.text-content img,
.text-content figure,
.text-content ul,
.text-content ol,
.text-content table {
  margin: 20px 0;
}
.text-content img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 90%;
}
.text-content img + em {
  display: block;
  font-style: italic;
  text-align: center;
}
.text-content a {
  color: #0071dc;
  text-decoration: underline;
}
.text-content blockquote {
  background: rgba(119, 218, 230, 0.1);
  padding: 20px;
  border-left: 3px solid #77dae6;
}
.text-content blockquote p {
  margin: 0;
}
.text-content hr {
  border: none;
  height: 1px;
  margin: 40px 0;
  background: var(--text-content-hr-bg);
}

.modal__overlay, .modal {
  position: fixed;
  inset: 0;
}

.modal {
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity, visibility;
  transition-duration: 0.2s;
}
.modal.show {
  opacity: 1;
  visibility: visible;
}
.modal__close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  font-size: 3.5rem;
  padding: 3px 20px;
  opacity: 0.7;
}
.modal__close:hover {
  opacity: 1;
}
.modal__overlay {
  background: rgba(0, 0, 0, 0.4);
}
.modal__heading {
  font-size: 2rem;
  font-weight: 700;
  line-height: 141.667%;
}
.modal__body {
  padding-right: 20px;
  max-height: calc(100vh - 180px);
  overflow-y: auto;
}
.modal__content {
  position: relative;
  z-index: 1;
  width: min(var(--content-width, 800px), 100% - 40px);
  padding: 30px 10px 30px 30px;
  border-radius: 20px;
  background: var(--dialog-bg);
  box-shadow: 0px 20px 60px 10px var(--dialog-shadow);
}
@media (max-width: 575.98px) {
  .modal__content {
    padding: 20px 0 20px 20px;
  }
}
.modal--small .modal__content {
  --content-width: 400px;
}
.modal--large .modal__content {
  --content-width: 1100px;
}
.modal--fill .modal__content {
  width: 100%;
  height: 100%;
  border-radius: 0;
}
.modal__text {
  font-size: 1.8rem;
  line-height: 1.5;
}
.modal__bottom {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 50px;
  padding-right: 20px;
}
@media (max-width: 767.98px) {
  .modal__bottom {
    gap: 20px;
  }
}
@media (max-width: 575.98px) {
  .modal__bottom {
    margin-top: 40px;
  }
}
@media (max-width: 767.98px) {
  .modal__btn {
    flex: 1;
  }
}

.payment-card {
  position: relative;
  z-index: 0;
  height: 100%;
  padding: 20px;
  border-radius: 10px;
  color: #fff;
  background: var(--bg-color);
  overflow: hidden;
  user-select: none;
}
.payment-card__img {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  pointer-events: none;
}
.payment-card__top {
  display: flex;
  align-items: center;
  gap: 6px;
}
.payment-card__type {
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 142.857%;
}
.payment-card__number {
  margin-top: 37px;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 144.444%;
}
.payment-card__bottom {
  display: flex;
  margin-top: 20px;
}
.payment-card__label {
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 175%;
}
.payment-card__value {
  font-size: 1rem;
  font-weight: 500;
  line-height: 140%;
}
.payment-card__expired {
  margin: 0 auto 0 40px;
}
.payment-card__circle {
  --circle-width: 28px;
  position: relative;
  width: 42px;
  height: var(--circle-width);
}
.payment-card__circle::before, .payment-card__circle::after {
  content: "";
  position: absolute;
  top: 0;
  width: var(--circle-width);
  height: var(--circle-width);
  border-radius: 50%;
}
.payment-card__circle::before {
  left: 0;
  z-index: 1;
  background: #f94545;
  mix-blend-mode: hard-light;
}
.payment-card__circle::after {
  right: 0;
  background: #ffb700;
}

.new-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  height: 100%;
  min-height: 170px;
  border-radius: 10px;
  border: 1px dashed #d2d1d6;
}
.new-card__text {
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 142.857%;
}

.account-info {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  background: var(--account-info-bg);
}
.account-info__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 54px;
  height: 54px;
  border-radius: 8px;
  background: var(--account-info-icon-bg);
}
.account-info__title {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 146.667%;
}
.account-info__desc {
  margin-top: 6px;
  font-size: 1.4rem;
  line-height: 142.857%;
}

.favourite-item {
  display: flex;
  align-items: center;
  gap: 20px;
}
.favourite-item__thumb {
  width: 110px;
}
@media (max-width: 991.98px) {
  .favourite-item__thumb {
    width: 80px;
  }
}
.favourite-item__title {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 146.667%;
}
.favourite-item__content {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
}
@media (max-width: 575.98px) {
  .favourite-item__content {
    flex-direction: column;
    align-items: flex-start;
  }
}
.favourite-item__price {
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 145.455%;
}

.home {
  margin-bottom: 50px;
}
.home__container {
  margin-top: 40px;
}
@media (max-width: 767.98px) {
  .home__container {
    margin-top: 30px;
  }
}
.home__heading {
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 141.667%;
}
.home__cate {
  --grid-gutter-x: 51px;
}
@media (max-width: 991.98px) {
  .home__cate {
    --grid-gutter-x: 24px;
  }
}
@media (max-width: 767.98px) {
  .home__cate {
    --grid-gutter-y: 20px;
  }
}
.home__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.auth {
  display: flex;
  min-height: 100vh;
}
@supports (-webkit-touch-callout: none) {
  .auth {
    min-height: -webkit-fill-available;
  }
}
.auth__intro, .auth__content {
  flex: 1;
  padding: 0 30px;
}
.auth__intro {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  background: var(--auth-intro-bg);
}
.auth__intro-logo, .auth__intro-next {
  position: absolute;
  left: 50%;
  translate: -50%;
}
.auth__intro-logo {
  top: 80px;
}
.auth__intro-next {
  bottom: 50px;
}
.auth__intro-img {
  width: min(424px, 100%);
}
.auth__intro-text {
  max-width: 412px;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 144.444%;
  color: var(--auth-intro-text-color);
}
@media (max-width: 767.98px) {
  .auth__intro-text {
    font-size: 1.5rem;
  }
}
.auth__content {
  background: var(--auth-content-bg);
}
@media (max-width: 767.98px) {
  .auth__content {
    position: fixed;
    inset: 0;
    z-index: 1;
    transition: translate 0.3s;
    overflow-y: auto;
  }
  .auth__content.hide {
    translate: 100%;
  }
}
.auth__content-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: min(460px, 100%);
  margin: 0 auto;
  padding: 50px 0;
}
@media (max-width: 767.98px) {
  .auth__content-inner {
    padding: 32px 0;
  }
}
.auth__heading {
  margin-top: 50px;
  font-size: 3rem;
  font-weight: 500;
  line-height: 146.667%;
  color: var(--auth-heading-color);
}
@media (max-width: 767.98px) {
  .auth__heading {
    margin-top: 40px;
    font-size: 2.2rem;
  }
}
.auth__desc {
  margin-top: 10px;
  padding: 0 20px;
  color: #9e9da8;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 146.667%;
}
@media (max-width: 767.98px) {
  .auth__desc {
    font-size: 1.4rem;
  }
}
.auth__message {
  margin-top: 30px;
}
.auth__form {
  width: 100%;
  margin-top: 30px;
}
.auth__form-forgot {
  margin-top: 10px;
}
@media (max-width: 767.98px) {
  .auth__form {
    margin-top: 0;
  }
}
.auth__link {
  color: #0071dc;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 146.667%;
}
@media (max-width: 767.98px) {
  .auth__link {
    font-size: 1.4rem;
  }
}
.auth__btn-group {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 50px;
}
@media (max-width: 767.98px) {
  .auth__btn-group {
    margin-top: 40px;
    gap: 20px;
  }
}
.auth__btn {
  width: 100%;
}
.auth__text {
  margin-top: 108px;
  color: #9e9da8;
  font-size: 1.8rem;
  line-height: 144.444%;
}
@media (max-width: 767.98px) {
  .auth__text {
    margin-top: 40px;
    font-size: 1.6rem;
  }
}
.auth__text-link {
  font-size: inherit;
}

.product-page {
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  padding-bottom: 50px;
  background: var(--product-detail-bg);
}

.product-container {
  margin-top: 30px;
}
@media (max-width: 767.98px) {
  .product-container {
    margin-top: 20px;
  }
}

.prod-info-content {
  border-radius: 20px;
  background: var(--product-detail-info-content-bg);
}

.prod-preview {
  padding: 0 30px;
}
@media (max-width: 991.98px) {
  .prod-preview {
    display: flex;
    flex-direction: row-reverse;
  }
}
@media (max-width: 767.98px) {
  .prod-preview {
    padding: 16px;
  }
}
.prod-preview__list {
  display: flex;
  overflow: hidden;
}
@media (max-width: 991.98px) {
  .prod-preview__list {
    flex: 1;
  }
}
.prod-preview__item {
  position: relative;
  width: 100%;
  flex-shrink: 0;
  padding-top: 92%;
}
.prod-preview__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.prod-preview__thumbs {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 30px;
}
@media (max-width: 991.98px) {
  .prod-preview__thumbs {
    flex-direction: column;
    padding-left: 0;
  }
}
@media (max-width: 767.98px) {
  .prod-preview__thumbs {
    display: none;
  }
}
.prod-preview__thumb-img {
  width: 65px;
  height: 65px;
  object-fit: contain;
  border: 1px solid rgba(158, 157, 168, 0.3);
  border-radius: 8px;
  opacity: 0.9;
  transition: opacity, border-color;
  transition-duration: 0.3s;
}
.prod-preview__thumb-img:not(.prod-preview__thumb-img--current):hover {
  opacity: 1;
  border-color: #9e9da8;
  cursor: pointer;
}
.prod-preview__thumb-img--current {
  opacity: 1;
  border-color: #ffb700;
}

.prod-info {
  padding: 60px;
  border-radius: 10px;
  background: var(--product-detail-info-bg);
}
@media (max-width: 1399.98px) {
  .prod-info {
    padding: 40px;
  }
}
@media (max-width: 991.98px) {
  .prod-info {
    margin-top: 30px;
  }
}
@media (max-width: 767.98px) {
  .prod-info {
    border-radius: 20px;
    padding: 0 16px 16px;
    margin-top: 0;
  }
}
.prod-info__heading {
  font-size: 2.6rem;
  font-weight: 500;
  line-height: 138.462%;
}
.prod-info__label {
  margin-top: 30px;
}
.prod-info__tag {
  background: var(--product-detail-tag-bg);
}
.prod-info__card {
  margin-top: 30px;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #b9babe;
}
.prod-info__row {
  display: flex;
  align-items: center;
}
.prod-info__price {
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 150%;
}
.prod-info__tax {
  padding: 2px 8px;
  border-radius: 4px;
  margin-left: 10px;
  background: rgba(103, 176, 68, 0.2);
  color: #67b044;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 142.857%;
}
.prod-info__total-price {
  margin: 20px 0;
  font-size: 2.6rem;
  font-weight: 500;
  line-height: 138.462%;
}
.prod-info__add-to-cart {
  flex: 1;
}
.prod-info__like-btn {
  width: 46px;
  height: 46px;
  margin-left: 20px;
  border-radius: 6px;
  border: 1px solid #d2d1d6;
  background: transparent;
}

.prod-props {
  padding-left: 30px;
}
@media (max-width: 1399.98px) {
  .prod-props {
    padding-left: 10px;
  }
}
@media (max-width: 991.98px) {
  .prod-props {
    padding-left: 0;
  }
}

.prod-prop {
  display: flex;
  gap: 16px;
  margin-top: 30px;
}
.prod-prop__icon {
  align-self: flex-start;
}
.prod-prop__title {
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 144.444%;
}
.prod-prop__desc {
  margin-top: 4px;
  font-size: 1.4rem;
  line-height: 142.857%;
}

.prod-tab__list {
  display: flex;
  align-items: center;
  margin: 0 -30px;
}
@media (max-width: 767.98px) {
  .prod-tab__list {
    margin: 0 -20px;
    flex-wrap: wrap;
  }
}
.prod-tab__item {
  padding: 0 30px;
  color: #9e9da8;
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 145.455%;
  user-select: none;
  white-space: nowrap;
}
@media (max-width: 767.98px) {
  .prod-tab__item {
    padding: 8px 20px;
    font-size: 1.8rem;
  }
}
.prod-tab__item:not(.prod-tab__item--current) {
  cursor: pointer;
}
.prod-tab__item--current {
  color: inherit;
}
.prod-tab__contents {
  padding-top: 30px;
}
.prod-tab__content {
  display: none;
}
.prod-tab__content--current {
  display: block;
}
.prod-tab__text-content {
  margin-top: -20px;
}

.prod-content__heading {
  margin-bottom: 30px;
  font-size: 2.2rem;
  font-weight: 600;
  line-height: 141.667%;
}

.checkout-page {
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  padding-bottom: 50px;
}
.checkout-page__breadcrumbs {
  background: var(--checkout-breadcrumbs-bg);
}

.checkout-container {
  margin-top: 30px;
}
@media (max-width: 767.98px) {
  .checkout-container {
    margin-top: 20px;
  }
}

.cart-info {
  padding: 30px;
  border-radius: 20px;
  background: var(--checkout-cart-info-bg);
  box-shadow: 0px 20px 60px 10px var(--checkout-cart-info-shadow);
}
@media (max-width: 767.98px) {
  .cart-info {
    padding: 16px;
  }
}
.cart-info__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}
.cart-info__back-arrow {
  width: 50px;
  padding-right: 20px;
  position: relative;
  top: 4px;
}
.cart-info__heading {
  display: flex;
  align-items: center;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 141.667%;
}
.cart-info__heading--lv2 {
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 145.455%;
}
.cart-info__sub-heading {
  margin: 30px 0;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 144.444%;
}
.cart-info__desc {
  margin-top: 6px;
  font-size: 1.5rem;
  line-height: 146.667%;
}
.cart-info__form {
  margin-bottom: 30px;
}
.cart-info__list {
  margin-top: -30px;
}
@media (max-width: 767.98px) {
  .cart-info__list {
    margin-top: -16px;
  }
}
.cart-info__bottom {
  margin-top: 30px;
}
.cart-info__row, .cart-info__continue-link {
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 144.444%;
}
.cart-info__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}
.cart-info__row--bold {
  font-size: 2.2rem;
  font-weight: 700;
}
@media (max-width: 767.98px) {
  .cart-info__row-md--block {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }
}
.cart-info__separate {
  margin: 30px 0;
  height: 1px;
  background: var(--checkout-border-color);
}
.cart-info__continue {
  height: 100%;
  display: flex;
  align-items: flex-end;
}
.cart-info__continue-link {
  display: flex;
  align-items: center;
  gap: 10px;
}
.cart-info__continue-icon {
  rotate: 90deg;
  transition: translate 0.3s;
}
.cart-info__continue-link:hover .cart-info__continue-icon {
  translate: -5px;
}
.cart-info__sub-label {
  font-weight: 400;
}
.cart-info__next-btn {
  margin-top: 30px;
}
.cart-info__edit-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.8rem;
  line-height: 144.444%;
}
.cart-info__checkbox-input {
  appearance: none;
}
.cart-info__checkbox-input::before {
  content: url("../icons/checkbox-uncheck.svg");
}
.cart-info__checkbox-input:not(:checked)::before {
  filter: var(--icon-color);
}
.cart-info__checkbox-input:checked::before {
  content: url("../icons/checkbox-checked.svg");
}
.cart-info__form-row {
  flex-direction: row;
  gap: 20px;
}
.cart-info__check-all {
  margin: 30px 0;
}
@media (max-width: 767.98px) {
  .cart-info__checkout-all {
    width: 100%;
  }
}

.cart-info + .cart-info {
  margin-top: 30px;
}

.cart-item {
  display: flex;
  padding: 30px 0;
  border-bottom: 1px solid var(--checkout-border-color);
}
@media (max-width: 767.98px) {
  .cart-item {
    padding: 16px 0;
  }
  .cart-item:last-child {
    border: none;
  }
}
.cart-item__thumb {
  width: 172px;
  height: 172px;
  margin: 0 30px 0 20px;
  object-fit: contain;
}
@media (max-width: 1399.98px) {
  .cart-item__thumb {
    width: 150px;
    height: 150px;
  }
}
@media (max-width: 991.98px) {
  .cart-item__thumb {
    width: 100px;
    height: 100px;
  }
}
@media (max-width: 767.98px) {
  .cart-item__thumb {
    width: 60px;
    height: 60px;
    margin: 0 16px;
  }
}
.cart-item__content {
  flex: 1;
  display: flex;
  align-self: flex-start;
}
.cart-item__content-left {
  flex: 1;
}
.cart-item__content-right {
  display: flex;
  flex-direction: column;
}
@media (max-width: 767.98px) {
  .cart-item__content {
    flex-direction: column;
  }
  .cart-item__content-right {
    margin-top: 16px;
  }
}
.cart-item__title {
  max-width: 374px;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 144.444%;
}
.cart-item__price-wrap {
  margin: 16px 0;
  color: #9e9da8;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 144.444%;
}
.cart-item__status {
  color: #67b044;
}
.cart-item__ctrl-wrap {
  display: flex;
  align-items: center;
  gap: 30px;
}
@media (max-width: 991.98px) {
  .cart-item__ctrl-wrap {
    flex-direction: column;
    align-items: flex-start;
  }
}
.cart-item__ctrl {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: auto;
  min-height: 44px;
}
@media (max-width: 575.98px) {
  .cart-item__ctrl {
    gap: 10px;
  }
}
@media (max-width: 767.98px) {
  .cart-item__ctrl--md-block {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}
.cart-item__input {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 44px;
  padding: 0 20px;
  border-radius: 10px;
  border: 1px solid #d2d1d6;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 146.667%;
}
.cart-item__input-btn {
  display: flex;
}
.cart-item__total-price {
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 145.455%;
  text-align: right;
}
@media (max-width: 767.98px) {
  .cart-item__total-price {
    margin-bottom: 16px;
    text-align: left;
  }
}
.cart-item__ctrl-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #9e9da8;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 150%;
}
.cart-item__ctrl-btn:first-child {
  margin-right: 10px;
}
.cart-item__checkout-btn {
  margin-top: auto;
}
@media (max-width: 767.98px) {
  .cart-item__checkout-btn {
    max-width: 200px;
  }
}

.gift-item {
  display: flex;
  gap: 20px;
}
.gift-item__icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 76px;
  height: 76px;
  border-radius: 14px;
  background: rgba(118, 68, 225, 0.1);
  box-shadow: 0px 20px 60px 10px var(--checkout-gift-shadow);
}
.gift-item__title {
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 144.444%;
}
.gift-item__desc {
  margin-top: 10px;
  font-size: 1.4rem;
  line-height: 142.857%;
}

.user-address__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
@media (max-width: 767.98px) {
  .user-address__top {
    flex-direction: column;
    align-items: flex-start;
  }
}
@media (max-width: 767.98px) {
  .user-address__btn {
    height: 46px;
  }
}
.user-address__title {
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 144.444%;
}
.user-address__desc {
  margin-top: 4px;
  font-size: 1.5rem;
  line-height: 146.667%;
}
.user-address__message {
  margin-top: 30px;
  font-weight: 500;
}
.user-address__link {
  color: #0071dc;
}

.address-card {
  display: flex;
  margin-top: 30px;
  gap: 16px;
}
@media (max-width: 767.98px) {
  .address-card {
    flex-direction: column;
  }
}
.address-card__left {
  flex: 1;
  display: flex;
  gap: 16px;
}
.address-card__title {
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 144.444%;
}
.address-card__desc {
  width: min(520px, 90%);
  margin-top: 4px;
  font-size: 1.5rem;
  line-height: 146.667%;
}
.address-card__list {
  display: flex;
  gap: 30px;
  margin-top: 20px;
  list-style: disc inside;
  font-size: 1.4rem;
  line-height: 142.857%;
}
@media (max-width: 575.98px) {
  .address-card__list {
    flex-direction: column;
    gap: 16px;
  }
}
.address-card__list-item {
  margin-left: 8px;
}
.address-card__ctrl {
  height: 100%;
  display: flex;
  align-items: flex-end;
}

.payment-item {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
  padding: 20px;
  border-radius: 20px;
  background: var(--checkout-payment-item-bg);
}
@media (max-width: 575.98px) {
  .payment-item {
    align-items: flex-start;
  }
}
.payment-item--pointer {
  cursor: pointer;
}
.payment-item__thumb {
  width: 70px;
  height: 54px;
  object-fit: cover;
}
.payment-item__content {
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
}
@media (max-width: 575.98px) {
  .payment-item__content {
    flex-direction: column;
    align-items: flex-start;
  }
}
.payment-item__info {
  flex: 1;
}
.payment-item__title {
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 144.444%;
}
.payment-item__desc, .payment-item__detail {
  font-size: 1.5rem;
  line-height: 146.667%;
}
.payment-item__desc {
  margin-top: 4px;
}
.payment-item__detail {
  margin-right: -8px;
  padding: 8px;
  color: #0071dc;
}
.payment-item__checkbox {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 14px;
}
.payment-item__checkbox-input:checked + .payment-item__cost {
  color: inherit;
}
.payment-item__cost {
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 144.444%;
  color: #9e9da8;
}

.profile {
  margin-bottom: 50px;
}
.profile-container {
  margin-top: 30px;
}
.profile__sidebar {
  padding-bottom: 30px;
  border-radius: 20px;
  background: var(--profile-sidebar-bg);
  box-shadow: 0px 20px 60px 10px var(--profile-sidebar-shadow);
  overflow: hidden;
}
.profile-user {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px 20px;
  background: linear-gradient(180deg, rgba(26, 22, 46, 0) 0%, #1a162e 100%), url("../img/profile/cover.png") no-repeat center/cover;
  box-shadow: 0px 20px 60px 10px var(--profile-sidebar-shadow);
  color: #fff;
}
.profile-user__avatar {
  width: 121px;
  height: 121px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0px 4px 14px 2px rgba(0, 0, 0, 0.08);
  border: 5px solid rgba(255, 255, 255, 0.2);
  background: #ccc content-box;
}
.profile-user__name {
  margin-top: 15px;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 144.444%;
}
.profile-user__desc {
  margin-top: 2px;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 146.667%;
}
.profile-menu {
  margin-top: 30px;
  padding: 0 30px;
}
.profile-menu__title {
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 144.444%;
}
.profile-menu__list {
  margin-top: 11px;
}
.profile-menu__link {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 32px;
  padding: 0 4px;
  border-radius: 5px;
  font-size: 1.5rem;
  line-height: 146.667%;
  transition: background-color 0.2s;
}
.profile-menu__link:hover {
  background: var(--profile-sidebar-link-hover);
}
.profile-menu__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 100%;
}
.profile__desc {
  margin-bottom: 16px;
}

.form-card__label {
  margin-bottom: 20px;
  font-size: 1.8rem;
}
.form-card__bottom {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}

/*# sourceMappingURL=main.css.map */



`;

export default GlobalStyle;