import { createGlobalStyle } from 'styled-components';
import { colors, fonts } from '../variables';

/**
 * Global styles that are applied to the entire application. This eliminates
 * the requirement for having to process or maintain any CSS/SCSS/etc. files
 * NOTE: The `<GlobalStyles />` element is placed in the App / Root component.
 */
export const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

body {
    background-color: ${colors.bg.light};
    color: ${colors.fg.main};
    font-family: ${fonts.familySans};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
}

h1,
h2,
h3 {
	color: ${colors.fg.header};
}

h4,
h5,
h6 {
	color: ${colors.fg.main};
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote::before,
blockquote::after,
q::before,
q::after {
    content: '';
    content: none;
}

a {
    color: inherit;
    text-decoration: none;
    &:-moz-focusring,
    &:focus {
        outline: none;
    }
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

caption {
    caption-side: bottom;
}

th {
    text-align: inherit;
}

hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
}

pre,
code,
kbd,
samp {
    font-family: ${fonts.familyCode};
}

pre {
    overflow: auto;
    -ms-overflow-style: scrollbar;
}

a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}

abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
    cursor: help;
    text-decoration-skip-ink: none;
}

b,
strong {
    font-weight: bolder;
}

small {
    font-size: 80%;
    font-weight: 500;
}

sub,
sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
}

sub {
    bottom: -0.25em;
}

sup {
    top: -0.5em;
}

img {
    border-style: none;
}

svg:not(:root) {
    overflow: hidden;
}

button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
}

input,
button,
select,
optgroup,
textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

button,
[type='reset'],
[type='submit'],
[type='button'] {
    -webkit-appearance: button;
}

input[type='date'],
input[type='time'],
input[type='datetime-local'],
input[type='month'] {
    -webkit-appearance: listbox;
}

textarea {
    overflow: auto;
    resize: vertical;
}

button,
input {
    overflow: visible;
}

button,
select {
    text-transform: none;
}

select {
    word-wrap: normal;
}

button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
}

input[type='radio'],
input[type='checkbox'] {
    box-sizing: border-box;
    padding: 0;
}

[tabindex='-1']:focus {
    outline: 0 !important;
}

fieldset {
    min-width: 0;
}

legend {
    max-width: 100%;
    white-space: normal;
    color: inherit;
    display: block;
}

progress {
    vertical-align: baseline;
}

textarea {
    overflow: auto;
}

[type='checkbox'],
[type='radio'] {
    box-sizing: border-box;
    padding: 0;
}

[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
    height: auto;
}

[type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
}

[type='search']::-webkit-search-cancel-button,
[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
}

::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
}

output {
    display: inline-block;
}

template {
    display: none;
}

[hidden] {
    display: none;
}
`;
