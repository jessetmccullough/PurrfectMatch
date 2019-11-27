var mongoose = require("mongoose"),
  Cat = require("./models/cat");

var data = [
  {
    name: "Oscar",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
    age: 3,
    sex: "Male",
    breed: "Tabby",
    description:
      "Check cat door for ambush 10 times before coming in. Climb leg sleep nap for catasstrophe for love blinks and purr purr purr purr yawn. Burrow under covers cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip yet lick the other cats yet sniff other cat's butt and hang jaw half open thereafter i am the best. A nice warm laptop for me to sit on meow meow or leave hair on owner's clothes."
  },
  {
    name: "Twila",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
    age: 3,
    sex: "Female",
    breed: "Mix",
    description:
      "Check cat door for ambush 10 times before coming in. Climb leg sleep nap for catasstrophe for love blinks and purr purr purr purr yawn. Burrow under covers cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip yet lick the other cats yet sniff other cat's butt and hang jaw half open thereafter i am the best. A nice warm laptop for me to sit on meow meow or leave hair on owner's clothes."
  },
  {
    name: "Freya",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
    age: 7,
    sex: "Female",
    breed: "Burmese",
    description:
      "Check cat door for ambush 10 times before coming in. Climb leg sleep nap for catasstrophe for love blinks and purr purr purr purr yawn. Burrow under covers cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip yet lick the other cats yet sniff other cat's butt and hang jaw half open thereafter i am the best. A nice warm laptop for me to sit on meow meow or leave hair on owner's clothes."
  },
  {
    name: "Tom",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
    age: 9,
    sex: "Male",
    breed: "Tabby",
    description:
      "Check cat door for ambush 10 times before coming in. Climb leg sleep nap for catasstrophe for love blinks and purr purr purr purr yawn. Burrow under covers cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip yet lick the other cats yet sniff other cat's butt and hang jaw half open thereafter i am the best. A nice warm laptop for me to sit on meow meow or leave hair on owner's clothes."
  },
  {
    name: "Cole",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
    age: 5,
    sex: "Male",
    breed: "Mix",
    description:
      "Check cat door for ambush 10 times before coming in. Climb leg sleep nap for catasstrophe for love blinks and purr purr purr purr yawn. Burrow under covers cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip yet lick the other cats yet sniff other cat's butt and hang jaw half open thereafter i am the best. A nice warm laptop for me to sit on meow meow or leave hair on owner's clothes."
  },
  {
    name: "Shorty",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
    age: 7,
    sex: "Female",
    breed: "Mix",
    description:
      "Check cat door for ambush 10 times before coming in. Climb leg sleep nap for catasstrophe for love blinks and purr purr purr purr yawn. Burrow under covers cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip yet lick the other cats yet sniff other cat's butt and hang jaw half open thereafter i am the best. A nice warm laptop for me to sit on meow meow or leave hair on owner's clothes."
  },
  {
    name: "Penny",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
    age: 8,
    sex: "Female",
    breed: "Siamese",
    description:
      "Check cat door for ambush 10 times before coming in. Climb leg sleep nap for catasstrophe for love blinks and purr purr purr purr yawn. Burrow under covers cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip yet lick the other cats yet sniff other cat's butt and hang jaw half open thereafter i am the best. A nice warm laptop for me to sit on meow meow or leave hair on owner's clothes."
  },
  {
    name: "Tut",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
    age: 10,
    sex: "Male",
    breed: "Sphinx",
    description:
      "Check cat door for ambush 10 times before coming in. Climb leg sleep nap for catasstrophe for love blinks and purr purr purr purr yawn. Burrow under covers cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip yet lick the other cats yet sniff other cat's butt and hang jaw half open thereafter i am the best. A nice warm laptop for me to sit on meow meow or leave hair on owner's clothes."
  },
  {
    name: "Eddy",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
    age: 5,
    sex: "Male",
    breed: "Mix",
    description:
      "Check cat door for ambush 10 times before coming in. Climb leg sleep nap for catasstrophe for love blinks and purr purr purr purr yawn. Burrow under covers cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip yet lick the other cats yet sniff other cat's butt and hang jaw half open thereafter i am the best. A nice warm laptop for me to sit on meow meow or leave hair on owner's clothes."
  },
  {
    name: "Cleo",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
    age: 10,
    sex: "Female",
    breed: "Shorthair",
    description:
      "Check cat door for ambush 10 times before coming in. Climb leg sleep nap for catasstrophe for love blinks and purr purr purr purr yawn. Burrow under covers cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip yet lick the other cats yet sniff other cat's butt and hang jaw half open thereafter i am the best. A nice warm laptop for me to sit on meow meow or leave hair on owner's clothes."
  },
  {
    name: "Jam",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
    age: 1,
    sex: "Female",
    breed: "Abyssinian",
    description:
      "Check cat door for ambush 10 times before coming in. Climb leg sleep nap for catasstrophe for love blinks and purr purr purr purr yawn. Burrow under covers cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip yet lick the other cats yet sniff other cat's butt and hang jaw half open thereafter i am the best. A nice warm laptop for me to sit on meow meow or leave hair on owner's clothes."
  },
  {
    name: "Twinkles",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
    age: 7,
    sex: "Male",
    breed: "Russian Blue",
    description:
      "Check cat door for ambush 10 times before coming in. Climb leg sleep nap for catasstrophe for love blinks and purr purr purr purr yawn. Burrow under covers cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip yet lick the other cats yet sniff other cat's butt and hang jaw half open thereafter i am the best. A nice warm laptop for me to sit on meow meow or leave hair on owner's clothes."
  },
  {
    name: "Pepper",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
    age: 2,
    sex: "Female",
    breed: "Maine Coon",
    description:
      "Check cat door for ambush 10 times before coming in. Climb leg sleep nap for catasstrophe for love blinks and purr purr purr purr yawn. Burrow under covers cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip yet lick the other cats yet sniff other cat's butt and hang jaw half open thereafter i am the best. A nice warm laptop for me to sit on meow meow or leave hair on owner's clothes."
  },
  {
    name: "Lilly",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
    age: 2,
    sex: "Female",
    breed: "Mix",
    description:
      "Check cat door for ambush 10 times before coming in. Climb leg sleep nap for catasstrophe for love blinks and purr purr purr purr yawn. Burrow under covers cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip yet lick the other cats yet sniff other cat's butt and hang jaw half open thereafter i am the best. A nice warm laptop for me to sit on meow meow or leave hair on owner's clothes."
  },
  {
    name: "Thor",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
    age: 3,
    sex: "Male",
    breed: "Mix",
    description:
      "Check cat door for ambush 10 times before coming in. Climb leg sleep nap for catasstrophe for love blinks and purr purr purr purr yawn. Burrow under covers cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip yet lick the other cats yet sniff other cat's butt and hang jaw half open thereafter i am the best. A nice warm laptop for me to sit on meow meow or leave hair on owner's clothes."
  },
  {
    name: "Teddy",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
    age: 12,
    sex: "Male",
    breed: "Persian",
    description:
      "Check cat door for ambush 10 times before coming in. Climb leg sleep nap for catasstrophe for love blinks and purr purr purr purr yawn. Burrow under covers cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip yet lick the other cats yet sniff other cat's butt and hang jaw half open thereafter i am the best. A nice warm laptop for me to sit on meow meow or leave hair on owner's clothes."
  },
  {
    name: "Selina",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
    age: 4,
    sex: "Female",
    breed: "Bengal",
    description:
      "Check cat door for ambush 10 times before coming in. Climb leg sleep nap for catasstrophe for love blinks and purr purr purr purr yawn. Burrow under covers cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip yet lick the other cats yet sniff other cat's butt and hang jaw half open thereafter i am the best. A nice warm laptop for me to sit on meow meow or leave hair on owner's clothes."
  },
  {
    name: "Tony",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
    age: 7,
    sex: "Male",
    breed: "Russian Blue",
    description:
      "Check cat door for ambush 10 times before coming in. Climb leg sleep nap for catasstrophe for love blinks and purr purr purr purr yawn. Burrow under covers cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip yet lick the other cats yet sniff other cat's butt and hang jaw half open thereafter i am the best. A nice warm laptop for me to sit on meow meow or leave hair on owner's clothes."
  },
  {
    name: "Tizzy",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
    age: 1,
    sex: "Female",
    breed: "Chartreux",
    description:
      "Check cat door for ambush 10 times before coming in. Climb leg sleep nap for catasstrophe for love blinks and purr purr purr purr yawn. Burrow under covers cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip yet lick the other cats yet sniff other cat's butt and hang jaw half open thereafter i am the best. A nice warm laptop for me to sit on meow meow or leave hair on owner's clothes."
  },
  {
    name: "Marmalade",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
    age: 6,
    sex: "Female",
    breed: "Tabby",
    description:
      "Check cat door for ambush 10 times before coming in. Climb leg sleep nap for catasstrophe for love blinks and purr purr purr purr yawn. Burrow under covers cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip yet lick the other cats yet sniff other cat's butt and hang jaw half open thereafter i am the best. A nice warm laptop for me to sit on meow meow or leave hair on owner's clothes."
  },
  {
    name: "Luke",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
    age: 12,
    sex: "Male",
    breed: "Mix",
    description:
      "Check cat door for ambush 10 times before coming in. Climb leg sleep nap for catasstrophe for love blinks and purr purr purr purr yawn. Burrow under covers cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip yet lick the other cats yet sniff other cat's butt and hang jaw half open thereafter i am the best. A nice warm laptop for me to sit on meow meow or leave hair on owner's clothes."
  },
  {
    name: "Chewie",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
    age: 12,
    sex: "Male",
    breed: "Mix",
    description:
      "Check cat door for ambush 10 times before coming in. Climb leg sleep nap for catasstrophe for love blinks and purr purr purr purr yawn. Burrow under covers cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip yet lick the other cats yet sniff other cat's butt and hang jaw half open thereafter i am the best. A nice warm laptop for me to sit on meow meow or leave hair on owner's clothes."
  },
  {
    name: "Zigzag",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
    age: 1,
    sex: "Male",
    breed: "Mix",
    description:
      "Check cat door for ambush 10 times before coming in. Climb leg sleep nap for catasstrophe for love blinks and purr purr purr purr yawn. Burrow under covers cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip yet lick the other cats yet sniff other cat's butt and hang jaw half open thereafter i am the best. A nice warm laptop for me to sit on meow meow or leave hair on owner's clothes."
  },
  {
    name: "Oliver",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
    age: 3,
    sex: "Female",
    breed: "Mix",
    description:
      "Check cat door for ambush 10 times before coming in. Climb leg sleep nap for catasstrophe for love blinks and purr purr purr purr yawn. Burrow under covers cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip yet lick the other cats yet sniff other cat's butt and hang jaw half open thereafter i am the best. A nice warm laptop for me to sit on meow meow or leave hair on owner's clothes."
  }
];

function seedDB() {
  Cat.deleteMany({}, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("removed cats");
    }
  });
  data.forEach(function(seed) {
    Cat.create(seed, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("added a cat");
      }
    });
  });
}

module.exports = seedDB;
