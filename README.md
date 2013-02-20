labware
=======

A collection of HTML, CSS and images that can be used to represent laboratory equipment

In the data-main of the require.js start-up, the below shows the minum config requirements to ensure the component runs. The component makes use of requirejs-text and needs both that and the baseUrl to be defined for relative paths.

```
require.config({
  shim: {
  },
    
  baseUrl: '.',
  paths: {
    hm: 'vendor/hm',
    esprima: 'vendor/esprima',
    jquery: 'vendor/jquery.min',
    text: 'components/requirejs-text/text'
  }
});
```