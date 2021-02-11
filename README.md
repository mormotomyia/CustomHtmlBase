# CustomHtmlBase

A project to allow you to write more integrated JS code , providing flexibility in extending existing HTMLElement Types.

Allowing you to work more closely with HTML objects in your JS code.



## Original usecase

the need for extending the HTMLVideoElement class to show the "playing" and "playable" attribute without resorting to monkeypatching of the HTMLVideoElement class inline.

## Examples

[monkeypatch version](examples/monkeypatch.ts)


[original implementation](examples/video-example.ts)

the original implementation wasnt an autonomous custom element,
as it didn't extend `HTMLElement` but custom elements
the original implementation requires you to instanciate the custom `HTMLElement` you created in JS/TS and append it to the DOM.
You cannot guarantee that `<$your-tag></$your-tag>` will necessarily work, as the extention of autonomous `HTMLElements` are not supported in that manner.

With the improved implementation you should no longer need to extend any other `HTMLElement` but the base element.
You can use the template to function in much the same manner as the original implemenation.

The remaining usecase for the original implemenation is when you create all custom `HTMLElements` procedurally in JS.

If you find a fix for using the original implementation in HTML, please do tell.



[improvement ](examples/example-html.ts)

the improved version requires you to specify the HTML elements as properties in a HTMLElement for better access and construction from html

