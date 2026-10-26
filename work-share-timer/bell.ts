// Synthesized soft two-note bell. No downloads, microphone or audio permissions.
let context:AudioContext|null=null;
export async function armBell(){
 if(!context)context=new AudioContext();
 if(context.state==='suspended')await context.resume();
 return context;
}
export async function playBell(){
 const audio=await armBell();
 if(audio.state!=='running')return;
 const start=audio.currentTime;
 for(const [frequency,delay] of [[659.25,0],[880,.22]]){
  const oscillator=audio.createOscillator(),gain=audio.createGain();
  oscillator.type='sine';oscillator.frequency.value=frequency;
  gain.gain.setValueAtTime(0,start+delay);
  gain.gain.linearRampToValueAtTime(.09,start+delay+.025);
  gain.gain.exponentialRampToValueAtTime(.0001,start+delay+1.55);
  oscillator.connect(gain);gain.connect(audio.destination);
  oscillator.start(start+delay);oscillator.stop(start+delay+1.6);
  oscillator.onended=()=>{oscillator.disconnect();gain.disconnect()};
 }
}
