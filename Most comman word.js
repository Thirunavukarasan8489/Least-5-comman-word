
//window.onload = () => {
    
  //};
  
  function countWords() {
    // The text variable contains the long string of words
    let text =
      "Some of the biggest and most expensive transportation projects in the world have involved building bridges. Bridges are crucial links that carry cars, trucks and trains across bodies of water, mountain gorges or other roads. As a result, they are one of the most important aspects of civil engineering and are subject to intense scrutiny, especially when they collapse. Bridge collapses can be tragic events, leading to loss of life and serious property damage. That is why bridge engineers, designers and builders must always take their jobs very seriously. The best way for them to prevent these accidents is to understand why bridges collapse in the first place. Understanding bridge collapses can lead to major changes in the design, construction and safety of future building projects. The following are main reasons why bridges fall.";
  
    // To remove the periods and commas and transform all words to lowercase letters
    text = text.replace(/[.,]/g,"")
    text = text.toLocaleLowerCase();
  
    const wordArray = text.split(" ");
  
    //  the wordArray and creates the key value pair objects
    const wordCount = {};
    wordArray.forEach((item) => {
      if (wordCount[item] == null) wordCount[item] = 1;
      else {
        wordCount[item] += 1;
      }
    });
  
    // objects into an array of arrays
    let myArray = Object.entries(wordCount);
  
    // sort the arrays based on the count number and store the result in a variable called bArray
    let bArray = myArray.sort((a,b) => a[1] - b[1]).slice(0,5);
  
    // return the first three most common words.
    return bArray;
  }


  let result = countWords();
    console.log(result);
  
 
  