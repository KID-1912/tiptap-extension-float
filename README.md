# tiptap-extension-float

<h3 align="center">
    An extension to add float to your tiptap content.
</h3>

<br/>

<p align="center">
  <a href="https://www.npmjs.com/package/tiptap-extension-float">
    <img
     alt="NPM URL"
     src="https://img.shields.io/badge/npm-tiptapExtensionFloat?logo=npm">
  </a>
  <img
     alt="version"
     src="https://img.shields.io/badge/version-1.0.0-blue">
</p>

<br>

---

## Install

```shell
npm install tiptap-extension-float -S
```

## Usage

```js
import Float from "tiptap-extension-float";

const editor = new Editor({
  element: document.querySelector(".editor"),
  extensions: [StarterKit, Image.configure({ inline: true }), Float],
});

editor.chain().focus().updateAttributes("image", { float: "left" }).run();
// default: cancel float style
editor.chain().focus().updateAttributes("image", { float: "default" }).run();
```

## Options

You can configure extension options, which are optional.

```js
  extensions: [
    StarterKit,
    Image.configure({ inline: true }),
    Float.configure({
      types: ["image"], // Allow float node types
    }),
  ],
```

## Relations

**tiptap/extension-text-align:** https://github.com/ueberdosis/tiptap/tree/main/packages/extension-text-align

**tiptap-appmsg-editor:** https://github.com/KID-1912/tiptap-appmsg-editor
