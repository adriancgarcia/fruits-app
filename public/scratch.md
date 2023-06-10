## Static File Serving

```
app.use(expres.static("folderName"))
```

url is xyz.com served from the public folder

|file|url|
|----|---| 
|public/index.html| xyz.com/ |
|public/cheese.html| xyz.com/cheese.html |
|public/style.css| xyz.com/style.css |
|public/css/style.css | xyz.com/css/style.css