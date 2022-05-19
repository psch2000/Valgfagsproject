import { State } from "../../../../base/baseBehaviour/State";
import { AudioManager } from "../../../../sound/AudioManager";


export class AddSoundState extends State{

    execute(){
        AudioManager.addSound('pop1', './sfx/pop1.wav');
        AudioManager.addSound('pop2', './sfx/pop2.wav');
        AudioManager.addSound('pop3', './sfx/pop3.wav');
        AudioManager.addSound('pop4', './sfx/pop4.wav');
        AudioManager.addSound('theme', './sfx/mainTheme.wav', true);

        
    }
}

var bool = false;

document.body.addEventListener('click', function(){
    if (bool == true) return;
    // AudioManager.play("theme");
    bool = true;
})









