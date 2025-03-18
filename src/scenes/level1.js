export default class Level1 {
    preload() {

    }
    create() {
        const theme = {
            "&": {
                color: "black",
                backgroundColor: "white",
            },
            ".cm-content, .cm-gutter": {
                minHeight: "500px",
            }
        };

        C4C.Editor.create(document.getElementById("code-editor"), theme);
        C4C.Editor.setText('moveleft'); //Example default text that will be in the editor window when it opens

        // document.getElementsByClassName("cm-content")[0].setAttribute("contenteditable", "false")
        console.log("Text editor initialized.");


        //Console log as you go and define things to make sure things work!
        //Example definition of defining a function, see google doc blah blah blah
        C4C.Interpreter.define("moveleft", () => {
            console.log("moveleft selected...");
            alert("hello");
        });

        //Example of how we'd define a boolean for something.
        //C4C.Interpreter.define("candy.color = blue", () => {return this.color});

        document.getElementById("enableCommands").addEventListener("click", (event) => {
            // document.getElementById("enableCommands").disabled = true;
            //Grabbing text and then running it
            let programText = C4C.Editor.getText();
            C4C.Interpreter.run(programText);
            runner.setProgram(programText);
        });

        //We'll want to abstract this out into it's own function later... messy for now. 
        // Add the background image
        this.add.image(400, 300, 'background'); // Center the background

        this.graphics = this.add.graphics();
        this.follower = { t: 0, vec: new Phaser.Math.Vector2() };
        //Add follower sprite here...

        // Create the path using two separate lines
        const line1 = new Phaser.Curves.Line([100, 100, 500, 200]);
        const line2 = new Phaser.Curves.Line([200, 300, 600, 500]);

        this.path = this.add.path();
        this.path.add(line1);
        this.path.add(line2);

        // Tween the follower along the path
        this.tweens.add({
            targets: this.follower,
            t: 1,
            ease: 'Linear',
            duration: 4000,
            yoyo: true,
            repeat: -1
        });
    }
    update() {

    }
}