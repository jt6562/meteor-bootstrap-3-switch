# Bootstrap 3 Switch - Meteor Smart Package

This is a the [bootstrap switch jquery plugin](https://github.com/nostalgiaz/bootstrap-switch) as a meteor smart package, specifically for use with bootstrap3

It is basically [Tim Heckels meteor-bootstrap-switch](https://github.com/TimHeckel/meteor-bootstrap-switch) but packages with the bootstrap3 files

##How to use?

###Install
```bash
meteor add jt6562:bootstrap-3-switch
```

###HTML
```html
<input type="checkbox" name="switch">
```

###Convert input tag to switch
```javascript
    $("[name='switch']").bootstrapSwitch({size: "small"});
```

###Event
```javascript
    $("[name='switch']").on('switchChange.bootstrapSwitch', function (event, data) {
        var status = data === true ? 'on' : 'off';

        Meteor.call('toggle', status);
    }); 
```
