import Level1 from '../scenes/level1.js';
import MainMenu from '../scenes/mainMenu.js'


//Here, we import the level files. 
//Later, we'll want to abstract this process into a function or switch case to call specific levels.
//Currently, that "nav bar" level selector is just a placeholder and doesn't really work.

export default class Canvas extends Phaser.Scene {
  scenes = new Map();
  currentScene = null;
  constructor() {
    super();
    this.scenes.set('main menu', new MainMenu());
    this.scenes.set('level 1', new Level1());
    this.currentScene = this.scenes.get('main menu');
  }
  graphics;
  path;
  follower;

  preload() {
    this.currentScene.preload();
  }

  create() {
    this.currentScene.create()
  }

  update() {
    this.currentScene.update();
    console.log("asdflkjh");
  }
  setCurrentScene(sceneName) {
    this.currentScene = scenes.get(sceneName);
  }
}


//Setting up text editor
const config = {
  parent: 'main_view',
  type: Phaser.CANVAS,
  width: 800,
  height: 600,
  backgroundColor: '#2d2d2d',
  dom: {
    createContainer: true,
  },
  scene: Canvas
};

//Setting up the theme for the text editor
const theme = {
  "&": {
    color: "#00007F",
    backgroundColor: "#DDFFFF",
    maxWidth: "300px",
  },
  ".cm-content, .cm-gutter": {
    minHeight: "600px",
  }
}

//main
C4C.Editor.create(document.getElementById("editor-here"), theme, true); //the element id doesn't actually make a difference. Idk why.
console.log("Created text editor! Yet to be initialized.");
const game = new Phaser.Game(config);
let runner = C4C.Runner.createRunner();
//For debugging for casey later...
// const canvas = document.getElementById('my-custom-canvas');
// if (canvas) {console.log("Found?");} else { console.log("Not found?"); } 