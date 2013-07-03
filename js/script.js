(function(){
  $(function(){
    sentenceregex = /([A-Z][^\.!?]*[\.!?])/g;

    sentences = [];
    paragraphs = $("p");

    $.each(paragraphs, function(){
      text = $(this).html();
      // text = text.replace(/<(.|\n)*?>/g," "); //html tags
      // text = text.replace(/(\r\n|\n|\r)/gm," "); //new lines
      // text = text.replace(/ *\([^)]*\) */g, ""); //brackets
      // text = text.replace(/\s+/g," "); //double whitespaces
      
      result = text.split(/\.!?/);
      // sentences = sentences.conc  at(result);
      sentences = text.split(".");


    });
    console.log(sentences);
    // sentences = randomsentences(sentences, 5);

  });


  var randomsentences = function(ar, n){
    i = 0;

    while(i<n){
      ix = Math.floor(Math.random() * ar.length);
      console.log(ix);
      i++;
    }
  };
})(jQuery);

