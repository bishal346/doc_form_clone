import React,{useState} from 'react'
import {TextField,Paper,Slider,FormControl,Checkbox,FormHelperText,FormGroup,FormLabel,Radio,RadioGroup,FormControlLabel,Input, Typography, Button} from '@material-ui/core'
import {ErrorOutline} from '@material-ui/icons'

function Doc() {
    const [value, setValue] = useState("");
    const [bolli,setBolli] = useState(
        {
            Name:false,
            email:false,
            institute:false,
            course:false,
            bol:false,
        }
    )
    const [text,setText] = useState(
        {
            Name:"",
            email:"",
            institute:"",
            course:"",
            bol:"",
        }
    )
    const [helper,setHelper] = useState(
        {
            Name:"",
            email:"",
            institute:"",
            course:"",
            bol:"",
        }
    )
    const [state, setState] = useState({
      dsa: false,
      cp: false,
      wd: false,
      ml: false,
      nl: false,
      ai: false,
      pd: false,
      sd: false,
      p: false,
      jjpcc:false
  
    });
    
    const[err,setErr] = useState(false)
  //var error = false
  
    const handleclick = (event) => {
      const{dsa,cp,wd,ml,nl,ai,pd,sd,p,jjpcc} = state
      setState({ ...state, [event.target.name]: event.target.checked });
      var error = [dsa,cp,wd,ml,nl,ai,pd,sd,p,jjpcc].filter((v) => v).length < 2;
      setErr(error)
      const txe = error?<Typography><ErrorOutline />Must fill this</Typography> :<Typography></Typography>
      setHelper({...helper,course:txe})
    }
  const Handu = (e) => {
    setValue(e.target.value);
    const abel = e.target.value===""?true:false
    setBolli({...bolli,[e.target.name]:abel})
      const txe = abel?<Typography><ErrorOutline />Must fill this</Typography> :<Typography></Typography>
      setHelper({...helper,[e.target.name]:txe})
  };
  function handleChange(e) {
      setText({...text,[e.target.name]:e.target.value})
      const abel=e.target.value===""?true:false
      setBolli({...bolli,[e.target.name]:abel})
      const txe = abel?<Typography><ErrorOutline />Must fill this</Typography> :<Typography></Typography>
      setHelper({...helper,[e.target.name]:txe})
  }
  const[disab,setDisab] = useState(true)
  const{Name,email,institute,course,bol} = bolli
  let ham = [Name,email,institute,course,bol].filter((v) => v).length > 0
   const[fis,setFis]=useState(true)
   const[lt,setLt]=useState(false)
 /* const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };*/

  //const { gilad, jason, antoine } = state;
 // const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
 const fisher = () => {
  setFis(!fis) 
  setLt(!lt)
 }
 const wing = () => {
  setFis(!fis) 
  setLt(!lt)
 }
    return(
      <div>
        {fis && 
        <div>
            <Paper elevation={10} >
             <h3>Entre your name</h3>
            <TextField
            error={bolli.Name}
            required
            onChange={(e)=>handleChange(e)}
          label="Name"
          helperText={helper.Name}
          name="Name"
        />
        </Paper>
        <Paper elevation={10} >
             <h3>Entre EmailID</h3>
            <TextField
            required
            onChange={(e)=>handleChange(e)}
            error={bolli.email}
          label="Email"
          helperText={helper.email}
          name="email"
        />
        </Paper>
        <Paper elevation={10} >
             <h3>Entre Institute name</h3>
            <TextField
            required
            onChange={(e)=>handleChange(e)}   
            error={bolli.institute}
          label="Collage/University"
          helperText={helper.institute}
          name="institute"
        />
        </Paper>
        <Paper elevation={10}>
            <h3>Courses you preffer to do</h3>
            <FormControl error={err} required component="fieldset" >
        <FormLabel component="legend">Choose your course</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox  onChange={handleclick} name="dsa" />}
            label="Data Structure and Algorithm"
          />
          <FormControlLabel
            control={<Checkbox  onChange={handleclick} name="cp" />}
            label="Compititive Codingn"
          />
          <FormControlLabel
            control={<Checkbox  onChange={handleclick} name="wd" />}
            label="Web Development"
          />
          <FormControlLabel
            control={<Checkbox  onChange={handleclick} name="ml" />}
            label="Machine Learning"
          />
          <FormControlLabel
            control={<Checkbox  onChange={handleclick} name="nl" />}
            label="Neural Learning"
          />
          <FormControlLabel
            control={<Checkbox  onChange={handleclick} name="ai" />}
            label="Artificial intellegence"
          />
          <FormControlLabel
            control={<Checkbox  onChange={handleclick} name="pd" />}
            label="Photography and Video Editing"
          />
          <FormControlLabel
            control={<Checkbox  onChange={handleclick} name="sd" />}
            label="Singing and dancing"
          />
          <FormControlLabel
            control={<Checkbox  onChange={handleclick} name="p" />}
            label="Painting"
          />
          <FormControlLabel
            control={<Checkbox  onChange={handleclick} name="jjpcc" />}
            label="JAVA,JAVAScript,PYTHON,C,C++"
          />
        </FormGroup>
        <FormHelperText>{helper.course}</FormHelperText>
      </FormControl>
        </Paper>
        <Paper elevation={10} >
            <div>
             <h3>Do you have any previous experience</h3>
            <TextField
            required
            error={bolli.bol}
            value={value}
          label="Yes/No"
          helperText={helper.bol}
          name="bol"
        />
        </div>
        <div>
        <FormControl component="fieldset">
      <RadioGroup aria-label="experience" name="Experience" value={value} onChange={Handu}>
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
    </div>
        </Paper>
        <Paper elevation={10} >
             <h3>About your experience on this course</h3>
            <TextField
          label="Experience"
          helperText="(Optional)"
        />
        </Paper>
        <Paper elevation={10}>
            <h3>Add your project file</h3>
            <Input helperText="(Optional)" type="file">Add file</Input>
        </Paper>
        <Button onClick={fisher} disabled={ham} color="secondary" variant="contained">Submit</Button>
        </div>}
        {lt && <div>
          <Paper>
            <h1>KGEC Internship</h1>
            <Typography>Your response has been recorded. Thanks for responding. You are now directly connected with the KGEC IIP Cell.
              Wish you have a great Internship and hope you enjoy it. Want to add new response.
            </Typography>
            <Button onClick={wing}  color='primary'>New Response</Button>
          </Paper>
          </div>
          }
        </div>
    )
}
export default Doc