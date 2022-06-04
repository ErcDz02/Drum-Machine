const sounds = [
  {
  key: 'Q',
  tune: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    key: 'W',
    tune: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
    {
    key: 'E',
    tune: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
    {
    key: 'A',
    tune: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
    {
    key: 'S',
    tune: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
    {
    key: 'D',
    tune: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
    {
    key: 'Z',
    tune: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
    {
    key: 'X',
    tune: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
    {
    key: 'C',
    tune: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
]

const App = () => {
  return (
    <div id="drum-machine">
    <div id='display'>
      <h1>Play any note</h1>
    {sounds.map((sound, id) => (
        <Box text={sound.key} key={id} audio={sound.tune}/>
      ))}
    </div>
  </div>
   )
} 

class Box extends React.Component {
  constructor(props) {
    super(props)
    this.audio = React.createRef()

  }
  
  playTune = () => {
    this.audio.current.play()
        
    const id = this.audio.current.id;
    
    const parent = this.audio.current.parentNode;
    parent.classList.add('active');
    
    const display = parent.parentNode;
    display.querySelector('h1').innerText = `${id} is playing`;
   
  }
  
  render() {
    const {text, audio} = this.props
    return (
      <div className='box' onClick={this.playTune} id={`drum-${text}`}> 
        {text}
        <audio ref={this.audio} src={audio} className="clip" id={text} />
        </div>
        
        )
  }
}

document.addEventListener('keydown', (e) => {
  const id = e.key.toUpperCase();
  const audio = document.getElementById(id);
  
  if(audio) {
    audio.currentTime = 0; 
    const parent = audio.parentNode;
    parent.classList.add('active');
    
    const display = parent.parentNode;
    display.querySelector('h1').innerText = `${id} is playing`;
    audio.play();
  }
});
ReactDOM.render(<App />, document.getElementById('root'))  
