import {Injectable} from '@angular/core';
import Speech from 'speak-tts';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {
  speech: any;


  constructor() {

    this.speech = new Speech();
    if (this.speech.hasBrowserSupport()) {
      this.speech.init({
        volume: 1,
        lang: 'en-US',
        rate: 1,
        pitch: 1,
        splitSentences: true
      });
    }
  }

  start(textToRead){
    this.speech.speak({text: textToRead});
  }

}
