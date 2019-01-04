// Lecture Bind, call and apply

var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log('Ladies and gentlemen! What\'s up? I\'m '
      + this.name);
    } else if (style === 'friendly') {
      console.log('Hey! What\'s up? I\'m ' + this.name);
    }
  }
}

var emily = {
  name:'Emily',
  age: 35,
  job: 'designer'
};

john.presentation('formal', 'morning');
john.presentation('friendly', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');
john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');
