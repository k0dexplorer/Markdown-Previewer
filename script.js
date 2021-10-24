function updatePreview() {
   let previewElement = document.getElementById("preview");
   let editorValue = document.getElementById("editor").value;
   markedUpHTML = marked(editorValue);
   previewElement.innerHTML = markedUpHTML;
}

function setDefault() {
    let defaultText = `\
# freeCodeCamp Project
## a markdown previewer
[Check out free high-resolution photos!](https://unsplash.com/)
   
###### This is an example of code block :point_down:
<dl>
    <dt>Definition list</dt>
    <dd>Is something people use sometimes.</dd>

    <dt>Markdown in HTML</dt>
    <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

\`This is an example of inline code\`

\`\`\`
function exampleOf() {
    return multiLineCodeBlock;
}
\`\`\`

 ### **Todo**
- Water plants
- Update the website
- Plan next vacation :joy:

> *Let us be grateful to the people who make us happy; they are the charming gardeners who make our souls blossom.* - Marcel Proust
![Foggy Morning](https://images.unsplash.com/photo-1634883966638-ba2c79927cd8?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=665&amp;q=80)
    `;

   let editorField = document.getElementById("editor");
   let previewField = document.getElementById("preview");
   editorField.value = defaultText;
   previewField.innerHTML = marked(defaultText);
}