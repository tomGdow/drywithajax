# drywithajax

Use Ajax to insert footer and table into second html page

## Summary

Ajax is used to 

1. Insert a table from a file (`table.html`) into a html page (`page2.html`)

2. Extract a footer from a html page (`index.html`) and insert it into another html page (`page2.html`) 

   

## Comments on Code 

1. An Ajax request (`makeAjaxRequest('./table.html', insertTable)`)  uses the function `insertTable()`  to insert the contents of `table.html` *as a string* into `page2.html`.  Specifically, the contents of `table.html` are inserted (as a string) into the `div` with `id='content'` within the DOM of `page2.html`
2. An Ajax request (`makeAjaxRequest('./index.html', insertFooter)`)  uses the function `insertFooter` to  obtain `index.html` as a string, parse the  response, extract the `footer` , and  insert it into `page2.html`. 
3. All of the relevant JavaScript is in the file `app.js`.

## Deployment 

Temporarily deployed at [https://drywithajax.tomgdow.com](https://drywithajax.tomgdow.com)