let myInfo = "<p>My name is {{name}} and I live at {{city}}</p>";
let templateInfo = Handlebars.compile(myInfo);
let data = templateInfo({ name: "Amine", city: "Paris" });
document.getElementById("exampleData").innerHTML += data;

/*******************************************************************/

Handlebars.registerHelper("makeLink", function(text, url){
  text = Handlebars.Utils.escapeExpression(text);
  url = Handlebars.Utils.escapeExpression(url);

  let theLink = `<a href="${url}">${text}</a>`;

  return new Handlebars.SafeString(theLink);
});

Handlebars.registerHelper("changeColor", function(text, options){
  text = Handlebars.Utils.escapeExpression(text);
  return new Handlebars.SafeString(`<span>${text} ${options.hash.color}</span>`);
});

Handlebars.registerHelper("sayHello", function(options){
  switch (options.data.lang)
  {
    case "spanish":
      return "Hola!";
    case "french":
      return "Bonjour!";
    default:
      return "Hello!";
  }
});


let quoteInfo = document.getElementById("quote-template").innerHTML;
let templateQuote = Handlebars.compile(quoteInfo);
let quoteData = templateQuote({
  name: "Yogi Berra",
  quotes: [
    { quote: "Alpha" },
    { quote: "Beta" },
    { quote: "Gamma" },
    { quote: "Delta" }
  ],
  yogiBio: "<i>Yogi Berra is the King</i>"
}, {data:{
  lang: "spanish"
}});

document.getElementById("quoteData").innerHTML += quoteData;


let theTemplateInfo = document.getElementById("the-template").innerHTML;
let template = Handlebars.compile(theTemplateInfo);

Handlebars.registerHelper("makeRadio", function(name, options){
  //get data from "makeRadio"
  let radioList = options.fn();
  radioList = radioList.trim().split(' ');

  let output = "";
  for (let val of radioList)
  {
    let item = val.trim();
    output += `<div><input type="radio" name="${name}" value="${item}">${item}</input></div>`;
  }
  return output;
});

Handlebars.registerHelper("areEqual", function(num1, num2, options){
  if (num1 === num2)
  {
    return options.fn(this);
  }
  else
  {
    return options.inverse(this);
  }
});

Handlebars.registerHelper("if", function(data, options){
  if (data === "isActive")
  {
    return options.fn(this);
  }
  else
  {
    return options.inverse(this);
  }
});

Handlebars.registerHelper("with", function(context, options){
  return options.fn(context);
});

let theTemplateData = template({
  title: "Harry Potter and the Philosopher's stone",
  techData: {
    isbn: "0-7475-3269-9",
    author: "J. K. Rowling"
  }
});

document.getElementById("contentDiv").innerHTML += theTemplateData;

let partialTemplateInfo = document.getElementById("partial").innerHTML;
let partialTemplate = Handlebars.compile(partialTemplateInfo);

Handlebars.registerPartial("myName", "{{name}}");

Handlebars.registerPartial("askQuestion", `<{{tagName}}>{{author}}</{{tagName}}><div class="comment">{{comment}}</div>`);

let templateData = partialTemplate({
  name: "Derek",
  author: "John Smith",
  comment: "Where shoud we vacation?",
  comments: [{
    author: "Sue Smith",
    comment: "The beach"
  },
  {
    author: "Paul Smith",
    comment: "Disneyland"
  }]
});

document.getElementById("contentDiv").innerHTML += templateData;