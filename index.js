const farmAnimals = ['cow', 'horse', 'sheep', 'pig', 'chicken']
const sounds = ['moo', 'nai', 'ba', 'oink', 'cluck']
const [moo, neigh, baa, oink, cluck] = farmAnimals
console.log(moo, neigh, baa, oink, cluck)


const [Bessie, , Dolly, Babe, Little] = farmAnimals
console.log(Bessie, Dolly, Babe, Little)


const [black_and_white, , black, pink, ,] = farmAnimals
console.log(black_and_white, black, pink)



const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
const [red, orange, yellow, green, blue, indigo, violet] = colors
console.log(red, orange, yellow, green, blue, indigo, violet)


const [r, o, y, g, b, , v] = colors
console.log(r, o, y, g, b,v)

const [, , , , , indg, ]= colors
console.log(indg)

const muppet = {
  name: 'Kermit',
  color: 'green',
  song: 'The Rainbow Connection',
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};

const { name, color, song, job, partner} = muppet;
console.log(name);
console.log(color);
console.log(song);
console.log(job);
console.log(partner);

const k_muppet = {
  k_name: 'Kermit',
  k_color: 'green',
  k_album: {
    the_muppet_movie: {
      song_1: 'Rainbow Connection',
      song_2: 'Moving Right Along',
      song_3: 'Never Before, Never Again',
      song_4: 'I Hope That Something Better Comes Along',
    },
  },
  k_job: 'Host of The Muppet Show',
  k_partner: 'Miss Piggy'
};

const {
        k_album: {
          the_muppet_movie: { song_2, song_4
          }
    }, k_color, k_job, k_partner} = k_muppet;
console.log(k_color);
console.log(song_2);
console.log(song_4);
console.log(k_job);
console.log(k_partner);




// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.



// 2. Bolt the horse wandered off, so just give us four animals, and let's name them Bessie, Dolly, Babe, and Little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of black_and_white, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg.

// Objects

// 7. Use destructuring to assign all appropriate variables using the keys as the variable names


// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
