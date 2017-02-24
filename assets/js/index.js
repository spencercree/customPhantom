/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    var quotes = [
      {
        "author": "Steven Hunt",
        "quote": "If you're not living on the edge you're taking up too much space.",
        "dateAdded": "2017-02-24T20:05:22.865Z"
      },
      {
        "author": "Lao Tzu",
        "quote": "When I let go of what I am, I become what I might be.",
        "dateAdded": "2017-02-24T20:06:07.866Z"
      },
      {
        "author": "Maya Angelou",
        "quote": "The ache for home lives in all of us. The safe place where we can go as we are and not be questioned.",
        "dateAdded": "2017-02-24T20:07:47.651Z"
      },
      {
        "author": "Martin Luther King Jr.",
        "quote": "No one really knows why they are alive until they know what they'd die for.",
        "dateAdded": "2017-02-24T20:09:20.958Z"
      },
      {
        "author": "Henry David Thoreau",
        "quote": "As a single footstep will not make a path on the earth, so a single thought will not make a pathway in the mind. To make a deep physical path, we walk again and again. To make a deep mental path, we must think over and over the kind of thoughts we wish to dominate our lives.",
        "dateAdded": "2017-02-24T20:11:59.034Z"
      },
      {
        "author": "William Feather",
        "quote": "If we do not discipline ourselves the world will do it for us.",
        "dateAdded": "2017-02-24T20:14:01.396Z"
      },
      {
        "author": "Vince Lombardi",
        "quote": "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack of will.",
        "dateAdded": "2017-02-24T20:15:11.714Z"
      },
      {
        "author": "Steve Maraboli",
        "quote": "At the end of the day, let there be no excuses, no explanations, no regrets.",
        "dateAdded": "2017-02-24T20:16:18.403Z"
      },
      {
        "author": "Christopher Morley",
        "quote": "There is only one success - to be able to spend your life in your own way.",
        "dateAdded": "2017-02-24T20:17:32.376Z"
      },
      {
        "author": "George Bernard Shaw",
        "quote": "You see things; you say, 'Why?' But I dream things that never were; and I say 'Why not?'",
        "dateAdded": "2017-02-24T20:20:19.691Z"
      },
      {
        "author": "Simon Sinek",
        "quote": "The goal of life is not to have our lives mean something to ourselves. The goal of life is to have our lives mean something to others.",
        "dateAdded": "2017-02-24T20:21:32.745Z"
      },
      {
        "author": "William Butler Yeats",
        "quote": "Happiness is neither virtue nor pleasure nor this thing nor that but simply growth, We are happy when we are growing.",
        "dateAdded": "2017-02-24T20:23:32.505Z"
      },
      {
        "author": "Henry David Thoreau",
        "quote": "Beware of all enterprises that require new clothes...",
        "dateAdded": "2017-02-24T20:26:39.462Z"
      },
      {
        "author": "Plato",
        "quote": "I tell you that virtue is not given by money, but that from virtue comes money and every other good of man, public as well as private.",
        "dateAdded": "2017-02-24T20:30:37.129Z"
      },
      {
        "author": "Anne Frank",
        "quote": "You only really get to know a person after a fight. Only then can you judge their true characters!",
        "dateAdded": "2017-02-24T20:32:48.222Z"
      },
      {
        "author": "Franklin D. Roosevelt",
        "quote": "Remember you are just an extra in everyone else's play.",
        "dateAdded": "2017-02-24T20:34:18.558Z"
      },
      {
        "author": "Tom Stoppard",
        "quote": "The colours red, blue and green are real. The colour yellow is a mystical experience shared by everybody.",
        "dateAdded": "2017-02-24T20:37:47.640Z"
      },
      {
        "author": "Steve Jobs",
        "quote": "Life can be much broader once you discover one simple fact, and that is – everything around you that you call life, was made up by people that were no smarter than you. And you can change it, you can influence it, you can build your own things that other people can use. The minute that you understand that you can poke life and actually something will, you know if you push in, something will pop out the other side, that you can change it, you can mold it. That’s maybe the most important thing. It’s to shake off this erroneous notion that life is there and you’re just gonna live in it, versus embrace it, change it, improve it, make your mark upon it.",
        "dateAdded": "2017-02-24T20:57:32.538Z"
      }
    ]

    //randomize function
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    //alpha sort function
    function alphaSort(array) {
      array.sort(function(a, b) {
        var textA = a.author.toUpperCase();
        var textB = b.author.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });

      return array;
    }

    //most recent to oldest date sort
    function dateSort(array) {
      array.sort(function(a, b) {
        a = new Date(a.dateAdded);
        b = new Date(b.dateAdded);
        return a > b ? -1 : a < b ? 1 : 0;
      });

      return array;
    }

    function quoteHTML(quote, author) {
      return (
        '<blockquote>' +
        '<p class="quoteText">"' + quote + '"</p>' +
        '<p class="author">- ' + author + '</p>' +
        '</blockquote>'
      );
    }
  
    $(document).ready(function(){
      $.each(quotes, function( index, value ) {
        $('#quotesContainer').append(quoteHTML(value.quote, value.author));
      });

      //randomize quotes list
      $('#random').on('click', function() {
        $('#quotesContainer').html(' ');
        $.each(shuffle(quotes), function(index, value) {
          $('#quotesContainer').append(quoteHTML(value.quote, value.author));
        });
      });

      //alphabetize quotes list
      $('#alpha').on('click', function() {
        $('#quotesContainer').html(' ');
        $.each(alphaSort(quotes), function(index, value) {
          $('#quotesContainer').append(quoteHTML(value.quote, value.author));
        });
      });

      //most recently added
      $('#recently').on('click', function() {
        $('#quotesContainer').html(' ');
        $.each(dateSort(quotes), function(index, value) {
          $('#quotesContainer').append(quoteHTML(value.quote, value.author));
        });
      });

    });

}(jQuery));