    // The loaded file as an object.
    let loadedFile = null;

    function ObjectToString(object)
    {
        return JSON.stringify(object);
    }

    function StringToObject(text)
    {
        return JSON.parse(text);
    }

    function Download(filename, text) 
    {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    function OnClickDownload(filename, object)
    {
        if(confirm(`Are you sure you want to download ${filename}.txt?`))
        {
            let objectString = ObjectToString(object);
            Download(filename, objectString);
        }
    }

    function LoadFile(sender)
    {
        var file = sender.files[0];
        var reader = new FileReader();
        reader.readAsText(file)
        reader.onload = function (e) {
            // The file's text will be printed here
            loadedFile = StringToObject(e.target.result);
        };
        reader.onerror = function ()
        {
            alert("File conversion failed.");
        }
    }