import _ from 'lodash';

import Meme from './meme.png';
import Data from './data.xml';
import Notes from './data.csv';
import JsonData from './data.json';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';
import './style.css';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image(800);
  myIcon.src = Meme;

  element.appendChild(myIcon);

  console.log('From .json file:', JsonData);
  console.log('From .xml file:', Data);
  console.log('From .csv file', Notes);

  return element;
}

document.body.appendChild(component());
