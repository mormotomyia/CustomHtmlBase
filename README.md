# CustomHtmlBase

A project to allow you to write more integrated JS code , providing flexibility in extending existing HTMLElement Types.

Allowing you to work more closely with HTML objects in your JS code.

bla bla...


## Original usecase:

the need for extending the HTMLVideoElement class to show the "playing" and "playable" attribute without resorting to monkeypatching of the HTMLVideoElement class inline.

##

Examples:

[original implementation](examples/video-example.ts)

the original implementation wasnt an autonomous custom element as it didnt extend HTMLElement but custom elements

[improvement ](examples/example-html.ts)

the improved version requires you to specify the HTML elements as properties in a HTMLElement for better access and construction from html