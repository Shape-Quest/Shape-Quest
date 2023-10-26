import { Howl } from 'howler';
import fart from './sounds/fart.mp3';
import click from './sounds/click.wav';
import swoosh from './sounds/swoosh.wav';
import hint from './sounds/hint.wav';
import pop from './sounds/pop.wav';
import firework from './sounds/firework.wav';

// array of sounds... add more as needed for whatever use
const sounds = [
  { name: 'square', src: swoosh },
  { name: 'circle', src: click },
  { name: 'rectangle', src: fart },
  { name: 'oval', src: hint },
  { name: 'diamond', src: pop },
  // delete functionality not implemented
  // sound left here for easy access
  { name: 'delete', src: firework },
];

// mapping through sounds array for when more sounds are needed
// can add 'red sound, blue sound, shape-specific sound'...
export const initializedSounds = sounds.map(sound => {
  return {
    ...sound,
    howl: new Howl({
      src: [sound.src],
    }),
  };
});
