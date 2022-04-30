Handlebars.registerHelper("makeLink", function(text, url){
  //escapeExpression is useful to avoid code injection
  text = Handlebars.Utils.escapeExpression(text);
  url = Handlebars.Utils.escapeExpression(url);

  const theLink = `<a href="${url}">${text}</a>`;

  //SafeString prevent the link from being escaped 
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

//name: contains the name associated with each radio button
Handlebars.registerHelper("makeRadio", function(name, options){
  //get data from 'makeRadio' - this returns the string 'Small Medium Large' defined inside 'makeRadio'
  let radioList = options.fn();
  radioList = radioList.trim().split(' ');

  let output = "";
  for (let val of radioList)
  {
    const item = val.trim();
    output += `<div><input type="radio" name="${name}" value="${item}">${item}</input></div>`;
  }
  return output;
});

Handlebars.registerHelper("areEqual", function(num1, num2, options){
  if (num1 === num2)
  {
    //this code executes the first template
    return options.fn(this);
  }
  else
  {
    //this code executes the second template {{else}}
    return options.inverse(this);
  }
});

Handlebars.registerHelper("if", function(data, options){
  if (data === "isActive")
  {
    //this code executes the first template
    return options.fn(this);
  }
  else
  {
    //this code executes the second template {{else}}
    return options.inverse(this);
  }
});

Handlebars.registerHelper("with", function(context, options){
  return options.fn(context);
});